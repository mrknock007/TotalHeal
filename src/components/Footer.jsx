import React from "react";
import { Icon } from "@mui/material";
import { Email, Phone, Help, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white p-4">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <h2 className="font-bold text-3xl">TotalHeal</h2>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <p>About us</p>
            <p>Consult Doctor</p>
            <p>Products</p>
            <p>Learn</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact us</h4>
            <p>+91 9935268977</p>
            <p>totalheal@gmail.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <p>Help</p>
            <p>Rate Doctor</p>
          </div>
          <div>
            <Icon component={Email} className="mr-2" />
            <Icon component={Phone} className="mr-2" />
            <Icon component={Help} className="mr-2" />
            <Icon component={Instagram} className="mr-2" />
            <Icon component={Twitter} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
