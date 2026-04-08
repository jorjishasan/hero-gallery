import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export const Solution = () => {
  const features = [
    {
      title: "Curated Feed",
      desc: "An algorithmic timeline tailored to depth and quality, filtering the noise out.",
    },
    {
      title: "Writer Tools",
      desc: "Robust editing and distribution capabilities integrated directly into the workspace.",
    },
    {
      title: "Community",
      desc: "Meaningful discourse spaces embedded closely to content to provoke thoughtful replies.",
    },
    {
      title: "Distribution",
      desc: "Seamless syndication to multiple platforms maximizing subscriber reach effortlessly.",
    },
  ];

  return (
    <section className="py-32 md:py-44 border-t border-border/30 container mx-auto px-6">
      <div className="text-center mb-16">
        <motion.div {...fadeUp(0.1)} className="text-xs tracking-[3px] uppercase text-muted-foreground mb-6">
          SOLUTION
        </motion.div>
        <motion.h2 {...fadeUp(0.2)} className="text-4xl md:text-6xl font-medium tracking-[-1px]">
          The platform for <span className="font-serif italic font-normal">meaningful</span> content
        </motion.h2>
      </div>

      <motion.div {...fadeUp(0.3)} className="w-full aspect-[3/1] rounded-2xl overflow-hidden mb-16 border border-white/5 relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <motion.div key={idx} {...fadeUp(0.4 + idx * 0.1)} className="border-l border-white/10 pl-6">
            <h3 className="font-semibold text-base text-foreground mb-3">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
