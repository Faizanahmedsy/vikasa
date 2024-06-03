import React from "react";

const FooterV2 = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold text-rose-300 mb-2">Tomato Tech</h2>
          <p className="text-sm">Building a Sustainable Future</p>
        </div>

        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <h3 className="text-lg font-bold text-rose-300 mb-3">Contact Us</h3>
          <p className="text-sm">+91 9876543210</p>
          <p className="text-sm">info@tomatotech.com</p>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-bold text-rose-300 mb-3">Quick Links</h3>
          <a href="/about" className="text-sm hover:text-rose-300 mb-2">
            About Us
          </a>
          <a href="/services" className="text-sm hover:text-rose-300 mb-2">
            Our Services
          </a>
          <a href="/projects" className="text-sm hover:text-rose-300 mb-2">
            Projects
          </a>
          {/* Add more links as needed */}
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-bold text-rose-300 mb-3">
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-rose-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-rose-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-rose-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Subscribe to our newsletter for updates and promotions:
        </p>
        <div className="flex items-center justify-center mt-4">
          <input
            type="email"
            placeholder="Your email"
            className="py-2 px-4 mr-2 border border-teal-500 rounded-md focus:outline-none"
          />
          <button className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Tomato Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterV2;
