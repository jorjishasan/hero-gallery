import React from "react";
import { Brain, ShieldCheck, Zap, Globe, Layers, Cpu } from "lucide-react";

const features = [
  {
    title: "Neural Processing",
    description: "Multi-layered cognitive architecture that adapts to your unique workflow and context.",
    icon: Brain,
  },
  {
    title: "On-Device Privacy",
    description: "Zero-knowledge processing ensures your data never leaves the hardware. Local-only by default.",
    icon: ShieldCheck,
  },
  {
    title: "Sub-second Latency",
    description: "Highly optimized execution kernels providing real-time responses without network delays.",
    icon: Zap,
  },
  {
    title: "Global Sync",
    description: "Encrypted mesh networking keeps all your devices synchronized without central servers.",
    icon: Globe,
  },
  {
    title: "Atomic Design",
    description: "Modular architecture built for scale, performance, and extreme reliability.",
    icon: Layers,
  },
  {
    title: "Custom Kernels",
    description: "Hardware-accelerated processing tailored specifically for neural operations.",
    icon: Cpu,
  },
];

export const ProductShowcase = () => {
  return (
    <section id="products" className="py-32 px-6 md:px-28 bg-black relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-20 animate-fade-rise">
          <span className="text-[10px] tracking-[3px] uppercase text-white/40 mb-4">The core technology</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white max-w-2xl leading-tight">
            Built for the <br /> 
            next intelligence age.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="group p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 animate-fade-rise"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="size-10 flex items-center justify-center rounded-xl bg-white text-black mb-6 transition-transform duration-500 group-hover:scale-110">
                <feature.icon size={20} />
              </div>
              <h3 className="text-lg font-medium text-white mb-3 tracking-snug">{feature.title}</h3>
              <p className="text-sm font-normal text-white/50 leading-relaxed font-sans">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background architectural light */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.01] blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};
