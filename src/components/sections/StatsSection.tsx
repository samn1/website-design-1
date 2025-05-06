
import React from "react";

interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: StatItem[];
  description: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats, description }) => {
  return (
    <section className="w-full my-12 max-w-6xl mx-auto">
      <div className="border-t border-black w-full my-8" />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center my-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold">
              {stat.value}
            </div>
            <div className="text-base mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-base md:text-lg text-center max-w-4xl mx-auto my-8">
        {description}
      </p>
    </section>
  );
};

export default StatsSection;
