import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { Mail, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();
  const steps = [
    { title: "Define", desc: "Deep diving into your ethos and market space." },
    { title: "Craft", desc: "Meticulous design and technical iteration." },
    { title: "Flow", desc: "Seamless integration and performance tuning." },
    { title: "Ignite", desc: "Strategic launch and phased scaling." }
  ];

  return (
    <section ref={ref} className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="reveal reveal-stagger-1 grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-foreground/10 pt-16">
          {steps.map((step, i) => (
            <div key={step.title} className={`reveal reveal-stagger-${i + 1} space-y-4`}>
              <span className="text-[10px] uppercase tracking-widest text-muted">Step 0{i+1}</span>
              <h3 className="font-display text-2xl">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const JournalSection: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} id="journal" className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="reveal reveal-stagger-1 flex items-end justify-between">
          <div className="space-y-4">
            <span className="rounded-full border border-foreground/10 px-4 py-1.5 text-[10px] text-muted uppercase tracking-[0.2em]">
              The Journal
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl">Latest Thoughts</h2>
          </div>
          <a href="#" className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-muted hover:text-foreground transition-colors py-2 border-b border-transparent hover:border-foreground">Read All Articles</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="reveal reveal-stagger-2 group cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100 relative mb-8">
              <img 
                src="/assets/journal_semiotics_silence_1775739548531.png" 
                alt="The semiotics of silence" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-muted font-semibold">
                <span>Design Theory</span>
                <span className="h-1 w-1 rounded-full bg-foreground/20" />
                <span>April 2026</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl leading-tight group-hover:text-muted transition-colors">The semiotics of silence in digital interfaces</h3>
              <p className="text-muted text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                Exploring how intentional whitespace and reduced sensory input can drive deeper user engagement and cognitive clarity.
              </p>
            </div>
          </div>

          <div className="reveal reveal-stagger-3 group cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100 relative mb-8">
              <img 
                src="/assets/journal_architecture_resilience_1775739567870.png" 
                alt="Architecture of resilience" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-muted font-semibold">
                <span>Engineering</span>
                <span className="h-1 w-1 rounded-full bg-foreground/20" />
                <span>March 2026</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl leading-tight group-hover:text-muted transition-colors">Building for the long-term: The architecture of resilience</h3>
              <p className="text-muted text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                A technical deep-dive into creating digital infrastructures that withstand scale, time, and the rapidly evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactSection: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} id="reach-us" className="bg-foreground py-32 px-6 text-white rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <div className="reveal reveal-stagger-1 space-y-6">
          <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs text-white/50 uppercase tracking-[0.2em]">
            Ready?
          </span>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl leading-tight">
            Let's build <br /> something <em className="not-italic opacity-40 italic">unforgettable</em>
          </h2>
        </div>
        
        <div className="reveal reveal-stagger-2 flex flex-col items-center gap-8">
          <div className="flex flex-col md:flex-row gap-4">
            <button className="rounded-full bg-white text-foreground px-10 py-4 text-base font-medium flex items-center gap-3 hover:scale-105 transition-transform">
              <Mail size={18} />
              hello@aethera.studio
            </button>
            <button className="rounded-full border border-white/20 px-10 py-4 text-base font-medium flex items-center gap-3 hover:bg-white/10 transition-colors">
              Request a Project
              <ArrowRight size={18} />
            </button>
          </div>
          <p className="text-white/40 text-sm max-w-sm">
            Currently accepting select new partners for Q3 2026. <br />
            Response time: ~24 hours.
          </p>
        </div>
        
        <div className="reveal reveal-stagger-3 mt-32 pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest text-white/30">
          <div>© 2026 Aethera Studio. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Behance</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
          <div>Built in pursuit of excellence.</div>
        </div>
      </div>
    </section>
  );
};
