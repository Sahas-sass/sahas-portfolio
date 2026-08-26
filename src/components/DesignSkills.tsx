"use client";

import { useTheme } from "@/context/ThemeContext";
import { Layers, Box, Film, PenTool } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function DesignSkills() {
  const { mode } = useTheme();

  const designTools = [
    {
      category: "UI/UX & Prototyping",
      icon: <Layers size={20} className="text-purple-400" />,
      skills: ["Figma", "Wireframing", "Design Systems", "Interactive Prototyping", "Glassmorphism UI"]
    },
    {
      category: "Visual & Graphic Design",
      icon: <PenTool size={20} className="text-purple-400" />,
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Poster Design", "Brand Identity", "Typography", "Vector Illustration"]
    },
    {
      category: "3D & Digital Art",
      icon: <Box size={20} className="text-purple-400" />,
      skills: ["Blender", "Concept Rendering", "Product Photography Renders"]
    },
    {
      category: "Motion & Editing",
      icon: <Film size={20} className="text-purple-400" />,
      skills: ["Capcut", "After Effects", "Social Media Ads", "Video Editing", "Color Grading"]
    }
  ];

  return (
    <section id="design-skills" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
      
      {/* Background ambient glow matching hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full blur-[160px] bg-purple-600/10 pointer-events-none z-0"></div>

      <FadeIn>
        <div className="mb-12 relative z-10">
          <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-purple-400">
            Creative Toolkit
          </h3>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-1 text-white">
            Software & Design Proficiencies
          </h2>
          <p className="text-gray-400 text-sm max-w-md mt-3">
            Industry-standard tools and creative suites I utilize to turn imaginative visions into polished digital realities.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {designTools.map((group, idx) => (
          <FadeIn key={idx} delay={(idx % 2) * 0.1}>
            <div className="group relative p-8 rounded-3xl bg-black/75 border border-purple-500/20 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-500 flex flex-col gap-6 h-full shadow-xl">
              
              {/* Subtle hover gradient wash */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <div className="relative z-10 flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shadow-inner">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{group.category}</h3>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-xs font-mono font-semibold tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-xl shadow-sm hover:bg-purple-500/25 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}