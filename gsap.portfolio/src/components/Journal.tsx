import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ENTRIES = [
  {
    title: "The Typography of Interfaces",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=200",
    date: "Oct 12, 2026",
    readTime: "4 min read",
  },
  {
    title: "Designing for Motion",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=200",
    date: "Sep 28, 2026",
    readTime: "6 min read",
  },
  {
    title: "Color Theory in Dark Mode",
    image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=200",
    date: "Sep 15, 2026",
    readTime: "3 min read",
  },
  {
    title: "Empathy in UX Research",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=200",
    date: "Aug 30, 2026",
    readTime: "5 min read",
  },
];

export default function Journal() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
        >
           <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Journal
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary">
              Recent{" "}
              <span className="font-display italic text-text-primary font-normal">
                thoughts
              </span>
            </h2>
            <p className="text-muted md:text-lg max-w-md">
              Articles and essays on design, development, and my creative process.
            </p>
          </div>

          <a
            href="#"
            className="hidden md:inline-flex relative group rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 m-[2px] bg-bg rounded-full px-6 py-2.5 text-sm font-medium text-text-primary flex items-center gap-2 group-hover:bg-surface transition-colors">
              View all <ArrowRight size={16} />
            </span>
          </a>
        </motion.div>

        {/* Entries */}
        <div className="space-y-4">
          {ENTRIES.map((entry, idx) => (
            <motion.a
              href="#"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-4 rounded-[40px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden">
                  <img src={entry.image} alt={entry.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-text-primary mb-1">
                    {entry.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-muted">
                    <span>{entry.date}</span>
                    <span className="w-1 h-1 rounded-full bg-stroke" />
                    <span>{entry.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full border border-stroke items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-bg transition-colors mx-4">
                <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
