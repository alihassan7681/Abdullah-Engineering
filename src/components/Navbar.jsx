import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Moon,
  Sun,
  Home,
  Briefcase,
  Users,
  Settings,
  Image,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa6";

export default function AdvancedNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activePage, setActivePage] = useState('home');
  const [isDark, setIsDark] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const pathToId = {
      '/': 'home',
      '/services': 'services',
      '/about': 'about',
      '/gallery': 'gallery',
      '/contact': 'contact',
    };
    setActivePage(pathToId[location.pathname] || 'home');
  }, [location.pathname]);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, to: '/' },
    { id: 'services', label: 'Services', icon: Briefcase, to: '/services' },
    { id: 'about', label: 'About', icon: Users, to: '/about' },
    { id: 'gallery', label: 'Gallery', icon: Image, to: '/gallery' },
    { id: 'contact', label: 'Contact', icon: Settings, to: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
  ];

  const handleWhatsApp = () => window.open('https://wa.me/923001234567', '_blank');
  const handleCall = () => (window.location.href = 'tel:+923001234567');

  const handlePageClick = (to, id) => {
    navigate(to);
    setActivePage(id);
    setIsOpen(false);
  };

  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Fixed Notification Banner */}
      <div className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-blue-900' : 'bg-blue-50'} px-4 py-3 flex items-center justify-center gap-2 text-sm shadow-lg`}>
        <span className={isDark ? 'text-blue-200' : 'text-blue-800'}>
          New Offers - Get 20% off on all services! 🎉
        </span>
      </div>

      {/* Main Navbar - Fixed */}
      <nav className={`fixed top-12 left-0 right-0 z-40 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 font-bold text-2xl bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              Abdullah Engineering.
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageClick(item.to, item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                    activePage === item.id
                      ? isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
                      : isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button onClick={handleWhatsApp} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-all">
                <FaWhatsapp size={18} />
                <span className="text-sm hidden sm:inline">WhatsApp</span>
              </button>

              <button onClick={handleCall} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all">
                <Phone size={18} />
                <span className="text-sm hidden sm:inline">Call</span>
              </button>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
            </div>
          </div>

          {isOpen && (
            <div className={`md:hidden pb-4 animate-slideDown ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
              {navItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      handlePageClick(item.to, item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center justify-between transition-all ${
                      activePage === item.id
                        ? isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
                        : isDark ? 'text-white hover:bg-gray-600' : 'text-gray-700 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon size={18} />
                      {item.label}
                    </div>
                  </button>
                </div>
              ))}

              <div className="mt-4 px-4 space-y-2">
                <button onClick={handleWhatsApp} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all">
                  <FaWhatsapp size={18} />
                  WhatsApp
                </button>
                <button onClick={handleCall} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all">
                  <Phone size={18} />
                  Call
                </button>
              </div>

              <div className="mt-4 px-4 pt-4 border-t border-gray-300">
                <p className={`text-sm font-medium mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-all ${isDark ? 'bg-gray-600 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white'}`}>
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Social Links Desktop */}
      <div className="hidden md:flex fixed right-6 top-32 flex-col gap-3 z-40">
        {socialLinks.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all shadow-lg hover:scale-110 ${
              isDark ? 'bg-gray-700 text-white hover:bg-blue-600' : 'bg-white text-gray-700 hover:bg-blue-600 hover:text-white'
            }`}
            title={social.label}
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>

      {/* Animation Styles */}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}