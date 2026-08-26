"use client";

import { useTheme } from "@/context/ThemeContext";
import { Mail, Phone, MapPin, Globe, Send, ArrowUpRight, Palette } from "lucide-react";
import { FaGithub, FaLinkedin, FaBehance, FaDribbble } from "react-icons/fa";
import FadeIn from "@/components/FadeIn";

export default function DesignContact() {
  const { mode } = useTheme();

  return (
    <section id="design-contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      
      {/* Animated Section Header */}
      <FadeIn>
        <div className="mb-12">
          <h3 className="text-sm tracking-widest uppercase font-semibold text-purple-400">
            Creative Inquiries
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-1 text-white">
            Let's Bring Your Vision to Life.
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mt-3">
            Available for freelance branding, UI/UX design systems, digital art commissions, and creative direction.
          </p>
        </div>
      </FadeIn>

      {/* Two Card Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LEFT CARD: Contact Information */}
        <FadeIn direction="left">
          <div className="p-8 rounded-3xl bg-cardBg border border-white/5 flex flex-col justify-between relative overflow-hidden h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Palette size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Design Consultations</h3>
            </div>

            <div className="flex flex-col gap-6 my-auto">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-purple-400 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Direct Email</p>
                  <a href="mailto:sahas.samuditha@gmail.com" className="text-white text-sm font-medium hover:underline">
                    sahas.samuditha@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-green-400 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Phone / WhatsApp</p>
                  <a href="tel:+94701117241" className="text-white text-sm font-medium hover:underline">
                    +94 70 111 7241
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-blue-400 shrink-0">
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

            <div className="mt-8 pt-6 border-t border-white/5">
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
          <div className="p-8 rounded-3xl bg-cardBg border border-white/5 flex flex-col justify-between relative overflow-hidden h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Globe size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Creative Profiles</h3>
            </div>

            <div className="flex flex-col gap-4 my-auto">
              {/* LinkedIn */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-black/40 text-[#0A66C2]">
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
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white flex items-center gap-1.5 transition-all"
                >
                  Connect <ArrowUpRight size={14} />
                </a>
              </div>

              {/* GitHub / Portfolio Reference */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-black/40 text-white">
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
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white flex items-center gap-1.5 transition-all"
                >
                  Explore <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Bottom Action Button */}
            <div className="mt-8 pt-6 border-t border-white/5">
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
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-xs text-gray-600 flex flex-col sm:flex-row items-center justify-between">
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