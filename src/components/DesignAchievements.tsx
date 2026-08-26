"use client";

import { useTheme } from "@/context/ThemeContext";
import { Award, Trophy, Sparkles, Palette } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function DesignAchievements() {
  const { mode } = useTheme();

  const designMilestones = [
    {
      title: "1st Runner-Up (Individual) - Master Designer v3.0",
      org: "Sri Lanka Technology Campus",
      date: "Feb 2026",
      desc: "Secured 2nd place in a highly competitive national branding and designthon, demonstrating advanced design thinking, visual storytelling, and rapid creative problem-solving.",
      icon: <Award className="text-purple-400" size={24} />,
      tags: ["UI/UX Design", "Brand Identity", "Solo Entry", "National Finalist"]
    },
    {
      title: "Design Lead & Branding Director",
      org: "IEEE Student Branch UoM / MoraXtreme 10.0",
      date: "2024 - 2026",
      desc: "Spearheaded the visual branding and promotional asset production for multiple premier university-level hackathons and coding championships, reaching thousands of participants.",
      icon: <Trophy className="text-purple-400" size={24} />,
      tags: ["Visual Direction", "Event Branding", "Leadership"]
    },
    {
      title: "IT Panellist & Design Educator",
      org: "Leo Club of University of Moratuwa ('SHEroes' Project)",
      date: "Nov 2025",
      desc: "Conducted specialized educational workshops teaching graphic design fundamentals and professional freelancing strategies to aspiring young creators.",
      icon: <Palette className="text-purple-400" size={24} />,
      tags: ["Workshop Facilitator", "Graphic Design", "Community Mentorship"]
    }
  ];

  return (
    <section id="design-achievements" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h3 className="text-sm tracking-widest uppercase font-semibold text-purple-400">
              Recognition
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-1 text-white">
              Design Milestones & Awards
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-sm md:text-right">
            Honored for creative excellence, strategic branding execution, and competitive design achievements.
          </p>
        </div>
      </FadeIn>

      {/* Grid of Design Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {designMilestones.map((item, idx) => (
          <FadeIn key={idx} delay={(idx % 3) * 0.1}>
            <div className="group relative flex flex-col p-8 rounded-3xl bg-cardBg border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all duration-500 h-full">
              
              {/* Subtle Glow */}
              <div className="absolute -inset-px opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br from-purple-500 to-transparent pointer-events-none z-0"></div>

              {/* Top Row: Icon & Date */}
              <div className="relative z-10 flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                  {item.icon}
                </div>
                <span className="text-xs font-mono font-semibold tracking-widest text-gray-400 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                  {item.date}
                </span>
              </div>

              {/* Body */}
              <div className="relative z-10 flex flex-col grow">
                <h3 className="text-2xl font-bold text-white leading-tight mb-2">{item.title}</h3>
                <p className="text-sm font-semibold text-purple-400 mb-4">{item.org}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">{item.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10 mt-auto">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}