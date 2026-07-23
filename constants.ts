import { Experience, Project, SkillGroup, Education, Certification, Activity } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/jeelsgit",
  linkedin: "https://www.linkedin.com/in/jeel-tandel-6b6822294/",
  email: "mailto:jeelmiteshtandel@gmail.com"
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages & Backend",
    icon: "fa-solid fa-code",
    skills: ["Python (FastAPI, Pandas)", "Java", "JavaScript/TypeScript", "RESTful APIs", "Node.js", "OAuth 2.0"]
  },
  {
    category: "AI & Machine Learning",
    icon: "fa-solid fa-brain",
    skills: ["PyTorch", "TensorFlow/Keras", "Hugging Face Transformers", "SpaCy (NER)", "Azure OpenAI", "LangChain", "Scikit-learn"]
  },
  {
    category: "Databases & Data Engineering",
    icon: "fa-solid fa-database",
    skills: ["PostgreSQL", "Oracle 19c (PL/SQL)", "MongoDB", "SQL Server", "Pinecone (Vector DB)", "ETL Pipelines"]
  },
  {
    category: "Infrastructure & Tools",
    icon: "fa-solid fa-server",
    skills: ["Docker", "Azure (Blob Storage, Azure ML)", "Git/GitHub", "Linux", "Jira", "Agile/Scrum"]
  },
  {
    category: "GIS & Spatial (Personal Focus)",
    icon: "fa-solid fa-map-location-dot",
    skills: ["ESRI ArcGIS Pro", "ArcPy", "GeoPandas", "PostGIS", "QGIS", "Spatial Analysis"]
  }
];

export const EXPERIENCE_DATA = [
  {
    role: 'Software Engineer (AI/Backend)',
    date: 'March 2025 – February 2026',
    company: 'Xenara Inc. | Mississauga, ON (Remote)',
    achievements: [
      'ML Feature Development: Developed and tested ML-powered features for Xenara\'s customer engagement platform, building scalable FastAPI endpoints to serve models in production.',
      'NLP Pipelines: Built NLP workflows using Azure OpenAI, Hugging Face Transformers, and SpaCy — including Named Entity Recognition, intent recognition, and sentiment analysis — to automate extraction and classification from unstructured text.',
      'Model Training: Trained and evaluated custom deep learning models with PyTorch and TensorFlow/Keras, supporting deployment and experiment tracking through Azure Machine Learning.',
      'Semantic Search: Contributed to a production RAG pipeline using LangChain and Pinecone, helping validate the architecture and reviewing design decisions for correctness.',
      'Data Engineering: Built preprocessing and feature-engineering pipelines transforming raw text stored in MongoDB into structured formats for model training and analytics.',
      'DevOps & Cloud: Containerized services with Docker and worked with Azure Blob Storage for datasets and model artifacts, keeping environments consistent across development and production.',
      'Mentorship: Onboarded and mentored new interns on the codebase, tooling, and development workflow while adhering to team coding standards in an Agile environment.',
    ],
  },
  {
    role: 'Full-Stack Developer Intern',
    date: 'September 2024 – December 2024',
    company: 'Appy.yo | Vancouver, BC (Remote)',
    achievements: [
      'Database Optimization: Analyzed and optimized PostgreSQL schema and indexing strategies, resulting in a 20% improvement in query execution time for critical reporting tools.',
      'Secure API Development: Designed secure, scalable REST components in Java and Python for the FlexyGig platform, implementing OAuth 2.0 authentication flows to safeguard multi-tenant user data.',
      'ETL Automation: Developed automated scripts to extract, transform, and load data from external third-party sources into central repositories, ensuring high data availability and design conformance.',
      'Agile Collaboration: Collaborated in 2-week Agile sprints using Jira, conducting peer code reviews to maintain code quality and design standards.',
    ],
  },
];

export const PROJECT_DATA: Project[] = [
  {
    title: "Task Management System",
    description: "Built a distributed REST API layer using Java with 90%+ test coverage, ensuring system stability and scalability. Developed a responsive frontend user interface using TypeScript, enabling seamless interaction with backend services for task tracking and status updates.",
    tech: ["Java", "TypeScript", "REST API"],
    repoUrl: "https://github.com/jeelsgit/Task-Manager",
  },
  {
    title: 'Analysis of Accessibility to Key Urban Amenities in Ottawa',
    description: 'Identified and visualized accessibility deserts and oases in Ottawa using ArcGIS Pro. The project demonstrates a full GIS workflow from open data acquisition to spatial analysis and cartographic presentation, focusing on walking access to parks, transit, and community facilities.',
    tech: ['ArcGIS Pro', 'GIS', 'Spatial Analysis', 'Cartography'],
    repoUrl: 'https://github.com/jeelsgit/Ottawa-Accessibility-Analysis',
  },
  {
    title: "Flood Risk Analysis Tool (NASA Space Apps)",
    description: "Engineered a data-driven prototype in 48 hours, integrating multiple environmental APIs to visualize critical flood data on a spatial interface. Conducted real-time spatial data cleaning and validation using Python libraries (Pandas/GeoPandas) to ensure the accuracy of risk assessment models.",
    tech: ["Python", "GIS APIs", "Pandas", "GeoPandas"],
    repoUrl: "https://github.com/jeelsgit/NASA-Space-Apps-Flood-Mapping"
  },
  {
    title: "Spotify Database Architecture",
    description: "Designed a normalized (3NF) relational schema handling complex many-to-many relationships between artists, albums, and playlists, and wrote PL/SQL stored procedures and triggers to automate playlist logic and enforce data consistency.",
    tech: ["Oracle 19c", "PL/SQL", "Data Modelling"]
  },
  {
    title: 'Accessible Notes App (Compose)',
    description: 'An accessible notes application for Android built with Jetpack Compose. Features include creating, viewing, editing, and deleting notes, with local data persistence using Room.',
    tech: ['Kotlin', 'Jetpack Compose', 'Room', 'Android'],
    repoUrl: 'https://github.com/jeelsgit/AccessibleNotesApp-Compose',
  },
  {
    title: 'Student Record System (JavaFX)',
    description: 'A desktop application for managing student records, built with JavaFX, Java, Apache Maven, and SQLite. Demonstrates full CRUD operations, dynamic search, input validation, and a clean user interface.',
    tech: ['Java', 'JavaFX', 'SQLite', 'Maven'],
    repoUrl: 'https://github.com/jeelsgit/Student-Record-System-JavaFX',
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "Advanced Diploma, Computer Programming & Analysis",
    school: "Algonquin College",
    location: "Ottawa, Canada",
    graduatedDate: "August 2025",
    honors: "Dean's Honors List (All Terms)",
    gpa: "3.7/4.0",
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
  }
];

export const ACTIVITY_DATA: Activity[] = [
  {
    title: "Class Representative",
    organization: "Algonquin College of Applied Arts and Technology",
    date: "2023/2024",
    category: "Leadership",
    description: "Elected liaison for 50+ students, facilitating communication between faculty and peers to resolve academic concerns and organize study sessions. Recognized through Algonquin College's Co-Curricular Record Program."
  },
  {
    title: "Student Volunteer - New International Student Social (NISS)",
    organization: "Algonquin College of Applied Arts and Technology",
    date: "Jan 2024 – 1 month",
    category: "Volunteering",
    description: "Helped create a welcoming environment for incoming international students, organizing activities and facilitating connections to support their integration into the college community."
  },
  {
    title: "Student Volunteer - Event Assistance",
    organization: "Algonquin College of Applied Arts and Technology",
    date: "Sep 2023 – 1 month",
    category: "Volunteering",
    description: "Supported new-student orientation events, assisting with logistics and helping students navigate their first weeks on campus."
  }
];
