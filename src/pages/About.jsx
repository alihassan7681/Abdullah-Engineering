import React from 'react';
import { Building2, Target, Award, Users, Factory, FlaskConical, Warehouse, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-700 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.pixabay.com/photo/2025/04/27/07/01/industry-9562428_1280.jpg" 
            alt="Engineering"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm">ABOUT US</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Abdullah Engineering
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Leading the industry with innovation and excellence since 1995
          </p>
        </div>
      </div>

      {/* Mission and Values */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Our Mission */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Target className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver innovative engineering solutions that exceed client expectations while maintaining the highest standards of quality, safety, and sustainability in everything we do.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Award className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrity, innovation, and excellence form the cornerstone of our operations. We believe in building lasting relationships through trust, transparency, and consistent delivery of superior results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legacy of Excellence */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm font-semibold mb-2 tracking-wide">OUR HISTORY</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-blue-900">
              A Legacy of Excellence
            </h2>
            <p className="text-gray-600 text-sm">
              Tracing our journey from humble beginnings to industry leadership.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-200 h-full"></div>

            {/* Timeline Items */}
            <div className="space-y-24">
              {/* 1998 - Right Side */}
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
                  <div className="w-5/12">
                    <div className="ml-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-600">1998</h3>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">Foundation</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Abdullah Engineering was established with a small team of 5 dedicated engineers focused on local civil infrastructure projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2008 - Left Side */}
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="w-5/12 text-right">
                    <div className="mr-8">
                      <div className="flex items-center justify-end gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-blue-600">2008</h3>
                        <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                          <Building2 className="w-5 h-5" />
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">Global Expansion</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Expanded operations to 3 international markets and established our first overseas manufacturing facility to meet growing demand.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
                  <div className="w-5/12"></div>
                </div>
              </div>

              {/* 2015 - Right Side */}
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
                  <div className="w-5/12">
                    <div className="ml-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                          <Award className="w-5 h-5" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-600">2015</h3>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">ISO Certifications</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Achieved ISO 9001 and ISO 14001 certifications, marking a significant milestone in our commitment to quality and environmental management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2023 - Left Side */}
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="w-5/12 text-right">
                    <div className="mr-8">
                      <div className="flex items-center justify-end gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-blue-600">2023</h3>
                        <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                          <FlaskConical className="w-5 h-5" />
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">Innovation Hub</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Launched the Advanced Engineering Research Center with focus on AI-driven industrial automation and sustainable energy solutions.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
                  <div className="w-5/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold mb-2">THE GREAT LEADERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meet Our Leadership</h2>
            <p className="text-gray-600 mt-2">Experienced professionals driving our vision forward</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Leader 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex">
                <div className="w-40 flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" 
                    alt="Ahmed Abdullah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">Ahmed Abdullah</h3>
                  <p className="text-blue-700 font-semibold mb-3">Chief Executive Officer</p>
                  <p className="text-gray-600 text-sm">
                    Visionary leader with over 25 years of experience in engineering and business development.
                  </p>
                </div>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex">
                <div className="w-40 flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" 
                    alt="Sarah Jameel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">Sarah Jameel</h3>
                  <p className="text-blue-700 font-semibold mb-3">Chief Technology Officer</p>
                  <p className="text-gray-600 text-sm">
                    Leading our technological innovation with expertise in advanced engineering systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Leader 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex">
                <div className="w-40 flex-shrink-0">
                  <img 
                    src="https://washingtonexec.com/wp-content/uploads/2024/01/Sujey-Edward-Chief-Technology-Officer-Federal-Market-IBM-Consulting.jpg" 
                    alt="Michael Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">Michael Chen</h3>
                  <p className="text-blue-700 font-semibold mb-3">Operations Director</p>
                  <p className="text-gray-600 text-sm">
                    Ensuring operational excellence and quality standards across all projects and facilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Leader 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex">
                <div className="w-40 flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" 
                    alt="Fatima Al-Rashid"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">Fatima Al-Rashid</h3>
                  <p className="text-blue-700 font-semibold mb-3">Project Manager</p>
                  <p className="text-gray-600 text-sm">
                    Managing complex projects with precision and delivering results that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold mb-2">INFRASTRUCTURE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Facilities</h2>
            <p className="text-gray-600 mt-2">State-of-the-art infrastructure for excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Assembly Line */}
            <div className="relative rounded-lg overflow-hidden h-64 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800" 
                alt="Assembly Line"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent flex flex-col items-center justify-end pb-8">
                <Factory className="w-16 h-16 mb-4 text-white" />
                <h3 className="text-2xl font-bold text-white">Assembly Line</h3>
              </div>
            </div>

            {/* R&D Lab */}
            <div className="relative rounded-lg overflow-hidden h-64 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800" 
                alt="R&D Lab"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent flex flex-col items-center justify-end pb-8">
                <FlaskConical className="w-16 h-16 mb-4 text-white" />
                <h3 className="text-2xl font-bold text-white">R&D Lab</h3>
              </div>
            </div>

            {/* Warehouse */}
            <div className="relative rounded-lg overflow-hidden h-64 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800" 
                alt="Warehouse"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent flex flex-col items-center justify-end pb-8">
                <Warehouse className="w-16 h-16 mb-4 text-white" />
                <h3 className="text-2xl font-bold text-white">Warehouse</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accreditations Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Accreditations & Quality
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {/* ISO 9001 */}
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
                <CheckCircle className="w-12 h-12 mx-auto text-blue-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">ISO 9001:2015</h3>
              <p className="text-sm text-gray-600">Quality Management Systems</p>
            </div>

            {/* ISO 14001 */}
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
                <CheckCircle className="w-12 h-12 mx-auto text-blue-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">ISO 14001:2015</h3>
              <p className="text-sm text-gray-600">Environmental Management</p>
            </div>

            {/* OHSAS 18001 */}
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
                <CheckCircle className="w-12 h-12 mx-auto text-blue-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">OHSAS 18001</h3>
              <p className="text-sm text-gray-600">Occupational Health & Safety</p>
            </div>

            {/* CE Certification */}
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
                <CheckCircle className="w-12 h-12 mx-auto text-blue-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">CE Certification</h3>
              <p className="text-sm text-gray-600">European Conformity Standards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}