"use client";

import { use, useState, useEffect, useRef } from "react";
import { PROJECTS } from "./data/projects";
import { motion, AnimatePresence } from "motion/react";

const CATEGORIES = ["All", "AI", "Web3", "Product Design", "Web Design", "Branding", "Creative Dev", "WebGL"];

export default function CasesArchive() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  const [selectedProject, setSelectedProject] = useState(null);
  const [preloadingUrl, setPreloadingUrl] = useState(null);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setFilteredProjects(activeCategory === "All" ? PROJECTS : PROJECTS.filter(p => p.tag === activeCategory));
  }, [activeCategory]);

  // Lighting Speed: Preload Logic
  const handleCardHover = (url) => {
    setPreloadingUrl(url);
  };

  return (
    <div className="relative min-h-screen bg-[#050505]">
      <div className="noise-overlay" />

      {/* Precision Cursor */}
      <div
        className="custom-cursor-dot hidden md:block"
        style={{ transform: `translate(${cursorPos.x - 2}px, ${cursorPos.y - 2}px)` }}
      />

      {/* --- Optimized Navbar --- */}
      <header className="site-nav">
        <div className="container-narrow flex flex-row items-center justify-between py-12">
          <h1 className="text-4xl md:text-6xl font-black tracking-[-0.07em] uppercase">
            Archive <span className="text-white/20 font-light">//</span> zeer
          </h1>

          <a href="https://zeer.studio" className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-500 text-[11px] font-black tracking-widest uppercase">
            Studio
          </a>
        </div>
      </header>

      <main className="pb-32">
        {/* --- High-End Slider Filter --- */}
        <section className="py-8">
          <div className="container-narrow">
            <div className="flex flex-col gap-4 border-b border-white/5 pb-8">
              <span className="text-[9px] font-black tracking-[0.4em] uppercase opacity-20">Sequence_Filter</span>
              <div className="overflow-x-auto scrollbar-hide flex items-center gap-1">
                {CATEGORIES.map(cat => {
                  const count = cat === "All" ? PROJECTS.length : PROJECTS.filter(p => p.tag === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex-none px-5 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-white text-black' : 'hover:bg-white/5 opacity-40 hover:opacity-100'}`}
                    >
                      {cat} <span className="text-[8px] opacity-40 ml-1">[{count}]</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* --- Card Grid --- */}
        <section className="w-full px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-32">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setIsIframeLoading(true);
                }}
                onMouseEnter={() => handleCardHover(project.url)}
                className={`group flex flex-col bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all duration-700 cursor-pointer ${idx % 7 === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className={`overflow-hidden case-card-media ${idx % 7 === 0 ? 'aspect-[21/9]' : 'aspect-[16/11]'}`}>
                  <img src={project.asset} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>

                <div className="p-8 flex flex-col gap-4">
                  <div className="flex items-center justify-between opacity-20">
                    <span className="text-[9px] font-black tracking-[0.4em] uppercase">SPEC_{project.index}</span>
                    <span className="text-[9px] font-black tracking-widest uppercase">{project.tag}</span>
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter uppercase leading-none">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- Monolithic Modal System --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[5000] bg-black"
          >
            {/* Speed-Loader */}
            {isIframeLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-[5001]">
                <div className="w-10 h-10 border-2 border-white/5 border-t-white animate-spin mb-4" />
                <span className="text-[10px] font-black tracking-[0.5em] uppercase opacity-20">Rapid Initialization</span>
              </div>
            )}

            <iframe
              src={selectedProject.url}
              className={`w-full h-full border-none transition-opacity duration-1000 ${isIframeLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setIsIframeLoading(false)}
            />

            {/* Back Button - Bottom Right */}
            <button
              onClick={() => setSelectedProject(null)}
              className="fixed bottom-12 right-12 z-[5002] flex items-center gap-4 px-8 py-4 bg-white text-black font-black text-[12px] uppercase tracking-widest hover:bg-white/90 shadow-2xl transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Preloader */}
      {preloadingUrl && !selectedProject && (
        <iframe src={preloadingUrl} className="hidden" aria-hidden="true" />
      )}

      <footer className="container-narrow py-24 opacity-20 hover:opacity-100 transition-opacity">
        <div className="flex justify-between items-center text-[10px] font-black tracking-[0.4em] uppercase">
          <span>Zeer Studio Archive</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}

