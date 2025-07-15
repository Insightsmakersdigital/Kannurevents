"use client"

import React from 'react';

const VendorCategories = () => {
  const categories = [
    { 
      name: 'Beauty', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3c-1.2 0-2.4.6-3 1.7C8.4 5.9 8 7.4 8 9c0 2.8 1.8 5 4 5s4-2.2 4-5c0-1.6-.4-3.1-1-4.3C14.4 3.6 13.2 3 12 3z"/>
          <path d="M8 14c0 2.2 1.8 4 4 4s4-1.8 4-4"/>
          <circle cx="12" cy="12" r="1"/>
        </svg>
      )
    },
    { 
      name: 'Salon', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 18L18 6l-12 12"/>
          <path d="M6 6h.01"/>
          <path d="M18 18h.01"/>
          <path d="M20 4L4 20"/>
        </svg>
      )
    },
    { 
      name: 'Catering', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3"/>
          <path d="M12 4H4a1 1 0 0 0-1 1v4h18V5a1 1 0 0 0-1-1h-8"/>
          <path d="M12 4v11"/>
          <circle cx="12" cy="18" r="2"/>
        </svg>
      )
    },
    { 
      name: 'Transportation', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
          <path d="M15 18H9"/>
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
          <circle cx="17" cy="18" r="2"/>
          <circle cx="7" cy="18" r="2"/>
        </svg>
      )
    },
    { 
      name: 'Florist', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 1 4.5 4.5m0-4.5a4.5 4.5 0 1 1 4.5-4.5M12 12v6.5"/>
          <circle cx="12" cy="12" r="1"/>
        </svg>
      )
    },
    { 
      name: 'Officiants', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    { 
      name: 'Rentals', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      )
    },
    { 
      name: 'Venues', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
          <path d="M6 12H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"/>
          <path d="M18 9h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2"/>
          <path d="M10 6h4"/>
          <path d="M10 10h4"/>
          <path d="M10 14h4"/>
          <path d="M10 18h4"/>
        </svg>
      )
    },
    { 
      name: 'Photography', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
          <circle cx="12" cy="13" r="3"/>
        </svg>
      )
    },
    { 
      name: 'Jewelry', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 3h12l4 6-10 13L2 9l4-6z"/>
          <path d="M11 3L8 9l4 13 4-13-3-6"/>
          <path d="M2 9h20"/>
        </svg>
      )
    },
    { 
      name: 'Cake', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
          <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/>
          <path d="M2 21h20"/>
          <path d="M7 8v3"/>
          <path d="M12 8v3"/>
          <path d="M17 8v3"/>
        </svg>
      )
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-indigo-300 to-transparent mb-4"></div>
            <span className="text-indigo-500 text-sm font-semibold tracking-widest uppercase">
              Vendors
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-indigo-300 to-transparent mt-4"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent inline-block animate-gradient">
          Crafting Excellence with 
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-800 via-indigo-800 to-gray-900 bg-clip-text text-transparent inline-block animate-gradient">
              Our Trusted Partners
              </span>
          </h1>
        </div>

        {/* Categories Grid - Top Row */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-12">
          {categories.slice(0, 6).map((category) => (
            <div key={category.name} className="group text-center">
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-indigo-100">
                  <div className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700 transition-colors">
                    {category.icon}
                  </div>
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-gray-700 font-medium text-base group-hover:text-indigo-700 transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Categories Grid - Bottom Row */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {categories.slice(6).map((category) => (
            <div key={category.name} className="group text-center">
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-indigo-100">
                  <div className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700 transition-colors">
                    {category.icon}
                  </div>
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-gray-700 font-medium text-base group-hover:text-indigo-700 transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-indigo-100">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
            <span className="text-indigo-600 text-sm font-medium">
              Discover premium vendors for your special day
            </span>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorCategories;