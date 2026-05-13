import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  email?: unknown;
  message?: unknown;
  name?: unknown;
  organization?: unknown;
  website?: unknown;
};

const subject = "HushVoting! Request for information";
const cookieName = "hush_contact_recent";
const cookieCooldownSeconds = 60 * 60;
const rateLimitWindowMs = 60 * 60 * 1000;
const maxRequestsPerWindow = 3;
const ipBuckets = new Map<string, { count: number; resetAt: number }>();

function cleanSingleLine(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/[\r\n\t]+/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function cleanMessage(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, 3000);
}

function isValidEmail(value: string) {
  if (value.length < 6 || value.length > 254) {
    return false;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getClientKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  const ip = forwardedFor || realIp || "unknown";

  return crypto.createHash("sha256").update(ip).digest("hex");
}

function isRateLimited(clientKey: string) {
  const now = Date.now();
  const bucket = ipBuckets.get(clientKey);

  if (!bucket || bucket.resetAt <= now) {
    ipBuckets.set(clientKey, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  bucket.count += 1;
  return bucket.count > maxRequestsPerWindow;
}

function getSmtpConfig() {
  const host = process.env.CONTACT_SMTP_HOST;
  const port = Number(process.env.CONTACT_SMTP_PORT || "587");
  const user = process.env.CONTACT_SMTP_USER;
  const pass = process.env.CONTACT_SMTP_PASS;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  const secure = process.env.CONTACT_SMTP_SECURE === "true";

  if (!host || !Number.isFinite(port) || !from || !to) {
    return null;
  }

  return {
    host,
    port,
    secure,
    auth: user && pass ? { user, pass } : undefined,
    from,
    to,
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  if (request.cookies.has(cookieName)) {
    return NextResponse.json(
      { message: "Please wait before sending another request." },
      { status: 429 },
    );
  }

  const clientKey = getClientKey(request);
  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      { message: "Please wait before sending another request." },
      { status: 429 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const honeypot = cleanSingleLine(payload.website, 200);
  if (honeypot) {
    const response = NextResponse.json({ message: "Request received." }, { status: 200 });
    response.cookies.set(cookieName, "1", {
      httpOnly: true,
      maxAge: cookieCooldownSeconds,
      path: "/",
      sameSite: "lax",
      secure: true,
    });
    return response;
  }

  const email = cleanSingleLine(payload.email, 254).toLowerCase();
  const message = cleanMessage(payload.message);
  const name = cleanSingleLine(payload.name, 120);
  const organization = cleanSingleLine(payload.organization, 160);

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
  }

  if (message.length < 20) {
    return NextResponse.json(
      { message: "Write a short message with at least 20 characters." },
      { status: 400 },
    );
  }

  const smtpConfig = getSmtpConfig();
  if (!smtpConfig) {
    return NextResponse.json(
      { message: "The contact channel is temporarily unavailable." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    auth: smtpConfig.auth,
  });

  const userAgent = cleanSingleLine(request.headers.get("user-agent"), 300);
  const text = [
    subject,
    "",
    `From: ${email}`,
    name ? `Name: ${name}` : "",
    organization ? `Organization: ${organization}` : "",
    "",
    "Message:",
    message,
    "",
    `Client key: ${clientKey}`,
    userAgent ? `User-Agent: ${userAgent}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>${escapeHtml(subject)}</h2>
    <p><strong>From:</strong> ${escapeHtml(email)}</p>
    ${name ? `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` : ""}
    ${organization ? `<p><strong>Organization:</strong> ${escapeHtml(organization)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    <hr />
    <p><strong>Client key:</strong> ${escapeHtml(clientKey)}</p>
    ${userAgent ? `<p><strong>User-Agent:</strong> ${escapeHtml(userAgent)}</p>` : ""}
  `;

  try {
    await transporter.sendMail({
      from: smtpConfig.from,
      to: smtpConfig.to,
      replyTo: email,
      subject,
      text,
      html,
    });
  } catch (error) {
    console.error("Contact form email failed", error);
    return NextResponse.json(
      { message: "The message could not be sent right now." },
      { status: 502 },
    );
  }

  const response = NextResponse.json({ message: "Request received." }, { status: 200 });
  response.cookies.set(cookieName, "1", {
    httpOnly: true,
    maxAge: cookieCooldownSeconds,
    path: "/",
    sameSite: "lax",
    secure: true,
  });

  return response;
}
