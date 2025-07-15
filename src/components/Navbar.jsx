"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/rentals', label: 'Rentals' },
  ];

  const HamburgerIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between px-6 py-3 rounded-2xl shadow-lg transition-all duration-300
          bg-purple-800 `}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/Images/logo.png"
              alt="Kannur Events Logo"
              width={90}
              height={90}
              className="group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white font-medium px-4 py-2 rounded-full transition-all hover:bg-white/20"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.link/i72ail"
              className="ml-4 px-5 py-2 bg-white text-pink-600 font-semibold rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/20 rounded-lg transition"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl shadow-lg px-4 py-4 space-y-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-white font-medium px-4 py-2 rounded-lg hover:bg-white/20 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.link/i72ail"
              className="block w-full text-center bg-white text-pink-600 font-semibold rounded-lg px-4 py-3 mt-2 hover:scale-105 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
