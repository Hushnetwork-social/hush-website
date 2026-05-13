"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";

type FormState = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    setState("sending");
    setFeedback("");

    const payload = {
      email: formData.get("email"),
      name: formData.get("name"),
      organization: formData.get("organization"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        setState("error");
        setFeedback(data?.message || "The message could not be sent right now.");
        return;
      }

      form.reset();
      setState("sent");
      setFeedback("Your request was sent. We will reply to the email address you provided.");
    } catch {
      setState("error");
      setFeedback("The message could not be sent right now.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="quiet-surface rounded-lg p-6 shadow-xl shadow-black/16">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-hush-text-primary">Email address</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            maxLength={254}
            className="mt-2 w-full rounded-lg bg-hush-dark-well px-4 py-3 text-sm text-hush-text-primary outline-none placeholder:text-hush-text-primary/36 focus-ring"
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-hush-text-primary">Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            maxLength={120}
            className="mt-2 w-full rounded-lg bg-hush-dark-well px-4 py-3 text-sm text-hush-text-primary outline-none placeholder:text-hush-text-primary/36 focus-ring"
            placeholder="Your name"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-semibold text-hush-text-primary">Organization</span>
        <input
          type="text"
          name="organization"
          autoComplete="organization"
          maxLength={160}
          className="mt-2 w-full rounded-lg bg-hush-dark-well px-4 py-3 text-sm text-hush-text-primary outline-none placeholder:text-hush-text-primary/36 focus-ring"
          placeholder="Association, club, cooperative, NGO, federation, or company"
        />
      </label>

      <label className="sr-only" aria-hidden="true">
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="mt-4 block">
        <span className="text-sm font-semibold text-hush-text-primary">Message</span>
        <textarea
          required
          name="message"
          minLength={20}
          maxLength={3000}
          rows={8}
          className="mt-2 w-full resize-y rounded-lg bg-hush-dark-well px-4 py-3 text-sm leading-6 text-hush-text-primary outline-none placeholder:text-hush-text-primary/36 focus-ring"
          placeholder="Tell us what kind of vote, election, pilot, or information you want to discuss."
        />
      </label>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-hush-text-primary/56">
          To reduce spam, the form limits repeated submissions from the same browser and network.
        </p>
        <button
          type="submit"
          disabled={state === "sending" || state === "sent"}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,#A78BFA_0%,#8B5CF6_100%)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-hush-purple/18 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {state === "sending" ? (
            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : state === "sent" ? (
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4" aria-hidden="true" />
          )}
          {state === "sending" ? "Sending" : state === "sent" ? "Sent" : "Send request"}
        </button>
      </div>

      {feedback ? (
        <div
          className={`mt-5 flex gap-3 rounded-lg p-4 text-sm leading-6 ${
            state === "sent"
              ? "bg-emerald-500/12 text-emerald-100"
              : "bg-amber-500/12 text-amber-100"
          }`}
          role={state === "sent" ? "status" : "alert"}
        >
          {state === "sent" ? (
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true" />
          ) : (
            <AlertCircle className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true" />
          )}
          <p>{feedback}</p>
        </div>
      ) : null}
    </form>
  );
}
