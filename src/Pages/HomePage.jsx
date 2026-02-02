import React from 'react';
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

import frame0 from '../assets/frame0.svg';
import frame1 from '../assets/frame1.svg';
import frame2 from '../assets/frame2.svg';
import frame3 from '../assets/frame3.svg';
import frame100 from '../assets/frame-100.svg';
import frame101 from '../assets/frame-101.svg';
import frame102 from '../assets/frame-102.svg';
import frame103 from '../assets/frame-103.svg';
import frame104 from '../assets/frame-104.svg';
import frame108 from '../assets/frame-108.svg';
import arrowDownBold1 from '../assets/arrow-down-bold-10.svg';
import arrowDownBold2 from '../assets/arrow-down-bold-20.svg';
import group0 from '../assets/group0.svg';
import versaceLogo from '../assets/versace-22.png';
import zaraLogo from '../assets/zara-logo-1-10.svg';
import gucciLogo from '../assets/gucci-logo-1-10.svg';
import calvinKleinLogo from '../assets/calvin-klein-33.png';

// Import components
import ProductCard from '../Components/ProductCard';
import CustomerReview from '../Components/CustomerReview';
import EmailSubscription from '../Components/EmailSubscription';

const HomePage = () => {
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
  


  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 xs:py-6 sm:py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl xs:text-2xl sm:text-4xl md:text-5xl font-bold mb-4 xs:mb-2 sm:mb-4">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-gray-600 mb-6 xs:mb-4 sm:mb-6 md:mb-8 text-sm xs:text-xs sm:text-base">
              Browse through our diverse range of meticulously crafted garments, 
              designed to bring out your individuality and style.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/product-details" className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition duration-300">
                View Product Details
              </a>
              <button className="border border-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition duration-300">
                Shop Now
              </button>
            </div>
            
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
            <img src={versaceLogo} alt="Versace" className="mx-2 xs:mx-1 sm:mx-4 my-2 w-20 xs:w-16 sm:w-24 md:w-28" />
            <img src={zaraLogo} alt="Zara" className="mx-2 xs:mx-1 sm:mx-4 my-2 w-16 xs:w-12 sm:w-20 md:w-24" />
            <img src={gucciLogo} alt="Gucci" className="mx-2 xs:mx-1 sm:mx-4 my-2 w-20 xs:w-16 sm:w-24 md:w-28" />
            <div className="mx-2 xs:mx-1 sm:mx-4 my-2">
              <img src={group0} alt="Prada" className="mx-2 xs:mx-1 sm:mx-4 my-2 w-24 xs:w-20 sm:w-28 md:w-32" />
            </div>
            <img src={calvinKleinLogo} alt="Calvin Klein" className="mx-2 xs:mx-1 sm:mx-4 my-2 w-20 xs:w-16 sm:w-24 md:w-28" />
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="container mx-auto px-4 mb-12 xs:mb-8 sm:mb-16">
        <h2 className="text-2xl xs:text-xl sm:text-2xl md:text-3xl font-bold mb-6 xs:mb-4 sm:mb-8">NEW ARRIVALS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-2 sm:gap-6 mb-6 xs:mb-4 sm:mb-8">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-2 sm:gap-6 mb-6 xs:mb-4 sm:mb-8">
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
      <EmailSubscription />
      

    </div>
  );
};

export default HomePage;