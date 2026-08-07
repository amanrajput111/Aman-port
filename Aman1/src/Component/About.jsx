import React from 'react';
import { aboutInfo, assets } from '../assets/assets';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const About = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      id="about"
      ref={ref}
      className={`py-20 bg-gray-900 transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          About <span className="text-fuchsia-600">Me</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl font-bold text-center mx-auto mb-16 max-w-2xl">
          Get to know more about my background and passion
        </p>

        {/* Image + Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              src={assets.profileImg}
              alt="Profile"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2 w-full">
            <div className="rounded-2xl p-4 md:p-8">
              <h3 className="text-2xl font-semibold mb-6 text-fuchsia-600 text-center lg:text-left">
                My Journey
              </h3>
              <div className="bg-[#2d2d2d] rounded-2xl select-none p-6 shadow-lg mb-8">
                <p className="text-gray-300 leading-relaxed text-center lg:text-left">
                   Hi, I'm Aman, a passionate MERN Stack Developer. I build responsive and user-friendly web applications using modern technologies like MongoDB, Express.js, React.js, and Node.js. I enjoy solving problems, learning new technologies, and creating clean, efficient code. I'm looking for opportunities where I can improve my skills and contribute to real-world projects.</p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-[#2d2d2d] rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer shadow-lg border border-transparent hover:border-fuchsia-600/30"
                  >
                    <div className="text-fuchsia-500 text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{data.title}</h3>
                    <p className="text-gray-400 text-lg ">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
