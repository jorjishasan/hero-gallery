export const Footer = () => {
  return (
    <footer className="py-12 px-8 md:px-28 border-t border-border/30">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-muted-foreground text-sm">
          © 2026 Mindloop. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6 text-muted-foreground text-sm">
          <a href="#" className="hover:text-foreground transition-colors duration-300">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors duration-300">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};
