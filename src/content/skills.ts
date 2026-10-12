import { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Software Engineering & Backend",
    description:
      "Designing resilient APIs, clean relational schemas, and asynchronous services that prioritize correctness and operational predictability.",
    skills: [
      {
        name: "FastAPI & Python",
        context: "High-performance async APIs with Pydantic validation (AirDose, Studyit).",
        level: "Core",
      },
      {
        name: "PostgreSQL & SQLAlchemy",
        context: "Normalized relational schemas, Alembic migrations, connection pooling.",
        level: "Core",
      },
      {
        name: "RESTful API Architecture",
        context: "Clean endpoint contracts, rate limiting, and HTTP semantic status handling.",
        level: "Core",
      },
      {
        name: "Authentication & Security",
        context: "Google OAuth 2.0, JWT bearer tokens, and role-based access control.",
        level: "Proficient",
      },
      {
        name: "Docker & Containerization",
        context: "Multi-stage builds, container isolation for CV & backend runtimes.",
        level: "Proficient",
      },
      {
        name: "Node.js & Express",
        context: "Microservice utilities, tooling scripts, and server-side runtimes.",
        level: "Proficient",
      },
    ],
  },
  {
    title: "Frontend Architecture & Systems",
    description:
      "Crafting responsive, accessible, and fast web experiences with clean typographic hierarchy and strict TypeScript.",
    skills: [
      {
        name: "Next.js & App Router",
        context: "Server components, streaming metadata, and dynamic routing architectures.",
        level: "Core",
      },
      {
        name: "React & TypeScript",
        context: "Strict typing, reusable component composition, custom reactive hooks.",
        level: "Core",
      },
      {
        name: "Tailwind CSS & Design Systems",
        context: "Fluid clamp() typography, semantic CSS tokens, and restrained palette design.",
        level: "Core",
      },
      {
        name: "Web Performance & Core Web Vitals",
        context: "Layout shift mitigation, responsive image optimization, and fast LCP.",
        level: "Proficient",
      },
      {
        name: "Interactive Motion",
        context: "Intentional micro-interactions respecting prefers-reduced-motion.",
        level: "Proficient",
      },
    ],
  },
  {
    title: "Artificial Intelligence & Data Science",
    description:
      "Rooted in rigorous mathematical modeling and statistical data analysis from BS at IIT Madras.",
    skills: [
      {
        name: "Machine Learning Foundations",
        context: "Supervised and unsupervised learning, mathematical optimization, feature engineering.",
        level: "Core",
      },
      {
        name: "Data Analysis & Pandas / NumPy",
        context: "Data cleaning, statistical distributions, telemetry aggregation pipelines.",
        level: "Core",
      },
      {
        name: "Computer Vision (OpenCV)",
        context: "Image processing, bounding box calculation, moderation microservices.",
        level: "Proficient",
      },
      {
        name: "AI Product Integration",
        context: "Connecting LLM / AI toolchains to structured application workflows.",
        level: "Exploring",
      },
    ],
  },
  {
    title: "Creative Storytelling & Visual Media",
    description:
      "Filmmaking and video editing are complementary disciplines—both require rhythm, structural discipline, and deep audience empathy.",
    skills: [
      {
        name: "Filmmaking & Visual Narrative",
        context: "Structuring conceptual narratives, storyboarding, pacing, and visual framing.",
        level: "Core",
      },
      {
        name: "Video Editing & Color Grading",
        context: "Post-production precision, timing cuts, auditory soundscapes, and color science.",
        level: "Core",
      },
      {
        name: "Technical Storytelling",
        context: "Translating intricate software architecture into engaging visual formats.",
        level: "Proficient",
      },
      {
        name: "Content Creation & Direction",
        context: "Visual communication for software releases, demos, and creative projects.",
        level: "Proficient",
      },
    ],
  },
];
