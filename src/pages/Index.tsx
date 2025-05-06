
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ContentSection from "@/components/sections/ContentSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import StatsSection from "@/components/sections/StatsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

const Index: React.FC = () => {
  // Feature grid items
  const features = [
    {
      image: <div className="bg-[rgba(217,217,217,1)] flex shrink-0 h-[301px]" />,
      description: "Lorem ipsum dolor sit amet consectetur. A nascetur luctus diam odio sagittis. Adipiscing convallis a risus massa nullam non nec fames et."
    },
    {
      image: <div className="bg-[rgba(217,217,217,1)] flex shrink-0 h-[301px]" />,
      description: "Lorem ipsum dolor sit amet consectetur. A nascetur luctus diam odio sagittis. Adipiscing convallis a risus massa nullam non nec fames et."
    },
    {
      image: <div className="bg-[rgba(217,217,217,1)] flex shrink-0 h-[301px]" />,
      description: "Lorem ipsum dolor sit amet consectetur. A nascetur luctus diam odio sagittis. Adipiscing convallis a risus massa nullam non nec fames et."
    }
  ];

  // Stats section items
  const stats = [
    { value: "1", label: "Value" },
    { value: "2", label: "Value" },
    { value: "3", label: "Value" },
    { value: "4", label: "Value" }
  ];

  // Content for sections
  const contentSections = [
    {
      title: "Placeholder",
      content: "Lorem ipsum dolor sit amet consectetur. A nascetur luctus diam odio sagittis. Adipiscing convallis a risus massa nullam non nec fames et. Amet sit turpis viverra ipsum neque tellus. Rhoncus turpis laoreet fringilla suspendisse facilisi lectus posuere."
    },
    {
      title: "Placeholder",
      content: "Lorem ipsum dolor sit amet consectetur. A nascetur luctus diam odio sagittis. Adipiscing convallis a risus massa nullam non nec fames et. Amet sit turpis viverra ipsum neque tellus. Rhoncus turpis laoreet fringilla suspendisse facilisi lectus posuere."
    }
  ];

  const statsDescription = "Lorem ipsum dolor sit amet consectetur. A nascetur luctus diam odio sagittis. Adipiscing convallis a risus massa nullam non nec fames et. Amet sit turpis viverra ipsum neque tellus. Rhoncus turpis laoreet fringilla suspendisse facilisi lectus posuere.";

  return (
    <div className="bg-white overflow-hidden">
      <div className="bg-[rgba(218,218,218,1)]">
        <Navbar />
        <Hero />
      </div>
      
      <main className="px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {contentSections.map((section, index) => (
            <ContentSection 
              key={index}
              title={section.title}
              content={section.content}
              className={index > 0 ? "mt-10 md:mt-16" : "mt-8 md:mt-12"}
            />
          ))}
        </div>
        
        <FeatureGrid features={features} />
        
        <StatsSection 
          stats={stats} 
          description={statsDescription} 
        />
      </main>
      
      <ContactSection />
      
      <div className="bg-[rgba(217,217,217,1)]">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
