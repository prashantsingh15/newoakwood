"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/app/components/Reveal";
import { FAQS } from "@/app/lib/constants";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 md:py-36 bg-neutral-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white">
            Questions Answered
          </h2>
        </Reveal>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <Reveal key={faq.id} delay={index * 0.05}>
              <div className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-white font-medium pr-4">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full glass flex items-center justify-center text-gold">
                    {openId === faq.id ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-white/70 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
