import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../../Public/appxcess.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredServiceCategory, setHoveredServiceCategory] = useState<number>(0);

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

            {/* AI Agents */}
            <Link to="/AI-Agents/" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              AI Agents
            </Link>

            

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
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-screen max-w-5xl px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
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
                          <Link key={index} to={service.href}>
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

              {/* AI Agents */}
              <Link to="/AI-Agents/" className="block text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium">
                AI Agents
              </Link>

              

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
                    {servicesMenu.map((category, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 text-sm px-3 py-1">{category.category}</h4>
                        <p className="text-xs text-gray-500 px-3 py-1">{category.description}</p>
                        <div className="space-y-1">
                          {category.services.map((service: any, serviceIndex: number) => (
                            <Link key={serviceIndex} to={service.href} className="block text-gray-600 hover:text-teal-600 px-3 py-1 text-sm">
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
              <Link to="/Products/" className="block text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium">
                Products
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
