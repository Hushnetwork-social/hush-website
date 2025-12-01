"use client";

import { motion } from "framer-motion";
import { DollarSign, Layers, Users, Puzzle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function TokenomicsPage() {

  const distributionData = [
    { name: 'Pool Allocation', value: 26.0 },
    { name: 'Seed Round', value: 15.0 },
    { name: 'Private Round', value: 20.0 },
    { name: 'Public Sale', value: 25.0 },
    { name: 'Team', value: 14.0 }, // Changed from 13.7 to 14.0
  ];
  const COLORS = ['#8B5CF6', '#A78BFA', '#C4B5FD', '#7C3AED', '#6D28D9'];

  const tiers = [
    { tier: 1, lock: '0', ads: '0%', access: 'Limited' },
    { tier: 2, lock: '500', ads: '0.5%', access: 'Full' },
    { tier: 3, lock: '1,000', ads: '1.0%', access: 'Full' },
    { tier: 4, lock: '5,000', ads: '2.5%', access: 'Full + Discount' },
    { tier: 5, lock: '10,000', ads: '5.0%', access: 'Full + Discount' },
  ];

  const appTiers = [
    { tier: 1, tps: '2,000/hr', lock: '0', validator: 'No' },
    { tier: 2, tps: '10,000/hr', lock: '1,000', validator: 'No' },
    { tier: 3, tps: '100,000/hr', lock: '5,000', validator: 'Yes (≥1)' },
    { tier: 4, tps: '1,000,000/hr', lock: '10,000', validator: 'Yes (≥3)' },
    { tier: 5, tps: 'Unlimited', lock: '50,000', validator: 'Yes (≥5)' },
  ];
  
  const creatorTiers = [
      { tier: 1, shares: '<2,000', lock: '0', revenue: '0%' },
      { tier: 2, shares: '≥2,000', lock: '1,000', revenue: '5%' },
      { tier: 3, shares: '≥10,000', lock: '5,000', revenue: '7.5%' },
      { tier: 4, shares: '≥100,000', lock: '10,000', revenue: '8.5%' },
      { tier: 5, shares: 'Unlimited', lock: '50,000', revenue: '10%' },
  ];


  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-hush-dark-bg via-hush-dark-outer to-hush-dark-bg" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-float opacity-20" />
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
            Tokenomics
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12 text-hush-text-accent font-light max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            The economic engine of the HushNetwork ecosystem, designed for sustainability, community rewards, and decentralized governance.
          </motion.p>
        </div>
      </section>

      {/* Token Utility Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
           <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-hush-purple"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            HUSH Token Utility
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, title: "Zero Fees", desc: "No fees for posting content or making transactions." },
              { icon: Layers, title: "Network Security", desc: "Lock HUSH to secure the network as a Block Producer or Validator and earn rewards.", },
              { icon: Users, title: "Governance", desc: "Vote on proposals and shape the future of the network via the DAO." },
              { icon: Puzzle, title: "Unlock Tiers", desc: "Access powerful features for users, creators, and developers by locking HUSH." },
            ].map((item, index) => (
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
                <p className="text-hush-text-primary/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Distribution Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-hush-purple"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Token Distribution
          </motion.h2>
          <div className="max-w-3xl mx-auto mb-12 text-hush-text-primary/80 text-center">
            <p className="mb-4">The HushNetwork has an initial issue of <span className="font-bold text-hush-text-accent">100 Billion HUSH tokens</span>.</p>
            <p className="mb-4">Tokens allocated to <span className="font-bold text-hush-text-accent">Pool Allocation</span> are automatically burned and added to a reward pool, which funds Block Producers and Validators with each new block.</p>
            <p>Our largest distribution is to the <span className="font-bold text-hush-text-accent">Public</span>, reflecting our commitment to decentralization and broad community ownership.</p>
          </div>
          <div className="glass-morphism p-8 rounded-3xl grid md:grid-cols-2 gap-8 items-center">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={distributionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={"80%"} label>
                    {distributionData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "rgba(35, 48, 75, 0.8)",
                      borderColor: "rgba(167, 139, 250, 0.3)",
                      borderRadius: "1rem",
                      color: "#efe8f6"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="space-y-4">
              {distributionData.map((item, index) => (
                <li key={item.name} className="flex items-center text-lg">
                  <div className="w-4 h-4 rounded-full mr-4" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                  <span className="text-hush-text-primary/80">{item.name}:</span>
                  <span className="ml-auto font-bold text-hush-text-accent">{item.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Utility of the HUSH Token Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-hush-purple"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            The Utility of the HUSH Token
          </motion.h2>

          <div className="max-w-4xl mx-auto text-center text-hush-text-primary/80 mb-16">
            <p className="mb-4">HushNetwork is a privacy-first ecosystem where users can operate with full anonymity, identified only by their address. While this provides maximum privacy, access to certain network services may be limited.</p>
            <p className="mb-4">The HUSH token is the utility fuel for the entire social ecosystem. Applications can require users to lock HUSH to unlock features. Locking is not a payment—the tokens never leave your wallet. Unlocking is flexible but designed to reward loyalty; users can either wait for a cooldown period or pay a penalty of up to 70% of the locked amount for immediate access.</p>
            <p className="mt-6 font-semibold text-hush-text-accent border-t border-hush-dark-outer pt-4">Note: The HUSH lock is cumulative. To unlock multiple features, a user must lock the total amount of HUSH required for each feature. For example, to gain full network access (500 HUSH) and also become a Tier 2 MEME Creator (1,000 HUSH), a total of 1,500 HUSH must be locked.</p>
          </div>

          {/* User Rewards and Access Table */}
          <motion.div className="glass-morphism p-8 rounded-3xl mb-12" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-hush-purple mb-4">User Rewards and Access</h3>
            <p className="text-hush-text-primary/80 mb-4">Users can earn a share of advertising revenue by locking HUSH. With zero tokens locked, you remain completely private with no ads, but network access is limited. Locking a small amount unlocks full network features and the ability to earn from the content you engage with.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="p-4">Tier</th>
                    <th className="p-4">Lock HUSH</th>
                    <th className="p-4">% of Advertise</th>
                    <th className="p-4">Access to Network</th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map((t) => (
                    <tr key={t.tier} className="border-t border-hush-dark-outer">
                      <td className="p-4 font-bold text-hush-text-accent">{t.tier}</td>
                      <td className="p-4">{t.lock}</td>
                      <td className="p-4">{t.ads}</td>
                      <td className="p-4">{t.access}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Application Tiers Table */}
          <motion.div className="glass-morphism p-8 rounded-3xl mb-12" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-hush-purple mb-4">Application Tiers</h3>
            <p className="text-hush-text-primary/80 mb-4">HUSH serves as fuel for decentralized applications. With zero locked HUSH, any app can still process up to 2,000 transactions per hour for free. To handle more users and interactions, an application must lock HUSH, increasing its transaction throughput.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="p-4">Tier</th>
                    <th className="p-4">Transactions</th>
                    <th className="p-4">Lock HUSH</th>
                    <th className="p-4">Dedicated Validator</th>
                  </tr>
                </thead>
                <tbody>
                  {appTiers.map((t) => (
                    <tr key={t.tier} className="border-t border-hush-dark-outer">
                      <td className="p-4 font-bold text-hush-text-accent">{t.tier}</td>
                      <td className="p-4">{t.tps}</td>
                      <td className="p-4">{t.lock}</td>
                      <td className="p-4">{t.validator}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* MEME Creator Tiers Table */}
          <motion.div className="glass-morphism p-8 rounded-3xl" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-hush-purple mb-4">MEME Creator Tiers</h3>
            <p className="text-hush-text-primary/80 mb-4">HushNetwork is the first social network where viral content pays the creator, not just the platform. By locking HUSH, creators can earn a percentage of the advertising revenue generated by their content. The more a MEME is shared, the more its creator earns.</p>
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="p-4">Tier</th>
                    <th className="p-4">Shares</th>
                    <th className="p-4">Lock HUSH</th>
                    <th className="p-4">Revenue Share</th>
                  </tr>
                </thead>
                <tbody>
                  {creatorTiers.map((t) => (
                    <tr key={t.tier} className="border-t border-hush-dark-outer">
                      <td className="p-4 font-bold text-hush-text-accent">{t.tier}</td>
                      <td className="p-4">{t.shares}</td>
                      <td className="p-4">{t.lock}</td>
                      <td className="p-4">{t.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
