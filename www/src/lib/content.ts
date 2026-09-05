export const asciiBanner = `█      ███   ███   ███  █   █
█     █   █ █     █   █ ██  █
█     █   █ █ ██  █████ █ █ █
█     █   █ █   █ █   █ █  ██
█████  ███   ███  █   █ █   █

 ███  █   █  ███  █████
█     █   █ █   █   █
█     █████ █   █   █
█     █   █ █   █   █
 ███  █   █  ███  █████`

export const computerIcon = ` ___________
|  _______  |
| | >_    | |
| |_______| |
|___________|
    |   |
  ==+===+==  `

export const profile = {
  name: "Logan Choi",
  role: "Software engineer — new grad, May 2027",
  tagline:
    "I build systems that run without me: autonomous sales agents, decentralized backends, and the radios that keep drones talking to each other.",
  location: "Dallas, TX",
  school: "SMU · CS + Data Science",
  status: "Open to new-grad roles",
  email: "lschoi@smu.edu",
  github: "https://github.com/logcho",
  linkedin: "https://www.linkedin.com/in/logcho04/",
  resumeHref: "/resume.pdf",
}

export const experience = [
  {
    org: "OAISIS",
    role: "AI Solutions Engineer",
    dates: "Jun 2026 – Aug 2026",
    location: "Dallas, TX",
    bullets: [
      "Engineered a multi-agent governance system, scheduled via cron, to run fully autonomous go-to-market workflows across outbound sales and inbound communications.",
      "Automated real-time lead discovery and account matching by traversing company context graphs and integrating B2B intelligence APIs.",
    ],
  },
  {
    org: "Southern Methodist University",
    role: "Undergraduate Research Fellow",
    dates: "Jun 2026 – Aug 2026",
    location: "Dallas, TX",
    bullets: [
      "Explored Joint-Embedding Predictive Architectures (V-JEPA2) to evaluate methods for continuous latent representation learning.",
      "Designed experimental pipelines for non-generative vision models, dispatching compute across CUDA and MPS to accelerate training.",
    ],
  },
  {
    org: "World Tycoon",
    role: "Founder & Lead Engineer",
    dates: "Jun 2024 – Jun 2025",
    location: "Dallas, TX",
    bullets: [
      "Built a Web3 city-building simulator on Cartesi Layer 2, funded by a competitive $10,000 grant, with a GraphQL interface for event-driven gameplay.",
      "Ran a decentralized backend processing 1M+ live token transactions via Alchemy RPC at sub-1s latency.",
    ],
  },
]

export const projects = [
  {
    slug: "khaya-rewards",
    name: "Khaya Rewards",
    description:
      "Full-stack property management platform with automated onboarding and rent-splitting logic for landlords and tenants.",
    metric: "3 landlords · 23 tenants · R124k+ processed",
    stack: ["TypeScript", "Next.js", "Expo", "Supabase", "PostgreSQL", "AWS Lambda", "Paystack"],
    href: "https://rentkhaya.com/",
    linkLabel: "rentkhaya.com",
  },
  {
    slug: "drone-radio-bridge",
    name: "UAV & UGV Radio Bridge",
    description:
      "Custom C++ radio bridge built for the Raytheon drone competition, consolidating asynchronous UART comms to stream sensor data and synchronize multi-agent coordinates.",
    metric: "<20ms telemetry latency",
    stack: ["C++", "CMake", "Serial I/O", "ROS2"],
    href: "https://github.com/logcho/drone-radio-bridge",
    linkLabel: "github/drone-radio-bridge",
  },
  {
    slug: "recursive-language-model",
    name: "Recursive Language Model",
    description:
      "Stateful LangGraph pipeline for Recursive Language Models with a pluggable sandbox runtime across Docker, Modal, and E2B, plus a real-time visualizer tracing execution over SSE.",
    metric: "Multi-depth execution tracing",
    stack: ["Python", "LangGraph", "Next.js", "FastAPI", "Docker", "E2B", "Modal"],
    href: "https://github.com/logcho/recursive-language-model",
    linkLabel: "github/recursive-language-model",
  },
]

export const skills = [
  {
    key: "languages",
    values: ["C/C++", "Java", "TypeScript/JavaScript", "Python", "R", "SQL", "HTML/CSS"],
  },
  {
    key: "frameworks",
    values: ["React Native", "Next.js", "Expo", "Node.js", "Spring Boot", "FastAPI", "LangGraph"],
  },
  {
    key: "tools",
    values: ["Git", "Vercel", "Supabase", "PostgreSQL", "AWS", "Docker", "IntelliJ"],
  },
  {
    key: "libraries",
    values: ["Pandas", "NumPy", "Seaborn", "Matplotlib", "scikit-learn", "TensorFlow/Keras"],
  },
]
