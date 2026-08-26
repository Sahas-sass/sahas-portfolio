"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Background from "@/components/Background";
import Skills from "@/components/Skills";
import ProjectsGrid from "@/components/ProjectsGrid";
import Achievements from "@/components/Achievements";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import DesignShowcase from "@/components/DesignShowcase";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { mode } = useTheme();

  return (
    <main className="min-h-screen relative">
      <Navbar />

      {mode === "tech" ? (
        <>
          <Hero />
          <Background />
          <Skills />
          <ProjectsGrid />
          <Achievements />
          <Leadership />
          <Contact />
        </>
      ) : (
        <div className="pt-24">
          <DesignShowcase />
        </div>
      )}
    </main>
  );
}