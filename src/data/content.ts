export const BRAND = {
  name: "goAI Solutions",
  tagline: "The AI Pod Delivery Model",
  email: "hello@goai.solutions",
  enterpriseEmail: "enterprise@goai.solutions",
  linkedin: "https://www.linkedin.com/company/goai-solutions/",
  twitter: "https://x.com/goAISolutions",
  locations: ["Tampa Metro, Florida", "Bengaluru", "São Paulo", "Australia"],
} as const;

export const NAV_ITEMS = [
  { id: "landing", label: "Home" },
  { id: "shift", label: "The Shift" },
  { id: "problem", label: "The Problem" },
  { id: "apdm", label: "APDM" },
  { id: "human-ai", label: "Human + AI" },
  { id: "different", label: "How We're Different" },
  { id: "impact", label: "Real Impact" },
  { id: "projects", label: "Projects" },
  { id: "clients", label: "Clients" },
  { id: "founders", label: "Founders" },
  { id: "origin", label: "Our Story" },
  { id: "blogs", label: "Blogs" },
  { id: "contact", label: "Contact" },
] as const;

export const LOADING_STEPS = [
  "Thinking...",
  "Learning...",
  "Planning...",
  "Building...",
  "Delivering...",
] as const;

export const HERO_WORKFLOW = [
  "Idea",
  "Requirements",
  "AI Pods",
  "Human Review",
  "Deployment",
] as const;

export const TRADITIONAL_FLOW = [
  "Requirements",
  "Meetings",
  "Development",
  "Testing",
  "Delays",
  "Rework",
] as const;

export const PROBLEM_TOPICS = [
  {
    title: "Large Teams",
    description: "20–30 person teams where coordination overhead scales with headcount.",
    icon: "users",
  },
  {
    title: "Slow Delivery",
    description: "Months of ramp-up before the first deliverable reaches production.",
    icon: "clock",
  },
  {
    title: "Manual Processes",
    description: "Repetitive engineering work inflates team size without adding judgment.",
    icon: "settings",
  },
  {
    title: "Knowledge Silos",
    description: "Context trapped in individuals instead of shared across the organization.",
    icon: "layers",
  },
  {
    title: "High Costs",
    description: "Delivery economics designed for a pre-AI world — more people, more output.",
    icon: "trending-up",
  },
  {
    title: "Communication Overhead",
    description: "Linear handoffs and meetings consume time that should go to building.",
    icon: "message-square",
  },
] as const;

export const APDM_CHARACTERISTICS = [
  { title: "AI Pods", description: "Small, AI-augmented teams with shared organizational context." },
  { title: "Human Oversight", description: "Senior engineers provide judgment, creativity, and accountability." },
  { title: "Faster Delivery", description: "First deliverable in days — 3–5× faster than traditional models." },
  { title: "Shared Intelligence", description: "MCP connects AI to repos, data, and enterprise knowledge." },
  { title: "Reduced Rework", description: "AI handles boilerplate; humans focus on decisions that matter." },
  { title: "Scalable Execution", description: "Knowledge compounds across engagements and pods." },
] as const;

export const COMPARISON_ROWS = [
  { traditional: "Large Teams", apdm: "AI Pods" },
  { traditional: "Manual Coordination", apdm: "AI Coordination" },
  { traditional: "Knowledge Silos", apdm: "Shared Intelligence" },
  { traditional: "Slow Releases", apdm: "Accelerated Delivery" },
  { traditional: "Reactive Planning", apdm: "Intelligent Planning" },
] as const;

export const IMPACT_METRICS = [
  { label: "Enterprise Engagements", value: 6, suffix: "+" },
  { label: "Countries Served", value: 4, suffix: "" },
  { label: "Team Size Reduction", value: 80, suffix: "%", prefix: "up to " },
  { label: "Faster Delivery", value: 5, suffix: "×", prefix: "3–" },
  { label: "AI-Augmented Delivery", value: 100, suffix: "%" },
] as const;

export const CLIENTS = [
  { name: "Lewis Tree Services", industry: "Utilities", relationship: "Enterprise client" },
  { name: "Infosys Consulting", industry: "Consulting", relationship: "Strategic partner" },
  { name: "County of Penobscot", industry: "Government", relationship: "Public sector engagement" },
  { name: "Houston Galveston Area Council (HGAC)", industry: "Government", relationship: "Regional council" },
  { name: "Alaska Railroad Corporation (ARRC)", industry: "Transportation", relationship: "Enterprise client" },
  { name: "Frontenac", industry: "Financial Services", relationship: "Enterprise client" },
  { name: "Marriott International", industry: "Hospitality", relationship: "Global enterprise" },
  { name: "ExhibitUSA", industry: "Events & Exhibitions", relationship: "Enterprise client" },
  { name: "MySupervisor.AI", industry: "AI / HR Tech", relationship: "Product partnership" },
  { name: "National Grid", industry: "Energy & Utilities", relationship: "Energy sector client" },
  { name: "Arthaveda", industry: "Financial Services", relationship: "Enterprise client" },
  { name: "TradeIndia", industry: "E-Commerce", relationship: "Marketplace client" },
  { name: "Anko GCC", industry: "Global Capability Center", relationship: "GCC transformation" },
] as const;

export const PROJECTS = [
  {
    name: "Energy & Utilities Modernization",
    industry: "Energy & Utilities",
    challenge: "Regulatory compliance, legacy systems, and grid modernization at enterprise scale.",
    solution: "AI-augmented pods delivering SCADA integration, compliance intelligence, and smart grid analytics.",
    outcome: "Production deployments across US and Brazil with regulatory-grade rigor.",
    technologies: ["Python", "Cloud-Native", "RAG Pipelines", "MCP Integration"],
  },
  {
    name: "Retail & E-Commerce Platform",
    industry: "Retail & E-Commerce",
    challenge: "Supply chain re-architecture and commerce platform modernization for global retailers.",
    solution: "APDM pods shipping API-first architectures with AI-driven testing and agentic code generation.",
    outcome: "Fortune 50 and global marketplace clients validated in production environments.",
    technologies: ["React", "Node.js", "Microservices", "AI Testing"],
  },
  {
    name: "Enterprise RAG & AI Pipelines",
    industry: "Cross-Industry",
    challenge: "Connecting LLMs to enterprise data without hallucinations or compliance risk.",
    solution: "Production-grade RAG systems with document intelligence and knowledge graphs.",
    outcome: "Grounded AI interfaces deployed from proof-of-concept to production in weeks.",
    technologies: ["LLMs", "Vector DB", "RAG", "MCP"],
  },
  {
    name: "Legacy Modernization",
    industry: "Enterprise IT",
    challenge: "Monolithic systems blocking agility — MySQL to distributed platforms, mainframe decomposition.",
    solution: "Incremental modernization strategies keeping production running while transforming underneath.",
    outcome: "Re-architected enterprise systems with dramatically reduced team sizes.",
    technologies: ["HBase", "API Gateway", "Event-Driven", "AI Migration"],
  },
  {
    name: "MCP Enterprise Integration",
    industry: "Platform Engineering",
    challenge: "AI tools lack access to organizational context — repos, compliance docs, business rules.",
    solution: "Model Context Protocol services connecting enterprise data into a shared AI platform.",
    outcome: "Pods operate with the context and output of teams many times their size.",
    technologies: ["MCP", "GitHub", "Knowledge Bases", "Agent Orchestration"],
  },
  {
    name: "Financial Services Automation",
    industry: "Financial Services",
    challenge: "Payment automation, compliance monitoring, and AI-driven risk analysis at scale.",
    solution: "AI-native pods delivering mortgage, real estate, and banking platform modernization.",
    outcome: "Compliance-grade delivery with human sign-off on every release.",
    technologies: ["Python", "Compliance AI", "Workflow Automation", "Cloud"],
  },
] as const;

export const FOUNDERS = [
  {
    name: "Deepak N. Belavadi",
    role: "CESO",
    biography:
      "Veteran technology leader with 25+ years of experience building and scaling enterprise software businesses. Passionate about helping organizations transform through AI-first engineering and execution.",
    initials: "DB",
  },
  {
    name: "Deepak I",
    role: "CEO",
    biography:
      "Entrepreneur and business leader driving goAI's vision of AI-native software delivery, enabling enterprises to build, scale, and innovate faster.",
    initials: "DS",
  },
  {
    name: "Parth Verma",
    role: "VP, AI Architecture & Innovation",
    biography:
      "AI architect focused on designing enterprise-grade AI solutions, modern architectures, and intelligent systems that deliver measurable business outcomes.",
    initials: "PV",
  },
  {
    name: "Vivian D'Souza",
    role: "AVP, Platform Engineering & DevOps",
    biography:
      "Platform engineering and DevOps leader with expertise in building secure, scalable, and cloud-native systems for enterprise applications.",
    initials: "VD",
    linkedin: "https://in.linkedin.com/in/viv-dsouza",
  },
  {
    name: "Sree Harshavardhana",
    role: "AVP, Software Delivery",
    biography:
      "Software delivery leader experienced in managing high-performing engineering teams and delivering complex enterprise programs with speed and quality.",
    initials: "SH",
  },
] as const;

export const ORIGIN_TIMELINE = [
  {
    title: "Industry Challenges",
    description: "The Global Delivery Model — large offshore teams, linear handoffs — reaches diminishing returns.",
  },
  {
    title: "Research",
    description: "Exploring how team-centric AI, not person-centric tools, could transform delivery economics.",
  },
  {
    title: "Experiments",
    description: "Early AI pod prototypes connecting organizational context to agentic development workflows.",
  },
  {
    title: "First AI Pod",
    description: "4–6 person pods with shared AI context delivering enterprise-grade outcomes in production.",
  },
  {
    title: "goAI Founded",
    description: "Established as an AI-native delivery studio with a contrarian belief about the GDM.",
  },
  {
    title: "APDM Created",
    description: "The AI Pod Delivery Model formalized — small pods, AI-native, compounding velocity.",
  },
  {
    title: "Future Vision",
    description: "APDM evolves from methodology into a licensable platform for enterprise AI-native delivery.",
  },
] as const;

export const BLOG_CATEGORIES = [
  {
    category: "APDM",
    title: "Why Team-Centric AI Beats Person-Centric AI",
    excerpt: "Person-centric AI gives you 10%. Team-centric AI gives you 10×. Here's why the delivery model matters more than the tool.",
    date: "2026",
  },
  {
    category: "AI",
    title: "MCP: Connecting AI to Your Enterprise",
    excerpt: "Model Context Protocol services that connect repos, databases, and knowledge bases into a shared AI platform.",
    date: "2026",
  },
  {
    category: "Enterprise Transformation",
    title: "The End of the Global Delivery Model",
    excerpt: "For three decades, enterprises outsourced software at scale. AI changed the equation — here's what comes next.",
    date: "2026",
  },
  {
    category: "Engineering",
    title: "From POC to Production in Weeks",
    excerpt: "How AI-augmented pods ship RAG pipelines, agent orchestration, and enterprise LLM deployments at 3–5× velocity.",
    date: "2026",
  },
  {
    category: "Product Development",
    title: "Small Pods, Big Impact",
    excerpt: "Why 4–6 senior engineers with AI context outperform teams ten times their size — and how we prove it in production.",
    date: "2026",
  },
] as const;

export const TRUST_SIGNALS = [
  {
    theme: "Fortune 500 Production",
    feedback:
      "Already in production with Fortune 500 enterprises — not pilots, but real workloads at scale with human sign-off on every release.",
  },
  {
    theme: "Structural Transformation",
    feedback:
      "Person-centric AI gets you 10%. Team-centric AI gets you 10×. APDM rewires how enterprise software gets built.",
  },
  {
    theme: "Measurable Outcomes",
    feedback:
      "Up to 80% reduction in team size for comparable output. Days to first deliverable vs. months in traditional GDM.",
  },
] as const;
