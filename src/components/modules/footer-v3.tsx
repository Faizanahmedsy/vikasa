import React from "react";
import { Button } from "../ui/button";
import { SITE_CONFIG } from "../../../site.config";

const FooterV3 = () => {
  return (
    <footer className="py-12 bg-slate-900 text-violet-200">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between ">
        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold text-white mb-2">
            {SITE_CONFIG.brandName}
          </h2>
          <p className="text-sm">Building a Sustainable Future</p>
        </div>

        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <h3 className="text-lg font-bold text-white mb-3">Contact Us</h3>
          <p className="text-sm">+91 9876543210</p>
          <p className="text-sm">{SITE_CONFIG.contact.email}</p>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-bold text-white mb-3">Quick Links</h3>
          <a href="/about" className="text-sm hover:text-brand-secondary mb-2">
            About Us
          </a>
          <a href="/services" className="text-sm hover:text-brand-primary mb-2">
            Our Services
          </a>
          <a href="/projects" className="text-sm hover:text-brand-primary mb-2">
            Projects
          </a>
          {/* Add more links as needed */}
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-bold text-brand-primary mb-3">
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-brand-primary">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-brand-primary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-brand-primary">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-white">
        &copy; {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights
        reserved.
      </div>
    </footer>
  );
};

export default FooterV3;
