import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface AnimatedLetterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character = ({ char, progress, range }: AnimatedLetterProps) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block leading-normal">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

export const AnimatedParagraph = ({ text, className }: { text: string; className?: string }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");
  const totalChars = characters.length;

  return (
    <div ref={container} className={className}>
      {characters.map((char, i) => {
        const charProgress = i / totalChars;
        const range: [number, number] = [
          Math.max(0, charProgress - 0.1), 
          Math.min(1, charProgress + 0.05)
        ];
        
        return (
          <Character key={i} char={char} progress={scrollYProgress} range={range} />
        );
      })}
    </div>
  );
};
