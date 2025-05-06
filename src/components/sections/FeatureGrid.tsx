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
    <section className="self-center w-full max-w-[1453px] mt-[107px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {features.map((feature, index) => (
          <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
            <div className="text-[32px] text-black font-normal max-md:mt-10">
              {feature.image}
              <p className={`${index === 0 ? "mt-5" : "mt-[33px]"} max-md:mr-2.5`}>
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