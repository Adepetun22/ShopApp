import React, { useState } from 'react';
import image1 from '../assets/image-10.png';
import image2 from '../assets/image-2.png';
import image5 from '../assets/image-50.png';
import image6 from '../assets/image-60.png';
import CustomerReview from '../Components/CustomerReview';
import ProductCard from '../Components/ProductCard';
import ProductImageGallery from '../Components/ProductImageGallery';
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
import logoTwitter from '../assets/logo-twitter-20.svg';
import logoFb from '../assets/logo-fb-simple-20.svg';
import logoInstagram from '../assets/logo-instagram-10.svg';
import logoGithub from '../assets/logo-github-10.svg';
import badge0 from '../assets/badge0.svg';
import badge1 from '../assets/badge1.svg';
import badge2 from '../assets/badge2.svg';
import badge3 from '../assets/badge3.svg';
import badge4 from '../assets/badge4.svg';

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState('Small'); // Default to Small
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const [selectedColor, setSelectedColor] = useState('gray'); // Default to gray color
  
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
    <div className="bg-white py-0 px-[6.25rem] flex flex-col gap-[2.5625rem] items-start justify-start">
      {/* Breadcrumb */}
      <div className="flex flex-row gap-3 items-center justify-start">
        <div className="flex flex-row gap-1 items-center justify-start">
          <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-base">Home</div>
          <img className="w-4 h-4 relative overflow-visible" src={frame0} alt="" />
        </div>
        <div className="flex flex-row gap-1 items-center justify-start">
          <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-base">Shop</div>
          <img className="w-4 h-4 relative overflow-visible" src={frame1} alt="" />
        </div>
        <div className="flex flex-row gap-1 items-center justify-start">
          <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-base">Men</div>
          <img className="w-4 h-4 relative overflow-visible" src={frame2} alt="" />
        </div>
        <div className="text-black text-left font-sans font-normal text-base">T-shirts</div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-[4.375rem] items-start justify-start self-stretch flex-shrink-0 relative">
        <div className="flex flex-row gap-8 items-center justify-start flex-wrap content-center self-stretch flex-shrink-0 relative">
          {/* Image Gallery */}
          <ProductImageGallery 
            images={[image2, image5, image6]}
          />

          {/* Product Info */}
          <div className="flex flex-col gap-6 items-end justify-start flex-1 max-w-[37.5rem] relative">
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-4">
                <h1 className="text-black text-left font-sans font-medium text-2xl">One Life Graphic T-shirt</h1>
                
                <div className="flex flex-row gap-2 items-center justify-start">
                  <img className="w-auto h-5 relative" src={frame101} alt="Rating stars" />
                  <div className="flex items-center">
                    <span className="text-black text-left font-sans font-normal text-sm">4.5/</span>
                    <span className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">5</span>
                  </div>
                </div>
                
                <div className="flex flex-row items-center justify-start gap-4">
                  <div className="flex flex-row items-center justify-start gap-2">
                    <div className="text-black text-left font-sans font-medium text-xl">$260</div>
                    <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-base line-through">$300</div>
                  </div>
                  <div className="bg-red-500 rounded-full px-3 py-1">
                    <div className="text-white text-left font-sans font-normal text-sm">-40%</div>
                  </div>
                </div>
                
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-base">
                  This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                </div>
              </div>
              
              <hr className="border-t border-gray-300 w-full" />
              
              <div className="flex flex-col gap-4 w-full">
                <div className="text-black text-left font-sans font-medium text-base">Select Colors</div>
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
              
              <div className="flex flex-col gap-4 w-full">
                <div className="text-black text-left font-sans font-medium text-base">Choose Size</div>
                <div className="flex flex-row gap-3 items-center justify-start flex-wrap">
                  <button 
                    className={`border rounded-full px-5 py-3 transition-colors ${selectedSize === 'Small' ? 'bg-black text-white' : 'border-gray-300 hover:border-black hover:bg-black hover:text-white'}`}
                    onClick={() => setSelectedSize('Small')}
                  >
                    <span className="text-left font-sans font-normal text-base">Small</span>
                  </button>
                  <button 
                    className={`border rounded-full px-5 py-3 transition-colors ${selectedSize === 'Medium' ? 'bg-black text-white' : 'border-gray-300 hover:border-black hover:bg-black hover:text-white'}`}
                    onClick={() => setSelectedSize('Medium')}
                  >
                    <span className="text-left font-sans font-normal text-base">Medium</span>
                  </button>
                  <button 
                    className={`border rounded-full px-5 py-3 transition-colors ${selectedSize === 'Large' ? 'bg-black text-white' : 'border-gray-300 hover:border-black hover:bg-black hover:text-white'}`}
                    onClick={() => setSelectedSize('Large')}
                  >
                    <span className="text-left font-sans font-normal text-base">Large</span>
                  </button>
                  <button 
                    className={`border rounded-full px-5 py-3 transition-colors ${selectedSize === 'X-Large' ? 'bg-black text-white' : 'border-gray-300 hover:border-black hover:bg-black hover:text-white'}`}
                    onClick={() => setSelectedSize('X-Large')}
                  >
                    <span className="text-left font-sans font-normal text-base">X-Large</span>
                  </button>
                </div>
              </div>
            </div>
            
            <hr className="border-t border-gray-300 w-full" />
            
            <div className="flex flex-row gap-4 items-center justify-between self-stretch">
              <div className="flex flex-row items-center justify-between border border-gray-300 rounded-full p-3 min-w-[100px]">
                <img 
                  className="w-5 h-5 cursor-pointer" 
                  src={frame4} 
                  alt="Decrease quantity" 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                />
                <div className="text-black text-center font-sans font-normal text-lg mx-4">{quantity}</div>
                <img 
                  className="w-5 h-5 cursor-pointer" 
                  src={frame5} 
                  alt="Increase quantity" 
                  onClick={() => setQuantity(prev => prev + 1)}
                />
              </div>
              <button className="bg-black rounded-full px-12 py-4">
                <div className="text-white text-center font-sans font-medium text-base">Add to Cart</div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Tabs Section */}
        <div className="flex flex-row gap-8 items-center justify-start self-stretch">
          <div className="pb-2 border-b-2 border-black">
            <div className="text-black text-left font-sans font-medium text-base">Product Details</div>
          </div>
          <div className="pb-2">
            <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-medium text-base">Rating & Reviews</div>
          </div>
          <div className="pb-2">
            <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-medium text-base">FAQs</div>
          </div>
        </div>
      </div>
      
      {/* Reviews Section */}
      <div className="flex flex-col gap-6 self-stretch">
        <CustomerReview 
          testimonials={testimonials} 
          arrowDownBold1={arrowDownBold1} 
          arrowDownBold2={arrowDownBold2}
          title="All Reviews (451)" 
        />
      </div>
      
      {/* You might also like section */}
      <div className="flex flex-col gap-8 self-stretch">
        <div className="text-black text-left font-sans font-bold text-2xl">You might also like</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard 
            image={image1}
            title="Polo with Contrast Trims"
            rating="4.0/5"
            price="$212"
            originalPrice="$242"
            discount="-20%"
          />
          
          <ProductCard 
            image={image1}
            title="Gradient Graphic T-shirt"
            rating="3.5/5"
            price="$145"
          />
          
          <ProductCard 
            image={image1}
            title="Polo with Tipping Details"
            rating="4.5/5"
            price="$180"
          />
          
          <ProductCard 
            image={image1}
            title="Black Striped T-shirt"
            rating="5.0/5"
            price="$120"
            originalPrice="$150"
            discount="-30%"
          />
        </div>
      </div>
      
      {/* Footer section */}
      <div className="flex flex-col self-stretch">
        {/* Newsletter section */}
        <div className="flex flex-col items-center justify-start py-12 px-20 bg-black rounded-[1.25rem] self-stretch">
          <div className="flex flex-col gap-8 items-center justify-start self-stretch">
            <div className="text-white text-center font-sans font-bold text-2xl md:text-3xl lg:text-4xl">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </div>
            <div className="flex flex-row gap-4 items-center justify-center self-stretch max-w-2xl">
              <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 bg-white rounded-full">
                <div className="text-gray-500 text-left font-sans font-normal text-base">
                  Enter your email address
                </div>
              </div>
              <button className="bg-white rounded-full px-6 py-3">
                <div className="text-black text-center font-sans font-medium text-base">Subscribe to Newsletter</div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Main footer */}
        <div className="flex flex-col self-stretch">
          <div className="flex flex-row gap-10 items-start justify-between py-12 self-stretch border-b border-gray-300">
            {/* Brand info */}
            <div className="flex flex-col gap-6 items-start justify-start max-w-xs">
              <div className="text-black text-left font-sans font-bold text-2xl">SHOP.CO</div>
              <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-base">
                We have clothes that suits your style and which you're proud to wear. From women to men.
              </div>
              <div className="flex flex-row gap-4 items-start justify-start">
                <img className="w-5 h-5" src={logoTwitter} alt="Twitter" />
                <img className="w-5 h-5" src={logoFb} alt="Facebook" />
                <img className="w-5 h-5" src={logoInstagram} alt="Instagram" />
                <img className="w-5 h-5" src={logoGithub} alt="GitHub" />
              </div>
            </div>
            
            {/* Company links */}
            <div className="flex flex-col gap-4 items-start justify-start">
              <div className="text-black text-left font-sans font-medium text-base">Company</div>
              <div className="flex flex-col gap-2 items-start justify-start">
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">About</div>
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">Features</div>
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">Works</div>
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">Career</div>
              </div>
            </div>
            
            {/* Help links */}
            <div className="flex flex-col gap-4 items-start justify-start">
              <div className="text-black text-left font-sans font-medium text-base">Help</div>
              <div className="flex flex-col gap-2 items-start justify-start">
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">Customer Support</div>
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">Delivery Details</div>
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">Terms & Conditions</div>
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">Privacy Policy</div>
              </div>
            </div>
            
            {/* FAQ links */}
            <div className="flex flex-col gap-4 items-start justify-start">
              <div className="text-black text-left font-sans font-medium text-base">FAQ</div>
              <div className="flex flex-col gap-2 items-start justify-start">
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">Account</div>
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">Manage Deliveries</div>
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">Orders</div>
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">Payments</div>
              </div>
            </div>
            
            {/* Resources links */}
            <div className="flex flex-col gap-4 items-start justify-start">
              <div className="text-black text-left font-sans font-medium text-base">Resources</div>
              <div className="flex flex-col gap-2 items-start justify-start">
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">Free eBooks</div>
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">Development Tutorial</div>
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">How to - Blog</div>
                <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">Youtube Playlist</div>
              </div>
            </div>
          </div>
          
          {/* Copyright and payment methods */}
          <div className="flex flex-row items-center justify-between py-6 self-stretch">
            <div className="text-[rgba(0,0,0,0.6)] text-left font-sans font-normal text-sm">
              Shop.co © 2000-2023, All Rights Reserved
            </div>
            <div className="flex flex-row gap-2 items-center justify-end">
              <img className="w-8 h-5" src={badge0} alt="Payment method" />
              <img className="w-8 h-5" src={badge1} alt="Payment method" />
              <img className="w-8 h-5" src={badge2} alt="Payment method" />
              <img className="w-8 h-5" src={badge3} alt="Payment method" />
              <img className="w-8 h-5" src={badge4} alt="Payment method" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;