"use client";

import { useTheme } from "@/context/ThemeContext";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const { mode } = useTheme();

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="bg-cardBg border border-white/5 rounded-3xl p-8 md:p-16 text-center max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Let's build something.</h2>
        <p className="text-gray-400 mb-10 max-w-lg">
          Currently seeking a Software Engineering Internship to further develop technical expertise and contribute to scalable solutions[cite: 1]. My inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href="mailto:sahas.samuditha@gmail.com"
            className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all ${
              mode === "tech" ? "bg-gold-rich text-black hover:bg-gold" : "bg-white text-black hover:bg-neutral-200"
            }`}
          >
            <Mail size={18} /> sahas.samuditha@gmail.com
          </a>
          
          <a 
            href="tel:+94701117241"
            className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
          >
            <Phone size={18} /> +94 70 111 7241
          </a>
        </div>
      </div>
      
      <div className="mt-24 text-center text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between">
        <p>© {new Date().getFullYear()} Sahas Abeygunarathne.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="https://linkedin.com/in/sahas-samuditha" target="_blank" className="hover:text-white transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight size={14}/></a>
          <a href="https://github.com/Sahas-sass" target="_blank" className="hover:text-white transition-colors flex items-center gap-1">GitHub <ArrowUpRight size={14}/></a>
        </div>
      </div>
    </section>
  );
}