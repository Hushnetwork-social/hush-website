"use client";

import { motion } from "framer-motion";
import { Server, Shield, Network, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function PrivateServerPage() {

  const advantages = [
    { icon: Shield, title: "Enhanced Security", description: "Implement advanced security measures like multi-factor authentication and encryption." },
    { icon: Server, title: "Isolation", description: "Isolate transactions and data from the public HushNetwork, preventing unauthorized access." },
    { icon: Network, title: "Scalability", description: "Scale the network to meet specific organizational needs, enabling faster transaction processing." },
    { icon: Settings, title: "Customization", description: "Customize the network with specific rules, smart contracts, and validation procedures." },
  ];

  const tiers = [
    { tier: 1, lock: '--- (*)', users: '10', tps: '2,000/hr' },
    { tier: 2, lock: '1,000', users: '100', tps: '10,000/hr' },
    { tier: 3, lock: '5,000', users: '1,000', tps: '50,000/hr' },
    { tier: 4, lock: '10,000', users: 'Unlimited', tps: 'Unlimited' },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-hush-dark-bg via-hush-dark-outer to-hush-dark-bg" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-float opacity-20" />
      </div>

      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-extrabold mb-6 glow-text text-hush-purple"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Private Networks
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-hush-text-accent font-light max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Tailor your own blockchain environment with the security and privacy of HushNetwork.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-hush-purple"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Your Own Decentralized Ecosystem
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-hush-text-primary/80 mb-4">
                Private networks offer a way for organizations and individuals to leverage the Hush network's security and privacy features while tailoring the environment to their specific needs. By creating a private network, users can isolate their transactions and data from the public Hush network, gaining greater control and customization.
              </p>
              <p className="text-hush-text-primary/80">
                Any organization or individual can establish a private network using the Hush software. This involves setting up their own network of Validators and Block Producers, giving them full control over the network's infrastructure and governance.
              </p>
            </motion.div>
            <motion.div className="grid grid-cols-2 gap-4" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="glass-morphism p-6 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-hush-text-accent mb-2">Online Networks</h3>
                <p className="text-sm">Accessible from anywhere, ideal for geographically dispersed teams.</p>
              </div>
              <div className="glass-morphism p-6 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-hush-text-accent mb-2">Offline Networks</h3>
                <p className="text-sm">Restricted to a specific network (LAN/VPN) for an additional layer of isolation.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-hush-dark-element/30">
        <div className="max-w-7xl mx-auto">
           <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-hush-purple"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Advantages of Private Networks
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <motion.div 
                key={item.title}
                className="glass-morphism p-8 rounded-3xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <item.icon className="w-12 h-12 mb-4 text-hush-purple" />
                <h3 className="text-2xl font-bold text-hush-text-accent mb-2">{item.title}</h3>
                <p className="text-hush-text-primary/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-hush-purple"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Infrastructure and Locked HUSH
          </motion.h2>
          <motion.div className="glass-morphism p-8 rounded-3xl mb-12" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-hush-text-primary/80 mb-4 text-center">To operate a private network, a certain amount of HUSH must be locked. The specific amount determines the tier of the private network, which in turn dictates the network's capacity and features.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="p-4">Tier</th>
                    <th className="p-4">Lock HUSH</th>
                    <th className="p-4">Users Allowed</th>
                    <th className="p-4">Transactions per Hour</th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map((t) => (
                    <tr key={t.tier} className="border-t border-hush-dark-outer">
                      <td className="p-4 font-bold text-hush-text-accent">{t.tier}</td>
                      <td className="p-4">{t.lock}</td>
                      <td className="p-4">{t.users}</td>
                      <td className="p-4">{t.tps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-hush-text-primary/70 text-sm mt-4 text-center">
              * The "Lock HUSH" values are indicative and subject to change based on marketing strategies and network evolution.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
