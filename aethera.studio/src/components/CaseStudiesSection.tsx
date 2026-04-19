import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Project {
  id: number;
  title: string;
  category: string;
  stat: string;
  statLabel: string;
  videoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Meridian Health",
    category: "Brand & Web Platform",
    stat: "553K+",
    statLabel: "Monthly active users across digital channels",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
  },
  {
    id: 2,
    title: "Coastal Living",
    category: "E-Commerce Redesign",
    stat: "96%",
    statLabel: "Improvement in conversion rate after launch",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
  }
];

export const CaseStudiesSection: React.FC = () => {
  const sectionRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-foreground py-32 px-6">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="reveal reveal-stagger-1 space-y-6">
            <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs text-white/50 uppercase tracking-[0.2em]">
              Selected Work
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              See how we've <br className="hidden md:block" /> shaped others
            </h2>
          </div>
          
          <a href="#" className="reveal reveal-stagger-2 text-white/50 uppercase tracking-[0.2em] text-sm font-medium hover:text-white transition-colors mb-2">
            View All Projects
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`reveal reveal-stagger-${index + 1} group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900`}
            >
              {/* Video Background */}
              <video 
                src={project.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content Area */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="flex items-end justify-between gap-6">
                  <div className="space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-semibold">
                      {project.category}
                    </span>
                    <div className="space-y-2">
                      <h3 className="font-display text-5xl md:text-6xl text-white leading-none">
                        {project.stat}
                      </h3>
                      <p className="text-sm text-white/60 max-w-xs leading-relaxed">
                        {project.statLabel}
                      </p>
                    </div>
                  </div>

                  <button className="h-12 w-12 rounded-full bg-white text-foreground flex items-center justify-center transition-transform duration-300 group-hover:scale-110 active:scale-95 shrink-0">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
