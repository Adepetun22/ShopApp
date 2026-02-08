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

  // Complete product data for NEW ARRIVALS section
  const newArrivalsProducts = [
    {
      id: 1,
      name: "T-SHIRT WITH TAPE DETAILS",
      price: 120,
      originalPrice: null,
      discount: null,
      rating: { average: 4.5, count: 38 },
      description: "Premium cotton t-shirt with modern tape details. Perfect for casual wear with a stylish edge.",
      images: [{ url: image7 }],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "White", hex: "#FFFFFF" },
        { name: "Gray", hex: "#6B7280" }
      ],
      sizes: [
        { size: "XS", stock: 15 },
        { size: "S", stock: 25 },
        { size: "M", stock: 30 },
        { size: "L", stock: 20 },
        { size: "XL", stock: 10 }
      ],
      category: "T-shirts",
      style: "Casual",
      features: [
        "Premium 100% cotton",
        "Modern tape details",
        "Regular fit",
        "Crew neck",
        "Machine washable"
      ]
    },
    {
      id: 2,
      name: "SKINNY FIT JEANS",
      price: 240,
      originalPrice: 260,
      discount: 20,
      rating: { average: 4.5, count: 52 },
      description: "Slim-fitting jeans with a modern silhouette. Made from premium stretch denim for comfort and style.",
      images: [{ url: image82 }],
      colors: [
        { name: "Blue", hex: "#1E40AF" },
        { name: "Black", hex: "#000000" }
      ],
      sizes: [
        { size: "28", stock: 10 },
        { size: "30", stock: 15 },
        { size: "32", stock: 20 },
        { size: "34", stock: 18 },
        { size: "36", stock: 8 }
      ],
      category: "Jeans",
      style: "Casual",
      features: [
        "Premium stretch denim",
        "Skinny fit silhouette",
        "5-pocket styling",
        "Button fly",
        "Machine wash cold"
      ]
    },
    {
      id: 3,
      name: "CHECKERED SHIRT",
      price: 180,
      originalPrice: null,
      discount: null,
      rating: { average: 4.5, count: 28 },
      description: "Classic checkered shirt made from soft cotton. Versatile design perfect for casual or semi-formal occasions.",
      images: [{ url: image9 }],
      colors: [
        { name: "Red", hex: "#DC2626" },
        { name: "Navy", hex: "#1E3A8A" },
        { name: "White", hex: "#FFFFFF" }
      ],
      sizes: [
        { size: "S", stock: 12 },
        { size: "M", stock: 20 },
        { size: "L", stock: 18 },
        { size: "XL", stock: 10 },
        { size: "XXL", stock: 5 }
      ],
      category: "Shirts",
      style: "Casual",
      features: [
        "100% cotton flannel",
        "Classic checkered pattern",
        "Button-down collar",
        "Chest pocket",
        "Machine washable"
      ]
    },
    {
      id: 4,
      name: "SLEEVES STRIPED T-SHIRT",
      price: 130,
      originalPrice: 160,
      discount: 30,
      rating: { average: 4.5, count: 45 },
      description: "Stylish t-shirt with stripe details on sleeves. A modern twist on a classic design.",
      images: [{ url: image11 }],
      colors: [
        { name: "Green", hex: "#059669" },
        { name: "Blue", hex: "#2563EB" },
        { name: "White", hex: "#FFFFFF" }
      ],
      sizes: [
        { size: "XS", stock: 10 },
        { size: "S", stock: 18 },
        { size: "M", stock: 25 },
        { size: "L", stock: 22 },
        { size: "XL", stock: 12 }
      ],
      category: "T-shirts",
      style: "Casual",
      features: [
        "Premium cotton blend",
        "Striped sleeve details",
        "Regular fit",
        "Round neck",
        "Easy care"
      ]
    }
  ];

  // Complete product data for TOP SELLING section
  const topSellingProducts = [
    {
      id: 5,
      name: "VERTICAL STRIPED SHIRT",
      price: 212,
      originalPrice: 232,
      discount: 20,
      rating: { average: 5.0, count: 65 },
      description: "Elegant shirt with vertical stripes. Perfect for both office and casual settings.",
      images: [{ url: image86 }],
      colors: [
        { name: "Blue", hex: "#3B82F6" },
        { name: "White", hex: "#FFFFFF" },
        { name: "Navy", hex: "#1E3A5F" }
      ],
      sizes: [
        { size: "S", stock: 15 },
        { size: "M", stock: 22 },
        { size: "L", stock: 20 },
        { size: "XL", stock: 14 },
        { size: "XXL", stock: 8 }
      ],
      category: "Shirts",
      style: "Formal",
      features: [
        "Premium cotton fabric",
        "Vertical stripe pattern",
        "Slim fit",
        "Button-down collar",
        "Machine washable"
      ]
    },
    {
      id: 6,
      name: "COURAGE GRAPHIC T-SHIRT",
      price: 145,
      originalPrice: null,
      discount: null,
      rating: { average: 4.5, count: 42 },
      description: "Bold graphic t-shirt with inspiring design. Made from soft, breathable cotton.",
      images: [{ url: image92 }],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "White", hex: "#FFFFFF" },
        { name: "Yellow", hex: "#FACC15" }
      ],
      sizes: [
        { size: "XS", stock: 12 },
        { size: "S", stock: 20 },
        { size: "M", stock: 28 },
        { size: "L", stock: 24 },
        { size: "XL", stock: 16 }
      ],
      category: "T-shirts",
      style: "Casual",
      features: [
        "100% organic cotton",
        "Bold graphic print",
        "Relaxed fit",
        "Crew neck",
        "Eco-friendly printing"
      ]
    },
    {
      id: 7,
      name: "FADED SKINNY JEANS",
      price: 120,
      originalPrice: null,
      discount: null,
      rating: { average: 4.5, count: 36 },
      description: "Trendy skinny jeans with a faded wash. Comfortable stretch denim with a worn-in look.",
      images: [{ url: image12 }],
      colors: [
        { name: "Light Blue", hex: "#93C5FD" },
        { name: "Medium Blue", hex: "#60A5FA" }
      ],
      sizes: [
        { size: "26", stock: 8 },
        { size: "28", stock: 12 },
        { size: "30", stock: 18 },
        { size: "32", stock: 16 },
        { size: "34", stock: 10 },
        { size: "36", stock: 6 }
      ],
      category: "Jeans",
      style: "Casual",
      features: [
        "Stretch denim blend",
        "Skinny fit",
        "Faded wash details",
        "5-pocket styling",
        "Machine wash cold"
      ]
    },
    {
      id: 8,
      name: "LOOSE FIT BERMUDA SHORTS",
      price: 80,
      originalPrice: null,
      discount: null,
      rating: { average: 4.5, count: 29 },
      description: "Comfortable Bermuda shorts with a relaxed fit. Perfect for warm weather.",
      images: [{ url: image10 }],
      colors: [
        { name: "Khaki", hex: "#C4A35A" },
        { name: "Navy", hex: "#1E3A8A" },
        { name: "Black", hex: "#000000" }
      ],
      sizes: [
        { size: "S", stock: 14 },
        { size: "M", stock: 20 },
        { size: "L", stock: 18 },
        { size: "XL", stock: 12 }
      ],
      category: "Shorts",
      style: "Casual",
      features: [
        "Lightweight cotton blend",
        "Loose fit for comfort",
        "Elastic waistband",
        "Side pockets",
        "Machine washable"
      ]
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
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition duration-300 cursor-pointer">
                View Product Details
              </button>
              <button className="border border-black px-6 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition duration-300 cursor-pointer">
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
            <img 
              src={backgroundImage} 
              alt="Fashion models" 
              className="w-full" 
              loading="lazy" 
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Brand Logos */}
        <div className="bg-black py-6 xs:py-4 sm:py-8 mb-12 xs:mb-8 sm:mb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center">
            <img src={versaceLogo} alt="Versace" className="mx-2 xs:mx-1 sm:mx-4 my-2 w-20 xs:w-16 sm:w-24 md:w-28" loading="lazy" decoding="async" />
            <img src={zaraLogo} alt="Zara" className="mx-2 xs:mx-1 sm:mx-4 my-2 w-16 xs:w-12 sm:w-20 md:w-24" loading="lazy" decoding="async" />
            <img src={gucciLogo} alt="Gucci" className="mx-2 xs:mx-1 sm:mx-4 my-2 w-20 xs:w-16 sm:w-24 md:w-28" loading="lazy" decoding="async" />
            <div className="mx-2 xs:mx-1 sm:mx-4 my-2">
              <img src={group0} alt="Prada" className="mx-2 xs:mx-1 sm:mx-4 my-2 w-24 xs:w-20 sm:w-28 md:w-32" loading="lazy" decoding="async" />
            </div>
            <img src={calvinKleinLogo} alt="Calvin Klein" className="mx-2 xs:mx-1 sm:mx-4 my-2 w-20 xs:w-16 sm:w-24 md:w-28" loading="lazy" decoding="async" />
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
              {...newArrivalsProducts[0]}
              image={newArrivalsProducts[0].images[0].url}
              title={newArrivalsProducts[0].name}
              rating={`${newArrivalsProducts[0].rating.average}/5`}
              price={`$${newArrivalsProducts[0].price}`}
              originalPrice={newArrivalsProducts[0].originalPrice ? `$${newArrivalsProducts[0].originalPrice}` : null}
              discount={newArrivalsProducts[0].discount ? `-${newArrivalsProducts[0].discount}%` : null}
              product={newArrivalsProducts[0]}
            />
          </div>
          
          {/* Product 2 */}
          <div className="w-full">
            <ProductCard 
              {...newArrivalsProducts[1]}
              image={newArrivalsProducts[1].images[0].url}
              title={newArrivalsProducts[1].name}
              rating={`${newArrivalsProducts[1].rating.average}/5`}
              price={`$${newArrivalsProducts[1].price}`}
              originalPrice={newArrivalsProducts[1].originalPrice ? `$${newArrivalsProducts[1].originalPrice}` : null}
              discount={newArrivalsProducts[1].discount ? `-${newArrivalsProducts[1].discount}%` : null}
              product={newArrivalsProducts[1]}
            />
          </div>
          
          {/* Product 3 */}
          <div className="w-full">
            <ProductCard 
              {...newArrivalsProducts[2]}
              image={newArrivalsProducts[2].images[0].url}
              title={newArrivalsProducts[2].name}
              rating={`${newArrivalsProducts[2].rating.average}/5`}
              price={`$${newArrivalsProducts[2].price}`}
              originalPrice={newArrivalsProducts[2].originalPrice ? `$${newArrivalsProducts[2].originalPrice}` : null}
              discount={newArrivalsProducts[2].discount ? `-${newArrivalsProducts[2].discount}%` : null}
              product={newArrivalsProducts[2]}
            />
          </div>
          
          {/* Product 4 */}
          <div className="w-full">
            <ProductCard 
              {...newArrivalsProducts[3]}
              image={newArrivalsProducts[3].images[0].url}
              title={newArrivalsProducts[3].name}
              rating={`${newArrivalsProducts[3].rating.average}/5`}
              price={`$${newArrivalsProducts[3].price}`}
              originalPrice={newArrivalsProducts[3].originalPrice ? `$${newArrivalsProducts[3].originalPrice}` : null}
              discount={newArrivalsProducts[3].discount ? `-${newArrivalsProducts[3].discount}%` : null}
              product={newArrivalsProducts[3]}
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
              {...topSellingProducts[0]}
              image={topSellingProducts[0].images[0].url}
              title={topSellingProducts[0].name}
              rating={`${topSellingProducts[0].rating.average}/5`}
              price={`$${topSellingProducts[0].price}`}
              originalPrice={topSellingProducts[0].originalPrice ? `$${topSellingProducts[0].originalPrice}` : null}
              discount={topSellingProducts[0].discount ? `-${topSellingProducts[0].discount}%` : null}
              product={topSellingProducts[0]}
            />
          </div>
          
          {/* Product 2 */}
          <div className="w-full">
            <ProductCard 
              {...topSellingProducts[1]}
              image={topSellingProducts[1].images[0].url}
              title={topSellingProducts[1].name}
              rating={`${topSellingProducts[1].rating.average}/5`}
              price={`$${topSellingProducts[1].price}`}
              originalPrice={topSellingProducts[1].originalPrice ? `$${topSellingProducts[1].originalPrice}` : null}
              discount={topSellingProducts[1].discount ? `-${topSellingProducts[1].discount}%` : null}
              product={topSellingProducts[1]}
            />
          </div>
          
          {/* Product 3 */}
          <div className="w-full">
            <ProductCard 
              {...topSellingProducts[2]}
              image={topSellingProducts[2].images[0].url}
              title={topSellingProducts[2].name}
              rating={`${topSellingProducts[2].rating.average}/5`}
              price={`$${topSellingProducts[2].price}`}
              originalPrice={topSellingProducts[2].originalPrice ? `$${topSellingProducts[2].originalPrice}` : null}
              discount={topSellingProducts[2].discount ? `-${topSellingProducts[2].discount}%` : null}
              product={topSellingProducts[2]}
            />
          </div>
          
          {/* Product 4 */}
          <div className="w-full">
            <ProductCard 
              {...topSellingProducts[3]}
              image={topSellingProducts[3].images[0].url}
              title={topSellingProducts[3].name}
              rating={`${topSellingProducts[3].rating.average}/5`}
              price={`$${topSellingProducts[3].price}`}
              originalPrice={topSellingProducts[3].originalPrice ? `$${topSellingProducts[3].originalPrice}` : null}
              discount={topSellingProducts[3].discount ? `-${topSellingProducts[3].discount}%` : null}
              product={topSellingProducts[3]}
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
              <img src={image112} alt="Casual" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              <div className="absolute top-[1rem] xs:top-[0.75rem] sm:top-[1.5625rem] left-[1.5rem] xs:left-[1rem] sm:left-[2.25rem] text-xl xs:text-lg sm:text-2xl font-bold">Casual</div>
            </div>
            
            {/* Formal Card */}
            <div className="bg-white rounded-2xl overflow-hidden h-[200px] xs:h-[150px] sm:h-[289px] min-w-[150px] xs:min-w-[120px] sm:min-w-[200px] flex-1 relative">
              <img src={image13} alt="Formal" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              <div className="absolute top-[1rem] xs:top-[0.75rem] sm:top-[1.5625rem] left-[1.5rem] xs:left-[1rem] sm:left-[2.25rem] text-xl xs:text-lg sm:text-2xl font-bold">Formal</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 xs:gap-2 sm:gap-8 w-full mt-4 xs:mt-2 sm:mt-8">
            {/* Party Card */}
            <div className="bg-white rounded-2xl overflow-hidden h-[200px] xs:h-[150px] sm:h-[289px] min-w-[150px] xs:min-w-[120px] sm:min-w-[200px] flex-1 relative">
              <img src={image122} alt="Party" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              <div className="absolute top-[1rem] xs:top-[0.75rem] sm:top-[1.5625rem] left-[1.5rem] xs:left-[1rem] sm:left-[2.25rem] text-xl xs:text-lg sm:text-2xl font-bold">Party</div>
            </div>
            
            {/* Gym Card */}
            <div className="bg-white rounded-2xl overflow-hidden h-[200px] xs:h-[150px] sm:h-[289px] min-w-[150px] xs:min-w-[120px] sm:min-w-[200px] max-w-[300px] xs:max-w-[200px] sm:max-w-[407px] flex-1 relative">
              <img src={image14} alt="Gym" className="w-full h-full object-cover" loading="lazy" decoding="async" />
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