import React from "react";
import { Link } from "react-router-dom";

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="w-3/12 max-md:w-full max-md:ml-0">
      <div className="flex grow flex-col text-2xl text-black font-normal whitespace-nowrap max-md:mt-10">
        <h3 className="text-[32px] self-stretch">{title}</h3>
        {links.map((link, index) => (
          <Link 
            key={index} 
            to="#" 
            className={index === 0 ? "mt-[9px]" : ""}
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
    <footer>
      <div className="border w-[1750px] shrink-0 max-w-full h-px mt-8 border-black border-solid" />
      <div className="w-[1057px] max-w-full ml-[34px] mt-[38px]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {footerColumns.map((column, index) => (
            <FooterColumn 
              key={index} 
              title={column.title} 
              links={column.links} 
            />
          ))}
        </div>
      </div>
      <p className="text-black text-xl font-normal text-center mt-[161px] max-md:mt-10">
        ©Copyrights Placeholder
      </p>
    </footer>
  );
};

export default Footer;