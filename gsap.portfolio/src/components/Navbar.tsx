import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "Work", path: "#work" },
  { name: "Resume", path: "#resume" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simple location path matching for active state
  // On a real site you might use IntersectionObserver for hash links
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/" && !location.hash) return true;
    if (location.hash === path) return true;
    return false;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <div
        className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${scrolled ? "shadow-md shadow-black/30" : ""
          }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="relative w-9 h-9 rounded-full flex items-center justify-center group overflow-hidden transition-transform hover:scale-110"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 accent-gradient animate-gradient-shift group-hover:[animation-direction:reverse]" />
          {/* Inner circle */}
          <div className="absolute inset-[2px] overflow-hidden rounded-full bg-bg">
            <img
              src="https://www.jorjishasan.com/_next/image?url=%2Fprofile%2Favatar.avif&w=640&q=75"
              alt="Jorjis Hasan"
              className="h-full w-full object-cover"
              width={36}
              height={36}
              decoding="async"
            />
          </div>
        </Link>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-2 hidden sm:block" />

        {/* Links */}
        <nav className="flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors ${isActive(link.path)
                ? "bg-stroke/50 text-text-primary"
                : "text-muted hover:text-text-primary hover:bg-stroke/50"
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-2 hidden sm:block" />

        {/* Say Hi Button */}
        <a
          href="mailto:hello@jorjishasan.com"
          className="relative group rounded-full text-xs sm:text-sm font-medium inline-flex items-center px-4 py-1.5 sm:py-2 text-text-primary transition-colors"
        >
          {/* Hover background rim */}
          <span className="absolute inset-0 md:-inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 bg-surface/80 group-hover:bg-surface whitespace-nowrap rounded-full backdrop-blur-md flex items-center gap-1.5 px-3 py-1.5 -mx-3 -my-1.5 transition-colors">
            Say hi <ArrowUpRight size={14} className="shrink-0" />
          </span>
        </a>
      </div>
    </div>
  );
}
