"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Crown, Search } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { DESTINATION_CATEGORIES } from "@/app/lib/constants";

export function GlassSearchCard() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("2 Guests");
  const [membership, setMembership] = useState("Gold");

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="glass-strong rounded-3xl p-4 md:p-6 w-full max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        <div className="relative group">
          <label className="block text-xs text-white/60 mb-1.5 ml-1">
            Destination
          </label>
          <div className="flex items-center gap-2 glass rounded-xl px-3 py-2.5 focus-within:ring-1 focus-within:ring-gold/50 transition-shadow">
            <MapPin className="w-4 h-4 text-gold shrink-0" />
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-transparent w-full text-sm text-white outline-none appearance-none cursor-pointer"
              aria-label="Select destination"
            >
              <option value="" disabled>
                Where to?
              </option>
              {DESTINATION_CATEGORIES.slice(1).map((cat) => (
                <option key={cat} value={cat} className="bg-neutral-900">
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="relative">
          <label className="block text-xs text-white/60 mb-1.5 ml-1">
            Travel Date
          </label>
          <div className="flex items-center gap-2 glass rounded-xl px-3 py-2.5 focus-within:ring-1 focus-within:ring-gold/50 transition-shadow">
            <Calendar className="w-4 h-4 text-gold shrink-0" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-transparent w-full text-sm text-white outline-none [color-scheme:dark]"
              aria-label="Travel date"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-xs text-white/60 mb-1.5 ml-1">
            Travelers
          </label>
          <div className="flex items-center gap-2 glass rounded-xl px-3 py-2.5 focus-within:ring-1 focus-within:ring-gold/50 transition-shadow">
            <Users className="w-4 h-4 text-gold shrink-0" />
            <select
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="bg-transparent w-full text-sm text-white outline-none appearance-none cursor-pointer"
              aria-label="Number of travelers"
            >
              {["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5+ Guests"].map(
                (opt) => (
                  <option key={opt} value={opt} className="bg-neutral-900">
                    {opt}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        <div className="relative">
          <label className="block text-xs text-white/60 mb-1.5 ml-1">
            Membership
          </label>
          <div className="flex items-center gap-2 glass rounded-xl px-3 py-2.5 focus-within:ring-1 focus-within:ring-gold/50 transition-shadow">
            <Crown className="w-4 h-4 text-gold shrink-0" />
            <select
              value={membership}
              onChange={(e) => setMembership(e.target.value)}
              className="bg-transparent w-full text-sm text-white outline-none appearance-none cursor-pointer"
              aria-label="Membership tier"
            >
              {["Silver", "Gold", "Platinum"].map((tier) => (
                <option key={tier} value={tier} className="bg-neutral-900">
                  {tier}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="md:self-end">
          <MagneticButton
            className="w-full bg-white text-neutral-950 rounded-xl py-3.5 px-6 text-sm font-semibold hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
            strength={0.15}
          >
            <Search className="w-4 h-4" />
            Explore Now
          </MagneticButton>
        </div>
      </div>
    </motion.div>
  );
}
