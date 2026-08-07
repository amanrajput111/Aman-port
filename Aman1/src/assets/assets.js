import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/passport.png';
import projectImg1 from '../assets/Screenshot 2026-08-07 232052.png';
import projectImg2 from '../assets/task.png';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/images.png';
import projectImg6 from '../assets/project6.avif';
import Ar from '../assets/AR.png';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'Building innovative web solutions with the MERN Stack and always eager to collaborate on exciting projects and new opportunities.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Design-oriented MERN Stack Developer focused on building responsive, intuitive, and visually engaging web applications with exceptional user experiences.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Passionate about building responsive, user-centric web applications with clean, maintainable code and modern design principles.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind Css' ,'Bootstrap' ,'React.js' ,'Next.js'],
  
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express.js' ,'Jwt-Authentication', 'RESTful APIs' ]
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB',  ]
  },
   
  
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'VS Code' , 'Postman' , 'Imagekit' , 'Cloudinary']
  },

{
 title: 'DevOps & Tools',
 icon: FaRobot,
 description: 'Implemented Docker containerization and configured CI/CD pipeline for automated build and deployment',
 tags: ['Docker' , 'CI/CD']

}
];




export const projects = [
  {
    title: "My Shop ",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React" , "Node","Express", "MongoDB","JWT Authentication", "RESTful APIs" ],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://ecommerce-frontend-9c9a.onrender.com/",
    code: "https://github.com/amanrajput111/ecommerce",
  },
  {
    title: "Task Management App",
    description: "A modern Task Management app built with React.js for efficient task organization and productivity..",
    image: projectImg2,
    tech: ["HTML", "CSS", "react", "Tailwind"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
 
  {
    title: "Portfolio Website",
    description: "A creative developer portfolio designed to present my work, skills, and journey in web development.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "https://aman-wxd.onrender.com/",
    code: "https://github.com/amanrajput111/My-Portfolio",
  },
  {
    title: "Zomato-Clone",
    description: "Built Zomato clone with food ordering, restaurants, and MERN stack.",
    image: projectImg5,
    tech: ["JWT Authentication", "React", "Express.js", "MongoDB" , "Imagetoolkit"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
     
  },
//   {
//     title: "AI Image Generator",
//     description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
//     image: projectImg6,
//     tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
//     icons: [FaRobot, FaReact, FaCloud],
//     demo: "#",
//     code: "#",
//   }
];


export const workData = [
  {
    role: " Junior Frontend Developer",
    company: "Hanumant Technology Pvt. Ltd. ",
    duration: "2026 - Present",
    description:
      "Junior Frontend Developer with strong skills in React.js, JavaScript, HTML, CSS, and responsive web development. Eager to create intuitive user interfaces, collaborate with cross-functional teams, and contribute to delivering high-quality web applications.",
    color: "purple"
  },
  {
    role: "Mern Stack Developer",
    company: "Hanumant Technology pvt Ltd",
    duration: "2026 - Present",
    description:
      "MERN Stack Developer with 6+ months of experience in React.js, Node.js, Express.js, and MongoDB, specializing in RESTful APIs and JWT Authentication. Passionate about building scalable web applications and contributing to innovative development teams.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "Softpro India",
    duration: "2025 ",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
