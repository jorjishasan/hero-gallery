import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import Journal from "./components/Journal";
import Explorations from "./components/Explorations";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Enable smooth scrolling natively
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <Router>
      <CustomCursor />
      <div className="bg-bg min-h-screen text-text-primary selection:bg-accent/30 selection:text-text-primary cursor-none">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <LoadingScreen onComplete={() => setIsLoading(false)} />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Navbar />
              <main>
                <Hero />
                <SelectedWorks />
                <Journal />
                <Explorations />
                <Stats />
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
