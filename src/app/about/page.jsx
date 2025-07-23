"use client"
import React, { useState, useEffect } from 'react';

const AboutUsSection = () => {
  const [counters, setCounters] = useState({
    events: 0,
    clients: 0,
    weddings: 0,
    corporate: 0,
    employees: 0
  });

  const finalCounts = {
    events: 1000,
    clients: 600,
    weddings: 250,
    corporate: 230,
    employees: 80
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep <= steps) {
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCounters({
          events: Math.floor(finalCounts.events * easeOutQuart),
          clients: Math.floor(finalCounts.clients * easeOutQuart),
          weddings: Math.floor(finalCounts.weddings * easeOutQuart),
          corporate: Math.floor(finalCounts.corporate * easeOutQuart),
          employees: Math.floor(finalCounts.employees * easeOutQuart)
        });
        
        currentStep++;
      } else {
        clearInterval(timer);
        setCounters(finalCounts);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Premium Event Planning",
      description: "We specialize in creating extraordinary experiences that exceed expectations. From intimate gatherings to grand celebrations, every detail is meticulously planned."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Expert Team",
      description: "Our passionate team of event professionals brings years of experience and creativity to every project. We're dedicated to making your vision a reality."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>
          <polyline points="7.5,19.79 7.5,14.6 3,12"/>
          <polyline points="21,12 16.5,14.6 16.5,19.79"/>
        </svg>
      ),
      title: "Full-Service Solutions",
      description: "From concept to cleanup, we handle every aspect of your event. Our comprehensive services ensure a seamless experience from start to finish."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: "Innovation & Creativity",
      description: "We stay ahead of trends and embrace new technologies to create unique, memorable experiences that reflect your personality and style."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-18">
        {/* Header */}
        <div className="text-center mb-16 ">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-16"></div>
            <span className="mx-4 text-purple-400 font-medium text-sm tracking-wider uppercase">
              About Us
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-16"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            "Where Creativity Meets{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Professionalism
            </span>
            ."
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            For over a decade, we've been transforming dreams into unforgettable experiences. 
            Our passion for perfection and attention to detail has made us the trusted choice 
            for life's most important celebrations.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-600">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {counters.events}+
            </div>
            <div className="text-gray-600 font-medium">Events Done</div>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-600">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {counters.clients}+
            </div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-600">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6"/>
                <path d="M21 12h-6m-6 0H3"/>
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {counters.weddings}+
            </div>
            <div className="text-gray-600 font-medium">Wedding Events Done</div>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-600">
                <path d="M3 21h18"/>
                <path d="M5 21V7l8-4v18"/>
                <path d="M19 21V11l-6-4"/>
                <path d="M9 9v.01"/>
                <path d="M9 12v.01"/>
                <path d="M9 15v.01"/>
                <path d="M9 18v.01"/>
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {counters.corporate}+
            </div>
            <div className="text-gray-600 font-medium">Corporate Events Done</div>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-600">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                <path d="M12 2l1.09 3.26L18 5.27l-2.5 2.43L16.18 12 12 9.77 7.82 12l.68-4.3L6 5.27l4.91-.01L12 2z"/>
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {counters.employees}
            </div>
            <div className="text-gray-600 font-medium">Happy Employees</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
              About Us – Kannur Events

Established in 2024, Kannur Events is backed by 15 years of rich experience in the event management industry. Though newly founded, our legacy is built on years of dedication, creativity, and hands-on expertise in organizing events of all scales.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
              At Kannur Events, we offer comprehensive event solutions—from planning and coordination to execution. In addition to our core services, we provide a wide range of rental products essential for events, ensuring that every detail meets the highest standards of quality and aesthetics.

We are also the proud creators of D-Hub, a sub-brand that brings fresh, innovative, and trend-forward ideas to life—helping transform ordinary events into extraordinary experiences.

Whether it’s a personal celebration or a corporate function, Kannur Events is your trusted partner for creating memorable and seamless events, driven by professionalism and passion.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.51 0 2.93.37 4.18 1.02"/>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Committed to Excellence Since 2024</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden">
                <img
                  src="/Images/image.jpg"
                  alt="Our team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        
        {/* Values Section */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Excellence</h4>
              <p className="text-gray-600">We strive for perfection in every detail, ensuring your event exceeds expectations.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Passion</h4>
              <p className="text-gray-600">We love what we do, and it shows in the enthusiasm we bring to every project.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Partnership</h4>
              <p className="text-gray-600">We work closely with our clients, building relationships that last beyond the event.</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUsSection;