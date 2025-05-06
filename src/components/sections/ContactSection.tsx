import React from "react";
import ContactForm from "../ui/ContactForm";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-[rgba(217,217,217,1)] flex w-full flex-col items-center mt-[76px] pt-[76px] pb-[19px] px-[67px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="self-stretch max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[68%] max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(217,217,217,1)] flex grow flex-col text-[32px] text-black font-normal w-full pl-3 pr-20 pt-[31px] pb-[71px] max-md:max-w-full max-md:mt-10 max-md:pr-5">
              <h2 className="text-[40px]">Get in Touch</h2>
              <address className="not-italic">
                <p className="mt-[19px]">Address</p>
                <ContactForm />
              </address>
            </div>
          </div>
          <div className="w-[32%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(217,217,217,1)] flex w-[543px] shrink-0 max-w-full h-[428px] mx-auto max-md:mt-10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 543 428" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="543" height="428" fill="#D9D9D9"/>
                  <path d="M271.5 214C271.5 214 343.5 142 391.5 214C439.5 286 271.5 358 271.5 358C271.5 358 103.5 286 151.5 214C199.5 142 271.5 214 271.5 214Z" fill="#BABABA" stroke="#000000"/>
                  <circle cx="271.5" cy="214" r="20" fill="#000000"/>
                  <path d="M271.5 194V154" stroke="#000000" strokeWidth="2"/>
                  <path d="M271.5 274V234" stroke="#000000" strokeWidth="2"/>
                  <path d="M331.5 214L291.5 214" stroke="#000000" strokeWidth="2"/>
                  <path d="M251.5 214L211.5 214" stroke="#000000" strokeWidth="2"/>
                </svg>
              </div>
              <div className="absolute bottom-4 right-4 bg-white p-2 rounded shadow-md">
                <p className="text-sm font-semibold">Satellite Location</p>
                <p className="text-xs">Lat: 34.0522° N, Long: 118.2437° W</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;