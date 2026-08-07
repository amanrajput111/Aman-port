import React from 'react';
import { assets } from '../assets/assets';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Hero = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      id="home"
      ref={ref}
      className={`min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 select-none text-teal-400">
            Hi, I'm <span className="text-fuchsia-600">Aman</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter text-shadow-sm inline-block">
             Mern Stack Developer
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-lg mx-auto md:mx-0">
            Hi, I'm Aman, a passionate Web Developer with a strong interest in building clean, responsive, and user-friendly websites.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-10 justify-center md:justify-start">
            <a href="#work" className="px-6 py-3 bg-fuchsia-600 rounded-lg font-bold hover:bg-fuchsia-800 transition-colors shadow-xl active:scale-95 text-white">
              Work
            </a>
            <a href="#contact" className="px-6 py-3 border border-white rounded-lg font-bold hover:bg-gray-800 transition-colors shadow-xl active:scale-95 text-white">
              Contact
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-500 animate-pulse opacity-70"></div>
            <img
              src={assets.profileImg}
              alt="Profile"
              className="relative rounded-full w-full h-full object-cover z-10 animate-[bounce_4s_ease-in-out_infinite] border-4 border-fuchsia-600/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
