import React, { useState, useEffect, useRef } from 'react';
import backgroundImage from '../assets/frame-149-10.png';
import image7 from '../assets/image-70.png';
import image82 from '../assets/image-82.png';
import image9 from '../assets/image-90.png';
import image11 from '../assets/image-110.png';
import image86 from '../assets/image-86.png';
import image92 from '../assets/image-91.png';
import image12 from '../assets/image-120.png';
import image10 from '../assets/image-100.png';
import image112 from '../assets/image-111.png';
import image13 from '../assets/image-130.png';
import image122 from '../assets/image-121.png';
import image14 from '../assets/image-140.png';

// Import SVG assets
import frame561 from '../assets/frame-5610.svg';
import frame0 from '../assets/frame0.svg';
import frame1 from '../assets/frame1.svg';
import frame78 from '../assets/frame-780.svg';
import frame091 from '../assets/frame-0910.svg';
import frame2 from '../assets/frame2.svg';
import frame3 from '../assets/frame3.svg';
import group0 from '../assets/group0.svg';
import zaraLogo from '../assets/zara-logo-1-10.svg';
import gucciLogo from '../assets/gucci-logo-1-10.svg';
import frame100 from '../assets/frame-100.svg';
import frame101 from '../assets/frame-101.svg';
import frame102 from '../assets/frame-102.svg';
import frame103 from '../assets/frame-103.svg';
import frame104 from '../assets/frame-104.svg';
import frame108 from '../assets/frame-108.svg';
import logoTwitter from '../assets/logo-twitter-20.svg';
import logoFb from '../assets/logo-fb-simple-20.svg';
import logoInstagram from '../assets/logo-instagram-10.svg';
import logoGithub from '../assets/logo-github-10.svg';
import badge0 from '../assets/badge0.svg';
import badge1 from '../assets/badge1.svg';
import badge2 from '../assets/badge2.svg';
import badge3 from '../assets/badge3.svg';
import badge4 from '../assets/badge4.svg';
import arrowDownBold1 from '../assets/arrow-down-bold-10.svg';
import arrowDownBold2 from '../assets/arrow-down-bold-20.svg';

// Import ProductCard and CustomerReview components
import ProductCard from '../Components/ProductCard';
import CustomerReview from '../Components/CustomerReview';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  
  // Customer testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      rating: frame100,
      verified: frame0,
      quote: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
      id: 2,
      name: "Sarah M.",
      rating: frame101,
      verified: frame1,
      quote: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
      id: 3,
      name: "Alex K.",
      rating: frame102,
      verified: frame2,
      quote: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
      id: 4,
      name: "James L.",
      rating: frame103,
      verified: frame3,
      quote: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
      id: 5,
      name: "Mooen",
      rating: frame104,
      verified: frame108,
      quote: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    }
  ];
  
  // Auto-scroll functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev === testimonials.length - 3 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length]);
  
  // Handle slide change
  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev === testimonials.length - 3 ? 0 : prev + 1));
      }, 5000);
    }
  };
  
  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide(currentSlide === testimonials.length - 3 ? 0 : currentSlide + 1);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev === testimonials.length - 3 ? 0 : prev + 1));
      }, 5000);
    }
  };
  
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? testimonials.length - 3 : currentSlide - 1);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev === testimonials.length - 3 ? 0 : prev + 1));
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top notification bar */}
      <div className="bg-black py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="text-white text-sm xs:text-xs sm:text-sm">
            <span className="font-normal">Sign up and get 20% off to your first order. </span>
            <span className="font-medium underline cursor-pointer">Sign Up Now</span>
          </div>
          <img src={frame561} alt="Close" className="w-5 h-5" />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="py-4 xs:py-3 sm:py-5 px-4 border-b">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6 xs:space-x-4 sm:space-x-6 md:space-x-10">
            <div className="text-2xl xs:text-xl sm:text-3xl font-extrabold">SHOP.CO</div>
            <div className="hidden md:flex space-x-4 xs:space-x-2 sm:space-x-4 md:space-x-6">
              <div className="flex items-center">
                <span className="text-sm xs:text-xs sm:text-sm">Shop</span>
                <img src={frame0} alt="" className="ml-1 w-4 h-4" />
              </div>
              <span className="text-sm xs:text-xs sm:text-sm">On Sale</span>
              <span className="text-sm xs:text-xs sm:text-sm">New Arrivals</span>
              <span className="text-sm xs:text-xs sm:text-sm">Brands</span>
            </div>
          </div>

          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 xs:px-2 sm:px-4 py-1 xs:py-0.5 sm:py-2 grow max-w-md mx-2 xs:mx-1 sm:mx-4">
            <img src={frame1} alt="" className="mr-2 w-4 h-4 xs:w-3 xs:h-3" />
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="bg-transparent border-none outline-none w-full text-gray-500 text-sm xs:text-xs sm:text-sm"
            />
          </div>

          <div className="flex items-center space-x-3 xs:space-x-2 sm:space-x-4">
            <img src={frame78} alt="Cart" className="w-5 h-5 xs:w-4 xs:h-4" />
            <img src={frame091} alt="Profile" className="w-5 h-5 xs:w-4 xs:h-4" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 xs:py-6 sm:py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl xs:text-2xl sm:text-4xl md:text-5xl font-bold mb-4 xs:mb-2 sm:mb-4">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-gray-600 mb-6 xs:mb-4 sm:mb-6 md:mb-8 text-sm xs:text-xs sm:text-base">
              Browse through our diverse range of meticulously crafted garments, 
              designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="btn btn-primary">
              Shop Now
            </button>
            
            <div className="flex flex-wrap items-center justify-between">
              <div className="text-center mr-4 xs:mr-2 sm:mr-6 mb-4">
                <div className="text-xl xs:text-lg sm:text-2xl font-bold">200+</div>
                <div className="text-gray-600 text-xs xs:text-[0.6rem] sm:text-sm">International Brands</div>
              </div>
              <div className="border-r h-10 xs:h-8 sm:h-12 mx-2"></div>
              <div className="text-center mr-4 xs:mr-2 sm:mr-6 mb-4">
                <div className="text-xl xs:text-lg sm:text-2xl font-bold">2,000+</div>
                <div className="text-gray-600 text-xs xs:text-[0.6rem] sm:text-sm">High-Quality Products</div>
              </div>
              <div className="border-r h-10 xs:h-8 sm:h-12 mx-2"></div>
              <div className="text-center mb-4">
                <div className="text-xl xs:text-lg sm:text-2xl font-bold">30,000+</div>
                <div className="text-gray-600 text-xs xs:text-[0.6rem] sm:text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <img src={backgroundImage} alt="Fashion models" className="w-full" />
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="bg-black py-6 xs:py-4 sm:py-8 mb-12 xs:mb-8 sm:mb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center">
            <img src={frame2} alt="Frame" className="mx-2 xs:mx-1 sm:mx-4 my-2 w-20 xs:w-16 sm:w-24 md:w-28" />
            <img src={zaraLogo} alt="Zara" className="mx-2 xs:mx-1 sm:mx-4 my-2 w-16 xs:w-12 sm:w-20 md:w-24" />
            <img src={gucciLogo} alt="Gucci" className="mx-2 xs:mx-1 sm:mx-4 my-2 w-20 xs:w-16 sm:w-24 md:w-28" />
            <div className="mx-2 xs:mx-1 sm:mx-4 my-2">
              <img src={group0} alt="Prada" className="mx-2 xs:mx-1 sm:mx-4 my-2 w-24 xs:w-20 sm:w-28 md:w-32" />
            </div>
            <img src={frame3} alt="Frame" className="mx-2 xs:mx-1 sm:mx-4 my-2 w-20 xs:w-16 sm:w-24 md:w-28" />
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="container mx-auto px-4 mb-12 xs:mb-8 sm:mb-16">
        <h2 className="text-2xl xs:text-xl sm:text-2xl md:text-3xl font-bold mb-6 xs:mb-4 sm:mb-8">NEW ARRIVALS</h2>
        
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-2 sm:gap-6 mb-6 xs:mb-4 sm:mb-8">
          {/* Product 1 */}
          <div className="w-full">
            <ProductCard 
              image={image7}
              title="T-SHIRT WITH TAPE DETAILS"
              rating="4.5/5"
              price="$120"
            />
          </div>
          
          {/* Product 2 */}
          <div className="w-full">
            <ProductCard 
              image={image82}
              title="SKINNY FIT JEANS"
              rating="4.5/5"
              price="$240"
              originalPrice="$260"
              discount="-20%"
            />
          </div>
          
          {/* Product 3 */}
          <div className="w-full">
            <ProductCard 
              image={image9}
              title="CHECKERED SHIRT"
              rating="4.5/5"
              price="$180"
            />
          </div>
          
          {/* Product 4 */}
          <div className="w-full">
            <ProductCard 
              image={image11}
              title="SLEEVES STRIPED T-SHIRT"
              rating="4.5/5"
              price="$130"
              originalPrice="$160"
              discount="-30%"
            />
          </div>
        </div>
        
        <div className="text-center">
          <button className="btn btn-secondary">
            View All
          </button>
        </div>
      </div>

      {/* Top Selling Section */}
      <div className="container mx-auto px-4 mb-12 xs:mb-8 sm:mb-16">
        <h2 className="text-2xl xs:text-xl sm:text-2xl md:text-3xl font-bold mb-6 xs:mb-4 sm:mb-8">TOP SELLING</h2>
        
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-2 sm:gap-6 mb-6 xs:mb-4 sm:mb-8">
          {/* Product 1 */}
          <div className="w-full">
            <ProductCard 
              image={image86}
              title="VERTICAL STRIPED SHIRT"
              rating="5.0/5"
              price="$212"
              originalPrice="$232"
              discount="-20%"
            />
          </div>
          
          {/* Product 2 */}
          <div className="w-full">
            <ProductCard 
              image={image92}
              title="COURAGE GRAPHIC T-SHIRT"
              rating="4.5/5"
              price="$145"
            />
          </div>
          
          {/* Product 3 */}
          <div className="w-full">
            <ProductCard 
              image={image12}
              title="FADED SKINNY JEANS"
              rating="4.5/5"
              price="$120"
            />
          </div>
          
          {/* Product 4 */}
          <div className="w-full">
            <ProductCard 
              image={image10}
              title="LOOSE FIT BERMUDA SHORTS"
              rating="4.5/5"
              price="$80"
            />
          </div>
        </div>
        
        <div className="text-center">
          <button className="btn btn-secondary">
            View All
          </button>
        </div>
      </div>

      {/* Browse by Dress Style */}
      <div className="container mx-auto px-4 mb-12 xs:mb-8 sm:mb-16">
        <div className="bg-gray-100 rounded-[2rem] xs:rounded-[1.5rem] sm:rounded-[2.5rem] py-12 xs:py-8 sm:py-16 px-8 xs:px-4 sm:px-16 flex flex-col items-center">
          <h2 className="text-4xl xs:text-3xl sm:text-5xl font-bold mb-8 xs:mb-6 sm:mb-8 text-center">BROWSE BY DRESS STYLE</h2>
          
          <div className="flex flex-wrap justify-center gap-4 xs:gap-2 sm:gap-8 w-full">
            {/* Casual Card */}
            <div className="bg-white rounded-2xl overflow-hidden h-[200px] xs:h-[150px] sm:h-[289px] min-w-[150px] xs:min-w-[120px] sm:min-w-[200px] max-w-[300px] xs:max-w-[200px] sm:max-w-[407px] flex-1 relative">
              <img src={image112} alt="Casual" className="w-full h-full object-cover" />
              <div className="absolute top-[1rem] xs:top-[0.75rem] sm:top-[1.5625rem] left-[1.5rem] xs:left-[1rem] sm:left-[2.25rem] text-xl xs:text-lg sm:text-2xl font-bold">Casual</div>
            </div>
            
            {/* Formal Card */}
            <div className="bg-white rounded-2xl overflow-hidden h-[200px] xs:h-[150px] sm:h-[289px] min-w-[150px] xs:min-w-[120px] sm:min-w-[200px] flex-1 relative">
              <img src={image13} alt="Formal" className="w-full h-full object-cover" />
              <div className="absolute top-[1rem] xs:top-[0.75rem] sm:top-[1.5625rem] left-[1.5rem] xs:left-[1rem] sm:left-[2.25rem] text-xl xs:text-lg sm:text-2xl font-bold">Formal</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 xs:gap-2 sm:gap-8 w-full mt-4 xs:mt-2 sm:mt-8">
            {/* Party Card */}
            <div className="bg-white rounded-2xl overflow-hidden h-[200px] xs:h-[150px] sm:h-[289px] min-w-[150px] xs:min-w-[120px] sm:min-w-[200px] flex-1 relative">
              <img src={image122} alt="Party" className="w-full h-full object-cover" />
              <div className="absolute top-[1rem] xs:top-[0.75rem] sm:top-[1.5625rem] left-[1.5rem] xs:left-[1rem] sm:left-[2.25rem] text-xl xs:text-lg sm:text-2xl font-bold">Party</div>
            </div>
            
            {/* Gym Card */}
            <div className="bg-white rounded-2xl overflow-hidden h-[200px] xs:h-[150px] sm:h-[289px] min-w-[150px] xs:min-w-[120px] sm:min-w-[200px] max-w-[300px] xs:max-w-[200px] sm:max-w-[407px] flex-1 relative">
              <img src={image14} alt="Gym" className="w-full h-full object-cover" />
              <div className="absolute top-[1rem] xs:top-[0.75rem] sm:top-[1.5625rem] left-[1.5rem] xs:left-[1rem] sm:left-[2.25rem] text-xl xs:text-lg sm:text-2xl font-bold">Gym</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Happy Customers */}
      <div className="container mx-auto px-4 mb-12 xs:mb-8 sm:mb-16">
        <CustomerReview 
          testimonials={testimonials} 
          arrowDownBold1={arrowDownBold1} 
          arrowDownBold2={arrowDownBold2} 
        />
      </div>
      
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 mb-12 xs:mb-8 sm:mb-16">
        <div className="bg-black rounded-2xl py-6 xs:py-4 sm:py-9 px-8 xs:px-4 sm:px-16 flex flex-col xs:flex-col sm:flex-row flex-wrap content-center items-center justify-between self-stretch shrink-0 relative overflow-hidden">
          <div className="text-white text-left text-2xl xs:text-xl sm:text-[2.5rem] leading-8 xs:leading-6 sm:leading-11.25 font-normal relative flex-1 min-w-60 xs:min-w-48 sm:min-w-72.5 mb-6 sm:mb-0">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </div>
          <div className="flex flex-col gap-2 xs:gap-1 sm:gap-3.5 flex-1 min-w-60 xs:min-w-48 sm:min-w-70 max-w-80 xs:max-w-72 sm:max-w-87.25 relative">
            <div className="bg-white rounded-4xl xs:rounded-4xl sm:rounded-4xl py-2 xs:py-1.5 sm:py-3 px-3 xs:px-2 sm:px-4 flex flex-row gap-2 xs:gap-1.5 sm:gap-3 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
              <div className="text-black text-opacity-40 text-left font-normal text-sm xs:text-xs sm:text-[1rem] relative flex-1">
                Enter your email address
              </div>
              <img 
                src={frame1} 
                alt="" 
                className="shrink-0 w-5 xs:w-4 sm:w-6 h-5 xs:h-4 sm:h-6 relative overflow-visible" 
              />
            </div>
            <button className="btn btn-secondary">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 pt-8 xs:pt-6 sm:pt-12 pb-6 xs:pb-4 sm:pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 xs:gap-4 sm:gap-8 mb-6 xs:mb-4 sm:mb-8">
            <div className="md:col-span-2">
              <h3 className="text-xl xs:text-lg sm:text-xl md:text-xl font-bold mb-3 xs:mb-2 sm:mb-4">SHOP.CO</h3>
              <p className="text-gray-600 mb-3 xs:mb-2 sm:mb-4 text-sm xs:text-xs sm:text-base">
                We have clothes that suits your style and which you're proud to wear. 
                From women to men.
              </p>
              <div className="flex space-x-2 xs:space-x-1 sm:space-x-4">
                <img src={logoTwitter} alt="Twitter" className="w-5 xs:w-4 sm:w-6 h-5 xs:h-4 sm:h-6" />
                <img src={logoFb} alt="Facebook" className="w-5 xs:w-4 sm:w-6 h-5 xs:h-4 sm:h-6" />
                <img src={logoInstagram} alt="Instagram" className="w-5 xs:w-4 sm:w-6 h-5 xs:h-4 sm:h-6" />
                <img src={logoGithub} alt="GitHub" className="w-5 xs:w-4 sm:w-6 h-5 xs:h-4 sm:h-6" />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 xs:mb-2 sm:mb-4 text-sm xs:text-xs sm:text-base">Company</h4>
              <ul className="text-gray-600 space-y-1 xs:space-y-0.5 sm:space-y-2 text-sm xs:text-xs">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 xs:mb-2 sm:mb-4 text-sm xs:text-xs sm:text-base">Help</h4>
              <ul className="text-gray-600 space-y-1 xs:space-y-0.5 sm:space-y-2 text-sm xs:text-xs">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 xs:mb-2 sm:mb-4 text-sm xs:text-xs sm:text-base">FAQ</h4>
              <ul className="text-gray-600 space-y-1 xs:space-y-0.5 sm:space-y-2 text-sm xs:text-xs">
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-6 xs:pt-4 sm:pt-8 border-t border-gray-300">
            <div className="flex flex-col xs:flex-col sm:flex-row justify-between items-center">
              <div className="text-gray-600 mb-4 xs:mb-3 sm:mb-0 text-sm xs:text-xs">
                Shop.co © 2000-2023, All Rights Reserved
              </div>
              <div className="flex space-x-1 xs:space-x-0.5 sm:space-x-2">
                <img src={badge0} alt="Badge" className="w-6 xs:w-4 sm:w-8 h-6 xs:h-4 sm:h-8" />
                <img src={badge1} alt="Badge" className="w-6 xs:w-4 sm:w-8 h-6 xs:h-4 sm:h-8" />
                <img src={badge2} alt="Badge" className="w-6 xs:w-4 sm:w-8 h-6 xs:h-4 sm:h-8" />
                <img src={badge3} alt="Badge" className="w-6 xs:w-4 sm:w-8 h-6 xs:h-4 sm:h-8" />
                <img src={badge4} alt="Badge" className="w-6 xs:w-4 sm:w-8 h-6 xs:h-4 sm:h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;