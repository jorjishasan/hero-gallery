import React from "react";

export const Footer = () => {
  return (
    <footer id="contact" className="py-24 px-6 md:px-28 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">Sequa</span>
            <span className="size-1.5 rounded-full bg-white opacity-40" />
          </div>
          <p className="text-white/20 text-xs max-w-xs font-sans leading-relaxed">
            Pioneering on-device intelligence for a secure and deterministic future. Built in the nebula.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-widest text-white font-bold uppercase">Product</span>
            <a href="#products" className="text-white/40 text-xs hover:text-white transition-colors">Features</a>
            <a href="#research" className="text-white/40 text-xs hover:text-white transition-colors">Research</a>
            <a href="#pricing" className="text-white/40 text-xs hover:text-white transition-colors">Pricing</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-widest text-white font-bold uppercase">Company</span>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">About</a>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Security</a>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Legal</a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-widest text-white font-bold uppercase">Connect</span>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/[0.02] flex flex-col md:flex-row justify-between gap-6">
        <span className="text-white/10 text-[10px] tracking-widest">© 2026 SEQUA LABS. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-8">
           <a href="#" className="text-white/10 text-[10px] tracking-widest hover:text-white/30 transition-colors">PRIVACY POLICY</a>
           <a href="#" className="text-white/10 text-[10px] tracking-widest hover:text-white/30 transition-colors">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
};
