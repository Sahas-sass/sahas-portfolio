"use client";

import { useTheme } from "@/context/ThemeContext";
import { Users, Megaphone, Globe, Award, Code, Rocket, Heart, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface Role {
  title: string;
  term: string;
  desc?: string;
}

interface Organization {
  name: string;
  icon: React.ReactNode;
  roles: Role[];
  events?: string[];
}

export default function Leadership() {
  const { mode } = useTheme();

  const organizations: Organization[] = [
    {
      name: "IEEE Student Branch UoM",
      icon: <Award size={20} />,
      roles: [
        {
          title: "Design Committee Lead",
          term: "2025 - 2026",
          desc: "Promoted from Member to Lead, steering visual direction and branding."
        },
        {
          title: "Design Committee Member",
          term: "2024 - 2025",
          desc: "Served in the branch design committee for the 2024/25 term."
        }
      ],
      events: [
        "MoraXtreme 11.0 (Co-Lead, Event)",
        "MoraXtreme 10.0 (Lead, Design)",
        "Hackelite 2.0 (Co-Lead, Design)",
        "Rise Up Mora 2024 (Co-Lead, Design)",
        "Rise Up Mora 2025 (Member, Design)",
        "MoraForsight 2.0 & 3.0 (Member)",
        "Mercon 2024 (Member)"
      ]
    },
    {
      name: "Leo Club of UoM",
      icon: <Globe size={20} />,
      roles: [
        {
          title: "IT Panellist",
          term: "2025 - 2026",
          desc: "Conducted educational sessions on graphic design and freelancing for the SHEroes project."
        },
        {
          title: "Branding & Marketing Committee",
          term: "2024 - 2025"
        }
      ]
    },
    {
      name: "FIT Moments",
      icon: <Megaphone size={20} />,
      roles: [
        {
          title: "Marketing Pillar Assistant Head",
          term: "Dec 2025 - Present"
        },
        {
          title: "Design Committee Member",
          term: "2024 - 2025"
        }
      ]
    },
    {
      name: "Rotaract Club of UoM",
      icon: <Users size={20} />,
      roles: [
        {
          title: "Under Secretary-General – PR & Editorial",
          term: "SLRMUN Event"
        },
        {
          title: "Marketing Pillar Member",
          term: "2024 - 2025"
        }
      ]
    },
    {
      name: "INTECS",
      icon: <Code size={20} />,
      roles: [
        {
          title: "Committee Member",
          term: "2024 - 2025"
        }
      ]
    },
    {
      name: "SEDS Mora",
      icon: <Rocket size={20} />,
      roles: [
        {
          title: "Design Committee Member",
          term: "2024 - 2025"
        }
      ]
    },
    {
      name: "Sasnaka Sansadaya",
      icon: <Heart size={20} />,
      roles: [
        {
          title: "Member",
          term: "Active"
        }
      ]
    }
  ];

  return (
    <section id="leadership" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      
      {/* PREMIUM HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h3 className={`text-sm tracking-widest uppercase font-semibold ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`}>
            Community
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-1 text-white">
            Volunteer & Leadership
          </h2>
        </div>
        <p className="text-sm text-gray-400 max-w-sm md:text-right">
          Driving community engagement, leading design teams, and managing public relations across major university organizations.
        </p>
      </div>

      {/* MASONRY-STYLE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {organizations.map((org, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
            className="group relative flex flex-col p-7 rounded-3xl bg-cardBg border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500"
          >
            {/* Subtle Glow on Hover */}
            <div className={`absolute -inset-px opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br ${mode === "tech" ? "from-gold-rich" : "from-purple-500"} to-transparent pointer-events-none z-0`}></div>

            <div className="relative z-10">
              {/* Organization Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2.5 rounded-xl bg-white/5 border border-white/5 ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`}>
                  {org.icon}
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">{org.name}</h3>
              </div>

              {/* Roles Timeline */}
              <div className="relative border-l border-white/10 ml-4 mt-6 flex flex-col gap-6 pb-2">
                {org.roles.map((role: Role, rIdx: number) => (
                  <div key={rIdx} className="relative pl-6">
                    
                    {/* Timeline Node */}
                    <div className={`absolute w-2.5 h-2.5 rounded-full left-[-5.5px] top-1.5 border-2 border-cardBg ${rIdx === 0 ? (mode === "tech" ? "bg-gold-rich" : "bg-purple-500") : "bg-gray-600"}`} />
                    
                    <h4 className="text-white font-bold text-sm leading-tight mb-1">{role.title}</h4>
                    <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-2">{role.term}</p>
                    
                    {role.desc && (
                      <p className="text-xs text-gray-400 mb-1 leading-relaxed">{role.desc}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Separate Event Volunteering Block (if applicable) */}
              {org.events && (
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={14} className={mode === "tech" ? "text-gold-rich" : "text-purple-400"} />
                    <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">Event Volunteering</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {org.events.map((ev: string) => (
                      <span key={ev} className="text-[10px] font-medium text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                        {ev}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}