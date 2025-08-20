import React from 'react';
import { Download } from 'lucide-react';
export const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-16">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80')] opacity-5 bg-cover"></div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Mohan Rathi
            </h1>
            <p className="text-lg md:text-xl text-blue-700 font-medium mb-6">
              B2B Marketing & Business Development | AI-Powered Strategies |
              Driving Measurable Growth
            </p>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              MBA Marketing candidate with a proven track record in business
              development, marketing automation, and implementing AI-driven
              strategies for measurable business growth.
            </p>
            <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors shadow-lg">
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img src="/generation-ae4eaf1d-1d56-4085-afdc-58230c63f35d.png" alt="Mohan Rathi" className="w-full h-full object-cover object-center object-top" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" aria-label="Scroll down" className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
          <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>;
};