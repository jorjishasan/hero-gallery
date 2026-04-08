import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Word = ({ children, progress, range }: { children: React.ReactNode; progress: any; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
};

export const Mission = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });

  const paragraph1 = "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.";
  const words1 = paragraph1.split(" ");
  const highlightWords = ["curiosity", "meets", "clarity"];

  const paragraph2 = "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.";
  const words2 = paragraph2.split(" ");

  const totalWords = words1.length + words2.length;

  return (
    <section className="pt-0 pb-32 md:pb-44 container mx-auto px-6" ref={containerRef}>
      <div className="flex justify-center mb-20 md:mb-32">
        <div className="w-full max-w-[800px] aspect-square rounded-3xl overflow-hidden border border-white/5 relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] text-hero-subtitle flex flex-wrap">
          {words1.map((word, i) => {
            const start = i / totalWords;
            const end = start + 1 / totalWords;
            const isHighlight = highlightWords.includes(word.replace(/[^a-zA-Z]/g, ''));
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                <span className={isHighlight ? "text-foreground" : ""}>{word}</span>
              </Word>
            );
          })}
        </p>

        <p className="text-xl md:text-2xl lg:text-3xl font-medium text-hero-subtitle flex flex-wrap mt-10">
          {words2.map((word, i) => {
            const start = (words1.length + i) / totalWords;
            const end = start + 1 / totalWords;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
};
