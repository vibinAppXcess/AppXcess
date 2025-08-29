import React from 'react';
import { ArrowRight, Brain, Database, Shield, Zap, Users, TrendingUp, Globe, BarChart3, Cpu, Eye, MessageSquare } from 'lucide-react';

const DataAI: React.FC = () => {
  const stats = [
    { number: "8", label: "Industries Served", icon: Users },
    { number: "25", label: "Team Members", icon: Users },
    { number: "50+", label: "AI Projects", icon: TrendingUp },
    { number: "40+", label: "Tools Integrated", icon: Globe }
  ];

  const services = [
    {
      title: "AI-Driven Data Science & ML",
      description: "Advanced machine learning solutions that transform raw data into actionable business intelligence.",
      icon: Brain,
      features: ["Predictive analytics", "Deep learning models", "Real-time insights"]
    },
    {
      title: "Business Analytics & Decision Intelligence",
      description: "Comprehensive analytics platforms that empower data-driven decision making across your organization.",
      icon: BarChart3,
      features: ["Interactive dashboards", "KPI tracking", "Performance metrics"]
    },
    {
      title: "Computer Vision & NLP",
      description: "Cutting-edge AI applications for image recognition, text analysis, and natural language processing.",
      icon: Eye,
      features: ["Image recognition", "Text analysis", "Language models"]
    }
  ];

  const platforms = [
    {
      name: "Databricks",
      description: "Unified analytics platform for data engineering and machine learning",
      icon: Database
    },
    {
      name: "Dataiku",
      description: "Collaborative data science platform for enterprise AI",
      icon: Cpu
    },
    {
      name: "Datarobot",
      description: "Automated machine learning platform for predictive analytics",
      icon: Brain
    },
    {
      name: "Hugging Face",
      description: "Leading platform for AI and NLP tools and models",
      icon: MessageSquare
    }
  ];

  const features = [
    {
      title: "Advanced AI algorithms",
      description: "Our experts implement cutting-edge machine learning models for maximum accuracy and performance."
    },
    {
      title: "Scalable data infrastructure",
      description: "We design robust data architectures that grow with your business needs and data volume."
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
                <span className="text-teal-200">Data & AI</span><br />
                smart solutions.
              </h1>
              <p className="text-xl text-teal-100 mb-8">
                AI-POWERED BUSINESS INTELLIGENCE
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
                <Brain className="h-16 w-16 text-teal-200 mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  AppXcess Specializes in<br />
                  Cutting-Edge <span className="text-teal-200">Data & AI Solutions.</span>
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
              Empowering Your Business with Advanced Data & AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive AI and data science solutions designed to transform your business operations
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

      {/* AI Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leading AI Platforms & Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We integrate with the most advanced AI platforms to deliver cutting-edge solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-teal-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-6">
                  <platform.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                <p className="text-gray-600 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Python & Development Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Python for Data & AI Projects
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our expert team leverages Python's powerful ecosystem for data science, machine learning, and AI development. We build scalable, production-ready solutions that drive business value.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Custom AI model development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Data pipeline automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">API development & integration</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-gray-100 rounded-3xl p-8">
              <div className="w-full h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Python AI Development"
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
            Ready to unlock the power of AI and data science?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            The smartest choice for intelligent, scalable, and efficient AI-powered business solutions.
          </p>
                     <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">
             Contact us Now
           </button>
        </div>
      </section>


    </div>
  );
};

export default DataAI;
