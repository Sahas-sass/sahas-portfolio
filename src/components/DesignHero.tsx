"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Palette, Layers, Eye } from "lucide-react";
import Image from "next/image";

export default function DesignHero() {
  const { mode } = useTheme();

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-darkBg pt-20 border-b border-white/5">
      
      {/* MASSIVE BACKGROUND WATERMARK TEXT */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none flex flex-col leading-[0.8]"
      >
        <span className="text-[18vw] font-black text-white/3 tracking-tighter">CREATIVE</span>
        <span className="text-[12vw] font-black text-white/3 tracking-tighter mt-2">VISUALS</span>
      </motion.div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-end pb-12 md:pb-24 h-full">
        
        {/* LEFT COLUMN: Title, Bio, and Creative Focus Tags */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="md:col-span-5 flex flex-col justify-end h-full mt-12 md:mt-0 relative z-30"
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="italic text-purple-300 text-lg mb-2"
          >
            Visual Artist & Designer
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-4"
          >
            Sahas<br />
            <span className="text-purple-400">
              Abeygunarathne
            </span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm md:text-base font-bold uppercase tracking-widest mb-6 text-purple-400"
          >
            UI/UX Architecture & Brand Identity
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 text-sm leading-relaxed max-w-md backdrop-blur-md bg-black/40 p-5 rounded-2xl border border-white/5 shadow-xl mb-6 relative z-50"
          >
            Crafting immersive digital experiences, dramatic black-and-grey illustrative concepts, and high-end brand identities. Combining clean design thinking with structural aesthetics to build unforgettable visual narratives.
          </motion.p>

          {/* Creative Tags */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-3 mb-8 pointer-events-auto relative z-50"
          >
            <div className="flex items-center justify-center w-4 h-4 mr-1">
              <span className="absolute w-3 h-3 rounded-full animate-ping opacity-75 bg-purple-500"></span>
              <span className="relative w-2 h-2 rounded-full bg-purple-500"></span>
            </div>
            {["UI/UX DESIGN", "BRAND IDENTITY", "MYTHOLOGICAL REALISM", "POSTER ART"].map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] md:text-xs font-mono font-semibold tracking-wider border px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md text-purple-400 border-purple-500/30"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Primary Action Button */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center mb-6 pointer-events-auto relative z-50"
          >
            <a 
              href="#design-showcase" 
              className="flex items-center gap-2 px-8 py-3.5 font-bold rounded-md transition-all text-sm w-fit bg-purple-500 text-white hover:bg-purple-400 shadow-lg shadow-purple-500/20"
            >
              Explore Creative Works <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>

        {/* MIDDLE COLUMN: Spacer */}
        <div className="hidden md:block md:col-span-4 pointer-events-none"></div>

        {/* RIGHT COLUMN: Creative Stats and Highlights */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="md:col-span-3 flex flex-col md:items-end justify-end gap-10 pb-4 mt-12 md:mt-0 relative z-30 pointer-events-none"
        >
          {/* Tagline Card */}
          <div className="flex items-center md:justify-end gap-4 group">
            <div className="text-left md:text-right">
              <p className="text-white font-bold text-sm">Aesthetics meets</p>
              <p className="text-gray-400 text-xs">functional architecture.</p>
            </div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center border border-purple-400 text-purple-400">
              <Palette size={16} />
            </div>
          </div>

          {/* Quick Design Stats */}
          <div className="flex flex-row md:flex-col gap-8 md:gap-6 items-start md:items-end relative z-50">
            <div className="flex items-center gap-4">
              <span className="text-4xl lg:text-5xl font-black text-purple-400">2nd</span>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-left md:text-right leading-tight">Master Designer<br/>v3.0 Finalist</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-4xl lg:text-5xl font-black text-white">5+</span>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-left md:text-right leading-tight">Design Leads<br/>& Workshops</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CENTER PORTRAIT IMAGE (z-40) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-40 w-[95vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-[80vh] md:h-[95vh] pointer-events-none"
      >
        <div className="w-full h-full relative">
          <Image 
            src="/sahas-portrait.png" 
            alt="Sahas Abeygunarathne"
            fill
            className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(168,85,247,0.2)]"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-darkBg to-transparent z-10"></div>
      </motion.div>

    </section>
  );
}