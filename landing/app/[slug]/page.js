"use client";

import { use, useState, useEffect } from "react";
import { PROJECTS } from "../data/projects";
import Link from "next/link";

export default function ProjectViewer({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const project = PROJECTS.find((p) => p.slug === params.slug);
  const [isLoading, setIsLoading] = useState(true);

  // Rapid Exit Logic
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") window.location.href = "/";
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Project Not Found</h1>
        <Link href="/" className="px-8 py-3 border border-white/20 rounded-none hover:bg-white hover:text-black transition-all uppercase text-xs font-bold tracking-widest">
          Return Archive
        </Link>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full bg-black z-[2000] overflow-hidden flex flex-col">
      {/* High-Speed Back Button */}
      <Link 
        href="/" 
        className="fixed bottom-12 left-12 z-[3000] flex items-center gap-5 px-7 py-4 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-none group hover:bg-white hover:border-white transition-all duration-700 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
      >
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white group-hover:text-black transition-colors"
        >
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white group-hover:text-black transition-colors">Archive [ESC]</span>
      </Link>

      {/* Frame Container */}
      <div className="flex-1 w-full bg-[#050505] relative cursor-crosshair">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-[2001] bg-black">
             <div className="flex flex-col items-center gap-6">
                <div className="w-12 h-12 border-2 border-white/5 border-t-white animate-spin rounded-none" />
                <span className="text-[10px] font-black tracking-[0.5em] uppercase opacity-20">Initializing Viewport</span>
             </div>
          </div>
        )}
        <iframe 
          src={project.url} 
          className={`w-full h-full border-none transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          title={project.title}
          onLoad={() => setIsLoading(false)}
        />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
      </div>
    </div>
  );
}
