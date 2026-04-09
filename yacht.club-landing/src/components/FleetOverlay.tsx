import { motion, AnimatePresence } from 'motion/react';
import { useRef } from 'react';

const fleetData = [
  {
    id: 1,
    name: "OCEAN ECLIPSE",
    specs: "LENGTH 28 M, CRUISING SPEED 22 KNOTS, GUESTS UP TO 12, CABINS 4 EN-SUITE",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: 2,
    name: "BLACK SOVEREIGN",
    specs: "LENGTH 24 M, TOP SPEED 45 KNOTS, HULL CARBON FIBER & KEVLAR, ENGINES TWIN V12 2000 HP",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: 3,
    name: "AZURE HORIZON",
    specs: "LENGTH 32 M, RANGE 1,500 NAUTICAL MILES, GUESTS 14 + 5 CREW, DECK SPACIOUS SUN DECK WITH JACUZZI",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
  }
];

function FleetVideo({ fleet, index }: { fleet: typeof fleetData[0], index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      className="relative flex-1 h-[85vh] md:h-screen border-b md:border-b-0 md:border-r border-white/20 last:border-0 group overflow-hidden"
      variants={{
        hidden: { x: '100vw', transition: { duration: 1.56, ease: [0.19, 1, 0.22, 1] } },
        visible: { x: 0, transition: { duration: 1.56, ease: [0.19, 1, 0.22, 1], delay: index * 0.1 } }
      }}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        src={fleet.video}
        loop
        muted
        playsInline
      />
      
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="absolute inset-x-8 bottom-12 flex flex-col items-start translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none text-white z-10">
        <h3 className="text-3xl md:text-5xl font-serif uppercase leading-none mb-4">{fleet.name}</h3>
        <p className="text-xs md:text-sm tracking-widest leading-relaxed max-w-sm drop-shadow-md">
          {fleet.specs}
        </p>
      </div>
    </motion.div>
  );
}

export default function FleetOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="fixed inset-0 z-[110] flex flex-col md:flex-row bg-slate-900 overflow-y-auto md:overflow-hidden font-sans"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {fleetData.map((fleet, index) => (
              <FleetVideo key={fleet.id} fleet={fleet} index={index} />
            ))}
          </motion.div>
          
          <motion.button 
            className="fixed top-8 right-8 z-[120] text-white uppercase tracking-widest text-sm font-sans mix-blend-difference hover:text-[#93c5fd] transition-colors cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 0.5 } }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            CLOSE FLEET
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
}
