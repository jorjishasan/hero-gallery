import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delay?: number;
}

export const WordsPullUp = ({ text, className, showAsterisk, delay = 0 }: WordsPullUpProps) => {
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

  const words = text.split(" ");

  return (
    <h1 ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
          <motion.span
            variants={pullupVariant}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            custom={i}
            className="inline-block relative"
          >
            {word}
            {showAsterisk && i === words.length - 1 && (
              <span className="absolute top-[0.4em] -right-[0.3em] text-[0.31em]">*</span>
            )}
            {i !== words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </motion.span>
        </span>
      ))}
    </h1>
  );
};
