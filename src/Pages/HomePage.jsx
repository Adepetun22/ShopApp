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
import frame105 from '../assets/frame-105.svg';
import frame106 from '../assets/frame-106.svg';
import frame107 from '../assets/frame-107.svg';
import frame108 from '../assets/frame-108.svg';
import frame109 from '../assets/frame-109.svg';
import frame110 from '../assets/frame-1010.svg';
import frame111 from '../assets/frame-1011.svg';
import frame112 from '../assets/frame-1012.svg';
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

// Import ProductCard component
import ProductCard from '../Components/ProductCard';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top notification bar */}
      <div className="bg-black py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-sm">
            <span className="font-normal">Sign up and get 20% off to your first order. </span>
            <span className="font-medium underline cursor-pointer">Sign Up Now</span>
          </div>
          <img src={frame561} alt="Close" className="w-5 h-5" />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="py-6 px-4 border-b">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <div className="text-3xl font-extrabold">SHOP.CO</div>
            <div className="hidden md:flex space-x-6">
              <div className="flex items-center">
                <span>Shop</span>
                <img src={frame0} alt="" className="ml-1 w-4 h-4" />
              </div>
              <span>On Sale</span>
              <span>New Arrivals</span>
              <span>Brands</span>
            </div>
          </div>

          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 flex-grow max-w-md mx-4">
            <img src={frame1} alt="" className="mr-2" />
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="bg-transparent border-none outline-none w-full text-gray-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <img src={frame78} alt="Cart" className="w-6 h-6" />
            <img src={frame091} alt="Profile" className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-gray-600 mb-8">
              Browse through our diverse range of meticulously crafted garments, 
              designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium mb-8">
              Shop Now
            </button>
            
            <div className="flex flex-wrap items-center justify-between">
              <div className="text-center mr-6 mb-4">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-gray-600">International Brands</div>
              </div>
              <div className="border-r h-12 mx-2"></div>
              <div className="text-center mr-6 mb-4">
                <div className="text-2xl font-bold">2,000+</div>
                <div className="text-gray-600">High-Quality Products</div>
              </div>
              <div className="border-r h-12 mx-2"></div>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold">30,000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <img src={backgroundImage} alt="Fashion models" className="w-full" />
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="bg-black py-8 mb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center">
            <img src={frame2} alt="Frame" className="mx-4 my-2" />
            <img src={zaraLogo} alt="Zara" className="mx-4 my-2" />
            <img src={gucciLogo} alt="Gucci" className="mx-4 my-2" />
            <div className="mx-4 my-2">
              <img src={group0} alt="Prada" className="mx-4 my-2" />
            </div>
            <img src={frame3} alt="Frame" className="mx-4 my-2" />
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-8">NEW ARRIVALS</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
          <button className="border border-black px-6 py-2 rounded-full font-medium">
            View All
          </button>
        </div>
      </div>

      {/* Top Selling Section */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-8">TOP SELLING</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
          <button className="border border-black px-6 py-2 rounded-full font-medium">
            View All
          </button>
        </div>
      </div>

      {/* Browse by Dress Style */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-gray-100 rounded-[2.5rem] py-16 px-16 flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-8 text-center">BROWSE BY DRESS STYLE</h2>
          
          <div className="flex flex-wrap justify-center gap-8 w-full">
            {/* Casual Card */}
            <div className="bg-white rounded-2xl overflow-hidden h-[289px] min-w-[200px] max-w-[407px] flex-1 relative">
              <img src={image112} alt="Casual" className="w-[60.8125rem] h-[40.5625rem] absolute right-[-25.75rem] top-[-7.625rem] object-cover transform origin-[0_0] scale-x-[-1]" />
              <div className="absolute top-[1.5625rem] left-[2.25rem] text-2xl font-bold">Casual</div>
            </div>
            
            {/* Formal Card */}
            <div className="bg-white rounded-2xl overflow-hidden h-[289px] min-w-[200px] flex-1 relative">
              <img src={image13} alt="Formal" className="w-[190.94%] h-[54.375rem] absolute right-[-105.94%] left-0 top-[-9.125rem] object-cover" />
              <div className="absolute top-[1.5625rem] left-[2.25rem] text-2xl font-bold">Formal</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 w-full mt-8">
            {/* Party Card */}
            <div className="bg-white rounded-2xl overflow-hidden h-[289px] min-w-[200px] flex-1 relative">
              <img src={image122} alt="Party" className="w-[112.57%] h-[38.5rem] absolute right-[-18.71%] left-[6.14%] top-[-10.1875rem] object-cover" />
              <div className="absolute top-[1.5625rem] left-[2.25rem] text-2xl font-bold">Party</div>
            </div>
            
            {/* Gym Card */}
            <div className="bg-white rounded-2xl overflow-hidden h-[289px] min-w-[200px] max-w-[407px] flex-1 relative">
              <img src={image14} alt="Gym" className="w-[111.06%] h-[42.3125rem] absolute right-[-24.08%] left-[13.02%] top-[-9.25rem] object-cover" />
              <div className="absolute top-[1.5625rem] left-[2.25rem] text-2xl font-bold">Gym</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Happy Customers */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col gap-8 items-start justify-start self-stretch flex-shrink-0 relative">
          <div className="flex flex-row items-center justify-between self-stretch flex-shrink-0 relative">
            <div className="text-black text-left text-[3rem] font-normal relative flex-1 flex items-center justify-start">
              OUR HAPPY CUSTOMERS
            </div>
            <div className="flex flex-row items-center justify-between flex-shrink-0 w-[4.5rem] relative">
              <img 
                src={arrowDownBold2} 
                alt="Previous" 
                className="flex-shrink-0 w-[1.75rem] h-[1.75rem] relative overflow-visible aspect-square" 
              />
              <img 
                src={arrowDownBold1} 
                alt="Next" 
                className="flex-shrink-0 w-[1.75rem] h-[1.75rem] relative overflow-visible aspect-square" 
              />
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center justify-start self-stretch flex-shrink-0 relative overflow-x-auto">
            {/* Customer 1 */}
            <div className="border border-gray-200 rounded-2xl p-7 flex flex-row gap-[21.375rem] flex-wrap content-start flex-shrink-0 w-[25rem] h-[15rem] relative overflow-hidden">
              <div className="flex flex-row items-start justify-between flex-1 relative">
                <div className="flex flex-col gap-[0.9375rem] items-start justify-start flex-1 relative">
                  <div className="flex flex-row gap-[0.405625rem] items-start justify-start flex-shrink-0 h-auto relative overflow-visible">
                    <img 
                      src={frame100} 
                      alt="Rating" 
                      className="flex-shrink-0 w-auto h-auto relative overflow-visible" 
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start self-stretch flex-shrink-0 relative">
                    <div className="flex flex-row gap-1 items-center justify-start flex-shrink-0 relative">
                      <div className="text-black text-left font-bold text-[1.25rem] leading-[1.375rem] relative">
                        Sarah M.
                      </div>
                      <img 
                        src={frame0} 
                        alt="Verified" 
                        className="flex-shrink-0 w-[1.5rem] h-[1.5rem] relative overflow-visible" 
                      />
                    </div>
                    <div className="text-black text-opacity-60 text-left font-normal text-[1rem] leading-[1.375rem] relative self-stretch">
                      "I'm blown away by the quality and style of the clothes I received from Shop.co. 
                      From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Customer 2 */}
            <div className="border border-gray-200 rounded-2xl p-7 flex flex-row gap-[21.375rem] flex-wrap content-start flex-shrink-0 w-[25rem] h-[15rem] relative overflow-hidden">
              <div className="flex flex-row items-start justify-between flex-1 relative">
                <div className="flex flex-col gap-[0.9375rem] items-start justify-start flex-1 relative">
                  <div className="flex flex-row gap-[0.405625rem] items-start justify-start flex-shrink-0 h-auto relative overflow-visible">
                    <img 
                      src={frame101} 
                      alt="Rating" 
                      className="flex-shrink-0 w-auto h-auto relative overflow-visible" 
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start self-stretch flex-shrink-0 relative">
                    <div className="flex flex-row gap-1 items-center justify-start flex-shrink-0 relative">
                      <div className="text-black text-left font-bold text-[1.25rem] leading-[1.375rem] relative">
                        Sarah M.
                      </div>
                      <img 
                        src={frame1} 
                        alt="Verified" 
                        className="flex-shrink-0 w-[1.5rem] h-[1.5rem] relative overflow-visible" 
                      />
                    </div>
                    <div className="text-black text-opacity-60 text-left font-normal text-[1rem] leading-[1.375rem] relative self-stretch">
                      "I'm blown away by the quality and style of the clothes I received from Shop.co. 
                      From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Customer 3 */}
            <div className="border border-gray-200 rounded-2xl p-7 flex flex-row gap-[21.375rem] flex-wrap content-start flex-shrink-0 w-[25rem] relative overflow-hidden">
              <div className="flex flex-row items-start justify-between flex-1 relative">
                <div className="flex flex-col gap-[0.9375rem] items-start justify-start flex-1 relative">
                  <div className="flex flex-row gap-[0.405625rem] items-start justify-start flex-shrink-0 h-auto relative overflow-visible">
                    <img 
                      src={frame102} 
                      alt="Rating" 
                      className="flex-shrink-0 w-auto h-auto relative overflow-visible" 
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start self-stretch flex-shrink-0 relative">
                    <div className="flex flex-row gap-1 items-center justify-start flex-shrink-0 relative">
                      <div className="text-black text-left font-bold text-[1.25rem] leading-[1.375rem] relative">
                        Alex K.
                      </div>
                      <img 
                        src={frame2} 
                        alt="Verified" 
                        className="flex-shrink-0 w-[1.5rem] h-[1.5rem] relative overflow-visible" 
                      />
                    </div>
                    <div className="text-black text-opacity-60 text-left font-normal text-[1rem] leading-[1.375rem] relative self-stretch">
                      "Finding clothes that align with my personal style used to be a challenge until I 
                      discovered Shop.co. The range of options they offer is truly remarkable, catering 
                      to a variety of tastes and occasions."
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Customer 4 */}
            <div className="border border-gray-200 rounded-2xl p-7 flex flex-row gap-[21.375rem] flex-wrap content-start flex-shrink-0 w-[25rem] relative overflow-hidden">
              <div className="flex flex-row items-start justify-between flex-1 relative">
                <div className="flex flex-col gap-[0.9375rem] items-start justify-start flex-1 relative">
                  <div className="flex flex-row gap-[0.405625rem] items-start justify-start flex-shrink-0 h-auto relative overflow-visible">
                    <img 
                      src={frame103} 
                      alt="Rating" 
                      className="flex-shrink-0 w-auto h-auto relative overflow-visible" 
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start self-stretch flex-shrink-0 relative">
                    <div className="flex flex-row gap-1 items-center justify-start flex-shrink-0 relative">
                      <div className="text-black text-left font-bold text-[1.25rem] leading-[1.375rem] relative">
                        James L.
                      </div>
                      <img 
                        src={frame3} 
                        alt="Verified" 
                        className="flex-shrink-0 w-[1.5rem] h-[1.5rem] relative overflow-visible" 
                      />
                    </div>
                    <div className="text-black text-opacity-60 text-left font-normal text-[1rem] leading-[1.375rem] relative self-stretch">
                      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to 
                      have stumbled upon Shop.co. The selection of clothes is not only diverse but also 
                      on-point with the latest trends."
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Customer 5 */}
            <div className="border border-gray-200 rounded-2xl p-7 flex flex-row gap-[21.375rem] flex-wrap content-start flex-shrink-0 w-[25rem] relative overflow-hidden">
              <div className="flex flex-row items-start justify-between flex-1 relative">
                <div className="flex flex-col gap-[0.9375rem] items-start justify-start flex-1 relative">
                  <div className="flex flex-row gap-[0.405625rem] items-start justify-start flex-shrink-0 h-auto relative overflow-visible">
                    <img 
                      src={frame104} 
                      alt="Rating" 
                      className="flex-shrink-0 w-auto h-auto relative overflow-visible" 
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start self-stretch flex-shrink-0 relative">
                    <div className="flex flex-row gap-1 items-center justify-start flex-shrink-0 relative">
                      <div className="text-black text-left font-bold text-[1.25rem] leading-[1.375rem] relative">
                        Mooen
                      </div>
                      <img 
                        src={frame108} 
                        alt="Verified" 
                        className="flex-shrink-0 w-[1.5rem] h-[1.5rem] relative overflow-visible" 
                      />
                    </div>
                    <div className="text-black text-opacity-60 text-left font-normal text-[1rem] leading-[1.375rem] relative self-stretch">
                      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to 
                      have stumbled upon Shop.co. The selection of clothes is not only diverse but also 
                      on-point with the latest trends."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-black rounded-2xl py-9 px-16 flex flex-row flex-wrap content-center items-center justify-between self-stretch flex-shrink-0 relative overflow-hidden">
          <div className="text-white text-left text-[2.5rem] leading-[2.8125rem] font-normal relative flex-1 min-w-[18.125rem]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </div>
          <div className="flex flex-col gap-[0.875rem] flex-1 min-w-[17.5rem] max-w-[21.8125rem] relative">
            <div className="bg-white rounded-[3.875rem] py-3 px-4 flex flex-row gap-3 items-start justify-start self-stretch flex-shrink-0 relative overflow-hidden">
              <div className="text-black text-opacity-40 text-left font-normal text-[1rem] relative flex-1">
                Enter your email address
              </div>
              <img 
                src={frame1} 
                alt="" 
                className="flex-shrink-0 w-[1.5rem] h-[1.5rem] relative overflow-visible" 
              />
            </div>
            <div className="bg-white rounded-[3.875rem] py-3 px-4 flex flex-row gap-3 items-center justify-center self-stretch flex-shrink-0 relative overflow-hidden">
              <div className="text-black text-center font-medium text-[1rem] relative flex-1">
                Subscribe to Newsletter
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">SHOP.CO</h3>
              <p className="text-gray-600 mb-4">
                We have clothes that suits your style and which you're proud to wear. 
                From women to men.
              </p>
              <div className="flex space-x-4">
                <img src={logoTwitter} alt="Twitter" />
                <img src={logoFb} alt="Facebook" />
                <img src={logoInstagram} alt="Instagram" />
                <img src={logoGithub} alt="GitHub" />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="text-gray-600 space-y-2">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Help</h4>
              <ul className="text-gray-600 space-y-2">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">FAQ</h4>
              <ul className="text-gray-600 space-y-2">
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 mb-4 md:mb-0">
                Shop.co © 2000-2023, All Rights Reserved
              </div>
              <div className="flex space-x-2">
                <img src={badge0} alt="Badge" />
                <img src={badge1} alt="Badge" />
                <img src={badge2} alt="Badge" />
                <img src={badge3} alt="Badge" />
                <img src={badge4} alt="Badge" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;