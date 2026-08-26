"use client";

import { useTheme } from "@/context/ThemeContext";
import { Users, Megaphone, PenTool, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Leadership() {
  const { mode } = useTheme();

  const roles = [
    { role: "Design Committee Lead", org: "IEEE Student Branch UoM", year: "2026-2027", icon: <PenTool size={20}/> },
    { role: "Marketing Pillar Assistant Head", org: "FIT Moments", year: "2026-2027", icon: <Megaphone size={20}/> },
    { role: "IT Panellist", org: "Leo Club of UoM", year: "2025-2027", icon: <Globe size={20}/> },
    { role: "PR Team Member", org: "Rotaract Club of UoM", year: "2025-2026", icon: <Users size={20}/> },
    { role: "Design Committee Member", org: "SEDS Mora", year: "2026-2027", icon: <PenTool size={20}/> },
  ];

  return (
    <section id="leadership" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-12">
        <h3 className={`text-sm tracking-widest uppercase font-semibold ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`}>
          Community
        </h3>
        <h2 className="text-4xl font-bold tracking-tight mt-1">Volunteer & Leadership</h2>
        <p className="text-gray-400 mt-3 text-sm max-w-2xl">
          Actively contributing to university organizations and serving as a Design Lead for major events including MoraXtreme 10.0, Hackelight 2.0, and RiseUp Mora 2025[cite: 1].
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {roles.map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="p-5 rounded-xl bg-cardBg border border-white/5 flex flex-col gap-3"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/5 ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`}>
              {item.icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">{item.role}</h3>
              <p className="text-gray-400 text-sm">{item.org}</p>
            </div>
            <span className="text-xs font-mono text-gray-500 mt-auto pt-2">{item.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}