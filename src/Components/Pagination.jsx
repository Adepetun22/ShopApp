import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const isMobile = window.innerWidth < 640; // sm breakpoint
    const maxVisiblePages = isMobile ? 3 : 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (isMobile) {
      // Mobile: Show current page and adjacent pages (max 3)
      if (currentPage === 1) {
        pages.push(1, 2, 3);
      } else if (currentPage === totalPages) {
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    } else {
      // Desktop/Tablet: Show exactly 5 pages around current page
      if (currentPage <= 3) {
        // Show first 5 pages
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        // Show last 5 pages
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show 5 pages centered around current page
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }
    
    return pages;
  };

  return (
    <div className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
      <div 
        className="border-solid border-[rgba(0,0,0,0.10)] border-t border-r-[0] border-b-[0] border-l-[0] self-stretch shrink-0 h-0 relative" 
        style={{ marginTop: '-1px', transformOrigin: '0px 0px', transform: 'rotate(0deg) scale(1, 1)' }}
      ></div>
      <div className="flex flex-row items-center justify-center md:justify-between self-stretch shrink-0 relative gap-2 flex-wrap">
        <div className="rounded-lg flex flex-row gap-0 items-start justify-start shrink-0 relative order-1 md:order-none">
          <button 
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`bg-[#ffffff] rounded-lg border-solid border-[rgba(0,0,0,0.10)] border pt-2 pr-3.5 pb-2 pl-3.5 flex flex-row gap-2 items-center justify-center shrink-0 relative overflow-hidden cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
          >
            <img 
              className="shrink-0 w-5 h-5 relative overflow-visible" 
              alt="previous" 
              src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.8333%209.99984H4.16663M4.16663%209.99984L9.99996%2015.8332M4.16663%209.99984L9.99996%204.1665'%20stroke='black'%20stroke-width='1.67'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" 
            />
            <div className="text-[#000000] text-left font-['Satoshi-Medium',_sans-serif] text-sm leading-5 font-medium relative hidden sm:block">
              Previous
            </div>
          </button>
        </div>
        
        <div className="flex flex-row gap-0.5 items-start justify-start shrink-0 relative order-2 md:order-none">
          {getPageNumbers().map((page, index) => (
            <div key={index} className="relative">
              {page === '...' ? (
                <div className="rounded-lg shrink-0 w-10 h-10 relative overflow-hidden">
                  <div className="rounded-lg p-3 flex flex-row gap-0 items-center justify-center w-10 h-10 absolute left-0 top-0">
                    <div className="text-[rgba(0,0,0,0.50)] text-center font-['Satoshi-Medium',_sans-serif] text-sm leading-5 font-medium relative">
                      ...
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handlePageClick(page)}
                  className={`rounded-lg shrink-0 w-10 h-10 relative overflow-hidden ${
                    page === currentPage 
                      ? 'bg-[rgba(0,0,0,0.06)]' 
                      : 'bg-[#ffffff] hover:bg-gray-50 cursor-pointer'
                  }`}
                >
                  <div className="rounded-lg p-3 flex flex-row gap-0 items-center justify-center w-10 h-10 absolute left-0 top-0">
                    <div 
                      className={`text-center font-['Satoshi-Medium',_sans-serif] text-sm leading-5 font-medium relative ${
                        page === currentPage 
                          ? 'text-[#000000]' 
                          : 'text-[rgba(0,0,0,0.50)]'
                      }`}
                    >
                      {page}
                    </div>
                  </div>
                </button>
              )}
            </div>
          ))}
        </div>
        
        <div className="rounded-lg flex flex-row gap-0 items-start justify-start shrink-0 relative order-3 md:order-none">
          <button 
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`bg-[#ffffff] rounded-lg border-solid border-[rgba(0,0,0,0.10)] border pt-2 pr-3.5 pb-2 pl-3.5 flex flex-row gap-2 items-center justify-center shrink-0 relative overflow-hidden cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
          >
            <div className="text-[#000000] text-left font-['Satoshi-Medium',_sans-serif] text-sm leading-5 font-medium relative hidden sm:block">
              Next
            </div>
            <img 
              className="shrink-0 w-5 h-5 relative overflow-visible" 
              alt="next" 
              src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.16663%209.99984H15.8333M15.8333%209.99984L9.99996%204.1665M15.8333%209.99984L9.99996%2015.8332'%20stroke='black'%20stroke-width='1.67'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" 
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;