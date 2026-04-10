import { motion } from "framer-motion";
import { Navbar } from "../layout/Navbar";
import { WordsPullUp } from "../animation/WordsPullUp";
import { CTAButton } from "../layout/CTAButton";

export const HeroSection = () => {
  const ease = [0.16, 1, 0.3, 1];

  return (
    <section className="h-screen p-4 md:p-6 relative bg-black">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <WordsPullUp
                text="Prisma"
                showAsterisk
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]"
                delay={0}
              />
            </div>
            <div className="md:col-span-4 flex flex-col items-start gap-6 pb-2 md:pb-8 lg:pb-12 xl:pl-4">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: ease as any }}
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2]"
              >
                Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives.
              </motion.p>
              <CTAButton text="Join the lab" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
