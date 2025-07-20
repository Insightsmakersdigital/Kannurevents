'use client'

import { useState, useEffect } from 'react'

export default function CenteredHeroWithBackground() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div 
      className="h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url(/Images/Banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/75 via-purple-900/60 to-indigo-900/75"></div>
      
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-600/30 via-transparent to-purple-600/30 animate-pulse"></div>
      </div>
      
      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-center h-full">
          
          {/* Centered Content */}
          <div className={`text-center space-y-8 lg:space-y-12 max-w-5xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Create{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Memorable
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full transform scale-x-0 animate-[scaleX_1.5s_ease-out_0.5s_forwards]"></div>
                </span>
                {' '}Events
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-light">
                From intimate gatherings to grand celebrations, we bring your vision to life with{' '}
                <span className="text-violet-300 font-medium">exceptional planning</span> and{' '}
                <span className="text-purple-300 font-medium">flawless execution</span>.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <a href="https://wa.link/i72ail">
              <button className="group relative bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/25 text-base lg:text-lg transform hover:scale-105 overflow-hidden">
                <span className="relative z-10">Start Planning</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              </a>
             
              
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 lg:gap-12 pt-8 lg:pt-12 max-w-2xl mx-auto">
              <div className="text-center group">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-sm lg:text-base text-gray-300 font-medium">Events</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  50K+
                </div>
                <div className="text-sm lg:text-base text-gray-300 font-medium">Happy Guests</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  5.0
                </div>
                <div className="text-sm lg:text-base text-gray-300 font-medium">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 lg:w-24 lg:h-24 bg-violet-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 lg:w-32 lg:h-32 bg-purple-400/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 lg:w-16 lg:h-16 bg-indigo-400/20 rounded-lg rotate-12 blur-lg"></div>
    </div>
  )
}