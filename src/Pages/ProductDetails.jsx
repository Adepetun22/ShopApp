import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { decodeId } from '../utils/hashIds';
import image2 from '../assets/image-2.png';
import image5 from '../assets/image-50.png';
import image6 from '../assets/image-60.png';
import image7 from '../assets/image-70.png';
import image8 from '../assets/image-80.png';
import image9 from '../assets/image-90.png';
import image10 from '../assets/image-100.png';
import CustomerReview from '../Components/CustomerReview';
import ProductCard from '../Components/ProductCard';
import ProductImageGallery from '../Components/ProductImageGallery';
import EmailSubscription from '../Components/EmailSubscription';
import arrowDownBold1 from '../assets/arrow-down-bold-10.svg';
import arrowDownBold2 from '../assets/arrow-down-bold-20.svg';
import frame0 from '../assets/frame0.svg';
import frame1 from '../assets/frame1.svg';
import frame2 from '../assets/frame2.svg';
import frame4 from '../assets/frame4.svg';
import frame5 from '../assets/frame5.svg';
import frame8 from '../assets/frame8.svg';
import frame9 from '../assets/frame9.svg';
import frame10 from '../assets/frame10.svg';
import frame11 from '../assets/frame11.svg';
import frame12 from '../assets/frame12.svg';
import frame101 from '../assets/frame-101.svg';
import frame102 from '../assets/frame-102.svg';
import frame103 from '../assets/frame-103.svg';
import frame104 from '../assets/frame-104.svg';
import frame105 from '../assets/frame-105.svg';
import { useCart } from '../CartContext';

// Fallback testimonials data
const fallbackTestimonials = [
  {
    id: 1,
    name: "Samantha D.",
    rating: frame101,
    verified: frame8,
    quote: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
  },
  {
    id: 2,
    name: "Alex M.",
    rating: frame102,
    verified: frame9,
    quote: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
  },
  {
    id: 3,
    name: "Ethan R.",
    rating: frame103,
    verified: frame10,
    quote: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
  },
  {
    id: 4,
    name: "Olivia P.",
    rating: frame104,
    verified: frame11,
    quote: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
  },
  {
    id: 5,
    name: "Liam K.",
    rating: frame105,
    verified: frame12,
    quote: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
  }
];

// Helper to get rating stars image based on rating value
const getRatingImage = (rating) => {
  if (rating >= 5) return frame101;
  if (rating >= 4) return frame102;
  if (rating >= 3) return frame103;
  if (rating >= 2) return frame104;
  return frame105;
};

const ProductDetails = () => {
  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const productId = searchParams.get('id');
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [selectedSize, setSelectedSize] = useState('Small');
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('gray');
  const [activeTab, setActiveTab] = useState('product-details');

  // Initialize product data from passed state or fetch from API
  useEffect(() => {
    // Check if product data was passed via navigation state
    const passedProduct = location.state?.product;
    
    if (passedProduct) {
      // Use passed product data directly
      setProduct(passedProduct);
      // Set default selected color based on product data
      if (passedProduct.colors && passedProduct.colors.length > 0) {
        setSelectedColor(passedProduct.colors[0].name);
      }
      // Set default selected size based on product data
      if (passedProduct.sizes && passedProduct.sizes.length > 0) {
        const firstSizeWithStock = passedProduct.sizes.find(s => s.stock > 0);
        if (firstSizeWithStock) {
          setSelectedSize(firstSizeWithStock.size);
        }
      }
      setLoading(false);
    } else {
      // Fetch product data from API if no state data
      const fetchProduct = async () => {
        setLoading(true);
        setError(null);
        try {
          // Decode the encoded ID
          const decodedProductId = decodeId(productId);
          
          if (decodedProductId === null) {
            setError('Invalid product ID');
            setLoading(false);
            return;
          }

          const response = await fetch(`/api/products/${decodedProductId}`);
          const data = await response.json();
          
          if (data.success) {
            setProduct(data.product);
            // Set default selected color based on product data
            if (data.product.colors && data.product.colors.length > 0) {
              setSelectedColor(data.product.colors[0].name);
            }
            // Set default selected size based on product data
            if (data.product.sizes && data.product.sizes.length > 0) {
              const firstSizeWithStock = data.product.sizes.find(s => s.stock > 0);
              if (firstSizeWithStock) {
                setSelectedSize(firstSizeWithStock.size);
              }
            }
          } else {
            setError(data.message || 'Product not found');
          }
        } catch (err) {
          setError('Failed to fetch product details');
          console.error('Error fetching product:', err);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [productId, location.state]);

  // Calculate discount percentage
  const calculateDiscount = (price, originalPrice) => {
    if (originalPrice && price < originalPrice) {
      return Math.round(((originalPrice - price) / originalPrice) * 100);
    }
    return null;
  };

  // Handle add to cart with fetched product data
  const handleAddToCart = () => {
    if (product) {
      const productForCart = {
        id: product._id || product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0]?.url || product.image || image2,
        selectedSize,
        selectedColor,
        quantity
      };
      addToCart(productForCart, quantity);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold mb-2">Oops!</h2>
        <p className="text-gray-600 mb-4">{error}</p>
        <a href="/" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
          Go Back Home
        </a>
      </div>
    );
  }

  // No product found
  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
        <p className="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
        <a href="/" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
          Go Back Home
        </a>
      </div>
    );
  }

  // Get product images for gallery
  const productImages = product.images && product.images.length > 0 
    ? product.images.map(img => img.url)
    : [image2, image5, image6];

  // Get discount percentage
  const discountPercentage = calculateDiscount(product.price, product.originalPrice);

  // Get rating image
  const ratingImage = getRatingImage(product.rating?.average || 0);

  // Handle size selection
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // Handle color selection
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 xs:py-2 sm:py-6">
        <div className="flex flex-row gap-3 items-center justify-start">
          <div className="flex flex-row gap-1 items-center justify-start">
            <div className="text-gray-600 text-sm xs:text-xs sm:text-base">Home</div>
            <img className="w-4 h-4" src={frame0} alt="" />
          </div>
          <div className="flex flex-row gap-1 items-center justify-start">
            <div className="text-gray-600 text-sm xs:text-xs sm:text-base">Shop</div>
            <img className="w-4 h-4 hidden" src={frame1} alt="" />
          </div>
          <div className="flex flex-row gap-1 items-center justify-start">
            <div className="text-gray-600 text-sm xs:text-xs sm:text-base">{product.category || 'Men'}</div>
            <img className="w-4 h-4" src={frame2} alt="" />
          </div>
          <div className="text-black text-sm xs:text-xs sm:text-base">{product.name}</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 xs:py-6 sm:py-10 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 xs:gap-6 sm:gap-8 items-start lg:items-start justify-start">
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2">
            <ProductImageGallery 
              images={productImages}
              mainImageClassName="bg-gray-100 rounded-xl w-full h-80 xs:h-64 sm:h-96 md:h-[530px] object-cover"
              thumbnailClassName="rounded-xl border border-solid w-full h-24 xs:h-20 sm:h-28 object-cover cursor-pointer"
              selectedThumbnailClassName="border-black"
              unselectedThumbnailClassName="border-transparent"
            />
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-6 xs:gap-4 sm:gap-6 items-center lg:items-start">
              <div className="flex flex-col gap-4 xs:gap-3 items-center lg:items-start text-center lg:text-left">
                <h1 className="text-black text-center lg:text-left font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 xs:mb-2 sm:mb-4 leading-tight">
                  {product.name}
                </h1>
                
                <div className="flex flex-row gap-2 items-center justify-center lg:justify-start">
                  <img className="w-auto h-5" src={ratingImage} alt="Rating stars" />
                  <div className="flex items-center">
                    <span className="text-black text-sm xs:text-xs sm:text-sm">{product.rating?.average || 0}/</span>
                    <span className="text-gray-600 text-sm xs:text-xs sm:text-sm">5</span>
                  </div>
                </div>
                
                <div className="flex flex-row items-center justify-center lg:justify-start gap-4">
                  <div className="flex flex-row items-center justify-start gap-2">
                    <div className="text-black font-bold text-xl xs:text-lg sm:text-xl">${product.price}</div>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <div className="text-gray-600 text-base xs:text-sm sm:text-base line-through">${product.originalPrice}</div>
                    )}
                  </div>
                  {discountPercentage && (
                    <div className="bg-red-500 rounded-full px-3 py-1">
                      <div className="text-white text-sm xs:text-xs sm:text-sm">-{discountPercentage}%</div>
                    </div>
                  )}
                </div>
                
                <div className="text-gray-600 text-sm xs:text-xs sm:text-base max-w-md">
                  {product.description}
                </div>
              </div>
              
              <hr className="border-t border-gray-300 w-full" />
              
              {/* Colors */}
              <div className="flex flex-col gap-4 w-full items-center lg:items-start">
                <div className="text-[#969494] text-center lg:text-left font-sans font-medium text-base xs:text-sm">Select Colors</div>
                <div className="flex flex-row gap-3 items-center justify-center lg:justify-start">
                  {product.colors && product.colors.length > 0 ? (
                    product.colors.map((color, index) => (
                      <div 
                        key={index}
                        className="relative cursor-pointer"
                        onClick={() => handleColorClick(color.name)}
                      >
                        <div 
                          className="w-8 h-8 rounded-full"
                          style={{ backgroundColor: color.hex || '#gray' }}
                        ></div>
                        {selectedColor === color.name && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.5306 5.03081L6.5306 13.0308C6.46092 13.1007 6.37813 13.1562 6.28696 13.1941C6.1958 13.2319 6.09806 13.2514 5.99935 13.2514C5.90064 13.2514 5.8029 13.2319 5.71173 13.1941C5.62057 13.1562 5.53778 13.1007 5.4681 13.0308L1.9681 9.53081C1.89833 9.46105 1.84299 9.37823 1.80524 9.28707C1.76748 9.19592 1.74805 9.09823 1.74805 8.99956C1.74805 8.9009 1.76748 8.8032 1.80524 8.71205C1.84299 8.6209 1.89833 8.53808 1.9681 8.46831C2.03786 8.39855 2.12069 8.34321 2.21184 8.30545C2.30299 8.26769 2.40069 8.24826 2.49935 8.24826C2.59801 8.24826 2.69571 8.26769 2.78686 8.30545C2.87801 8.34321 2.96083 8.39855 3.0306 8.46831L5.99997 11.4377L13.4693 3.96956C13.6102 3.82867 13.8013 3.74951 14.0006 3.74951C14.1999 3.74951 14.391 3.82867 14.5318 3.96956C14.6727 4.11046 14.7519 4.30156 14.7519 4.50081C14.7519 4.70007 14.6727 4.89117 14.5318 5.03206L14.5306 5.03081Z" fill="white"/>
                            </svg>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    // Fallback colors if no colors in product
                    ['gray', 'blue', 'red'].map((color) => (
                      <div 
                        key={color}
                        className="relative cursor-pointer"
                        onClick={() => handleColorClick(color)}
                      >
                        <div 
                          className="w-8 h-8 rounded-full"
                          style={{ backgroundColor: color === 'gray' ? '#374151' : color === 'blue' ? '#3b82f6' : '#ef4444' }}
                        ></div>
                        {selectedColor === color && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.5306 5.03081L6.5306 13.0308C6.46092 13.1007 6.37813 13.1562 6.28696 13.1941C6.1958 13.2319 6.09806 13.2514 5.99935 13.2514C5.90064 13.2514 5.8029 13.2319 5.71173 13.1941C5.62057 13.1562 5.53778 13.1007 5.4681 13.0308L1.9681 9.53081C1.89833 9.46105 1.84299 9.37823 1.80524 9.28707C1.76748 9.19592 1.74805 9.09823 1.74805 8.99956C1.74805 8.9009 1.76748 8.8032 1.80524 8.71205C1.84299 8.6209 1.89833 8.53808 1.9681 8.46831C2.03786 8.39855 2.12069 8.34321 2.21184 8.30545C2.30299 8.26769 2.40069 8.24826 2.49935 8.24826C2.59801 8.24826 2.69571 8.26769 2.78686 8.30545C2.87801 8.34321 2.96083 8.39855 3.0306 8.46831L5.99997 11.4377L13.4693 3.96956C13.6102 3.82867 13.8013 3.74951 14.0006 3.74951C14.1999 3.74951 14.391 3.82867 14.5318 3.96956C14.6727 4.11046 14.7519 4.30156 14.7519 4.50081C14.7519 4.70007 14.6727 4.89117 14.5318 5.03206L14.5306 5.03081Z" fill="white"/>
                            </svg>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
              
              <hr className="border-t border-gray-300 w-full" />
              
              {/* Sizes */}
              <div className="flex flex-col gap-4 xs:gap-3 w-full items-center lg:items-start">
                <div className="text-[#969494] text-center lg:text-left font-sans font-medium text-base xs:text-sm">Choose Size</div>
                <div className="flex flex-row gap-3 items-center justify-center lg:justify-start flex-wrap pb-6">
                  {product.sizes && product.sizes.length > 0 ? (
                    product.sizes.map((sizeObj, index) => (
                      <button 
                        key={index}
                        className={`border rounded-full px-4 py-2 xs:px-3 xs:py-1 sm:px-5 sm:py-3 transition-colors cursor-pointer ${selectedSize === sizeObj.size ? 'bg-black text-white' : 'border-gray-300 hover:border-black hover:bg-black hover:text-white'}`}
                        onClick={() => handleSizeClick(sizeObj.size)}
                      >
                        <span className="text-sm xs:text-xs sm:text-base">{sizeObj.size}</span>
                      </button>
                    ))
                  ) : (
                    // Fallback sizes
                    ['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
                      <button 
                        key={size}
                        className={`border rounded-full px-4 py-2 xs:px-3 xs:py-1 sm:px-5 sm:py-3 transition-colors cursor-pointer ${selectedSize === size ? 'bg-black text-white' : 'border-gray-300 hover:border-black hover:bg-black hover:text-white'}`}
                        onClick={() => handleSizeClick(size)}
                      >
                        <span className="text-sm xs:text-xs sm:text-base">{size}</span>
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>
            
            <hr className="border-t border-gray-300 w-full" />
            
            {/* Add to Cart */}
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center lg:justify-start w-full">
                <div className="flex flex-row items-center justify-between border border-gray-300 rounded-full p-3 xs:p-2 sm:p-3 min-w-[100px] xs:min-w-[80px] sm:min-w-[120px]">
                  <img 
                    className="w-5 h-5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 cursor-pointer" 
                    src={frame4} 
                    alt="Decrease quantity" 
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  />
                  <div className="text-black text-center text-lg xs:text-base sm:text-lg mx-4 xs:mx-2 sm:mx-4">{quantity}</div>
                  <img 
                    className="w-5 h-5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 cursor-pointer" 
                    src={frame5} 
                    alt="Increase quantity" 
                    onClick={() => setQuantity(prev => prev + 1)}
                  />
                </div>
                <button 
                  className="bg-black rounded-full px-8 py-3 xs:px-6 xs:py-2 sm:px-12 sm:py-4 w-full sm:w-[400px] cursor-pointer"
                  onClick={handleAddToCart}
                >
                  <div className="text-white text-center font-sans font-medium text-base xs:text-sm sm:text-base">Add to Cart</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs Section */}
        <div className="container mx-auto px-4 py-8 xs:py-6 sm:py-8">
          <div className="flex flex-row gap-6 xs:gap-4 sm:gap-8 items-center justify-center md:justify-start overflow-x-auto">
            <button 
              className={`pb-2 whitespace-nowrap cursor-pointer ${activeTab === 'product-details' ? 'border-b-2 border-black' : ''}`}
              onClick={() => setActiveTab('product-details')}
            >
              <div className={`${activeTab === 'product-details' ? 'text-black' : 'text-gray-600'} font-medium text-base xs:text-sm sm:text-base`}>Product Details</div>
            </button>
            <button 
              className={`pb-2 whitespace-nowrap cursor-pointer ${activeTab === 'reviews' ? 'border-b-2 border-black' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              <div className={`${activeTab === 'reviews' ? 'text-black' : 'text-gray-600'} font-medium text-base xs:text-sm sm:text-base`}>Rating & Reviews</div>
            </button>
            <button 
              className={`pb-2 whitespace-nowrap cursor-pointer ${activeTab === 'faqs' ? 'border-b-2 border-black' : ''}`}
              onClick={() => setActiveTab('faqs')}
            >
              <div className={`${activeTab === 'faqs' ? 'text-black' : 'text-gray-600'} font-medium text-base xs:text-sm sm:text-base`}>FAQs</div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="container mx-auto px-4 mb-12 xs:mb-8 sm:mb-16">
        {/* Product Details Content */}
        {activeTab === 'product-details' && (
          <div className="flex flex-col gap-6 xs:gap-4 sm:gap-8">
            <h2 className="text-2xl xs:text-xl sm:text-2xl md:text-3xl font-bold">Product Information</h2>
            <div className="flex flex-col sm:flex-row gap-8 xs:gap-4 sm:gap-8">
              <div className="flex-1">
                <h3 className="text-lg xs:text-base sm:text-xl font-bold mb-4">Product Details</h3>
                <p className="text-gray-600 text-base xs:text-sm sm:text-base leading-relaxed">
                  {product.description}
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-lg xs:text-base sm:text-xl font-bold mb-4">Features</h3>
                <ul className="list-disc pl-5 text-gray-600 text-base xs:text-sm sm:text-base space-y-2">
                  {product.features && product.features.length > 0 ? (
                    product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))
                  ) : (
                    <>
                      <li>Premium quality materials</li>
                      <li>Unique and stylish design</li>
                      <li>Available in multiple sizes and colors</li>
                      <li>Machine washable for easy care</li>
                      <li>Unisex fit for all genders</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg xs:text-base sm:text-xl font-bold mb-4">Material & Care</h3>
              <div className="flex flex-col sm:flex-row gap-6 xs:gap-4 sm:gap-6">
                <div className="flex-1">
                  <h4 className="font-semibold text-base xs:text-sm sm:text-base">Material</h4>
                  <p className="text-gray-600 text-base xs:text-sm sm:text-base">100% Premium Cotton</p>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-base xs:text-sm sm:text-base">Care Instructions</h4>
                  <p className="text-gray-600 text-base xs:text-sm sm:text-base">Machine wash cold, tumble dry low, iron on low heat if needed</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Reviews Content */}
        {activeTab === 'reviews' && (
          <CustomerReview 
            testimonials={fallbackTestimonials} 
            arrowDownBold1={arrowDownBold1} 
            arrowDownBold2={arrowDownBold2}
            title={`All Reviews (${product.rating?.count || 0})`} 
          />
        )}
        
        {/* FAQs Content */}
        {activeTab === 'faqs' && (
          <div className="flex flex-col gap-6 xs:gap-4 sm:gap-8">
            <h2 className="text-2xl xs:text-xl sm:text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg xs:text-base sm:text-xl font-semibold mb-2">What materials are used in this product?</h3>
                <p className="text-gray-600 text-base xs:text-sm sm:text-base">
                  Our {product.name} is made from premium materials, ensuring both comfort and durability. The fabric is specially treated to maintain its quality and look great for a long time.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg xs:text-base sm:text-xl font-semibold mb-2">How should I care for this product?</h3>
                <p className="text-gray-600 text-base xs:text-sm sm:text-base">
                  We recommend machine washing in cold water and tumble drying on low heat. Avoid using bleach or harsh detergents to preserve the quality.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg xs:text-base sm:text-xl font-semibold mb-2">What is the sizing guide?</h3>
                <p className="text-gray-600 text-base xs:text-sm sm:text-base">
                  Our products are designed with a regular fit. We recommend checking our sizing chart on the product page. If you prefer a looser fit, consider ordering one size up.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg xs:text-base sm:text-xl font-semibold mb-2">Can I return or exchange if the size doesn't fit?</h3>
                <p className="text-gray-600 text-base xs:text-sm sm:text-base">
                  Absolutely! We offer a 30-day return policy for unworn and unwashed items with tags attached. Please visit our Returns & Exchanges page for more information.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg xs:text-base sm:text-xl font-semibold mb-2">Is shipping free?</h3>
                <p className="text-gray-600 text-base xs:text-sm sm:text-base">
                  Yes! We offer free shipping on all orders over $50. For orders under $50, a flat shipping fee of $5.99 applies.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* You might also like section */}
      <div className="container mx-auto px-4 mb-12 xs:mb-8 sm:mb-16">
        <h2 className="text-2xl xs:text-xl sm:text-2xl md:text-3xl font-bold mb-6 xs:mb-4 sm:mb-8">You might also like</h2>
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-2 sm:gap-6">
          <ProductCard 
            image={image7}
            title="Polo with Contrast Trims"
            rating="4.0/5"
            price="$212"
            originalPrice="$242"
            discount="-20%"
          />
          
          <ProductCard 
            image={image8}
            title="Gradient Graphic T-shirt"
            rating="3.5/5"
            price="$145"
          />
          
          <ProductCard 
            image={image9}
            title="Polo with Tipping Details"
            rating="4.5/5"
            price="$180"
          />
          
          <ProductCard 
            image={image10}
            title="Black Striped T-shirt"
            rating="5.0/5"
            price="$120"
            originalPrice="$150"
            discount="-30%"
          />
        </div>
      </div>
      
      {/* Newsletter section */}
      <EmailSubscription />
    </div>
  );
};

export default ProductDetails;

