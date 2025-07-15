'use client'
import React from 'react';

const RentalProductPage = () => {

  const products = [
    // Furniture
    {
      id: 1,
      name: 'Elegant Chiavari Chairs',
      category: 'furniture',
      image: '/rentals/1.jpg',
      
    },
    {
      id: 2,
      name: 'Round Banquet Tables',
      category: 'furniture',
      image: '/rentals/2.jpg',
   
    },
    {
      id: 3,
      name: 'Elegant Chiavari Chairs',
      category: 'furniture',
      image: '/rentals/3.jpg',
      
    },
    {
      id: 4,
      name: 'Round Banquet Tables',
      category: 'furniture',
      image: '/rentals/4.jpg',
     
    },
   
    {
      id: 5,
      name: 'Elegant Chiavari Chairs',
      category: 'furniture',
      image: '/rentals/5.jpg',
     
    },
    {
      id: 6,
      name: 'Round Banquet Tables',
      category: 'furniture',
      image: '/rentals/6.jpg',
     
    },
    
    {
      id: 7,
      name: 'Elegant Chiavari Chairs',
      category: 'furniture',
      image: '/rentals/7.jpg',
      
    },
    {
      id: 8,
      name: 'Round Banquet Tables',
      category: 'furniture',
      image: '/rentals/8.jpg',
      
    },
    {
      id: 9,
      name: 'Elegant Chiavari Chairs',
      category: 'furniture',
      image: '/rentals/9.jpg',
     
    },
    {
      id: 10,
      name: 'Round Banquet Tables',
      category: 'furniture',
      image: '/rentals/10.jpg',
   
    },
    {
        id: 11,
        name: 'Elegant Chiavari Chairs',
        category: 'furniture',
        image: '/rentals/11.jpg',
        
      },
      {
        id: 12,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/12.jpg',
     
      },
      {
        id: 13,
        name: 'Elegant Chiavari Chairs',
        category: 'furniture',
        image: '/rentals/13.jpg',
        
      },
      {
        id: 14,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/14.jpg',
       
      },
      
      // Lighting
      {
        id: 15,
        name: 'Elegant Chiavari Chairs',
        category: 'furniture',
        image: '/rentals/15.jpg',
       
      },
      {
        id: 16,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/16.jpg',
       
      },
      
      {
        id: 17,
        name: 'Elegant Chiavari Chairs',
        category: 'furniture',
        image: '/rentals/17.jpg',
        
      },
      {
        id: 18,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/18.jpg',
        
      },
      {
        id: 19,
        name: 'Elegant Chiavari Chairs',
        category: 'furniture',
        image: '/rentals/19.jpg',
       
      },
      {
        id: 20,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/20.png',
     
      },
      {
        id: 21,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/21.png',
     
      },
      {
        id: 22,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/22.png',
     
      },
      {
        id: 23,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/23.png',
     
      },
      {
        id: 24,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/24.png',
     
      },
      {
        id: 25,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/25.png',
     
      },
      {
        id: 26,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/26.png',
     
      },
      {
        id: 27,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/27.png',
     
      },
      {
        id: 28,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/28.png',
     
      },
      {
        id: 29,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/29.png',
     
      },
      {
        id: 30,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/30.png',
     
      },
      {
        id: 31,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/31.png',
     
      },
      {
        id: 32,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/32.png',
     
      },
      {
        id: 33,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/33.png',
     
      },
      {
        id: 34,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/34.png',
     
      },
      {
        id: 35,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/35.png',
     
      },
      {
        id: 36,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/36.png',
     
      },
      {
        id: 37,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/37.png',
     
      },
      {
        id: 38,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/38.png',
     
      },
      {
        id: 39,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/39.png',
     
      },
      {
        id: 40,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/40.png',
     
      },
      {
        id: 41,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/41.png',
     
      },
      {
        id: 42,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/42.png',
     
      },
      {
        id: 43,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/43.png',
     
      },
      {
        id: 44,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/44.png',
     
      },
      {
        id: 45,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/45.png',
     
      },
      {
        id: 46,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/46.png',
     
      },
      {
        id: 47,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/47.png',
     
      },
      {
        id: 48,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/48.png',
     
      },
      {
        id: 49,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/49.png',
     
      },
      {
        id: 350,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/50.png',
     
      },
      {
        id: 51,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/51.png',
     
      },
      {
        id: 52,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/52.png',
     
      },
      {
        id: 53,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/53.png',
     
      },
      {
        id: 54,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/54.png',
     
      },
      {
        id: 55,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/55.png',
     
      },
      {
        id: 56,
        name: 'Round Banquet Tables',
        category: 'furniture',
        image: '/rentals/56.png',
     
      },
  ];

  const handleRental = (productName) => {
    // Create WhatsApp message with product name
    const message = encodeURIComponent(`Hi! I'm interested in renting: ${productName}`);
    const whatsappUrl = `https://wa.link/i72ail?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white py-16" style={{ scrollBehavior: 'smooth' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Premium Event Rentals
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Transform your events with our premium rental collection
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={`${product.id}-${product.category}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ease-out group transform hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay gradient for better button visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-400"></div>
                

                
                {/* Rental Button positioned over image */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                  <button
                    onClick={() => handleRental(product.name)}
                    className="relative overflow-hidden px-6 py-2 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-400 ease-out group/btn backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(27, 0, 52, 0.9)' }}
                  >
                    <span className="relative z-10 transition-all duration-300">
                      Rent Now
                    </span>
                    
                    {/* Button hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-400 ease-out"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for smooth scrolling */}
      <style jsx>{`
        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }

        /* Smooth transitions for all elements */
        * {
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Custom scrollbar */
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