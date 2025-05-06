
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-[rgba(218,218,218,1)] w-full text-black px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col w-full">
            <p className="text-base md:text-lg lg:text-xl max-w-2xl ml-auto mb-auto">
              Lorem ipsum dolor sit amet consectetur. A nascetur luctus diam
              odio sagittis. Adipiscing convallis a risus massa nullam non nec
              fames et.
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-xl mt-20 md:mt-40">
              Connecting the world through satellites.
            </h1>
          </div>
          <div className="hidden md:block border-l border-black h-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
