"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { mode } = useTheme();

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-darkBg pt-20 border-b border-white/5">
      
      {/* MASSIVE BACKGROUND TEXT (z-0) */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none flex flex-col leading-[0.8]">
        {/* Adjusted text sizing so the long last name fits better */}
        <span className="text-[20vw] font-black text-white/3 tracking-tighter">SAHAS</span>
        <span className="text-[11vw] font-black text-white/3 tracking-tighter mt-2">ABEYGUNARATHNE</span>
      </div>

      {/* FOREGROUND CONTENT (z-10) - Moved behind the portrait */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-end pb-12 md:pb-24 h-full">
        
        {/* LEFT COLUMN: Name and Bio */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 flex flex-col justify-end h-full mt-12 md:mt-0"
        >
          <p className="italic text-gray-400 text-lg mb-2">Hello, I'm</p>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-4">
            Sahas<br />
            <span className={mode === "tech" ? "text-gold-rich" : "text-purple-400"}>
              Abeygunarathne
            </span>
          </h1>
          
          <h2 className={`text-sm md:text-base font-bold uppercase tracking-widest mb-6 ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`}>
            IT Undergraduate at the<br/>University of Moratuwa
          </h2>
          
          <p className="text-gray-400 text-sm leading-relaxed max-w-md backdrop-blur-md bg-black/40 p-5 rounded-2xl border border-white/5 shadow-xl">
            Dedicated IT undergraduate pursuing a BSc (Hons) in Information Technology, with a passion for software engineering and full-stack development. Possess strong analytical and problem-solving skills, supported by hands-on experience in web development and software projects. Seeking a Software Engineering Internship to further develop technical expertise and contribute to building scalable, high-quality software solutions.
          </p>
        </motion.div>

        {/* MIDDLE COLUMN: Spacer for the portrait image */}
        <div className="hidden md:block md:col-span-4 pointer-events-none"></div>

        {/* RIGHT COLUMN: Highlight Cards & Links */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-3 flex flex-col md:items-end justify-end gap-10 pb-4 mt-8 md:mt-0"
        >
          {/* Tagline Card */}
          <div className="flex items-center md:justify-end gap-4 group">
            <div className="text-left md:text-right">
              <p className="text-white font-bold text-sm">Turning complex ideas</p>
              <p className="text-gray-400 text-xs">into scalable software.</p>
            </div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${mode === "tech" ? "border-gold-rich text-gold-rich" : "border-purple-400 text-purple-400"}`}>
              <Sparkles size={16} />
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="flex flex-row md:flex-col gap-8 md:gap-6 items-start md:items-end">
            <div className="flex items-center gap-4">
              <span className={`text-4xl lg:text-5xl font-black ${mode === "tech" ? "text-gold-rich" : "text-white"}`}>4+</span>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-left md:text-right leading-tight">Major<br/>Systems</p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-4xl lg:text-5xl font-black ${mode === "tech" ? "text-gold-rich" : "text-white"}`}>10+</span>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-left md:text-right leading-tight">Tech<br/>Stack</p>
            </div>
          </div>

          {/* View Projects Link */}
          <a href="#projects" className="mt-4 flex items-center md:justify-end gap-3 group cursor-pointer w-fit">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors pointer-events-auto">
              Selected Projects
            </span>
            <div className={`w-12 h-px relative transition-colors pointer-events-auto ${mode === "tech" ? "bg-gold-rich/50 group-hover:bg-gold-rich" : "bg-purple-500/50 group-hover:bg-purple-500"}`}>
               <ArrowRight size={14} className={`absolute -right-2 top-[-6.5px] transition-colors ${mode === "tech" ? "text-gold-rich/50 group-hover:text-gold-rich" : "text-purple-500/50 group-hover:text-purple-500"}`} />
            </div>
          </a>
        </motion.div>
      </div>

      {/* CENTER PORTRAIT IMAGE (z-20) - Now on top of the text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[90vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] h-[75vh] md:h-[85vh] pointer-events-none">
        <div className="w-full h-full relative">
          <Image 
            src="/sahas-portrait.png" 
            alt="Sahas Abeygunarathne"
            fill
            className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
            priority
          />
        </div>
        {/* Gradient fade at the bottom so the image blends into the next section smoothly */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-darkBg to-transparent z-10"></div>
      </div>

    </section>
  );
}