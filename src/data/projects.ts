export interface Project {
  id: string;
  title: string;
  category: "tech" | "design";
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  features: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "ceynoa-storage",
    title: "CEYNOA Storage Solution",
    category: "tech",
    shortDesc: "Cloud-based file management platform with tiered storage and granular file sharing.",
    fullDesc: "A scalable full-stack architecture featuring tiered storage subscriptions, granular file permissions, real-time capacity tracking, and JWT-secured RESTful endpoints[cite: 1].",
    techStack: ["React", "Django", "PostgreSQL", "Tailwind CSS", "JWT"],
    features: [
      "Tiered storage subscription handling[cite: 1]",
      "Granular file sharing and permissions[cite: 1]",
      "Real-time storage tracking dashboard[cite: 1]",
      "Secure token-based authentication[cite: 1]",
    ],
    githubUrl: "https://github.com/Sahas-sass",
  },
  {
    id: "dreamco-rental",
    title: "DreamCo Rental System",
    category: "tech",
    shortDesc: "Cloud-based SaaS solution with real-time inventory management and financial tracking.",
    fullDesc: "Production SaaS application running on VPS infrastructure to streamline daily rental operations, inventory management, and financial accounting for active enterprise clients[cite: 1].",
    techStack: ["Tauri", "React", "TypeScript", "SQLite"],
    features: [
      "Real-time inventory and rental tracking[cite: 1]",
      "Multi-user authentication and role access[cite: 1]",
      "Comprehensive financial reports and invoice generation",
    ],
    metrics: "Currently serving active production customers[cite: 1]",
    githubUrl: "https://github.com/Sahas-sass",
  },
  {
    id: "glucovision-ai",
    title: "GlucoVision AI",
    category: "tech",
    shortDesc: "AI-driven healthcare platform for diabetes screening and analytical diagnostics.",
    fullDesc: "Healthcare application utilizing machine learning models to analyze patient clinical data and assist clinicians with early diabetes screening[cite: 1].",
    techStack: ["Next.js", "FastAPI", "PyTorch", "Supabase"],
    features: [
      "Machine learning inference pipeline[cite: 1]",
      "Real-time analytical clinical dashboard[cite: 1]",
      "HIPAA-conscious data processing flows",
    ],
    githubUrl: "https://github.com/Sahas-sass",
  },
  {
    id: "civicsync",
    title: "CivicSync",
    category: "tech",
    shortDesc: "Centralized civic engagement and municipal issue reporting mobile platform.",
    fullDesc: "Location-aware civic platform allowing residents to report municipal issues and track resolution workflows in real-time[cite: 1].",
    techStack: ["React Native", "FastAPI", "Gemini 2.5", "LangChain"],
    features: [
      "Location-based mapping and reporting[cite: 1]",
      "AI-driven ticket triage and classification[cite: 1]",
      "Real-time municipality status updates[cite: 1]",
    ],
    githubUrl: "https://github.com/Sahas-sass",
  },
];