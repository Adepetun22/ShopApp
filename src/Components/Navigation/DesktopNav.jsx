import React from 'react';
import MobileNav from './MobileNav';
import hamburgerIcon from '../../assets/harmburger0.svg';
import searchIcon from '../../assets/search-780.svg';
import cartIcon from '../../assets/cart0.svg';
import profileIcon from '../../assets/profile0.svg';
import frameIcon from '../../assets/frame0.svg';
import frame054rt from '../../assets/Frame054rt.png';

const DesktopNav = () => {
  console.log('DesktopNav rendered');
  
  return (
    <div className="sticky top-0 z-50">
      {/* Top notification bar */}
      <div className="bg-black py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="text-white text-sm xs:text-xs sm:text-sm">
            <span className="font-normal">Sign up and get 20% off to your first order. </span>
            <span className="font-medium underline cursor-pointer">Sign Up Now</span>
          </div>
          <img src={frameIcon} alt="Close" className="w-5 h-5" />
        </div>
      </div>
      
      {/* Show MobileNav on tablet and mobile views (md and below) */}
      <div className="md:hidden">
        <MobileNav />
      </div>
      
      {/* Show DesktopNav on desktop views (lg and above) */}
      <div className="hidden md:block bg-green-100">
        <div className="py-4 xs:py-3 sm:py-5 px-4 border-b">
          <div className="container mx-auto flex flex-row items-center justify-between flex-wrap">
            <div className="flex items-center space-x-6 xs:space-x-4 sm:space-x-6 md:space-x-10 w-auto">
              <div className="text-2xl xs:text-xl sm:text-3xl font-extrabold">SHOP.CO</div>
              <div className="hidden md:flex space-x-4 xs:space-x-2 sm:space-x-4 md:space-x-6 w-auto">
                <div className="flex items-center">
                  <span className="text-sm xs:text-xs sm:text-sm">Shop</span>
                  <img 
                    alt="" 
                    className="ml-1 w-4 h-4" 
                    src={frame054rt}
                  />
                </div>
                <span className="text-sm xs:text-xs sm:text-sm">On Sale</span>
                <span className="text-sm xs:text-xs sm:text-sm">New Arrivals</span>
                <span className="text-sm xs:text-xs sm:text-sm">Brands</span>
              </div>
            </div>
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 xs:px-2 sm:px-4 py-1 xs:py-0.5 sm:py-2 w-full max-w-[400px] mx-2 xs:mx-1 sm:mx-4">
              <img 
                alt="" 
                className="mr-2 w-6 h-6" 
                src={searchIcon}
              />
              <input 
                placeholder="Search for products..." 
                className="bg-transparent border-none outline-none w-full text-gray-500 text-sm xs:text-xs sm:text-sm" 
                type="text" 
              />
            </div>
            <div className="flex items-center space-x-3 xs:space-x-2 sm:space-x-4">
              <img 
                alt="Cart" 
                className="w-5.5 h-5.5 xs:w-5.5 xs:h-5.5 cursor-pointer" 
                src={cartIcon}
              />
              <img 
                alt="Profile" 
                className="w-5.5 h-5.5 xs:w-5.5 xs:h-5.5 cursor-pointer" 
                src={profileIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;