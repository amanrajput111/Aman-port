import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { assets } from '../assets/assets';

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skill", href: "#skills" },
    { name: "Project", href: "#project" },
    { name: "Experience", href: "#work" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#1a1a1a]/90 backdrop-blur-md shadow-lg py-3 ' : 'bg-transparent py-5'} px-6 md:px-12`}>
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <div className="flex gap-4 items-center select-none ">
          <img
            className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-fuchsia-600 object-cover"
            src={assets.profileImg}
            alt="Profile"
          />
          <a href="#home" className="text-2xl md:text-3xl font-bold text-white flex items-center gap-1">
            Aman <span className="w-2 h-2 rounded-full bg-fuchsia-600 mb-[-10px]"></span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 ">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="relative text-gray-300 transition-colors duration-300 text-lg font-medium hover:text-white group">
              <span>{link.name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-fuchsia-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white z-50 relative">
          <button onClick={() => setShowMenu(!showMenu)} className="p-2 focus:outline-none">
            {showMenu ? (
              <FaXmark className="text-2xl text-white" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-[#1a1a1a] transition-transform duration-300 ease-in-out flex flex-col items-center justify-center space-y-8 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setShowMenu(false)}
            className="text-3xl font-bold text-gray-300 hover:text-fuchsia-500 transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
