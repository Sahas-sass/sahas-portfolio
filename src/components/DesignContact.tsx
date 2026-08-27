"use client";

import { useTheme } from "@/context/ThemeContext";
import { Mail, Phone, MapPin, Globe, Send, ArrowUpRight, Palette } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import FadeIn from "@/components/FadeIn";

export default function DesignContact() {
  const { mode } = useTheme();

  return (
    <section id="design-contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
      
      {/* Background ambient glow matching theme */}
      <div className="absolute bottom-10 right-1/4 w-125 h-125 rounded-full blur-[180px] bg-purple-600/10 pointer-events-none z-0"></div>

      {/* Animated Section Header */}
      <FadeIn>
        <div className="mb-12 relative z-10">
          <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-purple-400">
            Creative Inquiries
          </h3>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-1 text-white">
            Let's Bring Your Vision to Life.
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mt-3">
            Available for freelance branding, UI/UX design systems, digital art commissions, and creative direction.
          </p>
        </div>
      </FadeIn>

      {/* Two Card Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        
        {/* LEFT CARD: Contact Information */}
        <FadeIn direction="left">
          <div className="group relative p-8 rounded-3xl bg-black/75 border border-purple-500/20 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-500 flex flex-col justify-between overflow-hidden h-full shadow-xl">
            
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

            <div className="relative z-10 flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shadow-inner">
                <Palette size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Design Consultations</h3>
            </div>

            <div className="relative z-10 flex flex-col gap-6 my-auto">
              {/* Email */}
              <div className="flex items-center gap-4 group/item">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Direct Email</p>
                  <a href="mailto:sahas.samuditha@gmail.com" className="text-white text-sm font-medium hover:text-purple-300 transition-colors">
                    sahas.samuditha@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group/item">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-green-400 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Phone / WhatsApp</p>
                  <a href="tel:+94701117241" className="text-white text-sm font-medium hover:text-green-300 transition-colors">
                    +94 70 111 7241
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group/item">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-blue-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Base</p>
                  <p className="text-white text-sm font-medium">
                    Western Province, Sri Lanka (Global Remote)
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
              <a 
                href="mailto:sahas.samuditha@gmail.com?subject=Design%20Commission%20Inquiry"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 hover:text-white transition-colors"
              >
                Start a Creative Project <Send size={14} />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* RIGHT CARD: Professional Profiles & Action Button */}
        <FadeIn direction="right">
          <div className="group relative p-8 rounded-3xl bg-black/75 border border-purple-500/20 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-500 flex flex-col justify-between overflow-hidden h-full shadow-xl">
            
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

            <div className="relative z-10 flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shadow-inner">
                <Globe size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Creative Profiles</h3>
            </div>

            <div className="relative z-10 flex flex-col gap-4 my-auto">
              {/* LinkedIn */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-black/60 text-[#0A66C2]">
                    <FaLinkedin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase">LinkedIn</p>
                    <p className="text-white text-xs font-semibold">sahas-samuditha</p>
                  </div>
                </div>
                <a 
                  href="https://linkedin.com/in/sahas-samuditha" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-purple-500/20 border border-white/10 text-xs font-bold text-white flex items-center gap-1.5 transition-all"
                >
                  Connect <ArrowUpRight size={14} />
                </a>
              </div>

              {/* GitHub Repository */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-black/60 text-white">
                    <FaGithub size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase">GitHub Repository</p>
                    <p className="text-white text-xs font-semibold">@Sahas-sass</p>
                  </div>
                </div>
                <a 
                  href="https://github.com/Sahas-sass" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-purple-500/20 border border-white/10 text-xs font-bold text-white flex items-center gap-1.5 transition-all"
                >
                  Explore <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Bottom Action Button */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
              <a 
                href="mailto:sahas.samuditha@gmail.com?subject=Design%20Project%20Inquiry"
                className="w-full py-4 rounded-2xl font-bold text-white bg-purple-500 hover:bg-purple-400 flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/25"
              >
                <Send size={16} /> Hire for Design
              </a>
            </div>

          </div>
        </FadeIn>

      </div>
      
      {/* Footer Copyright */}
      <FadeIn delay={0.2}>
        <div className="relative z-10 mt-20 pt-8 border-t border-white/10 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Sahas Abeygunarathne. All rights reserved. Visual Arts & UI/UX Suite.</p>
          <div className="flex gap-6 mt-4 sm:mt-0 font-mono">
            <a href="#design-showcase" className="hover:text-purple-400 transition-colors">GALLERY</a>
            <a href="#design-skills" className="hover:text-purple-400 transition-colors">TOOLKIT</a>
            <a href="#design-experience" className="hover:text-purple-400 transition-colors">EXPERIENCE</a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}