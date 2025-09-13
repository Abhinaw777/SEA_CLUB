import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Satellite, Radio, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.from(titleRef.current, {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: 'power4.out'
      })
      .from(subtitleRef.current, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
      }, '-=0.8')
      .from(ctaRef.current, {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
      }, '-=0.6');

      gsap.to('.floating-element', {
        y: -20,
        duration: 3,
        ease: 'power2.inOut',
        stagger: 0.5,
        repeat: -1,
        yoyo: true
      });

      gsap.to('.hero-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="hero-bg absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 dark:to-gray-900/70 transition-colors duration-300"></div>
      </div>

      {/* Floating Elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
        <Satellite className="floating-element absolute top-20 left-10 h-8 w-8 text-blue-400 dark:text-blue-300 opacity-60" />
        <Radio className="floating-element absolute top-40 right-20 h-6 w-6 text-orange-400 dark:text-orange-300 opacity-60" />
        <Zap className="floating-element absolute bottom-40 left-20 h-7 w-7 text-yellow-400 dark:text-yellow-300 opacity-60" />
        <div className="floating-element absolute top-60 right-10 w-3 h-3 bg-blue-400 dark:bg-blue-300 rounded-full opacity-60"></div>
        <div className="floating-element absolute bottom-60 right-40 w-2 h-2 bg-orange-400 dark:bg-orange-300 rounded-full opacity-60"></div>
      </div>

      {/* Content */}
      <div className="mt-5 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 ref={titleRef} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
          Satellite & Electronics
          <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Amateur Club
          </span>
        </h1>
        
        {/* Subtitle with cursive font + lowered */}
        <p 
          ref={subtitleRef} 
          className="mt-12 text-3xl sm:text-5xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-300"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Exploring the frontiers of space communication and electronics. 
          Join our community of innovators, experimenters, and technology enthusiasts.
        </p>
        
        <button 
          ref={ctaRef}
          className="inline-flex items-center px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white text-lg font-semibold rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
        >
          Start Your Journey
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
        </button>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg dark:shadow-gray-900/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-300">Active Members</div>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg dark:shadow-gray-900/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg dark:shadow-gray-900/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15</div>
            <div className="text-gray-600 dark:text-gray-300">Years of Excellence</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center transition-colors duration-300">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;