import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import HeroSection from './components/HeroSection';
import MouseRippleTrail from './components/MouseRippleTrail';
import StaggeredMenu from './components/StaggeredMenu';
import FleetOverlay from './components/FleetOverlay';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFleetOpen, setIsFleetOpen] = useState(false);

  // CTA button slide value calculation
  const ctaSlideValue = isMenuOpen ? 'translateX(calc(-1 * clamp(260px, 38vw, 420px)))' : 'translateX(0)';

  return (
    <div className="relative min-h-screen w-full bg-slate-900 text-white overflow-hidden font-sans">
      {/* Background Video Layer z-0 */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: isFleetOpen ? 'blur(100px)' : 'blur(0px)',
            transition: isFleetOpen 
              ? 'filter 1.56s cubic-bezier(0.19, 1, 0.22, 1)' 
              : 'filter 1.3s cubic-bezier(0.19, 1, 0.22, 1)'
          }}
          src="/hero_bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Main Content Layer z-20 */}
      <div className="absolute inset-0 z-20 h-full pointer-events-none flex flex-col justify-between">
        <AnimatePresence>
          {!isFleetOpen && <HeroSection />}
        </AnimatePresence>
      </div>

      {/* Ripple Trail Layer z-30 */}
      <MouseRippleTrail />

      {/* Staggered Navigation Menu z-40 */}
      <StaggeredMenu 
        isOpen={isMenuOpen} 
        setIsOpen={setIsMenuOpen} 
        onFleetToggle={() => {
          setIsFleetOpen(true);
        }}
      />

      {/* "JOIN THE CLUB" Button z-50 */}
      <div 
        className="absolute bottom-8 right-8 z-50 pointer-events-none"
        style={{
          transform: ctaSlideValue,
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <motion.button
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0, y: 40, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } },
            visible: { opacity: 1, y: 0, transition: { duration: 0.96, ease: [0.22, 1, 0.36, 1], delay: 0.2 } }
          }}
          className={`px-6 py-3 text-[13px] md:px-12 md:py-5 md:text-[18px] font-normal tracking-[0.15em] backdrop-blur-md pointer-events-auto transition-colors duration-400 uppercase ${
            isMenuOpen 
              ? 'hidden md:block bg-[#93c5fd] text-black hover:bg-white' 
              : 'bg-white text-black hover:bg-[#93c5fd]'
          }`}
        >
          JOIN THE &nbsp; CLUB
        </motion.button>
      </div>

      {/* Fleet Overlay Layer z-[110] & z-[120] */}
      <FleetOverlay 
        isOpen={isFleetOpen} 
        onClose={() => setIsFleetOpen(false)} 
      />
    </div>
  );
}
