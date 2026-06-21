export const portfolioData = {
  identity: {
    handle: "DT89",
    realName: "Tamal Sarkar",
    tagline: "Ex-Pro Gamer Turned Coder",
    location: "India",
    availability: "Open to opportunities",
    bio: "I spent years competing at the highest level — reading the meta, executing under pressure, and optimizing every frame. Now I bring that same obsessive precision to code. I build fast, type-safe applications with TypeScript, Express, and the modern web stack. The competition never stopped; the arena just changed.",
  },
  
  stats: [
    { label: "Tournaments Played", value: "120+" },
    { label: "Years Coding", value: "3+" },
    { label: "Coffee/Day", value: "∞" },
    { label: "Current Rank", value: "Grandmaster" },
  ],

  socials: [
    { name: "GitHub", url: "https://github.com/DT89", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/dt89", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com/DT89", icon: "twitter" },
  ],

  skills: [
    { name: "TypeScript", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Node.js", level: 85 },
    { name: "PostgreSQL", level: 75 },
    { name: "React", level: 80 },
  ],

  projects: [
    {
      title: "GG API Gateway",
      description: "A high-performance API gateway handling 10k+ concurrent matchmaking requests with sub-10ms latency. Built with Express and Redis.",
      tech: ["TypeScript", "Express", "Redis", "Docker"],
      link: "#",
      status: "Live"
    },
    {
      title: "Replay Analyzer",
      description: "A tool that parses game replays using binary streams and generates heatmaps of player movement and accuracy stats.",
      tech: ["Node.js", "TypeScript", "WebGL", "Next.js"],
      link: "#",
      status: "Live"
    },
    {
      title: "Scrim Finder",
      description: "Real-time platform connecting esports teams for practice matches. Features WebSocket-based chat and automated bracket generation.",
      tech: ["Next.js", "Socket.io", "PostgreSQL"],
      link: "#",
      status: "Archived"
    }
  ],

  experience: [
    {
      role: "Software Engineer",
      company: "Freelance",
      period: "2022 - Present",
      description: "Building full-stack applications for clients. Focusing on type-safe architectures, RESTful APIs, and high-performance backends."
    },
    {
      role: "Professional Gamer",
      company: "Esports",
      period: "2015 - 2022",
      description: "Competed internationally. Top 0.1% globally. Developed strategic thinking, reflexes, and the ability to perform under extreme pressure."
    }
  ]
};