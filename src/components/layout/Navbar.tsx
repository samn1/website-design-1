
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[rgba(255,255,255,0.2)] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="bg-[rgba(186,186,186,1)] w-10 h-10 md:w-12 md:h-12 rounded-full" />
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6 md:gap-10">
            <Link to="/services" className="text-sm md:text-base hover:text-gray-700">
              Services
            </Link>
            <Link to="/contact" className="text-sm md:text-base hover:text-gray-700">
              Contact
            </Link>
            <Link 
              to="/products" 
              className="rounded bg-black text-white px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base hover:bg-gray-800"
            >
              View Products
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 py-2 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-2">
              <Link 
                to="/services" 
                className="text-base hover:text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="text-base hover:text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/products" 
                className="inline-block text-center rounded bg-black text-white px-4 py-2 text-base hover:bg-gray-800 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                View Products
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
