export const HeroSection: React.FC = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center pt-[calc(14rem-75px)] pb-32 md:pb-48 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-5xl sm:text-7xl md:text-[7.5rem] leading-[0.85] tracking-[-0.04em] mb-12 animate-fade-rise">
          Beyond silence, <br className="hidden md:block" />
          we build the <em className="text-muted not-italic italic-font-style-fallback">eternal.</em>
        </h1>
        
        <p className="text-base sm:text-lg text-muted max-w-xl mx-auto mb-12 animate-fade-rise-delay leading-relaxed tracking-tight">
          Building platforms for brilliant minds, fearless makers, and thoughtful souls. 
          Through the noise, we craft digital havens for deep work and pure flows.
        </p>

        <button className="rounded-full bg-foreground text-white px-14 py-5 text-base font-medium transition-all hover:scale-[1.03] active:scale-[0.98] animate-fade-rise-delay-2 shadow-xl hover:shadow-2xl">
          Begin Journey
        </button>
      </div>
    </section>
  );
};
