import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="pt-20 pb-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Artham Bhardwaj</h1>
          <p className="text-xl mb-8">Computer Science Engineer</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:arthambhardwaj63@gmail.com" className="flex items-center">
              <FaEnvelope className="mr-2" />
              arthambhardwaj63@gmail.com
            </a>
            <a href="tel:+916397544629" className="flex items-center">
              <FaPhone className="mr-2" />
              +91 6397544629
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;