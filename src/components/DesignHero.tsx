"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function DesignHero() {
  const { mode } = useTheme();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-darkBg pt-28 pb-12 px-6">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30"></div>

      {/* Main Container Card */}
      <div className="relative z-10 w-full max-w-7xl mx-auto rounded-3xl bg-black/85 border border-purple-500/20 backdrop-blur-2xl shadow-2xl p-8 md:p-12 flex flex-col justify-between overflow-hidden min-h-[82vh]">
        
        {/* FADED NAME WATERMARK INSIDE THE BOX */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 leading-[0.8] opacity-3">
          <span className="text-[12vw] font-black tracking-tighter uppercase text-white text-center">
            SAHAS
          </span>
          <span className="text-[12vw] font-black tracking-tighter uppercase text-white text-center mt-2">
            ABEYGUNARATHNA
          </span>
        </div>

        {/* TOP BAR INSIDE CARD */}
        <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase">
              Visual Arts & Brand Architecture
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs font-mono text-gray-400">
            <span>UI/UX DESIGN</span>
            <span>•</span>
            <span>BRAND IDENTITY</span>
            <span>•</span>
            <span>DIGITAL REALISM</span>
          </div>
        </div>

        {/* CENTER HERO GRID (Tighter Columns to bring text closer to the image) */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center my-auto py-8">
          
          {/* LEFT TYPOGRAPHY (Spans 4 columns, pulled closer) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-center z-30"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-white translate-x-35">
              CREATE
            </h1>
            <p className="text-2xl sm:text-3xl font-serif italic text-purple-300 font-light my-2 translate-x-35">
              without
            </p>
            <p className="text-xs text-gray-400 font-sans leading-relaxed max-w-xs mt-4 bg-white/5 p-4 rounded-xl border border-white/5">
              Crafting immersive digital products, high-end brand identities, and dramatic conceptual art with precision and flow.
            </p>

            <div className="mt-6">
              <a 
                href="#design-showcase" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-purple-500/25 w-fit group"
              >
                Explore Works <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* CENTER PORTRAIT IMAGE (Lowered slightly with translate-y and h-120/sm:h-145) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-4 absolute inset-x-0 bottom-0 h-120 sm:h-145 flex items-end justify-center pointer-events-none z-10 translate-y-6"
          >
            {/* Ambient Purple Glow Behind Portrait */}
            <div className="absolute bottom-0 w-96 h-96 rounded-full bg-purple-600/35 blur-[120px] pointer-events-none"></div>

            <div className="relative w-full h-full max-w-md">
              <Image 
                src="/sahas-design-portrait.png" 
                alt="Sahas Abeygunarathne"
                fill
                className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(168,85,247,0.4)]"
                priority
              />
            </div>
            
            {/* Card bottom gradient blend */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black via-black/60 to-transparent z-20"></div>
          </motion.div>

          {/* RIGHT TYPOGRAPHY (Spans 4 columns, pulled closer to center via grid positioning) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 lg:col-start-9 flex flex-col lg:items-end justify-center text-left lg:text-right z-30"
          >
            <h2 className="text-6xl sm:text-7xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-white -translate-x-35">
              LIMITS
            </h2>
            <p className="text-2xl sm:text-3xl font-serif italic text-purple-300 font-light my-2 -translate-x-35">
              boundaries
            </p>

            <div className="flex flex-col gap-2.5 mt-6 text-xs font-mono text-gray-400">
              <div className="flex items-center lg:justify-end gap-2">
                <span>4 YEARS EXPERIENCE ON FIVERR</span>
                <CheckCircle2 size={14} className="text-purple-400 shrink-0" />
              </div>
              <div className="flex items-center lg:justify-end gap-2">
                <span>INDUSTRY EXPERIENCE</span>
                <CheckCircle2 size={14} className="text-purple-400 shrink-0" />
              </div>
              <div className="flex items-center lg:justify-end gap-2">
                <span>CUSTOM UI/UX & BRANDING</span>
                <CheckCircle2 size={14} className="text-purple-400 shrink-0" />
              </div>
              <div className="flex items-center lg:justify-end gap-2">
                <span>100% CREATIVE DIRECTION</span>
                <CheckCircle2 size={14} className="text-purple-400 shrink-0" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM TICKER BAR */}
        <div className="relative z-20 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono tracking-widest text-gray-500 uppercase">
          <span className="text-purple-400 font-bold">SPECIALIZED DOMAINS:</span>
          <span>BRAND IDENTITY</span>
          <span>•</span>
          <span>UI/UX SYSTEMS</span>
          <span>•</span>
          <span>MYTHOLOGICAL REALISM</span>
          <span>•</span>
          <span>POSTER ART & ASSETS</span>
        </div>

      </div>
    </section>
  );
}