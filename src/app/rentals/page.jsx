'use client'
import React, { useState, useEffect, useRef } from 'react';

const RentalProductPage = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [loading, setLoading] = useState(false);
  const [imageErrors, setImageErrors] = useState(new Set());
  const observerRef = useRef(null);

  const products = [
    { id: 1, image: '/rentals/1.jpg' },
    { id: 2, image: '/rentals/2.jpg' },
    { id: 3, image: '/rentals/3.jpg' },
    { id: 4, image: '/rentals/4.jpg' },
    { id: 5, image: '/rentals/5.jpg' },
    { id: 6, image: '/rentals/6.jpg' },
    { id: 7, image: '/rentals/7.jpg' },
    { id: 8, image: '/rentals/8.jpg' },
    { id: 9, image: '/rentals/9.jpg' },
    { id: 10, image: '/rentals/10.jpg' },
    { id: 11, image: '/rentals/11.jpg' },
    { id: 12, image: '/rentals/12.jpg' },
    { id: 13, image: '/rentals/13.JPG' },
    { id: 14, image: '/rentals/14.JPG' },
    { id: 15, image: '/rentals/15.JPG' },
    { id: 16, image: '/rentals/16.JPG' },
    { id: 17, image: '/rentals/17.JPG' },
    { id: 18, image: '/rentals/18.JPG' },
    { id: 19, image: '/rentals/19.JPG' },
    { id: 20, image: '/rentals/20.png' },
    { id: 21, image: '/rentals/21.png' },
    { id: 22, image: '/rentals/22.PNG' },
    { id: 23, image: '/rentals/23.PNG' },
    { id: 24, image: '/rentals/24.PNG' },
    { id: 25, image: '/rentals/25.PNG' },
    { id: 26, image: '/rentals/26.PNG' },
    { id: 27, image: '/rentals/27.PNG' },
    { id: 28, image: '/rentals/28.PNG' },
    { id: 29, image: '/rentals/29.PNG' },
    { id: 30, image: '/rentals/30.PNG' },
    { id: 31, image: '/rentals/31.PNG' },
    { id: 32, image: '/rentals/32.PNG' },
    { id: 33, image: '/rentals/33.PNG' },
    { id: 34, image: '/rentals/34.PNG' },
    { id: 35, image: '/rentals/35.PNG' },
    { id: 36, image: '/rentals/36.PNG' },
    { id: 37, image: '/rentals/37.PNG' },
    { id: 38, image: '/rentals/38.PNG' },
    { id: 39, image: '/rentals/39.PNG' },
    { id: 40, image: '/rentals/40.PNG' },
    { id: 41, image: '/rentals/41.PNG' },
    { id: 42, image: '/rentals/42.PNG' },
    { id: 43, image: '/rentals/43.PNG' },
    { id: 44, image: '/rentals/44.PNG' },
    { id: 45, image: '/rentals/45.PNG' },
    { id: 46, image: '/rentals/46.PNG' },
    { id: 47, image: '/rentals/47.PNG' },
    { id: 48, image: '/rentals/48.PNG' },
    { id: 49, image: '/rentals/49.PNG' },
    { id: 50, image: '/rentals/50.PNG' },
    { id: 51, image: '/rentals/51.PNG' },
    { id: 52, image: '/rentals/52.PNG' },
    { id: 53, image: '/rentals/53.PNG' },
    { id: 54, image: '/rentals/54.PNG' },
    { id: 55, image: '/rentals/55.PNG' },
    { id: 56, image: '/rentals/56.PNG' },
  ];

  // Load more products when user scrolls near bottom
  const loadMoreProducts = () => {
    if (loading || visibleProducts >= products.length) return;
    
    setLoading(true);
    setTimeout(() => {
      setVisibleProducts(prev => Math.min(prev + 8, products.length));
      setLoading(false);
    }, 300);
  };

  // Set up intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreProducts();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loading, visibleProducts]);

  const handleImageError = (productId) => {
    setImageErrors(prev => new Set([...prev, productId]));
    console.log(`Image failed to load for product ${productId}: ${products.find(p => p.id === productId)?.image}`);
  };

  const handleRental = (productId) => {
    const message = encodeURIComponent(`Hi! I'm interested in renting product ID: ${productId}`);
    const whatsappUrl = `https://wa.link/i72ail?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Add fallback image sources for better compatibility
  const getImageSources = (product) => {
    const basePath = product.image.split('.')[0];
    const originalExt = product.image.split('.').pop();
    
    // Try different case combinations
    return [
      product.image, // Original
      `${basePath}.${originalExt.toUpperCase()}`, // Uppercase extension
      `${basePath}.${originalExt.toLowerCase()}`, // Lowercase extension
      `${basePath}.jpg`,
      `${basePath}.JPG`,
      `${basePath}.png`,
      `${basePath}.PNG`,
    ].filter((src, index, arr) => arr.indexOf(src) === index); // Remove duplicates
  };

  // Optimized Image Component with fallback sources
  const OptimizedImage = ({ product, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageInView, setImageInView] = useState(false);
    const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
    const imgRef = useRef(null);
    const imageSources = getImageSources(product);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setImageInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    }, []);

    const hasError = imageErrors.has(product.id);

    const handleImageLoadError = () => {
      const currentSrc = imageSources[currentSrcIndex];
      console.log(`Failed to load: ${currentSrc} for product ${product.id}`);
      
      // Try next image source
      if (currentSrcIndex < imageSources.length - 1) {
        setCurrentSrcIndex(prev => prev + 1);
        console.log(`Trying next source: ${imageSources[currentSrcIndex + 1]} for product ${product.id}`);
      } else {
        // All sources failed
        console.log(`All sources failed for product ${product.id}. Tried:`, imageSources);
        handleImageError(product.id);
      }
    };

    const currentImageSrc = imageSources[currentSrcIndex];

    return (
      <div
        ref={imgRef}
        className="relative overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-100"
      >
        {/* Loading skeleton - show only when image hasn't loaded and no error */}
        {!imageLoaded && !hasError && imageInView && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-purple-300 border-t-purple-600 rounded-full animate-spin mx-auto mb-2"></div>
                <p className="text-xs text-gray-500">Loading...</p>
              </div>
            </div>
          </div>
        )}

        {/* Error fallback with retry option */}
        {hasError && (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-purple-600 font-medium mb-2">Product #{product.id}</p>
              <p className="text-xs text-gray-500 mb-3">Image not available</p>
              {attempts < 3 && (
                <button
                  onClick={() => retryImage(product.id)}
                  className="text-xs bg-purple-500 text-white px-3 py-1 rounded-full hover:bg-purple-600 transition-colors"
                >
                  Retry ({attempts}/3)
                </button>
              )}
            </div>
          </div>
        )}

        {/* Actual image with fallback sources */}
        {imageInView && !hasError && (
          <img
            src={currentImageSrc}
            alt={`Product ${product.id}`}
            className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => {
              setImageLoaded(true);
              console.log(`Successfully loaded: ${currentImageSrc} for product ${product.id}`);
            }}
            onError={handleImageLoadError}
          />
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-400"></div>

        {/* Rental Button */}
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 flex justify-center">
          <button
            onClick={() => handleRental(product.id)}
            className="relative overflow-hidden px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-white font-semibold rounded-md sm:rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-400 ease-out group/btn backdrop-blur-sm text-xs sm:text-sm"
            style={{ backgroundColor: 'rgba(27, 0, 52, 0.9)' }}
          >
            <span className="relative z-10 transition-all duration-300">
              Rent Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-400 ease-out"></div>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-16 sm:mt-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Premium Event Rentals
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Transform your events with our premium rental collection
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Showing {visibleProducts} of {products.length} products
          </div>
          

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {products.slice(0, visibleProducts).map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ease-out group transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <OptimizedImage product={product} index={index} />
            </div>
          ))}
        </div>

        {/* Loading indicator */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            <span className="ml-4 text-gray-600">Loading more products...</span>
          </div>
        )}

        {/* Load more trigger */}
        {visibleProducts < products.length && (
          <div ref={observerRef} className="h-20 flex items-center justify-center">
            <div className="text-gray-400">Scroll for more products</div>
          </div>
        )}

        {/* All loaded message */}
        {visibleProducts >= products.length && (
          <div className="text-center py-12">
            <div className="text-gray-500">You've seen all our products!</div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              Back to Top
            </button>
          </div>
        )}
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        * {
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #ec4899);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #db2777);
        }
      `}</style>
    </div>
  );
};

export default RentalProductPage;