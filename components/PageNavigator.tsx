"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/" },
  { href: "/technology" },
  { href: "/tokenomics" },
  { href: "/governance" },
  { href: "/private-server" },
  { href: "/investing" },
  { href: "/roadmap" },
  { href: "/live-demo" },
];

export default function PageNavigator() {
  const pathname = usePathname();

  const currentIndex = navLinks.findIndex(link => link.href === pathname);

  const prevLink = currentIndex > 0 ? navLinks[currentIndex - 1].href : null;
  const nextLink = currentIndex < navLinks.length - 1 ? navLinks[currentIndex + 1].href : null;

  if (currentIndex === -1) {
    // Don't show the navigator on unmatched routes, e.g. /#features scroll
    // A more robust solution might be needed if there are many such routes.
    return null;
  }

  return (
    <div className="fixed top-24 right-6 z-40">
      <div className="flex gap-2">
        <AnimatePresence>
          {prevLink && (
            <Link href={prevLink} passHref>
              <motion.div
                className="glass-morphism p-2 rounded-full cursor-pointer hover:bg-hush-dark-element"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                title="Previous Page"
              >
                <ArrowLeft className="text-hush-purple-light" />
              </motion.div>
            </Link>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {nextLink && (
            <Link href={nextLink} passHref>
              <motion.div
                className="glass-morphism p-2 rounded-full cursor-pointer hover:bg-hush-dark-element"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                title="Next Page"
              >
                <ArrowRight className="text-hush-purple-light" />
              </motion.div>
            </Link>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
