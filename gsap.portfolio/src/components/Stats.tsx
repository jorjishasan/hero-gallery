import { motion } from "framer-motion";

export default function Stats() {
  const STATS = [
    { label: "Years Experience", value: "20+" },
    { label: "Projects Done", value: "95+" },
    { label: "Satisfied Clients", value: "200%" },
  ];

  return (
    <section className="bg-bg py-16 md:py-24 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-stroke">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center text-center ${i !== 0 ? "pt-12 md:pt-0" : ""}`}
            >
              <div className="text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary mb-4">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
