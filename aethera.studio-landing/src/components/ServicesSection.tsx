import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

const services: Service[] = [
  {
    id: "01",
    title: "Brand Identity",
    description: "We distill your vision into a living brand system -- logo, typography, palette, and voice -- that resonates across every touchpoint.",
    tags: ["Strategy", "Visual Identity", "Guidelines"]
  },
  {
    id: "02",
    title: "Digital Experiences",
    description: "Immersive web and mobile platforms engineered for performance, built with meticulous craft and obsessive attention to detail.",
    tags: ["Web Design", "Development", "Interaction"]
  },
  {
    id: "03",
    title: "Content Direction",
    description: "From editorial strategy to art direction, we shape narratives that move audiences and elevate your presence.",
    tags: ["Art Direction", "Copywriting", "Photography"]
  },
  {
    id: "04",
    title: "Growth Systems",
    description: "Data-informed marketing architectures that compound over time -- SEO, analytics, and conversion frameworks built to scale.",
    tags: ["SEO", "Analytics", "Automation"]
  }
];

export const ServicesSection: React.FC = () => {
  const sectionRef = useReveal<HTMLDivElement>();

  return (
    <section id="studio" ref={sectionRef} className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Pill */}
        <div className="reveal reveal-stagger-1 mb-12">
          <span className="rounded-full border border-foreground/10 px-4 py-1.5 text-xs text-muted uppercase tracking-[0.2em]">
            Services
          </span>
        </div>

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <h2 className="reveal reveal-stagger-2 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-2xl">
            Crafting digital experiences with <em className="text-muted not-italic italic">purpose</em>
          </h2>
          <p className="reveal reveal-stagger-3 text-muted max-w-md text-lg">
            We bridge the gap between complex technology and human emotion, creating tools that feel intuitive and brands that feel alive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="divide-y divide-foreground/10 border-t border-foreground/10">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`reveal reveal-stagger-${index + 1} group grid grid-cols-1 md:grid-cols-12 gap-8 py-10 md:py-16 hover:bg-foreground/[0.01] transition-colors`}
            >
              {/* ID */}
              <div className="md:col-span-1 text-sm text-muted font-medium">
                {service.id}
              </div>

              {/* Title */}
              <div className="md:col-span-4 font-display text-3xl md:text-4xl">
                {service.title}
              </div>

              {/* Description */}
              <div className="md:col-span-4 text-base text-muted leading-relaxed">
                {service.description}
              </div>

              {/* Tags & Action */}
              <div className="md:col-span-3 flex flex-col md:items-end justify-between gap-6">
                <div className="flex flex-wrap md:justify-end gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="bg-foreground/5 rounded-full px-3 py-1 text-[10px] uppercase tracking-wider text-muted font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="h-10 w-10 rounded-full border border-foreground/10 flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:text-white group-hover:border-foreground self-start md:self-auto">
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
