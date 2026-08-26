"use client";

import { useTheme } from "@/context/ThemeContext";
import { projectsData } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsGrid() {
  const { mode } = useTheme();

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h3 className={`text-sm tracking-widest uppercase font-semibold ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`}>
            Portfolio
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-1 text-white">
            Featured Systems
          </h2>
        </div>
        <p className="text-sm text-gray-400 max-w-sm md:text-right">
          Explore full technical architectures, design specs, and operational performance metrics.
        </p>
      </div>

      {/* lg:grid-cols-3 for 3 items in a row on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
            className="group flex flex-col rounded-3xl bg-cardBg border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500 relative"
          >
            {/* Subtle Glow */}
            <div className={`absolute -inset-px opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br ${mode === "tech" ? "from-gold-rich" : "from-purple-500"} to-transparent pointer-events-none z-0`}></div>

            {/* Project Image Header */}
            <div className="relative w-full h-56 overflow-hidden bg-black z-10 border-b border-white/5">
              {/* Fallback text in case image fails to load */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-800 text-xs text-center p-4">
                {project.imageUrl}
              </div>
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                fill 
                className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              />
              <Link 
                href={`/projects/${project.id}`}
                className={`absolute top-4 right-4 p-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 transition-all duration-300 ${mode === "tech" ? "hover:bg-gold-rich hover:text-black hover:border-gold-rich" : "hover:bg-purple-500 hover:text-white hover:border-purple-500"}`}
              >
                <ArrowUpRight size={18} className="text-white group-hover:text-inherit" />
              </Link>
            </div>

            {/* Project Info - Updated flex-grow to grow */}
            <div className="p-6 flex flex-col grow z-10 relative">
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
                {project.shortDesc}
              </p>

              {/* Full Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <Link
                href={`/projects/${project.id}`}
                className={`w-fit inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${mode === "tech" ? "text-gold-rich hover:text-white" : "text-purple-400 hover:text-white"}`}
              >
                Read Case Study
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}