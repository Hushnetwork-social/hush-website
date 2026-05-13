"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ProductIcon } from "@/components/Marketing";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;

    return isActive
      ? "rounded-lg bg-hush-dark-element px-3 py-2 text-hush-text-accent transition-colors duration-200"
      : "rounded-lg px-3 py-2 text-hush-text-primary/78 transition-colors duration-200 hover:bg-hush-dark-element/72 hover:text-hush-purple-light";
  };

  const navLinks = [
    { href: "/hush-voting", text: "HushVoting!" },
    { href: "/services", text: "Services" },
    { href: "/technology", text: "Infrastructure" },
    { href: "/private-server", text: "Private Networks" },
    { href: "/roadmap", text: "Roadmap" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-hush-dark-bg/84 shadow-xl shadow-black/18 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3 rounded-lg text-hush-text-primary transition-colors duration-200 hover:text-hush-purple-light"
          onClick={() => setIsOpen(false)}
        >
          <ProductIcon product="network" alt="HushNetwork icon" className="h-9 w-9" />
          <span className="text-xl font-semibold">HushNetwork</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
              {link.text}
            </Link>
          ))}
          <Link href="/contact">
            <span className="ml-3 inline-flex rounded-lg bg-[linear-gradient(135deg,#A78BFA_0%,#8B5CF6_100%)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-hush-purple/18 transition hover:-translate-y-0.5 focus-ring">
              Request Pilot
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <Link href="/contact">
            <span className="inline-flex rounded-lg bg-[linear-gradient(135deg,#A78BFA_0%,#8B5CF6_100%)] px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-hush-purple/18">
              Pilot
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="focus-ring rounded-lg bg-hush-dark-element p-2 text-hush-text-primary"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="bg-hush-dark-bg/96 pb-4 shadow-xl shadow-black/20 md:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 pt-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`${getLinkClass(link.href)} block text-base font-medium`}
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
