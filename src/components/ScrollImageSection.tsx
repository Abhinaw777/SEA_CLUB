import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollImageSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".scroll-image");
      const sections = gsap.utils.toArray(".content-element");

      // Animate images with clip-path and vertical movement
      gsap.to(images, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "none",
        yPercent: -16,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".images-section",
          start: "top top",
          end: "bottom bottom",
          pin: ".images-container",
          pinSpacing: false,
          scrub: true,
        }
      });

      // Create scroll triggers for each section
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          id: i + 1
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Gradient Green Section */}
      <section className="w-full h-screen relative bg-gradient-to-br from-green-400 via-green-500 to-emerald-600"></section>
      
      {/* Images Section */}
      <section className="images-section relative bg-gray-100 dark:bg-gray-800 transition-colors duration-300" style={{ height: 'auto' }}>
        <div 
          ref={imagesContainerRef}
          className="images-container absolute top-0 left-0 w-full h-screen z-10 overflow-hidden"
          style={{ backgroundColor: 'rgb(217, 0, 255)' }}
        >
          <img 
            src="https://plus.unsplash.com/premium_photo-1674487959493-8894cc9473ea?q=40&w=2136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Scroll Animation 1"
            className="scroll-image w-full h-full object-cover object-top absolute top-0 left-0"
            style={{ 
              width: '120%', 
              height: '120%',
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
            }}
          />
          <img 
            src="https://images.unsplash.com/photo-1558945657-484aa38065ec?q=40&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Scroll Animation 2"
            className="scroll-image w-full h-full object-cover object-top absolute top-0 left-0"
            style={{ 
              width: '120%', 
              height: '120%',
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
            }}
          />
          <img 
            src="https://diariopuertovaras.cl/wp-content/uploads/2018/01/tucuquere.jpg" 
            alt="Scroll Animation 3"
            className="scroll-image w-full h-full object-cover object-top absolute top-0 left-0"
            style={{ 
              width: '120%', 
              height: '120%',
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
            }}
          />
        </div>
        
        <div className="content-element relative z-20 w-full h-screen flex items-center justify-center text-gray-900 dark:text-white text-8xl font-bold bg-yellow-100/30 dark:bg-yellow-900/30 transition-colors duration-300">
          
        </div>
        <div className="content-element relative z-20 w-full h-screen flex items-center justify-center text-gray-900 dark:text-white text-8xl font-bold bg-yellow-100/30 dark:bg-yellow-900/30 transition-colors duration-300">
          Section 1
        </div>
        <div className="content-element relative z-20 w-full h-screen flex items-center justify-center text-gray-900 dark:text-white text-8xl font-bold bg-yellow-100/30 dark:bg-yellow-900/30 transition-colors duration-300">
          Section 2
        </div>
        <div className="content-element relative z-20 w-full h-screen flex items-center justify-center text-gray-900 dark:text-white text-8xl font-bold bg-yellow-100/30 dark:bg-yellow-900/30 transition-colors duration-300">
          Section 3
        </div>
      </section>
      
      {/* Final Gradient Purple Section */}
      <section className="w-full h-screen relative bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700"></section>
    </div>
  );
};

export default ScrollImageSection;