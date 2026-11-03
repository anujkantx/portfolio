import { SiteConfig } from "@/types/portfolio";

export const siteConfig: SiteConfig = {
  name: "Anujkant",
  role: "Software Engineer & Product Builder",
  location: "New Delhi NCR & Chennai, India",
  availability: {
    status: "available",
    label: "Available for Building",
    details: "Open to software engineering roles, technical co-building, and high-impact software systems.",
  },
  headline: "Turning complex technical ideas into software people actually use.",
  subheadline:
    "Multidisciplinary builder working at the crossroads of full-stack engineering, applied artificial intelligence, and cinematic visual storytelling.",
  bioSummary:
    "I study Computer Science (AI) at GCET alongside Data Science at IIT Madras. Rather than separating theory from practice, I build full-stack systems—architecting scalable FastAPI backends, reactive Next.js client experiences, and data pipelines from zero to deployment.",
  email: "Anujkant.iitm@gmail.com",
  phone: "+91 7248838336",
  resumeUrl: undefined,
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/anujkant-iitm",
      icon: "Github",
      handle: "anujkant-iitm",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anujkant/",
      icon: "Linkedin",
      handle: "in/anujkant",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/Anujkant_iitm",
      icon: "Twitter",
      handle: "@Anujkant_iitm",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/anujkant__",
      icon: "Instagram",
      handle: "@anujkant__",
    },
  ],
  education: [
    {
      institution: "Galgotias College of Engineering & Technology",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering (Specialization in AI)",
      period: "2024 — 2028",
      details: "Rigorous computer science curriculum with core focus on data structures, algorithms, AI architectures, and distributed computing.",
      logoSrc: "/images/galgotia.png",
    },
    {
      institution: "Indian Institute of Technology (IIT) Madras",
      degree: "Bachelor of Science",
      field: "Data Science and Applications",
      period: "2024 — 2028",
      details: "Foundational and advanced mathematical modeling, statistical machine learning, algorithmic data structures, and database systems.",
      logoSrc: "/images/IITM.png",
    },
    {
      institution: "Central Board of Secondary Education",
      degree: "Senior Secondary Education",
      field: "Science & Mathematics Stream",
      period: "2019 — 2023",
      details: "Strong foundations in physics, chemistry, and mathematics with early self-guided programming exploration.",
      logoSrc: "/images/CBSE-LOGO.png",
    },
  ],
  hero: {
    characterImage: "/images/deadpool.png",
    characterAlt: "Anujkant — Software Engineer & Multidisciplinary Builder",
    displayTitle: "ANUJ KANT",
    editionRoman: "DEV",
    releaseTag: "PORTFOLIO [EDITION 2025 · DELHI & CHENNAI]",
    metaTags: ["FULL-STACK", "APPLIED AI", "SYSTEMS", "FASTAPI"],
    credits: ["GCET COMP SCI (AI)", "IIT MADRAS DATA", "FASTAPI & DISTRIBUTED", "CINEMATIC STORYTELLING"],
    storyBadge: "ENGINEERING ETHOS",
    storyHeading: "PART A.",
    storyText: "Turning complex technical architectures, distributed backends, and applied AI into software people actually use.",
    ctaText: "EXPLORE WORK",
    ctaHref: "#work",
  },
};

