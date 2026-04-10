import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  containerClassName?: string;
  delay?: number;
}

export const WordsPullUpMultiStyle = ({ 
  segments, 
  containerClassName = "", 
  delay = 0 
}: WordsPullUpMultiStyleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: delay + i * 0.08,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    }),
  };

  // Flatten segments into words with their styles
  const wordsWithStyle = segments.flatMap((segment) => {
    const words = segment.text.split(" ");
    return words.map((word) => ({
      text: word,
      className: segment.className,
    }));
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center items-baseline ${containerClassName}`}>
      {wordsWithStyle.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
          <motion.span
            variants={pullupVariant}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            custom={i}
            className={`inline-block relative ${word.className || ""}`}
          >
            {word.text}
            {i !== wordsWithStyle.length - 1 && <span>&nbsp;</span>}
          </motion.span>
        </span>
      ))}
    </div>
  );
};
