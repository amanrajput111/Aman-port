import React from 'react';
import { projects } from '../assets/assets';
import ProjectCard from './ProjectCard';
import { FaArrowRight } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Project = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      id="project"
      ref={ref}
      className={`py-20 bg-[#1f1f1f] transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          My <span className="text-fuchsia-600">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg md:text-xl">
          A selection of my recent work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Project Cards */}
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 border border-fuchsia-600 rounded-lg font-medium hover:bg-fuchsia-600/20 transition-colors duration-300 text-white"
          >
            <span>View More Projects</span>
            <FaArrowRight className="ml-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;