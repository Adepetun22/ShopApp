import React, { memo } from 'react';
import logoTwitter from '../../assets/logo-twitter-20.svg';
import logoFb from '../../assets/logo-fb-simple-20.svg';
import logoInstagram from '../../assets/logo-instagram-10.svg';
import logoGithub from '../../assets/logo-github-10.svg';
import badge0 from '../../assets/badge0.svg';
import badge1 from '../../assets/badge1.svg';
import badge2 from '../../assets/badge2.svg';
import badge3 from '../../assets/badge3.svg';
import badge4 from '../../assets/badge4.svg';

// Memoized Footer component to prevent unnecessary re-renders
const Footer = memo(function Footer() {
  return (
    <div className="bg-gray-100 pt-8 xs:pt-6 sm:pt-12 pb-6 xs:pb-4 sm:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 xs:gap-4 sm:gap-8 mb-6 xs:mb-4 sm:mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl xs:text-lg sm:text-xl md:text-xl font-bold mb-3 xs:mb-2 sm:mb-4">SHOPPILE</h3>
            <p className="text-gray-600 mb-3 xs:mb-2 sm:mb-4 text-sm xs:text-xs sm:text-base">
              We have clothes that suits your style and which you're proud to wear. 
              From women to men.
            </p>
            <div className="flex space-x-2 xs:space-x-1 sm:space-x-4">
              <img alt="Twitter" className="w-5 xs:w-4 sm:w-6 h-5 xs:h-4 sm:h-6" src={logoTwitter} loading="lazy" decoding="async" />
              <img alt="Facebook" className="w-5 xs:w-4 sm:w-6 h-5 xs:h-4 sm:h-6" src={logoFb} loading="lazy" decoding="async" />
              <img alt="Instagram" className="w-5 xs:w-4 sm:w-6 h-5 xs:h-4 sm:h-6" src={logoInstagram} loading="lazy" decoding="async" />
              <img alt="GitHub" className="w-5 xs:w-4 sm:w-6 h-5 xs:h-4 sm:h-6" src={logoGithub} loading="lazy" decoding="async" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 xs:mb-2 sm:mb-4 text-sm xs:text-xs sm:text-base">Company</h4>
            <ul className="text-gray-600 space-y-1 xs:space-y-0.5 sm:space-y-2 text-sm xs:text-xs">
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">Works</li>
              <li className="cursor-pointer">Career</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 xs:mb-2 sm:mb-4 text-sm xs:text-xs sm:text-base">Help</h4>
            <ul className="text-gray-600 space-y-1 xs:space-y-0.5 sm:space-y-2 text-sm xs:text-xs">
              <li className="cursor-pointer">Customer Support</li>
              <li className="cursor-pointer">Delivery Details</li>
              <li className="cursor-pointer">Terms & Conditions</li>
              <li className="cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 xs:mb-2 sm:mb-4 text-sm xs:text-xs sm:text-base">FAQ</h4>
            <ul className="text-gray-600 space-y-1 xs:space-y-0.5 sm:space-y-2 text-sm xs:text-xs">
              <li className="cursor-pointer">Account</li>
              <li className="cursor-pointer">Manage Deliveries</li>
              <li className="cursor-pointer">Orders</li>
              <li className="cursor-pointer">Payments</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 xs:pt-4 sm:pt-8 border-t border-gray-300">
          <div className="flex flex-col xs:flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 xs:mb-3 sm:mb-0 text-sm xs:text-xs">
              SHOPPILE © 2000-2023, All Rights Reserved
            </div>
            <div className="flex space-x-1 xs:space-x-0.5 sm:space-x-2">
              <img alt="Badge" className="w-6 xs:w-4 sm:w-8 h-6 xs:h-4 sm:h-8" src={badge0} loading="lazy" decoding="async" />
              <img alt="Badge" className="w-6 xs:w-4 sm:w-8 h-6 xs:h-4 sm:h-8" src={badge1} loading="lazy" decoding="async" />
              <img alt="Badge" className="w-6 xs:w-4 sm:w-8 h-6 xs:h-4 sm:h-8" src={badge2} loading="lazy" decoding="async" />
              <img alt="Badge" className="w-6 xs:w-4 sm:w-8 h-6 xs:h-4 sm:h-8" src={badge3} loading="lazy" decoding="async" />
              <img alt="Badge" className="w-6 xs:w-4 sm:w-8 h-6 xs:h-4 sm:h-8" src={badge4} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;

