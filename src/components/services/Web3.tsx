import React from 'react';
import { ArrowRight, Shield, Users, Zap, Globe, Lock, TrendingUp, CheckCircle, Star } from 'lucide-react';

const Web3: React.FC = () => {
  const trustFactors = [
    {
      title: "Unified Platform",
      description: "AppXcess offers a single, integrated space for managing blockchain projects, smart contracts, and dApps effortlessly.",
      icon: Globe
    },
    {
      title: "Career-Driven Growth",
      description: "Unlock opportunities to grow with Web3, where creators, developers, and startups shape the decentralized future.",
      icon: TrendingUp
    },
    {
      title: "Collaborative Ecosystem",
      description: "Connect with innovators and entrepreneurs within our ever-expanding Web3 community.",
      icon: Users
    },
    {
      title: "Streamlined Interfaces",
      description: "AppXcess focuses on a clean, intuitive design to simplify even the most complex blockchain workflows.",
      icon: Zap
    },
    {
      title: "Affordable Startup Tools",
      description: "Tailored for startups, AppXcess delivers Web3 solutions that fit your budget and scale as you grow.",
      icon: Shield
    },
    {
      title: "Future-Proof Design",
      description: "Built with cutting-edge technology, AppXcess ensures your business thrives in the evolving decentralized landscape.",
      icon: Lock
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Join Our Web3 Community",
      description: "Connect with innovators and professionals in our growing Web3 ecosystem on your favorite platforms."
    },
    {
      step: "02",
      title: "Connect with Us",
      description: "Get in touch with AppXcess and take the first step toward innovation. We're here to support you."
    },
    {
      step: "03",
      title: "Let AppXcess Deliver Your Vision",
      description: "Start your Web3 journey with our expert team and cutting-edge solutions."
    }
  ];

  const articles = [
    {
      title: "The Future of AI and Machine Learning in Business",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Explore the latest insights and trends in AI-powered business innovation."
    },
    {
      title: "How AI is Revolutionizing Business Operations",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Discover how artificial intelligence is transforming modern business processes."
    },
    {
      title: "The Role of AI in Customer Relationship Management (CRM)",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Learn how AI is enhancing customer relationship management systems."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-gray-50 min-h-screen">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-600/5 via-transparent to-teal-700/5"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
          <div className="absolute top-48 right-1/3 w-1 h-1 bg-teal-500 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping delay-2000"></div>
          <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-teal-500 rounded-full animate-ping delay-1500"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Top Section - Badge and Title */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-8 border border-teal-200">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
              Next-Generation Blockchain Solutions
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black leading-tight text-gray-900 mb-8">
              <span className="block">Web3</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">
                Revolution
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Transform your business with cutting-edge blockchain technology, smart contracts, and decentralized applications that redefine digital innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-teal-600 to-teal-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-teal-700 hover:to-teal-600 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-teal-500/25 transform hover:-translate-y-2">
                <span>Start Building</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group border-3 border-teal-600 text-teal-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-teal-600 hover:text-white transition-all duration-300">
                <span>Learn More</span>
              </button>
            </div>
          </div>
          
          {/* Middle Section - Stacked Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Card 1 - Smart Contracts */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Lock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Contracts</h3>
                <p className="text-gray-600 mb-6">Automated, secure, and transparent contract execution on the blockchain.</p>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
                <div className="mt-4 text-sm text-gray-500">95% Efficiency</div>
              </div>
            </div>
            
            {/* Card 2 - DeFi Solutions */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">DeFi Solutions</h3>
                <p className="text-gray-600 mb-6">Decentralized financial services and applications for modern finance.</p>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full" style={{width: '88%'}}></div>
                </div>
                <div className="mt-4 text-sm text-gray-500">88% Adoption</div>
              </div>
            </div>
            
            {/* Card 3 - dApps */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">dApps</h3>
                <p className="text-gray-600 mb-6">Decentralized applications that run on blockchain networks.</p>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
                <div className="mt-4 text-sm text-gray-500">92% Reliability</div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section - Stats and CTA */}
          <div className="text-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-teal-600 mb-2">300+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-teal-600 mb-2">100+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-teal-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-4xl font-bold mb-6">Ready to Join the Web3 Revolution?</h3>
              <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
                Discover how AppXcess can transform your business with cutting-edge blockchain solutions and decentralized applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 transition-all duration-300 text-lg">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Management Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Manage Your Decentralized Projects Seamlessly
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Simplify collaboration and streamline operations with Web3 tools that bring all your blockchain projects, smart contracts, and decentralized apps into one secure platform. Discover how AppXcess makes decentralized project management effortless.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700">Unified blockchain project management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700">Smart contract development & deployment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700">Decentralized application solutions</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-gray-100 rounded-3xl p-8">
              <div className="w-full h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Project Management Interface"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-teal-100 to-gray-100 rounded-3xl p-8">
                <div className="w-full h-80 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Web3 Solutions Dashboard"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Empower Your Business with Web3 Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Unlock the potential of decentralized technology with AppXcess. Our blockchain expertise, smart contracts, and dApp development empower businesses to innovate, scale, and thrive in a decentralized economy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700">Blockchain expertise & consulting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700">Smart contract development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700">dApp development & deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Factors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Creators Trust AppXcess.<br />
              <span className="text-teal-600">Here's Why:</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFactors.map((factor, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-teal-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-6">
                  <factor.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{factor.title}</h3>
                <p className="text-gray-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Let's Build Together<br />
              <span className="text-teal-200">AppXcess Welcomes You</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {journeySteps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-teal-100">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-3xl font-bold mb-4">Start Your Web3 Journey Today</h3>
            <p className="text-teal-100 mb-8 max-w-3xl mx-auto">
              Unlock the future with AppXcess. Discover seamless growth and innovation with our Web3 solutions.
            </p>
            <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors text-lg">
              Reach Out Now!
            </button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
            <h3 className="text-2xl text-gray-600">AI-Powered Business Innovation</h3>
            <p className="text-gray-600 mt-2">
              Redefining operations and customer experiences with AI and intelligent systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-teal-100">
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

export default Web3;
