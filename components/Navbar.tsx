"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "text-hush-text-accent hover:text-hush-purple-light transition-colors duration-300"
      : "text-hush-text-primary/80 hover:text-hush-purple-light transition-colors duration-300";
  };

  const navLinks = [
    { href: "/technology", text: "Technology" },
    { href: "/tokenomics", text: "Tokenomics" },
    { href: "/governance", text: "Governance" },
    { href: "/private-server", text: "Private Server" },
    { href: "/investing", text: "Investing" },
    { href: "/roadmap", text: "Roadmap" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-hush-purple hover:text-hush-purple-light transition-colors duration-300">
          HushNetwork
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
              {link.text}
            </Link>
          ))}
          <Link href="/live-demo">
            <button className="px-5 py-2 purple-gradient text-white text-md font-semibold rounded-full shadow-lg hover:shadow-hush-purple/50 transform hover:scale-105 transition-all duration-300">
              Live Demo
            </button>
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <Link href="/live-demo">
            <button className="px-4 py-2 purple-gradient text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-hush-purple/50 transform hover:scale-105 transition-all duration-300">
              Live Demo
            </button>
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-hush-text-primary">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden glass-morphism">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`${getLinkClass(link.href)} block px-3 py-2 rounded-md text-base font-medium`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
