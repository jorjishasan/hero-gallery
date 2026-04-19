import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const quoteText = "Sequa revolutionized how we handle financial insights using smart analytics. We are now driving better outcomes quicker than we ever imagined! Sequa revolutionized how we handle financial insights using smart analytics.";
const quoteArray = quoteText.split(" ");

const Word = ({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) => {
  const opacity = useTransform(progress, [start, end], [0.1, 1]);
  const color = useTransform(
    progress, 
    [start, end], 
    ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 1)"]
  );

  return (
    <motion.span 
      style={{ opacity, color }} 
      className="mr-[0.3em] will-change-[opacity,color] transition-colors duration-300"
    >
      {word}
    </motion.span>
  );
};

export const Testimonial = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center py-32 px-8 md:px-28 bg-black overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-12">
        
        {/* Minimal Quote Icon */}
        <div className="size-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-fade-rise">
           <span className="text-white/40 text-2xl font-serif">“</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-medium leading-[1.3] flex flex-wrap justify-center tracking-tight text-white mb-6">
          {quoteArray.map((word, i) => {
            const start = i / quoteArray.length;
            const end = (i + 1) / quoteArray.length;
            
            return (
              <Word 
                key={i} 
                word={word} 
                progress={scrollYProgress} 
                start={start} 
                end={end} 
              />
            );
          })}
        </h2>
        
        <div className="flex flex-col items-center gap-4 animate-fade-rise-delay">
          <div className="relative">
            <img 
              src="/testimonial-avatar.png" 
              alt="Brooklyn Simmons" 
              className="w-16 h-16 rounded-full border border-white/20 object-cover grayscale brightness-125 transition-all hover:grayscale-0 duration-500" 
            />
            <div className="absolute inset-0 rounded-full bg-white/5 pointer-events-none" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-medium tracking-wide text-white">Brooklyn Simmons</span>
            <span className="text-xs font-normal tracking-[2px] uppercase text-white/40 mt-1">Product Manager</span>
          </div>
        </div>

      </div>

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};
