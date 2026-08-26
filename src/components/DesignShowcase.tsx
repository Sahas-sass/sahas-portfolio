"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ArrowUpRight, Palette, Layers, Sparkles } from "lucide-react";
import FadeIn from "@/components/FadeIn";

interface DesignItem {
  id: string;
  title: string;
  category: "UI/UX" | "Brand Identity" | "Posters" | "Digital Art";
  description: string;
  image: string;
  tools: string[];
}

export default function DesignShowcase() {
  const { mode } = useTheme();
  const [activeTab, setActiveTab] = useState<string>("All");

  const designs: DesignItem[] = [
    {
      id: "swastham-ui",
      title: "Swastham E-Commerce UI/UX",
      category: "UI/UX",
      description: "Minimalistic, serene herbal wellness e-commerce platform mobile app interface with glassmorphism navigation.",
      image: "/projects/swastham.png", // Fallback text placeholder if image is missing
      tools: ["Figma", "Design Systems", "Glassmorphism"]
    },
    {
      id: "agrointel-ui",
      title: "AgroIntel Smart Farming App",
      category: "UI/UX",
      description: "Data-driven crop health dashboard UI tailored for rural farmers with high-contrast accessibility.",
      image: "/projects/agrointel.png",
      tools: ["Figma", "UX Research", "Mobile UI"]
    },
    {
      id: "sheroes-branding",
      title: "SHEroes Club Identity & Graphics",
      category: "Brand Identity",
      description: "Complete visual identity, social media campaign banners, and workshop collateral for Leo Club of UoM.",
      image: "/projects/sheroes.png",
      tools: ["Adobe Illustrator", "Photoshop", "Branding"]
    },
    {
      id: "mythological-art",
      title: "Mythological Realism Artwork",
      category: "Digital Art",
      description: "Dramatic black-and-grey digital illustration exploring complex mythological realism and intricate shading.",
      image: "/projects/artwork-1.png",
      tools: ["Blender", "Photoshop", "Digital Painting"]
    },
    {
      id: "moraxtreme-poster",
      title: "MoraXtreme 10.0 Visual Direction",
      category: "Posters",
      description: "Official competitive programming championship promotional poster and cinematic brand reveal assets.",
      image: "/projects/moraxtreme.png",
      tools: ["Adobe Photoshop", "Poster Design", "Typography"]
    },
    {
      id: "master-designer",
      title: "Master Designer v3.0 Entry",
      category: "Brand Identity",
      description: "Award-winning individual design entry securing 1st Runner-Up position in national designthon.",
      image: "/projects/master-designer.png",
      tools: ["Brand Strategy", "Visual Design", "Figma"]
    }
  ];

  const categories = ["All", "UI/UX", "Brand Identity", "Posters", "Digital Art"];

  const filteredDesigns = activeTab === "All" 
    ? designs 
    : designs.filter(item => item.category === activeTab);

  return (
    <section id="design-showcase" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      
      {/* Header & Category Filters */}
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h3 className="text-sm tracking-widest uppercase font-semibold text-purple-400">
              Portfolio Gallery
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-1 text-white">
              Featured Creative Works
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-sm md:text-right">
            Explore brand identities, user interfaces, promotional posters, and digital conceptual art.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === cat
                  ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:border-purple-500/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Grid of Design Projects */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredDesigns.map((design, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              key={design.id}
              className="group relative flex flex-col rounded-3xl bg-cardBg border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all duration-500 h-full"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute -inset-px opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br from-purple-500 to-transparent pointer-events-none z-0"></div>

              {/* Image / Visual Container */}
              <div className="relative w-full h-64 overflow-hidden bg-black/60 border-b border-white/5 z-10 flex items-center justify-center p-6">
                {/* Fallback graphic indicator if local image asset is pending */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 p-6 text-center">
                  <Palette size={32} className="mb-2 opacity-30 text-purple-400" />
                  <span className="text-xs font-mono uppercase tracking-wider opacity-50">{design.title} Preview</span>
                </div>

                <div className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white group-hover:bg-purple-500 transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col grow z-10 relative">
                <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase mb-2">
                  {design.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{design.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">{design.description}</p>

                {/* Tools Stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mt-auto">
                  {design.tools.map((tool) => (
                    <span key={tool} className="text-[10px] font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}