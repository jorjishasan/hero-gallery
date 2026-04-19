import React from "react";

const papers = [
  {
    id: "01",
    label: "PAPER_001",
    title: "GEOMETRIC_LEARNING_FOUNDATIONS",
    description: "New manifold-based neural kernels optimized for local silicon architectures.",
    checksum: "0x8F2A",
    status: "STABLE",
  },
  {
    id: "02",
    label: "PAPER_002",
    title: "DETERMINISTIC_COGNITIVE_PATHS",
    description: "Zero-variance logic gates for safety-critical autonomous neural operations.",
    checksum: "0xC4D1",
    status: "VERIFIED",
  },
];

export const Research = () => {
  return (
    <section id="research" className="relative py-40 bg-black overflow-hidden group/session">
      
      {/* Scanning Beam Animation */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-scan-down shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-28 relative z-20">
        
        {/* Section Header with structured layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-32 border-l border-white/5 pl-8 md:pl-12 relative">
          <div className="flex flex-col max-w-xl animate-fade-rise">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] tracking-[5px] uppercase text-white/40 font-mono-tech">LABORATORY_ACCESS</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-serif text-white leading-[1.05] tracking-tight">
              Pioneering the <br />
              mathematics of <br />
              <span className="italic font-normal opacity-60">local intelligence.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end max-w-sm animate-fade-rise-delay">
             <p className="text-white/40 text-sm leading-relaxed font-sans mb-6">
                Our research focused on bringing large-scale cognitive capabilities to individual devices without compromising privacy or deterministic performance.
             </p>
             <div className="font-mono-tech text-[10px] text-white/20 flex gap-4">
                <span>COORD: 34.05 / -118.24</span>
                <span>STRATUM: LEVEL_04</span>
             </div>
          </div>
        </div>

        {/* Research Papers Grid (The "Slates") */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-sm">
          {papers.map((paper, i) => (
            <div 
              key={paper.id}
              className="relative group bg-black p-12 py-20 transition-all duration-700 hover:bg-white/[0.02] flex flex-col justify-between"
            >
              {/* Large Background Number */}
              <span className="absolute top-10 right-12 text-[120px] font-serif text-white/[0.03] select-none pointer-events-none leading-none">
                 {paper.id}
              </span>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12 animate-fade-rise">
                  <span className="text-[10px] tracking-[3px] text-white/30 font-mono-tech">{paper.label}</span>
                  <span className="px-2 py-0.5 rounded-sm border border-white/10 text-[9px] text-white/40 font-mono-tech">
                    {paper.status}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-white mb-6 tracking-wide group-hover:translate-x-2 transition-transform duration-500">
                  {paper.title.replace(/_/g, " ")}
                </h3>
                
                <p className="text-white/40 text-sm font-sans max-w-xs leading-relaxed mb-12">
                  {paper.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-8 mt-auto">
                 <div className="flex flex-col">
                    <span className="text-[9px] text-white/10 font-mono-tech uppercase mb-1">Checksum</span>
                    <span className="text-[10px] text-white/30 font-mono-tech">{paper.checksum}</span>
                 </div>
                 <button className="group/btn relative px-6 py-2 overflow-hidden rounded-full border border-white/10 hover:border-white/30 transition-all">
                    <span className="relative z-10 text-[10px] tracking-widest text-white font-medium">VIEW ARCHIVE</span>
                    <div className="absolute inset-x-0 bottom-0 h-0 bg-white group-hover/btn:h-full transition-all duration-300 -z-10 opacity-5" />
                 </button>
              </div>

              {/* Corner tech indicators */}
              <div className="absolute bottom-4 right-4 size-1.5 border-r border-b border-white/10 pointer-events-none group-hover:border-white/40 transition-colors" />
              <div className="absolute top-4 left-4 size-1.5 border-l border-t border-white/10 pointer-events-none group-hover:border-white/40 transition-colors" />
            </div>
          ))}
        </div>

      </div>

      {/* Structured Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
         <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white" />
         <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white" />
         <div className="absolute top-0 bottom-0 left-3/4 w-px bg-white" />
         <div className="absolute left-0 right-0 top-1/2 h-px bg-white" />
      </div>

    </section>
  );
};
