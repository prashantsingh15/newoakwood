"use client";

import { motion } from "framer-motion";
import {
  Headset,
  ShieldCheck,
  CalendarClock,
  BadgePercent,
  Globe,
  Crown,
  LucideIcon,
} from "lucide-react";
import { Reveal } from "@/app/components/Reveal";
import { WHY_US_ITEMS } from "@/app/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Headset,
  ShieldCheck,
  CalendarClock,
  BadgePercent,
  Globe,
  Crown,
};

export function WhyChooseUs() {
  return (
    <section id="experiences" className="py-24 md:py-36 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">
            Why Oakwood
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white max-w-3xl mx-auto mb-6">
            The Difference Is in the Details
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We obsess over every touchpoint so you can focus on what matters most —
            creating memories that last a lifetime.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_ITEMS.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass rounded-3xl p-8 group cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 group-hover:from-gold/30 group-hover:to-gold/10 transition-colors">
                  {Icon && <Icon className="w-7 h-7 text-gold" />}
                </div>
                <h3 className="text-xl font-serif text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
