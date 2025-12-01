"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Zap, Network, Shield, Database, Activity } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

// Define Node types for clarity
type NodeType = 'bp' | 'high_validator' | 'low_validator' | 'user';
interface Node {
  id: number;
  type: NodeType;
  x: number;
  y: number;
  color: string;
  size: 'large' | 'normal' | 'small';
  connections: number[];
}

const initialNodes: Node[] = [
    // Block Producers
    { id: 1, type: 'bp', x: 30, y: 15, color: 'bg-fuchsia-500', size: 'large', connections: [2] },
    { id: 2, type: 'bp', x: 70, y: 15, color: 'bg-fuchsia-500', size: 'large', connections: [1] },
  
    // High-Rep Validators
    { id: 3, type: 'high_validator', x: 20, y: 40, color: 'bg-hush-purple-light', size: 'large', connections: [1, 4] },
    { id: 4, type: 'high_validator', x: 50, y: 45, color: 'bg-hush-purple-light', size: 'large', connections: [1, 2, 3, 5] },
    { id: 5, type: 'high_validator', x: 80, y: 40, color: 'bg-hush-purple-light', size: 'large', connections: [2, 4] },
  
    // Low-Rep Validators
    { id: 6, type: 'low_validator', x: 10, y: 65, color: 'bg-hush-purple', size: 'normal', connections: [3] },
    { id: 7, type: 'low_validator', x: 35, y: 70, color: 'bg-hush-purple', size: 'normal', connections: [4] },
    { id: 8, type: 'low_validator', x: 65, y: 70, color: 'bg-hush-purple', size: 'normal', connections: [4] },
    { id: 9, type: 'low_validator', x: 90, y: 65, color: 'bg-hush-purple', size: 'normal', connections: [5] },
  
    // Users -> Low Rep
    { id: 10, type: 'user', x: 5, y: 90, color: 'bg-gray-300', size: 'small', connections: [6] },
    { id: 11, type: 'user', x: 15, y: 95, color: 'bg-gray-300', size: 'small', connections: [6] },
    { id: 12, type: 'user', x: 25, y: 90, color: 'bg-gray-300', size: 'small', connections: [7] },
    
    // Users -> High Rep
    { id: 13, type: 'user', x: 45, y: 75, color: 'bg-gray-300', size: 'small', connections: [4] },
    { id: 14, type: 'user', x: 55, y: 75, color: 'bg-gray-300', size: 'small', connections: [4] },
  
    // Users -> Low Rep
    { id: 15, type: 'user', x: 75, y: 90, color: 'bg-gray-300', size: 'small', connections: [9] },
    { id: 16, type: 'user', x: 95, y: 95, color: 'bg-gray-300', size: 'small', connections: [9] },
    { id: 17, type: 'user', x: 85, y: 95, color: 'bg-gray-300', size: 'small', connections: [9] },
  ];

export default function TechnologyPage() {
  const [blockCount, setBlockCount] = useState(0);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [packets, setPackets] = useState<any[]>([]);
  
  useEffect(() => {
    const blockInterval = setInterval(() => setBlockCount((prev) => prev + 1), 3000);
    setNodes(initialNodes);

    const animationInterval = setInterval(() => {
        const userNodes = initialNodes.filter(n => n.type === 'user');
        const startNode = userNodes[Math.floor(Math.random() * userNodes.length)];
        
        const firstValidator = initialNodes.find(n => startNode.connections.includes(n.id) && (n.type === 'low_validator' || n.type === 'high_validator'));
        if (!firstValidator) return;
        
        const path: Node[] = [startNode, firstValidator];
        
        if (firstValidator.type === 'low_validator') {
            const highRepValidator = initialNodes.find(n => firstValidator.connections.includes(n.id) && n.type === 'high_validator');
            if (highRepValidator) {
                path.push(highRepValidator);
            }
        }
  
        const lastValidatorInPath = path[path.length - 1];
        const bpNode = initialNodes.find(n => lastValidatorInPath.connections.includes(n.id) && n.type === 'bp');
        if (bpNode) {
          path.push(bpNode);
        }
        
        let delay = 0;
        for (let i = 0; i < path.length - 1; i++) {
          const packetInfo = { from: path[i], to: path[i+1], key: Math.random() };
          setTimeout(() => {
            setPackets(current => [...current, packetInfo]);
            setTimeout(() => {
              setPackets(current => current.filter(p => p.key !== packetInfo.key));
            }, 1000);
          }, delay);
          delay += 1000;
        }
        
        setTimeout(() => {
          if(bpNode) {
              const broadcastPacket = { broadcast: bpNode, key: Math.random() };
              setPackets(current => [...current, broadcastPacket]);
              setTimeout(() => {
                  setPackets(current => current.filter(p => p.key !== broadcastPacket.key));
              }, 1500);
          }
        }, delay);
  
      }, 2500);

    return () => {
      clearInterval(blockInterval);
      clearInterval(animationInterval);
    };
  }, []);

  const techSpecs = [
    { icon: Zap, title: "3s Block Time", desc: "Lightning-fast consensus", value: "3000ms" },
    { icon: Network, title: "Proof-of-Lock", desc: "Tokens never leave your wallet", value: "PoL" },
    { icon: Shield, title: "Byzantine Fault Tolerant", desc: "Up to 33% malicious nodes", value: "BFT" },
    { icon: Database, title: "Scalable Storage", desc: "Distributed IPFS-based", value: "IPFS" },
    { icon: Activity, title: "High Throughput", desc: "Thousands of TPS", value: "1000+" },
    { icon: Cpu, title: "Smart Contracts", desc: "WebAssembly powered", value: "WASM" },
  ];

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-hush-dark-bg via-hush-dark-outer to-hush-dark-bg" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-float opacity-20" />
      </div>

      <Navbar />

      <section className="relative h-[90vh] flex items-center justify-center px-6 py-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 className="text-6xl md:text-8xl font-extrabold mb-6 glow-text text-hush-purple" initial={{ opacity: 0, y: 30 }} animate={{ opacity: [0.8, 0.3, 0.8], y: 0 }} transition={{ opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }, y: { duration: 0.8 } }}>
            Blockchain Innovation
          </motion.h1>
          <motion.p className="text-xl md:text-2xl mb-12 text-hush-text-accent font-light max-w-3xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
            Built on cutting-edge Proof-of-Lock consensus with 3-second block finality.
            Secure, scalable, and sustainable.
          </motion.p>
          <motion.div className="glass-morphism p-8 rounded-3xl max-w-md mx-auto" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <div className="text-sm text-hush-text-accent mb-2">Live Block Height</div>
            <div className="text-5xl font-bold text-hush-purple mb-2">{blockCount.toLocaleString()}</div>
            <div className="text-xs text-hush-text-primary/60">New block every 3 seconds</div>
            <motion.div className="mt-4 h-2 bg-hush-dark-element rounded-full overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.div className="h-full purple-gradient" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-hush-purple" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Decentralized Network Topology
          </motion.h2>
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-hush-text-primary/80 mb-4">
              Our topology is a meritocracy built on a dynamic reputation system:
            </p>
            <ul className="list-disc list-inside text-left inline-block space-y-1">
              <li><span className="font-semibold text-hush-text-accent">Higher reputation</span> grants more direct core network access.</li>
              <li><span className="font-semibold text-hush-text-accent">High-rep Validators</span> act as trusted hubs, connecting to Block Producers.</li>
              <li><span className="font-semibold text-hush-text-accent">Lower-rep Validators</span> connect via these hubs, ensuring a secure hierarchy.</li>
              <li>The system prioritizes reliable actors, boosting overall <span className="font-semibold text-hush-text-accent">security and integrity</span>.</li>
            </ul>
          </div>

          <div className="relative h-[28rem] glass-morphism rounded-3xl overflow-hidden mb-4 p-4">
            <svg className="absolute inset-0 w-full h-full">
              {nodes.map(node =>
                node.connections?.map((connId: number) => {
                  const targetNode = nodes.find(n => n.id === connId);
                  if (!targetNode) return null;
                  return (
                    <motion.line key={`${node.id}-${connId}`} x1={`${node.x}%`} y1={`${node.y}%`} x2={`${targetNode.x}%`} y2={`${targetNode.y}%`} stroke="rgba(167, 139, 250, 0.2)" strokeWidth="1" />
                  );
                })
              )}
            </svg>
            
            <AnimatePresence>
            {packets.map((packet) => {
              if (packet.from && packet.to) {
                return (
                  <motion.div
                    key={packet.key}
                    className="absolute w-3 h-3 bg-yellow-300 rounded-full shadow-lg"
                    initial={{ left: `calc(${packet.from.x}% - 6px)`, top: `calc(${packet.from.y}% - 6px)` }}
                    animate={{ left: `calc(${packet.to.x}% - 6px)`, top: `calc(${packet.to.y}% - 6px)` }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "linear" }}
                  />
                );
              }
              if (packet.broadcast) {
                return (
                  <motion.div
                    key={packet.key}
                    className="absolute rounded-full border-2 border-yellow-300"
                    initial={{ left: `calc(${packet.broadcast.x}% - 6px)`, top: `calc(${packet.broadcast.y}% - 6px)`, width: '12px', height: '12px', scale: 0, opacity: 0.8 }}
                    animate={{ scale: 30, opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                );
              }
              return null;
            })}
            </AnimatePresence>

            {nodes.map((node, i) => (
              <motion.div key={node.id} className={`absolute rounded-full shadow-lg ${node.color} ${node.size === 'large' ? 'w-5 h-5' : (node.size === 'normal' ? 'w-4 h-4' : 'w-3 h-3')}`} style={{ left: `calc(${node.x}% - 10px)`, top: `calc(${node.y}% - 10px)` }} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.05 }}>
              </motion.div>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-4 text-xs mb-16">
              <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-fuchsia-500 mr-2"></div>Block Producer</div>
              <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-hush-purple-light mr-2"></div>High-Rep Validator</div>
              <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-hush-purple mr-2"></div>Low-Rep Validator</div>
              <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>User</div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div className="glass-morphism p-8 rounded-3xl" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-bold text-hush-purple mb-4">Block Producers</h3>
              <p className="text-hush-text-primary/80 mb-4">
                The architects of the blockchain. Block Producers are selected based on a combined score of locked HUSH and reputation. They are responsible for retrieving validated transactions from the Memory Pool and assembling them into new blocks.
              </p>
              <ul className="space-y-2 text-hush-text-accent">
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-hush-purple rounded-full" />Ranking based on Locked HUSH and Reputation</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-hush-purple rounded-full" />Propose blocks every 3 seconds</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-hush-purple rounded-full" />Earn block rewards for their service</li>
              </ul>
            </motion.div>
            <motion.div className="glass-morphism p-8 rounded-3xl" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-bold text-hush-purple mb-4">Validators</h3>
              <p className="text-hush-text-primary/80 mb-4">
                The guardians of the network. Validators, also ranked by locked HUSH and reputation, scrutinize transactions, validate them, and place them in the Memory Pool for Block Producers. They also verify the blocks proposed by Block Producers to ensure consensus.
              </p>
              <ul className="space-y-2 text-hush-text-accent">
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-hush-purple rounded-full" />Ranking based on Locked HUSH and Reputation</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-hush-purple rounded-full" />Validate transactions and blocks</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-hush-purple rounded-full" />Add transactions to the Memory Pool</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-hush-purple rounded-full" />Earn validation rewards</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-hush-purple" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Technical Specifications
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {techSpecs.map((spec, index) => (
              <motion.div key={spec.title} className="glass-morphism p-6 rounded-2xl hover:bg-hush-dark-element cursor-pointer group" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} whileHover={{ y: -10, scale: 1.05 }}>
                <spec.icon className="w-12 h-12 mb-4 text-hush-purple mx-auto group-hover:text-hush-purple-light transition-colors duration-300" />
                <h3 className="font-bold text-lg mb-2 text-hush-text-accent text-center">{spec.title}</h3>
                <p className="text-xs text-hush-text-primary/60 text-center mb-2">{spec.desc}</p>
                <div className="text-2xl font-bold text-hush-purple text-center">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-hush-purple" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            What is Proof-of-Lock?
          </motion.h2>
          <div className="max-w-3xl mx-auto glass-morphism p-8 rounded-3xl">
            <p className="text-hush-text-primary/80 mb-4">
              Proof-of-Lock (PoL) is an evolution of Proof-of-Stake (PoS). Instead of sending your tokens to a staking contract, your HUSH tokens are simply 'locked' within your own wallet.
            </p>
            <p className="text-hush-text-primary/80">
              The network keeps track of these locked tokens, preventing them from being transferred. This allows you to participate in securing the network and earning rewards without your assets ever leaving your custody, providing a higher degree of security and user control. A Validator that validates a transaction over the locked limit will have their reputation highly dropped.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 mb-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-hush-purple" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Consensus Flow
          </motion.h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Block Proposal", desc: "Block Producer creates and broadcasts a new block" },
              { step: "2", title: "Validation", desc: "Validators verify the block contents and signatures" },
              { step: "3", title: "Voting", desc: "Validators vote to accept or reject the block" },
              { step: "4", title: "Finality", desc: "Block is finalized after receiving 2/3+ validator votes" },
            ].map((item, index) => (
              <motion.div key={item.step} className="glass-morphism p-6 rounded-2xl flex items-center gap-6" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2, duration: 0.6 }}>
                <div className="flex-shrink-0 w-16 h-16 bg-hush-purple rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-hush-purple mb-1">{item.title}</h3>
                  <p className="text-hush-text-primary/80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-hush-dark-element/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-hush-purple" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            A Three-Tier System of Trust
          </motion.h2>
          <div className="grid lg:grid-cols-1 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="p-8 glass-morphism rounded-3xl h-full">
                <h3 className="2xl font-bold text-hush-purple mb-4">Tier 1: Block Producers</h3>
                <p className="text-hush-text-primary/80">
                  The top-ranked consensus members responsible for creating and adding new blocks to the blockchain. Their rank and selection are heavily influenced by their performance, locked HUSH, and, most importantly, their Reputation Score.
                </p>
              </div>
            </motion.div>
            <div className="text-5xl text-hush-purple/50 my-4">↓</div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="p-8 glass-morphism rounded-3xl h-full">
                <h3 className="text-2xl font-bold text-hush-purple mb-4">Tier 2: Validators</h3>
                <p className="text-hush-text-primary/80">
                  The gatekeepers of the network. Validators check, verify, and approve transactions before they reach the Block Producers. They build their reputation through accuracy and diligence, with higher reputation leading to greater trust and influence.
                </p>
              </div>
            </motion.div>
            <div className="text-5xl text-hush-purple/50 my-4">↓</div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
               <div className="p-8 glass-morphism rounded-3xl h-full">
                <h3 className="text-2xl font-bold text-hush-purple mb-4">Tier 3: Users & Accountability</h3>
                <p className="text-hush-text-primary/80">
                  All participants are accountable. The system incentivizes honesty through a unique "checks and balances" model: making a <span className="text-hush-text-accent">false accusation</span> penalizes the accuser, while <span className="text-hush-text-accent">failing to report a true issue</span> penalizes a Validator. This ensures all actors work towards the health and integrity of the network.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}