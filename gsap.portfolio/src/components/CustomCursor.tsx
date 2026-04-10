import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);

  useEffect(() => {
    if (!cursorRef.current || !dotRef.current) return;

    // Use fast setter for mouse position
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.5, ease: "power3", force3D: true });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.5, ease: "power3", force3D: true });
    
    // Snappier setter for inner dot
    const xDotTo = gsap.quickTo(dotRef.current, "x", { duration: 0.1, ease: "power3", force3D: true });
    const yDotTo = gsap.quickTo(dotRef.current, "y", { duration: 0.1, ease: "power3", force3D: true });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xDotTo(e.clientX);
      yDotTo(e.clientY);
    };

    const hoverElements = document.querySelectorAll("a, button, [role='button']");
    
    const onMouseEnter = () => {
      isHovering.current = true;
      gsap.to(cursorRef.current, { 
        width: 64, 
        height: 64, 
        duration: 0.4, 
        ease: "power3.out",
        borderColor: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(4px) brightness(1.2) contrast(1.2)",
        backgroundColor: "rgba(255,255,255,0.05)"
      });
      gsap.to(dotRef.current, { scale: 0, opacity: 0, duration: 0.3 });
    };
    
    const onMouseLeave = () => {
      isHovering.current = false;
      gsap.to(cursorRef.current, { 
        width: 32, 
        height: 32, 
        duration: 0.4, 
        ease: "power3.out",
        borderColor: "rgba(255,255,255,1)",
        backdropFilter: "none",
        backgroundColor: "transparent"
      });
      gsap.to(dotRef.current, { scale: 1, opacity: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);
    
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-text-primary z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block overflow-hidden"
        style={{ willChange: "transform, width, height" }}
      />
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-text-primary z-[10000] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
