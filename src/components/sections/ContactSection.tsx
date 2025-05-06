
import React from "react";
import ContactInfo from "../ui/ContactInfo";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-[rgba(217,217,217,1)] w-full mt-10 pt-10 pb-10 px-8 max-md:px-5">
      <div className="max-w-6xl mx-auto">
        <div className="gap-6 flex max-md:flex-col">
          <div className="w-full">
            <div className="bg-[rgba(217,217,217,1)] text-black">
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <p className="mt-3 text-lg">We'd love to hear from you. Please use the contact information below.</p>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
