import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat"
             style={{
              backgroundImage: "url('https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1600')"

             }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Abstract Sun/Starburst Pattern */}
      <div className="absolute bottom-[-100px] right-[-100px] md:bottom-[-50px] md:right-[-50px] lg:bottom-[-20px] lg:right-[-20px] overflow-hidden">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
          {/* Central blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-yellow-400 rounded-full opacity-70 animate-pulse"></div>

          {/* Scattered "rays" or "splashes" */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]">
            <div className="absolute w-12 h-12 bg-yellow-400 rounded-full opacity-70 transform rotate-12 translate-x-[-100px] translate-y-[-50px]"></div>
            <div className="absolute w-16 h-16 bg-yellow-400 rounded-full opacity-70 transform rotate-90 translate-x-[80px] translate-y-[-90px]"></div>
            <div className="absolute w-10 h-10 bg-yellow-400 rounded-full opacity-70 transform rotate-180 translate-x-[120px] translate-y-[30px]"></div>
            <div className="absolute w-14 h-14 bg-yellow-400 rounded-full opacity-70 transform rotate-270 translate-x-[50px] translate-y-[100px]"></div>
            <div className="absolute w-18 h-18 bg-yellow-400 rounded-full opacity-70 transform rotate-45 translate-x-[-100px] translate-y-[80px]"></div>
            <div className="absolute w-12 h-12 bg-yellow-400 rounded-full opacity-70 transform rotate-30 translate-x-[-20px] translate-y-[-120px]"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight">
            Discover Your Next Adventure
          </h1>

          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl leading-relaxed font-normal">
            Choose from our curated experiences, customized for every
            kind of traveler.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 md:py-5 md:px-10 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center text-white text-lg font-bold space-y-4 md:space-y-0">
            <span>Easy Booking</span>
            <span className="hidden md:block h-6 w-px bg-white opacity-50 mx-4"></span>
            <span>Curated Destinations</span>
            <span className="hidden md:block h-6 w-px bg-white opacity-50 mx-4"></span>
            <span>Trusted Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;