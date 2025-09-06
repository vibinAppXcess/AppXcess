import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Cpu, Brain, Shield, Database, Zap, Link as LinkIcon, Globe, Bot, Monitor, Smartphone, Code, Palette, Rocket, ArrowRight } from 'lucide-react';

const NextGenSolutions: React.FC = () => {
  const nextGenSolutions = [
    { name: "Cloud Computing", icon: <Cloud className="text-teal-600" size={24} /> },
    { name: "IOT", icon: <Cpu className="text-teal-600" size={24} /> },
    { name: "Digital Twin Tech", icon: <Brain className="text-teal-600" size={24} /> },
    { name: "AI ML Solutions", icon: <Shield className="text-teal-600" size={24} /> },
    { name: "Governance Systems", icon: <Database className="text-teal-600" size={24} /> },
    { name: "Data Insights Tech", icon: <Zap className="text-teal-600" size={24} /> },
    { name: "Quantum computing", icon: <LinkIcon className="text-teal-600" size={24} /> },
    { name: "Blockchain", icon: <Globe className="text-teal-600" size={24} /> },
    { name: "RPA", icon: <Monitor className="text-teal-600" size={24} /> },
    { name: "UI/UX", icon: <Palette className="text-teal-600" size={24} /> },
    { name: "Extended Reality", icon: <Smartphone className="text-teal-600" size={24} /> },
    { name: "SaaS", icon: <Code className="text-teal-600" size={24} /> },
    { name: "MVP Development", icon: <Rocket className="text-teal-600" size={24} /> },
    { name: "Web App", icon: <Globe className="text-teal-600" size={24} /> }
  ];

  return (
    <section id="about" className="py-20">
      {/* Next-Gen Solutions Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Solutions Grid */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Next-Gen Solutions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {nextGenSolutions.map((solution, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3 hover:bg-teal-50 transition-colors duration-300 cursor-pointer group border border-gray-200"
                      >
                        <div className="bg-teal-100 p-2 rounded-lg group-hover:bg-teal-200 transition-colors duration-300">
                          {solution.icon}
                        </div>
                        <span className="text-gray-700 text-sm font-medium group-hover:text-teal-700 transition-colors duration-300">
                          {solution.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 text-gray-900">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Next-Gen Solutions
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At AppXcess, we craft cutting-edge IT and engineering solutions to empower businesses in today's fast-paced, technology-driven world. Our expertise lies in combining innovation with precision, delivering tailored strategies that help organizations thrive, adapt, and lead in their industries.
                </p>
                <p>
                  From enhancing operational efficiency to scaling for growth and overcoming complex challenges, our solutions are built to deliver measurable impact. Partner with AppXcess to turn your vision into reality, harnessing the power of technology and engineering to shape a smarter, more sustainable future.
                </p>
              </div>
              <div className="relative group">
                <Link to="/About" className="inline-block">
                  <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-teal-600 hover:text-white transition-colors mt-8 group">
                    <span className="flex items-center space-x-2">
                      <span>More About Us</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </Link>
                {/* Hover Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                  Discover our comprehensive IT solutions and engineering expertise
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextGenSolutions;
