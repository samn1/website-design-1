import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[rgba(255,255,255,0.2)] shadow-[0px_4px_20px_rgba(0,0,0,0.1)] flex w-full items-stretch gap-5 text-[40px] font-normal flex-wrap justify-between px-[38px] py-[23px] max-md:max-w-full max-md:px-5">
      <div className="bg-[rgba(186,186,186,1)] flex w-[78px] shrink-0 h-[78px] rounded-[50%]" />
      <div className="flex items-center gap-[40px_68px] flex-wrap my-auto max-md:max-w-full">
        <Link to="/services" className="self-stretch grow my-auto">
          Services
        </Link>
        <Link to="/contact" className="text-center self-stretch basis-auto my-auto">
          Contact
        </Link>
        <Link 
          to="/products" 
          className="rounded bg-black self-stretch text-[rgba(225,225,225,1)] px-4 py-[13px]"
        >
          View Products
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;