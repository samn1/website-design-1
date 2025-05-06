
import React from "react";
import ContactInfo from "../ui/ContactInfo";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-[rgba(217,217,217,1)] w-full mt-8 pt-8 pb-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="gap-6 flex max-md:flex-col">
          <div className="w-full">
            <div className="bg-[rgba(217,217,217,1)] text-black">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Get in Touch</h2>
              <p className="mt-2 text-sm sm:text-base">We'd love to hear from you. Please use the contact information below.</p>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
