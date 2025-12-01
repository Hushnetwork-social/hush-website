"use client";

import { motion } from "framer-motion";
import { HardHat, MessageSquare, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";


export default function LiveDemoPage() {

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-hush-dark-bg via-hush-dark-outer to-hush-dark-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-float opacity-20" />
      </div>

      <section className="relative pt-40 pb-20 px-6">
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
            className="text-xl md:text-2xl mb-12 text-hush-text-accent font-light max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Experience the HushNetwork alpha.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6">
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
                <h2 className="text-3xl font-bold text-hush-purple mb-4">A Raw and Functional Chat App</h2>
                <p className="text-hush-text-primary/80 mb-6">
                    We have a very raw but functional chat application that we are actively developing. This serves as a live demonstration of the HushNetwork's capabilities. As we are in the early stages, we are continuously fixing bugs and adding features. This chat-focused app showcases what we are building and allows you to experience the core functionalities of the network.
                </p>
                <motion.a
                  href="https://github.com/HushNetwork/hush-client"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 purple-gradient text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-hush-purple/50 transform hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Go to Chat App <ExternalLink className="w-5 h-5 ml-2" />
                </motion.a>
            </motion.div>
        </div>
      </section>
    </main>
  );
}
