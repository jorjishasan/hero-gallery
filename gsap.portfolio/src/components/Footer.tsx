import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Marquee animation
  useEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      // The inner container needs to be twice as wide or have enough repeated items
      // We'll move it by -50% to cycle half of it
      gsap.to(".marquee-inner", {
        xPercent: -50,
        repeat: -1,
        duration: 40,
        ease: "none",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  const marqueeText = "BUILDING THE FUTURE • ";

  return (
    <footer className="relative pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden w-full min-h-[60vh] flex flex-col justify-end bg-bg">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="/hero_bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover scale-y-[-1]"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-bg to-transparent" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* CTA */}
        <div className="text-center mb-16 md:mb-24 px-4">
          <h2 className="text-4xl md:text-6xl lg:text-8xl tracking-tight text-text-primary mb-8 font-medium">
            Let's create something <br />
            <span className="font-display italic">extraordinary.</span>
          </h2>
          <a
            href="mailto:hello@jorjishasan.com"
            className="group relative rounded-full overflow-hidden inline-block"
          >
            <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 block bg-surface/80 backdrop-blur-md group-hover:bg-surface text-text-primary border border-white/10 group-hover:border-transparent rounded-full px-8 py-4 text-base font-medium transition-all hover:scale-[1.02] m-[2px]">
              hello@jorjishasan.com ↗
            </span>
          </a>
        </div>

        {/* Marquee Container */}
        <div 
          ref={marqueeRef}
          className="w-full overflow-hidden whitespace-nowrap mb-12 md:mb-16 border-y border-stroke/30 py-4 bg-background/10 backdrop-blur-sm"
        >
          <div className="marquee-inner inline-block text-4xl md:text-6xl lg:text-8xl font-display italic text-text-primary mix-blend-overlay">
            {marqueeText.repeat(10)}{marqueeText.repeat(10)}
          </div>
        </div>

        {/* Footer Bar */}
        <div className="w-full max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted">
          {/* Status */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span>Available for projects</span>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-6">
            {['Twitter', 'LinkedIn', 'Dribbble', 'GitHub'].map(social => (
              <a key={social} href="#" className="hover:text-text-primary transition-colors">
                {social}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div>
            &copy; {new Date().getFullYear()} Jorjis Hasan.
          </div>
        </div>
      </div>
    </footer>
  );
}
