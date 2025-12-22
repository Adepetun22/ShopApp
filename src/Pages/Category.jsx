import React from 'react';
import EmailSubscription from '../Components/EmailSubscription';
import Pagination from '../Components/Pagination';

// Import images from assets folder
import frame0 from '../assets/frame0.svg';
import frame1 from '../assets/frame1.svg';
import frame2 from '../assets/frame2.svg';
import frame3 from '../assets/frame3.svg';
import frame4 from '../assets/frame4.svg';
import frame5 from '../assets/frame5.svg';
import frame6 from '../assets/frame6.svg';
import frame7 from '../assets/frame7.svg';
import frame8 from '../assets/frame8.svg';
import frame9 from '../assets/frame9.svg';
import frame10 from '../assets/frame10.svg';
import frame11 from '../assets/frame11.svg';
import frame12 from '../assets/frame12.svg';
import frameUpDown20 from '../assets/frame-9-ud-20.svg';
import frameUt0 from '../assets/frame-2-ut0.svg';
import frameAda0 from '../assets/frame-3-ada0.svg';
import frameEr0 from '../assets/frame-80-er0.svg';
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

const Category = () => {
  // State for pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Here you would typically fetch new data for the page
    console.log(`Page changed to: ${page}`);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="bg-[#ffffff] flex flex-col gap-6 items-start justify-start max-w-[1242px] relative" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
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
      <div className="flex flex-row gap-5 items-start justify-start self-stretch shrink-0 relative">
        {/* Filters Sidebar */}
        <div className="rounded-[20px] border-solid border-[rgba(0,0,0,0.10)] border pt-5 pr-6 pb-5 pl-6 flex flex-col gap-6 items-start justify-start shrink-0 w-[295px] max-w-[295px] relative overflow-hidden">
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
            <div className="flex flex-row items-center justify-between self-stretch shrink-0 h-[22px] relative">
              <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-base font-normal relative">
                T-shirts
              </div>
              <img className="shrink-0 w-4 h-4 relative overflow-visible" src={frame2} alt="arrow" />
            </div>
            <div className="flex flex-row items-center justify-between self-stretch shrink-0 h-[22px] relative">
              <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-base font-normal relative">
                Shorts
              </div>
              <img className="shrink-0 w-4 h-4 relative overflow-visible" src={frame3} alt="arrow" />
            </div>
            <div className="flex flex-row items-center justify-between self-stretch shrink-0 h-[22px] relative">
              <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-base font-normal relative">
                Shirts
              </div>
              <img className="shrink-0 w-4 h-4 relative overflow-visible" src={frame4} alt="arrow" />
            </div>
            <div className="flex flex-row items-center justify-between self-stretch shrink-0 h-[22px] relative">
              <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-base font-normal relative">
                Hoodie
              </div>
              <img className="shrink-0 w-4 h-4 relative overflow-visible" src={frame5} alt="arrow" />
            </div>
            <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
              <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-base font-normal relative">
                Jeans
              </div>
              <img className="shrink-0 w-4 h-4 relative overflow-visible" src={frame6} alt="arrow" />
            </div>
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
              <div className="self-stretch shrink-0 h-5 relative">
                <div className="bg-[#f0f0f0] rounded-[20px] w-[247px] h-1.5 absolute left-0 top-2"></div>
                <div className="bg-[#000000] rounded-[20px] w-[150.29px] h-1.5 absolute left-[43.13px] top-2"></div>
                <div className="bg-[#000000] rounded-[50%] w-5 h-5 absolute left-[41px] top-0"></div>
                <div className="bg-[#000000] rounded-[50%] w-5 h-5 absolute left-[187px] top-0"></div>
              </div>
              <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                <div className="text-[#000000] text-left font-['Satoshi-Medium',_sans-serif] text-sm font-medium relative">
                  $50
                </div>
                <div className="text-[#000000] text-center font-['Satoshi-Medium',_sans-serif] text-sm font-medium relative">
                  $200
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
              <div className="flex flex-row gap-y-4 items-center justify-between flex-wrap content-center self-stretch shrink-0 relative">
                <div className="shrink-0 w-[37px] h-[37px] static">
                  <div className="bg-[#00c12b] rounded-[50%] border-solid border-[rgba(0,0,0,0.20)] border-2 w-[37px] h-[37px] absolute left-0 top-0"></div>
                </div>
                <div className="bg-[#f50606] rounded-[50%] border-solid border-[rgba(0,0,0,0.20)] border shrink-0 w-[37px] h-[37px] relative"></div>
                <div className="bg-[#f5dd06] rounded-[50%] border-solid border-[rgba(0,0,0,0.20)] border shrink-0 w-[37px] h-[37px] relative"></div>
                <div className="bg-[#f57906] rounded-[50%] border-solid border-[rgba(0,0,0,0.20)] border shrink-0 w-[37px] h-[37px] relative"></div>
                <div className="bg-[#06caf5] rounded-[50%] border-solid border-[rgba(0,0,0,0.20)] border shrink-0 w-[37px] h-[37px] relative"></div>
              </div>
              <div className="flex flex-row gap-y-4 items-center justify-between flex-wrap content-center self-stretch shrink-0 relative">
                <div className="shrink-0 w-[37px] h-[37px] static">
                  <div className="bg-[#063af5] rounded-[50%] border-solid border-[rgba(0,0,0,0.20)] border-2 w-[37px] h-[37px] absolute left-0 top-0"></div>
                  <img className="w-4 h-4 absolute left-2.5 top-2.5 overflow-visible" src={frame7} alt="check" />
                </div>
                <div className="bg-[#7d06f5] rounded-[50%] border-solid border-[rgba(0,0,0,0.20)] border shrink-0 w-[37px] h-[37px] relative"></div>
                <div className="bg-[#f506a4] rounded-[50%] border-solid border-[rgba(0,0,0,0.20)] border shrink-0 w-[37px] h-[37px] relative"></div>
                <div className="bg-[#ffffff] rounded-[50%] border-solid border-[rgba(0,0,0,0.20)] border shrink-0 w-[37px] h-[37px] relative"></div>
                <div className="bg-[#000000] rounded-[50%] shrink-0 w-[37px] h-[37px] relative"></div>
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
              <div className="bg-[#f0f0f0] rounded-[62px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row gap-3 items-center justify-center shrink-0 relative overflow-hidden">
                <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                  XX-Small
                </div>
              </div>
              <div className="bg-[#f0f0f0] rounded-[62px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row gap-3 items-center justify-center shrink-0 relative overflow-hidden">
                <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                  X-Small
                </div>
              </div>
              <div className="bg-[#f0f0f0] rounded-[62px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row gap-3 items-center justify-center shrink-0 relative overflow-hidden">
                <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                  Small
                </div>
              </div>
              <div className="bg-[#f0f0f0] rounded-[62px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row gap-3 items-center justify-center shrink-0 relative overflow-hidden">
                <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                  Medium
                </div>
              </div>
              <div className="bg-[#000000] rounded-[62px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row gap-3 items-center justify-center shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Satoshi-Medium',_sans-serif] text-sm font-medium relative">
                  Large
                </div>
              </div>
              <div className="bg-[#f0f0f0] rounded-[62px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row gap-3 items-center justify-center shrink-0 relative overflow-hidden">
                <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                  X-Large
                </div>
              </div>
              <div className="bg-[#f0f0f0] rounded-[62px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row gap-3 items-center justify-center shrink-0 relative overflow-hidden">
                <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                  XX-Large
                </div>
              </div>
              <div className="bg-[#f0f0f0] rounded-[62px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row gap-3 items-center justify-center shrink-0 relative overflow-hidden">
                <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                  3X-Large
                </div>
              </div>
              <div className="bg-[#f0f0f0] rounded-[62px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row gap-3 items-center justify-center shrink-0 relative overflow-hidden">
                <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                  4X-Large
                </div>
              </div>
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
              <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-base font-normal relative">
                  Casual
                </div>
                <img className="shrink-0 w-4 h-4 relative overflow-visible" src={frame8} alt="arrow" />
              </div>
              <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-base font-normal relative">
                  Formal
                </div>
                <img className="shrink-0 w-4 h-4 relative overflow-visible" src={frame9} alt="arrow" />
              </div>
              <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-base font-normal relative">
                  Party
                </div>
                <img className="shrink-0 w-4 h-4 relative overflow-visible" src={frame10} alt="arrow" />
              </div>
              <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-base font-normal relative">
                  Gym
                </div>
                <img className="shrink-0 w-4 h-4 relative overflow-visible" src={frame11} alt="arrow" />
              </div>
            </div>
          </div>

          {/* Apply Filter Button */}
          <div className="bg-[#000000] rounded-[62px] pt-4 pr-[54px] pb-4 pl-[54px] flex flex-row gap-3 items-center justify-center self-stretch shrink-0 h-12 relative overflow-hidden">
            <div className="text-[#ffffff] text-left font-['Satoshi-Medium',_sans-serif] text-sm font-medium relative">
              Apply Filter
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex flex-col gap-4 items-start justify-start flex-1 relative">
          {/* Header */}
          <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
            <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-[32px] font-bold relative flex items-center justify-start">
              Casual
            </div>
            <div className="flex flex-row gap-3 items-center justify-end flex-1 relative">
              <div className="text-[rgba(0,0,0,0.60)] text-left font-['Satoshi-Regular',_sans-serif] text-base font-normal relative">
                Showing 1-10 of 100 Products
              </div>
              <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
                <div className="text-left font-['-',_sans-serif] text-base font-normal relative">
                  <span>
                    <span className="sort-by-most-popular-span">Sort by:</span>
                    <span className="sort-by-most-popular-span2">Most Popular</span>
                  </span>
                </div>
                <img className="shrink-0 w-4 h-4 relative overflow-visible" src={frame12} alt="dropdown" />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex flex-col gap-[34px] items-start justify-start self-stretch shrink-0 relative">
            {/* Row 1 */}
            <div className="flex flex-row gap-5 items-start justify-start flex-wrap content-start self-stretch shrink-0 relative">
              {/* Product 1 */}
              <div className="flex flex-col gap-4 items-start justify-start shrink-0 w-[295.33px] relative">
                <div className="bg-[#f0eeed] rounded-[20px] self-stretch shrink-0 h-[298px] relative overflow-hidden">
                  <img className="w-[294px] h-[441px] absolute left-px top-[-71px]" style={{ objectFit: 'cover' }} src={image80} alt="Gradient Graphic T-shirt" />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start shrink-0 w-[227px] relative">
                  <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-xl font-bold relative self-stretch flex items-center justify-start">
                    Gradient Graphic T-shirt
                  </div>
                  <div className="flex flex-row gap-[13px] items-center justify-start shrink-0 relative">
                    <img className="flex flex-row gap-[5.31px] items-start justify-start shrink-0 h-[auto] relative overflow-visible" src={frame100} alt="rating" />
                    <div className="text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                      <span>
                        <span className="_3-5-5-span">3.5/</span>
                        <span className="_3-5-5-span2">5</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-2xl font-bold relative self-stretch flex items-center justify-start">
                    $145
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="flex flex-col gap-[11px] items-start justify-start shrink-0 w-[295.33px] relative">
                <div className="bg-[#f0eeed] rounded-[20px] self-stretch shrink-0 h-[298px] relative overflow-hidden">
                  <img className="w-[296px] h-[444px] absolute left-0 top-[-73px]" style={{ objectFit: 'cover' }} src={image90} alt="Polo with Tipping Details" />
                </div>
                <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-xl font-bold relative self-stretch flex items-center justify-start">
                  Polo with Tipping Details
                </div>
                <div className="flex flex-row gap-[13px] items-center justify-start shrink-0 relative">
                  <img className="flex flex-row gap-[5.31px] items-start justify-start shrink-0 h-[auto] relative overflow-visible" src={frame101} alt="rating" />
                  <div className="text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                    <span>
                      <span className="_4-5-5-span">4.5/</span>
                      <span className="_4-5-5-span2">5</span>
                    </span>
                  </div>
                </div>
                <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-2xl font-bold relative flex items-center justify-start">
                  $180
                </div>
              </div>

              {/* Product 3 */}
              <div className="flex flex-col gap-4 items-start justify-start shrink-0 w-[295.33px] relative">
                <div className="bg-[#f0eeed] rounded-[20px] self-stretch shrink-0 h-[298px] relative overflow-hidden">
                  <img className="w-[296px] h-[444px] absolute left-0 top-[-73px]" style={{ objectFit: 'cover' }} src={image100} alt="Black Striped T-shirt" />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
                  <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-xl font-bold relative self-stretch flex items-center justify-start">
                    Black Striped T-shirt
                  </div>
                  <div className="flex flex-row gap-[13px] items-center justify-start shrink-0 relative">
                    <img className="flex flex-row gap-[5.31px] items-start justify-start shrink-0 h-[auto] relative overflow-visible" src={frame102} alt="rating" />
                    <div className="text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                      <span>
                        <span className="_5-0-5-span">5.0/</span>
                        <span className="_5-0-5-span2">5</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative">
                    <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-2xl font-bold relative flex items-center justify-start">
                      $120
                    </div>
                    <div className="text-[rgba(0,0,0,0.40)] text-left font-['Satoshi-Bold',_sans-serif] text-2xl font-bold relative flex items-center justify-start" style={{ textDecoration: 'line-through' }}>
                      $150
                    </div>
                    <div className="bg-[rgba(255,51,51,0.10)] rounded-[62px] pt-1.5 pr-3.5 pb-1.5 pl-3.5 flex flex-row gap-3 items-center justify-center shrink-0 w-[58px] relative overflow-hidden">
                      <div className="text-[#ff3333] text-left font-['Satoshi-Medium',_sans-serif] text-xs font-medium relative">
                        -30%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-row gap-5 items-start justify-start flex-wrap content-start self-stretch shrink-0 relative">
              {/* Product 4 */}
              <div className="flex flex-col gap-[11px] items-start justify-start shrink-0 w-[295px] relative">
                <div className="bg-[#f0eeed] rounded-[20px] self-stretch shrink-0 h-[298px] relative overflow-hidden">
                  <img className="w-[268px] h-[402px] absolute left-3.5 top-[-51px]" style={{ objectFit: 'cover' }} src={image81} alt="Skinny Fit Jeans" />
                </div>
                <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-xl font-bold relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="skinny-fit-jeans-span">S</span>
                    <span className="skinny-fit-jeans-span2">KINNY</span>
                    <span className="skinny-fit-jeans-span">F</span>
                    <span className="skinny-fit-jeans-span2">IT</span>
                    <span className="skinny-fit-jeans-span">J</span>
                    <span className="skinny-fit-jeans-span2">EANS</span>
                  </span>
                </div>
                <div className="flex flex-row gap-[13px] items-center justify-start self-stretch shrink-0 relative">
                  <img className="flex flex-row gap-[5.31px] items-start justify-start shrink-0 h-[auto] relative overflow-visible" src={frame103} alt="rating" />
                  <div className="text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                    <span>
                      <span className="_3-5-5-span">3.5/</span>
                      <span className="_3-5-5-span2">5</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative">
                  <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-2xl font-bold relative flex items-center justify-start">
                    $240
                  </div>
                  <div className="text-[rgba(0,0,0,0.40)] text-left font-['Satoshi-Bold',_sans-serif] text-2xl font-bold relative flex items-center justify-start" style={{ textDecoration: 'line-through' }}>
                    $260
                  </div>
                  <div className="bg-[rgba(255,51,51,0.10)] rounded-[62px] pt-1.5 pr-3.5 pb-1.5 pl-3.5 flex flex-row gap-3 items-center justify-center shrink-0 w-[58px] relative overflow-hidden">
                    <div className="text-[#ff3333] text-left font-['Satoshi-Medium',_sans-serif] text-xs font-medium relative">
                      -20%
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 5 */}
              <div className="flex flex-col gap-4 items-start justify-start shrink-0 w-[295px] relative">
                <div className="bg-[#f0eeed] rounded-[20px] self-stretch shrink-0 h-[298px] relative overflow-hidden">
                  <img className="w-[296px] h-[444px] absolute left-0 top-[-73px]" style={{ objectFit: 'cover' }} src={image91} alt="Checkered Shirt" />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start shrink-0 w-[151px] relative">
                  <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-xl font-bold relative self-stretch flex items-center justify-start">
                    <span>
                      <span className="checkered-shirt-span">C</span>
                      <span className="checkered-shirt-span2">HECKERED</span>
                      <span className="checkered-shirt-span">S</span>
                      <span className="checkered-shirt-span2">HIRT</span>
                    </span>
                  </div>
                  <div className="flex flex-row gap-[13px] items-center justify-start self-stretch shrink-0 relative">
                    <img className="flex flex-row gap-[5.31px] items-start justify-start shrink-0 h-[auto] relative overflow-visible" src={frame104} alt="rating" />
                    <div className="text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                      <span>
                        <span className="_4-5-5-span">4.5/</span>
                        <span className="_4-5-5-span2">5</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-2xl font-bold relative self-stretch flex items-center justify-start">
                    $180
                  </div>
                </div>
              </div>

              {/* Product 6 */}
              <div className="flex flex-col gap-4 items-start justify-start shrink-0 w-[296px] relative">
                <div className="bg-[#f0eeed] rounded-[20px] self-stretch shrink-0 h-[298px] relative overflow-hidden">
                  <img className="w-[296px] h-[444px] absolute left-0 top-[-73px]" style={{ objectFit: 'cover' }} src={image101} alt="Sleeve Striped T-shirt" />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start shrink-0 w-[199px] relative">
                  <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-xl font-bold relative self-stretch flex items-center justify-start">
                    <span>
                      <span className="sleeve-striped-t-shirt-span">S</span>
                      <span className="sleeve-striped-t-shirt-span2">LEEVE</span>
                      <span className="sleeve-striped-t-shirt-span">S</span>
                      <span className="sleeve-striped-t-shirt-span2">TRIPED</span>
                      <span className="sleeve-striped-t-shirt-span">T-</span>
                      <span className="sleeve-striped-t-shirt-span2">SHIRT</span>
                    </span>
                  </div>
                  <div className="flex flex-row gap-[13px] items-center justify-start shrink-0 relative">
                    <img className="flex flex-row gap-[5.31px] items-start justify-start shrink-0 h-[auto] relative overflow-visible" src={frame105} alt="rating" />
                    <div className="text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                      <span>
                        <span className="_4-5-5-span">4.5/</span>
                        <span className="_4-5-5-span2">5</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start shrink-0 relative">
                    <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-2xl font-bold relative flex items-center justify-start">
                      $130
                    </div>
                    <div className="text-[rgba(0,0,0,0.40)] text-left font-['Satoshi-Bold',_sans-serif] text-2xl font-bold relative flex items-center justify-start" style={{ textDecoration: 'line-through' }}>
                      $160
                    </div>
                    <div className="bg-[rgba(255,51,51,0.10)] rounded-[62px] pt-1.5 pr-3.5 pb-1.5 pl-3.5 flex flex-row gap-3 items-center justify-center shrink-0 w-[58px] relative overflow-hidden">
                      <div className="text-[#ff3333] text-left font-['Satoshi-Medium',_sans-serif] text-xs font-medium relative">
                        -30%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-row gap-5 items-start justify-start flex-wrap content-start self-stretch shrink-0 relative">
              {/* Product 7 */}
              <div className="flex flex-col gap-4 items-start justify-start shrink-0 w-[295.32px] relative">
                <div className="bg-[#f0eeed] rounded-[20px] self-stretch shrink-0 h-[298px] relative overflow-hidden">
                  <img className="w-[296px] h-[444px] absolute left-[-1px] top-[-73px]" style={{ objectFit: 'cover' }} src={image70} alt="Vertical Striped Shirt" />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
                  <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-xl font-bold relative self-stretch flex items-center justify-start">
                    <span>
                      <span className="vertical-striped-shirt-span">V</span>
                      <span className="vertical-striped-shirt-span2">ERTICAL</span>
                      <span className="vertical-striped-shirt-span">S</span>
                      <span className="vertical-striped-shirt-span2">TRIPED</span>
                      <span className="vertical-striped-shirt-span">S</span>
                      <span className="vertical-striped-shirt-span2">HIRT</span>
                    </span>
                  </div>
                  <div className="flex flex-row gap-[13px] items-center justify-start shrink-0 w-[160.87px] relative">
                    <img className="flex flex-row gap-[5.31px] items-start justify-start shrink-0 h-[auto] relative overflow-visible" src={frame106} alt="rating" />
                    <div className="text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                      <span>
                        <span className="_5-0-5-span">5.0/</span>
                        <span className="_5-0-5-span2">5</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[11px] items-center justify-start self-stretch shrink-0 relative">
                    <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-2xl font-bold relative w-[53.06px] flex items-center justify-start">
                      $212
                    </div>
                    <div className="text-[rgba(0,0,0,0.40)] text-left font-['Satoshi-Bold',_sans-serif] text-2xl font-bold relative w-[56.06px] flex items-center justify-start" style={{ textDecoration: 'line-through' }}>
                      $232
                    </div>
                    <div className="bg-[rgba(255,51,51,0.10)] rounded-[62px] pt-1.5 pr-3.5 pb-1.5 pl-3.5 flex flex-row gap-3 items-center justify-center shrink-0 w-[58.06px] relative overflow-hidden">
                      <div className="text-[#ff3333] text-left font-['Satoshi-Medium',_sans-serif] text-xs font-medium relative">
                        -20%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 8 */}
              <div className="flex flex-col gap-4 items-start justify-start shrink-0 w-[295.32px] relative">
                <div className="bg-[#f0eeed] rounded-[20px] self-stretch shrink-0 h-[298px] relative overflow-hidden">
                  <img className="w-[294px] h-[441px] absolute left-px top-[-71px]" style={{ objectFit: 'cover' }} src={image82} alt="Courage Graphic T-shirt" />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
                  <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-xl font-bold relative self-stretch flex items-center justify-start">
                    <span>
                      <span className="courage-graphic-t-shirt-span">C</span>
                      <span className="courage-graphic-t-shirt-span2">OURAGE</span>
                      <span className="courage-graphic-t-shirt-span">G</span>
                      <span className="courage-graphic-t-shirt-span2">RAPHIC</span>
                      <span className="courage-graphic-t-shirt-span">T-</span>
                      <span className="courage-graphic-t-shirt-span2">SHIRT</span>
                    </span>
                  </div>
                  <div className="flex flex-row gap-[13px] items-center justify-start shrink-0 w-[138.04px] relative">
                    <img className="flex flex-row gap-[5.31px] items-start justify-start shrink-0 h-[auto] relative overflow-visible" src={frame107} alt="rating" />
                    <div className="text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                      <span>
                        <span className="_4-0-5-span">4.0/</span>
                        <span className="_4-0-5-span2">5</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-2xl font-bold relative self-stretch flex items-center justify-start">
                    $145
                  </div>
                </div>
              </div>

              {/* Product 9 */}
              <div className="flex flex-col gap-4 items-start justify-start shrink-0 w-[295.32px] relative">
                <div className="bg-[#f0eeed] rounded-[20px] self-stretch shrink-0 h-[298px] relative overflow-hidden">
                  <img className="w-[296px] h-[444px] absolute left-0 top-[-73px]" style={{ objectFit: 'cover' }} src={image92} alt="Loose Fit Bermuda Shorts" />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
                  <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-xl font-bold relative self-stretch flex items-center justify-start">
                    <span>
                      <span className="loose-fit-bermuda-shorts-span">L</span>
                      <span className="loose-fit-bermuda-shorts-span2">OOSE</span>
                      <span className="loose-fit-bermuda-shorts-span">F</span>
                      <span className="loose-fit-bermuda-shorts-span2">IT</span>
                      <span className="loose-fit-bermuda-shorts-span">B</span>
                      <span className="loose-fit-bermuda-shorts-span2">ERMUDA</span>
                      <span className="loose-fit-bermuda-shorts-span">S</span>
                      <span className="loose-fit-bermuda-shorts-span2">HORTS</span>
                    </span>
                  </div>
                  <div className="flex flex-row gap-[13px] items-center justify-start shrink-0 w-[113.22px] relative">
                    <img className="flex flex-row gap-[5.31px] items-start justify-start shrink-0 h-[auto] relative overflow-visible" src={frame108} alt="rating" />
                    <div className="text-left font-['Satoshi-Regular',_sans-serif] text-sm font-normal relative">
                      <span>
                        <span className="_3-0-5-span">3.0/</span>
                        <span className="_3-0-5-span2">5</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-[#000000] text-left font-['Satoshi-Bold',_sans-serif] text-2xl font-bold relative self-stretch flex items-center justify-start">
                    $80
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Email Subscription */}
      <EmailSubscription />
      </div>
    </div>
  );
};

export default Category;