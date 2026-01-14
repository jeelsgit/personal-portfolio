import { Experience, Project, SkillGroup } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com", // Placeholder as per prompt instructions to use generic or provided
  linkedin: "https://linkedin.com",
  email: "mailto:jeelmiteshtandel@gmail.com"
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Software Engineering",
    icon: "fa-solid fa-code",
    skills: ["Java (OOP)", "Python", "TypeScript", "FastAPI", "Node.js", "Docker", "CI/CD"]
  },
  {
    category: "Data & AI",
    icon: "fa-solid fa-database",
    skills: ["Oracle 19c", "PostgreSQL", "MongoDB", "LangChain", "Pinecone (Vector DB)", "ETL Pipelines"]
  },
  {
    category: "Geospatial (GIS)",
    icon: "fa-solid fa-map-location-dot",
    skills: ["ArcGIS Pro", "Spatial Data Modelling", "ArcPy Automation", "Location Intelligence", "QGIS"]
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "AI & Data Engineer (GIS & Backend)",
    company: "Xenara AI | Remote",
    date: "March 2025 – Dec 2025",
    achievements: [
      "Architected production-ready RAG pipelines using LangChain & Pinecone.",
      "Integrated LLMs with geospatial datasets for location-aware conversational insights.",
      "Reduced data processing latency by 30% via Python automation and root cause analysis."
    ]
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Appy.yo | Remote",
    date: "Sept 2024 – Dec 2024",
    achievements: [
      "Optimized PostgreSQL query performance by 20% through indexing strategies.",
      "Built distributed REST API layers using Java and Python.",
      "Implemented secure OAuth 2.0 authentication flows."
    ]
  }
];

export const PROJECT_DATA: Project[] = [
  {
    title: "RAG Pipeline & GIS Integration",
    description: "Architected a semantic search engine over unstructured data, integrating AI logic with GIS mapping tools.",
    tech: ["Python", "LangChain", "Pinecone", "ArcGIS"]
  },
  {
    title: "NASA Flood Risk Analysis Tool",
    description: "Engineered a data-driven prototype in 48 hours to visualize critical flood data using environmental APIs.",
    tech: ["Python", "Pandas", "Spatial Analysis"]
  },
  {
    title: "Spotify Database Architecture",
    description: "Designed a normalized (3NF) relational schema and wrote PL/SQL triggers for playlist automation.",
    tech: ["Oracle 19c", "PL/SQL", "Data Modelling"]
  }
];
