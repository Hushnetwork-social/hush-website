"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Lock, PieChart as PieChartIcon } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function InvestingPage() {

  const rounds = [
    { name: 'Seed Round', allocation: '15.0%', price: '$0.015', raised: '$2.25M' },
    { name: 'Private Round', allocation: '20.0%', price: '$0.03', raised: '$6.0M' },
    { name: 'Public Sale', allocation: '25.0%', price: '$0.05', raised: '$12.5M' },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-hush-dark-bg via-hush-dark-outer to-hush-dark-bg" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-float opacity-20" />
      </div>

      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-extrabold mb-6 glow-text text-hush-purple"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Investing in HushNetwork
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-hush-text-accent font-light max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Join us in building the future of decentralized social media.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-hush-purple"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          >
            Investment Rounds
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {rounds.map((round, index) => (
              <motion.div 
                key={round.name}
                className="glass-morphism p-8 rounded-3xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-hush-text-accent mb-4">{round.name}</h3>
                <div className="space-y-2 text-lg">
                  <div className="flex justify-between">
                    <span className="text-hush-text-primary/80">Allocation:</span>
                    <span className="font-semibold">{round.allocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-hush-text-primary/80">Price per token:</span>
                    <span className="font-semibold">{round.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-hush-text-primary/80">Total raised:</span>
                    <span className="font-semibold">{round.raised}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="mt-16 text-center text-hush-text-primary/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p>Based on the estimation of rewards, the genesis block will be reserved to guarantee 5 years of rewards.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-hush-dark-element/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-hush-purple"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Become a Block Producer
          </motion.h2>
          <motion.div 
            className="glass-morphism p-8 rounded-3xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-hush-text-primary/80 mb-6">
              In HushNetwork, <strong className="text-hush-text-accent">reputation is the ultimate currency</strong>. However, combining a strong reputation with locked HUSH tokens is the key to climbing the ranks and securing a top position as a Block Producer.
            </p>
            <p className="text-lg text-hush-text-primary/80 mb-6">
              The top-ranked Block Producer has a significant role, generating just over <strong className="text-hush-text-accent">40% of the 28,800 blocks</strong> created daily. For each block produced, they receive a reward of <strong className="text-hush-text-accent">4 HUSH tokens</strong>.
            </p>
            <div className="bg-hush-dark-bg/50 p-6 rounded-2xl text-center my-6">
              <p className="text-xl text-hush-text-primary mb-2">Potential Daily Earnings for a Top Block Producer:</p>
              <p className="text-3xl font-bold text-hush-purple glow-text mb-2">~57,600 HUSH</p>
              <p className="text-hush-text-accent">
                (≈ 11,520 blocks/day * 4 HUSH/block)
              </p>
              <p className="text-lg text-hush-text-primary/80 mt-2">
                At a public sale value of $0.05 per HUSH, this represents approximately <strong className="text-hush-text-accent">$2,880 per day</strong>.
              </p>
            </div>
            <p className="text-md text-hush-text-primary/70 text-center">
              These rewards are designed to cover infrastructure costs and incentivize good actors to maintain the health and integrity of the HushNetwork.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
