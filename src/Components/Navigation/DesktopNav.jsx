import React, { useState, memo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSearch } from '../../SearchContext';
import { useAuth } from '../../AuthContext';
import MobileNav from './MobileNav';
import hamburgerIcon from '../../assets/harmburger0.svg';
import searchIcon from '../../assets/search-780.svg';
import cartIcon from '../../assets/cart0.svg';
import profileIcon from '../../assets/profile0.svg';
import frameIcon from '../../assets/frame0.svg';
import frame054rt from '../../assets/Frame054rt.png';
import { useCart } from '../../CartContext';

// Memoized DesktopNav component to prevent unnecessary re-renders
const DesktopNav = memo(function DesktopNav() {
  const [searchInput, setSearchInput] = useState('');
  const { cartCount } = useCart();
  const { handleSearch } = useSearch();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      handleSearch(searchInput);
      navigate('/category');
    }
  };
  
  const handleLoginClick = () => {
    navigate('/login');
  };
  
  return (
    <div className="sticky top-0 z-50">
      {/* Top notification bar - hidden on mobile since MobileNav has its own */}
      {/* Hidden when user is logged in */}
      {!isAuthenticated && (
        <div className="bg-black py-2 px-4 hidden md:block">
          <div className="container mx-auto flex flex-wrap justify-between items-center">
            <div className="text-white text-sm xs:text-xs sm:text-sm">
              <span className="font-normal">Sign up and get 20% off to your first order. </span>
              <span 
                className="font-medium underline cursor-pointer"
                onClick={handleLoginClick}
              >
                Login Now
              </span>
            </div>
            <img src={frameIcon} alt="Close" className="w-5 h-5" />
          </div>
        </div>
      )}
      
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
                className="mr-2 w-6 h-6 cursor-pointer" 
                src={searchIcon}
                onClick={handleSearchSubmit}
              />
              <input 
                placeholder="Search for products..." 
                className="bg-transparent border-none outline-none w-full text-gray-500 text-sm xs:text-xs sm:text-sm" 
                type="text" 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleSearchSubmit}
              />
            </div>
            <div className="flex items-center space-x-3 xs:space-x-2 sm:space-x-4">
              <div className="relative">
                <img 
                  alt="Cart" 
                  className="w-5.5 h-5.5 xs:w-5.5 xs:h-5.5 cursor-pointer" 
                  src={cartIcon}
                />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )}
              </div>
              <Link to="/profile" className="relative">
                <img 
                  alt="Profile" 
                  className="w-5.5 h-5.5 xs:w-5.5 xs:h-5.5 cursor-pointer" 
                  src={profileIcon}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DesktopNav;
