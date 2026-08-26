"use client";

import { useTheme } from "@/context/ThemeContext";
import { Palette, Layers, Image as ImageIcon, Box, Film, PenTool } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function DesignSkills() {
  const { mode } = useTheme();

  const designTools = [
    {
      category: "UI/UX & Prototyping",
      icon: <Layers size={20} className="text-purple-400" />,
      skills: ["Figma", "Adobe XD", "Wireframing", "Design Systems", "Interactive Prototyping", "Glassmorphism UI"]
    },
    {
      category: "Visual & Graphic Design",
      icon: <PenTool size={20} className="text-purple-400" />,
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Poster Design", "Brand Identity", "Typography", "Vector Illustration"]
    },
    {
      category: "3D & Digital Art",
      icon: <Box size={20} className="text-purple-400" />,
      skills: ["Blender", "Mythological Realism", "Black-and-Grey Art", "Concept Rendering", "Product Photography Renders"]
    },
    {
      category: "Motion & Editing",
      icon: <Film size={20} className="text-purple-400" />,
      skills: ["Adobe Premiere Pro", "After Effects", "Social Media Motion Ads", "Video Editing", "Color Grading"]
    }
  ];

  return (
    <section id="design-skills" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      
      <FadeIn>
        <div className="mb-12">
          <h3 className="text-sm tracking-widest uppercase font-semibold text-purple-400">
            Creative Toolkit
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-1 text-white">
            Software & Design Proficiencies
          </h2>
          <p className="text-gray-400 text-sm max-w-md mt-4">
            Industry-standard tools and creative suites I utilize to turn imaginative visions into polished digital realities.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {designTools.map((group, idx) => (
          <FadeIn key={idx} delay={(idx % 2) * 0.1}>
            <div className="p-7 rounded-3xl bg-cardBg border border-white/5 hover:border-purple-500/20 transition-all duration-500 flex flex-col gap-6 h-full">
              
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-xs font-mono font-semibold tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-lg"
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