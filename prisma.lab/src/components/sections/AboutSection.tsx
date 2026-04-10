import { WordsPullUpMultiStyle } from "../animation/WordsPullUpMultiStyle";
import { AnimatedParagraph } from "../animation/AnimatedLetter";

export const AboutSection = () => {
  const segments = [
    { text: "I am Jorjis Hasan, ", className: "font-normal" },
    { text: "a self-taught director. ", className: "italic font-serif" },
    { text: "I have skills in color grading, visual effects, and narrative design.", className: "font-normal" },
  ];

  return (
    <section className="bg-black py-10 md:py-20 px-4 md:px-6">
      <div className="bg-[#101010] rounded-[2rem] md:rounded-[3rem] py-20 px-8 md:py-32 md:px-16 lg:px-24 max-w-7xl mx-auto text-center flex flex-col items-center gap-12">
        <div className="space-y-6">
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-medium">Visual arts</span>
          <WordsPullUpMultiStyle
            segments={segments}
            containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-5xl mx-auto leading-[0.95] sm:leading-[0.9]"
          />
        </div>

        <div className="max-w-xl mx-auto">
          <AnimatedParagraph
            text="Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals."
            className="text-[#DEDBC8] text-sm sm:text-base md:text-lg leading-[1.4]"
          />
        </div>
      </div>
    </section>
  );
};
