import React from "react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-center px-6 pt-32 pb-40">
      
      {/* Background Video */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover animate-slow-zoom"
        >
          <source 
            src="/hero_bg.mp4" 
            type="video/mp4" 
          /> 
        </video>
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content Group */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl">
        
        {/* Top Label */}
        <div className="animate-fade-rise">
          <span className="inline-block text-[10px] md:text-xs px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/80 border border-white/10 mb-8 tracking-widest uppercase">
            AI-first Assistant
          </span>
        </div>

        {/* Heading */}
        <h1 className="animate-fade-rise-delay text-5xl sm:text-7xl md:text-[110px] leading-[0.95] tracking-[-2px] font-serif text-white mb-10 selection:bg-white selection:text-black">
          Superintelligence <br className="hidden md:block" />
          on-device
        </h1>

        {/* CTA Button */}
        <div className="animate-fade-rise-delay-2">
          <button 
            className="group relative px-8 py-3.5 text-xs md:text-sm rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-white font-medium tracking-widest transition-all duration-300 hover:scale-[1.03] hover:bg-white/10 hover:border-white/30"
          >
            <span className="flex items-center gap-2">
              LAUNCH APP 
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
            
            {/* Subtle inner glow on hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white/5 blur-sm" />
          </button>
        </div>
      </div>

      {/* Subtle bottom fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};
