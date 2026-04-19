import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './StaggeredMenu.css';

interface StaggeredMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onFleetToggle: () => void;
}

const menuItems = [
  { name: 'Home', action: 'link' },
  { name: 'Our Fleet', action: 'fleet' },
  { name: 'Membership', action: 'link' },
  { name: 'Regattas & Events', action: 'link' },
  { name: 'Academy', action: 'link' },
  { name: 'Contact', action: 'link' },
];

const socialItems = ['Instagram', 'Facebook', 'Twitter'];

export default function StaggeredMenu({ isOpen, setIsOpen, onFleetToggle }: StaggeredMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonIconRef = useRef<SVGSVGElement>(null);
  const menuTextRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const tl = gsap.timeline();

    if (isOpen) {
      // Menu label animation (Menu -> Close)
      gsap.to(menuTextRef.current, { yPercent: -50, duration: 0.5, ease: 'power3.inOut' });
      // Icon rotation
      gsap.to(buttonIconRef.current, { rotation: 225, duration: 0.5, ease: 'power3.inOut' });

      // Layers animation
      tl.to([layer1Ref.current, layer2Ref.current, panelRef.current], {
        x: '0%',
        duration: 1,
        ease: 'power4.out',
        stagger: 0.1
      });

      // Text stagger animation
      tl.fromTo(itemsRef.current, 
        { yPercent: 140, rotation: 10 },
        { yPercent: 0, rotation: 0, duration: 1, ease: 'power4.out', stagger: 0.05 },
        '-=0.6'
      );
    } else {
      // Menu label animation (Close -> Menu)
      gsap.to(menuTextRef.current, { yPercent: 0, duration: 0.5, ease: 'power3.inOut' });
      // Icon rotation
      gsap.to(buttonIconRef.current, { rotation: 0, duration: 0.5, ease: 'power3.inOut' });

      // Exit animations
      tl.to(panelRef.current, { x: '100%', duration: 0.8, ease: 'power3.inOut' })
        .to(layer2Ref.current, { x: '100%', duration: 0.8, ease: 'power3.inOut' }, '-=0.7')
        .to(layer1Ref.current, { x: '100%', duration: 0.8, ease: 'power3.inOut' }, '-=0.7');
    }
  }, [isOpen]);

  const handleItemClick = (action: string) => {
    if (action === 'fleet') {
      onFleetToggle();
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Background Dim (Click outside to close) */}
      <div 
        className={`fixed inset-0 z-30 transition-opacity duration-700 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsOpen(false)}
      />

      {/* Toggle Button */}
      <div 
        className="fixed top-8 right-8 z-50 flex items-center gap-3 backdrop-blur-[120px] bg-white/5 border border-white/10 px-4 py-3 rounded-full cursor-pointer hover:bg-white/10 transition-colors"
        onClick={toggleMenu}
        style={{
          transform: isOpen ? 'translateX(calc(-1 * clamp(260px, 38vw, 420px)))' : 'translateX(0)',
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="h-4 overflow-hidden relative w-[48px] uppercase text-xs tracking-widest font-sans list-none">
          <div ref={menuTextRef} className="flex flex-col">
            <span className="h-4 flex items-center justify-center">Menu</span>
            <span className="h-4 flex items-center justify-center text-[#93c5fd]">Close</span>
          </div>
        </div>
        <svg ref={buttonIconRef} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </div>

      {/* Colored Slide Layers */}
      <div ref={layer1Ref} className="fixed top-0 right-0 h-full w-full lg:w-[clamp(260px,38vw,420px)] bg-[#93c5fd] z-40 translate-x-full" />
      <div ref={layer2Ref} className="fixed top-0 right-0 h-full w-full lg:w-[clamp(260px,38vw,420px)] bg-slate-800 z-40 translate-x-full" />

      {/* Main Panel */}
      <div ref={panelRef} className="fixed top-0 right-0 h-full w-full lg:w-[clamp(260px,38vw,420px)] bg-white z-40 translate-x-full flex flex-col justify-between font-sans text-black">
        
        {/* Menu Items */}
        <div className="mt-32 px-8 md:px-16 menu-list">
          {menuItems.map((item, index) => (
            <div key={item.name} className="overflow-hidden mb-4">
              <div ref={(el) => { itemsRef.current[index] = el; }} className="menu-item-container flex items-center cursor-pointer group" onClick={() => handleItemClick(item.action)}>
                <span className="text-4xl md:text-[3.5rem] font-serif uppercase leading-tight group-hover:text-[#93c5fd] transition-colors duration-300">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Socials */}
        <div className="mb-12 px-8 md:px-16 pb-safe">
          <h4 className="text-[#93c5fd] tracking-widest text-xs uppercase mb-6 drop-shadow-sm font-sans font-bold">Socials</h4>
          <div className="flex flex-wrap gap-6">
            {socialItems.map((social) => (
              <a key={social} href="#" className="uppercase text-xs tracking-widest hover:text-[#93c5fd] hover:opacity-75 transition-all duration-300">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
