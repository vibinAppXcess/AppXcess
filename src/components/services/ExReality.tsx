import React, { useState } from 'react';
import { ArrowRight, Eye, Globe, Users, Zap, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const ExReality: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ar');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const technologies = [
    {
      id: 'ar',
      title: 'Augmented Reality',
      description: 'AppXcess delivers tailored Augmented Reality solutions to overlay digital elements onto real-world environments. From immersive training modules to engaging marketing experiences, our AR applications enhance interaction and streamline operations.',
      features: ['Immersive training modules', 'Engaging marketing experiences', 'Enhanced interaction', 'Streamlined operations'],
      icon: Eye,
      image: "https://images.unsplash.com/photo-1622979143011-da4c6c46c667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 'vr',
      title: 'Virtual Reality',
      description: 'AppXcess creates immersive Virtual Reality experiences to revolutionize training, collaboration, and customer engagement. Our VR platforms enable realistic simulations and virtual environments that drive innovation.',
      features: ['Realistic simulations', 'Virtual environments', 'Training & collaboration', 'Customer engagement'],
      icon: Globe,
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
    },
    {
      id: 'metaverse',
      title: 'Metaverse',
      description: 'AppXcess helps businesses enter the Metaverse by building custom virtual worlds for collaboration, commerce, and engagement. Our solutions allow you to connect with audiences in entirely new ways.',
      features: ['Custom virtual worlds', 'Collaboration platforms', 'Commerce solutions', 'Audience engagement'],
      icon: Users,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const workflow = [
    {
      step: '01',
      title: 'Discover',
      description: 'Analyze your business objectives to identify opportunities for AR, VR, and Metaverse integration.'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Create intuitive and immersive experiences, ensuring alignment with your vision and goals.'
    },
    {
      step: '03',
      title: 'Develop',
      description: 'Build scalable, high-performing solutions using the latest Extended Reality technologies.'
    },
    {
      step: '04',
      title: 'Deliver',
      description: 'Seamlessly deploy and support your solution for a smooth and impactful user experience.'
    }
  ];

  const faqs = [
    {
      question: 'What is Extended Reality, and how does it work?',
      answer: 'Extended Reality (XR) combines augmented reality (AR), virtual reality (VR), and the Metaverse to create immersive digital experiences. AppXcess develops customized XR solutions tailored to your business needs, whether for training, marketing, or collaboration.'
    },
    {
      question: 'Do I need specific hardware to use XR solutions?',
      answer: 'AppXcess ensures compatibility with various devices, including AR glasses, VR headsets, and mobile devices. We help you identify the best tools for your use case.'
    },
    {
      question: 'Can I customize XR solutions for my business needs?',
      answer: 'Yes, AppXcess provides customized XR solutions. Whether you need AR applications for marketing, VR training modules, or Metaverse platforms, we design and deliver based on your goals.'
    },
    {
      question: 'What support does AppXcess provide after deployment?',
      answer: 'We offer end-to-end support, including regular updates, system maintenance, and scaling solutions as your business grows. Our team ensures your XR tools remain effective and future-proof.'
    }
  ];

  const articles = [
    {
      title: "AR's Growing Impact on Modern Marketing",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Discover the latest trends and insights in extended reality technology."
    },
    {
      title: "Employee Training with Extended Reality (XR)",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      description: "Explore how XR is transforming corporate training and development."
    },
    {
      title: "The Next 100 Things To Immediately Do About",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Future-proof your business with cutting-edge XR strategies."
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
                  Immersive Technology Solutions
                </div>
                
                {/* Main Heading */}
                <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
                  <span className="block">Virtual</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">
                    Reality
                  </span>
                  <span className="block">Solutions</span>
                </h1>
                
                <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"></div>
                
                {/* Description */}
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transform your business with cutting-edge AR, VR, and Metaverse technologies that create immersive digital experiences.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="group bg-gradient-to-r from-teal-600 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-teal-700 hover:to-teal-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <span>Explore Solutions</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="group border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300">
                    <span>Learn More</span>
                  </button>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-teal-600 mb-1">150+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-teal-600 mb-1">45+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-teal-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Success</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Interactive Demo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">XR Technology Hub</h3>
                  <p className="text-teal-100">Interactive Experience Showcase</p>
                </div>
                
                {/* Technology Features */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">Augmented Reality</h4>
                      <p className="text-sm text-teal-100">Digital overlay on real world</p>
                    </div>
                    <div className="w-3 h-3 bg-teal-300 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">Virtual Reality</h4>
                      <p className="text-sm text-teal-100">Immersive 3D environments</p>
                    </div>
                    <div className="w-3 h-3 bg-teal-300 rounded-full animate-pulse delay-300"></div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">Metaverse</h4>
                      <p className="text-sm text-teal-100">Shared virtual spaces</p>
                    </div>
                    <div className="w-3 h-3 bg-teal-300 rounded-full animate-pulse delay-700"></div>
                  </div>
                </div>
                
                {/* Progress Indicator */}
                <div className="mt-8">
                  <div className="flex justify-between text-sm text-teal-100 mb-2">
                    <span>Technology Readiness</span>
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
              About <span className="text-teal-600">AppXcess</span>
            </h2>
            <h3 className="text-2xl text-gray-600 mb-4">
              Why AppXcess Matters to Your Business?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shape the future of business with immersive solutions in AR, VR, and the Metaverse.
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

      {/* Workflow Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a streamlined approach to design and implement impactful AR, VR, and Metaverse solutions tailored to your business needs.
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
            <h3 className="text-2xl text-gray-600">Explore Extended Reality Solutions</h3>
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

      {/* Articles Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Articles</h2>
            <h3 className="text-2xl text-teal-100 mb-4">
              Extended Reality in Focus: Latest Insights
            </h3>
            <p className="text-teal-100 max-w-3xl mx-auto">
              Explore the latest developments, trends, and success stories showcasing how AR, VR, and the Metaverse are transforming industries and redefining possibilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-2">{article.title}</h4>
                <p className="text-teal-100">
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

export default ExReality;
