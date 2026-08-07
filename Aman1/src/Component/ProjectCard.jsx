import React from 'react';

const ProjectCard = ({title, description, image, tech,demo,code}) => {
  return (
    <div className='bg-[#2d2d2d] rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer shadow-lg border border-transparent hover:border-fuchsia-600/30'>
      <img src={image} alt={title} className='w-full h-48 sm:h-60 object-cover'/>
      <div className='p-5'>
        <h3 className='text-xl font-semibold mb-2 text-white'>{title}</h3>
        <p className='text-gray-400 mb-4 text-sm md:text-base'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-6'>
            {tech.map((item, index) => (
                <span key={index} className='px-3 py-1 bg-[#3d3d3d] text-gray-300 rounded-full hover:scale-105 transition-transform text-xs font-medium'>
                    {item}
                </span>
            ))}
        </div>
        <div className='flex flex-col sm:flex-row gap-3'>
          <a href={demo} className='flex-1 text-center py-2 bg-fuchsia-600 text-white rounded-lg font-medium hover:bg-fuchsia-700 transition duration-300 active:scale-95'>
            View Demo
          </a>
           <a href={code} className='flex-1 text-center py-2 bg-[#1a1a1a] text-white rounded-lg font-medium hover:bg-[#3d3d3d] transition duration-300 active:scale-95 border border-gray-600'>
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
