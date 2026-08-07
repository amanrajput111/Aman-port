import React from 'react';
import { skills } from '../assets/assets';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skill = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      id="skills"
      ref={ref}
      className={`py-20 bg-[#1a1a1a] transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          My <span className="text-fuchsia-600">Skills</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg md:text-xl">
          Technologies I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#2d2d2d] rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer shadow-lg border border-transparent hover:border-fuchsia-600/30"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-12 h-12 text-fuchsia-500 mr-6" />
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              </div>
              <p className="text-gray-400 mb-6 text-sm md:text-base leading-relaxed">{skill.description}</p>
              <div className="flex flex-wrap gap-3">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#3d3d3d] text-gray-300 rounded-full text-lg md:text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
