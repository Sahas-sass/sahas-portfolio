export interface Project {
  id: string;
  title: string;
  category: "tech" | "design";
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
}

export const projectsData: Project[] = [
  {
    id: "agrointel",
    title: "AgroIntel",
    category: "tech",
    shortDesc: "AI-powered crop disease detection platform for farmers.",
    fullDesc: "Crop diseases cause massive harvest losses every year. My goal was to build a tool that gives every farmer an \"expert in their pocket.\" By simply uploading a photo of a leaf, AgroIntel identifies diseases instantly and provides localized treatment plans.\n\nTo bring this vision to life, I utilized a modern, high-performance stack: React.js and Tailwind CSS for a highly responsive UI, communicating with a Python and FastAPI backend engineered for sub-2-second rapid API performance.\n\nThe core intelligence relies on TensorFlow/Keras with a custom-trained MobileNetV2 model to handle the computer vision tasks. This project challenged me to integrate complex Deep Learning models with a seamless web experience, successfully leveraging technology for social good.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Python", "FastAPI", "TensorFlow", "SQLite"],
    features: [
      "Instant AI Diagnosis for 38+ plant diseases with 95% accuracy",
      "Generates actionable, eco-friendly treatment recommendations",
      "Sub-2-second real-time processing via FastAPI",
      "Secure User System with full authentication flows"
    ],
    githubUrl: "https://github.com/Sahas-sass/AgroIntel",
    imageUrl: "/projects/agrointel.png"
  },
  {
    id: "ceynoa",
    title: "CEYNOA",
    category: "tech",
    shortDesc: "Scalable cloud storage and file-sharing platform engineered for professionals.",
    fullDesc: "I recently developed CEYNOA, a scalable cloud storage and file-sharing platform engineered for professionals managing large digital assets. The system operates on a distributed client-server architecture. The presentation layer uses React and React Native, communicating via RESTful APIs and WebSockets to a Django backend, with PostgreSQL for relational data.\n\nLarge file payloads are routed to DigitalOcean Spaces for active object storage and AWS S3 Glacier for lifecycle archival. My technical focus was architecting the communication layer, event-driven background logic, and user scheduling infrastructure.\n\nBuilding these modules provided extensive exposure to complex React state management, third-party API integration, and event-driven backend design patterns in a production-like environment.",
    techStack: ["React", "React Native", "Django", "PostgreSQL", "WebSockets", "AWS S3"],
    features: [
      "Event-Driven Architecture to track system milestones",
      "Automated Email Engine using the Resend API",
      "Real-Time Global Notifications via dynamic state management",
      "Interactive Calendar & Scheduling module"
    ],
    liveUrl: "https://software-project-storage-solution.vercel.app/",
    githubUrl: "https://github.com/chirath1231/Software-Project-Storage-Solution",
    imageUrl: "/projects/ceynoa.png"
  },
  {
    id: "deltas",
    title: "DELTAS",
    category: "tech",
    shortDesc: "A Next-Gen Personal Growth & Habit Tracking Platform.",
    fullDesc: "DELTAS is a comprehensive productivity application designed to help users track tasks, build habits, and visualize long-term goals—all wrapped in a modern, gamified interface.\n\nBuilding this challenged me to dive deep into Next.js server/client components and complex state management. The frontend utilizes Next.js 14 App Router and Tailwind CSS v4, featuring a sleek glassmorphism and dark mode aesthetic.\n\nOn the backend, it leverages Firebase for secure authentication and Firestore for database management, integrated with Recharts to deliver interactive data analytics and visual streak tracking.",
    techStack: ["Next.js 14", "React.js", "Tailwind CSS", "Firebase", "Firestore", "Recharts"],
    features: [
      "Secure custom Authentication flow with Firebase",
      "Gamification XP and Leveling system",
      "Visual streak tracking for daily progress",
      "Interactive charts for habit consistency",
      "Dynamic progress bars for long-term targets"
    ],
    githubUrl: "https://github.com/Sahas-sass/Deltas",
    imageUrl: "/projects/deltas.png"
  },
  {
    id: "glucovision",
    title: "GlucoVision AI",
    category: "tech",
    shortDesc: "AI-driven vascular health monitoring from retinal scans.",
    fullDesc: "Managing chronic conditions requires actionable insight. I built GlucoVision to bridge the gap between complex clinical lab analytics and accessible AI diagnostics, providing a centralized, secure platform for proactive health management.\n\nThe core features include RetinaEngine AI, a custom-built deep learning bridge (ResNet50) that analyzes retinal scans for early signs of vascular damage, and ReportParser OCR, an intelligent parsing system that extracts critical HbA1c metrics from physical lab documents.\n\nThis project represents my commitment to healthcare innovation, utilizing Next.js, FastAPI, PyTorch, and Supabase to create a tool that is as intuitive as it is powerful.",
    techStack: ["Next.js", "Tailwind CSS", "FastAPI", "PyTorch", "Torchvision", "Supabase"],
    features: [
      "RetinaEngine AI (ResNet50) for retinal scan analysis",
      "ReportParser OCR for extracting physical lab metrics",
      "Unified Health Analytics precision-tracking dashboard",
      "Secure Medical Cloud for patient privacy"
    ],
    githubUrl: "https://github.com/Sahas-sass/glucovision-ai",
    imageUrl: "/projects/glucovision.png"
  },
  {
    id: "reconboard",
    title: "ReconBoard",
    category: "tech",
    shortDesc: "Fully automated, full-stack job hunting intelligence pipeline.",
    fullDesc: "Job hunting is inefficient, so I engineered a solution to automate it. I built ReconBoard—a fully automated, full-stack intelligence pipeline that hunts for entry-level engineering roles while I sleep.\n\nThe Engine utilizes Python and Playwright as a headless browser to target high-value tech companies daily. It actively filters out Senior/Managerial roles and matches positions against my specific tech stack. Validated targets are pushed into a PostgreSQL database (Supabase) with unique constraints to ensure zero duplicates.\n\nThe Next.js Command Center features a dark-themed, glassmorphism UI with an interactive drag-and-drop Kanban board with optimistic UI updates, allowing me to seamlessly track my active application pipeline.",
    techStack: ["Next.js", "TypeScript", "Python", "Playwright", "Supabase", "GitHub Actions"],
    features: [
      "Automated Python + Playwright headless browser scraper",
      "Intelligent DOM logic to filter seniority and stack",
      "PostgreSQL Vault with zero-duplicate constraints",
      "Interactive drag-and-drop Kanban board UI"
    ],
    githubUrl: "https://github.com/Sahas-sass/recon-board",
    imageUrl: "/projects/reconboard.png"
  },
  {
    id: "resqai",
    title: "ResQAI",
    category: "tech",
    shortDesc: "An Intelligent Emergency Response System for rapid AI-powered assistance.",
    fullDesc: "When seconds count, seamless communication is critical. I built ResQAI as a full-stack platform featuring a mobile app for citizens and responders, paired with a web-based Command Center for dispatchers to bridge the gap between citizens in crisis and rapid assistance.\n\nThe platform enables instant citizen SOS triggers with pinpoint GPS locations and live media. It automatically assigns verified professionals based on real-time proximity and skills.\n\nThe Web Dashboard was built with Next.js 16 and Turbopack, while the Mobile App utilizes React Native and Expo Router. The entire system is backed by Supabase for secure authentication and real-time database syncing.",
    techStack: ["Next.js 16", "React Native", "Expo", "Supabase", "PostgreSQL", "Turbopack"],
    features: [
      "Instant Citizen SOS with pinpoint GPS and live media",
      "Smart Responder Dispatch based on real-time proximity",
      "Command Overview centralized live tracking map",
      "Predictive AI Analytics for resource allocation"
    ],
    liveUrl: "https://res-qai-web.vercel.app/",
    githubUrl: "https://github.com/Sahas-sass/ResQAI-web",
    imageUrl: "/projects/resqai.png"
  },
  {
    id: "swastham",
    title: "Swastham",
    category: "tech",
    shortDesc: "Holistic Wellness & E-Commerce Platform for Ayurvedic healthcare.",
    fullDesc: "Designed and developed a comprehensive full-stack web application to digitize Ayurvedic healthcare services. The platform serves as an e-commerce store for organic remedies and a management system for yoga classes and doctor consultations.\n\nThe Dynamic E-Commerce Architecture was built using MongoDB and features real-time product filtering and server-side rendering (SSR) for optimal performance. A unique Smart Consultation Engine parses patient intake workflows and initiates structured WhatsApp consultations.\n\nLeveraging Next.js 15 App Router and Tailwind CSS, the platform ensures fast load times, accessible UI/UX, and includes a Custom Admin Dashboard for complete inventory and scheduling management.",
    techStack: ["Next.js 15", "TypeScript", "MongoDB", "Tailwind CSS", "REST APIs"],
    features: [
      "Dynamic E-Commerce Architecture with SSR",
      "Smart Consultation Engine via WhatsApp integration",
      "Custom Admin Dashboard (CMS) for inventory management",
      "Symptom parsing patient intake workflow"
    ],
    liveUrl: "https://swastham-store.vercel.app/",
    githubUrl: "https://github.com/Sahas-sass/swastham-store",
    imageUrl: "/projects/swastham.png"
  },
  {
    id: "sweet-surrender",
    title: "Sweet Surrender",
    category: "tech",
    shortDesc: "Full-Stack Web Development Project – Bakery E-Commerce Website.",
    fullDesc: "As part of a university module, our team developed a fully functional e-commerce website for a bakery, combining modern web technologies with real-world features.\n\nWe designed a responsive interface with Next.js, featuring a product catalogue, secure user authentication, and a dynamic shopping cart. The backend logic and API development were handled by Laravel, backed by a structured MySQL database.\n\nThe platform includes PayHere integration for secure online transactions and an intelligent item recommendation system based on user preferences. This collaborative project enhanced my skills in full-stack integration and version control.",
    techStack: ["Next.js", "Laravel", "MySQL", "PayHere"],
    features: [
      "Secure User Authentication and Login System",
      "Dynamic Shopping Cart with real-time updates",
      "Payment Gateway Integration via PayHere",
      "Item Recommendation System based on preferences"
    ],
    githubUrl: "https://github.com/chirath1231/sweet-surrender",
    imageUrl: "/projects/sweetsurrender.png"
  },
  {
    id: "tasker",
    title: "Tasker",
    category: "tech",
    shortDesc: "Smart Rail-Operated Robot for Automated Material Delivery.",
    fullDesc: "As part of our first-year hardware project, my team and I developed Tasker, an automated rail-mounted robot designed to optimize material handling in garment factories by securely delivering materials directly to workstations.\n\nThe robot moves along a fixed rail, equipped with six electromagnetic lockers. Workers authenticate via RFID, enter item details on a keypad, and receive items instantly. The system integrates an ESP32 with a Node.js and React.js web dashboard for supervisors to monitor real-time requests.\n\nThis project combined hardware, software, and IoT to address a real-world industrial challenge, providing hands-on experience in PCB design, automation, and safety sensor integration.",
    techStack: ["Arduino", "ESP32", "Node.js", "React.js", "RFID", "IoT"],
    features: [
      "RFID-based secure access and smart lockers",
      "IoT integration with React.js web dashboard",
      "Real-time transaction logging (user, item, timestamp)",
      "Safety overrides with ultrasonic sensors and rotary encoders"
    ],
    imageUrl: "/projects/tasker.png"
  },
  {
    id: "yieldsync",
    title: "YieldSync",
    category: "tech",
    shortDesc: "AI-powered agricultural consultant supporting multiple native languages.",
    fullDesc: "Farmers often lack immediate access to expert agronomy advice, real-time market data, or accurate weather forecasts in their native languages. To help solve this, I engineered a highly responsive AI agent capable of communicating fluently in Sinhala, Tamil, and English.\n\nThe system features real-time crop disease diagnosis, live weather forecasting, and market price tracking via custom tool-calling powered by the Llama-3.3-70b-versatile model. The backend utilizes Python and FastAPI via the AgentKernel framework, while the frontend is built with Next.js.\n\nThis required navigating complex CORS security policies and mastering function-calling so the LLM could execute native Python code for real-time data fetching.",
    techStack: ["Next.js", "React", "Python", "FastAPI", "AgentKernel", "Llama-3"],
    features: [
      "Real-time crop disease diagnosis",
      "Live weather and market price tracking via custom tool-calling",
      "Dynamic session management for continuous context",
      "Multilingual fluency in Sinhala, Tamil, and English"
    ],
    liveUrl: "https://agent-kernel-ihmesvsat-sahas-projects-ff6ca18c.vercel.app/",
    githubUrl: "https://github.com/Sahas-sass/agent-kernel/tree/develop/use-cases",
    imageUrl: "/projects/yieldsync.png"
  },
  {
    id: "fotoframez",
    title: "FotoFramez",
    category: "design",
    shortDesc: "UI/UX Case Study for a photoshoot location booking platform.",
    fullDesc: "FotoFramez is a photoshoot location booking platform designed to connect photographers, content creators, and brands with curated indoor and outdoor shooting spaces.\n\nThe primary objective was to design a visual-first and trustworthy platform that simplifies booking for creators while enabling hosts to list and manage their spaces efficiently. Project highlights include brand identity design, location discovery flow, host onboarding, and a booking/payment interface.\n\nThis project strengthened my skills in product thinking, UX structure, visual hierarchy, and marketplace-based design systems.",
    techStack: ["UI/UX Design", "Figma", "Brand Identity", "Wireframing"],
    features: [
      "Brand identity and logo design",
      "Location discovery and filtering flow",
      "Host onboarding and place listing flow",
      "Booking and payment interface"
    ],
    liveUrl: "https://www.behance.net/gallery/241749023/FotoFramez-UIUX-Design-Case-Study",
    imageUrl: "/projects/fotoframez.png"
  }
];