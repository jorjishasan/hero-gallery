import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export const SearchChanged = () => {
  const cards = [
    {
      icon: "icon-chatgpt.png",
      name: "ChatGPT",
      desc: "Instant answers replacing traditional search behavior.",
    },
    {
      icon: "icon-perplexity.png",
      name: "Perplexity",
      desc: "Deep research, synthesizing multiple viewpoints seamlessly.",
    },
    {
      icon: "icon-google.png",
      name: "Google AI",
      desc: "AI Overviews directly answering queries at the top.",
    },
  ];

  return (
    <section className="pt-52 md:pt-64 pb-6 md:pb-9 container mx-auto px-6 text-center">
      <motion.h2
        {...fadeUp(0.1)}
        className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-1px] md:tracking-[-2px] mb-8"
      >
        Search has <span className="font-serif italic font-normal">changed.</span> Have you?
      </motion.h2>

      <motion.p
        {...fadeUp(0.2)}
        className="text-muted-foreground text-lg max-w-2xl mx-auto mb-24"
      >
        The way we discover information is undergoing a profound shift. The tools we use to navigate the web are evolving faster than ever.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20 max-w-5xl mx-auto">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            {...fadeUp(0.3 + idx * 0.1)}
            className="flex flex-col items-center"
          >
            <div className="w-[200px] h-[200px] mb-8 flex items-center justify-center p-8 bg-white/5 rounded-3xl border border-white/5">
              <img
                src={`/${card.icon}`}
                alt={card.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-base text-foreground mb-2">
              {card.name}
            </h3>
            <p className="text-muted-foreground text-sm max-w-[200px]">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.6)}>
        <p className="text-muted-foreground text-sm text-center">
          If you don't answer the questions, someone else will.
        </p>
      </motion.div>
    </section>
  );
};
