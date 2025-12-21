import React, { useState, useEffect } from 'react';

const CustomerReview = ({ testimonials = [], arrowDownBold2, arrowDownBold1, title = "OUR HAPPY CUSTOMERS" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = React.useRef(null);
  
  // Early return if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="flex flex-col gap-6 items-start justify-start self-stretch flex-shrink-0 relative">
        <div className="text-black text-left text-2xl xs:text-xl sm:text-3xl md:text-[3rem] font-normal relative flex-1 flex items-center justify-start">
          {title}
        </div>
        <div className="text-gray-500 text-center py-8">
          No customer reviews available at the moment.
        </div>
      </div>
    );
  }
  
  // Determine how many cards to show based on screen size
  const getCardsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // Desktop: 3 cards
      if (window.innerWidth >= 768) return 2;  // Tablet: 2 cards
      return 1; // Mobile: 1 card
    }
    return 1; // Default to 1 on server-side rendering
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
    if (testimonials.length <= cardsToShow) return; // Don't auto-scroll if all cards are visible
    
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
          {title}
        </div>
        <div className="flex flex-row items-center justify-between flex-shrink-0 gap-4 relative">
          <button 
            onClick={prevSlide}
            className="flex-shrink-0 w-6 h-6 relative overflow-visible aspect-square cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Previous testimonial"
          >
            <img 
              src={arrowDownBold2} 
              alt="Previous" 
              className="w-full h-full" 
            />
          </button>
          <button 
            onClick={nextSlide}
            className="flex-shrink-0 w-6 h-6 relative overflow-visible aspect-square cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Next testimonial"
          >
            <img 
              src={arrowDownBold1} 
              alt="Next" 
              className="w-full h-full" 
            />
          </button>
        </div>
      </div>
      
      {/* Carousel Container */}
      <div className="customer-review-carousel relative w-full">
        <div 
          className="customer-review-slide flex"
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
                {/* Responsive height card container */}
                <div className="customer-review-card flex flex-col min-h-[240px] h-full">
                  <div className="flex flex-row gap-2 items-start justify-start shrink-0 mb-3">
                    <img 
                      src={testimonial.rating} 
                      alt="Rating" 
                      className="shrink-0 w-auto h-5 relative overflow-visible" 
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start flex-grow">
                    <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                      <div className="text-black text-left font-bold text-lg leading-5 relative">
                        {testimonial.name}
                      </div>
                      <img 
                        src={testimonial.verified} 
                        alt="Verified" 
                        className="shrink-0 w-5 h-5 relative overflow-visible" 
                      />
                    </div>
                    <div className="text-black text-opacity-60 text-left font-normal text-sm leading-5 relative flex-grow">
                      "{testimonial.quote}"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dots indicator */}
        <div className="customer-review-dots">
          {Array.from({ length: Math.max(1, testimonials.length - cardsToShow + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`customer-review-dot ${
                currentSlide === index ? 'active' : ''
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