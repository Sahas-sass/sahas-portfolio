"use client";

import { useParams } from "next/navigation";
import { designProjects } from "@/data/designProjects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function ProjectGallery() {
  const { slug } = useParams();
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

  // Create an array based on the imageCount (e.g. if count is 5, makes [1, 2, 3, 4, 5])
  const imageNumbers = Array.from({ length: project.imageCount }, (_, i) => i + 1);

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

      {/* Full Size Image Gallery Map */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">
        {imageNumbers.map((num) => (
          <div 
            key={num} 
            className="w-full relative bg-black/50 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* The images will render at their natural aspect ratio without cropping */}
            <Image
              src={`/design-showcase/${project.slug}/${num}.png`}
              alt={`${project.title} Design ${num}`}
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </main>
  );
}