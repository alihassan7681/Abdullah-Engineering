import React, { useState, useEffect, useRef } from 'react';
import { FiChevronRight, FiAward, FiUsers, FiZap, FiBox } from 'react-icons/fi';
import { MdBuildCircle, MdWindow,} from 'react-icons/md';
import { MdDoorFront } from "react-icons/md";

// Hero Section
const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden -mt-2">
      {/* Background Image */}
      <img
        src="https://cdn.pixabay.com/photo/2017/10/05/11/46/laser-2819138_1280.jpg"
        alt="Industrial Building"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-blue-900/60 flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center text-white space-y-8">
          <div className="text-yellow-400 font-semibold uppercase text-sm tracking-wider animate-fadeIn">
            {/* EST. 1998 • TRUSTED BY 500+ CLIENTS WORLDWIDE */}
          </div>

          {/* Main 3D Animated Heading */}
          <h1 className="text-6xl md:text-7xl font-bold leading-tight animate-3d-text">
            Abdullah Engineering Solutions
          </h1>

          {/* Sub 3D Animated Text */}
          <h2 className="text-3xl md:text-4xl font-semibold animate-3d-text-delayed text-yellow-400">
            Innovation • Quality • Excellence
          </h2>

          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto animate-slideUp font-light leading-relaxed">
            Delivering high-quality industrial manufacturing and custom engineering services with cutting-edge technology and expertise.
          </p>

          {/* Additional 3D Text */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto animate-slideUp delay-400">
            <div className="animate-3d-card">
              <div className="text-4xl font-bold text-yellow-400">25+</div>
              <div className="text-sm text-white/80 mt-2">Years Experience</div>
            </div>
            <div className="animate-3d-card delay-100">
              <div className="text-4xl font-bold text-yellow-400">500+</div>
              <div className="text-sm text-white/80 mt-2">Projects Completed</div>
            </div>
            <div className="animate-3d-card delay-200">
              <div className="text-4xl font-bold text-yellow-400">98%</div>
              <div className="text-sm text-white/80 mt-2">Client Satisfaction</div>
            </div>
          </div>

          {/* <div className="flex gap-4 pt-6 justify-center animate-slideUp delay-500">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg">
              Get A Quote
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 text-lg">
              View Projects
            </button>
          </div> */}
        </div>
      </div>

      {/* Custom CSS for 3D Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes animate3d {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateX(30deg) translateY(50px) translateZ(-100px);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateX(0deg) translateY(0) translateZ(0);
          }
        }

        @keyframes animate3dDelayed {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateY(-20deg) translateX(-50px) translateZ(-80px);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) translateX(0) translateZ(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes card3d {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateY(30deg) translateZ(-50px);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) translateZ(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-3d-text {
          animation: animate3d 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          text-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
          transform-style: preserve-3d;
        }

        .animate-3d-text-delayed {
          animation: animate3dDelayed 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
          opacity: 0;
          text-shadow: 0 10px 30px rgba(251, 191, 36, 0.5);
          transform-style: preserve-3d;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-3d-card {
          animation: card3d 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards;
          opacity: 0;
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
        }

        .animate-3d-card:hover {
          transform: perspective(1000px) translateZ(20px) scale(1.05);
        }

        .animate-3d-card.delay-100 {
          animation-delay: 0.7s;
        }

        .animate-3d-card.delay-200 {
          animation-delay: 0.8s;
        }

        .delay-400 {
          animation-delay: 0.6s;
        }

        .delay-500 {
          animation-delay: 0.8s;
          opacity: 0;
          animation: slideUp 1s ease-out 0.8s forwards;
        }
      `}</style>
    </section>
  );
};

// Services Section with 3D Animation
const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.max(0, 1 - sectionTop / windowHeight);
        setScrollPos(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: 'CNC Machining', desc: 'High-precision CNC cutting and milling.', icon: FiZap, color: 'bg-blue-500' },
    { title: 'Grills Fabrication', desc: 'Custom grills and metalwork for homes.', icon: MdBuildCircle, color: 'bg-purple-500' },
    { title: 'Doors Manufacturing', desc: 'Industrial and residential doors.', icon: MdDoorFront, color: 'bg-orange-500' },
    { title: 'Windows', desc: 'Aluminum and UPVC window solutions.', icon: MdWindow, color: 'bg-green-500' },
    { title: 'SENFENG Fiber Cutting', desc: 'Fiber laser cutting for precision parts.', icon: FiZap, color: 'bg-yellow-500' },
    { title: 'Battery & UPS Bodies', desc: 'Custom fabricated bodies for batteries and UPS.', icon: FiBox, color: 'bg-indigo-500' },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive manufacturing & fabrication solutions</p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === idx;
            const rotateY = isHovered ? 10 : 0;
            const rotateX = isHovered ? -10 : 0;

            return (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="h-full perspective"
                style={{
                  perspective: '1000px',
                }}
              >
                <div
                  className="relative h-full p-8 bg-white border border-gray-200 shadow-lg transition-all duration-500"
                  style={{
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${isHovered ? 50 : 0}px) translateY(${isHovered ? -20 : 0}px)`,
                    transformStyle: 'preserve-3d',
                    boxShadow: isHovered
                      ? '0 25px 50px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)'
                      : '0 10px 25px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div
                    className={`w-16 h-16 ${service.color} text-white flex items-center justify-center shadow-lg transition-transform duration-500`}
                    style={{
                      transform: isHovered ? 'scale(1.15) rotate(10deg)' : 'scale(1) rotate(0deg)',
                    }}
                  >
                    <Icon size={32} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6 transition-all duration-300" style={{
                    transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
                  }}>
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 h-12">
                    {service.desc}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer transition-all duration-300" style={{
                    transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                  }}>
                    Learn More
                    <FiChevronRight size={16} style={{
                      transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                      transition: 'transform 0.3s ease-out',
                    }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Counter Component
const Counter = ({ end, label, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.5 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const increment = end / 30;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center shadow-lg">
          <Icon size={32} strokeWidth={1.5} />
        </div>
      </div>
      <div className="text-5xl font-black text-blue-900 mb-2">{count}+</div>
      <p className="text-gray-600 font-semibold">{label}</p>
    </div>
  );
};

// Stats Section with Parallax
const StatsSection = () => {
  const sectionRef = useRef(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const offset = rect.top - window.innerHeight / 2;
        setParallaxY(offset * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-blue-50 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 w-96 h-96 bg-blue-200 opacity-10 pointer-events-none"
        style={{
          transform: `translate(-50%, ${parallaxY}px)`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Proven track record of excellence and innovation</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter end={25} label="Years Experience" icon={FiAward} />
          <Counter end={500} label="Projects Completed" icon={MdBuildCircle} />
          <Counter end={98} label="Client Satisfaction %" icon={FiZap} />
          <Counter end={50} label="Expert Team Members" icon={FiUsers} />
        </div>
      </div>
    </section>
  );
};

// About Section with Parallax
const AboutSection = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [leftOffset, setLeftOffset] = useState(0);
  const [rightOffset, setRightOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, 1 - rect.top / window.innerHeight);
        setLeftOffset(scrollProgress * 40);
        setRightOffset(scrollProgress * -40);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={leftRef} style={{ transform: `translateX(${leftOffset}px)`, transition: 'transform 0.1s ease-out' }}>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">About Abdullah Engineering</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over 25 years of experience in precision engineering and manufacturing, we've established ourselves as a trusted partner for industries across Pakistan and beyond.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our state-of-the-art facility combines cutting-edge technology with skilled craftsmanship to deliver exceptional results. We specialize in custom solutions tailored to meet the unique needs of each client.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-blue-50 border border-blue-200">
                <div className="text-2xl font-bold text-blue-900 mb-2">ISO 9001</div>
                <p className="text-sm text-gray-600">Certified Quality</p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200">
                <div className="text-2xl font-bold text-blue-900 mb-2">24/7</div>
                <p className="text-sm text-gray-600">Support Available</p>
              </div>
            </div>
          </div>

          <div ref={rightRef} style={{ transform: `translateX(${rightOffset}px)`, transition: 'transform 0.1s ease-out' }} className="relative">
            <div className="w-full aspect-square bg-blue-500 shadow-2xl flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-90">
                <rect width="400" height="400" fill="url(#grad2)" />
                <defs>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
                <circle cx="200" cy="200" r="50" fill="white" opacity="0.8" />
                <path d="M150 200 L250 200 M200 150 L200 250" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Start Your Project?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Contact us today for a free consultation and let's discuss how we can help bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-amber-400 text-gray-900 font-bold hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-blue-900 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

// Home Page
const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <CTASection />
    </div>
  );
};

export default Home;