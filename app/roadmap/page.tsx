"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Shield, BookOpen, Crown, Hourglass, Sparkles, Rocket, Users, Lock, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useRef } from "react";

export default function RoadmapPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const eras = [
    {
      id: "chaos",
      title: "Era of Chaos",
      subtitle: "Launch of the Blockchain",
      description: "The genesis of HushNetwork. Establishing the foundation, gathering early adopters, and igniting the spark of decentralization.",
      icon: Zap,
      color: "from-orange-500 via-red-500 to-purple-600",
      imageSrc: "/images/roadmap/chaos.jpg", // Added image source
      steps: [
        { title: "Genesis", desc: "Platform launch, basic functionality" },
        { title: "Titans", desc: "Early adopters, community building" },
        { title: "Olympians", desc: "Core features established, user growth" },
        { title: "Prometheus", desc: "Decentralization and governance implemented" },
        { title: "Pandora", desc: "Expansion of features and user base" }
      ],
      prompt: "A chaotic yet beautiful digital big bang, glowing nodes connecting in a dark void, sparks of raw energy, abstract representation of creation, cyberpunk aesthetic, orange and red hues, 8k resolution, 3d render."
    },
    {
      id: "heroes",
      title: "Era of Heroes",
      subtitle: "Raising of Heroes",
      description: "Strengthening the network. Scaling solutions, enhanced security, and the rise of community champions.",
      icon: Shield,
      color: "from-blue-500 via-cyan-500 to-teal-400",
      imageSrc: "/images/roadmap/heroes.jpg", // Added image source
      steps: [
        { title: "Heracles", desc: "Scaling solutions and performance enhancements" },
        { title: "Theseus", desc: "Integration with external platforms and services" },
        { title: "Perseus", desc: "Enhanced security and privacy measures" },
        { title: "Achilles", desc: "Community-driven development and governance" },
        { title: "Odysseus", desc: "Global reach and mainstream adoption" }
      ],
      prompt: "A futuristic digital citadel, shining shields and glowing data streams, grand architecture, heroic statues made of light, blue and cyan neon atmosphere, highly detailed, cinematic lighting."
    },
    {
      id: "wisdom",
      title: "Era of Wisdom",
      subtitle: "Bringing Content Creators",
      description: "Enriching the ecosystem. Focus on knowledge, creativity, communication, and gamification.",
      icon: BookOpen,
      color: "from-emerald-400 via-green-500 to-lime-600",
      imageSrc: "/images/roadmap/wisdom.jpg", // Added image source
      steps: [
        { title: "Athena", desc: "Development of educational and knowledge-sharing tools" },
        { title: "Apollo", desc: "Integration of creative and artistic platforms" },
        { title: "Hermes", desc: "Enhanced communication and collaboration features" },
        { title: "Dionysus", desc: "Gamification and social interaction features" },
        { title: "Hephaestus", desc: "Innovation and development of new technologies" }
      ],
      prompt: "A digital library of Alexandria mixed with a futuristic art gallery, oating holograms of art and knowledge, lush digital greenery, golden geometric shapes, serene and enlightened atmosphere, green and gold palette."
    },
    {
      id: "empire",
      title: "Era of Empire",
      subtitle: "Governance",
      description: "Solidifying the structure. Establishing robust governance, expanding into new markets, and ensuring sustainability.",
      icon: Crown,
      color: "from-yellow-400 via-amber-500 to-orange-600",
      imageSrc: "/images/roadmap/empire.jpg", // Added image source
      steps: [
        { title: "Zeus", desc: "Establishment of a robust governance system" },
        { title: "Hera", desc: "Community partnerships and collaborations" },
        { title: "Poseidon", desc: "Expansion into new markets and demographics" },
        { title: "Hades", desc: "Integration of decentralized finance (DeFi) features" },
        { title: "Demeter", desc: "Sustainability and long-term growth" }
      ],
      prompt: "A majestic digital throne room, interconnected networks spanning a globe, golden light beams connecting continents, structure and order, grand scale, amber and gold lighting, epic composition."
    },
    {
      id: "legacy",
      title: "Era of Legacy",
      subtitle: "Long-term Impact",
      description: "The enduring future. Community ownership, social impact, and continuous evolution.",
      icon: Hourglass,
      color: "from-purple-500 via-violet-500 to-indigo-600",
      imageSrc: "/images/roadmap/legacy.png", // Added image source
      steps: [
        { title: "Hestia", desc: "Community ownership and self-governance" },
        { title: "Tyche", desc: "Social impact and positive change initiatives" },
        { title: "Nemesis", desc: "Ensuring fairness and accountability" },
        { title: "Eros", desc: "Fostering connection and community building" },
        { title: "Chronos", desc: "Continuous improvement and evolution" }
      ],
      prompt: "A timeless ethereal landscape, infinite clockwork mechanisms merging with organic digital life, deep purple and violet nebulae, sense of eternity and harmony, surreal masterpiece."
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-hush-dark-bg text-hush-text-primary overflow-hidden">
      <Navbar />
      
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-hush-dark-element via-hush-dark-bg to-black opacity-50" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      {/* Hero Header */}
      <section className="relative z-10 pt-40 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 glow-text text-transparent bg-clip-text bg-gradient-to-r from-hush-purple via-white to-hush-purple-light">
            The Road Ahead
          </h1>
          <p className="text-xl md:text-2xl text-hush-text-primary/80 max-w-3xl mx-auto font-light">
            Our journey through the eras. From chaos to legacy, building the future of decentralized social networking.
          </p>
        </motion.div>
      </section>

      {/* Eras Timeline */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-40">
        {/* Central Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-hush-purple/30 to-transparent -translate-x-1/2 rounded-full" />

        {eras.map((era, index) => {
          const isEven = index % 2 === 0;
          return (
            <EraSection key={era.id} era={era} index={index} isEven={isEven} />
          );
        })}
      </div>
    </main>
  );
}

function EraSection({ era, index, isEven }: { era: any, index: number, isEven: boolean }) {
  return (
    <motion.div 
      className={`relative mb-32 md:mb-48 flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Timeline Dot */}
      <div className="hidden md:flex absolute left-1/2 top-12 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-hush-dark-bg border-4 border-hush-purple z-20 shadow-[0_0_20px_rgba(167,139,250,0.5)]">
        <era.icon className="w-5 h-5 text-white" />
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 px-4 md:px-12 mb-8 md:mb-0">
        <div className={`glass-morphism p-8 rounded-3xl border-t border-l border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors duration-500 ${isEven ? 'text-left' : 'text-left md:text-right'}`}>
          
          {/* Background Gradient Blob */}
          <div className={`absolute -inset-full opacity-20 blur-3xl bg-gradient-to-br ${era.color} transition-opacity duration-700 group-hover:opacity-30`} />

          <div className="relative z-10">
            <div className={`flex items-center gap-3 mb-2 ${isEven ? '' : 'md:flex-row-reverse'}`}>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${era.color} text-white shadow-lg`}>
                Era {index + 1}
              </span>
              <h3 className="text-hush-text-accent text-sm font-medium tracking-widest uppercase">{era.subtitle}</h3>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{era.title}</h2>
            <p className="text-lg text-hush-text-primary/80 mb-8 leading-relaxed">
              {era.description}
            </p>

            <ul className={`space-y-4 ${isEven ? '' : 'md:flex-row-reverse'}`}>
              {era.steps.map((step: any, i: number) => (
                <motion.li 
                  key={step.title}
                  className={`flex items-start gap-4 ${isEven ? '' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-br ${era.color} flex-shrink-0`} />
                  <div>
                    <strong className="text-white block">{step.title}</strong>
                    <span className="text-hush-text-primary/60 text-sm">{step.desc}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Image/Visual Side */}
      <div className="w-full md:w-1/2 px-4 md:px-12 relative group">
        <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-morphism border border-white/5 relative shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
            {era.imageSrc ? (
                <img src={era.imageSrc} alt={`${era.title} visual`} className="w-full h-full object-cover" />
            ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${era.color} opacity-20`} />
            )}
            <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="w-16 h-16 mx-auto mb-4 text-white/50" />
                    <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">AI Image Placeholder</p>
                    <p className="text-[10px] text-white/30 max-w-xs mx-auto italic">"{era.prompt}"</p>
                </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        
        {/* Connecting Line for Mobile */}
        <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-hush-purple/20 to-transparent -z-10" />
      </div>
    </motion.div>
  );
}
