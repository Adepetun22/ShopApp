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
    <div className="flex flex-col md:flex-row gap-[0.875rem] items-center justify-start flex-wrap content-center flex-shrink-0 w-[38.125rem] h-auto md:h-[33.125rem] relative aspect-[610/530]">
      {/* Desktop view - thumbnails on the left */}
      <div className="hidden md:flex md:flex-col md:gap-[0.875rem] md:items-start md:justify-start md:flex-shrink-0 md:w-[9.5rem] md:relative">
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
      <div className="flex md:hidden flex-row gap-[0.875rem] items-center justify-center w-full mt-[0.875rem] overflow-x-auto">
        {images.map((image, index) => (
          <img 
            key={index}
            className={`${thumbnailClassName} ${selectedImage === image ? selectedThumbnailClassName : unselectedThumbnailClassName} flex-shrink-0`} 
            src={image} 
            alt="" 
            onClick={() => setSelectedImage(image)}
            style={{ width: '6rem', height: '6rem' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;