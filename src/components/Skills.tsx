"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function Skills() {
  const { mode } = useTheme();

  const skillGroups = [
    { title: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "C", "C++"] },
    { title: "Frontend & Mobile", items: ["React", "Next.js", "React Native", "Tailwind CSS"] },
    { title: "Backend & Cloud", items: ["FastAPI", "Node.js", "Django", "PostgreSQL", "Supabase", "Docker"] },
    { title: "AI & Tools", items: ["PyTorch", "TensorFlow", "LangChain", "Git", "Figma"] },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-12">
        <h3 className={`text-sm tracking-widest uppercase font-semibold ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`}>
          Technical Stack
        </h3>
        <h2 className="text-4xl font-bold tracking-tight mt-2 text-white">
          Tools & Technologies
        </h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillGroups.map((group, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-cardBg border border-white/5 flex flex-col hover:border-white/10 transition-colors">
            <h4 className="text-base font-bold text-gray-200 mb-6">{group.title}</h4>
            <div className="flex flex-wrap gap-2 mt-auto">
              {group.items.map((skill) => (
                <span 
                  key={skill}
                  className="text-sm px-3 py-1.5 rounded-md bg-white/5 text-gray-300 border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}