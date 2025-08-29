import React from 'react';
import { Brain, Cloud, Settings, Building2, ShieldCheck, Code } from 'lucide-react';

const ITServices: React.FC = () => {
  const services = [
    {
      title: "Data & AI",
      description: "Unlock insights and automation with data engineering, analytics, and AI solutions.",
      icon: <Brain className="text-teal-600" size={32} />
    },
    {
      title: "Automation & Workflow",
      description: "Optimize operations with intelligent automation and streamlined business workflows.",
      icon: <Settings className="text-teal-600" size={32} />
    },
    {
      title: "Software Development",
      description: "Design and build robust, scalable applications tailored to your business.",
      icon: <Code className="text-teal-600" size={32} />
    },
    {
      title: "Cloud Services",
      description: "Architect, migrate, and optimize workloads on modern cloud platforms.",
      icon: <Cloud className="text-teal-600" size={32} />
    },
    {
      title: "Enterprise Applications",
      description: "Implement robust ERP/CRM and custom systems tailored to your enterprise needs.",
      icon: <Building2 className="text-teal-600" size={32} />
    },
    {
      title: "Cybersecurity & IT Security",
      description: "Protect your organization with proactive security, compliance, and risk management.",
      icon: <ShieldCheck className="text-teal-600" size={32} />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What we can do for you
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Services provide by us.
          </p>
          <p className="text-lg text-gray-500 mt-2">
            We provide IT service for startups and company business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-2"
            >
              <div className="bg-teal-100 p-4 rounded-xl w-fit mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

             
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITServices;
