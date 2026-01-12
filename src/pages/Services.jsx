import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, Check, ArrowRight } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const detailsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const servicesData = [
    {
      id: 1,
      title: 'CNC Machining',
      image: 'https://cdn.pixabay.com/photo/2014/09/13/21/46/milling-444493_1280.jpg',
      shortDesc: 'High-precision CNC cutting and milling.',
      fullDesc: 'Our advanced CNC machining services deliver exceptional precision for complex components. We work with various materials including steel, aluminum, brass, and composites.',
      features: [
        '3-axis & 5-axis CNC machines',
        'Precision up to 0.01mm tolerance',
        'High-speed production',
        'Custom tooling solutions',
        'Quality inspection & testing',
        'Fast turnaround times'
      ],
      specs: 'Max part size: 2000x1000x500mm, Speed: up to 6000 RPM'
    },
    {
      id: 2,
      title: 'Grills Fabrication',
      image: 'https://i.pinimg.com/474x/bb/8b/e7/bb8be71af36f2cb0b8c43b278c578f51.jpg',
      shortDesc: 'Custom grills and metalwork for homes.',
      fullDesc: 'We design and fabricate custom grills and metal structures tailored to your specifications. Perfect for gates, windows, and decorative elements.',
      features: [
        'Custom design consultation',
        'Stainless steel & mild steel options',
        'Welding & finishing services',
        'Anti-corrosion treatments',
        'Installation support',
        'Lifetime durability guarantee'
      ],
      specs: 'Materials: MS, SS, Aluminum | Finishes: Paint, Powder coating, Chrome plating'
    },
    {
      id: 3,
      title: 'Doors Manufacturing',
      image: 'https://omnicncmachines.files.wordpress.com/2018/06/image-13.png',
      shortDesc: 'Industrial and residential doors.',
      fullDesc: 'We manufacture high-quality doors for both industrial and residential applications. From security doors to custom designs, we have the expertise.',
      features: [
        'Industrial grade materials',
        'Fire-resistant options',
        'Soundproof doors',
        'Custom dimensions',
        'Hardware & locking systems',
        'Quick installation'
      ],
      specs: 'Types: Steel, Aluminum, Composite | Certifications: ISO 9001, Fire rated'
    },
    {
      id: 4,
      title: 'Windows Solutions',
      image: 'https://5.imimg.com/data5/RN/RP/MY-7661679/window-grill-cnc-cutting-500x500.png',
      shortDesc: 'Aluminum and UPVC window solutions.',
      fullDesc: 'Premium window solutions for residential and commercial properties. Offering both aluminum and UPVC options with modern designs.',
      features: [
        'Aluminum & UPVC frames',
        'Double glazing options',
        'Energy efficient',
        'Weather-resistant sealing',
        'Motorized opening systems',
        'Custom colors & designs'
      ],
      specs: 'Frame types: Aluminum, UPVC | Glass: Single/Double, Tinted, Reflective'
    },
    {
      id: 5,
      title: 'SENFENG Fiber Cutting',
      image: 'https://iprorwxhlirrlj5o.leadongcdn.com/cloud/llBqkKijRlqSiqjoploq/fenzu.jpg',
      shortDesc: 'Fiber laser cutting for precision parts.',
      fullDesc: 'State-of-the-art fiber laser cutting technology for precise and clean cuts on various materials. Ideal for custom parts and prototypes.',
      features: [
        'Laser power: 500W - 3000W',
        'Cut precision: ±0.1mm',
        'Multiple material compatibility',
        'Fast cutting speeds',
        'Minimal material waste',
        'Ready for production'
      ],
      specs: 'Materials: Metal sheets, Stainless, Aluminum, Copper | Max size: 2500x1300mm'
    },
    {
      id: 6,
      title: 'Battery & UPS Bodies',
      image: 'https://propakistani.pk/wp-content/uploads/2017/06/UPS.jpg',
      shortDesc: 'Custom fabricated bodies for batteries and UPS systems.',
      fullDesc: 'Specialized in manufacturing custom enclosures and bodies for battery packs and UPS systems with precision engineering.',
      features: [
        'Custom size fabrication',
        'Heat dissipation design',
        'Durable materials',
        'Cable management systems',
        'Terminal arrangements',
        'Quality tested units'
      ],
      specs: 'Materials: Steel, Aluminum | Customization: Size, Color, Terminal configuration'
    }
  ];

  const ServiceCard3D = ({ service, index, isActive }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          setActiveService(index);
          scrollToDetails();
        }}
      >
        <div
          className="relative bg-white border border-gray-200 shadow-lg h-full transition-all duration-500 overflow-hidden"
          style={{
            transform: `translateY(${isHovered ? -15 : 0}px)`,
            boxShadow: isHovered
              ? '0 30px 60px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)'
              : '0 10px 25px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="relative h-56 overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{
                transform: isHovered ? 'scale(1.15)' : 'scale(1)',
              }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40 mix-blend-multiply`}></div>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 transition-all duration-300" style={{
              transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
            }}>
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {service.shortDesc}
            </p>

            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors duration-300">
              Learn More
              <ChevronRight size={18} style={{
                transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                transition: 'transform 0.3s ease-out',
              }} />
            </div>
          </div>

          {isActive && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          )}
        </div>
      </div>
    );
  };

  const activeData = servicesData[activeService];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r to-blue-800 text-white relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://cdn.pixabay.com/photo/2024/08/03/10/09/construction-8941880_1280.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive manufacturing and fabrication solutions backed by years of expertise and cutting-edge technology
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {servicesData.map((service, idx) => (
              <ServiceCard3D
                key={service.id}
                service={service}
                index={idx}
                isActive={activeService === idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Section */}
      <section ref={detailsRef} className="py-20 bg-white relative overflow-hidden">
        <div
          className="absolute left-0 top-1/2 w-96 h-96 bg-blue-100 opacity-20 pointer-events-none rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image Display */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative w-full h-96 shadow-2xl overflow-hidden transition-all duration-700 rounded-lg">
                  <img 
                    src={activeData.image} 
                    alt={activeData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${activeData.color} opacity-30 mix-blend-multiply`}></div>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${activeData.color} opacity-0 blur-3xl transition-opacity duration-700 rounded-lg`}
                  style={{ opacity: 0.3 }}
                ></div>
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">{activeData.title}</h2>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {activeData.fullDesc}
              </p>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-blue-50 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-lg hover:scale-105 rounded">
                      <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gray-100 mb-8 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">Specifications</h4>
                <p className="text-gray-700">{activeData.specs}</p>
              </div>

              <button className="px-8 py-4 bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 rounded-lg">
                Request A Quote
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison Table */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-12">Service Comparison</h2>

          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-left font-bold">Service</th>
                  <th className="p-4 text-left font-bold">Precision</th>
                  <th className="p-4 text-left font-bold">Materials</th>
                  <th className="p-4 text-left font-bold">Turnaround</th>
                  <th className="p-4 text-left font-bold">Cost</th>
                </tr>
              </thead>
              <tbody>
                {servicesData.map((service, idx) => (
                  <tr
                    key={service.id}
                    className={`border-b transition-all duration-300 hover:shadow-lg hover:bg-blue-50 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-blue-50'
                    }`}
                  >
                    <td className="p-4 font-bold text-gray-900">{service.title}</td>
                    <td className="p-4 text-gray-700">High (±0.1mm)</td>
                    <td className="p-4 text-gray-700">Steel, Aluminum, Stainless</td>
                    <td className="p-4 text-gray-700">5-7 days</td>
                    <td className="p-4 text-gray-700">$$-$$$</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'What is your minimum order quantity?',
                a: 'We work with both small batch and large volume orders. For custom projects, minimum orders typically range from 1-10 units depending on complexity.'
              },
              {
                q: 'Do you offer design consultation?',
                a: 'Yes, our team of engineers can assist with design optimization, material selection, and manufacturing feasibility analysis at no additional cost.'
              },
              {
                q: 'What is your warranty policy?',
                a: 'All products come with a standard 1-year warranty against manufacturing defects. Extended warranties are available upon request.'
              },
              {
                q: 'Can you handle international orders?',
                a: 'Absolutely! We ship worldwide and handle all export documentation. We have experience with international clients and customs procedures.'
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-blue-50 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          Contact our team today for a free consultation and custom quote
        </p>
        <button className="px-10 py-4 bg-amber-400 text-gray-900 font-bold hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg rounded-lg">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default Services;