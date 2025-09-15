import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scrolling for all elements
    gsap.set('html', { scrollBehavior: 'smooth' });
    
    // Refresh ScrollTrigger when the page loads
    ScrollTrigger.refresh();

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="font-inter">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Activities />
          <Events />
          {/* <Gallery /> */}
          {/* <Contact /> */}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;