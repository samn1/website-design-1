import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-[rgba(218,218,218,1)] flex w-full flex-col items-stretch text-black px-px max-md:max-w-full">
      <div className="self-center z-10 flex mb-[-30px] w-full max-w-[1794px] items-stretch gap-6 flex-wrap mt-[63px] max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
          <p className="text-3xl font-normal text-right w-[1135px] max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. A nascetur luctus diam
            odio sagittis. Adipiscing convallis a risus massa nullam non nec
            fames et.{" "}
          </p>
          <h1 className="text-[64px] font-bold w-[709px] mt-[473px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
            Connecting the world through satellites.
            <br />
          </h1>
        </div>
        <div className="border w-px shrink-0 h-[684px] border-black border-solid" />
      </div>
    </section>
  );
};

export default Hero;