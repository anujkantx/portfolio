import { ProjectItem } from "@/types/portfolio";

export const projects: ProjectItem[] = [
  {
    slug: "airdose",
    title: "AirDose",
    tagline: "Location-aware personal air pollution exposure intelligence & environmental health tracking.",
    category: "Full-Stack & Systems",
    year: "2024 — 2025",
    featured: true,
    status: "Prototype / Hackathon",
    githubUrl: "https://github.com/anujkant-iitm/airdose",
    demoNote: "Hackathon project repository & architectural prototype. Deployed on AWS during evaluation.",
    techStack: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "OpenAQ / Air APIs", "AWS"],
    summary:
      "A personal environmental telemetry system that moves beyond static city-wide AQI averages to calculate individual cumulative pollutant dosages based on location history and route exposure.",
    problem:
      "Most public air-quality apps only display generalized city-level metrics from sparse monitoring stations. They fail to reflect hyper-local pollution spikes (traffic junctions, industrial zones) or calculate the actual cumulative physiological dose an individual inhales while commuting.",
    solution:
      "AirDose captures route waypoints and correlates them with real-time pollutant telemetry (PM2.5, PM10, NO2, O3) using a FastAPI calculation pipeline. It generates personal exposure curves and provides low-exposure alternative route advisories.",
    ownerRole: "Full-Stack System Architect & Backend Engineer",
    architecture: {
      client: [
        "Next.js App Router for responsive telemetry dashboards",
        "Tailwind CSS for restrained data-dense interfaces",
        "Client-side geospatial coordinate mapping and dosage graphs",
      ],
      server: [
        "FastAPI asynchronous endpoints for route ingestion",
        "Air quality API aggregator with caching layer",
        "Dosage mathematical calculation engine",
      ],
      data: [
        "PostgreSQL for user routes, waypoints, and exposure history",
        "In-memory Redis cache for external atmospheric API queries",
      ],
      infrastructure: [
        "AWS EC2 instance container runtime",
        "Nginx reverse proxy with TLS termination",
        "Docker containerized backend service",
      ],
    },
    engineeringChallenges: [
      "Mitigating external air quality API rate limits by designing a spatial geohash-based cache with a 15-minute sliding TTL.",
      "Developing a mathematical model to convert discrete spatial waypoints and temporal duration into continuous cumulative PM2.5 inhalation estimates.",
      "Keeping client-side geospatial rendering responsive on mobile browsers without blocking the main JavaScript thread.",
    ],
    tradeOffs: [
      "Chose discrete periodic location sampling over continuous real-time background GPS streaming to drastically conserve mobile battery life.",
      "Adopted asynchronous FastAPI over Django for lightweight microsecond concurrency during batch coordinate submissions.",
    ],
    currentStatusDetails:
      "Built and demonstrated during hackathon sprint. Backend API architecture and geospatial exposure models validated. Next phase involves real-world sensor validation and progressive web app offline sync.",
    accentColor: "#2563EB",
  },
  {
    slug: "studyit",
    title: "Studyit",
    tagline: "Academic intelligence & resource ecosystem for university engineering undergraduates.",
    category: "SaaS & Education",
    year: "2024 — 2025",
    featured: true,
    status: "In Active Development",
    githubUrl: "https://github.com/anujkant-iitm/studyit",
    demoNote: "Active software engineering project under continuous iteration.",
    techStack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "SQLAlchemy", "Google OAuth", "Tailwind CSS"],
    summary:
      "A structured academic SaaS platform designed to replace chaotic file-sharing drives with an indexed repository of university curriculum materials, previous-year question papers (PYQs), and subject quizzes.",
    problem:
      "University students lose countless hours navigating broken Google Drive links, fragmented WhatsApp group forwards, and unindexed photo dumps to locate past exam papers and syllabus-aligned notes.",
    solution:
      "Studyit introduces an ontological curriculum structure (Degree → Department → Semester → Subject → Unit) that connects students to verified question papers, community solutions, and concept quizzes with Google OAuth single sign-on.",
    ownerRole: "Lead Product Architect & Full-Stack Developer",
    architecture: {
      client: [
        "Next.js App Router with React Server Components for fast page loads",
        "TypeScript with strict schema validation",
        "PDF document streaming viewer and quiz interface",
      ],
      server: [
        "FastAPI modular routers with dependency injection",
        "Google OAuth2 authentication flow with JWT session management",
        "Pydantic schemas for strict request/response contracts",
      ],
      data: [
        "PostgreSQL relational database hosted with connection pooling",
        "SQLAlchemy ORM with Alembic migration version control",
      ],
      infrastructure: [
        "Vercel frontend hosting",
        "Render / Docker backend deployment",
        "Cloud object storage for curriculum document assets",
      ],
    },
    engineeringChallenges: [
      "Designing a flexible database schema that seamlessly models disparate university semester systems, elective courses, and credit schemes without schema corruption.",
      "Building a safe document upload and preview pipeline that validates MIME types and protects against malicious file payloads.",
      "Implementing instant client-side search filtering across hundreds of categorized academic resources with zero noticeable lag.",
    ],
    tradeOffs: [
      "Chose PostgreSQL relational integrity with foreign key constraints over a schemaless document store to prevent orphaned question paper records.",
      "Used JWT bearer authentication with rotating refresh tokens for stateless scalability across microservices.",
    ],
    currentStatusDetails:
      "Core authentication, syllabus hierarchy, and document listing engines are completed. Currently refining the interactive quiz evaluation system and community paper-contribution review workflow.",
    accentColor: "#0D9488",
  },
  {
    slug: "visionguard",
    title: "VisionGuard",
    tagline: "High-performance computer vision toolkit for automated content moderation & bounding.",
    category: "AI & Computer Vision",
    year: "2024",
    featured: false,
    status: "Prototype / Hackathon",
    githubUrl: "https://github.com/anujkant-iitm",
    demoNote: "Exploratory computer vision service pipeline.",
    techStack: ["Python", "FastAPI", "OpenCV", "NumPy", "Docker"],
    summary:
      "A containerized computer vision microservice providing image analysis, edge detection, and boundary bounding for image safety verification.",
    problem:
      "Integrating heavy computer vision frameworks into lightweight web services frequently introduces severe deployment bloat and memory exhaustion on modest hosting tiers.",
    solution:
      "VisionGuard packages targeted OpenCV pipelines into a stripped-down Docker image with FastAPI, processing image buffer streams directly in memory.",
    ownerRole: "Computer Vision & Backend Developer",
    architecture: {
      client: ["RESTful client integration interface"],
      server: ["FastAPI async endpoints receiving binary image streams"],
      data: ["In-memory NumPy array transformations, zero disk footprint"],
      infrastructure: ["Alpine/Debian-slim multi-stage Docker container"],
    },
    engineeringChallenges: [
      "Minimizing container image size while bundling required C++ OpenCV dependencies.",
      "Preventing server memory leaks during rapid bursts of high-resolution multipart image uploads.",
    ],
    tradeOffs: [
      "Opted for in-memory buffer processing over disk temporary files to maximize throughput at the cost of bounding maximum payload size to 15MB.",
    ],
    currentStatusDetails:
      "Algorithmic pipeline validated. Maintained as a reusable microservice template for vision integration in web apps.",
    accentColor: "#E11D48",
  },
  {
    slug: "quantx",
    title: "QuantX",
    tagline: "Integrated engineering productivity canvas and focus telemetry dashboard.",
    category: "Tooling",
    year: "2024",
    featured: false,
    status: "Prototype / Hackathon",
    githubUrl: "https://github.com/anujkant-iitm",
    demoNote: "Productivity workspace prototype.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    summary:
      "A developer productivity tool merging time-blocking, urgent-important Eisenhower matrices, and sprint session metrics into one distraction-free canvas.",
    problem:
      "Switching between disparate timer apps, todo list widgets, and calendar sheets breaks deep focus during software development sprints.",
    solution:
      "QuantX offers a centralized workspace with keyboard-driven task transitions, focus timers, and session analytics.",
    ownerRole: "Full-Stack Developer",
    architecture: {
      client: ["React Single Page Application with Tailwind styling"],
      server: ["Express.js RESTful API endpoints"],
      data: ["MongoDB document database for flexible task metadata"],
      infrastructure: ["Render containerized deployment"],
    },
    engineeringChallenges: [
      "Maintaining synchronization between client focus timers and server state across browser tab lifecycles.",
    ],
    tradeOffs: [
      "Chose MongoDB for rapid prototyping of evolving task schema fields.",
    ],
    currentStatusDetails:
      "Functional prototype demonstrating unified workflow architecture.",
    accentColor: "#8B5CF6",
  },
];
