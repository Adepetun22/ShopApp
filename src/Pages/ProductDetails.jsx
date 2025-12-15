import React, { useState } from 'react';
import image2 from '../assets/image-2.png';
import image5 from '../assets/image-50.png';
import image6 from '../assets/image-60.png';
import image7 from '../assets/image-70.png';
import image8 from '../assets/image-80.png';
import image9 from '../assets/image-90.png';
import image10 from '../assets/image-100.png';
import CustomerReview from '../Components/CustomerReview';
import ProductCard from '../Components/ProductCard';
import ProductImageGallery from '../Components/ProductImageGallery';
import EmailSubscription from '../Components/EmailSubscription';
import arrowDownBold1 from '../assets/arrow-down-bold-10.svg';
import arrowDownBold2 from '../assets/arrow-down-bold-20.svg';
import frame0 from '../assets/frame0.svg';
import frame1 from '../assets/frame1.svg';
import frame2 from '../assets/frame2.svg';
import frame4 from '../assets/frame4.svg';
import frame5 from '../assets/frame5.svg';
import frame8 from '../assets/frame8.svg';
import frame9 from '../assets/frame9.svg';
import frame10 from '../assets/frame10.svg';
import frame11 from '../assets/frame11.svg';
import frame12 from '../assets/frame12.svg';
import frame101 from '../assets/frame-101.svg';
import frame102 from '../assets/frame-102.svg';
import frame103 from '../assets/frame-103.svg';
import frame104 from '../assets/frame-104.svg';
import frame105 from '../assets/frame-105.svg';


const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState('Small'); // Default to Small
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const [selectedColor, setSelectedColor] = useState('gray'); // Default to gray color
  
  // Check if we're on localhost:5187
  const isLocalhost5187 = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && 
    window.location.port === '5187';
  
  // Customer testimonials data for product reviews
  const testimonials = [
    {
      id: 1,
      name: "Samantha D.",
      rating: frame101,
      verified: frame8,
      quote: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
    },
    {
      id: 2,
      name: "Alex M.",
      rating: frame102,
      verified: frame9,
      quote: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
    },
    {
      id: 3,
      name: "Ethan R.",
      rating: frame103,
      verified: frame10,
      quote: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
    },
    {
      id: 4,
      name: "Olivia P.",
      rating: frame104,
      verified: frame11,
      quote: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
    },
    {
      id: 5,
      name: "Liam K.",
      rating: frame105,
      verified: frame12,
      quote: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 xs:py-2 sm:py-6">
        <div className="flex flex-row gap-3 items-center justify-start">
          <div className="flex flex-row gap-1 items-center justify-start">
            <div className="text-gray-600 text-sm xs:text-xs sm:text-base">Home</div>
            <img className="w-4 h-4" src={frame0} alt="" />
          </div>
          <div className="flex flex-row gap-1 items-center justify-start">
            <div className="text-gray-600 text-sm xs:text-xs sm:text-base">Shop</div>
            <img className="w-4 h-4" src={frame1} alt="" />
          </div>
          <div className="flex flex-row gap-1 items-center justify-start">
            <div className="text-gray-600 text-sm xs:text-xs sm:text-base">Men</div>
            <img className="w-4 h-4" src={frame2} alt="" />
          </div>
          <div className="text-black text-sm xs:text-xs sm:text-base">T-shirts</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 xs:py-6 sm:py-10 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 xs:gap-6 sm:gap-8 items-start justify-start">
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col md:flex-row gap-4 xs:gap-2 sm:gap-4 items-center justify-start w-full">
              {/* Desktop thumbnails */}
              <div className="hidden md:flex md:flex-col md:gap-4 md:items-start md:justify-start md:w-24">
                <img className="rounded-xl border border-black w-full h-24 xs:h-20 sm:h-28 object-cover cursor-pointer" src={image2} alt="" />
                <img className="rounded-xl border border-transparent w-full h-24 xs:h-20 sm:h-28 object-cover cursor-pointer" src={image5} alt="" />
                <img className="rounded-xl border border-transparent w-full h-24 xs:h-20 sm:h-28 object-cover cursor-pointer" src={image6} alt="" />
              </div>
              {/* Main image */}
              <img className="bg-gray-100 rounded-xl flex-1 w-full h-80 xs:h-64 sm:h-96 md:h-[530px] object-cover" src={image2} alt="" />
            </div>
            {/* Mobile thumbnails */}
            <div className="flex md:hidden flex-row gap-4 xs:gap-2 sm:gap-4 items-center justify-center w-full mt-4 overflow-x-auto">
              <img className="rounded-xl border border-black w-16 h-16 xs:w-12 xs:h-12 sm:w-20 sm:h-20 object-cover cursor-pointer flex-shrink-0" src={image2} alt="" />
              <img className="rounded-xl border border-transparent w-16 h-16 xs:w-12 xs:h-12 sm:w-20 sm:h-20 object-cover cursor-pointer flex-shrink-0" src={image5} alt="" />
              <img className="rounded-xl border border-transparent w-16 h-16 xs:w-12 xs:h-12 sm:w-20 sm:h-20 object-cover cursor-pointer flex-shrink-0" src={image6} alt="" />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-6 xs:gap-4 sm:gap-6">
              <div className="flex flex-col gap-4 xs:gap-3 sm:gap-4">
                <h1 className="text-2xl xs:text-xl sm:text-2xl md:text-3xl font-bold mb-4 xs:mb-2 sm:mb-4">One Life Graphic T-shirt</h1>
                
                <div className="flex flex-row gap-2 items-center justify-start">
                  <img className="w-auto h-5" src={frame101} alt="Rating stars" />
                  <div className="flex items-center">
                    <span className="text-black text-sm xs:text-xs sm:text-sm">4.5/</span>
                    <span className="text-gray-600 text-sm xs:text-xs sm:text-sm">5</span>
                  </div>
                </div>
                
                <div className="flex flex-row items-center justify-start gap-4">
                  <div className="flex flex-row items-center justify-start gap-2">
                    <div className="text-black font-bold text-xl xs:text-lg sm:text-xl">$260</div>
                    <div className="text-gray-600 text-base xs:text-sm sm:text-base line-through">$300</div>
                  </div>
                  <div className="bg-red-500 rounded-full px-3 py-1">
                    <div className="text-white text-sm xs:text-xs sm:text-sm">-40%</div>
                  </div>
                </div>
                
                <div className="text-gray-600 text-sm xs:text-xs sm:text-base">
                  This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                </div>
              </div>
              
              <hr className="border-t border-gray-300 w-full" />
              
              <div className="flex flex-col gap-4 xs:gap-3 sm:gap-4 w-full">
                <div className="text-black font-medium text-base xs:text-sm sm:text-base">Select Colors</div>
                <div className="flex flex-row gap-3 items-center justify-start">
                  <div 
                    className="relative cursor-pointer"
                    onClick={() => setSelectedColor('gray')}
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-900"></div>
                    {selectedColor === 'gray' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.5306 5.03081L6.5306 13.0308C6.46092 13.1007 6.37813 13.1562 6.28696 13.1941C6.1958 13.2319 6.09806 13.2514 5.99935 13.2514C5.90064 13.2514 5.8029 13.2319 5.71173 13.1941C5.62057 13.1562 5.53778 13.1007 5.4681 13.0308L1.9681 9.53081C1.89833 9.46105 1.84299 9.37823 1.80524 9.28707C1.76748 9.19592 1.74805 9.09823 1.74805 8.99956C1.74805 8.9009 1.76748 8.8032 1.80524 8.71205C1.84299 8.6209 1.89833 8.53808 1.9681 8.46831C2.03786 8.39855 2.12069 8.34321 2.21184 8.30545C2.30299 8.26769 2.40069 8.24826 2.49935 8.24826C2.59801 8.24826 2.69571 8.26769 2.78686 8.30545C2.87801 8.34321 2.96083 8.39855 3.0306 8.46831L5.99997 11.4377L13.4693 3.96956C13.6102 3.82867 13.8013 3.74951 14.0006 3.74951C14.1999 3.74951 14.391 3.82867 14.5318 3.96956C14.6727 4.11046 14.7519 4.30156 14.7519 4.50081C14.7519 4.70007 14.6727 4.89117 14.5318 5.03206L14.5306 5.03081Z" fill="white"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div 
                    className="relative w-8 h-8 rounded-full bg-blue-500 cursor-pointer"
                    onClick={() => setSelectedColor('blue')}
                  >
                    {selectedColor === 'blue' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.5306 5.03081L6.5306 13.0308C6.46092 13.1007 6.37813 13.1562 6.28696 13.1941C6.1958 13.2319 6.09806 13.2514 5.99935 13.2514C5.90064 13.2514 5.8029 13.2319 5.71173 13.1941C5.62057 13.1562 5.53778 13.1007 5.4681 13.0308L1.9681 9.53081C1.89833 9.46105 1.84299 9.37823 1.80524 9.28707C1.76748 9.19592 1.74805 9.09823 1.74805 8.99956C1.74805 8.9009 1.76748 8.8032 1.80524 8.71205C1.84299 8.6209 1.89833 8.53808 1.9681 8.46831C2.03786 8.39855 2.12069 8.34321 2.21184 8.30545C2.30299 8.26769 2.40069 8.24826 2.49935 8.24826C2.59801 8.24826 2.69571 8.26769 2.78686 8.30545C2.87801 8.34321 2.96083 8.39855 3.0306 8.46831L5.99997 11.4377L13.4693 3.96956C13.6102 3.82867 13.8013 3.74951 14.0006 3.74951C14.1999 3.74951 14.391 3.82867 14.5318 3.96956C14.6727 4.11046 14.7519 4.30156 14.7519 4.50081C14.7519 4.70007 14.6727 4.89117 14.5318 5.03206L14.5306 5.03081Z" fill="white"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div 
                    className="relative w-8 h-8 rounded-full bg-red-500 cursor-pointer"
                    onClick={() => setSelectedColor('red')}
                  >
                    {selectedColor === 'red' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.5306 5.03081L6.5306 13.0308C6.46092 13.1007 6.37813 13.1562 6.28696 13.1941C6.1958 13.2319 6.09806 13.2514 5.99935 13.2514C5.90064 13.2514 5.8029 13.2319 5.71173 13.1941C5.62057 13.1562 5.53778 13.1007 5.4681 13.0308L1.9681 9.53081C1.89833 9.46105 1.84299 9.37823 1.80524 9.28707C1.76748 9.19592 1.74805 9.09823 1.74805 8.99956C1.74805 8.9009 1.76748 8.8032 1.80524 8.71205C1.84299 8.6209 1.89833 8.53808 1.9681 8.46831C2.03786 8.39855 2.12069 8.34321 2.21184 8.30545C2.30299 8.26769 2.40069 8.24826 2.49935 8.24826C2.59801 8.24826 2.69571 8.26769 2.78686 8.30545C2.87801 8.34321 2.96083 8.39855 3.0306 8.46831L5.99997 11.4377L13.4693 3.96956C13.6102 3.82867 13.8013 3.74951 14.0006 3.74951C14.1999 3.74951 14.391 3.82867 14.5318 3.96956C14.6727 4.11046 14.7519 4.30156 14.7519 4.50081C14.7519 4.70007 14.6727 4.89117 14.5318 5.03206L14.5306 5.03081Z" fill="white"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <hr className="border-t border-gray-300 w-full" />
              
              <div className="flex flex-col gap-4 xs:gap-3 sm:gap-4 w-full">
                <div className="text-black font-medium text-base xs:text-sm sm:text-base">Choose Size</div>
                <div className="flex flex-row gap-3 items-center justify-start flex-wrap">
                  <button 
                    className={`border rounded-full px-4 py-2 xs:px-3 xs:py-1 sm:px-5 sm:py-3 transition-colors ${selectedSize === 'Small' ? 'bg-black text-white' : 'border-gray-300 hover:border-black hover:bg-black hover:text-white'}`}
                    onClick={() => setSelectedSize('Small')}
                  >
                    <span className="text-sm xs:text-xs sm:text-base">Small</span>
                  </button>
                  <button 
                    className={`border rounded-full px-4 py-2 xs:px-3 xs:py-1 sm:px-5 sm:py-3 transition-colors ${selectedSize === 'Medium' ? 'bg-black text-white' : 'border-gray-300 hover:border-black hover:bg-black hover:text-white'}`}
                    onClick={() => setSelectedSize('Medium')}
                  >
                    <span className="text-sm xs:text-xs sm:text-base">Medium</span>
                  </button>
                  <button 
                    className={`border rounded-full px-4 py-2 xs:px-3 xs:py-1 sm:px-5 sm:py-3 transition-colors ${selectedSize === 'Large' ? 'bg-black text-white' : 'border-gray-300 hover:border-black hover:bg-black hover:text-white'}`}
                    onClick={() => setSelectedSize('Large')}
                  >
                    <span className="text-sm xs:text-xs sm:text-base">Large</span>
                  </button>
                  <button 
                    className={`border rounded-full px-4 py-2 xs:px-3 xs:py-1 sm:px-5 sm:py-3 transition-colors ${selectedSize === 'X-Large' ? 'bg-black text-white' : 'border-gray-300 hover:border-black hover:bg-black hover:text-white'}`}
                    onClick={() => setSelectedSize('X-Large')}
                  >
                    <span className="text-sm xs:text-xs sm:text-base">X-Large</span>
                  </button>
                </div>
              </div>
            </div>
            
            <hr className="border-t border-gray-300 w-full" />
            
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between w-full">
              <div className="flex flex-row items-center justify-between border border-gray-300 rounded-full p-3 xs:p-2 sm:p-3 min-w-[100px] xs:min-w-[80px] sm:min-w-[120px]">
                <img 
                  className="w-5 h-5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 cursor-pointer" 
                  src={frame4} 
                  alt="Decrease quantity" 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                />
                <div className="text-black text-center text-lg xs:text-base sm:text-lg mx-4 xs:mx-2 sm:mx-4">{quantity}</div>
                <img 
                  className="w-5 h-5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 cursor-pointer" 
                  src={frame5} 
                  alt="Increase quantity" 
                  onClick={() => setQuantity(prev => prev + 1)}
                />
              </div>
              <button className="bg-black rounded-full px-8 py-3 xs:px-6 xs:py-2 sm:px-12 sm:py-4 flex-1 sm:flex-initial">
                <div className="text-white text-center font-medium text-base xs:text-sm sm:text-base">Add to Cart</div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Tabs Section */}
        <div className="container mx-auto px-4 py-8 xs:py-6 sm:py-8">
          <div className="flex flex-row gap-6 xs:gap-4 sm:gap-8 items-center justify-start overflow-x-auto">
            <div className="pb-2 border-b-2 border-black whitespace-nowrap">
              <div className="text-black font-medium text-base xs:text-sm sm:text-base">Product Details</div>
            </div>
            <div className="pb-2 whitespace-nowrap">
              <div className="text-gray-600 font-medium text-base xs:text-sm sm:text-base">Rating & Reviews</div>
            </div>
            <div className="pb-2 whitespace-nowrap">
              <div className="text-gray-600 font-medium text-base xs:text-sm sm:text-base">FAQs</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reviews Section */}
      <div className="container mx-auto px-4 mb-12 xs:mb-8 sm:mb-16">
        <CustomerReview 
          testimonials={testimonials} 
          arrowDownBold1={arrowDownBold1} 
          arrowDownBold2={arrowDownBold2}
          title="All Reviews (451)" 
        />
      </div>
      
      {/* You might also like section */}
      <div className="container mx-auto px-4 mb-12 xs:mb-8 sm:mb-16">
        <h2 className="text-2xl xs:text-xl sm:text-2xl md:text-3xl font-bold mb-6 xs:mb-4 sm:mb-8">You might also like</h2>
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-2 sm:gap-6">
          <ProductCard 
            image={image7}
            title="Polo with Contrast Trims"
            rating="4.0/5"
            price="$212"
            originalPrice="$242"
            discount="-20%"
          />
          
          <ProductCard 
            image={image8}
            title="Gradient Graphic T-shirt"
            rating="3.5/5"
            price="$145"
          />
          
          <ProductCard 
            image={image9}
            title="Polo with Tipping Details"
            rating="4.5/5"
            price="$180"
          />
          
          <ProductCard 
            image={image10}
            title="Black Striped T-shirt"
            rating="5.0/5"
            price="$120"
            originalPrice="$150"
            discount="-30%"
          />
        </div>
      </div>
      
      {/* Newsletter section */}
      <EmailSubscription />
    </div>
  );
};

export default ProductDetails;