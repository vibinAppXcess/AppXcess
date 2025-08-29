import React from 'react';
import { Brain, Bot, Code, Building2, Shield, Cloud, Users, TrendingUp, Lightbulb, Palette, Rocket } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Brain className="text-teal-600" size={24} />,
      title: "Data & AI",
      description: "AI-powered business intelligence with machine learning, data science, and analytics solutions."
    },
    {
      icon: <Bot className="text-teal-600" size={24} />,
      title: "Automation & Workflow",
      description: "RPA, workflow automation, and process optimization with leading automation platforms."
    },
    {
      icon: <Code className="text-teal-600" size={24} />,
      title: "Software Development & Cloud",
      description: "Full-stack development, mobile apps, cloud computing, and DevOps solutions."
    },
    {
      icon: <Building2 className="text-teal-600" size={24} />,
      title: "Enterprise Applications",
      description: "Salesforce CRM, Microsoft Power Platform, SAP, and enterprise system integration."
    },
    {
      icon: <Shield className="text-teal-600" size={24} />,
      title: "Cybersecurity & IT Security",
      description: "Comprehensive security solutions, cloud security, and threat intelligence."
    },
    {
      icon: <Cloud className="text-teal-600" size={24} />,
      title: "Cloud Services",
      description: "Elevate your business with powerful and secure cloud solutions designed to scale."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What We Can Do For You</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
