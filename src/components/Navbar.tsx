"use client";

import { useTheme } from "@/context/ThemeContext";
import { Code, Palette } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { mode, toggleMode } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-darkBg/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Area */}
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          <span className="text-white">SAHAS</span>
          <span className={mode === "tech" ? "text-gold-rich" : "text-purple-400"}>.DEV</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Mode Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMode}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
            mode === "tech" 
              ? "bg-gold-rich/10 text-gold-rich border border-gold-rich/30 hover:bg-gold-rich hover:text-black" 
              : "bg-purple-500/10 text-purple-400 border border-purple-500/30 hover:bg-purple-500 hover:text-white"
          }`}
        >
          {mode === "tech" ? (
            <>
              <Code size={16} /> Tech Mode
            </>
          ) : (
            <>
              <Palette size={16} /> Design Mode
            </>
          )}
        </motion.button>

      </div>
    </nav>
  );
}