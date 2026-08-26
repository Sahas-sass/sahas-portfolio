"use client";

import { useTheme } from "@/context/ThemeContext";
import { Trophy, Medal, Award, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Achievements() {
  const { mode } = useTheme();

  const achievements = [
    {
      title: "1st Place (Round 1) - OctWave 3.0 Kaggle Challenge",
      org: "University of Moratuwa / Kaggle",
      date: "2026",
      desc: "Secured 1st Place overall in Credit Card Fraud Detection using a 3-model hybrid ensemble (LightGBM, XGBoost, CatBoost). Additionally placed 19th in High-Stakes Image Classification leveraging Swin Transformer V2 architectures.",
      icon: <Trophy className={mode === "tech" ? "text-gold-rich" : "text-purple-400"} size={24} />,
      tags: ["Machine Learning", "Solo Entry", "Oct_SOLO005"]
    },
    {
      title: "1st Runner-Up (Individual) - Master Designer v3.0",
      org: "Sri Lanka Technology Campus",
      date: "Feb 2026",
      desc: "Secured 2nd place in a highly competitive branding and designthon, demonstrating advanced design thinking and creative problem-solving.",
      icon: <Award className={mode === "tech" ? "text-gold-rich" : "text-purple-400"} size={24} />,
      tags: ["UI/UX Design", "Branding", "Solo Entry"]
    },
    {
      title: "Semi-Finalist (Rank 9, Advanced Tier) - CodeRally VII",
      org: "IEEE Computer Society SBC of IIT",
      date: "2026",
      desc: "Currently ranked 9th in the advanced tier of the ultimate competitive programming challenge, pushing the boundaries of algorithmic problem-solving under strict time constraints.",
      icon: <Terminal className={mode === "tech" ? "text-gold-rich" : "text-purple-400"} size={24} />,
      tags: ["Competitive Programming", "Algorithms", "Team Nexio"]
    },
    {
      title: "Semi-Finalist - Mini Hackathon 2025",
      org: "Stat Circle",
      date: "Feb 2026",
      desc: "Advanced to the semi-finals with Team Nexio by developing and proposing an innovative technical solution for real-world challenges.",
      icon: <Medal className={mode === "tech" ? "text-gold-rich" : "text-purple-400"} size={24} />,
      tags: ["Hackathon", "Software Engineering", "Team Nexio"]
    }
  ];

  return (
    <section id="achievements" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      
      {/* PREMIUM HEADER - Matching the Projects section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h3 className={`text-sm tracking-widest uppercase font-semibold ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`}>
            Milestones
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-1 text-white">
            Achievements & Awards
          </h2>
        </div>
        <p className="text-sm text-gray-400 max-w-sm md:text-right">
          Recognized for excellence in machine learning, competitive programming, and design architecture.
        </p>
      </div>

      {/* ACHIEVEMENTS 2x2 GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group relative flex flex-col p-8 rounded-3xl bg-cardBg border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500"
          >
            {/* Subtle Glow on Hover */}
            <div className={`absolute -inset-px opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br ${mode === "tech" ? "from-gold-rich" : "from-purple-500"} to-transparent pointer-events-none z-0`}></div>

            {/* Top Row: Icon and Date */}
            <div className="relative z-10 flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                {item.icon}
              </div>
              <span className="text-xs font-mono font-semibold tracking-widest text-gray-500 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                {item.date}
              </span>
            </div>
            
            {/* Content Body */}
            <div className="relative z-10 flex flex-col grow">
              <h3 className="text-2xl font-bold text-white leading-tight mb-2">{item.title}</h3>
              <p className="text-sm font-semibold text-gray-400 mb-4">{item.org}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">{item.desc}</p>
              
              {/* Tags Row */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10 mt-auto">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}