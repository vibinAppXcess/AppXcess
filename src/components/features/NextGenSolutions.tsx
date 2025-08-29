import React from 'react';
import { Cloud, Cpu, Brain, Shield, Database, Zap, Link, Globe, Bot, Monitor, Smartphone, Code, Palette, Rocket, ArrowRight } from 'lucide-react';

const NextGenSolutions: React.FC = () => {
  const nextGenSolutions = [
    { name: "Cloud Computing", icon: <Cloud className="text-white" size={24} /> },
    { name: "IOT", icon: <Cpu className="text-white" size={24} /> },
    { name: "Digital Twin Tech", icon: <Brain className="text-white" size={24} /> },
    { name: "AI ML Solutions", icon: <Shield className="text-white" size={24} /> },
    { name: "Governance Systems", icon: <Database className="text-white" size={24} /> },
    { name: "Data Insights Tech", icon: <Zap className="text-white" size={24} /> },
    { name: "Quantum computing", icon: <Link className="text-white" size={24} /> },
    { name: "Blockchain", icon: <Globe className="text-white" size={24} /> },
    { name: "RPA", icon: <Monitor className="text-white" size={24} /> },
    { name: "UI/UX", icon: <Palette className="text-white" size={24} /> },
    { name: "Extended Reality", icon: <Smartphone className="text-white" size={24} /> },
    { name: "SaaS", icon: <Code className="text-white" size={24} /> },
    { name: "MVP Development", icon: <Rocket className="text-white" size={24} /> },
    { name: "Web App", icon: <Globe className="text-white" size={24} /> }
  ];

  return (
    <section id="about" className="py-20">
      {/* Next-Gen Solutions Section */}
      <div className="bg-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Solutions Grid */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Next-Gen Solutions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {nextGenSolutions.map((solution, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 bg-white/20 rounded-lg p-3 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 cursor-pointer group"
                      >
                        <div className="bg-white/30 p-2 rounded-lg group-hover:bg-white/40 transition-colors duration-300">
                          {solution.icon}
                        </div>
                        <span className="text-white text-sm font-medium group-hover:text-teal-100 transition-colors duration-300">
                          {solution.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Next-Gen Solutions
              </h2>
              <div className="space-y-6 text-lg text-teal-100 leading-relaxed">
                <p>
                  At AppXcess, we craft cutting-edge IT and engineering solutions to empower businesses in today's fast-paced, technology-driven world. Our expertise lies in combining innovation with precision, delivering tailored strategies that help organizations thrive, adapt, and lead in their industries.
                </p>
                <p>
                  From enhancing operational efficiency to scaling for growth and overcoming complex challenges, our solutions are built to deliver measurable impact. Partner with AppXcess to turn your vision into reality, harnessing the power of technology and engineering to shape a smarter, more sustainable future.
                </p>
              </div>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-teal-600 transition-colors mt-8 group">
                <span className="flex items-center space-x-2">
                  <span>More About Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextGenSolutions;
