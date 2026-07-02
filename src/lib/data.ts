// ---------------------------------------------------------------------------
//  Single source of truth for all portfolio content.
//  Update links / text here and every section stays in sync.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Aditya Raj",
  firstName: "Aditya",
  role: "Full-Stack Software Development Engineer",
  tagline:
    "I design and ship scalable backend systems, AI-powered agents, and cloud-native applications.",
  summary:
    "Full-Stack SDE with 4+ years designing and delivering scalable backend systems, AI-powered agents, and cloud-native applications with Java, Python, Node.js, and TypeScript. Deep hands-on expertise in Generative AI, LLM integration, RAG pipelines, prompt engineering, and microservices — delivering measurable impact across 80+ enterprise organizations in Agile/Scrum environments.",
  location: "Gurugram, Haryana, India",
  email: "aditya.raj.swe@gmail.com",
  phone: "+91 8178740796",
  // TODO: replace the two links below with your real profile URLs
  linkedin: "https://www.linkedin.com/in/aditya-raj",
  github: "https://github.com/aditya-raj",
  resumeUrl: "/Aditya_Raj_Resume.pdf",
};

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "80+", label: "Enterprise Orgs Impacted" },
  { value: "40%", label: "Manual Review Time Cut" },
  { value: "6+", label: "AI Agents Shipped" },
];

export const about = {
  highlights: [
    "Architect scalable FastAPI + LangChain/LangGraph backends powering production AI agents.",
    "Build RAG pipelines, MCP-based agents, and semantic search over enterprise data.",
    "Ship full-stack features end-to-end — Spring Boot / Node.js APIs to Flutter & React UIs.",
    "Design cloud-native, containerized systems on GCP/AWS with CI/CD and observability.",
  ],
};

export type SkillGroup = {
  title: string;
  icon: string; // lucide icon name key handled in the component
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "Code2",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    title: "Backend & AI Frameworks",
    icon: "Server",
    skills: [
      "Node.js",
      "FastAPI",
      "Flask",
      "Spring Boot",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Distributed Systems",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    title: "Frontend",
    icon: "LayoutDashboard",
    skills: ["React", "Next.js", "Angular", "Flutter", "Tailwind CSS"],
  },
  {
    title: "Databases & Vector Stores",
    icon: "Database",
    skills: [
      "PostgreSQL",
      "MariaDB",
      "MongoDB",
      "pgvector",
      "Pinecone",
      "FAISS",
      "Chroma DB",
      "Redis",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "Cloud",
    skills: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Terraform",
      "Ansible",
      "Nginx",
      "Caddy",
      "GCP",
      "AWS",
      "Azure",
      "CI/CD",
    ],
  },
  {
    title: "Generative AI & Observability",
    icon: "Sparkles",
    skills: [
      "LLM Integration",
      "RAG Pipelines",
      "Prompt Engineering",
      "MCP",
      "AI Agents",
      "OpenAI API",
      "Hugging Face",
      "LLMOps",
      "Elasticsearch (ELK)",
      "Grafana",
    ],
  },
];

// Flat list used by the scrolling marquee ticker
export const skillTicker = [
  "Python",
  "TypeScript",
  "Java",
  "FastAPI",
  "LangChain",
  "LangGraph",
  "Node.js",
  "Spring Boot",
  "React",
  "Next.js",
  "Flutter",
  "PostgreSQL",
  "pgvector",
  "Pinecone",
  "RAG",
  "MCP Agents",
  "OpenAI API",
  "Docker",
  "Kubernetes",
  "GCP",
  "AWS",
  "Redis",
  "GraphQL",
  "Prompt Engineering",
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Development Engineer — 2",
    company: "PeopleStrong",
    location: "Gurugram, Haryana",
    period: "Jan 2022 — Present",
    points: [
      "Architected a scalable FastAPI backend with LangChain orchestration for an AI feedback agent used by 80+ organizations — integrating PostgreSQL and RAG to automate insight generation from MS Teams and Outlook, cutting manual review time by 40%.",
      "Built MCP-based agents including a Leave Agent (retrieves leave info and automates applications) and a Performance Agent (retrieves performance data, enables goal creation, and monitors goal progress for continuous performance management).",
      "Developed an AI-powered co-recruiter integrated with Microsoft Teams to extract interview transcripts and recordings, using semantic search and RAG to analyze candidate responses and generate structured, JD-based evaluations for data-driven hiring.",
      "Led, as an Individual Contributor, the complete revamp of the Goal Management & Performance Review module — moving from fixed to configurable roles via Spring and Node.js APIs and a Flutter UI for flexible workflow configuration across 80+ orgs.",
      "Partnered with the Flutter revamp team to build the Leave and Performance Management modules from scratch with Role-Based Access Control (RBAC), delivering scalable, user-friendly interfaces with seamless backend integration.",
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  accent: string; // tailwind gradient classes for the card header glow
  // TODO: replace "#" links with your real GitHub / live demo URLs
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "AI-Tutor",
    blurb:
      "An AI tutor that ingests PDFs and topics, converts content into vector embeddings, and runs semantic search to retrieve context for LLM answers. Uses a Bull queue for async processing to chunk, store, and serve responses at scale.",
    stack: ["React", "LangChain", "Flask", "Redis", "Bull Queues"],
    accent: "from-indigo-500 to-cyan-400",
    github: "#",
    demo: "#",
  },
  {
    name: "AI-News",
    blurb:
      "An AI news parser that scrapes news sites and uses RAG to extract and summarize the most relevant stories with high precision in 60 words — concise, accurate, context-aware digests from large volumes of content.",
    stack: ["Flutter", "LangChain", "Flask", "RAG"],
    accent: "from-violet-500 to-fuchsia-400",
    demo: "#",
  },
  {
    name: "Ruby AI",
    blurb:
      "A mobile app that helps doctors transcribe patient appointments and generate structured SOAP summaries — with AI-driven suggestions for diagnosis, medication, and lab tests, plus voice-based dictation that auto-generates prescriptions.",
    stack: ["Flutter", "Node.js", "PostgreSQL", "LLM"],
    accent: "from-rose-500 to-orange-400",
    demo: "#",
  },
  {
    name: "Ruby RX",
    blurb:
      "A prescription-management companion to Ruby AI that tracks potential drug–drug interactions for medication safety, and uses Google Vision to read typed and handwritten prescriptions into structured digital records.",
    stack: ["Flutter", "Node.js", "PostgreSQL", "Google Vision"],
    accent: "from-emerald-500 to-teal-400",
    demo: "#",
  },
];

export const education = {
  school: "Birla Institute of Technology, Mesra",
  degree: "Bachelor of Technology",
  location: "Ranchi, Jharkhand",
  period: "Jul 2018 — Jun 2022",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ---------------------------------------------------------------------------
//  Web3Forms — get a free access key at https://web3forms.com (tied to the
//  inbox you want notified) and paste it below, or set NEXT_PUBLIC_WEB3FORMS_KEY.
// ---------------------------------------------------------------------------
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";
