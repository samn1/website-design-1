
import React from "react";

interface FeatureItem {
  image: React.ReactNode;
  description: string;
}

interface FeatureGridProps {
  features: FeatureItem[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  return (
    <section className="w-full my-8 md:my-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-[rgba(250,250,250,1)] rounded-sm shadow-sm h-full">
            <div className="text-sm sm:text-base h-full flex flex-col">
              <div className="bg-[rgba(217,217,217,1)] w-full h-[200px] md:h-[240px]" />
              <p className="mt-4 p-4 pb-6 flex-grow">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
