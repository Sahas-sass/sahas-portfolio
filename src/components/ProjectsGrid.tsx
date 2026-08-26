"use client";

import { useTheme } from "@/context/ThemeContext";
import { projectsData } from "@/data/projects";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsGrid() {
  const { mode } = useTheme();

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h3 className={`text-sm tracking-widest uppercase font-semibold ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`}>
            Portfolio
          </h3>
          <h2 className="text-4xl font-bold tracking-tight mt-1">Featured Systems</h2>
        </div>
        <p className="text-sm text-gray-400 max-w-md">
          Explore full technical architectures, design specs, and operational performance metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <motion.div 
            key={project.id}
            whileHover={{ y: -6 }}
            className="group p-8 rounded-2xl bg-cardBg border border-white/5 hover:border-gold-rich/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                  {project.techStack[0]} // {project.techStack[1]}
                </span>
                <Link 
                  href={`/projects/${project.id}`}
                  className="p-2 rounded-full bg-white/5 group-hover:bg-gold-rich group-hover:text-black transition-colors"
                >
                  <ArrowUpRight size={18} />
                </Link>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.shortDesc}</p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-black/40 text-gray-300 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.id}`}
                className="inline-block text-xs font-bold uppercase tracking-wider text-gold-rich group-hover:underline"
              >
                Read Full Case Study →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}