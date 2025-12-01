"use client";

import { motion } from "framer-motion";
import { Users, Vote, GitPullRequest, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function GovernancePage() {

  const responsibilities = [
    { title: "Network Integrity", description: "Upholding the rules and ensuring fairness, transparency, and accountability for all participants." },
    { title: "Network-Wide Issues", description: "Addressing protocol upgrades, security vulnerabilities, and disputes between participants." },
    { title: "Action Against Bad Actors", description: "Imposing penalties, revoking privileges, or blacklisting users who violate rules." },
    { title: "Handling Illegal Content", description: "Marking content as deleted/hidden and cooperating with law enforcement when necessary." }
  ];

  const lifecycle = [
    { step: "1", title: "Draft", desc: "A user crafts a proposal to improve the network." },
    { step: "2", title: "Submission", desc: "The author locks HUSH to formally submit the proposal to the DAO." },
    { step: "3", title: "Voting", desc: "The community of HUSH holders votes on the proposal." },
    { step: "4", title: "Implementation", desc: "Approved proposals are implemented into the network's protocol." },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-hush-dark-bg via-hush-dark-outer to-hush-dark-bg" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-float opacity-20" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold mb-6 glow-text text-hush-purple"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            DAO Governance
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12 text-hush-text-accent font-light max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Power to the people. HushNetwork is governed by its community, for its community.
          </motion.p>
        </div>
      </section>

      {/* What is the DAO Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <h2 className="text-4xl font-bold text-hush-purple mb-4">Who is the DAO?</h2>
                <p className="text-hush-text-primary/80 mb-4">
                    The HushNetwork DAO (Decentralized Autonomous Organization) operates on a simple principle: <span className="text-hush-text-accent font-bold">one HUSH token, one vote</span>.
                </p>
                <p className="text-hush-text-primary/80">
                    Anyone holding HUSH is automatically a member, giving every token holder a direct voice in the governance and future of the network. This ensures that development is guided by the collective will of its users.
                </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
                <Users className="w-48 h-48 text-hush-purple/50 mx-auto" />
            </motion.div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-20 px-6 bg-hush-dark-element/30">
        <div className="max-w-7xl mx-auto">
           <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-hush-purple"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            DAO Responsibilities
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {responsibilities.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-morphism p-8 rounded-3xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-hush-text-accent mb-2">{item.title}</h3>
                <p className="text-hush-text-primary/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Proposal Lifecycle Section */}
      <section className="py-20 px-6 mb-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-hush-purple"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Proposal Lifecycle
          </motion.h2>

          <div className="space-y-6">
            {lifecycle.map((item, index) => (
              <motion.div
                key={item.step}
                className="glass-morphism p-6 rounded-2xl flex items-center gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-hush-purple rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-hush-purple mb-1">{item.title}</h3>
                  <p className="text-hush-text-primary/80">{item.desc}</p>
                </div>
                {index < 3 && (
                  <motion.div
                    className="ml-auto text-hush-purple text-3xl"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                  >
                    ↓
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
