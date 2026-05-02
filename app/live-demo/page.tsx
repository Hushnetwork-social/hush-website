"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  ExternalLink,
  Info,
  Loader2,
  MessageSquareText,
  MonitorDown,
  Vote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import {
  PageFooter,
  ProductIcon,
  SectionHeader,
  SiteBackground,
  Surface,
} from "@/components/Marketing";

const WindowsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M0 3.449 9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
  </svg>
);

const AndroidIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.523 15.341a.996.996 0 0 1-.998-.999c0-.548.45-.998.998-.998.55 0 1 .45 1 .998a1 1 0 0 1-1 .999m-11.046 0a.996.996 0 0 1-.998-.999c0-.548.45-.998.998-.998.55 0 1 .45 1 .998a1 1 0 0 1-1 .999m11.405-6.016 1.991-3.452a.416.416 0 0 0-.152-.567.416.416 0 0 0-.568.152L17.123 8.98c-1.467-.67-3.113-1.044-4.864-1.044-1.752 0-3.397.374-4.865 1.044L5.364 5.458a.416.416 0 0 0-.568-.152.416.416 0 0 0-.152.567l1.991 3.452C2.688 11.467 0 15.846 0 21h24c0-5.154-2.688-9.533-6.618-11.675" />
  </svg>
);

interface ReleaseInfo {
  version: string;
  url: string;
  filename: string;
  size: string;
}

interface DownloadInfo extends ReleaseInfo {
  loading: boolean;
}

interface Downloads {
  windows: DownloadInfo;
  android: DownloadInfo;
}

const FALLBACK_URL = "https://github.com/aboimpinto/HushNetwork/releases/latest";
const RELEASES_URL = "https://downloads.hushnetwork.social/releases.json";
const WEB_APP_URL = "https://chat.hushnetwork.social";

export default function LiveDemoPage() {
  const [showAndroidHelp, setShowAndroidHelp] = useState(false);
  const [downloads, setDownloads] = useState<Downloads>({
    windows: { url: FALLBACK_URL, version: "", filename: "", size: "", loading: true },
    android: { url: FALLBACK_URL, version: "", filename: "", size: "", loading: true },
  });

  useEffect(() => {
    fetch(RELEASES_URL)
      .then(res => res.json())
      .then(data => {
        setDownloads({
          windows: {
            url: data.windows?.url || FALLBACK_URL,
            version: data.windows?.version || "",
            filename: data.windows?.filename || "",
            size: data.windows?.size || "",
            loading: false,
          },
          android: {
            url: data.android?.url || FALLBACK_URL,
            version: data.android?.version || "",
            filename: data.android?.filename || "",
            size: data.android?.size || "",
            loading: false,
          },
        });
      })
      .catch(() => {
        setDownloads({
          windows: { url: FALLBACK_URL, version: "", filename: "", size: "", loading: false },
          android: { url: FALLBACK_URL, version: "", filename: "", size: "", loading: false },
        });
      });
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      <SiteBackground />
      <Navbar />

      <section className="px-6 pb-10 pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-8 flex gap-4">
              <ProductIcon product="feeds" alt="" className="h-16 w-16" />
              <ProductIcon product="social" alt="" className="h-16 w-16" />
              <ProductIcon product="voting" alt="" className="h-16 w-16" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hush-purple-light">
              Live demo
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-hush-text-primary md:text-7xl">
              Open the current HushNetwork applications.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-hush-text-primary/76 md:text-xl">
              This remains the practical entry point for the live web app and the Windows or Android
              downloads. HushFeeds! and HushSocial! are available now; HushVoting! is the product
              focus for the next public proof.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Surface className="p-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-hush-purple/14 text-hush-purple-light">
                <MessageSquareText className="h-7 w-7" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-hush-purple-light/78">
                  Web application
                </p>
                <h2 className="text-3xl font-semibold text-hush-text-primary">HushNetwork live app</h2>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-hush-text-primary/74">
              Use the live app to test the current HushNetwork product surface. It is the access
              point for HushFeeds!, HushSocial!, and the application path that HushVoting! builds
              on.
            </p>

            <a
              href={WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,#A78BFA_0%,#8B5CF6_100%)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-hush-purple/18 transition hover:-translate-y-0.5"
            >
              Open web app
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Surface>

          <Surface className="p-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-hush-purple/14 text-hush-purple-light">
                <Vote className="h-7 w-7" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-hush-purple-light/78">
                  Product focus
                </p>
                <h2 className="text-3xl font-semibold text-hush-text-primary">HushVoting!</h2>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-hush-text-primary/74">
              HushVoting! is the governed remote-voting product enabled by the same infrastructure.
              The demo route provides the download and app-access point for the connected
              HushNetwork product stack.
            </p>
          </Surface>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Downloads" title="Install the app on Windows or Android.">
            <p>
              Downloads are loaded from the release manifest when available. If the manifest cannot
              be reached, the buttons fall back to the latest GitHub release page.
            </p>
          </SectionHeader>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <DownloadCard
              icon={<WindowsIcon className="h-6 w-6" />}
              title="Windows"
              subtitle="Desktop app"
              download={downloads.windows}
              fallbackLabel="Download for Windows"
            />
            <DownloadCard
              icon={<AndroidIcon className="h-6 w-6" />}
              title="Android"
              subtitle="Mobile app"
              download={downloads.android}
              fallbackLabel="Download for Android"
            />
          </div>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setShowAndroidHelp(!showAndroidHelp)}
              className="focus-ring inline-flex items-center gap-2 rounded-lg bg-hush-dark-element/82 px-4 py-2 text-sm text-hush-text-primary/72 transition hover:bg-hush-dark-outer hover:text-hush-text-primary"
            >
              <Info className="h-4 w-4" aria-hidden="true" />
              Android installation instructions
            </button>
          </div>

          {showAndroidHelp ? (
            <Surface className="mx-auto mt-5 max-w-3xl p-6">
              <p className="font-semibold text-hush-text-primary">How to install on Android</p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6 text-hush-text-primary/72">
                <li>Download the APK file to your phone.</li>
                <li>Enable Developer Mode from Settings, About Phone, then tap Build Number 7 times.</li>
                <li>
                  Enable installation from unknown sources for your browser or file manager in
                  Special app access.
                </li>
                <li>Open the downloaded APK file and tap Install.</li>
                <li>Open the HushNetwork app and sign in to test the current services.</li>
              </ol>
              <p className="mt-4 text-xs leading-5 text-hush-text-primary/50">
                This is a beta application connected to the production HushNetwork server.
              </p>
            </Surface>
          ) : null}
        </div>
      </section>

      <PageFooter />
    </main>
  );
}

function DownloadCard({
  icon,
  title,
  subtitle,
  download,
  fallbackLabel,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  download: DownloadInfo;
  fallbackLabel: string;
}) {
  return (
    <Surface className="p-7">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-hush-purple/14 text-hush-purple-light">
          {download.loading ? <Loader2 className="h-6 w-6 animate-spin" aria-hidden="true" /> : icon}
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-hush-purple-light/78">{subtitle}</p>
          <h3 className="text-2xl font-semibold text-hush-text-primary">{title}</h3>
        </div>
      </div>
      <div className="mt-6 deep-well rounded-lg p-4 text-sm leading-6 text-hush-text-primary/72">
        {download.version ? (
          <p>
            Latest version: <span className="font-semibold text-hush-text-primary">v{download.version}</span>
          </p>
        ) : (
          <p>Latest release information will open from the release page.</p>
        )}
        {download.size ? <p className="mt-1">Size: {download.size}</p> : null}
      </div>
      <a
        href={download.url}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-hush-dark-element px-5 py-3 text-sm font-semibold text-hush-text-primary transition hover:-translate-y-0.5 hover:bg-hush-dark-outer"
      >
        {fallbackLabel}
        <MonitorDown className="h-4 w-4" aria-hidden="true" />
      </a>
    </Surface>
  );
}
