import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Artham Bhardwaj</h1>
          <div className="flex items-center space-x-6">
            <Link to="about" smooth={true} className="cursor-pointer hover:text-blue-600">About</Link>
            <Link to="education" smooth={true} className="cursor-pointer hover:text-blue-600">Education</Link>
            <Link to="experience" smooth={true} className="cursor-pointer hover:text-blue-600">Experience</Link>
            <Link to="projects" smooth={true} className="cursor-pointer hover:text-blue-600">Projects</Link>
            <Link to="skills" smooth={true} className="cursor-pointer hover:text-blue-600">Skills</Link>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-blue-600" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-600" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;