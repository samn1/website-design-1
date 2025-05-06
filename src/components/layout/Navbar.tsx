
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[rgba(255,255,255,0.2)] shadow-sm flex items-center justify-between px-6 py-4 md:px-8">
      <div className="bg-[rgba(186,186,186,1)] w-12 h-12 rounded-full" />
      <div className="flex items-center gap-6 md:gap-10">
        <Link to="/services" className="text-base md:text-lg">
          Services
        </Link>
        <Link to="/contact" className="text-base md:text-lg">
          Contact
        </Link>
        <Link 
          to="/products" 
          className="rounded bg-black text-white px-4 py-2 text-base"
        >
          View Products
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
