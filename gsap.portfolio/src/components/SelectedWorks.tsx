import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Automotive Motion",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
    span: "md:col-span-7",
  },
  {
    title: "Urban Architecture",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    span: "md:col-span-5",
  },
  {
    title: "Human Perspective",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    span: "md:col-span-5",
  },
  {
    title: "Brand Identity",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    span: "md:col-span-7",
  },
];

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary">
              Featured{" "}
              <span className="font-display italic text-text-primary font-normal">
                projects
              </span>
            </h2>
            <p className="text-muted md:text-lg max-w-md">
              A selection of projects I've worked on, from concept to launch.
            </p>
          </div>

          <a
            href="#"
            className="hidden md:inline-flex relative group rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 m-[2px] bg-bg rounded-full px-6 py-2.5 text-sm font-medium text-text-primary flex items-center gap-2 group-hover:bg-surface transition-colors">
              View all work <ArrowRight size={16} />
            </span>
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className={`${project.span} group relative aspect-[4/3] md:aspect-[4/3] bg-surface rounded-3xl overflow-hidden border border-stroke cursor-pointer`}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              />

              {/* Halftone Overlay - Note: tailwind arbitrary values for complex gradients */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-500 ease-out flex items-center justify-center p-6">
                
                {/* Hover Label pill */}
                <div className="relative inline-flex items-center group/pill scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="absolute -inset-[2px] rounded-full accent-gradient animate-gradient-shift" />
                  <div className="relative z-10 bg-white rounded-full px-5 py-2.5 flex items-center gap-2 text-bg text-sm font-medium">
                    View -{" "}
                    <span className="font-display italic text-bg font-normal text-base">
                      {project.title}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
