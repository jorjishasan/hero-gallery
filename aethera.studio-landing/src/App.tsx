import { Navbar } from './components/Navbar';
import { VideoBackground } from './components/VideoBackground';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProcessSection, JournalSection, ContactSection } from './components/AdditionalSections';


function App() {
  return (
    <div className="relative min-h-screen font-body selection:bg-foreground selection:text-white">
      {/* Background Layer */}
      <VideoBackground src="/card_1.mp4" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        
        {/* Sections below hero */}
        <div className="bg-white">
          <ServicesSection />
          <ProcessSection />
          <CaseStudiesSection />
          <TestimonialsSection />
          <JournalSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default App;
