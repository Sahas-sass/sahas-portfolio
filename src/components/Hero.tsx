"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const { mode } = useTheme();

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-darkBg pt-20 border-b border-white/5">
      
      {/* MASSIVE BACKGROUND TEXT (z-0) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none flex flex-col leading-[0.8]"
      >
        <span className="text-[20vw] font-black text-white/3 tracking-tighter">SAHAS</span>
        <span className="text-[11vw] font-black text-white/3 tracking-tighter mt-2">ABEYGUNARATHNE</span>
      </motion.div>

      {/* FOREGROUND CONTENT (z-10) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-end pb-12 md:pb-24 h-full">
        
        {/* LEFT COLUMN: Name, Bio, Tags, and Get In Touch */}
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
            className="italic text-gray-400 text-lg mb-2"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-4"
          >
            Sahas<br />
            <span className={mode === "tech" ? "text-gold-rich" : "text-purple-400"}>
              Abeygunarathne
            </span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`text-sm md:text-base font-bold uppercase tracking-widest mb-6 ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`}
          >
            IT Undergraduate at the<br/>University of Moratuwa
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 text-sm leading-relaxed max-w-md backdrop-blur-md bg-black/40 p-5 rounded-2xl border border-white/5 shadow-xl mb-6 relative z-50"
          >
            Dedicated IT undergraduate pursuing a BSc (Hons) in Information Technology, with a passion for software engineering and full-stack development. Possess strong analytical and problem-solving skills, supported by hands-on experience in web development and software projects. Seeking a Software Engineering Internship to further develop technical expertise and contribute to building scalable, high-quality software solutions.
          </motion.p>

          {/* Role Tags with Pulsing Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-3 mb-8 pointer-events-auto relative z-50"
          >
            <div className="flex items-center justify-center w-4 h-4 mr-1">
              <span className={`absolute w-3 h-3 rounded-full animate-ping opacity-75 ${mode === "tech" ? "bg-gold-rich" : "bg-purple-500"}`}></span>
              <span className={`relative w-2 h-2 rounded-full ${mode === "tech" ? "bg-gold-rich" : "bg-purple-500"}`}></span>
            </div>
            {["SOFTWARE ENGINEERING", "APPLIED AI/ML", "FULL-STACK DEV"].map((tag) => (
              <span 
                key={tag} 
                className={`text-[10px] md:text-xs font-mono font-semibold tracking-wider border px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md ${mode === "tech" ? "text-gold-rich border-gold-rich/30" : "text-purple-400 border-purple-500/30"}`}
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
              href="#contact" 
              className={`flex items-center gap-2 px-8 py-3.5 font-bold rounded-md transition-all text-sm w-fit ${mode === "tech" ? "bg-gold-rich text-black hover:bg-gold-light" : "bg-purple-500 text-white hover:bg-purple-400"}`}
            >
              Get In Touch <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Social Links Row */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-4 pointer-events-auto relative z-50"
          >
            <div className="flex items-center gap-2">
              <a href="https://github.com/Sahas-sass" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-md bg-black/50 border border-white/10 hover:border-white/30 hover:text-white text-gray-400 transition-all backdrop-blur-md">
                <FaGithub size={18} />
              </a>
              <a href="https://linkedin.com/in/sahas-samuditha" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-md bg-black/50 border border-white/10 hover:border-[#0A66C2] hover:text-[#0A66C2] text-gray-400 transition-all backdrop-blur-md">
                <FaLinkedin size={18} />
              </a>
              <a href="mailto:sahas.samuditha@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-md bg-black/50 border border-white/10 hover:border-red-500 hover:text-red-500 text-gray-400 transition-all backdrop-blur-md">
                <Mail size={18} />
              </a>
            </div>
            <div className="w-px h-6 bg-white/10 mx-2"></div>
            <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Connect</span>
          </motion.div>

        </motion.div>

        {/* MIDDLE COLUMN: Spacer */}
        <div className="hidden md:block md:col-span-4 pointer-events-none"></div>

        {/* RIGHT COLUMN: Highlight Cards, Stats, and Secondary Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="md:col-span-3 flex flex-col md:items-end justify-end gap-10 pb-4 mt-12 md:mt-0 relative z-30 pointer-events-none"
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
          <div className="flex flex-row md:flex-col gap-8 md:gap-6 items-start md:items-end relative z-50">
            <div className="flex items-center gap-4">
              <span className={`text-4xl lg:text-5xl font-black ${mode === "tech" ? "text-gold-rich" : "text-white"}`}>8+</span>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-left md:text-right leading-tight">Major<br/>Systems</p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-4xl lg:text-5xl font-black ${mode === "tech" ? "text-gold-rich" : "text-white"}`}>10+</span>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-left md:text-right leading-tight">Tech<br/>Stack</p>
            </div>
          </div>

          {/* UPGRADED Secondary Action Buttons */}
          <div className="flex flex-col gap-4 mt-2 pointer-events-auto w-full md:w-auto relative z-50">
            <a 
              href="#projects" 
              className={`group relative flex items-center justify-center md:justify-end gap-3 px-6 py-3.5 rounded-md transition-all text-sm backdrop-blur-md border border-white/10 bg-white/5 overflow-hidden ${mode === "tech" ? "hover:border-gold-rich/50 hover:bg-gold-rich/10 hover:text-gold-rich" : "hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"}`}
            >
              <span className="relative z-10 font-bold tracking-wide text-white group-hover:text-inherit transition-colors">View Projects</span>
              <ArrowRight size={16} className="relative z-10 text-gray-400 group-hover:text-inherit transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="/Sahas_Abeygunarathne_CV.pdf" 
              target="_blank" 
              className={`group relative flex items-center justify-center md:justify-end gap-3 px-6 py-3.5 rounded-md transition-all text-sm backdrop-blur-md border border-white/10 bg-white/5 overflow-hidden ${mode === "tech" ? "hover:border-gold-rich/50 hover:bg-gold-rich/10 hover:text-gold-rich" : "hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"}`}
            >
              <span className="relative z-10 font-bold tracking-wide text-white group-hover:text-inherit transition-colors">Download CV</span>
              <Download size={16} className="relative z-10 text-gray-400 group-hover:text-inherit transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* CENTER PORTRAIT IMAGE (z-40) - Animated Entrance */}
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
            className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-darkBg to-transparent z-10"></div>
      </motion.div>

    </section>
  );
}