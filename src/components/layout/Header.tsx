import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../../Public/appxcess.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredServiceCategory, setHoveredServiceCategory] = useState<number>(0);
  const [showTopBar, setShowTopBar] = useState<boolean>(true);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const hideTopBar = () => {
    setShowTopBar(false);
  };

  const closeAllDropdowns = () => {
    setIsCompanyDropdownOpen(false);
    setIsIndustriesDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownItemClick = (href: string) => {
    closeAllDropdowns();
    setIsMenuOpen(false); // Close mobile menu when item is clicked
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check if click is outside any dropdown and not on a Link
      if (!target.closest('.dropdown-container') && !target.closest('a')) {
        closeAllDropdowns();
      }
    };

    const handleMobileMenuClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check if click is outside mobile menu and not on a Link
      if (!target.closest('.mobile-menu-container') && !target.closest('.mobile-menu-button') && !target.closest('a')) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleMobileMenuClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleMobileMenuClickOutside);
    };
  }, [isMenuOpen]);

  const companyMenu = [
    { name: "About", href: "/About" },
    { name: "Quality & Security", href: "/Quality-and-Security" },
    { name: "Blog", href: "/Blog" },
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

  const servicesMenu = [
    {
      category: "Data and AI",
      description: "Data Engineering, Artificial Intelligence",
      services: [
        { name: "AI-Driven Data Science & Machine Learning", href: "/AI-Data-Science-ML/" },
        { name: "Business Analytics & Decision Intelligence", href: "/Business-Analytics/" },
        { name: "Computer Vision & NLP Applications", href: "/Computer-Vision-NLP" },
        { name: "Python for Data & AI Projects", href: "/Python-Data-AI" },
        { name: "AI & NLP Tools", href: "/Hugging-Face" },
        { name: "Agentic AI Tools & Applications", href: "/Agentic-AI" },
        { name: "AI Platform", href: "/AI-Platform/" }
      ]
    },
    {
      category: "Automation & Workflow Technologies",
      description: "Process Automation & Integration",
      services: [
        { name: "RPA", href: "/Robotic-Process-Automation" },
        { name: "Automation Anywhere", href: "/Automation-Anywhere" },
        { name: "UiPath", href: "/UiPath" },
        { name: "Automation and Integration platforms", href: "/Automation-Integration-Platforms" },
        { name: "Enterprise Workflow Automation", href: "/Enterprise-Workflow-Automation" },
      ]
    },
    {
      category: "Software Development & Cloud Engineering",
      description: "Full Stack & Cloud Engineering",
      services: [
        { name: "Full Stack Development with Cloud Deployment", href: "/Software-Cloud/" },
        { name: "Mobile apps development", href: "/Mobile-App-Development" },
        { name: "Cloud Computing & DevOps", href: "/Cloud-Computing-DevOps" },
        { name: "Low-Code/No-Code Development", href: "/Low-Code-No-Code-Development" },
        { name: "IT Support & Enterprise Systems", href: "/IT-Support-Enterprise-Systems" }
      ]
    },
    {
      category: "Enterprise Applications & Business Systems",
      description: "Business Systems & CRM",
      services: [
        { name: "Salesforce CRM & Automation", href: "/Salesforce-CRM-Automation" },
        { name: "Microsoft 365 & Power Platform", href: "/Microsoft-365-Power-Platform" },
        { name: "SAP & Enterprise Applications", href: "/SAP-Enterprise-Applications" },
        { name: "HR Systems", href: "/HR-Systems" },
        { name: "Business Tools", href: "/Business-Tools" }
      ]
    },
    {
      category: "Cybersecurity & IT Security",
      description: "Security & Cloud Protection",
      services: [
        { name: "Cybersecurity Fundamentals", href: "/Cybersecurity/" },
        { name: "Mastering Cloud Security", href: "/Cloud-Security/" },
        { name: "IoT/OT Security", href: "/IOT-OT-Security" }
      ]
    }
  ];



  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      {/* Top Announcement Bar */}
      {showTopBar && (
        <div className="relative w-full text-white overflow-hidden">
          <div
            className="w-full"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bg-black/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-2">
                  <button className="hidden sm:inline-flex bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full transition-colors">
                    Explore AppXcess Worldwide
                  </button>
                  <div className="text-center text-xs sm:text-lg font-semibold tracking-wide flex-1 sm:flex-none sm:px-6">
                    Malaysia - India - Australia - Singapore - USA
                  </div>
                  <div className="flex items-center gap-3">
                    <Link to="/About" className="text-xs sm:text-base font-semibold hover:text-teal-300 transition-colors flex items-center gap-2">
                      About Us
                      <span aria-hidden>→</span>
                    </Link>
                    <button aria-label="Close" onClick={hideTopBar} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
                      ×
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
            {/* Company Dropdown - styled like category list */}
            <div className="relative dropdown-container">
              <button 
                onClick={() => {
                  setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
                  setIsIndustriesDropdownOpen(false);
                  setIsServicesDropdownOpen(false);
                }}
                className="flex items-center text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Company
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isCompanyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCompanyDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-[260px] px-2">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                    <ul className="p-2 space-y-1">
                      {companyMenu.map((item, index) => (
                        <li key={index}>
                          <Link 
                            to={item.href} 
                            onClick={() => handleDropdownItemClick(item.href)}
                            className="block px-4 py-2 text-sm text-gray-800 rounded-lg border border-transparent hover:border-teal-300 hover:bg-gradient-to-b hover:from-teal-50 hover:to-blue-50 hover:shadow-sm hover:text-teal-700 transition-all leading-tight"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* AI Agents */}
            <Link to="/AI-Agents/" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              AI Agents
            </Link>

            

            {/* Industries Dropdown */}
            <div className="relative dropdown-container">
              <button 
                onClick={() => {
                  setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);
                  setIsCompanyDropdownOpen(false);
                  setIsServicesDropdownOpen(false);
                }}
                className="flex items-center text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Industries
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isIndustriesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isIndustriesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-[340px] px-2">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                    <ul className="p-2 space-y-1">
                      {industriesMenu.map((item, index) => (
                        <li key={index}>
                          <Link 
                            to={item.href} 
                            onClick={() => handleDropdownItemClick(item.href)}
                            className="block px-4 py-2 text-sm text-gray-800 rounded-lg border border-transparent hover:border-teal-300 hover:bg-gradient-to-b hover:from-teal-50 hover:to-blue-50 hover:shadow-sm hover:text-teal-700 transition-all leading-tight"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Services Mega Menu */}
            <div className="relative dropdown-container">
              <button 
                onClick={() => {
                  setIsServicesDropdownOpen(!isServicesDropdownOpen);
                  setIsCompanyDropdownOpen(false);
                  setIsIndustriesDropdownOpen(false);
                }}
                className="flex items-center text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-screen max-w-5xl px-4">
                  <div className="bg-white rounded-xl shadow-2xl border border-teal-200/40 overflow-hidden">
                    <div className="flex">
                      {/* Left: Categories */}
                      <div className="w-1/3 min-w-[280px] bg-gradient-to-b from-teal-50 to-blue-50 p-4 border-r border-teal-100">
                        <h3 className="text-sm font-semibold text-teal-800 mb-2">Categories</h3>
                        <ul className="space-y-1.5">
                          {servicesMenu.map((category, index) => (
                            <li key={index}
                                onMouseEnter={() => setHoveredServiceCategory(index)}
                            >
                              <button
                                className={`w-full text-left px-3 py-2 rounded-md transition-colors text-[13px] ${
                                  hoveredServiceCategory === index
                                    ? 'bg-white text-teal-700 border border-teal-200 shadow-sm'
                                    : 'text-gray-800 hover:bg-white/70'
                                }`}
                              >
                                <div className="font-semibold leading-tight">{category.category}</div>
                                <div className="text-[11px] text-gray-600 leading-tight mt-0.5">{category.description}</div>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Services for hovered category */}
                      <div className="flex-1 p-5">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-bold text-gray-900">{servicesMenu[hoveredServiceCategory].category}</h4>
                          <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {servicesMenu[hoveredServiceCategory].services.map((service: { name: string; href: string }, index: number) => (
                            <Link key={index} to={service.href} onClick={() => handleDropdownItemClick(service.href)}>
                              <div className="rounded-md border border-gray-200 bg-white py-2 px-3 hover:border-teal-300 hover:bg-teal-50 transition-colors">
                                <span className="font-medium text-gray-800 text-[13px] leading-tight">{service.name}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>



            {/* Products */}
            <Link to="/Products/" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              Products
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
              className="mobile-menu-button text-gray-700 hover:text-teal-600 focus:outline-none focus:text-teal-600 p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => {
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }}
            />
            
            {/* Mobile Menu */}
            <div className="mobile-menu-container fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
                    <img 
                      src={logo} 
                      alt="AppXcess Logo" 
                      className="h-8 w-auto object-contain drop-shadow-md"
                      style={{ minHeight: '32px', minWidth: 'auto' }}
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/appxcess.png'; }}
                    />
                  </Link>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveDropdown(null);
                    }}
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                    aria-label="Close mobile menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="px-4 py-4 space-y-2">
                    {/* Company */}
                    <div className="space-y-1">
                      <button 
                        onClick={() => {
                          setActiveDropdown(activeDropdown === 'company' ? null : 'company');
                        }}
                        className="flex items-center justify-between w-full text-gray-700 hover:text-teal-600 px-3 py-3 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Company
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === 'company' && (
                        <div className="pl-4 space-y-1 animate-fadeIn">
                          {companyMenu.map((item, index) => (
                            <Link 
                              key={index} 
                              to={item.href} 
                              onClick={() => handleDropdownItemClick(item.href)} 
                              className="block text-gray-600 hover:text-teal-600 px-3 py-2 text-sm rounded-md hover:bg-teal-50 transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* AI Agents */}
                    <Link 
                      to="/AI-Agents/" 
                      onClick={() => handleDropdownItemClick("/AI-Agents/")}
                      className="block text-gray-700 hover:text-teal-600 px-3 py-3 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      AI Agents
                    </Link>

                    {/* Industries */}
                    <div className="space-y-1">
                      <button 
                        onClick={() => {
                          setActiveDropdown(activeDropdown === 'industries' ? null : 'industries');
                        }}
                        className="flex items-center justify-between w-full text-gray-700 hover:text-teal-600 px-3 py-3 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Industries
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === 'industries' && (
                        <div className="pl-4 space-y-1 animate-fadeIn">
                          {industriesMenu.map((item, index) => (
                            <Link 
                              key={index} 
                              to={item.href} 
                              onClick={() => handleDropdownItemClick(item.href)} 
                              className="block text-gray-600 hover:text-teal-600 px-3 py-2 text-sm rounded-md hover:bg-teal-50 transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Services */}
                    <div className="space-y-1">
                      <button 
                        onClick={() => {
                          setActiveDropdown(activeDropdown === 'services' ? null : 'services');
                        }}
                        className="flex items-center justify-between w-full text-gray-700 hover:text-teal-600 px-3 py-3 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Services
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === 'services' && (
                        <div className="pl-4 space-y-3 animate-fadeIn">
                          {servicesMenu.map((category, index) => (
                            <div key={index} className="border-l-2 border-teal-100 pl-3">
                              <h4 className="font-semibold text-gray-900 text-sm mb-1">{category.category}</h4>
                              <p className="text-xs text-gray-500 mb-2">{category.description}</p>
                              <div className="space-y-1">
                                {category.services.map((service: any, serviceIndex: number) => (
                                  <Link 
                                    key={serviceIndex} 
                                    to={service.href} 
                                    onClick={() => handleDropdownItemClick(service.href)} 
                                    className="block text-gray-600 hover:text-teal-600 px-2 py-1 text-sm rounded-md hover:bg-teal-50 transition-colors"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Products */}
                    <Link 
                      to="/Products/" 
                      onClick={() => handleDropdownItemClick("/Products/")}
                      className="block text-gray-700 hover:text-teal-600 px-3 py-3 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Products
                    </Link>
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <Link
                    to="/Contact/"
                    onClick={() => handleDropdownItemClick("/Contact/")}
                    className="bg-teal-600 text-white block px-6 py-3 rounded-lg text-base font-medium hover:bg-teal-700 transition-colors text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
