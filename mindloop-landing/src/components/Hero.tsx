import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 md:opacity-60"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
      />

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center pt-28 md:pt-32">
        <motion.div
          {...fadeUp(0.1)}
          className="flex flex-col items-center gap-3 mb-8"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`/avatar-${i}.png`}
                alt={`Avatar ${i}`}
                className="w-8 h-8 rounded-full border-2 border-background object-cover grayscale"
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            7,000+ people already subscribed
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-6 max-w-4xl"
        >
          Get <span className="font-serif italic font-normal">Inspired</span> with Us
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-lg text-hero-subtitle max-w-2xl mb-12"
        >
          Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction.
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="w-full max-w-lg"
        >
          <div className="liquid-glass rounded-full p-2 flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-none outline-none text-foreground px-6 placeholder:text-muted-foreground"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-foreground text-background font-medium rounded-full px-8 py-3 shrink-0"
            >
              SUBSCRIBE
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
