export const NAV_LINKS = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Contact",
];

export const SKILLS = [
  {
    icon: "🐍",
    title: "Backend & Frameworks",
    tags: [
      "Python",
      "JavaScript ES6+",
      "FastAPI",
      "Django",
      "Flask",
      "ReactJS",
    ],
  },
  {
    icon: "🤖",
    title: "AI / GenAI",
    tags: [
      "LLMs + Integration",
      "RAG",
      "Hugging Face",
      "Transformers",
      "Embeddings",
      "Vector Databases",
      "Prompt Engineering",
      "NLP",
      "Agentic AI",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    icon: "🗄️",
    title: "Databases",
    tags: ["PostgreSQL", "MongoDB", "MySQL", "Vector Store"],
  },
  {
    icon: "🔌",
    title: "API & Architecture",
    tags: [
      "REST API Design",
      "Microservices",
      "Webhooks",
      "JWT / OAuth",
      "Pydantic",
      "Redis",
      "Celery",
    ],
  },
  {
    icon: "☁️",
    title: "DevOps / Cloud",
    tags: ["Docker", "Git / GitHub", "AWS (EC2, S3)", "GCP (Vertex AI)"],
  },
  {
    icon: "📊",
    title: "Libraries & Tools",
    tags: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Postman", "OpenCV"],
  },
  {
    icon: "⚡",
    title: "Methodologies",
    tags: ["Agile / Scrum", "Code Reviews", "Unit Testing"],
  },
];

export const PROJECTS = [
  {
    num: "01",
    badge: "Production Ready",
    category: ["ai", "fullstack"],
    title: "GitHub PR ReviewBot",
    desc: "AI-native code review agent — submit a GitHub PR URL, get a structured review with scored findings, severity-tagged issues, and a benchmark comparison against vanilla Claude.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "LLM / GenAI",
      "Groq",
      "ReactJS",
      "Pydantic",
      "Redis",
      "Celery",
    ],
    github: "https://github.com/ROSHAN-KHANDAGALE/Pull-Request-Review-Pilot",
  },
  {
    num: "02",
    badge: "Featured",
    category: ["fullstack"],
    title: "PDF Chatbot",
    desc: "AI-powered PDF chatbot built with FastAPI and React. Extracts text from PDFs, generates embeddings, and enables natural language querying with LLM integration. Features a sleek React UI for seamless interactions.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "LLM / GenAI",
      "Groq",
      "ReactJS",
      "Pydantic",
    ],
    github: "https://github.com/ROSHAN-KHANDAGALE/PDF-Chatbot",
  },
  {
    num: "03",
    badge: "Latest",
    category: ["ai", "fullstack"],
    title: "AI Database Assistant",
    desc: "Full-stack AI-powered SQL assistant converting plain English to optimized SQL queries. Features injection prevention, row limiting, async query execution, and a React dark UI with real-time generation and paginated results.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "LLM / GenAI",
      "Groq",
      "ReactJS",
      "Pydantic",
    ],
    github:
      "https://github.com/ROSHAN-KHANDAGALE/AI-Database-Assistant-Backend",
  },
  {
    num: "04",
    badge: null,
    category: ["backend"],
    title: "Personal Finance Tracker",
    desc: "RESTful API system for managing financial transactions with JWT authentication and RBAC. MongoDB schema supports expense categorization, dynamic date-range filtering, real-time summaries, and exportable reports.",
    tech: ["Python", "Flask", "MongoDB", "JWT", "REST API"],
    github: "https://github.com/ROSHAN-KHANDAGALE/Personal-Finance-Tracker",
  },
  {
    num: "05",
    badge: null,
    category: ["backend"],
    title: "GitHub Webhook Tracker",
    desc: "Production-ready webhook listener capturing GitHub push, pull request, and merge events in real time. Includes payload validation, idempotency checks, and a normalized PostgreSQL schema with indexed lookups.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Webhooks", "Idempotency"],
    github: "https://github.com/ROSHAN-KHANDAGALE/Webhook-Tracker-Github",
  },
  {
    num: "06",
    badge: null,
    category: ["more"],
    title: "More Projects",
    desc: "Explore more of my projects on GitHub, showcasing a range of skills from backend development to AI integrations and data processing.",
    tech: [
      "Python",
      "JavaScript",
      "AI/ GenAI",
      "Web Development",
      "Production Ready",
    ],
    github: "https://github.com/ROSHAN-KHANDAGALE?tab=repositories",
  },
];

export const EXPERIENCE = [
  {
    company: "Quantum Integrators Pvt. Ltd.",
    role: "Junior Software Engineer",
    period: "05/2025 - Present",
    startDate: "2025-05-01", // ISO date — used to calculate years of experience
    endDate: null, // null means "Present"
    location: "Nagpur, MH",
    points: [
      "Architected and deployed scalable FastAPI microservices for high-throughput requests, improving modularity and reducing inter-service coupling.",
      "Designed RESTful APIs with authentication & authorization, ensuring secure access control across frontend and backend services.",
      "Built high-performance Python data processing modules for structured and unstructured data.",
      "Optimized PostgreSQL/MySQL schemas with indexing strategies, cutting query execution time.",
      "Integrated AI-based LLM features into existing backend systems enabling intelligent response generation.",
      "Followed Agile/Scrum practices: sprint planning, daily standups, and iterative delivery cycles.",
    ],
  },
  {
    company: "SmartData Enterprises Pvt. Ltd.",
    role: "Associate Trainee",
    period: "09/2024 - 02/2025",
    startDate: "2024-09-01",
    endDate: "2025-02-28",
    location: "Nagpur, MH",
    points: [
      "Developed backend Python modules for a voice-to-chat interaction system with real-time voice processing.",
      "Designed secure REST APIs with request validation and role-based authorization.",
      "Integrated a third-party payment gateway using Django with error handling and reconciliation logic.",
      "Improved API response performance by ~30% through query optimization and connection pooling.",
      "Built ReactJS frontend components bridging backend APIs and dynamic UI experience.",
      "Containerized dev environments using Docker, streamlining onboarding across dev/staging.",
    ],
  },
];

export const EDUCATION = [
  {
    icon: "🎓",
    degree: "B.Tech — Computer Science & Engineering",
    uni: "Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU)",
    period: "12/2021 - 07/2024 · Nagpur, MH",
  },
  {
    icon: "📐",
    degree: "Diploma — Computer Engineering",
    uni: "Maharashtra State Board of Technical Education (MSBTE)",
    period: "08/2018 - 08/2021 · Amravati, MH",
  },
];

export const CERTIFICATIONS = [
  {
    icon: "🤗",
    title: "AI Agents Fundamentals",
    issuer: "Hugging Face · 03/2026",
  },
  { icon: "☁️", title: "Google Vertex AI", issuer: "Google · 01/2026" },
  {
    icon: "💼",
    title: "Software Engineering Lite Job Simulation",
    issuer: "Forage · 12/2023",
  },
  {
    icon: "📄",
    title: "Paper Presentation — National Conference",
    issuer: "Emerging Trends · 04/2023",
  },
  {
    icon: "🚀",
    title: "VIDYOTAN2K19 — Start-Up Conclave",
    issuer: "SIPNA College of Engg. · 02/2019",
  },
];

export const CONTACT_LINKS = [
  {
    icon: "email",
    label: "Email",
    value: "roshankhandagale08@gmail.com",
    href: "mailto:roshankhandagale08@gmail.com",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/roshan-khandagale",
    href: "https://linkedin.com/in/roshan-khandagale",
  },
  {
    icon: "github",
    label: "GitHub",
    value: "github.com/ROSHAN-KHANDAGALE",
    href: "https://github.com/ROSHAN-KHANDAGALE",
  },
];

export const CURRENTLY_LEARNING = [
  {
    icon: "🧠",
    title: "Agentic AI Systems",
    description:
      "Building multi-agent workflows using LangGraph and AutoGen — orchestrating LLM agents that plan, execute, and self-correct.",
    tag: "AI / GenAI",
    progress: 65, // percentage — update as you learn
    resource: "LangGraph Docs",
    resourceUrl: "https://langchain-ai.github.io/langgraph/",
  },
  {
    icon: "🔍",
    title: "Vector Search & RAG Optimization",
    description:
      "Diving deeper into advanced RAG techniques — reranking, hybrid search, and optimizing retrieval quality with pgvector and ChromaDB.",
    tag: "AI / GenAI",
    progress: 70,
    resource: "LlamaIndex Docs",
    resourceUrl: "https://docs.llamaindex.ai/",
  },
  {
    icon: "☁️",
    title: "AWS for Backend Devs",
    description:
      "Going beyond EC2 and S3 — exploring Lambda, SQS, API Gateway, and deploying FastAPI services on AWS.",
    tag: "DevOps / Cloud",
    progress: 35,
    resource: "AWS Docs",
    resourceUrl: "https://docs.aws.amazon.com/",
  },
];