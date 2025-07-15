import React, { useState, useEffect, useRef } from 'react';

export default function WhyChooseUs() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  // Optimized intersection observer for smooth scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              setIsHeaderVisible(true);
            } else {
              const cardIndex = cardRefs.current.indexOf(entry.target);
              if (cardIndex !== -1) {
                setVisibleCards(prev => new Set([...prev, cardIndex]));
              }
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe header
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Observe cards
    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Lightweight features data
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
        </svg>
      ),
      title: "Experience and Expertise",
      description: "We have been event organizers since 2005 and have worked extensively with companies from different industries.",
      color: "indigo"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>
      ),
      title: "Vendor Network",
      description: "We have a vast event vendor network who we work with to plan events for our clients in India, Middle East and South East Asia.",
      color: "purple"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Cost Effective",
      description: "Our event services are cost effective and impact-full, we work with you to plan your events in sync with budgets assigned.",
      color: "blue"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Transparent",
      description: "We assure complete transparency and implement it at every step of the event planning process.",
      color: "emerald"
    }
  ];

  const colorClasses = {
    indigo: {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      hover: "hover:bg-indigo-100 hover:border-indigo-300"
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      hover: "hover:bg-purple-100 hover:border-purple-300"
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      hover: "hover:bg-blue-100 hover:border-blue-300"
    },
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      hover: "hover:bg-emerald-100 hover:border-emerald-300"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-emerald-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-block mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-indigo-300 to-transparent mb-3"></div>
              <span className="text-indigo-500 text-sm font-semibold tracking-widest uppercase">
              Why us
            </span>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-indigo-300 to-transparent mt-3"></div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent inline-block animate-gradient">
            Experience, Creativity,
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-800 via-indigo-800 to-gray-900 bg-clip-text text-transparent inline-block animate-gradient">
              and a Personal Touch.
              </span>
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mx-auto"></div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                ref={el => cardRefs.current[index] = el}
                className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-sm border transition-all duration-700 ease-out hover:shadow-lg hover:-translate-y-2 cursor-pointer ${
                  colorClasses[feature.color].border
                } ${
                  colorClasses[feature.color].hover
                } ${
                  visibleCards.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className={`w-16 h-16 ${colorClasses[feature.color].bg} rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-indigo-700 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Decorative line */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mx-auto mb-4 group-hover:w-16 transition-all duration-300"></div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed text-center group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optimized CSS */}
      <style jsx>{`
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Performance optimizations */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #f8fafc;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
        }

        /* Hardware acceleration for better performance */
        .group {
          transform: translateZ(0);
          will-change: transform;
        }

        /* Optimized backdrop blur */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
      `}</style>
    </div>
  );
}