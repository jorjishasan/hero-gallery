import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Carolyn Chapman",
    role: "People & Culture Operations Manager",
    company: "Meridian Group",
    quote: "Working with Aethera was a masterclass in collaborative problem-solving. They didn't just design a website; they understood our complex organizational culture and translated it into a digital experience that feels effortless and human."
  },
  {
    name: "Marcus Reid",
    role: "Chief Product Officer",
    company: "Coastal Living Co.",
    quote: "Aethera transformed our digital presence from a standard e-commerce store into a lifestyle destination. Their obsessive attention to detail and engineering prowess resulted in a platform that actually compounds our brand value over time."
  },
  {
    name: "Lena Okafor",
    role: "Brand Director",
    company: "Solaris Ventures",
    quote: "Operating as a true extension of our team, Aethera brought a level of strategic depth and creative vision that we hadn't found elsewhere. They have a rare ability to bridge the gap between high-level brand narrative and technical execution."
  }
];

const logos = ["Meridian", "GFS", "Solaris", "Coastal", "Vertex"];

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useReveal<HTMLDivElement>();

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={sectionRef} className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="reveal reveal-stagger-1 flex flex-col items-center text-center space-y-8 mb-20">
          <span className="rounded-full border border-foreground/10 px-4 py-1.5 text-xs text-muted uppercase tracking-[0.2em]">
            Testimonials
          </span>
          <h2 className="font-display text-4xl sm:text-5xl max-w-lg leading-tight">
            Trusted by growing companies
          </h2>
          
          {/* Dot Navigation */}
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                  activeIndex === i 
                    ? "bg-foreground border-foreground w-6" 
                    : "bg-transparent border-foreground/20 hover:border-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="reveal reveal-stagger-2 w-full max-w-4xl grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 bg-white">
          {/* Left: Video */}
          <div className="md:col-span-2 rounded-2xl overflow-hidden h-72 md:h-[450px]">
            <video
              src="/card_1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover grayscale active-index-video"
            />
          </div>

          {/* Right: Content */}
          <div className="md:col-span-3 flex flex-col justify-between py-4">
            <blockquote className="text-lg md:text-2xl leading-relaxed text-foreground font-light italic">
              "{testimonials[activeIndex].quote}"
            </blockquote>

            <div className="mt-12 pt-8 border-t border-foreground/10 flex items-center justify-between">
              <div>
                <p className="text-base font-semibold text-foreground">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-sm text-muted">
                  {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                </p>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={prev}
                  className="h-10 w-10 rounded-full border border-foreground/10 flex items-center justify-center transition-all hover:bg-foreground hover:text-white"
                >
                  <ChevronLeft size={16} />
                </button>
                <button 
                  onClick={next}
                  className="h-10 w-10 rounded-full border border-foreground/10 flex items-center justify-center transition-all hover:bg-foreground hover:text-white"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Strip */}
        <div className="reveal reveal-stagger-3 w-full border-t border-foreground/10 pt-16 mt-32 grid grid-cols-2 md:grid-cols-5 gap-8 opacity-40 grayscale items-center text-center">
          {logos.map(logo => (
            <div key={logo} className="font-display text-2xl md:text-3xl tracking-tight">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
