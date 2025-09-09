import React from 'react';
import endToEndServicesImg from '../../assets/images/end-to-end-services.jpg';

const SolutionsTailored: React.FC = () => {
  const services = [
    {
      title: "Diverse Industry Solutions",
      subtitle: "Empowering businesses with innovation.",
      description: "We deliver specialized solutions tailored to your industry's unique challenges and regulatory requirements. Our deep domain expertise ensures compliance, efficiency, and competitive advantage across all sectors.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Engineering Excellence",
      subtitle: "Innovative tools to optimize processes.",
      description: "Our engineering teams combine cutting-edge technologies with proven methodologies to build robust, scalable solutions. We deliver technical excellence that drives measurable business outcomes and sustainable growth.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "End-to-End Services",
      subtitle: "Driving success with customized solutions.",
      description: "From initial consultation and strategy development to implementation, deployment, and ongoing support, we provide comprehensive services that cover every aspect of your digital transformation journey and business growth.",
      image: endToEndServicesImg
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Solutions Tailored for You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Expertise for Your Needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4 flex-shrink-0">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-teal-600 font-medium">
                    {service.subtitle}
                  </p>
                </div>
                
                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsTailored;
