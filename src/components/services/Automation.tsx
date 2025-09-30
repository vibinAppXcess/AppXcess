import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, CheckCircle, ChevronDown, ChevronUp, Bot, Workflow, Settings, Clock, TrendingUp } from 'lucide-react';

const Automation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('rpa');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const technologies = [
    {
      id: 'rpa',
      title: 'RPA (Robotic Process Automation)',
      description: 'AppXcess delivers comprehensive RPA solutions that automate repetitive tasks and streamline business processes. From data entry to report generation, our RPA tools increase efficiency and reduce human error.',
      features: ['Task automation', 'Process optimization', 'Error reduction', '24/7 operation'],
      icon: Bot,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80"
    },
    {
      id: 'automation-anywhere',
      title: 'Automation Anywhere',
      description: 'AppXcess implements Automation Anywhere solutions to create intelligent automation workflows that transform your business operations. Our expertise ensures seamless integration and maximum ROI.',
      features: ['Intelligent automation', 'Workflow optimization', 'Seamless integration', 'ROI maximization'],
      icon: Workflow,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 'uipath',
      title: 'UI Path',
      description: 'AppXcess leverages UI Path to build powerful automation solutions that handle complex business processes. Our RPA implementations drive productivity and operational excellence.',
      features: ['Complex process handling', 'Productivity enhancement', 'Operational excellence', 'Scalable solutions'],
      icon: Settings,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    }
  ];

  const workflow = [
    {
      step: '01',
      title: 'Analyze',
      description: 'Evaluate your current processes to identify automation opportunities and prioritize high-impact areas.'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Create comprehensive automation workflows that align with your business objectives and requirements.'
    },
    {
      step: '03',
      title: 'Implement',
      description: 'Deploy automation solutions using industry-leading tools and best practices for optimal performance.'
    },
    {
      step: '04',
      title: 'Optimize',
      description: 'Continuously monitor and refine automation processes to ensure maximum efficiency and ROI.'
    }
  ];

  const faqs = [
    {
      question: 'What is RPA and how can it benefit my business?',
      answer: 'Robotic Process Automation (RPA) uses software robots to automate repetitive, rule-based tasks. AppXcess implements RPA solutions that can reduce processing time by up to 80%, minimize errors, and free your team to focus on strategic initiatives.'
    },
    {
      question: 'Which automation platform is best for my business needs?',
      answer: 'AppXcess helps you choose the right automation platform based on your specific requirements. We work with Automation Anywhere, UI Path, and other leading tools to ensure the best fit for your business processes and goals.'
    },
    {
      question: 'How long does it take to implement automation solutions?',
      answer: 'Implementation timelines vary based on complexity, but most automation projects can be completed in 4-8 weeks. AppXcess follows an agile approach to ensure quick delivery and immediate value realization.'
    },
    {
      question: 'What support does AppXcess provide after automation deployment?',
      answer: 'We offer comprehensive post-deployment support including monitoring, maintenance, optimization, and training. Our team ensures your automation solutions continue to deliver maximum value and adapt to changing business needs.'
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-gray-50 min-h-screen">
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
                  Intelligent Process Automation
                </div>
                
                {/* Main Heading */}
                <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
                  <span className="block">Workflow</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">
                    Automation
                  </span>
                  <span className="block">Solutions</span>
              </h1>
                
                <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"></div>
                
                {/* Description */}
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transform your business operations with cutting-edge RPA and workflow automation technologies that streamline processes and boost productivity.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/Contact" className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-teal-700 inline-block text-center">
                    <span>Explore Solutions</span>
                  </Link>
                </div>
            </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-teal-600 mb-1">80%</div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-teal-600 mb-1">200+</div>
                  <div className="text-sm text-gray-600">Processes</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-teal-600 mb-1">99.9%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Interactive Demo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Automation Technology Hub</h3>
                  <p className="text-teal-100">Process Optimization Showcase</p>
                </div>
                
                {/* Technology Features */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">RPA Solutions</h4>
                      <p className="text-sm text-teal-100">Intelligent task automation</p>
                    </div>
                    <div className="w-3 h-3 bg-teal-300 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Workflow className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">Workflow Design</h4>
                      <p className="text-sm text-teal-100">Process optimization</p>
                    </div>
                    <div className="w-3 h-3 bg-teal-300 rounded-full animate-pulse delay-300"></div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">Integration</h4>
                      <p className="text-sm text-teal-100">Seamless deployment</p>
                    </div>
                    <div className="w-3 h-3 bg-teal-300 rounded-full animate-pulse delay-700"></div>
                      </div>
                    </div>
                
                {/* Progress Indicator */}
                <div className="mt-8">
                  <div className="flex justify-between text-sm text-teal-100 mb-2">
                    <span>Automation Readiness</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full transition-all duration-1000" style={{width: '90%'}}></div>
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
              About <span className="text-teal-600">AppXcess</span>
            </h2>
            <h3 className="text-2xl text-gray-600 mb-4">
              Why AppXcess Matters to Your Business?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shape the future of business operations with intelligent automation solutions in RPA and workflow optimization.
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

      {/* Integration Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Integration & Automation Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We integrate with leading automation platforms to deliver comprehensive workflow solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Zapier",
                description: "Connect apps and automate workflows between different services",
                icon: Zap
              },
              {
                name: "Make",
                description: "Visual automation platform for complex workflow creation",
                icon: Workflow
              },
              {
                name: "Enterprise Workflow",
                description: "Custom enterprise automation solutions for large organizations",
                icon: Settings
              },
              {
                name: "Process Automation",
                description: "End-to-end process automation and optimization",
                icon: Bot
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a streamlined approach to design and implement impactful automation solutions tailored to your business needs.
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
            <h3 className="text-2xl text-gray-600">Explore Automation Solutions</h3>
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

export default Automation;
