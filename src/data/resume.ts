// All content sourced directly from Saurabh Bhatt's resume. No invented data.

export const summary = [
  "GenAI-focused MERN Stack Developer with 3.4 years of experience delivering scalable, production-ready web applications and LLM-powered features from concept to deployment.",
  "Experienced in building GenAI-driven products, including natural-language-to-SQL query engines, prompt-based data pipelines, and structured LLM output integration.",
  "Expert in building full-stack applications using React.js, Next.js, Node.js, Express.js, and MongoDB with clean, maintainable code.",
  "Strong command of TypeScript, REST API design, microservices architecture, JWT/OAuth authentication, and async data pipelines.",
  "Hands-on experience integrating LLM APIs, prompt engineering, and structured output parsing into production backend systems.",
  "Proficient in performance optimization through Redis caching, async processing, query optimization, and efficient API design.",
  "Comfortable working in agile, cross-functional teams — delivering AI-enabled features end-to-end across complex multi-platform products.",
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "MERN Stack Developer",
    company: "HestaBit Technologies Private Limited",
    period: "June 2023 – Present",
    bullets: [
      "Led full-stack development of multiple production-grade web applications using Next.js, Node.js, Express.js, and MongoDB.",
      "Built and maintained scalable REST APIs and microservices supporting real-time data processing and high-traffic campaign workflows.",
      "Developed reusable, component-based frontends with Next.js and Tailwind CSS for improved performance and consistency.",
      "Designed and integrated LLM-powered features, including natural-language query interfaces and prompt-driven data pipelines with structured output validation.",
      "Implemented secure authentication systems using JWT and OAuth, along with role-based access control across applications.",
      "Integrated Redis caching, async processing, and cron jobs to optimize backend throughput and reduce latency.",
      "Collaborated with cross-functional teams to deliver features across analytics dashboards, campaign management, and data platforms.",
    ],
  },
  {
    role: "Trainee Developer",
    company: "HestaBit Technologies Private Limited",
    period: "Jan 2023 – June 2023",
    bullets: [
      "Developed frontend components using Next.js and contributed to backend API development with Node.js and Express.js.",
      "Gained hands-on experience with MongoDB schema design, REST API integration, and agile development workflows.",
    ],
  },
];

export type ProjectEntry = {
  name: string;
  role: string;
  team: string;
  bullets: string[];
  tech: string[];
};

export const projects: ProjectEntry[] = [
  {
    name: "GAIA – Multi-Channel Campaign Automation Platform",
    role: "MERN Stack Developer",
    team: "10",
    bullets: [
      "Built and scaled a full-stack campaign automation platform supporting Meta, Google, LinkedIn, TikTok, and other advertising channels.",
      "Architected a modular Next.js frontend with reusable components, analytics dashboards, and real-time campaign management workflows.",
      "Designed and developed robust Node.js/Express.js backend APIs and microservices for campaign management, user handling, and reporting.",
      "Implemented Redis caching and async processing pipelines to handle large-scale campaign data with high throughput and low latency.",
      "Integrated third-party APIs, payment services, tracking systems, and data pipelines to support end-to-end marketing automation.",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "TypeScript", "MongoDB", "Redis", "AWS", "JWT", "Microservices", "Tailwind CSS", "Vite"],
  },
  {
    name: "Rallar Services – GenAI-Powered Natural Language to SQL Platform",
    role: "GenAI & Backend Developer",
    team: "4",
    bullets: [
      "Built an enterprise GenAI platform enabling railway workforce staff to query employee data using natural language instead of SQL.",
      "Designed prompt engineering workflows to translate natural language input into accurate, structured SQL queries via LLM integration.",
      "Implemented structured output parsing and validation to ensure LLM-generated queries were safe, accurate, and production-ready.",
      "Built backend query-processing systems and REST APIs for real-time database access, filtering, and visualization of AI-generated results.",
      "Created responsive dashboards using Next.js to display employee records, attendance data, and workforce analytics.",
      "Designed optimized SQL query pipelines and structured data response systems for accuracy and reliability at scale.",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "MySQL", "LLM Integration", "Prompt Engineering", "Structured Outputs", "REST APIs"],
  },
  {
    name: "Advida – AI-Powered Advertising & Growth Platform",
    role: "Full Stack Developer",
    team: "3",
    bullets: [
      "Contributed full-stack development to an AI-first advertising platform with campaign management across Google, Meta, TikTok, and X.",
      "Built scalable backend microservices and REST APIs with real-time data processing and async workflows.",
      "Developed responsive Next.js frontend modules for campaign analytics, budget management, and audience segmentation.",
      "Integrated third-party ad platform APIs and built data pipelines to support automated, AI-driven campaign optimization.",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "REST APIs", "Async Pipelines"],
  },
];

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "GenAI & LLM",
    skills: [
      "Prompt Engineering",
      "LLM API Integration",
      "Structured Outputs",
      "NLP-to-SQL",
      "Retrieval-Augmented Workflows",
      "AI-Assisted Development (GitHub Copilot, Claude Code)",
    ],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Vite", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices Architecture",
      "JWT/OAuth",
      "Async Processing",
      "Cron Jobs",
      "Data Pipelines",
    ],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "MSSQL", "Redis"],
  },
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Docker", "Git", "GitHub/GitLab", "CI/CD", "Azure", "AWS"],
  },
  {
    category: "Tools",
    skills: ["Postman", "Swagger", "GitHub Copilot", "Claude Code"],
  },
];

export type EducationEntry = {
  degree: string;
  institution: string;
  year: string;
};

export const education: EducationEntry[] = [
  {
    degree: "Diploma in Computer Science & Engineering",
    institution: "Mahamaya Polytechnic of IT, UP",
    year: "2022",
  },
  {
    degree: "Higher Secondary School",
    institution: "UP Board",
    year: "2019",
  },
  {
    degree: "Secondary School Certificate",
    institution: "UP Board",
    year: "2017",
  },
];
