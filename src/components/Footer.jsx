"use client";
import React, { useState } from 'react';

const Footer = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { href: '/', label: 'Home', active: true },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/rentals', label: 'Rentals' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const services = [
    { href: '/services', label: 'CATERING & FOOD SERVICES' },
    { href: '/services', label: ' ⁠ADVERTISING & PROMOTIONS' },
    { href: '/services', label: 'CLOTH & VINYL PRINTING' },
    { href: '/services', label: 'WOODEN & METAL FRAMES' },
    
  ];

  const socialLinks = [
    {
      href: 'https://www.facebook.com/share/1AgV3pzjuX/?mibextid=wwXIfr',
      label: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      href: 'https://www.instagram.com/kannur.events?igsh=c3ZkZ2Zzb241Zmhl&utm_source=qr',
      label: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info & Logo */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <a href="/" className="flex items-center mb-6 group">
                  {/* Enhanced Logo Container */}
                  <div className="relative w-20 h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/30 transition-all duration-300 group-hover:bg-white/25 group-hover:scale-110 group-hover:shadow-3xl">
                    <img 
                      src="/Images/logo.png" 
                      alt="Company Logo" 
                      className="w-14 h-14 object-contain filter brightness-0 invert drop-shadow-lg"
                    />
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-400/30 to-indigo-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Subtle ring effect */}
                    <div className="absolute inset-0 rounded-2xl ring-2 ring-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Transforming ideas into digital reality. We create innovative solutions that drive business growth and enhance user experiences.
                </p>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <nav className="space-y-2">
                {navigationLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`block text-sm transition-colors duration-200 ${
                      link.active 
                        ? 'text-white font-semibold' 
                        : 'text-gray-300 hover:text-white hover:translate-x-1 transform'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <nav className="space-y-2">
                {services.map((service) => (
                  <a
                    key={service.label}
                    href={service.href}
                    className="block text-sm text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-200"
                  >
                    {service.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div>
                    <p className="text-sm text-gray-300">
                    KANNUR EVENTS <br />
               Opp. Passport Seva Kendra,<br /> Padannapalam, Kannur- 670 014

                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <a href=" 9746 333088" className="text-sm text-gray-300 hover:text-white transition-colors">
                  9746 333088 <br /> 97440 74670
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <a href="mailto:Kannureventsknr@gmail.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Kannureventsknr@gmail.com
                  </a>
                </div>

               
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-300 mb-4 md:mb-0">
              © 2024 Insightsmarketers. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
