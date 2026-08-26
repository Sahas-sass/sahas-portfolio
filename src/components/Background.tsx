"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

export default function Background() {
  const { mode } = useTheme();

  return (
    <section id="background" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <h3 className={`text-sm tracking-widest uppercase font-semibold ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`}>
          Background
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-6">
          Engineering robust systems with design-oriented clarity.
        </h2>
        <p className="text-gray-400 leading-relaxed text-lg mb-10">
          IT Undergraduate at the University of Moratuwa with a focus on scalable software engineering, full-stack architecture, and machine learning integration.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          <div className="p-5 rounded-xl bg-cardBg border border-white/5 flex items-start gap-4 hover:border-white/10 transition-colors">
            <GraduationCap className={`shrink-0 mt-1 ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`} size={28} />
            <div>
              <h4 className="font-bold text-base text-white">University of Moratuwa</h4>
              <p className="text-sm text-gray-400 mt-1">BSc (Hons) in Information Technology</p>
            </div>
          </div>
          <div className="p-5 rounded-xl bg-cardBg border border-white/5 flex items-start gap-4 hover:border-white/10 transition-colors">
            <Award className={`shrink-0 mt-1 ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`} size={28} />
            <div>
              <h4 className="font-bold text-base text-white">Master Designer v3.0</h4>
              <p className="text-sm text-gray-400 mt-1">1st Runner-Up (Individual)</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
