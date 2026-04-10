import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

interface FeatureCardProps {
  index: number;
  title: string;
  number?: string;
  icon?: string;
  items?: string[];
  video?: string;
  className?: string;
}

export const FeatureCard = ({ index, title, number, icon, items, video, className }: FeatureCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className={`relative h-[480px] rounded-2xl md:rounded-3xl overflow-hidden ${className}`}
    >
      {video ? (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-[#E1E0CC] text-xl font-medium">{title}</h3>
          </div>
        </>
      ) : (
        <div className="h-full p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              {icon && (
                <img 
                  src={icon} 
                  alt="" 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                />
              )}
              {number && (
                <span className="text-gray-500 font-medium text-sm">({number})</span>
              )}
            </div>
            
            <h3 className="text-xl font-medium text-white">{title}</h3>
            
            <div className="space-y-3">
              {items?.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <Check className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-400 text-sm leading-[1.3]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="group flex items-center gap-2 text-white text-sm font-medium hover:text-primary transition-colors cursor-pointer w-fit">
            Learn more
            <ArrowRight className="w-4 h-4 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      )}
    </motion.div>
  );
};
