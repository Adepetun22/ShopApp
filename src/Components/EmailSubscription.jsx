import React, { useState } from 'react';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    // Reset form after submission
    setEmail('');
  };

  return (
    <div className="flex justify-center w-full pb-8 sm:pb-10 md:pb-12">
      <div className="bg-black rounded-2xl py-6 xs:py-4 sm:py-9 px-8 xs:px-4 sm:px-16 flex flex-col xs:flex-col sm:flex-row flex-wrap content-center items-center justify-between shrink-0 relative overflow-hidden max-w-[1242px] w-full">
        <div className="text-white text-left text-2xl xs:text-xl sm:text-[2.5rem] leading-8 xs:leading-6 sm:leading-11.25 font-normal relative flex-1 min-w-60 xs:min-w-48 sm:min-w-72.5 mb-6 sm:mb-0">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </div>
        <div className="flex flex-col gap-2 xs:gap-1 sm:gap-3.5 flex-1 min-w-60 xs:min-w-48 sm:min-w-70 max-w-80 xs:max-w-72 sm:max-w-87.25 relative">
          <div className="bg-white rounded-4xl xs:rounded-4xl sm:rounded-4xl flex flex-row gap-2 xs:gap-1.5 sm:gap-3 items-center justify-start self-stretch shrink-0 relative overflow-hidden" style={{ height: '48px' }}>
            <input 
              placeholder="Enter your email address" 
              className="text-black text-opacity-40 text-left font-normal text-sm xs:text-xs sm:text-[1rem] relative flex-1 py-2 xs:py-1.5 sm:py-3 px-3 xs:px-2 sm:px-4 outline-none" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-secondary" onClick={handleSubmit}>
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscription;