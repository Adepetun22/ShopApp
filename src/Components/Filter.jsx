import React from 'react';
import frame1 from '../assets/frame1.svg';
import frame7 from '../assets/frame7.svg';
import frameUpDown20 from '../assets/frame-9-ud-20.svg';
import frameUt0 from '../assets/frame-2-ut0.svg';
import frameAda0 from '../assets/frame-3-ada0.svg';
import frameEr0 from '../assets/frame-80-er0.svg';

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

// Size options
const sizeOptions = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];

// Dress style options
const dressStyleOptions = ['Casual', 'Formal', 'Party', 'Gym'];

const Filter = ({ 
  selectedCategories = [],
  selectedColors = [],
  selectedSizes = [],
  selectedDressStyles = [],
  priceRange = { min: 0, max: 1000 },
  onCategoryToggle,
  onColorToggle,
  onSizeToggle,
  onDressStyleToggle,
  onPriceChange,
  onApplyFilter,
  isOpen = false
}) => {
  // State for price range dragging
  const [isDragging, setIsDragging] = React.useState(false);
  const sliderRef = React.useRef(null);
  const dragTypeRef = React.useRef(null);
  const minPrice = 0;
  const maxPrice = 1000;
  const sliderWidth = 247;

  const handleCategoryToggle = (category) => {
    if (onCategoryToggle) {
      onCategoryToggle(category);
    }
  };

  const handleColorToggle = (color) => {
    if (onColorToggle) {
      onColorToggle(color);
    }
  };

  const handleSizeToggle = (size) => {
    if (onSizeToggle) {
      onSizeToggle(size);
    }
  };

  const handleDressStyleToggle = (style) => {
    if (onDressStyleToggle) {
      onDressStyleToggle(style);
    }
  };

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

    if (onPriceChange) {
      if (dragTypeRef.current === 'min') {
        onPriceChange({ ...priceRange, min: Math.min(value, priceRange.max - 10) });
      } else {
        onPriceChange({ ...priceRange, max: Math.max(value, priceRange.min + 10) });
      }
    }
  }, [isDragging, priceRange, onPriceChange]);

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

  if (!isOpen) return null;

  return (
    <div className="rounded-[20px] border-solid border-[rgba(0,0,0,0.10)] border pt-5 pr-6 pb-5 pl-6 flex flex-col gap-6 items-start justify-start shrink-0 w-[295px] max-w-[295px] relative overflow-hidden bg-white">
      {/* Filters Header */}
      <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
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
              className="shrink-0 w-4 h-4 cursor-pointer"
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
            <div className="bg-[#f0f0f0] rounded-[20px] w-[247px] h-1.5 absolute left-0 top-2"></div>
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
          {sizeOptions.map((size) => (
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
                className="shrink-0 w-4 h-4 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Apply Filter Button */}
      <div
        className="bg-[#000000] rounded-[62px] pt-4 pr-[54px] pb-4 pl-[54px] flex flex-row gap-3 items-center justify-center self-stretch shrink-0 h-12 relative overflow-hidden cursor-pointer hover:bg-[#333333] transition-colors"
        onClick={onApplyFilter}
      >
        <div className="text-[#ffffff] text-left font-['Satoshi-Medium',_sans-serif] text-sm font-medium relative">
          Apply Filter
        </div>
      </div>
    </div>
  );
};

export default Filter;

