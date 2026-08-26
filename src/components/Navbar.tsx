"use client";

import { useTheme } from "@/context/ThemeContext";
import { Code, Palette } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { mode, toggleMode } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 backdrop-blur-xl bg-darkBg/80 border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Area */}
        <Link href="/" className="group flex items-center gap-1 text-xl md:text-2xl font-black tracking-tighter">
          <span className="text-white group-hover:text-gray-200 transition-colors">SAHAS</span>
          <span className={mode === "tech" ? "text-gold-rich" : "text-purple-400"}>.DEV</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#achievements" className="hover:text-white transition-colors">Milestones</Link>
          <Link href="#certifications" className="hover:text-white transition-colors">Credentials</Link>
          <Link href="#leadership" className="hover:text-white transition-colors">Leadership</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Mode Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMode}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg ${
            mode === "tech" 
              ? "bg-gold-rich/10 text-gold-rich border border-gold-rich/40 hover:bg-gold-rich hover:text-black" 
              : "bg-purple-500/10 text-purple-400 border border-purple-500/40 hover:bg-purple-500 hover:text-white"
          }`}
        >
          {mode === "tech" ? (
            <>
              <Code size={14} /> Tech Mode
            </>
          ) : (
            <>
              <Palette size={14} /> Design Mode
            </>
          )}
        </motion.button>

      </div>
    </nav>
  );
}