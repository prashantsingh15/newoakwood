"use client";

import { Reveal } from "@/app/components/Reveal";
import { MembershipCard } from "@/app/components/MembershipCard";
import { MEMBERSHIP_TIERS } from "@/app/lib/constants";

export function MembershipBenefits() {
  return (
    <section id="membership" className="py-24 md:py-36 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">
            Membership
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white max-w-3xl mx-auto mb-6">
            Unlock a World of Privileges
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Choose the membership that fits your travel style. Every tier unlocks
            exclusive rates, priority access, and unforgettable experiences.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {MEMBERSHIP_TIERS.map((tier, index) => (
            <MembershipCard key={tier.id} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
