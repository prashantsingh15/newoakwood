"use client";

import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { MembershipTier } from "@/app/types";
import { MagneticButton } from "./MagneticButton";

interface MembershipCardProps {
  tier: MembershipTier;
  index?: number;
}

export function MembershipCard({ tier, index = 0 }: MembershipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative rounded-3xl p-8 h-full flex flex-col ${
        tier.featured
          ? "glass-strong border-gold/30 shadow-[0_0_60px_rgba(201,169,98,0.15)]"
          : "glass"
      }`}
    >
      {tier.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold to-gold-light text-neutral-950 text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
          <Crown className="w-3 h-3" />
          Most Popular
        </div>
      )}

      <div
        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-6`}
      >
        <Crown className="w-6 h-6 text-neutral-900" />
      </div>

      <h3 className="text-3xl font-serif text-white mb-2">{tier.name}</h3>
      <p className="text-white/60 text-sm mb-6">{tier.description}</p>

      <div className="mb-8">
        <span className="text-4xl font-serif text-white">
          ${tier.price.toLocaleString()}
        </span>
        <span className="text-white/50 text-sm">/{tier.period}</span>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {tier.benefits.map((benefit, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-white/80">
            <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            {benefit}
          </li>
        ))}
      </ul>

      <MagneticButton
        className={`w-full rounded-xl py-3.5 text-sm font-semibold transition-colors ${
          tier.featured
            ? "bg-white text-neutral-950 hover:bg-gold-light"
            : "glass hover:bg-white/10 text-white"
        }`}
        strength={0.12}
      >
        Choose {tier.name}
      </MagneticButton>
    </motion.div>
  );
}
