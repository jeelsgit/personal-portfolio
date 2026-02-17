import { Experience, Project, SkillGroup, Education, Certification, Activity } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/jeelsgit",
  linkedin: "https://www.linkedin.com/in/jeel-tandel-6b6822294/",
  email: "mailto:jeelmiteshtandel@gmail.com"
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Development & APIs",
    icon: "fa-solid fa-code",
    skills: ["Python (FastAPI, Pandas)", "Java", "JavaScript/TypeScript", "RESTful APIs", "Node.js"]
  },
  {
    category: "Database & Data Engineering",
    icon: "fa-solid fa-database",
    skills: ["Oracle 19c", "PostgreSQL", "SQL Server", "MongoDB", "Pinecone (Vector DB)", "ETL"]
  },
  {
    category: "GIS & Spatial Analysis",
    icon: "fa-solid fa-map-location-dot",
    skills: ["ESRI ArcGIS Pro", "ArcPy", "PostGIS", "Spatial Modeling", "Location Intelligence", "QGIS"]
  },
  {
    category: "Infrastructure & Tools",
    icon: "fa-solid fa-server",
    skills: ["Docker", "Redis (Caching)", "Git/GitHub", "Oracle Cloud (OCI)", "LangChain", "Jira", "Linux"]
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "AI Engineer",
    company: "Xenara AI | Remote",
    date: "March 2025 – January 2026",
    achievements: [
      "RAG Architecture: Architected production-ready Retrieval-Augmented Generation (RAG) pipelines using LangChain and Pinecone, enabling semantic search over large unstructured datasets.",
      "Backend Optimization: Engineered high-performance FastAPI endpoints integrated with Redis caching, reducing data retrieval latency by 30% for high-traffic endpoints.",
      "NLP Pipelines: Implemented automated ETL workflows using Python and SpaCy to extract named entities from raw text, transforming unstructured inputs into structured JSON formats for analytics.",
      "DevOps & Cloud: Managed containerized application deployments using Docker on Oracle Cloud Infrastructure (OCI), ensuring consistent environments across development and production."
    ]
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Appy.yo | Remote",
    date: "September 2024 – December 2024",
    achievements: [
      "Analyzed and optimized PostgreSQL schema and indexing strategies, resulting in a 20% improvement in query execution time for critical reporting tools.",
      "Designed secure, scalable REST-based components using Java and Python, implementing OAuth 2.0 authentication flows to safeguard multi-tenant user data.",
      "Developed automated scripts to Extract, Transform, and Load (ETL) data from external third-party sources into central repositories, ensuring high data availability and design conformance.",
      "Collaborated in Agile sprints using Jira, conducting peer code reviews to maintain code quality and design standards."
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
    title: "Flood Risk Analysis Tool (NASA Space Apps)",
    description: "Engineered a data-driven prototype in 48 hours, integrating multiple environmental APIs to visualize critical flood data on a comprehensive spatial interface. Conducted real-time spatial data cleaning and validation using Python libraries (Pandas/GeoPandas) to ensure the accuracy of risk assessment models.",
    tech: ["Python", "GIS APIs", "Pandas", "GeoPandas"],
    repoUrl: "https://github.com/jeelsgit/NASA-Space-Apps-Flood-Mapping"
  },
  {
    title: "Task Management System",
    description: "Built a distributed REST API layer using Java with 90%+ test coverage, ensuring system stability and scalability. Developed a responsive frontend user interface using TypeScript, enabling seamless interaction with backend services for task tracking and status updates.",
    tech: ["Java", "TypeScript", "REST API"],
    repoUrl: "https://github.com/jeelsgit/Task-Manager",
  },
  {
    title: "Spotify Database Architecture",
    description: "Designed a normalized (3NF) relational schema and wrote PL/SQL triggers for playlist automation.",
    tech: ["Oracle 19c", "PL/SQL", "Data Modelling"]
  },
  {
    title: 'Accessible Notes App Compose',
    description: 'An accessible notes application for Android built with Jetpack Compose. Features include creating, viewing, editing, and deleting notes, with local data persistence using Room.',
    tech: ['Kotlin', 'Jetpack Compose', 'Room', 'Android'],
    repoUrl: 'https://github.com/jeelsgit/AccessibleNotesApp-Compose',
  },
  {
    title: 'Student Record System (JavaFX)',
    description: 'A desktop application for managing basic student records, built with JavaFX, Java, Apache Maven, and SQLite. This project demonstrates CRUD (Create, Read, Update, Delete) operations, dynamic search functionality, input validation, and a clean user interface.',
    tech: ['Java', 'JavaFX', 'SQLite', 'Maven'],
    repoUrl: 'https://github.com/jeelsgit/Student-Record-System-JavaFX',
  },
  {
    title: 'ML Project',
    description: 'This project implements machine learning algorithms to analyze three distinct datasets as part of the CST8400: Analysis and Design using Emerging Technologies course. The project involves data loading, preprocessing, exploratory data analysis through visualizations, model training, evaluation, and prediction.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    repoUrl: 'https://github.com/jeelsgit/ML_Project',
  },
  {
    title: 'Food Waste Reduction Platform',
    description: 'The Food Waste Reduction Platform is a comprehensive solution aimed at addressing the global issue of food waste by connecting food retailers, consumers, and charitable organisations.',
    tech: ['Java'],
    repoUrl: 'https://github.com/jeelsgit/FinalProject',
  },
  {
      title: 'Analysis of Accessibility to Key Urban Amenities in Ottawa',
      description: 'Identified and visualized accessibility deserts and oases in Ottawa using ArcGIS Pro. The project demonstrates a full GIS workflow from open data acquisition to spatial analysis and cartographic presentation, focusing on walking access to parks, transit, and community facilities.',
      tech: ['ArcGIS Pro', 'GIS', 'Spatial Analysis', 'Cartography'],
      repoUrl: 'https://github.com/jeelsgit/Ottawa-Accessibility-Analysis',
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "Computer Programming & Analysis (Diploma)",
    school: "Algonquin College",
    location: "Ottawa, Canada",
    graduatedDate: "August 2025",
    honors: "Honors",
    gpa: "3.7",
    description: "A comprehensive program focused on software development, object-oriented programming, database systems, and full-stack application development, with hands-on experience through real-world academic projects.",
    keyAreas: [
      "Object-Oriented Programming (Java, C#)",
      "Data Structures & Algorithms",
      "Database Design & SQL",
      "Web Application Development",
      "Software Design & Architecture",
      "Systems Analysis & Modeling",
      "Agile & Software Development Life Cycle (SDLC)"
    ]
  }
];

export const CERTIFICATION_DATA: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issuedDate: "Nov 2025",
    expiryDate: "Nov 2027",
    skills: ["AI/ML", "Machine Learning", "Deep Learning", "Gen AI", "OCI AI"]
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    issuedDate: "Nov 2025",
    expiryDate: "Nov 2027",
    skills: ["Cloud Computing", "Network Programming (TCP/IP, Sockets)", "Analytical Skills"]
  },
  {
    title: "Tata Group - GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    issuedDate: "Jun 2025",
    credentialId: "eirTkFYcQt6wX5N89",
    skills: ["GenAI", "Data Analytics", "Python", "Data Visualization"]
  },
  {
    title: "Getting Started with GIS",
    issuer: "Esri",
    issuedDate: "Apr 2025",
    credentialId: "04022025",
    skills: ["ArcGIS Pro", "ArcGIS Products", "ArcGIS Desktop"]
  },
  {
    title: "Academy Accreditation - Generative AI Fundamentals",
    issuer: "Databricks",
    issuedDate: "Sep 2024",
    expiryDate: "Sep 2026",
    credentialId: "116106438",
    skills: ["Generative AI", "LLMs", "AI Applications"]
  },
  {
    title: "Fundamentals of Predictive Project Management",
    issuer: "Project Management Institute",
    issuedDate: "Jan 2024",
    skills: ["Project Management", "Predictive Analytics", "Leadership"]
  },
  {
    title: "Introduction to Packet Tracer",
    issuer: "Cisco",
    issuedDate: "Jan 2024",
    skills: ["Network Fundamentals", "Packet Tracer", "Networking"]
  },
  {
    title: "JavaScript Arrays",
    issuer: "LinkedIn Learning",
    issuedDate: "Aug 2023",
    skills: ["JavaScript", "Arrays", "Web Development"]
  }
];

export const ACTIVITY_DATA: Activity[] = [
  {
    title: "Class Representative",
    organization: "Algonquin College of Applied Arts and Technology",
    date: "2023/2024",
    category: "Leadership",
    description: "Selected to represent my program and undertook various responsibilities fostering effective communication, enhancing self-confidence, and developing leadership skills. Recognized through Algonquin College's Co-Curricular Record Program."
  },
  {
    title: "Student Volunteer - New International Student Social (NISS)",
    organization: "Algonquin College of Applied Arts and Technology",
    date: "Jan 2024 – 1 month",
    category: "Volunteering",
    description: "Engaged volunteer leading efforts to create a warm and inclusive environment. Organized activities and facilitated connections for seamless integration of international students, emphasizing community building within diverse student population."
  },
  {
    title: "Student Volunteer - Event Assistance",
    organization: "Algonquin College of Applied Arts and Technology",
    date: "Sep 2023 – 1 month",
    category: "Volunteering",
    description: "Actively contributed as event assistance to new students, making a positive impact. Boosted teamwork and collaboration with personal and professional growth in a vibrant college environment."
  }
];


