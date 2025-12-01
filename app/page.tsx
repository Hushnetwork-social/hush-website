"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Lock, Users, Coins, Shield, Zap, Globe, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [particles, setParticles] = useState<Array<{ left: string; top: string }>>([]);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const explanationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }))
    );
  }, []);

  useEffect(() => {
    // When a feature is selected, scroll to it.
    if (selectedFeature && explanationRef.current) {
      // The timeout ensures that the scroll happens after the element has started animating into the DOM.
      const timer = setTimeout(() => {
        explanationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50); // A short delay is often sufficient.
      return () => clearTimeout(timer);
    }
  }, [selectedFeature]);

  const features = [
    { icon: Lock, title: "Privacy First", desc: "End-to-end encryption", longDesc: "All communication on HushNetwork is secured with robust end-to-end encryption. Each user holds their own private keys, which never leave their device. This ensures that only the intended recipients can view messages, protecting your conversations from surveillance by any third party, including the network itself." },
    { icon: Users, title: "Decentralized", desc: "Community owned", longDesc: "HushNetwork is built on a distributed network of Block Producers and Validators, meaning there is no single central server or point of failure. This architecture makes the platform highly resilient to censorship, manipulation, and service outages, putting the power back into the hands of the community." },
    { icon: Coins, title: "Zero Fees", desc: "No transaction costs", longDesc: "Unlike most blockchain platforms that require 'gas' fees for every action, HushNetwork has zero transaction costs for core social interactions like posting content. This is made possible by our sophisticated anti-spam mechanisms and tiered system, encouraging broad participation without financial barriers." },
    { icon: Shield, title: "Data Ownership", desc: "Your content, your control", longDesc: "You have absolute control over your digital identity and content. All data is stored securely and transparently on the blockchain. You can edit, delete, or manage your posts and information at any time. This model of 'data sovereignty' prevents any central authority from altering or censoring your content." },
    { icon: Zap, title: "3s Block Time", desc: "Lightning fast", longDesc: "The network is engineered for speed. With a block time of just 3 seconds, interactions on HushNetwork feel as seamless and instantaneous as any traditional social media platform. This rapid consensus ensures a smooth, fast-paced user experience without compromising on security." },
    { icon: Globe, title: "DAO Governed", desc: "Token holder voting", longDesc: "The future of HushNetwork is shaped by its users through a Decentralized Autonomous Organization (DAO). Every holder of the HUSH token has the right to vote on proposals, from protocol upgrades to fund allocation. This creates a truly democratic and community-driven ecosystem." },
  ];

  const handleFeatureClick = (feature: any) => {
    if (selectedFeature && selectedFeature.title === feature.title) {
      setSelectedFeature(null);
    } else {
      setSelectedFeature(feature);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-hush-dark-bg via-hush-dark-outer to-hush-dark-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-float opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-float opacity-20" style={{ animationDelay: '3s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-7xl md:text-9xl font-extrabold mb-6 glow-text text-hush-purple"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: [0.8, 0.3, 0.8], y: 0 }}
            transition={{ opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }, y: { duration: 0.8 } }}
          >
            HushNetwork
          </motion.h1>
          <motion.p
            className="text-2xl md:text-4xl mb-4 text-hush-text-accent font-light"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
          >
            Your Decentralized Social Future
          </motion.p>
          <motion.p
            className="text-lg md:text-xl mb-12 text-hush-text-primary/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
          >
            Reclaim your privacy and data ownership on a blockchain-powered social network.
            <br />
            Zero fees. True ownership. Community-driven governance.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link href="/technology">
              <button className="px-12 py-4 purple-gradient text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-hush-purple/50 transform hover:scale-105 transition-all duration-300 animate-glow">
                Explore Technology
              </button>
            </Link>
            <a href="https://github.com/HushNetwork/HushNetwork/blob/main/HushNetwork.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-12 py-4 glass-morphism text-hush-text-accent text-lg font-semibold rounded-full hover:bg-hush-dark-element transform hover:scale-105 transition-all duration-300">
                Read Whitepaper
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                {features.map((feature, index) => (
                <motion.div
                    key={feature.title}
                    className="glass-morphism p-6 rounded-2xl hover:bg-hush-dark-element cursor-pointer group"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      opacity: { delay: 1 + index * 0.1, duration: 0.5 },
                      y: { delay: 1 + index * 0.1, duration: 0.5 },
                    }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleFeatureClick(feature)}
                >
                    <feature.icon className="w-12 h-12 mb-4 text-hush-purple mx-auto group-hover:text-hush-purple-light transition-colors duration-300" />
                    <h3 className="font-bold text-sm mb-2 text-hush-text-accent">{feature.title}</h3>
                    <p className="text-xs text-hush-text-primary/60">{feature.desc}</p>
                </motion.div>
                ))}
            </motion.div>
        </div>
      </section>
      
      {/* Feature Explanation Section */}
       <div ref={explanationRef} className="relative" style={{minHeight: selectedFeature ? '300px' : '0'}}>
        <AnimatePresence>
          {selectedFeature && (
            <motion.div
              className="px-6 pb-20 absolute inset-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="max-w-4xl mx-auto">
                <div className="glass-morphism p-8 rounded-3xl relative">
                  <button onClick={() => setSelectedFeature(null)} className="absolute top-4 right-4 text-hush-text-primary/50 hover:text-hush-text-accent transition-colors">
                    <X size={24} />
                  </button>
                  <div className="flex items-center mb-4">
                    <selectedFeature.icon className="w-10 h-10 mr-4 text-hush-purple flex-shrink-0" />
                    <h2 className="text-3xl font-bold text-hush-purple">{selectedFeature.title}</h2>
                  </div>
                  <p className="text-lg text-hush-text-primary/80">
                    {selectedFeature.longDesc}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-hush-purple/20 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + (i * 0.1), repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>
    </main>
  );
}
