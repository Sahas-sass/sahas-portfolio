"use client";

import { useTheme } from "@/context/ThemeContext";
import { Palette, Briefcase, Star, Award, TrendingUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function DesignExperience() {
  const { mode } = useTheme();

  // Premier Professional / Freelance Experience (Highlighted in Purple Theme)
  const premierExperiences = [
    {
      org: "Fiverr Marketplace",
      role: "Level One Seller & Graphic Designer",
      term: "2022 - Present (4 Years)",
      desc: "Delivered over 80+ successful design orders maintaining an exceptional 4.9 out of 5 rating. Specialized in branding, custom graphics, and client-focused visual execution.",
      highlights: ["Over 80+ Completed Orders", "4.9 / 5.0 Star Rating", "Level One Seller Status", "Global Client Portfolio"],
      icon: <Star className="text-yellow-400" size={24} />
    },
    {
      org: "Parabolica",
      role: "Digital Marketing & Design Intern",
      term: "Jan 2026 - Present (6 Months)",
      desc: "Spearheaded digital marketing materials, managed official web assets and UI/UX design layouts, and directed comprehensive social media engagement strategies.",
      highlights: ["Marketing Materials Creation", "Web & UI/UX Design Management", "Social Media Strategy & Execution"],
      icon: <TrendingUp className="text-purple-300" size={24} />
    }
  ];

  // University & Committee Leadership Experience
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
    <section id="design-experience" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-10 w-125 h-125 rounded-full blur-[180px] bg-purple-600/10 pointer-events-none z-0"></div>

      {/* Header */}
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative z-10">
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-purple-400">
              Professional Journey
            </h3>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-1 text-white">
              Design Experience & Roles
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-sm md:text-right">
            Industry execution, digital marketing internships, freelance milestones, and university design leadership.
          </p>
        </div>
      </FadeIn>

      {/* SECTION 1: PREMIER HIGHLIGHT EXPERIENCES (Purple Feature Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 relative z-10">
        {premierExperiences.map((item, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="group relative flex flex-col p-8 rounded-3xl bg-linear-to-br from-purple-950/70 via-black/90 to-black border border-purple-500/40 overflow-hidden shadow-2xl h-full hover:border-purple-400 transition-all duration-500">
              
              {/* Glowing Ambient Corner Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>

              {/* Top Row: Icon & Term */}
              <div className="relative z-10 flex items-start justify-between mb-6">
                <div className="p-3 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300 backdrop-blur-md shadow-inner">
                  {item.icon}
                </div>
                <span className="text-xs font-mono font-bold tracking-wider text-purple-300 bg-purple-500/20 px-3.5 py-1.5 rounded-full border border-purple-500/30">
                  {item.term}
                </span>
              </div>

              {/* Body */}
              <div className="relative z-10 flex flex-col grow">
                <h3 className="text-2xl font-black text-white leading-tight mb-1">{item.role}</h3>
                <p className="text-sm font-bold text-purple-400 mb-4">{item.org}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 grow">{item.desc}</p>

                {/* Highlights Tags */}
                <div className="pt-6 border-t border-purple-500/20 mt-auto">
                  <p className="text-[10px] font-mono tracking-widest text-purple-300 uppercase mb-3 font-bold">Key Milestones & Deliverables</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span key={highlight} className="text-xs font-mono font-semibold text-white bg-purple-500/30 border border-purple-500/40 px-3 py-1 rounded-lg">
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

      {/* SECTION 2: UNIVERSITY & LEADERSHIP ROLES (Black Glassmorphism Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {designExperiences.map((item, idx) => (
          <FadeIn key={idx} delay={(idx % 2) * 0.1}>
            <div className="group relative flex flex-col p-8 rounded-3xl bg-black/75 border border-purple-500/20 backdrop-blur-xl overflow-hidden hover:border-purple-500/40 transition-all duration-500 h-full shadow-xl">
              
              {/* Subtle Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              {/* Top Row: Icon & Term */}
              <div className="relative z-10 flex items-start justify-between mb-6">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 backdrop-blur-sm">
                  <Palette size={22} />
                </div>
                <span className="text-xs font-mono font-semibold tracking-widest text-gray-400 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10">
                  {item.term}
                </span>
              </div>

              {/* Body */}
              <div className="relative z-10 flex flex-col grow">
                <h3 className="text-xl font-bold text-white leading-tight mb-1">{item.role}</h3>
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