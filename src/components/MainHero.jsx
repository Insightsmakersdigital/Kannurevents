'use client'

import { useState } from 'react'

export default function CenteredHeroWithBackground() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div 
      className="h-screen relative"
      style={{
        backgroundImage: 'url(/Images/Banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 "></div>
      
      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-center h-full">
          
          {/* Centered Content */}
          <div className="text-center space-y-6 lg:space-y-8 max-w-4xl mt-20">
            <div className="space-y-4 lg:space-y-6">
              
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Create Memorable events
              
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                From intimate gatherings to grand celebrations, we bring your vision to life with exceptional planning and flawless execution.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:shadow-lg text-base lg:text-lg">
                Start Planning
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold hover:border-purple-400 hover:text-purple-400 hover:bg-white/10 transition-all duration-300 text-base lg:text-lg backdrop-blur-sm">
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 lg:gap-12 pt-8 lg:pt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white">500+</div>
                <div className="text-sm lg:text-base text-gray-300">Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white">50K+</div>
                <div className="text-sm lg:text-base text-gray-300">Happy Guests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white">5.0</div>
                <div className="text-sm lg:text-base text-gray-300">Rating</div>
              </div>
            </div>

           
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 lg:w-24 lg:h-24 bg-purple-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 lg:w-32 lg:h-32 bg-pink-400/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 lg:w-16 lg:h-16 bg-yellow-400/20 rounded-lg rotate-12 blur-lg"></div>
    </div>
  )
}