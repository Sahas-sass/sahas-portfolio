"use client";

import { useParams } from "next/navigation";
import { designProjects } from "@/data/designProjects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function ProjectGallery() {
  const { slug } = useParams();
  
  // Find the current project based on the URL slug
  const project = designProjects.find((p) => p.slug === slug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-darkBg flex items-center justify-center text-white">
        <h2>Project not found!</h2>
      </div>
    );
  }

  // Generate an array of image numbers [1, 2, 3...]
  const imageNumbers = Array.from({ length: project.imageCount }, (_, i) => i + 1);

  // Dynamic grid spanning to match your Bento Box reference image
  const getGridSpan = (index: number, total: number) => {
    // If there's only 1 image, make it full width and tall
    if (total === 1) return "md:col-span-3 md:row-span-2"; 
    
    // Create a repeating pattern for the bento grid
    const pos = index % 6;
    
    if (pos === 0) {
      // The first image in a sequence becomes the large hero (spans 2 columns, 2 rows)
      return "md:col-span-2 md:row-span-2"; 
    }
    
    // All other images take up 1 standard block
    return "md:col-span-1 md:row-span-1"; 
  };

  return (
    <main className="min-h-screen bg-darkBg pb-24 selection:bg-purple-500/30">
      
      {/* Sleek Top Nav */}
      <div className="sticky top-0 z-50 w-full bg-darkBg/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <Link 
          href="/#design-showcase" 
          className="flex items-center gap-2 text-xs font-mono font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors"
        >
          <ArrowLeft size={16} /> Back to Showcase
        </Link>
        <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
          {project.category}
        </span>
      </div>

      {/* Project Header Info */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <span className="inline-block px-3 py-1 mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] font-mono font-bold text-purple-300 uppercase tracking-widest">
          {project.badge}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4">
          {project.title}
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          {project.desc}
        </p>
      </div>

      {/* Bento Box Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Updated auto-rows to use canonical Tailwind classes (64 = 256px, 96 = 384px) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-64 md:auto-rows-96">
          {imageNumbers.map((num, idx) => (
            <div 
              key={num} 
              className={`group relative w-full h-full bg-black/50 border border-white/5 rounded-3xl overflow-hidden shadow-xl ${getGridSpan(idx, project.imageCount)}`}
            >
              <Image
                src={`/design-showcase/${project.slug}/${num}.png`}
                alt={`${project.title} Image ${num}`}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}