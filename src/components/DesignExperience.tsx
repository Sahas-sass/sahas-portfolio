"use client";

import { useTheme } from "@/context/ThemeContext";
import { Palette, Award, Calendar, Layers } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function DesignExperience() {
  const { mode } = useTheme();

  const designExperiences = [
    {
      org: "IEEE Student Branch University of Moratuwa",
      role: "Design Committee Lead",
      term: "2025 - 2026",
      desc: "Promoted from Member to Lead, steering the entire branch's visual direction, promotional brand campaigns, and creative asset pipelines.",
      highlights: [
        "MoraXtreme 10.0 (Lead, Design)",
        "Hackelite 2.0 (Co-Lead, Design)",
        "Rise Up Mora 2024 (Co-Lead, Design)",
        "Rise Up Mora 2025 (Member, Design)"
      ]
    },
    {
      org: "FIT Moments",
      role: "Marketing Pillar Assistant Head & Design Member",
      term: "Dec 2025 - Present",
      desc: "Managing marketing visuals, editorial graphics, and public engagement layouts for the Faculty of Information Technology media unit.",
      highlights: [
        "Assistant Head of Marketing Pillar (Dec 2025 - Present)",
        "Design Committee Member (2024 - 2025)"
      ]
    },
    {
      org: "Leo Club of University of Moratuwa",
      role: "Branding & IT Panellist",
      term: "2024 - 2026",
      desc: "Contributed to core branding initiatives and served as an educational panellist for the 'SHEroes' project, conducting live workshops on graphic design and freelancing.",
      highlights: [
        "Conducted 'SHEroes' Graphic Design & Freelancing Workshop",
        "Branding & Marketing Committee Member (2024 - 2025)"
      ]
    },
    {
      org: "Rotaract Club of UoM & SEDS Mora",
      role: "PR & Design Committee Member",
      term: "2024 - 2025",
      desc: "Crafted promotional graphics, event identity assets, and editorial layouts for major youth leadership and space exploration initiatives.",
      highlights: [
        "Under Secretary-General – PR & Editorial (SLRMUN Event)",
        "SEDS Mora Design Committee Member"
      ]
    }
  ];

  return (
    <section id="design-experience" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h3 className="text-sm tracking-widest uppercase font-semibold text-purple-400">
              Creative Leadership
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-1 text-white">
              Design Experience & Roles
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-sm md:text-right">
            Directing visual branding, leading design committees, and mentoring students in graphic execution.
          </p>
        </div>
      </FadeIn>

      {/* Grid of Design Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {designExperiences.map((item, idx) => (
          <FadeIn key={idx} delay={(idx % 2) * 0.1}>
            <div className="group relative flex flex-col p-8 rounded-3xl bg-cardBg border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all duration-500 h-full">
              
              {/* Subtle Hover Glow */}
              <div className="absolute -inset-px opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br from-purple-500 to-transparent pointer-events-none z-0"></div>

              {/* Top Row: Icon & Term */}
              <div className="relative z-10 flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 backdrop-blur-sm">
                  <Palette size={24} />
                </div>
                <span className="text-xs font-mono font-semibold tracking-widest text-gray-400 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                  {item.term}
                </span>
              </div>

              {/* Body */}
              <div className="relative z-10 flex flex-col grow">
                <h3 className="text-2xl font-bold text-white leading-tight mb-1">{item.role}</h3>
                <p className="text-sm font-semibold text-purple-400 mb-4">{item.org}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">{item.desc}</p>

                {/* Event Highlights Tags */}
                <div className="pt-6 border-t border-white/10 mt-auto">
                  <p className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-3">Key Responsibilities & Events</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.highlights.map((highlight) => (
                      <span key={highlight} className="text-[10px] font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-md">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}