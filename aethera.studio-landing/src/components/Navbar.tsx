import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 md:px-12 md:py-5 bg-white/70 backdrop-blur-md border-b border-foreground/[0.03]">
      {/* Brand */}
      <div className="flex items-center">
        <span className="font-display text-2xl md:text-3xl tracking-tight text-foreground flex items-baseline">
          Aethera<span className="text-[10px] md:text-xs ml-0.5 opacity-60 relative top-[-0.5em]">®</span>
        </span>
      </div>

      {/* Nav Items - Desktop */}
      <div className="hidden md:flex items-center space-x-10">
        <a href="#" className="text-sm font-medium text-foreground transition-colors tracking-tight">Home</a>
        <a href="#studio" className="text-sm font-medium text-muted hover:text-foreground transition-colors tracking-tight">Studio</a>
        <a href="#about" className="text-sm font-medium text-muted hover:text-foreground transition-colors tracking-tight">About</a>
        <a href="#journal" className="text-sm font-medium text-muted hover:text-foreground transition-colors tracking-tight">Journal</a>
        <a href="#reach-us" className="text-sm font-medium text-muted hover:text-foreground transition-colors tracking-tight">Reach Us</a>
      </div>

      {/* CTA Button */}
      <div>
        <button className="rounded-full bg-foreground text-white px-7 py-2.5 text-sm font-medium transition-all hover:scale-[1.03] active:scale-[0.98] shadow-sm hover:shadow-md">
          Begin Journey
        </button>
      </div>
    </nav>
  );
};
