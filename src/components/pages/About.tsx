import React, { useState } from 'react';
import { 
  Cloud, Brain, Link, 
  Smartphone, Palette, Rocket, Users, 
  Target, ArrowRight,
  BarChart3, Lightbulb, Code2, Server, Eye, ArrowUpRight
} from 'lucide-react';
import { Button } from '../ui';

const About: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    { 
      name: "Cloud Solutions", 
      icon: <Cloud size={24} />,
      description: "Scalable cloud infrastructure and migration services for businesses of all sizes."
    },
    { 
      name: "Extended Reality", 
      icon: <Eye size={24} />,
      description: "Immersive AR/VR experiences that transform how users interact with your brand."
    },
    { 
      name: "Web3 & Blockchain", 
      icon: <Link size={24} />,
      description: "Decentralized applications and blockchain integration for the new internet era."
    },
    { 
      name: "Technology Consulting", 
      icon: <Brain size={24} />,
      description: "Strategic guidance to leverage technology for competitive advantage."
    },
    { 
      name: "Mobile Development", 
      icon: <Smartphone size={24} />,
      description: "Native and cross-platform mobile applications with exceptional user experiences."
    },
    { 
      name: "Web Applications", 
      icon: <Code2 size={24} />,
      description: "High-performance web applications built with modern frameworks and technologies."
    },
    { 
      name: "SaaS Platforms", 
      icon: <Server size={24} />,
      description: "Custom software-as-a-service solutions that scale with your business."
    },
    { 
      name: "UI/UX Design", 
      icon: <Palette size={24} />,
      description: "User-centered design that creates intuitive and engaging digital experiences."
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Strategy",
      description: "We deeply understand your business objectives, challenges, and target audience.",
      icon: <Lightbulb size={24} />
    },
    {
      title: "Design & Planning",
      description: "Creating detailed blueprints and prototypes to visualize the final product.",
      icon: <BarChart3 size={24} />
    },
    {
      title: "Development & Testing",
      description: "Agile development with continuous testing to ensure quality and functionality.",
      icon: <Code2 size={24} />
    },
    {
      title: "Deployment & Growth",
      description: "Seamless launch with ongoing optimization and support for long-term success.",
      icon: <Rocket size={24} />
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "50+", label: "Experts Team" },
    { number: "30+", label: "Global Clients" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  // Testimonials section removed

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-teal-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">AppXcess</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Transforming businesses through innovative technology solutions
            </p>
            <div className="pt-8">
              <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-xl font-medium hover:from-teal-600 hover:to-blue-600 transition-all duration-300 group shadow-lg">
                <span className="flex items-center space-x-2">
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Driving Digital Transformation
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              At AppXcess, we partner with forward-thinking organizations to create digital solutions that solve complex challenges, enhance user experiences, and accelerate business growth. Our team of experts combines technical excellence with strategic insight to deliver measurable results.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Lightbulb className="text-teal-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive edge.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Target className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  Our commitment to quality ensures that every project meets the highest standards of performance and reliability.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Users className="text-indigo-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership</h3>
                <p className="text-gray-600">
                  We collaborate closely with you, ensuring our solutions align perfectly with your business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  {React.cloneElement(service.icon, { className: "text-teal-600" })}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center mr-6">
                {React.cloneElement(services[activeService].icon, { className: "text-teal-600", size: 28 })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {services[activeService].name}
                </h3>
                <p className="text-gray-600 text-lg">
                  {services[activeService].description}
                </p>
                <button className="mt-6 flex items-center text-teal-600 font-medium group">
                  Learn more about this service
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures success from concept to delivery
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-16 h-2/3 w-2 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full hidden md:block"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                    {React.cloneElement(step.icon as React.ReactElement, { className: "text-teal-600" })}
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 mb-2">{step.title}</div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  <div className="mt-4 text-sm font-semibold text-teal-500">
                    Step {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              By The Numbers
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Quantifying our impact and expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 mb-4">
                  {stat.number}
                </div>
                <p className="text-blue-100 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Let's discuss how our expertise can help you achieve your digital goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="px-8 py-4 rounded-xl shadow-lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;