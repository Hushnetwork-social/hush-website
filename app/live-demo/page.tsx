"use client";

import { motion } from "framer-motion";
import { HardHat, MessageSquare, ExternalLink, Smartphone, Monitor, Download } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

type DeviceType = "android" | "ios" | "windows" | "mac" | "linux" | "unknown";

function detectDevice(): DeviceType {
  if (typeof window === "undefined") return "unknown";

  const userAgent = navigator.userAgent.toLowerCase();

  // Mobile detection
  if (/android/i.test(userAgent)) return "android";
  if (/iphone|ipad|ipod/i.test(userAgent)) return "ios";

  // Desktop detection
  if (/win/i.test(userAgent)) return "windows";
  if (/mac/i.test(userAgent)) return "mac";
  if (/linux/i.test(userAgent)) return "linux";

  return "unknown";
}

function isMobile(device: DeviceType): boolean {
  return device === "android" || device === "ios";
}

export default function LiveDemoPage() {
  const [device, setDevice] = useState<DeviceType>("unknown");

  useEffect(() => {
    setDevice(detectDevice());
  }, []);

  const getDeviceLabel = () => {
    switch (device) {
      case "android": return "Android";
      case "ios": return "iPhone";
      case "windows": return "Windows";
      case "mac": return "Mac";
      case "linux": return "Linux";
      default: return "your device";
    }
  };

  const handleInstallClick = () => {
    // TODO: Implement PWA install prompt for mobile
    // TODO: Implement Tauri download for desktop
    alert(`Download for ${getDeviceLabel()} coming soon!`);
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-hush-dark-bg via-hush-dark-outer to-hush-dark-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-float opacity-20" />
      </div>

      <section className="relative pt-32 pb-8 px-6">
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

      <section className="py-8 px-6">
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
                  <span className="text-hush-text-primary/50 text-sm">or install the app</span>
                  <div className="h-px bg-hush-text-primary/20 w-24" />
                </div>

                {/* Install/Download Button - Device Specific */}
                <motion.button
                  onClick={handleInstallClick}
                  className="inline-flex items-center px-8 py-3 border-2 border-hush-purple/50 text-hush-purple text-lg font-semibold rounded-full hover:bg-hush-purple/10 transform hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isMobile(device) ? (
                    <>
                      <Smartphone className="w-5 h-5 mr-2" />
                      Install on {getDeviceLabel()}
                    </>
                  ) : (
                    <>
                      <Monitor className="w-5 h-5 mr-2" />
                      Download for {getDeviceLabel()}
                    </>
                  )}
                </motion.button>

                <p className="text-hush-text-primary/40 text-xs mt-4">
                  {isMobile(device)
                    ? "Install as a Progressive Web App for the best mobile experience"
                    : "Download the desktop app for the best experience"
                  }
                </p>
            </motion.div>
        </div>
      </section>
    </main>
  );
}
