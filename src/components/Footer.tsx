import React from 'react';
import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold">Mohan Rathi</h3>
            <p className="text-gray-400">
              B2B Marketing & Business Development
            </p>
          </div>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="mailto:moharathi99@gmail.com" className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <div className="text-center">
            <p className="text-gray-400">
              &copy; {currentYear} Mohan Rathi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};