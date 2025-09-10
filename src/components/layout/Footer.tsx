import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    "Data & AI",
    "Automation & Workflow", 
    "Software Development",
    "Enterprise Applications",
    "Cybersecurity & IT Security"
  ];

  const companyLinks = [
    { name: "About", href: "/About" },
    { name: "Our Products", href: "/Products" },
    { name: "FAQ", href: "/FAQ" },
    { name: "Career", href: "/Careers" }
  ];

  const locations = [
    { name: "HQ - Malaysia", url: "https://maps.app.goo.gl/MysZDAHc5DuZTzR16" },
    { name: "Tech Center - India", url: "https://maps.app.goo.gl/W8byGv1e5fTS7ECy5" },
    { name: "Biz Dev Center - Australia", url: "https://maps.app.goo.gl/S7x4e6CTuH1cREtW9" }
  ];

  const emails = [
    "sales.my@appxcess.com",
    "sales.in@appxcess.com",
    "sales.au@appxcess.com"
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/profile.php?id=61572225137875", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "https://x.com/AppXcess", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/appxcess/?next=%2F", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/appxcess-technologies/about/?viewAsMember=true/", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => {
                let href = "#";
                switch (service) {
                  case "Data & AI":
                    href = "/Data-AI";
                    break;
                  case "Automation & Workflow":
                    href = "/Automation";
                    break;
                  case "Software Development":
                    href = "/Software-Cloud";
                    break;
                  case "Enterprise Applications":
                    href = "/Enterprise-Apps";
                    break;
                  case "Cybersecurity & IT Security":
                    href = "/Cybersecurity";
                    break;
                  default:
                    href = "#";
                }
                return (
                  <li key={index}>
                    <Link 
                      to={href}
                      className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                    >
                      {service}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Location</h3>
            <ul className="space-y-2">
              {locations.map((location, index) => (
                <li key={index}>
                  <a 
                    href={location.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    {location.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mail */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Mail</h3>
            <ul className="space-y-2">
              {emails.map((email, index) => (
                <li key={index}>
                  <a 
                    href={`mailto:${email}`}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Connected with AppXcess</h3>
            <p className="text-gray-300 mb-4">
              Connect with us on social media platforms.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-teal-400 hover:border-teal-400 transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © AppXcess Technologies 2025. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                to="/Privacy-Policy/"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/Contact/"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
