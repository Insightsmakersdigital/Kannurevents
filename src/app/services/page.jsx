'use client'
import React, { useState } from 'react';

const DetailedServicesPage = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Weddings & Engagements",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      subtitle: "Theme-based planning, elegant decor, and seamless coordination.",
      description: "Your special day deserves nothing but perfection. We specialize in creating magical wedding experiences that reflect your unique love story.",
      features: [
        "Complete wedding planning from concept to execution",
        "Custom theme development and design",
        "Venue selection and booking assistance",
        "Vendor coordination and management",
        "Timeline creation and event flow planning",
        "Bridal party coordination",
        "Guest management and RSVP tracking",
        "Emergency backup planning"
      ],
      gradient: "from-purple-900 to-purple-700",
      bgColor: "bg-purple-50"
    },
    {
      id: 2,
      title: "Corporate Events",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      subtitle: "Conferences, award nights, product launches, and meetups.",
      description: "Elevate your business presence with professionally managed corporate events that leave lasting impressions on clients and employees.",
      features: [
        "Executive conference planning and management",
        "Product launch event coordination",
        "Award ceremony organization",
        "Team building events and retreats",
        "Board meeting and seminar setup",
        "Networking event facilitation",
        "Brand activation and promotional events",
        "Digital integration and live streaming"
      ],
      gradient: "from-purple-800 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: 3,
      title: "Cultural & Public Events",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      subtitle: "Traditional festivals, exhibitions, and public shows.",
      description: "Celebrate culture and community with expertly organized public events that bring people together and create memorable experiences.",
      features: [
        "Traditional festival planning and execution",
        "Art and cultural exhibition management",
        "Public show and performance coordination",
        "Community event organization",
        "Religious and spiritual ceremony planning",
        "Heritage celebration events",
        "Cultural program development",
        "Crowd management and safety protocols"
      ],
      gradient: "from-purple-700 to-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      id: 4,
      title: "Private Parties",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 0v1.077c0 .907.602 1.704 1.474 1.911L17 9.5c1.38.365 2.426 1.64 2.426 3.146V15.5c0 1.38-1.12 2.5-2.5 2.5h-8.452c-1.38 0-2.5-1.12-2.5-2.5v-2.854c0-1.506 1.046-2.78 2.426-3.146L10 8.588C10.898 8.381 11.5 7.584 11.5 6.677V6a.5.5 0 011 0v2M12 8h.01" />
        </svg>
      ),
      subtitle: "Birthdays, anniversaries, housewarmings, and more.",
      description: "Make your personal celebrations unforgettable with our intimate and personalized party planning services.",
      features: [
        "Birthday party planning for all ages",
        "Anniversary celebration coordination",
        "Housewarming party organization",
        "Retirement and farewell parties",
        "Baby shower and gender reveal events",
        "Graduation celebration planning",
        "Holiday party coordination",
        "Surprise party organization"
      ],
      gradient: "from-purple-900 to-purple-700",
      bgColor: "bg-purple-50"
    },
    {
      id: 5,
      title: "Stage & Venue Decoration",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0v16l2-2 2 2 2-2 2 2 2-2 2 2V4M7 4h10M9 6h6M9 10h6M9 14h6" />
        </svg>
      ),
      subtitle: "Custom decor tailored to your event's theme and tone.",
      description: "Transform any space into a stunning venue with our creative decoration services that perfectly match your vision and theme.",
      features: [
        "Custom stage design and setup",
        "Themed decoration planning",
        "Floral arrangements and installations",
        "Lighting design and ambiance creation",
        "Backdrop and photo booth setup",
        "Table settings and centerpieces",
        "Entrance and pathway decoration",
        "Seasonal and holiday decorations"
      ],
      gradient: "from-purple-800 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: 6,
      title: "Sound, Light & Technical Setup",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ),
      subtitle: "DJ, LED screens, lighting systems, and AV arrangements.",
      description: "Ensure flawless audio-visual experiences with our comprehensive technical setup and professional equipment management.",
      features: [
        "Professional DJ and music services",
        "LED screen rental and setup",
        "Advanced lighting system design",
        "Audio equipment and sound engineering",
        "Microphone and PA system setup",
        "Video projection and streaming",
        "Special effects and pyrotechnics",
        "Technical crew and support staff"
      ],
      gradient: "from-purple-700 to-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      id: 7,
      title: "Catering & Hospitality",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 0v1.077c0 .907.602 1.704 1.474 1.911L17 9.5c1.38.365 2.426 1.64 2.426 3.146V15.5c0 1.38-1.12 2.5-2.5 2.5h-8.452c-1.38 0-2.5-1.12-2.5-2.5v-2.854c0-1.506 1.046-2.78 2.426-3.146L10 8.588C10.898 8.381 11.5 7.584 11.5 6.677V6a.5.5 0 011 0v2M12 8h.01" />
        </svg>
      ),
      subtitle: "Diverse cuisine options and guest services.",
      description: "Delight your guests with exceptional catering services featuring diverse cuisine options and professional hospitality management.",
      features: [
        "Multi-cuisine menu planning",
        "Customized dietary accommodations",
        "Professional catering staff",
        "Buffet and plated service options",
        "Beverage and bar services",
        "Guest reception and hospitality",
        "Food presentation and styling",
        "Kitchen setup and management"
      ],
      gradient: "from-purple-900 to-purple-700",
      bgColor: "bg-purple-50"
    },
    {
      id: 8,
      title: "Photography & Videography",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      subtitle: "Capturing every moment with creative and professional coverage.",
      description: "Preserve your precious memories with our professional photography and videography services that capture every emotion and detail.",
      features: [
        "Professional event photography",
        "Cinematic videography and editing",
        "Drone photography and aerial shots",
        "Live streaming and broadcast",
        "Photo booth setup and management",
        "Same-day highlight reels",
        "Professional photo editing",
        "Digital gallery and sharing platforms"
      ],
      gradient: "from-purple-800 to-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-50">
      {/* Header Section */}
      <div className="text-white py-20 pt-32" style={{ background: `linear-gradient(135deg, #1B0034 0%, #2D1B3D 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Comprehensive Services
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            We manage every detail, so you don't have to.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${service.bgColor} border border-purple-200 hover:border-purple-300`}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              {/* Service Header */}
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} text-white mr-4`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#1B0034' }}>
                      {service.title}
                    </h3>
                    <p className="text-purple-700 text-sm">
                      {service.subtitle}
                    </p>
                  </div>
                  <div className="ml-4">
                    <svg 
                      className={`w-6 h-6 transition-transform duration-300 ${activeService === service.id ? 'rotate-180' : ''}`} 
                      style={{ color: '#1B0034' }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-purple-800 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Expandable Features Section */}
              <div className={`overflow-hidden transition-all duration-500 ${activeService === service.id ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-8 pb-8">
                  <div className="border-t border-purple-200 pt-6">
                    <h4 className="text-lg font-semibold mb-4" style={{ color: '#1B0034' }}>What We Offer:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                          <span className="text-purple-800 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-white py-16" style={{ background: `linear-gradient(135deg, #1B0034 0%, #2D1B3D 100%)` }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Create Your Perfect Event?
          </h2>
          <p className="text-xl text-purple-300 mb-8">
            Let our experienced team handle every detail while you focus on enjoying your special moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.link/i72ail">
            <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Now
            </button>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default DetailedServicesPage;