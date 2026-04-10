import { WordsPullUpMultiStyle } from "../animation/WordsPullUpMultiStyle";
import { FeatureCard } from "./FeatureCard";

export const FeaturesSection = () => {
  const headerLine1 = [
    { text: "Studio-grade workflows for visionary creators.", className: "text-primary" },
  ];
  const headerLine2 = [
    { text: "Built for pure vision. Powered by art.", className: "text-gray-500" },
  ];

  const cards = [
    {
      title: "Your creative canvas.",
      video: "/card_bg_1.mp4",
      className: "bg-[#212121]",
    },
    {
      title: "Project Storyboard.",
      number: "01",
      icon: "/image_card_1.webp",
      items: [
        "Visual sequence mapping",
        "Mood board integration",
        "Scene transitions logic",
        "Real-time compositioning",
      ],
      className: "bg-[#212121]",
    },
    {
      title: "Smart Critiques.",
      number: "02",
      icon: "/image_card_2.webp",
      items: [
        "AI-enhanced composition analysis",
        "Dynamic creative notes",
        "Direct tool integrations",
      ],
      className: "bg-[#212121]",
    },
    {
      title: "Immersion Capsule.",
      number: "03",
      icon: "/image_card_3.webp",
      items: [
        "Zero-distraction workspace",
        "Ambient soundscapes library",
        "Automatic schedule syncing",
      ],
      className: "bg-[#212121]",
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="space-y-2 text-center md:text-left">
          <WordsPullUpMultiStyle
            segments={headerLine1}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal block w-full md:justify-start"
          />
          <WordsPullUpMultiStyle
            segments={headerLine2}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal block w-full md:justify-start"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {cards.map((card, i) => (
            <FeatureCard key={i} index={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
