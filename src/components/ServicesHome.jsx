import React from 'react';

const EventManagementServices = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          {/* Building/Office */}
          <rect x="12" y="16" width="40" height="40" rx="2" fill="currentColor" fillOpacity="0.1"/>
          <rect x="12" y="16" width="40" height="40" rx="2" stroke="currentColor" strokeWidth="2"/>
          
          {/* Windows */}
          <rect x="18" y="22" width="6" height="6" fill="currentColor" fillOpacity="0.3"/>
          <rect x="28" y="22" width="6" height="6" fill="currentColor" fillOpacity="0.3"/>
          <rect x="38" y="22" width="6" height="6" fill="currentColor" fillOpacity="0.3"/>
          
          <rect x="18" y="32" width="6" height="6" fill="currentColor" fillOpacity="0.3"/>
          <rect x="28" y="32" width="6" height="6" fill="currentColor" fillOpacity="0.3"/>
          <rect x="38" y="32" width="6" height="6" fill="currentColor" fillOpacity="0.3"/>
          
          {/* Door */}
          <rect x="26" y="42" width="12" height="14" fill="currentColor" fillOpacity="0.2"/>
          <circle cx="35" cy="48" r="1" fill="currentColor"/>
          
          {/* Presentation screen */}
          <rect x="20" y="6" width="24" height="14" rx="1" fill="currentColor" fillOpacity="0.1"/>
          <rect x="20" y="6" width="24" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="24" y1="10" x2="36" y2="10" stroke="currentColor" strokeWidth="1"/>
          <line x1="24" y1="13" x2="32" y2="13" stroke="currentColor" strokeWidth="1"/>
          <line x1="24" y1="16" x2="40" y2="16" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: "Corporate Events",
      description: "Professional conferences, seminars, and corporate gatherings tailored to your business needs and objectives.",
      color: "blue"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          {/* Wedding rings */}
          <circle cx="20" cy="24" r="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
          <circle cx="36" cy="24" r="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
          
          {/* Diamond on ring */}
          <path d="M20 16 L22 18 L20 20 L18 18 Z" fill="currentColor"/>
          
          {/* Hearts */}
          <path d="M18 42 C18 39, 22 39, 22 42 C22 39, 26 39, 26 42 C26 45, 22 50, 22 50 C22 50, 18 45, 18 42 Z" fill="currentColor" fillOpacity="0.2"/>
          <path d="M30 46 C30 44, 33 44, 33 46 C33 44, 36 44, 36 46 C36 48, 33 52, 33 52 C33 52, 30 48, 30 46 Z" fill="currentColor" fillOpacity="0.2"/>
          
          {/* Flowers */}
          <circle cx="48" cy="16" r="2" fill="currentColor" fillOpacity="0.3"/>
          <circle cx="52" cy="14" r="1.5" fill="currentColor" fillOpacity="0.3"/>
          <circle cx="50" cy="18" r="1.5" fill="currentColor" fillOpacity="0.3"/>
          <circle cx="46" cy="18" r="1.5" fill="currentColor" fillOpacity="0.3"/>
          <circle cx="50" cy="12" r="1.5" fill="currentColor" fillOpacity="0.3"/>
          
          <line x1="48" y1="20" x2="48" y2="26" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Wedding Planning",
      description: "Create unforgettable wedding experiences with our comprehensive planning and coordination services.",
      color: "rose"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          {/* Stage */}
          <rect x="8" y="40" width="48" height="16" rx="2" fill="currentColor" fillOpacity="0.1"/>
          <rect x="8" y="40" width="48" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
          
          {/* Microphone */}
          <circle cx="32" cy="32" r="4" fill="currentColor" fillOpacity="0.2"/>
          <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="2"/>
          <line x1="32" y1="36" x2="32" y2="44" stroke="currentColor" strokeWidth="2"/>
          <line x1="28" y1="44" x2="36" y2="44" stroke="currentColor" strokeWidth="2"/>
          
          {/* Sound waves */}
          <path d="M40 28 Q44 32 40 36" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M44 24 Q50 32 44 40" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M24 28 Q20 32 24 36" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M20 24 Q14 32 20 40" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          
          {/* Spotlights */}
          <circle cx="20" cy="16" r="3" fill="currentColor" fillOpacity="0.3"/>
          <circle cx="32" cy="12" r="3" fill="currentColor" fillOpacity="0.3"/>
          <circle cx="44" cy="16" r="3" fill="currentColor" fillOpacity="0.3"/>
          
          {/* Light beams */}
          <line x1="20" y1="19" x2="20" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
          <line x1="32" y1="15" x2="32" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
          <line x1="44" y1="19" x2="44" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        </svg>
      ),
      title: "Entertainment Events",
      description: "Concerts, festivals, and live performances managed with precision and creative flair.",
      color: "amber"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          {/* Camera body */}
          <rect x="12" y="20" width="40" height="28" rx="4" fill="currentColor" fillOpacity="0.1"/>
          <rect x="12" y="20" width="40" height="28" rx="4" stroke="currentColor" strokeWidth="2"/>
          
          {/* Lens */}
          <circle cx="32" cy="34" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="32" cy="34" r="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
          <circle cx="32" cy="34" r="2" fill="currentColor" fillOpacity="0.3"/>
          
          {/* Camera top */}
          <rect x="20" y="16" width="24" height="4" rx="2" fill="currentColor" fillOpacity="0.2"/>
          
          {/* Viewfinder */}
          <rect x="28" y="12" width="8" height="4" rx="1" fill="currentColor" fillOpacity="0.2"/>
          
          {/* Flash */}
          <circle cx="42" cy="25" r="2" fill="currentColor" fillOpacity="0.3"/>
          
          {/* Buttons */}
          <circle cx="20" cy="25" r="1.5" fill="currentColor" fillOpacity="0.4"/>
          <circle cx="24" cy="25" r="1" fill="currentColor" fillOpacity="0.4"/>
          
          {/* Photo frames */}
          <rect x="8" y="8" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
          <rect x="44" y="8" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
          <rect x="8" y="50" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
          
          {/* Sparkles */}
          <path d="M48 52 L50 54 L48 56 L46 54 Z" fill="currentColor" fillOpacity="0.4"/>
          <path d="M52 48 L53 49 L52 50 L51 49 Z" fill="currentColor" fillOpacity="0.4"/>
        </svg>
      ),
      title: "Photography Services",
      description: "Professional event photography and videography to capture every precious moment beautifully.",
      color: "emerald"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          {/* Cloche/serving dome */}
          <path d="M16 32 Q16 18 32 18 Q48 18 48 32 L48 36 L16 36 Z" fill="currentColor" fillOpacity="0.1"/>
          <path d="M16 32 Q16 18 32 18 Q48 18 48 32 L48 36 L16 36 Z" stroke="currentColor" strokeWidth="2"/>
          
          {/* Plate */}
          <ellipse cx="32" cy="36" rx="20" ry="4" fill="currentColor" fillOpacity="0.2"/>
          <ellipse cx="32" cy="36" rx="20" ry="4" stroke="currentColor" strokeWidth="2"/>
          
          {/* Handle */}
          <circle cx="32" cy="18" r="2" fill="currentColor" fillOpacity="0.3"/>
          
          {/* Wine glass */}
          <path d="M44 46 L44 50 Q44 52 46 52 Q48 52 48 50 L48 46 Q48 44 46 44 Q44 44 44 46 Z" fill="currentColor" fillOpacity="0.2"/>
          <line x1="46" y1="52" x2="46" y2="56" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="42" y1="56" x2="50" y2="56" stroke="currentColor" strokeWidth="1.5"/>
          
          {/* Utensils */}
          <line x1="18" y1="46" x2="18" y2="56" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="46" x2="20" y2="46" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="16" y1="48" x2="20" y2="48" stroke="currentColor" strokeWidth="1"/>
          <line x1="16" y1="50" x2="20" y2="50" stroke="currentColor" strokeWidth="1"/>
          
          <line x1="24" y1="46" x2="24" y2="56" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 46 Q24 44 26 46" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          
          {/* Chef hat */}
          <path d="M10 12 Q10 8 14 8 Q16 6 20 8 Q24 6 28 8 Q32 8 32 12 L32 16 L10 16 Z" fill="currentColor" fillOpacity="0.1"/>
          <path d="M10 12 Q10 8 14 8 Q16 6 20 8 Q24 6 28 8 Q32 8 32 12 L32 16 L10 16 Z" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="10" y="16" width="22" height="4" rx="1" fill="currentColor" fillOpacity="0.2"/>
        </svg>
      ),
      title: "Catering Management",
      description: "Exquisite catering solutions with diverse menu options to satisfy every palate and dietary requirement.",
      color: "violet"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          {/* Birthday cake */}
          <rect x="16" y="32" width="32" height="20" rx="2" fill="currentColor" fillOpacity="0.1"/>
          <rect x="16" y="32" width="32" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          
          {/* Cake layers */}
          <rect x="20" y="28" width="24" height="4" rx="1" fill="currentColor" fillOpacity="0.2"/>
          <rect x="18" y="36" width="28" height="2" fill="currentColor" fillOpacity="0.2"/>
          <rect x="18" y="44" width="28" height="2" fill="currentColor" fillOpacity="0.2"/>
          
          {/* Candles */}
          <line x1="24" y1="28" x2="24" y2="20" stroke="currentColor" strokeWidth="2"/>
          <line x1="32" y1="28" x2="32" y2="18" stroke="currentColor" strokeWidth="2"/>
          <line x1="40" y1="28" x2="40" y2="22" stroke="currentColor" strokeWidth="2"/>
          
          {/* Flames */}
          <ellipse cx="24" cy="19" rx="1.5" ry="2" fill="currentColor" fillOpacity="0.6"/>
          <ellipse cx="32" cy="17" rx="1.5" ry="2" fill="currentColor" fillOpacity="0.6"/>
          <ellipse cx="40" cy="21" rx="1.5" ry="2" fill="currentColor" fillOpacity="0.6"/>
          
          {/* Balloons */}
          <circle cx="52" cy="16" r="4" fill="currentColor" fillOpacity="0.3"/>
          <circle cx="56" cy="12" r="3" fill="currentColor" fillOpacity="0.3"/>
          <circle cx="48" cy="12" r="3" fill="currentColor" fillOpacity="0.3"/>
          
          {/* Balloon strings */}
          <line x1="52" y1="20" x2="52" y2="32" stroke="currentColor" strokeWidth="1"/>
          <line x1="56" y1="15" x2="56" y2="28" stroke="currentColor" strokeWidth="1"/>
          <line x1="48" y1="15" x2="48" y2="28" stroke="currentColor" strokeWidth="1"/>
          
          {/* Confetti */}
          <rect x="8" y="8" width="2" height="2" fill="currentColor" fillOpacity="0.5" rx="0.5"/>
          <rect x="12" y="12" width="2" height="2" fill="currentColor" fillOpacity="0.5" rx="0.5"/>
          <rect x="10" y="16" width="2" height="2" fill="currentColor" fillOpacity="0.5" rx="0.5"/>
          <rect x="14" y="6" width="2" height="2" fill="currentColor" fillOpacity="0.5" rx="0.5"/>
          
          {/* Gift box */}
          <rect x="6" y="44" width="12" height="12" rx="1" fill="currentColor" fillOpacity="0.1"/>
          <rect x="6" y="44" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="12" y1="44" x2="12" y2="56" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="6" y1="50" x2="18" y2="50" stroke="currentColor" strokeWidth="1.5"/>
          
          {/* Bow */}
          <path d="M10 42 Q12 40 14 42 Q12 44 10 42 Z" fill="currentColor" fillOpacity="0.3"/>
          <path d="M10 42 Q12 40 14 42 Q12 44 10 42 Z" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: "Private Celebrations",
      description: "Birthdays, anniversaries, and special occasions crafted with personal touches and attention to detail.",
      color: "cyan"
    }
  ];

  const colorVariants = {
    blue: {
      hover: "hover:bg-blue-50 hover:border-blue-200",
      icon: "text-blue-600"
    },
    rose: {
      hover: "hover:bg-rose-50 hover:border-rose-200",
      icon: "text-rose-600"
    },
    amber: {
      hover: "hover:bg-amber-50 hover:border-amber-200",
      icon: "text-amber-600"
    },
    emerald: {
      hover: "hover:bg-emerald-50 hover:border-emerald-200",
      icon: "text-emerald-600"
    },
    violet: {
      hover: "hover:bg-violet-50 hover:border-violet-200",
      icon: "text-violet-600"
    },
    cyan: {
      hover: "hover:bg-cyan-50 hover:border-cyan-200",
      icon: "text-cyan-600"
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
        <div className="inline-block mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-indigo-300 to-transparent mb-4"></div>
            <span className="text-indigo-500 text-sm font-semibold tracking-widest uppercase">
              Services
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-indigo-300 to-transparent mt-4"></div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent inline-block animate-gradient">
              Event Management Solutions 
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-800 via-indigo-800 to-gray-900 bg-clip-text text-transparent inline-block animate-gradient">
              Tailored To Your Needs
              </span>
            </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`
                bg-white rounded-xl p-6 shadow-sm border border-gray-200
                transform transition-all duration-300 ease-out
                hover:shadow-md hover:-translate-y-1 ${colorVariants[service.color].hover}
                cursor-pointer
              `}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full bg-gray-50 ${colorVariants[service.color].icon} w-16 h-16 flex items-center justify-center`}>
                  <div className="w-8 h-8">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a href="/services">
          <button className="
            bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold
            transition-all duration-300 ease-out
            hover:bg-violet-700 hover:shadow-lg
          ">
            View All Services
          </button>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default EventManagementServices;