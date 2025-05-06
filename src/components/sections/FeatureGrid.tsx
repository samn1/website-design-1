
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
    <section className="w-full my-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-[rgba(250,250,250,1)] rounded-sm shadow-sm">
            <div className="text-base">
              <div className="bg-[rgba(217,217,217,1)] w-full h-[240px]" />
              <p className="mt-4 p-4 pb-6 text-base">
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
