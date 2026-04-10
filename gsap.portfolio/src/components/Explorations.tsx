import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=600",
];

export default function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current || !leftColRef.current || !rightColRef.current) return;

    const ctx = gsap.context(() => {
      // Pin center content
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      // Parallax columns
      gsap.to(leftColRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(rightColRef.current, {
        yPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Velocity Skew Effect
      const proxy = { skew: 0 };
      const skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg");
      const clamp = gsap.utils.clamp(-15, 15);

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const skew = clamp(self.getVelocity() / -300);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.8,
              ease: "power3",
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew),
            });
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-bg overflow-hidden -z-0">
      {/* Pinned Center Content Layer (z-10) */}
      <div
        ref={contentRef}
        className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-center px-4 z-10 pointer-events-none"
      >
        <span className="text-xs text-muted uppercase tracking-[0.3em] mb-6">
          Explorations
        </span>
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-display italic leading-none tracking-tight text-text-primary mb-8">
          Visual <span className="font-sans not-italic font-medium">playground</span>
        </h2>
        <p className="text-muted md:text-lg max-w-md mx-auto mb-10">
          A collection of creative coding experiments, 3D explorations, and visual concepts.
        </p>

        <a
          href="#"
          className="pointer-events-auto relative group rounded-full overflow-hidden inline-block"
        >
          <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 m-[2px] bg-bg rounded-full px-8 py-3.5 text-sm font-medium text-text-primary flex items-center gap-2 group-hover:bg-surface transition-colors">
            View Dribbble ↗
          </span>
        </a>
      </div>

      {/* Parallax Images Layer (z-20) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-full z-20 pointer-events-none px-4 md:px-10">
        <div className="grid grid-cols-2 gap-12 md:gap-40 w-full pt-[50vh]">
          {/* Left Column */}
          <div ref={leftColRef} className="flex flex-col gap-24 md:gap-48 mt-[20vh] items-end">
            {IMAGES.slice(0, 3).map((img, i) => (
              <div
                key={`left-${i}`}
                className="skewElem w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden pointer-events-auto cursor-pointer group shadow-2xl shadow-black/50 origin-center"
              >
                <img src={img} alt="exploration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="flex flex-col gap-32 md:gap-64 mt-[60vh] items-start">
            {IMAGES.slice(3, 6).map((img, i) => (
              <div
                key={`right-${i}`}
                className="skewElem w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden pointer-events-auto cursor-pointer group shadow-2xl shadow-black/50 origin-center"
              >
                <img src={img} alt="exploration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
