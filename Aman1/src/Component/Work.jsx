import React from 'react';
import { workData } from '../assets/assets';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Work = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      id="work"
      ref={ref}
      className={`py-20 bg-[#1a1a1a] transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Work <span className="text-fuchsia-600">Experience</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg md:text-xl">
          My professional journey so far
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {workData.map((data, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-fuchsia-600 cursor-pointer hover:-translate-y-2 transition-transform duration-300 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-0.3rem] md:left-[-0.45rem] top-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-fuchsia-600 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></div>

                <div className="bg-[#2d2d2d] rounded-2xl p-6 shadow-lg border border-transparent group-hover:border-fuchsia-600/30 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2 md:gap-0">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {data.role}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-fuchsia-600/20 text-fuchsia-400 rounded-full text-xs font-medium self-start md:self-auto whitespace-nowrap">
                      {data.duration}
                    </span>
                  </div>
                  <p className="text-fuchsia-400 mb-3 font-medium">{data.company}</p>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;