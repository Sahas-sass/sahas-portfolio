"use client";

import { motion } from "framer-motion";
import { Palette, Layers, Award } from "lucide-react";

export default function DesignShowcase() {
  const designWorks = [
    { title: "Brand Identity Systems", category: "Graphic Design & Strategy", desc: "Comprehensive brand manuals, typography hierarchies, and vector assets." },
    { title: "Event Visual Direction", category: "Lead Visuals", desc: "Design Lead for MoraXtreme 10.0, Hackelight 2.0, and RiseUp Mora[cite: 1]." },
    { title: "Product Mockups & UI/UX", category: "Digital Interfaces", desc: "Clean, high-fidelity prototypes and minimal interfaces crafted in Figma[cite: 1]." },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold">Creative Direction</span>
        <h2 className="text-5xl font-bold tracking-tight mt-2">Visual Arts & UI/UX</h2>
        <p className="text-gray-400 mt-4 max-w-xl">
          Bridging technical precision with aesthetic hierarchy, digital branding, and human-centered design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {designWorks.map((work, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8 }}
            className="p-8 rounded-2xl bg-neutral-900 border border-white/10 hover:border-purple-500/50 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono text-purple-400">{work.category}</span>
              <h3 className="text-2xl font-bold text-white">{work.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{work.desc}</p>
            </div>
            <div className="pt-8 flex items-center gap-2 text-xs font-semibold text-purple-300">
              <Layers size={16} /> Featured Collection
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}