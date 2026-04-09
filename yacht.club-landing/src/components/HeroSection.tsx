import { motion } from 'motion/react';

export default function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 40, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.96, ease: [0.22, 1, 0.36, 1] } }
  };

  const containerVariants = {
    hidden: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
    visible: { transition: { staggerChildren: 0.12 } }
  };

  return (
    <motion.div 
      className="absolute top-[96px] left-[20px] md:left-[96px] flex flex-col items-start font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="flex flex-col text-[64px] md:text-[140px] font-normal leading-none drop-shadow-2xl tracking-normal uppercase">
        <div className="overflow-hidden">
          <motion.div variants={textVariants}>Master The</motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div variants={textVariants} className="font-serif italic uppercase">Elements.</motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div variants={textVariants}>Embrace The</motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div variants={textVariants} className="font-serif italic uppercase">Ocean</motion.div>
        </div>
      </div>

      <motion.p 
        variants={textVariants}
        className="mt-8 ml-0 md:ml-[35%] translate-x-0 md:translate-x-[100px] text-[10px] md:text-xs font-normal w-[260px] text-left md:text-justify leading-relaxed drop-shadow-md tracking-widest font-sans"
      >
        JOIN AN EXCLUSIVE COMMUNITY OF SAILORS. WHETHER YOU CRAVE THE THRILL OF THE OPEN SEA OR THE SERENITY OF A SUNSET CRUISE, YOUR NEXT GREAT ADVENTURE STARTS HERE.
      </motion.p>
    </motion.div>
  );
}
