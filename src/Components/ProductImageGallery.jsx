import React, { useState } from 'react';

const ProductImageGallery = ({ 
  images, 
  mainImageClassName = "bg-gradient-to-l from-[#f0eeed] to-[#f0eeed] rounded-[1.25rem] flex-1 h-[33.125rem] relative object-cover aspect-[444/530]",
  thumbnailClassName = "rounded-[1.25rem] border border-solid self-stretch flex-shrink-0 h-[10.4375rem] relative object-cover aspect-[152/167] cursor-pointer",
  selectedThumbnailClassName = "border-black",
  unselectedThumbnailClassName = "border-transparent"
}) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  
  return (
    <div className="flex flex-col md:flex-row gap-4 xs:gap-2 sm:gap-4 items-center justify-start w-full">
      {/* Desktop view - thumbnails on the left */}
      <div className="hidden md:flex md:flex-col md:gap-4 md:items-start md:justify-start md:w-24">
        {images.map((image, index) => (
          <img 
            key={index}
            className={`${thumbnailClassName} ${selectedImage === image ? selectedThumbnailClassName : unselectedThumbnailClassName}`} 
            src={image} 
            alt="" 
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      
      {/* Main image */}
      <img className={mainImageClassName} src={selectedImage} alt="" />
      
      {/* Mobile view - thumbnails below the main image and centered */}
      <div className="flex md:hidden flex-row gap-4 xs:gap-2 sm:gap-4 items-center justify-center w-full mt-4 overflow-x-auto">
        {images.map((image, index) => (
          <img 
            key={index}
            className={`rounded-xl border border-solid w-16 h-16 xs:w-12 xs:h-12 sm:w-20 sm:h-20 object-cover cursor-pointer flex-shrink-0 ${selectedImage === image ? 'border-black' : 'border-transparent'}`} 
            src={image} 
            alt="" 
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;