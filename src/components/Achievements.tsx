"use client";

import { useTheme } from "@/context/ThemeContext";
import { Trophy, Medal } from "lucide-react";
import { motion } from "framer-motion";

export default function Achievements() {
  const { mode } = useTheme();

  const achievements = [
    {
      title: "1st Runner-Up (Individual Category) - Master Designer v3.0",
      org: "Sri Lanka Technology Campus",
      date: "Feb 2026",
      desc: "Secured 2nd place in a highly competitive branding and designthon, demonstrating advanced design thinking and creative problem-solving[cite: 1].",
      icon: <Trophy className={mode === "tech" ? "text-gold-rich" : "text-purple-400"} size={24} />
    },
    {
      title: "Semi-Finalist - Mini Hackathon 2025",
      org: "Stat Circle",
      date: "Feb 2026",
      desc: "Advanced to the semi-finals with Team Nexio by developing and proposing an innovative technical solution for real-world challenges[cite: 1].",
      icon: <Medal className={mode === "tech" ? "text-gold-rich" : "text-purple-400"} size={24} />
    }
  ];

  return (
    <section id="achievements" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-12">
        <h3 className={`text-sm tracking-widest uppercase font-semibold ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`}>
          Milestones
        </h3>
        <h2 className="text-4xl font-bold tracking-tight mt-1">Achievements & Awards</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-cardBg border border-white/5 hover:border-white/10 transition-all flex flex-col gap-4"
          >
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                {item.icon}
              </div>
              <span className="text-xs font-mono text-gray-500 bg-black/40 px-3 py-1 rounded-full">
                {item.date}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
              <p className="text-sm text-gray-400 font-semibold mt-1">{item.org}</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}