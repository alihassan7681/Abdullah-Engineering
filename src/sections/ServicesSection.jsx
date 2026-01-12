import React, { useState } from 'react';
import { ChevronRight, Zap, Wrench, Building2, CircleDot, Lightbulb, Package } from 'lucide-react';

const services = [
  { title: 'CNC Machining', desc: 'High-precision CNC cutting and milling.', icon: Wrench, color: 'from-blue-500 to-cyan-500' },
  { title: 'Grills Fabrication', desc: 'Custom grills and metalwork for homes.', icon: Building2, color: 'from-purple-500 to-pink-500' },
  { title: 'Doors Manufacturing', desc: 'Industrial and residential doors.', icon: CircleDot, color: 'from-orange-500 to-red-500' },
  { title: 'Windows', desc: 'Aluminum and UPVC window solutions.', icon: Lightbulb, color: 'from-green-500 to-emerald-500' },
  { title: 'SENFENG Fiber Cutting', desc: 'Fiber laser cutting for precision parts.', icon: Zap, color: 'from-yellow-500 to-orange-500' },
  { title: 'Battery & UPS Bodies', desc: 'Custom fabricated bodies for batteries and UPS systems.', icon: Package, color: 'from-indigo-500 to-purple-500' },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive manufacturing & fabrication solutions with cutting-edge technology</p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative h-full"
              >
                {/* 3D Card Container */}
                <div
                  className="relative h-full p-8 rounded-2xl bg-white border border-gray-100 transition-all duration-300 ease-out cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isHovered ? 'translateY(-12px) rotateX(5deg)' : 'translateY(0) rotateX(0)',
                    boxShadow: isHovered
                      ? '0 20px 40px rgba(0, 0, 0, 0.15), 0 0 40px rgba(59, 130, 246, 0.1)'
                      : '0 4px 15px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  {/* Gradient Background Accent */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${service.color}`}
                  ></div>

                  {/* Icon Container with 3D rotation */}
                  <div
                    className="relative mb-6"
                    style={{
                      transform: isHovered ? 'scale(1.1) rotateZ(10deg)' : 'scale(1) rotateZ(0)',
                      transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transform group-hover:shadow-2xl transition-shadow duration-300`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300"
                    style={{
                      transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                      transition: 'transform 0.3s ease-out',
                    }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 h-12 group-hover:text-gray-700 transition-colors duration-300">
                    {service.desc}
                  </p>

                  {/* Learn More Link */}
                  <div
                    className="inline-flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300 cursor-pointer"
                    style={{
                      transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                      transition: 'transform 0.3s ease-out',
                    }}
                  >
                    Learn More
                    <ChevronRight
                      className="w-4 h-4 transition-transform duration-300"
                      style={{
                        transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                      }}
                    />
                  </div>

                  {/* Border glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl border border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: isHovered ? 'inset 0 0 20px rgba(59, 130, 246, 0.1)' : 'none',
                    }}
                  ></div>
                </div>

                {/* Floating shadow for depth */}
                <div
                  className="absolute inset-0 rounded-2xl -z-10 transition-all duration-300"
                  style={{
                    transform: isHovered ? 'scale(1.02) translateY(8px)' : 'scale(0.98) translateY(0)',
                    background: isHovered
                      ? 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.2), transparent)'
                      : 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.05), transparent)',
                    filter: 'blur(20px)',
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;