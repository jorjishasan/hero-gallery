import { useEffect, useRef } from 'react';

const MAX_RIPPLES = 80;

export default function MouseRippleTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ripplesRef = useRef<{ x: number; y: number; age: number; active: boolean }[]>(
    Array.from({ length: MAX_RIPPLES }, () => ({ x: 0, y: 0, age: 0, active: false }))
  );
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let spawnIndex = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 25) {
        lastX = e.clientX;
        lastY = e.clientY;

        const ripples = ripplesRef.current;
        ripples[spawnIndex] = { x: e.clientX, y: e.clientY, age: 0, active: true };
        spawnIndex = (spawnIndex + 1) % MAX_RIPPLES;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const update = () => {
      const ripples = ripplesRef.current;
      const elements = elementsRef.current;

      for (let i = 0; i < MAX_RIPPLES; i++) {
        const ripple = ripples[i];
        const el = elements[i];

        if (ripple.active && el) {
          ripple.age += 0.012;

          if (ripple.age >= 1) {
            ripple.active = false;
            el.style.opacity = '0';
          } else {
            // Calculate size and opacity
            const size = 20 + ripple.age * 280;
            const opacity = 1 - Math.pow(ripple.age, 1.2);
            
            el.style.width = `${size}px`;
            el.style.height = `${size}px`;
            el.style.left = `${ripple.x - size / 2}px`;
            el.style.top = `${ripple.y - size / 2}px`;
            el.style.opacity = opacity.toString();
            el.style.transform = `scale(1)`;
          }
        }
      }

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <filter id="liquid-trail">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      
      {Array.from({ length: MAX_RIPPLES }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { elementsRef.current[i] = el; }}
          className="absolute rounded-full opacity-0 pointer-events-none"
          style={{
            backdropFilter: 'url(#liquid-trail) blur(1px)',
            boxShadow: 'inset 0 0 30px rgba(255,255,255,0.1), 0 0 15px rgba(147,197,253,0.15)',
            willChange: 'transform, opacity, width, height, left, top',
          }}
        />
      ))}
    </div>
  );
}
