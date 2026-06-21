"use client";

import { useState, useEffect } from "react";
import { portfolioData as data } from "@/lib/portfolio";

// Icons mapped from your data file
const IconComponents = {
  github: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  )
};

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="bg-[#0a0a0b] text-zinc-300 min-h-screen font-sans selection:bg-red-500/30 selection:text-white overflow-x-hidden">
      
      {/* Ambient Mouse Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.06), transparent 80%)`
        }}
      />

      {/* Grid Background */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: `50px 50px`
      }} />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md bg-[#0a0a0b]/80 border-b border-zinc-800/50 transition-transform duration-500 ${isLoaded ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-bold text-white tracking-widest">
            {data.identity.handle}<span className="text-red-500">_</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-zinc-400">
            <a href="#stats" className="hover:text-red-500 transition-colors">Stats</a>
            <a href="#arsenal" className="hover:text-red-500 transition-colors">Arsenal</a>
            <a href="#matches" className="hover:text-red-500 transition-colors">Matches</a>
            <a href="#history" className="hover:text-red-500 transition-colors">History</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 z-10">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm text-red-500 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              {data.identity.availability}
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none">
              {data.identity.realName}
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-bold text-zinc-500 tracking-tight">
              {data.identity.tagline}
            </h2>

            <p className="max-w-2xl text-zinc-400 mt-6 text-base md:text-lg leading-relaxed">
              {data.identity.bio}
            </p>

            <div className="flex gap-4 mt-8">
              {data.socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-zinc-800 hover:border-red-500/50 hover:text-red-500 text-zinc-400 transition-all duration-300 hover:-translate-y-1"
                >
                  {IconComponents[social.icon as keyof typeof IconComponents]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 text-xs">
          <span className="tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative z-10 px-6 py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm font-mono text-red-500 mb-12 tracking-widest">// CAREER_STATS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.stats.map((stat, i) => (
              <div key={i} className="group border-l-2 border-zinc-800 hover:border-red-500 pl-4 transition-colors">
                <div className="text-4xl md:text-5xl font-black text-white group-hover:text-red-500 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500 mt-2 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arsenal / Skills Section */}
      <section id="arsenal" className="relative z-10 px-6 py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm font-mono text-red-500 mb-12 tracking-widest">// ARSENAL</h3>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {data.skills.map((skill, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-lg font-bold text-white">{skill.name}</span>
                  <span className="text-sm font-mono text-zinc-500">{skill.level}%</span>
                </div>
                <div className="h-1 w-full bg-zinc-800 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-red-800 to-red-500 group-hover:from-red-500 group-hover:to-red-300 transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matches / Projects Section */}
      <section id="matches" className="relative z-10 px-6 py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm font-mono text-red-500 mb-12 tracking-widest">// FEATURED_MATCHES</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projects.map((project, i) => (
              <div 
                key={i} 
                className="group relative border border-zinc-800 hover:border-red-500/50 bg-zinc-900/30 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-xs font-mono text-zinc-600">0{i + 1}</div>
                  <div className={`text-xs px-2 py-1 border ${project.status === 'Live' ? 'border-red-500/30 text-red-500' : 'border-zinc-700 text-zinc-500'}`}>
                    {project.status}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed min-h-[80px]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono bg-zinc-800/80 text-zinc-400 px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  className="text-sm text-zinc-500 group-hover:text-red-500 flex items-center gap-2 transition-colors"
                >
                  View Project 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History / Experience Section */}
      <section id="history" className="relative z-10 px-6 py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm font-mono text-red-500 mb-12 tracking-widest">// MATCH_HISTORY</h3>
          <div className="space-y-12">
            {data.experience.map((exp, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-4 group">
                <div className="text-sm font-mono text-zinc-500 group-hover:text-red-500 transition-colors">
                  {exp.period}
                </div>
                <div className="md:col-span-3 border-l border-zinc-800 group-hover:border-red-500/50 pl-6 transition-colors">
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <div className="text-zinc-500 mb-3 text-sm">@ {exp.company}</div>
                  <p className="text-zinc-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-zinc-600 font-mono">
            © {new Date().getFullYear()} {data.identity.handle} All rights reserved.
          </div>
          <div className="text-sm text-zinc-600 font-mono">
            Built with Next.js & TypeScript
          </div>
        </div>
      </footer>
    </main>
  );
}