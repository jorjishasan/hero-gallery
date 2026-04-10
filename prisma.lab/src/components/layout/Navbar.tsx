export const Navbar = () => {
  const items = ["Our story", "Collective", "Workshops", "Programs", "Inquiries"];
  const colorNormal = "rgba(225, 224, 204, 0.8)";
  const colorHover = "#E1E0CC";

  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
        {items.map((item) => (
          <a
            key={item}
            href="#"
            className="text-[10px] sm:text-xs md:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
            style={{ color: colorNormal }}
            onMouseEnter={(e) => (e.currentTarget.style.color = colorHover)}
            onMouseLeave={(e) => (e.currentTarget.style.color = colorNormal)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};
