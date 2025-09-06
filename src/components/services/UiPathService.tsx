import React, { useState } from 'react';
import { ArrowRight, Zap, Users, CheckCircle, ChevronDown, ChevronUp, Bot, Workflow, Settings, Clock, TrendingUp, Brain, Eye, Layers, Search, Play, Monitor, Cloud, Lock, Award, Star, Target, Shield, BarChart3, Cpu, Lightbulb } from 'lucide-react';

const UiPathService: React.FC = () => {
  const [activeTab, setActiveTab] = useState('platform');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const technologies = [
    {
      id: 'platform',
      title: 'UiPath Business Automation Platform',
      description: 'AppXcess leverages UiPath\'s comprehensive automation platform to transform your business operations. From discovery to deployment, we help you build intelligent workflows that scale across your organization.',
      features: ['Process Discovery', 'Bot Development', 'Orchestration', 'AI Integration'],
      icon: Bot,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80"
    },
    {
      id: 'studio',
      title: 'Studio & StudioX Development',
      description: 'Our team creates powerful automation workflows using UiPath Studio\'s low-code visual designer. We build both attended and unattended bots that integrate seamlessly with your existing systems.',
      features: ['Visual Workflow Design', 'Low-Code Development', 'Citizen Developer Tools', 'Rapid Prototyping'],
      icon: Workflow,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 'orchestrator',
      title: 'Orchestrator & Management',
      description: 'We deploy and manage your UiPath automation fleet through Orchestrator, providing centralized control, monitoring, and governance for all your robotic processes.',
      features: ['Centralized Management', 'Real-time Monitoring', 'Security & Compliance', 'Scalable Deployment'],
      icon: Settings,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    }
  ];

  const workflow = [
    {
      step: '01',
      title: 'Discover',
      description: 'Use AI-driven process mining and task mining to identify high-impact automation opportunities across your organization.'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Create comprehensive automation workflows using UiPath Studio\'s visual designer and low-code tools.'
    },
    {
      step: '03',
      title: 'Deploy',
      description: 'Implement automations through Orchestrator with proper governance, security, and monitoring capabilities.'
    },
    {
      step: '04',
      title: 'Scale',
      description: 'Continuously optimize and expand your automation portfolio to drive maximum business value and ROI.'
    }
  ];

  const faqs = [
    {
      question: 'Why choose UiPath over other RPA platforms?',
      answer: 'UiPath is recognized as the #1 RPA platform for 2025, offering superior usability, integration capabilities, and scalability. AppXcess leverages UiPath\'s AI-powered features and comprehensive ecosystem to deliver enterprise-grade automation solutions.'
    },
    {
      question: 'How does UiPath\'s AI integration enhance automation?',
      answer: 'UiPath\'s AI Center and Document Understanding capabilities enable intelligent automation that goes beyond simple rule-based tasks. Our implementations include AI-powered decision making, document processing, and adaptive workflows.'
    },
    {
      question: 'What support does AppXcess provide for UiPath implementations?',
      answer: 'We provide end-to-end UiPath services including platform setup, bot development, Orchestrator configuration, user training, and ongoing support. Our team ensures your automation solutions deliver maximum value.'
    },
    {
      question: 'How long does it take to implement UiPath automation?',
      answer: 'Implementation timelines vary based on complexity, but most UiPath projects can be completed in 4-8 weeks. We follow UiPath\'s best practices and agile methodology for rapid deployment and value realization.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-blue-50 min-h-screen">
        {/* Diagonal Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-600/20 via-transparent to-teal-700/10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-teal-500/15 to-transparent"></div>
        </div>
        
        {/* Animated Shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-teal-300/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-teal-400/40 transform rotate-45 animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Status Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
                  Enterprise-Grade RPA Platform
                </div>
                
                {/* Main Heading */}
                <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
                  <span className="block">UiPath</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">
                    Automation
                  </span>
                  <span className="block">Solutions</span>
              </h1>
                
                <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"></div>
                
                {/* Description */}
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transform your business with UiPath's intelligent, scalable automation platform. From discovery to deployment, we deliver enterprise-grade RPA solutions that drive productivity and operational excellence.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-teal-700">
                    <span>Explore UiPath Solutions</span>
                  </button>
                  <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-teal-600 hover:text-white">
                    <span>Learn More</span>
                  </button>
              </div>
            </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-teal-600 mb-1">#1</div>
                  <div className="text-sm text-gray-600">RPA Platform</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-teal-600 mb-1">90%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-teal-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Operation</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Interactive Demo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">UiPath Platform Hub</h3>
                  <p className="text-teal-100">Intelligent Automation Showcase</p>
                </div>
                
                {/* Technology Features */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">Studio Development</h4>
                      <p className="text-sm text-teal-100">Visual workflow design</p>
                    </div>
                    <div className="w-3 h-3 bg-teal-300 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">Orchestrator</h4>
                      <p className="text-sm text-teal-100">Centralized management</p>
                    </div>
                    <div className="w-3 h-3 bg-teal-300 rounded-full animate-pulse delay-300"></div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">AI Integration</h4>
                      <p className="text-sm text-teal-100">Intelligent automation</p>
                    </div>
                    <div className="w-3 h-3 bg-teal-300 rounded-full animate-pulse delay-700"></div>
                      </div>
                    </div>
                
                {/* Progress Indicator */}
                <div className="mt-8">
                  <div className="flex justify-between text-sm text-teal-100 mb-2">
                    <span>Automation Readiness</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full transition-all duration-1000" style={{width: '95%'}}></div>
                </div>
              </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full opacity-30 animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-teal-600">UiPath</span> with AppXcess
            </h2>
            <h3 className="text-2xl text-gray-600 mb-4">
              Why Choose UiPath for Your Automation Journey?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              UiPath is the leading enterprise automation platform, trusted by businesses worldwide. AppXcess delivers comprehensive UiPath solutions that transform your operations.
            </p>
          </div>

          {/* Technology Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {technologies.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveTab(tech.id)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${
                      activeTab === tech.id
                        ? 'bg-teal-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {tech.title}
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-3xl p-8 lg:p-12">
              {technologies.map((tech) => (
                <div key={tech.id} className={activeTab === tech.id ? 'block' : 'hidden'}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-6">
                        <tech.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">{tech.title}</h3>
                      <p className="text-lg text-gray-600 mb-8">{tech.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        {tech.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-teal-200">
                      <div className="w-full h-64 rounded-lg overflow-hidden">
                        <img 
                          src={tech.image} 
                          alt={tech.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* UiPath Components Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">UiPath Platform Components</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of tools that power enterprise automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Studio & StudioX",
                description: "Low-code visual IDEs for both developers and citizen developers",
                icon: Layers
              },
              {
                name: "Robots",
                description: "Attended and unattended bots that execute workflows across applications",
                icon: Bot
              },
              {
                name: "Orchestrator",
                description: "Central command center for deploying, scheduling, and monitoring bots",
                icon: Monitor
              },
              {
                name: "AI Center",
                description: "AI-powered insights and intelligent automation capabilities",
                icon: Brain
              }
            ].map((tool, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
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

      {/* Workflow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our UiPath Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow UiPath's proven methodology to design and implement impactful automation solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-6 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-teal-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
            <h3 className="text-2xl text-gray-600">Explore UiPath Solutions</h3>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-teal-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default UiPathService;
