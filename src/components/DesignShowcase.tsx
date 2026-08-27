"use client";

import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { designProjects } from "@/data/designProjects";

export default function DesignShowcase() {
  const { mode } = useTheme();
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", "UI/UX", "Brand Identity", "Events", "Competition design", "Tshirt design"];

  const filteredProjects = activeTab === "All" 
    ? designProjects 
    : designProjects.filter(p => p.category === activeTab);

  const displayedProjects = (activeTab === "All" && !showAll) 
    ? filteredProjects.slice(0, 6) 
    : filteredProjects;

  return (
    <section id="design-showcase" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
      <div className="absolute top-1/4 left-1/4 w-150 h-150 rounded-full blur-[180px] bg-purple-600/10 pointer-events-none z-0"></div>

      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-purple-400">PORTFOLIO GALLERY</h3>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-1 text-white">Featured Creative Works</h2>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="flex flex-wrap items-center gap-3 mb-14 relative z-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveTab(cat); setShowAll(false); }}
              className={`px-5 py-2.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                activeTab === cat ? "bg-purple-500 text-white border-purple-400 shadow-lg shadow-purple-500/25 scale-105" : "bg-black/60 text-gray-400 border-white/10 hover:border-purple-500/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Link href={`/design/${project.slug}`} className="block group relative flex flex-col rounded-3xl bg-black/75 border border-purple-500/20 backdrop-blur-xl overflow-hidden hover:border-purple-500/40 transition-all duration-500 h-full shadow-2xl">
                
                {/* 1.png Cover Image */}
                <div className="relative w-full h-56 bg-purple-950/20 border-b border-white/10 overflow-hidden">
                  <Image 
                    src={`/design-showcase/${project.slug}/1.png`} 
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-80"></div>
                  
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-300 bg-black/70 backdrop-blur-md border border-purple-500/30 px-3 py-1 rounded-full">
                      {project.badge}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white group-hover:bg-purple-500 transition-colors shadow-lg">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="p-7 flex flex-col grow justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-purple-400 uppercase">{project.category}</span>
                    <h3 className="text-xl font-bold text-white tracking-tight mt-1 mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">{project.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {activeTab === "All" && filteredProjects.length > 6 && (
        <div className="mt-16 text-center relative z-10">
          <button onClick={() => setShowAll(!showAll)} className="px-8 py-4 rounded-2xl bg-purple-500 hover:bg-purple-400 text-white font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-purple-500/25 cursor-pointer border border-purple-400">
            {showAll ? "See Less Works" : `See All Works (${filteredProjects.length})`}
          </button>
        </div>
      )}
    </section>
  );
}