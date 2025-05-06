
import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="mt-6 space-y-3 text-lg">
      <div className="space-y-1">
        <h3 className="text-xl font-medium">Address</h3>
        <p>1234 Satellite Drive, Space City, SC 90210</p>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-xl font-medium">Email</h3>
        <p>contact@satellitecompany.com</p>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-xl font-medium">Telephone</h3>
        <p>+1 (555) 123-4567</p>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-xl font-medium">Fax</h3>
        <p>+1 (555) 987-6543</p>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-xl font-medium">Hours</h3>
        <p>Monday - Friday: 9am - 5pm</p>
        <p>Saturday - Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactInfo;
