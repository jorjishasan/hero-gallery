import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { FeaturesSection } from "./components/sections/FeaturesSection";

function App() {
  return (
    <main className="bg-black">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      
      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-[#E1E0CC] font-bold text-xl tracking-tight">Prisma*</span>
            <p className="text-gray-500 text-xs">Unlocking potential through unique perspectives.</p>
          </div>
          
          <div className="flex gap-8 text-xs text-gray-500">
            <a href="#" className="hover:text-[#E1E0CC] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#E1E0CC] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#E1E0CC] transition-colors">LinkedIn</a>
          </div>
          
          <p className="text-gray-600 text-[10px]">© 2026 Prisma Creative Studio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
