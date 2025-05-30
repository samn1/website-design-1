
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
    <section className={`w-full max-w-6xl mx-auto ${className}`}>
      <h2 className="text-xl md:text-2xl font-bold mb-3">
        {title}
      </h2>
      <p className={`text-sm md:text-base ${textAlignClass} max-w-4xl`}>
        {content}
      </p>
    </section>
  );
};

export default ContentSection;
