import React from 'react';
import { useSearch } from '../SearchContext';
import EmailSubscription from '../Components/EmailSubscription';
import Pagination from '../Components/Pagination';

// Import images from assets folder
import frame0 from '../assets/frame0.svg';
import frame1 from '../assets/frame1.svg';
import frame12 from '../assets/frame12.svg';
import frameUpDown20 from '../assets/frame-9-ud-20.svg';
import frameUt0 from '../assets/frame-2-ut0.svg';
import frameAda0 from '../assets/frame-3-ada0.svg';
import frameEr0 from '../assets/frame-80-er0.svg';
import frame7 from '../assets/frame7.svg';
import frame100 from '../assets/frame-100.svg';
import frame101 from '../assets/frame-101.svg';
import frame102 from '../assets/frame-102.svg';
import frame103 from '../assets/frame-103.svg';
import frame104 from '../assets/frame-104.svg';
import frame105 from '../assets/frame-105.svg';
import frame106 from '../assets/frame-106.svg';
import frame107 from '../assets/frame-107.svg';
import frame108 from '../assets/frame-108.svg';
import image80 from '../assets/image-80.png';
import image90 from '../assets/image-90.png';
import image100 from '../assets/image-100.png';
import image81 from '../assets/image-81.png';
import image91 from '../assets/image-91.png';
import image101 from '../assets/image-101.png';
import image70 from '../assets/image-70.png';
import image82 from '../assets/image-82.png';
import image92 from '../assets/image-92.png';

// Color options for the filter
const colorOptions = [
  { name: 'Green', code: '#00c12b' },
  { name: 'Red', code: '#f50606' },
  { name: 'Yellow', code: '#f5dd06' },
  { name: 'Orange', code: '#f57906' },
  { name: 'Blue', code: '#06caf5' },
  { name: 'Dark Blue', code: '#063af5' },
  { name: 'Purple', code: '#7d06f5' },
  { name: 'Pink', code: '#f506a4' },
  { name: 'White', code: '#ffffff' },
];

// Product data
const products = [
  {
    id: 1,
    name: 'Gradient Graphic T-shirt',
    price: 145,
    originalPrice: null,
    discount: null,
    rating: 3.5,
    image: image80,
    category: 'T-shirts',
    colors: ['Green', 'Blue'],
    sizes: ['Small', 'Medium', 'Large'],
    style: 'Casual'
  },
  {
    id: 2,
    name: 'Polo with Tipping Details',
    price: 180,
    originalPrice: null,
    discount: null,
    rating: 4.5,
    image: image90,
    category: 'Shirts',
    colors: ['White', 'Blue'],
    sizes: ['Medium', 'Large', 'X-Large'],
    style: 'Casual'
  },
  {
    id: 3,
    name: 'Black Striped T-shirt',
    price: 120,
    originalPrice: 150,
    discount: 30,
    rating: 5.0,
    image: image100,
    category: 'T-shirts',
    colors: ['Black', 'White'],
    sizes: ['Small', 'Medium', 'Large'],
    style: 'Casual'
  },
  {
    id: 4,
    name: 'Skinny Fit Jeans',
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
    image: image81,
    category: 'Jeans',
    colors: ['Blue', 'Black'],
    sizes: ['Medium', 'Large', 'X-Large'],
    style: 'Casual'
  },
  {
    id: 5,
    name: 'Checkered Shirt',
    price: 180,
    originalPrice: null,
    discount: null,
    rating: 4.5,
    image: image91,
    category: 'Shirts',
    colors: ['Red', 'Blue'],
    sizes: ['Small', 'Medium', 'Large'],
    style: 'Formal'
  },
  {
    id: 6,
    name: 'Sleeve Striped T-shirt',
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    image: image101,
    category: 'T-shirts',
    colors: ['Orange', 'White'],
    sizes: ['Small', 'Medium'],
    style: 'Casual'
  },
  {
    id: 7,
    name: 'Vertical Striped Shirt',
    price: 212,
    originalPrice: 232,
    discount: 20,
    rating: 5.0,
    image: image70,
    category: 'Shirts',
    colors: ['Blue', 'White'],
    sizes: ['Medium', 'Large', 'X-Large'],
    style: 'Formal'
  },
  {
    id: 8,
    name: 'Courage Graphic T-shirt',
    price: 145,
    originalPrice: null,
    discount: null,
    rating: 4.0,
    image: image82,
    category: 'T-shirts',
    colors: ['Yellow', 'Green'],
    sizes: ['Small', 'Medium', 'Large'],
    style: 'Casual'
  },
  {
    id: 9,
    name: 'Loose Fit Bermuda Shorts',
    price: 80,
    originalPrice: null,
    discount: null,
    rating: 3.0,
    image: image92,
    category: 'Shorts',
    colors: ['Purple', 'Pink'],
    sizes: ['Medium', 'Large'],
    style: 'Casual'
  }
];

// Dress style options
const dressStyleOptions = ['Casual', 'Formal', 'Party', 'Gym'];

const Category = () => {
  const { searchQuery, isSearchActive } = useSearch();
  // State for pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 10;

  // State for sort and filters
  const [sortBy, setSortBy] = React.useState('Most Popular');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = React.useState(false);
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [priceRange, setPriceRange] = React.useState({ min: 50, max: 200 });
  const [selectedColors, setSelectedColors] = React.useState([]);
  const [selectedSizes, setSelectedSizes] = React.useState([]);
  const [selectedDressStyles, setSelectedDressStyles] = React.useState([]);
  
  // State for price range dragging
  const [isDragging, setIsDragging] = React.useState(false);
  const sliderRef = React.useRef(null);
  const dragTypeRef = React.useRef(null);
  const minPrice = 0;
  const maxPrice = 1000;
  const sliderWidth = 247;

  // State for mobile filters
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = React.useState(false);

  // Filter and sort products based on selected filters and sort option
  const filteredProducts = React.useMemo(() => {
    let filtered = products.filter(product => {
      // Search filter
      if (isSearchActive && searchQuery.trim()) {
        const searchLower = searchQuery.toLowerCase();
        if (!product.name.toLowerCase().includes(searchLower)) {
          return false;
        }
      }
      
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }
      
      // Price filter
      if (product.price < priceRange.min || product.price > priceRange.max) {
        return false;
      }
      
      // Color filter
      if (selectedColors.length > 0 && !product.colors.some(color => selectedColors.includes(color))) {
        return false;
      }
      
      // Size filter
      if (selectedSizes.length > 0 && !product.sizes.some(size => selectedSizes.includes(size))) {
        return false;
      }
      
      // Style filter
      if (selectedDressStyles.length > 0 && !selectedDressStyles.includes(product.style)) {
        return false;
      }
      
      return true;
    });

    // Sort products
    if (sortBy === 'Price: Low to High') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'Most Popular') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [selectedCategories, priceRange, selectedColors, selectedSizes, selectedDressStyles, sortBy, searchQuery, isSearchActive]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Here you would typically fetch new data for the page
    console.log(`Page changed to: ${page}`);
  };

  const handleSortChange = (option) => {
    setSortBy(option);
    setIsSortDropdownOpen(false);
    console.log(`Sorted by: ${option}`);
    // Here you would sort the products
  };

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleColorToggle = (color) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const handleSizeToggle = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const handleDressStyleToggle = (style) => {
    setSelectedDressStyles(prev =>
      prev.includes(style)
        ? prev.filter(s => s !== style)
        : [...prev, style]
    );
  };

  const handleApplyFilters = () => {
    console.log('Applied Filters:', {
      categories: selectedCategories,
      priceRange,
      colors: selectedColors,
      sizes: selectedSizes,
      dressStyles: selectedDressStyles,
      sortBy
    });
    // Here you would filter and sort the products
  };

  // Price slider drag functions
  const startDrag = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    dragTypeRef.current = type;
    setIsDragging(true);
  };

  const handleDrag = React.useCallback((e) => {
    if (!isDragging || !sliderRef.current || !dragTypeRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / sliderWidth));
    const value = Math.round(minPrice + percentage * (maxPrice - minPrice));

    setPriceRange(prev => {
      if (dragTypeRef.current === 'min') {
        return { ...prev, min: Math.min(value, prev.max - 10) };
      } else {
        return { ...prev, max: Math.max(value, prev.min + 10) };
      }
    });
  }, [isDragging]);

  const stopDrag = React.useCallback(() => {
    setIsDragging(false);
    dragTypeRef.current = null;
  }, []);

React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('mouseup', stopDrag);
      window.addEventListener('touchmove', handleDrag);
      window.addEventListener('touchend', stopDrag);
    }
    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchmove', handleDrag);
      window.removeEventListener('touchend', stopDrag);
    };
  }, [isDragging, handleDrag, stopDrag]);

  return (
    <div className="flex justify-center w-full">
      <div className="bg-[#ffffff] flex flex-col gap-6 items-stretch md:items-start justify-start w-full max-w-[1242px] relative px-4 md:px-8" style={{ paddingTop: '48px' }}>
      {/* Breadcrumb */}
      <div className="flex flex-row gap-3 items-center justify-start self-stretch shrink-0 relative">
        <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
          <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-base font-normal relative">
            Home
          </div>
          <img className="shrink-0 w-4 h-4 relative overflow-visible" src={frame0} alt="arrow" />
        </div>
        <div className="text-[#000000] text-left font-['Satoshi-Regular',_sans-serif] text-base font-normal relative">
          Casual
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-5 items-start justify-start self-stretch shrink-0 relative" style={{ overflowX: 'hidden' }}>
        {/* Mobile Filter Overlay */}
        {isMobileFiltersOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileFiltersOpen(false)}
          ></div>
        )}
        
        {/* Filters Sidebar */}
        <div className={`
          fixed md:relative top-0 right-0 h-[100dvh] md:h-auto w-[280px] md:w-[295px] max-w-[295px]
          bg-white md:bg-transparent z-50 md:z-auto overflow-y-auto md:overflow-visible
          transform transition-transform duration-300 ease-in-out
          ${isMobileFiltersOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          rounded-l-[20px] md:rounded-[20px] border-solid border-[rgba(0,0,0,0.10)] border pt-5 pr-6 pb-5 pl-6 flex flex-col gap-6 items-center justify-center md:items-start md:justify-start shrink-0
        `}>
          {/* Mobile Filters Header */}
          <div className="flex md:hidden flex-row items-center justify-between self-stretch shrink-0 relative mb-4 w-full">
            <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-xl font-bold relative flex items-center justify-start">
              Filters
            </div>
            <button 
              className="text-2xl font-bold p-2 -m-2"
              onClick={() => setIsMobileFiltersOpen(false)}
            >
              ×
            </button>
          </div>
          {/* Filters Header */}
          <div className="hidden md:flex flex-row items-center justify-between self-stretch shrink-0 relative">
            <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-xl font-bold relative flex items-center justify-start">
              Filters
            </div>
            <img className="shrink-0 w-6 h-6 relative overflow-visible" src={frame1} alt="filter" />
          </div>

          <div className="border-solid border-[rgba(0,0,0,0.10)] border-t border-r-[0] border-b-[0] border-l-[0] self-stretch shrink-0 h-0 relative" style={{ marginTop: '-1px', transformOrigin: '0 0', transform: 'rotate(0deg) scale(1, 1)' }}></div>

          {/* Categories */}
          <div className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
            {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((category) => (
              <div key={category} className="flex flex-row items-center justify-between self-stretch shrink-0 h-[22px] relative">
                <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-base font-normal relative">
                  {category}
                </div>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                  className="shrink-0 w-4 h-4"
                />
              </div>
            ))}
          </div>

          <div className="border-solid border-[rgba(0,0,0,0.10)] border-t border-r-[0] border-b-[0] border-l-[0] self-stretch shrink-0 h-0 relative" style={{ marginTop: '-1px', transformOrigin: '0 0', transform: 'rotate(0deg) scale(1, 1)' }}></div>

          {/* Price Filter */}
          <div className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
            <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
              <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-xl font-bold relative flex items-center justify-start">
                Price
              </div>
              <img className="flex flex-col gap-2.5 items-center justify-center shrink-0 w-5 h-[18.13px] relative overflow-visible" style={{ aspectRatio: '20/18.13' }} src={frameUpDown20} alt="expand" />
            </div>
            <div className="flex flex-col gap-1 items-center justify-start self-stretch shrink-0 relative">
              <div 
                className="self-stretch shrink-0 h-5 relative"
                ref={sliderRef}
              >
                <div className="bg-[#f0f0f0] rounded-[20px] w-full h-1.5 absolute left-0 top-2"></div>
                <div 
                  className="bg-[#000000] rounded-[20px] h-1.5 absolute top-2"
                  style={{
                    left: `${((priceRange.min - minPrice) / (maxPrice - minPrice)) * sliderWidth}px`,
                    width: `${((priceRange.max - priceRange.min) / (maxPrice - minPrice)) * sliderWidth}px`
                  }}
                ></div>
                <div
                  className="bg-[#000000] rounded-[50%] w-5 h-5 absolute top-0 cursor-pointer transform -translate-x-1/2 hover:scale-110 transition-transform"
                  style={{ left: `${((priceRange.min - minPrice) / (maxPrice - minPrice)) * sliderWidth}px` }}
                  onMouseDown={(e) => startDrag(e, 'min')}
                  onTouchStart={(e) => startDrag(e, 'min')}
                ></div>
                <div
                  className="bg-[#000000] rounded-[50%] w-5 h-5 absolute top-0 cursor-pointer transform -translate-x-1/2 hover:scale-110 transition-transform"
                  style={{ left: `${((priceRange.max - minPrice) / (maxPrice - minPrice)) * sliderWidth}px` }}
                  onMouseDown={(e) => startDrag(e, 'max')}
                  onTouchStart={(e) => startDrag(e, 'max')}
                ></div>
              </div>
              <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                <div className="text-[#000000] text-left font-['Satoshi-Medium',_sans-serif] text-sm font-medium relative">
                  ${priceRange.min}
                </div>
                <div className="text-[#000000] text-center font-['Satoshi-Medium',_sans-serif] text-sm font-medium relative">
                  ${priceRange.max}
                </div>
              </div>
            </div>
          </div>

          <div className="border-solid border-[rgba(0,0,0,0.10)] border-t border-r-[0] border-b-[0] border-l-[0] self-stretch shrink-0 h-0 relative" style={{ marginTop: '-1px', transformOrigin: '0 0', transform: 'rotate(0deg) scale(1, 1)' }}></div>

          {/* Colors Filter */}
          <div className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
            <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
              <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-xl font-bold relative flex items-center justify-start">
                Colors
              </div>
              <img className="flex flex-col gap-2.5 items-center justify-center shrink-0 w-5 h-[18.13px] relative overflow-visible" style={{ aspectRatio: '20/18.13' }} src={frameUt0} alt="expand" />
            </div>
            <div className="flex flex-col gap-4 items-start justify-start self-stretch shrink-0 relative">
              <div className="flex flex-row gap-4 items-center justify-start flex-wrap content-start self-stretch shrink-0 relative">
                {colorOptions.slice(0, 3).map((color) => {
                  const isSelected = selectedColors.includes(color.name);
                  return (
                    <div
                      key={color.name}
                      className="relative shrink-0 w-[37px] h-[37px] cursor-pointer"
                      onClick={() => handleColorToggle(color.name)}
                    >
                      <div
                        className={`rounded-[50%] border-solid border-2 w-[37px] h-[37px] transition-all ${
                          isSelected ? 'border-[#000000] scale-110' : 'border-[rgba(0,0,0,0.20)]'
                        }`}
                        style={{ backgroundColor: color.code }}
                      ></div>
                      {isSelected && (
                        <img
                          className="w-4 h-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-visible pointer-events-none"
                          src={frame7}
                          alt="check"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row gap-4 items-center justify-start flex-wrap content-start self-stretch shrink-0 relative">
                {colorOptions.slice(3, 6).map((color) => {
                  const isSelected = selectedColors.includes(color.name);
                  return (
                    <div
                      key={color.name}
                      className="relative shrink-0 w-[37px] h-[37px] cursor-pointer"
                      onClick={() => handleColorToggle(color.name)}
                    >
                      <div
                        className={`rounded-[50%] border-solid border-2 w-[37px] h-[37px] transition-all ${
                          isSelected ? 'border-[#000000] scale-110' : 'border-[rgba(0,0,0,0.20)]'
                        }`}
                        style={{ backgroundColor: color.code }}
                      ></div>
                      {isSelected && (
                        <img
                          className="w-4 h-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-visible pointer-events-none"
                          src={frame7}
                          alt="check"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row gap-4 items-center justify-start flex-wrap content-start self-stretch shrink-0 relative">
                {colorOptions.slice(6, 9).map((color) => {
                  const isSelected = selectedColors.includes(color.name);
                  return (
                    <div
                      key={color.name}
                      className="relative shrink-0 w-[37px] h-[37px] cursor-pointer"
                      onClick={() => handleColorToggle(color.name)}
                    >
                      <div
                        className={`rounded-[50%] border-solid border-2 w-[37px] h-[37px] transition-all ${
                          isSelected ? 'border-[#000000] scale-110' : 'border-[rgba(0,0,0,0.20)]'
                        }`}
                        style={{ backgroundColor: color.code }}
                      ></div>
                      {isSelected && (
                        <img
                          className="w-4 h-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-visible pointer-events-none"
                          src={frame7}
                          alt="check"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-solid border-[rgba(0,0,0,0.10)] border-t border-r-[0] border-b-[0] border-l-[0] self-stretch shrink-0 h-0 relative" style={{ marginTop: '-1px', transformOrigin: '0 0', transform: 'rotate(0deg) scale(1, 1)' }}></div>

          {/* Size Filter */}
          <div className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
            <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
              <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-xl font-bold relative flex items-center justify-start">
                Size
              </div>
              <img className="flex flex-col gap-2.5 items-center justify-center shrink-0 w-5 h-[18.13px] relative overflow-visible" style={{ aspectRatio: '20/18.13' }} src={frameAda0} alt="expand" />
            </div>
            <div className="flex flex-row gap-2 items-start justify-start flex-wrap content-start self-stretch shrink-0 relative">
              {[
                'XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'
              ].map((size) => (
                <div
                  key={size}
                  className={`rounded-[62px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row gap-3 items-center justify-center shrink-0 relative overflow-hidden cursor-pointer ${
                    selectedSizes.includes(size) ? 'bg-[#000000]' : 'bg-[#f0f0f0]'
                  }`}
                  onClick={() => handleSizeToggle(size)}
                >
                  <div className={`text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative ${
                    selectedSizes.includes(size) ? 'text-[#ffffff] font-medium' : 'text-[rgba(0,0,0,0.60)]'
                  }`}>
                    {size}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-solid border-[rgba(0,0,0,0.10)] border-t border-r-[0] border-b-[0] border-l-[0] self-stretch shrink-0 h-0 relative" style={{ marginTop: '-1px', transformOrigin: '0 0', transform: 'rotate(0deg) scale(1, 1)' }}></div>

          {/* Dress Style Filter */}
          <div className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
            <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
              <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-xl font-bold relative flex items-center justify-start">
                Dress Style
              </div>
              <img className="flex flex-col gap-2.5 items-center justify-center shrink-0 w-5 h-[18.13px] relative overflow-visible" style={{ aspectRatio: '20/18.13' }} src={frameEr0} alt="expand" />
            </div>
            <div className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
              {dressStyleOptions.map((style) => (
                <div key={style} className="flex flex-row items-center justify-between self-stretch shrink-0 h-[22px] relative">
                  <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-base font-normal relative">
                    {style}
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedDressStyles.includes(style)}
                    onChange={() => handleDressStyleToggle(style)}
                    className="shrink-0 w-4 h-4"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Apply Filter Button */}
          <div
            className="bg-[#000000] rounded-[62px] pt-4 pr-[54px] pb-4 pl-[54px] flex flex-row gap-3 items-center justify-center self-stretch shrink-0 h-12 relative overflow-hidden cursor-pointer hover:bg-[#333333] transition-colors"
            onClick={handleApplyFilters}
          >
            <div className="text-[#ffffff] text-left font-['Satoshi-Medium',_sans-serif] text-sm font-medium relative">
              Apply Filter
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex flex-col h-full gap-4 items-stretch justify-start flex-1 relative w-full">
          {/* Header */}
          <div className="flex flex-row items-center justify-center md:justify-between self-stretch shrink-0 relative">
            <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-2xl md:text-[32px] font-bold relative flex items-center justify-start">
              {isSearchActive ? `Search Results for "${searchQuery}"` : 'Casual'}
            </div>
            <div className="flex flex-row gap-3 items-center justify-end flex-1 relative">
              {/* Mobile Filter Toggle */}
              <button
                className="md:hidden bg-[#000000] text-white rounded-md px-3 py-2 text-sm font-medium"
                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              >
                Filters
              </button>
              <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-sm md:text-base font-normal relative hidden md:block">
                Showing 1-10 of 100 Products
              </div>
              <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
                <div className="text-left font-['-',_sans-serif] text-sm md:text-base font-normal relative">
                  <span>
                    <span className="sort-by-most-popular-span">Sort by:</span>
                    <span className="sort-by-most-popular-span2">{sortBy}</span>
                  </span>
                </div>
                <img
                  className="shrink-0 w-4 h-4 relative overflow-visible cursor-pointer"
                  src={frame12}
                  alt="dropdown"
                  onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                />
                {isSortDropdownOpen && (
                  <div className="absolute top-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <div
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSortChange('Most Popular')}
                    >
                      Most Popular
                    </div>
                    <div
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSortChange('Price: Low to High')}
                    >
                      Price: Low to High
                    </div>
                    <div
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSortChange('Price: High to Low')}
                    >
                      Price: High to Low
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-stretch">
              {filteredProducts.map((product) => (
                <div key={product.id} className="flex flex-col gap-4 items-start justify-start w-full relative">
                  <div className="bg-[#f0eeed] rounded-[20px] self-stretch shrink-0 h-[298px] relative overflow-hidden flex items-center justify-center">
                    <img 
                      className="w-full h-full object-cover md:object-contain md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[296px] md:max-h-[444px]" 
                      src={product.image} 
                      alt={product.name} 
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
                    <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-xl font-bold relative self-stretch flex items-center justify-start">
                      {product.name}
                    </div>
                    <div className="flex flex-row gap-[13px] items-center justify-start shrink-0 relative">
                      <div className="flex flex-row gap-[5.31px] items-start justify-start shrink-0 h-[auto] relative overflow-visible">
                        {/* Rating stars */}
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                            ★
                          </div>
                        ))}
                      </div>
                      <div className="text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                        {product.rating}/5
                      </div>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative">
                      <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-2xl font-bold relative flex items-center justify-start">
                        ${product.price}
                      </div>
                      {product.originalPrice && (
                        <>
                          <div className="text-[rgba(0,0,0,0.40)] text-left font-['Satoshi-Bold',_sans-serif] text-2xl font-bold relative flex items-center justify-start" style={{ textDecoration: 'line-through' }}>
                            ${product.originalPrice}
                          </div>
                          <div className="bg-[rgba(255,51,51,0.10)] rounded-[62px] pt-1.5 pr-3.5 pb-1.5 pl-3.5 flex flex-row gap-3 items-center justify-center shrink-0 w-[58px] relative overflow-hidden">
                            <div className="text-[#ff3333] text-left font-['Satoshi-Medium',_sans-serif] text-xs font-medium relative">
                              -{product.discount}%
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-2xl font-bold mb-2">
                No Products Found
              </div>
              <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-base font-normal max-w-md">
                We couldn't find any products matching your current filters. Try adjusting your search criteria.
              </div>
            </div>
          )}
          
          {/* Pagination */}
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      
      {/* Email Subscription */}
      <EmailSubscription />
      </div>
    </div>
  );
};

export default Category;
