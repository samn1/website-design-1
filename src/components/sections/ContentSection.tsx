import React from "react";

interface ContentSectionProps {
  title: string;
  content: string;
  className?: string;
  textAlign?: "left" | "center" | "right";
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  title, 
  content, 
  className = "", 
  textAlign = "left" 
}) => {
  const textAlignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }[textAlign];

  return (
    <section className={`w-full ${className}`}>
      <h2 className="text-black text-[40px] font-bold">
        {title}
      </h2>
      <p className={`text-black text-[32px] font-normal ${textAlignClass} max-md:max-w-full`}>
        {content}
      </p>
    </section>
  );
};

export default ContentSection;