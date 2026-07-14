"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  TreePine,
  Camera,
  MessageCircle,
  Bird,
  Play,
  Send,
} from "lucide-react";
import { MagneticButton } from "@/app/components/MagneticButton";
import { NAV_LINKS } from "@/app/lib/constants";

const FOOTER_LINKS = {
  Company: ["About Us", "Careers", "Press", "Blog"],
  Destinations: ["Beach", "Mountains", "City", "Adventure"],
  Membership: ["Silver", "Gold", "Platinum", "Compare Plans"],
  Support: ["Contact", "FAQ", "Terms", "Privacy"],
};

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer id="contact" className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-2 text-white mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                <TreePine className="w-5 h-5 text-neutral-900" />
              </div>
              <span className="font-serif text-2xl tracking-wide">
                Oakwood
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
              Crafting extraordinary journeys for the discerning traveler. Join
              our membership and unlock a world of luxury.
            </p>

            <div className="flex items-center gap-3">
              {[Camera, MessageCircle, Bird, Play].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-gold hover:bg-white/10 transition-colors"
                  aria-label="Social media link"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-medium text-sm mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/50 hover:text-gold text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-medium text-sm mb-4">Newsletter</h4>
            <p className="text-white/50 text-sm mb-4">
              Subscribe for exclusive offers and travel inspiration.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 glass rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-1 focus:ring-gold/50"
                required
                aria-label="Email address"
              />
              <MagneticButton
                className="bg-white text-neutral-950 rounded-xl px-4 py-3 hover:bg-gold-light transition-colors"
                strength={0.1}
              >
                <Send className="w-4 h-4" />
              </MagneticButton>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Oakwood Holiday. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/40 hover:text-white text-xs transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
