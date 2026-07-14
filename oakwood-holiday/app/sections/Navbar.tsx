"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, TreePine } from "lucide-react";
import { NAV_LINKS } from "@/app/lib/constants";
import { MagneticButton } from "@/app/components/MagneticButton";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-strong py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-2 text-white group"
              aria-label="Oakwood Holiday Home"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                <TreePine className="w-5 h-5 text-neutral-900" />
              </div>
              <span className="font-serif text-lg md:text-xl tracking-wide">
                Oakwood
              </span>
            </a>

            <ul className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors relative group py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <MagneticButton
                className="hidden md:flex bg-white text-neutral-950 rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-gold-light transition-colors"
                strength={0.15}
              >
                Plan My Holiday
              </MagneticButton>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-xl glass text-white active:scale-95 transition-transform"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-neutral-950/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col h-full p-6 max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-10">
                <a href="#" className="flex items-center gap-2 text-white">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                    <TreePine className="w-5 h-5 text-neutral-900" />
                  </div>
                  <span className="font-serif text-xl tracking-wide">
                    Oakwood
                  </span>
                </a>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-white/10 text-white active:scale-95 transition-transform"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 flex items-center">
                <ul className="space-y-5 w-full">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-4xl sm:text-5xl font-serif text-white hover:text-gold transition-colors py-2"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <MagneticButton
                  className="w-full bg-white text-neutral-950 rounded-2xl py-4 text-base font-semibold hover:bg-gold-light transition-colors"
                  strength={0.1}
                >
                  Plan My Holiday
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
