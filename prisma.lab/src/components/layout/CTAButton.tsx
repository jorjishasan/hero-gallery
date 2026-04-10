import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const CTAButton = ({ text, delay = 0.7 }: { text: string; delay?: number }) => {
  const ease = [0.16, 1, 0.3, 1];

  return (
    <motion.button
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.8, ease: ease as any }}
      className="group flex items-center gap-2 pr-1.5 pl-6 py-1.5 bg-primary rounded-full transition-all hover:gap-3 cursor-pointer"
    >
      <span className="text-black font-medium text-sm sm:text-base">{text}</span>
      <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
        <ArrowRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
      </div>
    </motion.button>
  );
};
