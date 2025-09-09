import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ITServices: React.FC = () => {
  const services = [
    {
      title: "Data & AI Solutions",
      description: "Transform your business with intelligent data analytics, machine learning, and AI-powered automation. We help you unlock valuable insights from your data to drive strategic decisions and operational efficiency.",
      features: ["Data Engineering", "Machine Learning", "Predictive Analytics", "AI Automation"],
      image: "/src/assets/images/ai-artificial-intelligence-data-analytics-professional-monitors-aidriven-analytics-dashboards-evaluate-web-traffic-customer-engagement-real-time.jpg"
    },
    {
      title: "Process Automation",
      description: "Streamline your operations with intelligent automation solutions. From workflow optimization to robotic process automation, we eliminate manual tasks and boost productivity across your organization.",
      features: ["Workflow Automation", "RPA Implementation", "Business Process Optimization", "Integration Solutions"],
      image: "/src/assets/images/automation-software-technology-process-system-business-concept.jpg"
    },
    {
      title: "Custom Software Development",
      description: "Build powerful, scalable applications tailored to your unique business requirements. Our expert developers create robust solutions using cutting-edge technologies, modern frameworks, and industry best practices.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
      image: "/src/assets/images/html-system-websites-concept.jpg"
    },
    {
      title: "Cloud Infrastructure",
      description: "Leverage the power of cloud computing with our comprehensive cloud services. From migration to optimization, we ensure your infrastructure is secure, scalable, and cost-effective.",
      features: ["Cloud Migration", "Infrastructure Setup", "DevOps Implementation", "Cost Optimization"],
      image: "/src/assets/images/cloud-computing-technology-online-data-storage-business-network-concept.jpg"
    },
    {
      title: "Enterprise Systems",
      description: "Implement and customize enterprise-grade applications including ERP, CRM, and business intelligence systems. We ensure seamless integration with your existing workflows.",
      features: ["ERP Implementation", "CRM Solutions", "Business Intelligence", "System Integration"],
      image: "/src/assets/images/enterprise-resource-planning-holographic-interface.jpg"
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Protect your digital assets with comprehensive security solutions. Our experts implement multi-layered security measures and ensure compliance with industry standards and regulations.",
      features: ["Security Assessment", "Compliance Management", "Threat Protection", "Security Training"],
      image: "/src/assets/images/standard-quality-control-concept-m.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-teal-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What We Can Do <span className="text-teal-600">For Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive suite of IT services. From cutting-edge AI solutions to robust cybersecurity, we provide end-to-end technology services that drive growth, efficiency, and innovation for startups and enterprises alike.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-3 relative overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how our IT services can help you achieve your business goals and drive digital transformation.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-teal-700 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITServices;
