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
    <section className="w-full mt-[107px] max-md:mt-10">
      <div className="border self-center w-[1750px] shrink-0 max-w-full h-px border-black border-solid" />
      
      <div className="self-center flex w-[1254px] max-w-full items-stretch gap-[40px_100px] text-black whitespace-nowrap text-center flex-wrap mt-11 max-md:mt-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-stretch flex-1">
            <div className={`text-8xl font-bold ${index === 3 ? "ml-5 max-md:ml-2.5" : "self-center"} max-md:text-[40px]`}>
              {stat.value}
            </div>
            <div className="text-[32px] font-normal">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-black text-[32px] font-normal text-center self-center w-[1135px] mt-[68px] max-md:max-w-full max-md:mt-10">
        {description}
      </p>
    </section>
  );
};

export default StatsSection;