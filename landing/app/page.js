"use client";

import { useState, useEffect } from "react";
import { PROJECTS } from "./data/projects";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";

const CATEGORIES = ["All", "AI", "Web3", "Product Design", "Web Design", "Branding", "Creative Dev", "WebGL"];

export default function CasesArchive() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  const [selectedId, setSelectedId] = useState(null);
  const [loadedIds, setLoadedIds] = useState(new Set());
  
  // Magnetic Fluid Cursor Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 24);
      mouseY.set(e.clientY - 24);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    setFilteredProjects(activeCategory === "All" ? PROJECTS : PROJECTS.filter(p => p.tag === activeCategory));
  }, [activeCategory]);

  const warmUp = (id) => {
    if (!loadedIds.has(id)) {
      setLoadedIds(prev => new Set([...prev, id]));
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-white selection:text-black">
      <div className="noise-overlay" />
      
      {/* Magnetic Fluid Circular Cursor */}
      <motion.div 
        className="custom-cursor-dot hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      />

      <header className="site-nav border-none bg-transparent">
        <div className="container-narrow flex flex-col items-center justify-center py-12 md:py-16 gap-6 md:gap-8 text-center">
          <h1 className="text-4xl md:text-7xl lg:text-[7.5rem] font-black tracking-[-0.08em] uppercase leading-[0.8] whitespace-nowrap transition-all duration-700">
            Archive <span className="text-white/10 font-light">//</span> Zeer
          </h1>
          <a href="https://zeer.studio" className="px-8 py-4 md:px-10 md:py-5 bg-transparent border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-500 text-[10px] md:text-[12px] font-black tracking-[0.6em] uppercase rounded-none">
            Zeer Studio
          </a>
        </div>
      </header>

      <main className="pb-40">
        {/* --- High-Density Category Bar --- */}
        <section className="w-full mb-16 border-y border-white/5 bg-white/[0.01]">
          <div className="container-narrow">
            <div className="flex flex-nowrap overflow-x-auto scrollbar-hide items-center gap-1">
               {CATEGORIES.map(cat => {
                  const isActive = activeCategory === cat;
                  const count = cat === "All" ? PROJECTS.length : PROJECTS.filter(p => p.tag === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`group relative px-6 py-5 flex items-center gap-3 text-[10px] font-black uppercase tracking-wider transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-20 hover:opacity-100'}`}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="activeSquare"
                          className="w-1.5 h-1.5 bg-white"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", damping: 15, stiffness: 200 }}
                        />
                      )}
                      <span className="relative flex items-center gap-1.5">
                        {cat}
                        <span className="text-[7px] opacity-30 font-black">[{count}]</span>
                      </span>
                    </button>
                  );
               })}
            </div>
          </div>
        </section>

        {/* --- Surgical Border Grid --- */}
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/5 mx-6 md:mx-12">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => {
                  warmUp(project.id);
                  setSelectedId(project.id);
                }}
                onMouseEnter={() => warmUp(project.id)}
                className="group flex flex-col border-r border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-1000 cursor-pointer overflow-hidden p-8 gap-8"
              >
                <div className="overflow-hidden aspect-[16/9] bg-black/40 relative">
                  <img 
                    src={project.asset} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
                
                <div className="flex flex-col gap-3">
                   <span className="text-[8px] font-black tracking-widest uppercase opacity-20">{project.tag}</span>
                   <h3 className="text-2xl font-black tracking-tighter uppercase leading-none group-hover:translate-x-2 transition-transform duration-700">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- Elevated Window Viewer --- */}
      <AnimatePresence mode="wait">
        {selectedId && (
          <motion.div 
            key="modal"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[5000] bg-black/95 p-4 md:p-12 lg:p-20 flex flex-col backdrop-blur-3xl"
          >
            {/* Mac Window Chrome */}
            <div className="w-full bg-[#111] border-t border-x border-white/10 rounded-t-3xl p-6 flex items-center justify-between relative overflow-hidden shadow-2xl">
               <div className="flex items-center gap-3 relative z-10">
                  <div 
                    className="w-4 h-4 rounded-full bg-[#FF5F56] hover:brightness-125 cursor-pointer flex items-center justify-center transition-all group" 
                    onClick={() => setSelectedId(null)} 
                  >
                     <svg className="opacity-0 group-hover:opacity-100 transition-opacity" width="8" height="8" viewBox="0 0 24 24" fill="none">
                       <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="6" strokeLinecap="round" />
                     </svg>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#FFBD2E] opacity-20" />
                  <div className="w-4 h-4 rounded-full bg-[#27C93F] opacity-20" />
               </div>
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-[12px] font-black tracking-[0.6em] uppercase opacity-40">
                    {PROJECTS.find(p=>p.id===selectedId)?.title}
                  </span>
               </div>
               <div className="flex items-center gap-4 relative z-10">
                  <div className="w-px h-4 bg-white/10" />
                  <span className="text-[9px] font-mono tracking-widest opacity-20 uppercase">ESC to close</span>
               </div>
            </div>

            {/* Viewport Core */}
            <div className="flex-1 w-full bg-black relative border-x border-b border-white/10 rounded-b-3xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,1)]">
              <div className="absolute inset-0 crt-overlay pointer-events-none opacity-10 z-20" />
              
              {PROJECTS.map(p => (
                <div 
                  key={p.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${selectedId === p.id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                >
                  {loadedIds.has(p.id) && (
                    <iframe 
                      src={p.url} 
                      className="w-full h-full border-none" 
                      title={p.title}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
