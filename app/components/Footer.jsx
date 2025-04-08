import React from "react";
import { socialLinks } from "@/app/constants";

const Footer = () => {
  
  return (
    <footer className="bg-black py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
        <ul className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3">
          <li>
            <span className="text-white">©2025 Corprite</span>
          </li>
          <li>
            <a
              href={`${process.env.NEXT_PUBLIC_APP_URL}privacy-policy/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline transition-colors"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href={`${process.env.NEXT_PUBLIC_APP_URL}terms-of-service/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline transition-colors"
            >
              Terms of Service
            </a>
          </li>
        </ul>
        <div className="flex gap-4">
          {socialLinks.map(({ Icon, link, label }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white text-xl hover:text-gray-400 transition"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
