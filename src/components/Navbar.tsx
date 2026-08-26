"use client";

import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import { 
  Code, Palette, Menu, X, 
  Cpu, FolderGit2, Trophy, Award, Users, Mail,
  Wrench, Image as ImageIcon, Briefcase, Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { mode, toggleMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Define navigation links with matching icons for a high-end look
  const navLinks = mode === "tech" ? [
    { name: "Skills", href: "#skills", icon: <Cpu size={14} /> },
    { name: "Projects", href: "#projects", icon: <FolderGit2 size={14} /> },
    { name: "Milestones", href: "#achievements", icon: <Trophy size={14} /> },
    { name: "Credentials", href: "#certifications", icon: <Award size={14} /> },
    { name: "Community", href: "#leadership", icon: <Users size={14} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={14} /> },
  ] : [
    { name: "Toolkit", href: "#design-skills", icon: <Wrench size={14} /> },
    { name: "Gallery", href: "#design-showcase", icon: <ImageIcon size={14} /> },
    { name: "Experience", href: "#design-experience", icon: <Briefcase size={14} /> },
    { name: "Awards", href: "#design-achievements", icon: <Trophy size={14} /> },
    { name: "Contact", href: "#design-contact", icon: <Mail size={14} /> },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-darkBg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO / BRAND - Dynamically changes based on mode */}
        <a href="#" className="flex items-center gap-1 group">
          <span className="text-xl font-black tracking-tighter text-white">
            SAHAS<span className={mode === "tech" ? "text-gold-rich" : "text-purple-400"}>.</span>
          </span>
          <span className={`text-xs font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-md border ${
            mode === "tech" 
              ? "text-gold-rich bg-gold-rich/10 border-gold-rich/30" 
              : "text-purple-400 bg-purple-500/10 border-purple-500/30"
          }`}>
            {mode === "tech" ? "dev" : "art"}
          </span>
        </a>

        {/* DESKTOP NAVIGATION LINKS - Attractive pills with hover glow */}
        <nav className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-300 ${
                mode === "tech" 
                  ? "text-gray-300 hover:text-black hover:bg-gold-rich" 
                  : "text-gray-300 hover:text-white hover:bg-purple-500"
              }`}
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </nav>

        {/* THEME TOGGLE SWITCHER - Wider layout to prevent packing */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleMode}
            className="relative flex items-center p-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md cursor-pointer transition-all duration-500 w-44 h-12 shadow-xl"
          >
            {/* Sliding Pill Indicator */}
            <motion.div 
              className={`absolute top-1 bottom-1 w-21 rounded-full shadow-lg ${
                mode === "tech" ? "bg-gold-rich left-1" : "bg-purple-500 left-22"
              }`}
              layout
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />

            {/* Tech Option */}
            <div className={`relative z-10 w-1/2 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${
              mode === "tech" ? "text-black" : "text-gray-400 hover:text-white"
            }`}>
              <Code size={14} /> Tech
            </div>

            {/* Design Option */}
            <div className={`relative z-10 w-1/2 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${
              mode === "design" ? "text-white" : "text-gray-400 hover:text-white"
            }`}>
              <Palette size={14} /> Design
            </div>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleMode}
            className={`p-2 rounded-xl border border-white/10 ${mode === "tech" ? "text-gold-rich bg-gold-rich/10" : "text-purple-400 bg-purple-500/10"}`}
            aria-label="Toggle Theme"
          >
            {mode === "tech" ? <Code size={18} /> : <Palette size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white bg-white/5 border border-white/10 rounded-xl"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-20 left-0 w-full bg-darkBg/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-sm font-mono font-semibold tracking-wider text-gray-300 hover:text-white py-2 border-b border-white/5"
              >
                <span className={mode === "tech" ? "text-gold-rich" : "text-purple-400"}>{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}