import React from "react";

export const Navbar = () => {
  const navItems = ["PRODUCTS", "RESEARCH", "DOCS", "PRICING", "CONTACT"];

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center pt-6 px-4 z-50">
      <div 
        className="flex items-center gap-2 px-2 py-2 rounded-full border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
        style={{ 
          background: "rgba(20, 20, 20, 0.6)", 
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)"
        }}
      >
        {/* Left Icon Button */}
        <button className="size-10 rounded-full flex items-center justify-center bg-white text-black text-lg transition-transform hover:scale-105 active:scale-95 leading-none">
          ✳
        </button>

        {/* Nav Items (segmented pills) */}
        <nav className="flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-5 py-2 rounded-full bg-black/80 text-white text-[11px] font-medium tracking-wider border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
