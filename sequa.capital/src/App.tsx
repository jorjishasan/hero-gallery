import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Research } from "@/components/Research";
import { Testimonial } from "@/components/Testimonial";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="relative w-full bg-black min-h-screen text-white antialiased selection:bg-white selection:text-black flex flex-col scroll-smooth">
      <Navbar />
      
      <main>
        <Hero />
        <ProductShowcase />
        <Research />
        <Testimonial />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
