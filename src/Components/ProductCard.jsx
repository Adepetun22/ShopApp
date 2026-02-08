import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { encodeId } from '../utils/hashIds';

// Create a star rating component outside of the ProductCard component
const StarRating = () => (
  <svg width="80" height="15" viewBox="0 0 104 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 xs:mr-0.5 sm:mr-2">
    <path d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z" fill="#FFC633"/>
    <path d="M33.0468 0L35.666 5.63991L41.8393 6.38809L37.2848 10.6219L38.4809 16.7243L33.0468 13.701L27.6128 16.7243L28.8089 10.6219L24.2544 6.38809L30.4276 5.63991L33.0468 0Z" fill="#FFC633"/>
    <path d="M56.8487 0L59.4679 5.63991L65.6412 6.38809L61.0867 10.6219L62.2827 16.7243L56.8487 13.701L51.4147 16.7243L52.6107 10.6219L48.0562 6.38809L54.2295 5.63991L56.8487 0Z" fill="#FFC633"/>
    <path d="M80.6506 0L83.2698 5.63991L89.443 6.38809L84.8885 10.6219L86.0846 16.7243L80.6506 13.701L75.2165 16.7243L76.4126 10.6219L71.8581 6.38809L78.0314 5.63991L80.6506 0Z" fill="#FFC633"/>
    <path d="M98.5659 16.7243L104 13.701V0L101.381 5.63991L95.2075 6.38809L99.762 10.6219L98.5659 16.7243Z" fill="#FFC633"/>
  </svg>
);

// Memoized ProductCard component to prevent unnecessary re-renders
const ProductCard = memo(function ProductCard({ id, image, title, rating, price, originalPrice, discount, product, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (id) {
      const encodedProductId = encodeId(id);
      // Pass product data via state if available, otherwise navigate with just ID
      if (product) {
        navigate(`/ProductDetails?id=${encodedProductId}`, { state: { product } });
      } else {
        navigate(`/ProductDetails?id=${encodedProductId}`);
      }
    }
  };

  return (
    <div 
      className="flex flex-col gap-3 xs:gap-2 sm:gap-4 items-start justify-start shrink-0 w-full relative cursor-pointer"
      onClick={handleClick}
    >
      <div className="bg-[#f0eeed] rounded-xl xs:rounded-lg sm:rounded-2xl flex flex-row items-center justify-center self-stretch shrink-0 relative overflow-hidden w-full h-[298px]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover md:object-contain md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[296px] md:max-h-[444px]" 
          loading="lazy" 
          decoding="async"
        />
      </div>
      <div className="flex flex-col gap-1.5 xs:gap-1 sm:gap-2 items-start justify-start self-stretch shrink-0 relative w-full">
        <h3 className="text-black text-left font-bold text-base xs:text-sm sm:text-[1.25rem] relative self-stretch flex items-center justify-start">
          {title}
        </h3>
        <div className="flex flex-row gap-2 xs:gap-1.5 sm:gap-3.5 items-center justify-start shrink-0 relative">
          <div className="flex flex-row gap-0.331875 items-start justify-start shrink-0 h-auto relative overflow-visible">
            <StarRating />
          </div>
          <span className="text-left font-normal text-xs xs:text-[0.6rem] sm:text-[0.875rem] relative">
            <span className="text-black">{rating.split('/')[0]}</span>
            <span className="text-black text-opacity-60">/{rating.split('/')[1]}</span>
          </span>
        </div>
        <div className="flex flex-row gap-2 xs:gap-1.5 sm:gap-2.5 items-center justify-start shrink-0 relative flex-wrap">
          <div className="text-black text-left font-bold text-lg xs:text-base sm:text-[1.5rem] relative flex items-center justify-start">
            {price}
          </div>
          {originalPrice && (
            <>
              <div className="text-[#969494] text-left font-bold text-lg xs:text-base sm:text-[1.5rem] line-through relative flex items-center justify-start">
                {originalPrice}
              </div>
              {discount && (
                <div className="bg-red-500 bg-opacity-10 rounded-[3rem] xs:rounded-4xl sm:rounded-[3.875rem] py-1 xs:py-0.5 sm:py-1.5 px-2 xs:px-1.5 sm:px-3.5 flex flex-row gap-2 xs:gap-1 sm:gap-3 items-center justify-center shrink-0 relative overflow-hidden">
                  <div className="text-white text-left font-medium text-xs xs:text-[0.5rem] sm:text-[0.75rem] relative">
                    {discount}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
