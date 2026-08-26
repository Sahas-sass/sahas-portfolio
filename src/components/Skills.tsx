"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { Code2, Globe, Database, Server, Cpu, Smartphone } from "lucide-react";
import { 
  SiPython, SiTypescript, SiJavascript, SiCplusplus, 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, 
  SiFastapi, SiPostgresql, SiMongodb, SiSupabase, 
  SiDocker, SiPytorch, SiTensorflow, SiLaravel, SiMysql, SiFirebase
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import FadeIn from "@/components/FadeIn";

export default function Skills() {
  const { mode } = useTheme();

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={20} className={mode === "tech" ? "text-gold-rich" : "text-purple-400"} />,
      skills: [
        { name: "Python", icon: <SiPython />, color: "text-blue-400 border-blue-400/20 bg-blue-400/10" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500 border-blue-500/20 bg-blue-500/10" },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400 border-yellow-400/20 bg-yellow-400/10" },
        { name: "Java", icon: <FaJava />, color: "text-orange-500 border-orange-500/20 bg-orange-500/10" },
        { name: "C/C++", icon: <SiCplusplus />, color: "text-indigo-400 border-indigo-400/20 bg-indigo-400/10" },
      ]
    },
    {
      title: "Frontend",
      icon: <Globe size={20} className={mode === "tech" ? "text-gold-rich" : "text-purple-400"} />,
      skills: [
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-white border-white/20 bg-white/10" },
        { name: "React", icon: <SiReact />, color: "text-cyan-400 border-cyan-400/20 bg-cyan-400/10" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400 border-teal-400/20 bg-teal-400/10" },
        { name: "HTML/CSS", icon: <Globe />, color: "text-orange-400 border-orange-400/20 bg-orange-400/10" },
      ]
    },
    {
      title: "Backend & APIs",
      icon: <Server size={20} className={mode === "tech" ? "text-gold-rich" : "text-purple-400"} />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500 border-green-500/20 bg-green-500/10" },
        { name: "FastAPI", icon: <SiFastapi />, color: "text-emerald-500 border-emerald-500/20 bg-emerald-500/10" },
        { name: "Laravel", icon: <SiLaravel />, color: "text-red-500 border-red-500/20 bg-red-500/10" },
      ]
    },
    {
      title: "Databases",
      icon: <Database size={20} className={mode === "tech" ? "text-gold-rich" : "text-purple-400"} />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400 border-blue-400/20 bg-blue-400/10" },
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-500 border-blue-500/20 bg-blue-500/10" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500 border-green-500/20 bg-green-500/10" },
        { name: "Supabase", icon: <SiSupabase />, color: "text-emerald-400 border-emerald-400/20 bg-emerald-400/10" },
      ]
    },
    {
      title: "Data & AI/ML",
      icon: <Cpu size={20} className={mode === "tech" ? "text-gold-rich" : "text-purple-400"} />,
      skills: [
        { name: "PyTorch", icon: <SiPytorch />, color: "text-orange-500 border-orange-500/20 bg-orange-500/10" },
        { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-400 border-orange-400/20 bg-orange-400/10" },
        { name: "LangChain", icon: <Code2 />, color: "text-green-600 border-green-600/20 bg-green-600/10" },
        { name: "NumPy", icon: <SiPython />, color: "text-blue-400 border-blue-400/20 bg-blue-400/10" },
      ]
    },
    {
      title: "Mobile & Cloud",
      icon: <Smartphone size={20} className={mode === "tech" ? "text-gold-rich" : "text-purple-400"} />,
      skills: [
        { name: "React Native", icon: <SiReact />, color: "text-cyan-400 border-cyan-400/20 bg-cyan-400/10" },
        { name: "Docker", icon: <SiDocker />, color: "text-blue-500 border-blue-500/20 bg-blue-500/10" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500 border-yellow-500/20 bg-yellow-500/10" },
      ]
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      
      {/* Animated Header */}
      <FadeIn>
        <div className="mb-12">
          <h3 className={`text-sm tracking-widest uppercase font-semibold ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`}>
            Technical Stack
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-1 text-white">
            The stack I reach for
          </h2>
          <p className="text-gray-400 text-sm max-w-md mt-4">
            A comprehensive toolkit spanning scalable backend architecture, modern frontends, and machine learning integration.
          </p>
        </div>
      </FadeIn>

      {/* Grid with staggered card animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <FadeIn key={idx} delay={(idx % 2) * 0.1}>
            <div className="p-6 rounded-2xl bg-cardBg border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-6 h-full">
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skill Pills with subtle hover zoom */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm font-medium ${skill.color} cursor-default`}
                  >
                    <span className="text-base">{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}