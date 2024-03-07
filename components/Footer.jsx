import React from "react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="mt-auto bg-gray-900 font-arimo py-8 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:flex lg:items-center">
            <div className="bg-white p-4 w-fit rounded-full">
              <Logo />
            </div>
          </div>
          <div className="lg:flex lg:items-center">
            <div className="flex items-center space-x-6">
              <SocialMedia />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm">
                  Phone: +856 20 56 300 100
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm">
                  Address
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Information
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm">
                  &copy; {new Date().getFullYear()} Developed by DevTons. All
                  rights reserved.
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 text-sm mt-8">
          © 2024
          <a
            href="https://devtons-120196.web.app/"
            target="_blank"
            className="hover:underline mx-1"
          >
            IDEVU
          </a>
          All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
