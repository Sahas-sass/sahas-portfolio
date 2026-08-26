import { projectsData } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitBranch, CheckCircle } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-darkBg text-white py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gold-rich transition-colors"
        >
          <ArrowLeft size={16} /> Back to Overview
        </Link>

        {/* Title Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xs px-3 py-1 rounded-full bg-gold-rich/10 text-gold-rich border border-gold-rich/30">
                {tech}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{project.title}</h1>
          <p className="text-xl text-gray-400">{project.shortDesc}</p>
        </div>

        {/* Deep Dive Description */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gold-rich">Architecture Overview</h2>
          <p className="text-gray-300 leading-relaxed text-lg">{project.fullDesc}</p>
        </div>

        {/* Key Features */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gold-rich">Key Capabilities & Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-cardBg border border-white/5 flex items-start gap-3">
                <CheckCircle size={18} className="text-gold-rich shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Links / Actions */}
        <div className="pt-8 border-t border-white/10 flex items-center gap-4">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white hover:text-black font-semibold text-sm transition-all"
            >
              <GitBranch size={16} /> Source Code
            </a>
          )}
        </div>
      </div>
    </main>
  );
}