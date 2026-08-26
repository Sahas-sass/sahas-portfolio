"use client";

import { useTheme } from "@/context/ThemeContext";
import { BadgeCheck, ExternalLink } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Certifications() {
  const { mode } = useTheme();

  const certifications = [
    {
      title: "Cloud Computing Fundamentals",
      issuer: "IBM",
      date: "Jun 2026",
      id: "6810e3ab-8f7d-40d2-95f1-499385e3493d",
      url: "https://www.credly.com/badges/6810e3ab-8f7d-40d2-95f1-499385e3493d/public_url"
    },
    {
      title: "Web Development Fundamentals",
      issuer: "IBM",
      date: "Jun 2026",
      id: "3a9f2d52-c733-4f87-a04b-51a695be2eaa",
      url: "https://www.credly.com/badges/3a9f2d52-c733-4f87-a04b-51a695be2eaa/public_url"
    },
    {
      title: "Node.js (Intermediate)",
      issuer: "HackerRank",
      date: "May 2026",
      id: "922a357732b4",
      url: "https://www.hackerrank.com/certificates/922a357732b4"
    },
    {
      title: "JavaScript (Intermediate)",
      issuer: "HackerRank",
      date: "May 2026",
      id: "35a78a45b434",
      url: "https://www.hackerrank.com/certificates/35a78a45b434"
    },
    {
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      date: "May 2026",
      id: "53f65c00017d",
      url: "https://www.hackerrank.com/certificates/53f65c00017d"
    },
    {
      title: "React (Basic)",
      issuer: "HackerRank",
      date: "May 2026",
      id: "0a6ad61f04df",
      url: "https://www.hackerrank.com/certificates/0a6ad61f04df"
    },
    {
      title: "Software Engineer Intern",
      issuer: "HackerRank",
      date: "Apr 2026",
      id: "02d6a352a3d3",
      url: "https://www.hackerrank.com/certificates/iframe/02d6a352a3d3"
    },
    {
      title: "Java (Basic)",
      issuer: "HackerRank",
      date: "Mar 2026",
      id: "3A65DFD27C92",
      url: "https://www.hackerrank.com/certificates/iframe/3a65dfd27c92"
    },
    {
      title: "Java Programmer Course",
      issuer: "SITEC",
      date: "",
      id: "",
      url: ""
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      
      {/* PREMIUM HEADER WITH ANIMATION */}
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h3 className={`text-sm tracking-widest uppercase font-semibold ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`}>
              Qualifications
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-1 text-white">
              Licenses & Certifications
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-sm md:text-right">
            Verified credentials showcasing continuous learning and foundational expertise in modern development stacks.
          </p>
        </div>
      </FadeIn>

      {/* 3-COLUMN GRID WITH STAGGERED ANIMATIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <FadeIn key={idx} delay={(idx % 3) * 0.1}>
            <div className="group relative flex flex-col p-6 rounded-3xl bg-cardBg border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500 h-full">
              {/* Subtle Glow on Hover */}
              <div className={`absolute -inset-px opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br ${mode === "tech" ? "from-gold-rich" : "from-purple-500"} to-transparent pointer-events-none z-0`}></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Header: Icon & Date */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2.5 rounded-xl bg-white/5 border border-white/5 ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`}>
                    <BadgeCheck size={24} />
                  </div>
                  {cert.date && (
                    <span className="text-[10px] font-mono font-semibold tracking-widest text-gray-500 uppercase bg-black/40 px-2.5 py-1 rounded border border-white/5">
                      {cert.date}
                    </span>
                  )}
                </div>

                {/* Body: Title, Issuer, ID */}
                <h3 className="text-lg font-bold text-white leading-tight mb-1">{cert.title}</h3>
                <p className="text-sm font-semibold text-gray-400 mb-3">{cert.issuer}</p>
                
                {cert.id && (
                  <div className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-3">
                    <p className="text-[10px] text-gray-500 font-mono break-all uppercase tracking-wider">
                      ID: {cert.id}
                    </p>
                    
                    {cert.url && (
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors w-fit ${mode === "tech" ? "text-gold-rich hover:text-white" : "text-purple-400 hover:text-white"}`}
                      >
                        View Credential <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}