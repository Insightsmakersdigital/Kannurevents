
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Naveena & Arjun ",
      location: "Wedding Clients",
      content: "Kannur Events was the best decision we made for our wedding. The decor was elegant, the planning was flawless, and the team handled everything so smoothly that we could actually enjoy our big day without stress. They truly turned our ideas into reality.",
      avatar: "https://via.placeholder.com/60x60/d1d5db/6b7280?text=SM"
    },
    {
      name: "Sreelatha Rajan ", 
      location: "Birthday Event Client",
      content: "We chose Kannur Events for my daughter’s 5th birthday party, and they exceeded our expectations. The entire setup was vibrant, fun, and well-organized. They were incredibly professional, yet warm and understanding of exactly what we needed.",
      logo: "X"
    },
    {
      name: "Akhil Mohan",
      location: "Engagement Event Client", 
      content: "I had a very specific vision for our engagement, and Kannur Events nailed it. From lighting to floral arrangements, everything was on point. The team was responsive, creative, and made the whole process feel easy. Would definitely book them again.",
      avatar: "https://via.placeholder.com/60x60/d1d5db/6b7280?text=G"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Background Pattern - Exactly matching the image */}
      <div className="absolute inset-0 opacity-10">
        {/* Repeating pattern elements across the entire background */}
        {Array.from({ length: 8 }).map((_, row) => (
          Array.from({ length: 15 }).map((_, col) => (
            <div key={`${row}-${col}`} className="absolute" style={{
              top: `${row * 12.5}%`,
              left: `${col * 6.67}%`
            }}>
              {/* Globe icon */}
              <div className="w-6 h-6 border border-gray-400 rounded-full relative mb-4">
                <div className="absolute inset-1 border-l border-gray-400"></div>
                <div className="absolute inset-1 border-r border-gray-400"></div>
                <div className="absolute top-1/2 left-0 right-0 h-0 border-t border-gray-400"></div>
              </div>
              
              {/* Triangle */}
              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-400 mb-4"></div>
              
              {/* Rectangles */}
              <div className="w-6 h-3 border border-gray-400 mb-2"></div>
              <div className="w-3 h-6 border border-gray-400 mb-4"></div>
              
              {/* Celebration flags */}
              <div className="flex space-x-1 mb-4">
                <div className="w-1 h-4 border border-gray-400"></div>
                <div className="w-2 h-3 border border-gray-400 border-b-0"></div>
                <div className="w-1 h-4 border border-gray-400"></div>
                <div className="w-2 h-3 border border-gray-400 border-b-0"></div>
              </div>
              
              {/* Diamond */}
              <div className="w-4 h-4 border border-gray-400 rotate-45 mb-4"></div>
              
              {/* Curved lines */}
              <svg className="w-8 h-4 mb-4" viewBox="0 0 32 16">
                <path d="M0,8 Q8,0 16,8 T32,8" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-400"/>
              </svg>
              
              {/* Network/connection icon */}
              <div className="relative w-6 h-6 mb-4">
                <div className="absolute top-0 left-1 w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="absolute top-2 left-0 w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="absolute top-2 right-0 w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="absolute bottom-0 left-1 w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="absolute top-1 left-1 w-4 h-0 border-t border-gray-400"></div>
                <div className="absolute top-2 left-1 w-0 h-2 border-l border-gray-400"></div>
              </div>
            </div>
          ))
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-indigo-300 to-transparent mb-4"></div>
              <span className="text-indigo-500 text-sm font-semibold tracking-widest uppercase">
                Testimonials
              </span>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-indigo-300 to-transparent mt-4"></div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent inline-block animate-gradient">
                Happy Clients Are Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-800 via-indigo-800 to-gray-900 bg-clip-text text-transparent inline-block animate-gradient">
                Best Achievements
              </span>
            </h1>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative hover:shadow-lg transition-shadow duration-300"
              >
                {/* Client Info */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm font-medium">{testimonial.location}</p>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed text-sm">
                  {testimonial.content}
                </p>

                {/* Quote mark for testimonials with company logos */}
                {testimonial.logo && (
                  <div className="absolute top-4 right-6 text-6xl text-gray-200 font-serif">
                    "
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}