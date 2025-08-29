import React from 'react';
import { ArrowRight, Shield, Lock, Users, Zap, TrendingUp, Globe, Database, Eye, AlertTriangle, Key, Server } from 'lucide-react';

const Cybersecurity: React.FC = () => {
  const stats = [
    { number: "15", label: "Industries Protected", icon: Users },
    { number: "40", label: "Security Experts", icon: Users },
    { number: "200+", label: "Security Audits", icon: TrendingUp },
    { number: "50+", label: "Security Tools", icon: Globe }
  ];

  const services = [
    {
      title: "Cybersecurity Fundamentals",
      description: "Comprehensive security assessments and implementation of fundamental cybersecurity measures to protect your business.",
      icon: Shield,
      features: ["Security audits", "Risk assessment", "Policy development"]
    },
    {
      title: "Cloud Security Mastery",
      description: "Advanced cloud security solutions for AWS, Azure, and GCP to ensure your cloud infrastructure remains protected.",
      icon: Lock,
      features: ["Cloud security", "Access control", "Data protection"]
    },
    {
      title: "IT Security Infrastructure",
      description: "Robust security infrastructure design and implementation to safeguard your entire IT ecosystem.",
      icon: Server,
      features: ["Network security", "Endpoint protection", "Incident response"]
    }
  ];

  const securityTools = [
    {
      name: "Firewall Solutions",
      description: "Advanced firewall protection for network and application security",
      icon: Shield
    },
    {
      name: "Intrusion Detection",
      description: "Real-time threat detection and response systems",
      icon: Eye
    },
    {
      name: "Encryption Tools",
      description: "Data encryption and key management solutions",
      icon: Key
    },
    {
      name: "Security Monitoring",
      description: "24/7 security monitoring and alerting systems",
      icon: AlertTriangle
    }
  ];

  const features = [
    {
      title: "Comprehensive security coverage",
      description: "Our experts implement multi-layered security solutions that protect every aspect of your business."
    },
    {
      title: "Proactive threat prevention",
      description: "We focus on preventing security breaches before they occur through advanced monitoring and analysis."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                We provide<br />
                <span className="text-teal-200">Cybersecurity</span><br />
                protection solutions.
              </h1>
              <p className="text-xl text-teal-100 mb-8">
                COMPREHENSIVE IT SECURITY
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                                 <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">
                   Learn More About AppXcess
                 </button>
                 <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-teal-600 transition-colors">
                   Contact Us Now
                 </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Shield className="h-16 w-16 text-teal-200 mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  AppXcess Specializes in<br />
                  Cutting-Edge <span className="text-teal-200">Security Solutions.</span>
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-200 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold">{feature.title}</h4>
                        <p className="text-teal-100 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Empowering Your Business with Advanced Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive security solutions designed to protect your business from evolving cyber threats
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Security Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge security tools to provide comprehensive protection for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityTools.map((tool, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-teal-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-6">
                  <tool.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tool.name}</h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Mastering Cloud Security
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Protect your cloud infrastructure with our comprehensive security solutions for AWS, Azure, and GCP. We implement industry best practices to ensure your cloud assets remain secure and compliant.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Identity and access management (IAM)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Data encryption and key management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Security monitoring and compliance</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-gray-100 rounded-3xl p-8">
              <div className="w-full h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                  alt="Cloud Security Solutions"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Fundamentals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-teal-100 to-gray-100 rounded-3xl p-8">
                <div className="w-full h-80 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                    alt="Cybersecurity Fundamentals"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Cybersecurity Fundamentals & Best Practices
          </h2>
              <p className="text-xl text-gray-600 mb-8">
                Build a strong security foundation with our comprehensive cybersecurity fundamentals program. We help you understand threats, implement best practices, and create a security-aware culture within your organization.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Security awareness training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Incident response planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Security policy development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Intelligence Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Proactive Threat Intelligence & Response
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Stay ahead of cyber threats with our proactive threat intelligence and rapid response capabilities. We monitor the threat landscape and provide real-time alerts to protect your business from emerging risks.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">24/7 threat monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Real-time threat alerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Incident response automation</span>
                </div>
              </div>
          </div>
            <div className="bg-gradient-to-br from-teal-100 to-gray-100 rounded-3xl p-8">
              <div className="w-full h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                  alt="Threat Intelligence"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to secure your business with enterprise-grade cybersecurity?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            The smartest choice for comprehensive, proactive, and effective IT security solutions.
          </p>
                     <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">
             Contact us Now
           </button>
        </div>
      </section>


    </div>
  );
};

export default Cybersecurity;
