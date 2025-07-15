"use client";
import React, { useState, useEffect } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative py-20 px-4 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-indigo-300 to-transparent mb-4"></div>
            <span className="text-indigo-500 text-sm font-semibold tracking-widest uppercase">
              About us
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-indigo-300 to-transparent mt-4"></div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent inline-block animate-gradient">
              Where Creativity Meets
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-800 via-indigo-800 to-gray-900 bg-clip-text text-transparent inline-block animate-gradient">
              Professionalism
            </span>
          </h1>

          <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mx-auto mb-8"></div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2010 with a simple mission: to create extraordinary
                experiences that bring people together. What started as a small
                team of passionate event enthusiasts has grown into a
                full-service event company trusted by hundreds of clients across
                the region.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe that every event is an opportunity to create lasting
                memories. Whether it's a intimate wedding, a corporate
                milestone, or a grand celebration, we approach each project with
                the same dedication to excellence and attention to detail.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.51 0 2.93.37 4.18 1.02" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  Committed to Excellence Since 2010
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden">
                <img
                  src="/Images/image.png"
                  alt="Our team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-white/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative h-full">
              {/* Simple gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 to-blue-50/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <svg
                    className="w-7 h-7 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-indigo-700 transition-colors duration-300">
                  Our Mission
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mb-6 hover:w-16 transition-all duration-300"></div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Our mission at Kannur Events is to deliver mea-ningful,
                  memorable, and perfectly executed events for our clients. We
                  aim to exceed expectations by combining creativity, meticulous
                  plan-ning, and a commitment to excellence-so you can enjoy
                  your celebration while we handle the rest.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-white/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative h-full">
              {/* Simple gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-pink-50/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <svg
                    className="w-7 h-7 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-purple-700 transition-colors duration-300">
                  Our Vision
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-6 hover:w-16 transition-all duration-300"></div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  To become Kannur's most trusted and innovative event
                  management company, known for bringing people together through
                  unique experien-ces. We envision a future where every event we
                  craft sets new standards for creativity, professio-nalism, and
                  emotional connection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors duration-300 group cursor-pointer">
            <span className="text-sm font-semibold">
              Let's Create Something Amazing Together
            </span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Enhanced CSS */}
      <style jsx>{`
        * {
          scroll-behavior: smooth;
        }

        /* Smooth transitions for all interactive elements */
        * {
          transition-property: transform, opacity, color, background-color,
            border-color, box-shadow;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
