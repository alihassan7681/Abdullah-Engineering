import React from 'react'
import { Link } from 'react-router-dom'
import { Wrench, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-lg">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Abdullah Engineering</h4>
                <p className="text-sm text-blue-300">Precision & Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of CNC machining, fabrication, and industrial engineering solutions with over 25 years of experience.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-blue-300">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-150 transition-transform"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-150 transition-transform"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-150 transition-transform"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-150 transition-transform"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-150 transition-transform"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-blue-300">Our Services</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">CNC Machining</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Metal Fabrication</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Laser Cutting</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Welding Services</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Custom Manufacturing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-blue-300">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Industrial Area, Faisalabad, Punjab, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+923000000000" className="hover:text-blue-400 transition-colors">
                  +92 300 0000000
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@abdullahengineering.com" className="hover:text-blue-400 transition-colors">
                  info@abdullahengineering.com
                </a>
              </li>
            </ul>

            {/* Working Hours */}
            {/* <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-sm font-semibold text-blue-300 mb-1">Working Hours</p>
              <p className="text-xs text-gray-300">Mon - Sat: 9:00 AM - 6:00 PM</p>
              <p className="text-xs text-gray-300">Sunday: Closed</p>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Abdullah Engineering. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-blue-400 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 