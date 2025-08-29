import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../../Public/appxcess.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const companyMenu = [
    { name: "About", href: "/About" },
    { name: "FAQ", href: "/FAQ" },
    { name: "Careers", href: "/Careers" }
  ];

  const industriesMenu = [
    { name: "Logistics & Transportation", href: "/Logistics/" },
    { name: "Production & Supply Chain", href: "/Production-and-Supply-Chain/" },
    { name: "Media and Entertainment", href: "/Media/" },
    { name: "Retail", href: "/Retail/" },
    { name: "EdTech and eLearning", href: "/Edtech/" },
    { name: "Ecommerce", href: "/Ecommerce/" },
    { name: "Healthcare", href: "/Healthcare/" },
    { name: "Energy and Utilities", href: "/Energy-and-Utilities/" },
    { name: "FinTech", href: "/Fintech/" },
    { name: "Telecommunications", href: "/Telecommunication/" },
    { name: "Real Estate and Construction", href: "/RealEstate-and-Construction/" }
  ];

  const servicesMenu = {
    "Core Tech Services": [
      { name: "Data & AI", href: "/Data-AI/" },
      { name: "Automation & Workflow", href: "/Automation/" },
      { name: "Software Development & Cloud", href: "/Software-Cloud/" },
      { name: "Enterprise Applications", href: "/Enterprise-Apps/" },
      { name: "Cybersecurity & IT Security", href: "/Cybersecurity/" }
    ]
  };



  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="AppXcess Logo" 
                className="h-10 w-auto object-contain drop-shadow-md"
                style={{ minHeight: '40px', minWidth: 'auto' }}
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/appxcess.png'; }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {/* Company Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Company
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-gradient-to-br from-teal-50 to-gray-50 rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {companyMenu.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-100 hover:text-teal-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Industries
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-gradient-to-br from-teal-50 to-gray-50 rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {industriesMenu.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-100 hover:text-teal-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Mega Menu */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-96 bg-gradient-to-br from-teal-50 to-gray-50 rounded-lg shadow-lg border border-gray-200 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(servicesMenu).map(([category, items]: [string, any[]]) => (
                      <div key={category}>
                        <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
                        <ul className="space-y-1">
                          {items.map((item: any, index: number) => (
                            <li key={index}>
                              <Link
                                to={item.href}
                                className="block text-sm text-gray-700 hover:bg-teal-100 hover:text-teal-600 transition-colors px-2 py-1 rounded"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
              </div>
            </div>



            {/* Products */}
            <Link to="/Products/" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              Products
            </Link>

            {/* ESG */}
            <Link to="/ESG/" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              ESG
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/Contact/"
              className="bg-teal-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none focus:text-teal-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {/* Company */}
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium"
                >
                  Company
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'company' && (
                  <div className="pl-4 space-y-1">
                    {companyMenu.map((item, index) => (
                      <a key={index} href={item.href} className="block text-gray-600 hover:text-teal-600 px-3 py-2 text-sm">
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries */}
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'industries' ? null : 'industries')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium"
                >
                  Industries
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'industries' && (
                  <div className="pl-4 space-y-1">
                    {industriesMenu.map((item, index) => (
                      <Link key={index} to={item.href} className="block text-gray-600 hover:text-teal-600 px-3 py-2 text-sm">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services */}
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'services' && (
                  <div className="pl-4 space-y-2">
                    {Object.entries(servicesMenu).map(([category, items]: [string, any[]]) => (
                      <div key={category}>
                        <h4 className="font-semibold text-gray-900 text-sm px-3 py-1">{category}</h4>
                        <div className="space-y-1">
                          {items.map((item: any, index: number) => (
                            <Link key={index} to={item.href} className="block text-gray-600 hover:text-teal-600 px-3 py-1 text-sm">
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>



              {/* Products & ESG */}
              <Link to="/Products/" className="block text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium">
                Products
              </Link>
              <Link to="/ESG/" className="block text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium">
                ESG
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  to="/Contact/"
                  className="bg-teal-600 text-white block px-6 py-3 rounded-lg text-base font-medium hover:bg-teal-700 transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
