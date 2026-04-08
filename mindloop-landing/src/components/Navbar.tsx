const Instagram = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Linkedin = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const Twitter = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full px-8 md:px-28 py-4 bg-transparent flex items-center justify-between">
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-7 h-7 rounded-full border-2 border-foreground/60">
            <div className="w-3 h-3 rounded-full border border-foreground/60"></div>
          </div>
          <span className="font-bold text-lg">Mindloop</span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
          {["Home", "How It Works", "Philosophy", "Use Cases"].map((link, idx, arr) => (
            <div key={link} className="flex items-center gap-4">
              <a href="#" className="hover:text-foreground transition-colors duration-300">
                {link}
              </a>
              {idx !== arr.length - 1 && <span className="text-[10px]">•</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
          <a
            key={idx}
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full liquid-glass group hover:bg-white/5 transition-all duration-300"
          >
            <Icon className="w-4 h-4 text-foreground/80 group-hover:text-foreground" />
          </a>
        ))}
      </div>
    </nav>
  );
};
