
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const ContactInfo: React.FC = () => {
  return (
    <div className="mt-6 space-y-3 text-sm md:text-base">
      <div className="space-y-1">
        <h3 className="text-lg font-medium">Address</h3>
        <p>1234 Satellite Drive, Space City, SC 90210</p>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-lg font-medium">Email</h3>
        <p>contact@satellitecompany.com</p>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-lg font-medium">Telephone</h3>
        <p>+1 (555) 123-4567</p>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-lg font-medium">Fax</h3>
        <p>+1 (555) 987-6543</p>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-lg font-medium">Hours</h3>
        <p>Monday - Friday: 9am - 5pm</p>
        <p>Saturday - Sunday: Closed</p>
      </div>
      
      <div className="mt-4">
        <h3 className="text-lg font-medium mb-2">Connect With Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
