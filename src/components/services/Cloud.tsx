import React from 'react';
import { ArrowRight, Cloud as CloudIcon, Database, Shield, Zap, Users, TrendingUp, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cloud: React.FC = () => {
  const stats = [
    { number: "5", label: "Industries Served", icon: Users },
    { number: "15", label: "Team Members", icon: Users },
    { number: "10", label: "Custom Projects", icon: TrendingUp },
    { number: "30", label: "Tools Integrated", icon: Globe }
  ];

  const services = [
    {
      title: "Cloud Optimization",
      description: "Maximize your cloud infrastructure's efficiency and reduce costs with tailored optimization strategies.",
      icon: Zap,
      features: ["Cost optimization", "Performance tuning", "Resource management"]
    },
    {
      title: "Data Migration",
      description: "Seamlessly move your business data to the cloud with zero downtime and full security.",
      icon: Database,
      features: ["Zero downtime", "Full security", "Seamless transition"]
    },
    {
      title: "Hybrid Cloud Solutions",
      description: "Combine the best of public and private cloud to achieve flexibility and security.",
      icon: CloudIcon,
      features: ["Flexibility", "Security", "Scalability"]
    }
  ];

  const features = [
    {
      title: "Seamless cloud migration",
      description: "Our experts ensure a smooth transition with minimal downtime and maximum efficiency."
    },
    {
      title: "Custom cloud strategies",
      description: "We design solutions that align with your goals, boosting productivity and innovation."
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
                <span className="text-teal-200">cloud support</span><br />
                smart solutions.
              </h1>
              <p className="text-xl text-teal-100 mb-8">
                SOLUTION FOR YOUR BUSINESS
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors flex items-center justify-center">
                  Learn More About AppXcess
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <Link to="/Contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors inline-block text-center">
                  Contact Us Now
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <CloudIcon className="h-16 w-16 text-teal-200 mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  AppXcess Specializes in<br />
                  Cutting-Edge <span className="text-teal-200">Cloud Solutions.</span>
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
              Empowering Your Business with Advanced Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive cloud solutions designed to transform your business operations
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to elevate your business with powerful cloud solutions?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            The smartest choice for scalable, secure, and efficient cloud services.
          </p>
          <Link to="/Contact" className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors text-lg inline-block text-center">
            Contact us Now
          </Link>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
            <h3 className="text-2xl text-gray-600">Cloud Scalability & Performance</h3>
            <p className="text-gray-600 mt-2">
              Enabling business agility through cloud computing, scalability, and resilience.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Impact of Cloud Computing on Business Operations",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
                description: "Explore the latest insights and trends in cloud computing technology."
              },
              {
                title: "The Power of Cloud Computing in Modern Business Operations",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
                description: "Discover how cloud computing is revolutionizing business processes."
              },
              {
                title: "Leveraging Cloud Computing for Business Scalability",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
                description: "Learn strategies for scaling your business with cloud solutions."
              }
            ].map((article, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h4>
                <p className="text-gray-600">
                  {article.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cloud;
