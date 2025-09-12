import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Zap, Users, Award, Globe, Rocket, Sparkles, Code, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const missionVisionRef = useRef<HTMLDivElement>(null);
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const coreValuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.about-header', {
        duration: 1.2,
        y: 60,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        }
      });

      // Mission & Vision cards stagger animation
      gsap.from('.mission-vision-card', {
        duration: 1,
        y: 80,
        opacity: 0,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: missionVisionRef.current,
          start: 'top 80%',
        }
      });

      // What We Do section
      gsap.from('.what-we-do-header', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: whatWeDoRef.current,
          start: 'top 85%',
        }
      });

      gsap.from('.what-we-do-card', {
        duration: 0.8,
        y: 60,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: whatWeDoRef.current,
          start: 'top 75%',
        }
      });

      // Core Values animation
      gsap.from('.core-values-container', {
        duration: 1.2,
        scale: 0.9,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: coreValuesRef.current,
          start: 'top 80%',
        }
      });

      gsap.from('.core-value-item', {
        duration: 0.8,
        y: 40,
        opacity: 0,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: coreValuesRef.current,
          start: 'top 70%',
        }
      });

      // Floating background elements
      gsap.to('.floating-bg-element', {
        y: -30,
        x: 15,
        rotation: 360,
        duration: 20,
        ease: 'none',
        repeat: -1,
        stagger: 2
      });

      // Parallax effect for background shapes
      gsap.to('.parallax-shape', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const missionVision = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To foster innovation and learning in satellite communication, electronics, and amateur radio technologies among students and enthusiasts.',
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading platform for space technology education and hands-on experience in satellite and electronics systems.',
      gradient: 'from-purple-500 via-purple-600 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50'
    },
  ];

  const whatWeDo = [
    {
      icon: Code,
      title: 'Projects',
      description: 'We develop real-world projects, from building amateur radio equipment to designing and tracking CubeSats.',
      gradient: 'from-emerald-500 to-teal-600',
      delay: '0s'
    },
    {
      icon: Rocket,
      title: 'Workshops',
      description: 'We host regular workshops on topics like embedded systems, RF design, and antenna theory to build practical skills.',
      gradient: 'from-orange-500 to-red-600',
      delay: '0.1s'
    },
    {
      icon: Sparkles,
      title: 'Competitions',
      description: 'Our members participate and win in national and international space and electronics competitions.',
      gradient: 'from-yellow-500 to-orange-600',
      delay: '0.2s'
    },
  ];

  const coreValues = [
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive network of tech enthusiasts and fostering collaborative innovation.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Pursuing the highest standards in every project and educational activity we undertake.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Pushing boundaries in space and electronics technology with creative solutions.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-bg-element absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
        <div className="floating-bg-element absolute top-40 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-30 blur-lg"></div>
        <div className="floating-bg-element absolute bottom-40 left-20 w-40 h-40 bg-indigo-100 rounded-full opacity-25 blur-2xl"></div>
        <div className="parallax-shape absolute top-60 right-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg opacity-10 rotate-45"></div>
        <div className="parallax-shape absolute bottom-60 left-40 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-15"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="about-header">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase">
                About Us
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">SEAC</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-6">
                The Satellite & Electronics Amateur Club is a vibrant community of students and professionals 
                passionate about space technology, electronics, and amateur radio.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div ref={missionVisionRef} className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {missionVision.map((item, index) => (
              <div key={index} className="mission-vision-card group">
                <div className={`relative bg-gradient-to-br ${item.bgGradient} rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent"></div>
                  </div>
                  
                  {/* Glowing Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-r ${item.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <item.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-center leading-relaxed text-lg">
                      {item.description}
                    </p>
                    
                    {/* Animated Arrow */}
                    <div className="flex justify-center mt-6">
                      <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do Section */}
        <div ref={whatWeDoRef} className="mb-24">
          <div className="text-center mb-16">
            <div className="what-we-do-header">
              <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                What We <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Do</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our activities are designed to provide hands-on experience and foster a deep understanding of technology.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatWeDo.map((item, index) => (
              <div key={index} className="what-we-do-card group" style={{ animationDelay: item.delay }}>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 hover:rotate-1 overflow-hidden h-full">
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500`}></div>
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-8 left-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`bg-gradient-to-r ${item.gradient} w-18 h-18 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 shadow-lg`}>
                      <item.icon className="h-9 w-9 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-center leading-relaxed mb-6">
                      {item.description}
                    </p>
                    
                    {/* Interactive Button */}
                    <div className="text-center">
                      <button className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 group-hover:scale-105">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div ref={coreValuesRef}>
          <div className="core-values-container relative bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 via-transparent to-purple-400 animate-pulse"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-indigo-200 to-pink-200 rounded-full opacity-30 blur-xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Our Core <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
                </h3>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {coreValues.map((value, index) => (
                  <div key={index} className="core-value-item group text-center">
                    <div className="relative">
                      {/* Animated Ring */}
                      <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full border-4 border-transparent group-hover:border-blue-300 group-hover:scale-125 transition-all duration-500"></div>
                      
                      <div className={`${value.bgColor} w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                        <value.icon className={`h-9 w-9 ${value.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {value.description}
                    </p>
                    
                    {/* Hover Effect Line */}
                    <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 group-hover:w-16 transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;