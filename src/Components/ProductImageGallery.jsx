import React, { useState } from 'react';

const ProductImageGallery = ({ 
  images, 
  mainImageClassName = "bg-gradient-to-l from-[#f0eeed] to-[#f0eeed] rounded-[1.25rem] flex-1 h-[33.125rem] relative object-cover aspect-[444/530]",
  thumbnailContainerClassName = "flex flex-col gap-[0.875rem] items-start justify-start flex-shrink-0 w-[9.5rem] relative",
  thumbnailClassName = "rounded-[1.25rem] border border-solid self-stretch flex-shrink-0 h-[10.4375rem] relative object-cover aspect-[152/167] cursor-pointer",
  selectedThumbnailClassName = "border-black",
  unselectedThumbnailClassName = "border-transparent"
}) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  
  return (
    <div className="flex flex-row gap-[0.875rem] items-center justify-start flex-wrap content-center flex-shrink-0 w-[38.125rem] h-[33.125rem] relative aspect-[610/530]">
      <div className={thumbnailContainerClassName}>
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
      <img className={mainImageClassName} src={selectedImage} alt="" />
    </div>
  );
};

export default ProductImageGallery;