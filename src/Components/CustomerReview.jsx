import React, { useState, useEffect } from 'react';

const CustomerReview = ({ testimonials, arrowDownBold2, arrowDownBold1 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = React.useRef(null);
  
  // Determine how many cards to show based on screen size
  const getCardsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // Desktop: 3 cards
      if (window.innerWidth >= 640) return 2;  // Tablet: 2 cards
      return 1; // Mobile: 1 card
    }
    return 3; // Default to 3 on server-side rendering
  };
  
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());
  
  // Update cards to show on window resize
  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Auto-scroll functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev >= testimonials.length - cardsToShow ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length, cardsToShow]);
  
  // Handle slide change
  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev >= testimonials.length - cardsToShow ? 0 : prev + 1));
      }, 5000);
    }
  };
  
  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide(currentSlide >= testimonials.length - cardsToShow ? 0 : currentSlide + 1);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev >= testimonials.length - cardsToShow ? 0 : prev + 1));
      }, 5000);
    }
  };
  
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? Math.max(0, testimonials.length - cardsToShow) : currentSlide - 1);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev >= testimonials.length - cardsToShow ? 0 : prev + 1));
      }, 5000);
    }
  };
  
  // Calculate card width based on cards to show
  const cardWidth = 100 / cardsToShow;

  return (
    <div className="flex flex-col gap-6 xs:gap-4 sm:gap-8 items-start justify-start self-stretch flex-shrink-0 relative">
      <div className="flex flex-row items-center justify-between self-stretch flex-shrink-0 relative flex-wrap">
        <div className="text-black text-left text-2xl xs:text-xl sm:text-3xl md:text-[3rem] font-normal relative flex-1 flex items-center justify-start mb-4 sm:mb-0">
          OUR HAPPY CUSTOMERS
        </div>
        <div className="flex flex-row items-center justify-between flex-shrink-0 w-[4rem] xs:w-[3rem] sm:w-[4.5rem] relative">
          <img 
            src={arrowDownBold2} 
            alt="Previous" 
            className="flex-shrink-0 w-[1.5rem] xs:w-[1.25rem] sm:w-[1.75rem] h-[1.5rem] xs:h-[1.25rem] sm:h-[1.75rem] relative overflow-visible aspect-square cursor-pointer" 
            onClick={prevSlide}
          />
          <img 
            src={arrowDownBold1} 
            alt="Next" 
            className="flex-shrink-0 w-[1.5rem] xs:w-[1.25rem] sm:w-[1.75rem] h-[1.5rem] xs:h-[1.25rem] sm:h-[1.75rem] relative overflow-visible aspect-square cursor-pointer" 
            onClick={nextSlide}
          />
        </div>
      </div>
      
      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * cardWidth}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="flex-shrink-0"
              style={{ width: `${cardWidth}%` }}
              onClick={() => console.log(`Card ${index} clicked`)}
            >
              <div className="px-2 h-full">
                {/* Fixed height card container - same height on all screens */}
                <div className="border border-gray-200 rounded-2xl p-4 flex flex-col h-60">
                  <div className="flex flex-row gap-2 items-start justify-start shrink-0 h-auto relative overflow-visible">
                    <img 
                      src={testimonial.rating} 
                      alt="Rating" 
                      className="shrink-0 w-auto h-auto relative overflow-visible" 
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start flex-grow">
                    <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
                      <div className="text-black text-left font-bold text-lg leading-4 relative">
                        {testimonial.name}
                      </div>
                      <img 
                        src={testimonial.verified} 
                        alt="Verified" 
                        className="shrink-0 w-5 h-5 relative overflow-visible" 
                      />
                    </div>
                    <div className="text-black text-opacity-60 text-left font-normal text-sm leading-4 relative flex-grow overflow-hidden">
                      "{testimonial.quote}"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.max(1, testimonials.length - cardsToShow + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;