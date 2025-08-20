import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Testimonials',
    href: '#testimonials'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-blue-700">
            MR
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
                {item.name}
              </a>)}
          </div>
          {/* Mobile Navigation Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Navigation Menu */}
        {isMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-700 hover:text-blue-700 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>)}
            </div>
          </div>}
      </div>
    </nav>;
};