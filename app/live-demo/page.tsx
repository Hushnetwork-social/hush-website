"use client";

import { motion } from "framer-motion";
import { HardHat, MessageSquare, ExternalLink, Info, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

// Windows icon SVG component
const WindowsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
  </svg>
);

// Android icon SVG component
const AndroidIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.341a.996.996 0 01-.998-.999c0-.548.45-.998.998-.998.55 0 1 .45 1 .998a1 1 0 01-1 .999m-11.046 0a.996.996 0 01-.998-.999c0-.548.45-.998.998-.998.55 0 1 .45 1 .998a1 1 0 01-1 .999m11.405-6.016l1.991-3.452a.416.416 0 00-.152-.567.416.416 0 00-.568.152L17.123 8.98c-1.467-.67-3.113-1.044-4.864-1.044-1.752 0-3.397.374-4.865 1.044L5.364 5.458a.416.416 0 00-.568-.152.416.416 0 00-.152.567l1.991 3.452C2.688 11.467 0 15.846 0 21h24c0-5.154-2.688-9.533-6.618-11.675"/>
  </svg>
);

interface ReleaseInfo {
  version: string;
  url: string;
  filename: string;
  size: string;
}

interface Downloads {
  windows: ReleaseInfo & { loading: boolean };
  android: ReleaseInfo & { loading: boolean };
}

const FALLBACK_URL = "https://github.com/aboimpinto/HushNetwork/releases/latest";

export default function LiveDemoPage() {
  const [showAndroidHelp, setShowAndroidHelp] = useState(false);
  const [downloads, setDownloads] = useState<Downloads>({
    windows: { url: FALLBACK_URL, version: "", filename: "", size: "", loading: true },
    android: { url: FALLBACK_URL, version: "", filename: "", size: "", loading: true }
  });

  useEffect(() => {
    fetch("https://downloads.hushnetwork.social/releases.json")
      .then(res => res.json())
      .then(data => {
        setDownloads({
          windows: {
            url: data.windows?.url || FALLBACK_URL,
            version: data.windows?.version || "",
            filename: data.windows?.filename || "",
            size: data.windows?.size || "",
            loading: false
          },
          android: {
            url: data.android?.url || FALLBACK_URL,
            version: data.android?.version || "",
            filename: data.android?.filename || "",
            size: data.android?.size || "",
            loading: false
          }
        });
      })
      .catch(err => {
        console.error("Failed to fetch releases:", err);
        setDownloads({
          windows: { url: FALLBACK_URL, version: "", filename: "", size: "", loading: false },
          android: { url: FALLBACK_URL, version: "", filename: "", size: "", loading: false }
        });
      });
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-hush-dark-bg via-hush-dark-outer to-hush-dark-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-float opacity-20" />
      </div>

      <section className="relative pt-32 pb-4 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold mb-6 glow-text text-hush-purple"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Live Demo
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-hush-text-accent font-light max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Experience the HushNetwork alpha.
          </motion.p>
        </div>
      </section>

      <section className="py-6 px-6">
        <div className="max-w-3xl mx-auto text-center">
            <motion.div
                className="glass-morphism p-8 rounded-3xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex justify-center items-center mb-6">
                    <HardHat className="w-16 h-16 text-hush-purple mr-4" />
                    <MessageSquare className="w-16 h-16 text-hush-purple" />
                </div>
                <h2 className="text-3xl font-bold text-hush-purple mb-4">Hush Feeds!</h2>
                <p className="text-hush-text-primary/80 mb-8">
                    We have a very raw but functional chat application that we are actively developing. This serves as a live demonstration of the HushNetwork&apos;s capabilities. As we are in the early stages, we are continuously fixing bugs and adding features. This chat-focused app showcases what we are building and allows you to experience the core functionalities of the network.
                </p>

                {/* Primary CTA - Open in Browser */}
                <motion.a
                  href="https://chat.hushnetwork.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 purple-gradient text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-hush-purple/50 transform hover:scale-105 transition-all duration-300 mb-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Open Hush Feeds! in Browser <ExternalLink className="w-5 h-5 ml-2" />
                </motion.a>

                {/* Divider */}
                <div className="flex items-center justify-center gap-4 my-6">
                  <div className="h-px bg-hush-text-primary/20 w-24" />
                  <span className="text-hush-text-primary/50 text-sm">or download the app</span>
                  <div className="h-px bg-hush-text-primary/20 w-24" />
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  {/* Windows Download */}
                  <motion.a
                    href={downloads.windows.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-hush-purple/50 text-hush-purple font-semibold rounded-full hover:bg-hush-purple/10 transform hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {downloads.windows.loading ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <WindowsIcon className="w-5 h-5 mr-2" />
                    )}
                    Download for Windows
                    {downloads.windows.version && (
                      <span className="ml-2 text-xs opacity-70">v{downloads.windows.version}</span>
                    )}
                  </motion.a>

                  {/* Android Download */}
                  <motion.a
                    href={downloads.android.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-hush-purple/50 text-hush-purple font-semibold rounded-full hover:bg-hush-purple/10 transform hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {downloads.android.loading ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <AndroidIcon className="w-5 h-5 mr-2" />
                    )}
                    Download for Android
                    {downloads.android.version && (
                      <span className="ml-2 text-xs opacity-70">v{downloads.android.version}</span>
                    )}
                  </motion.a>
                </div>

                {/* Android Installation Help */}
                <div className="mt-4">
                  <button
                    onClick={() => setShowAndroidHelp(!showAndroidHelp)}
                    className="inline-flex items-center text-hush-text-primary/50 text-sm hover:text-hush-purple transition-colors"
                  >
                    <Info className="w-4 h-4 mr-1" />
                    Android installation instructions
                  </button>

                  {showAndroidHelp && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 p-4 bg-hush-dark-bg/50 rounded-xl text-left text-sm text-hush-text-primary/70"
                    >
                      <p className="font-semibold text-hush-purple mb-2">How to install on Android:</p>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Download the APK file to your phone</li>
                        <li>Enable <strong>Developer Mode</strong>: Go to Settings - About Phone - tap Build Number 7 times</li>
                        <li>Enable <strong>Install from unknown sources</strong>: Settings - Apps - Special app access - Install unknown apps - Enable for your browser or file manager</li>
                        <li>Open the downloaded APK file and tap <strong>Install</strong></li>
                        <li>Open <strong>Hush Feeds</strong> and start chatting!</li>
                      </ol>
                      <p className="mt-3 text-xs text-hush-text-primary/50">
                        Note: This is a beta version. The app connects to the production HushNetwork server.
                      </p>
                    </motion.div>
                  )}
                </div>
            </motion.div>
        </div>
      </section>
    </main>
  );
}
