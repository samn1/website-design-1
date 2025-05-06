
import React from "react";
import { Link } from "react-router-dom";

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="w-1/2 sm:w-1/3 md:w-1/4 mb-6 md:mb-0">
      <div className="flex flex-col text-sm sm:text-base">
        <h3 className="text-base md:text-lg font-medium mb-2">{title}</h3>
        {links.map((link, index) => (
          <Link 
            key={index} 
            to="#" 
            className="mb-2 hover:underline"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const footerColumns = [
    {
      title: "Placeholder",
      links: ["Name", "Name", "Name"]
    },
    {
      title: "Placeholder",
      links: ["Name", "Name", "Name"]
    },
    {
      title: "Placeholder",
      links: ["Name", "Name", "Name"]
    },
    {
      title: "Placeholder",
      links: ["Name", "Name", "Name"]
    }
  ];

  return (
    <footer className="py-8 px-4 sm:px-6 md:px-8">
      <div className="border-t border-black w-full mb-6" />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap">
          {footerColumns.map((column, index) => (
            <FooterColumn 
              key={index} 
              title={column.title} 
              links={column.links} 
            />
          ))}
        </div>
      </div>
      <p className="text-xs sm:text-sm text-center mt-8">
        ©Copyrights Placeholder
      </p>
    </footer>
  );
};

export default Footer;
