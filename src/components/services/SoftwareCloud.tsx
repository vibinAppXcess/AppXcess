import React from 'react';
import { ArrowRight, Shield, Users, Zap, Globe, Lock, TrendingUp, CheckCircle, Star, Code, Cloud, Smartphone, Database, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwareCloud: React.FC = () => {
  const trustFactors = [
    {
      title: "Full Stack Development",
      description: "AppXcess offers comprehensive full stack development services with cloud deployment, ensuring scalable and robust applications.",
      icon: Code
    },
    {
      title: "Mobile App Development",
      description: "Create powerful mobile applications that work seamlessly across all devices and platforms with our expert development team.",
      icon: Smartphone
    },
    {
      title: "Cloud Computing & DevOps",
      description: "Leverage AWS, Azure, and GCP with our DevOps expertise to build scalable, secure, and efficient cloud solutions.",
      icon: Cloud
    },
    {
      title: "No-Code Development",
      description: "Build applications faster with Bubble.io, Outsystems, and other no-code platforms for rapid prototyping and development.",
      icon: Zap
    },
    {
      title: "IT Support & Enterprise Systems",
      description: "Comprehensive IT support and enterprise system development to keep your business running smoothly and efficiently.",
      icon: Server
    },
    {
      title: "Future-Proof Architecture",
      description: "Built with cutting-edge technology, AppXcess ensures your software solutions thrive in the evolving digital landscape.",
      icon: Lock
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We analyze your business needs and technical requirements to design the perfect software solution."
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Our expert team designs and develops your application using the latest technologies and best practices."
    },
    {
      step: "03",
      title: "Cloud Deployment",
      description: "We deploy your solution to the cloud with proper DevOps practices and monitoring in place."
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
              Next-Generation Software Development
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black leading-tight text-gray-900 mb-8">
              <span className="block">Software</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">
                Development
              </span>
              <span className="block">& Cloud</span>
              </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Transform your business with cutting-edge software development, cloud computing, and DevOps solutions that redefine digital innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                             <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-teal-700">
                 <span>Start Building</span>
               </button>
               <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-teal-600 hover:text-white">
                 <span>Learn More</span>
               </button>
              </div>
            </div>
          
          {/* Middle Section - Stacked Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Card 1 - Full Stack Development */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Stack Development</h3>
                <p className="text-gray-600 mb-6">Complete web applications with cloud deployment and DevOps integration.</p>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
                <div className="mt-4 text-sm text-gray-500">95% Efficiency</div>
              </div>
            </div>
            
            {/* Card 2 - Mobile Development */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Apps</h3>
                <p className="text-gray-600 mb-6">Cross-platform mobile applications for iOS and Android devices.</p>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full" style={{width: '88%'}}></div>
                </div>
                <div className="mt-4 text-sm text-gray-500">88% Adoption</div>
              </div>
            </div>
            
            {/* Card 3 - Cloud & DevOps */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Cloud className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud & DevOps</h3>
                <p className="text-gray-600 mb-6">AWS, Azure, GCP with automated deployment and monitoring.</p>
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
                <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-teal-600 mb-2">150+</div>
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
              <h3 className="text-4xl font-bold mb-6">Ready to Build Your Next Software Solution?</h3>
              <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
                Discover how AppXcess can transform your business with cutting-edge software development and cloud solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                 <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-teal-50 transition-all duration-300">
                   Get Started Today
                 </button>
                 <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-teal-600 transition-all duration-300">
                   Schedule Demo
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
                Manage Your Software Projects Seamlessly
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Simplify collaboration and streamline operations with development tools that bring all your software projects, cloud deployments, and DevOps processes into one secure platform. Discover how AppXcess makes software development effortless.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700">Unified software project management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700">Cloud deployment & DevOps automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700">Mobile app development solutions</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-gray-100 rounded-3xl p-8">
              <div className="w-full h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Software Development Interface"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* No-Code Development Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-teal-100 to-gray-100 rounded-3xl p-8">
                <div className="w-full h-80 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="No-Code Development"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                No-Code Development Solutions
            </h2>
              <p className="text-xl text-gray-600 mb-8">
                Accelerate your development process with Bubble.io, Outsystems, and other leading no-code platforms. AppXcess helps you build applications faster without sacrificing quality or scalability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700">Bubble.io application development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700">Outsystems enterprise solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700">Rapid prototyping & MVP development</span>
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
              Developers Trust AppXcess.<br />
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
            <h3 className="text-3xl font-bold mb-4">Start Your Development Journey Today</h3>
            <p className="text-teal-100 mb-8 max-w-3xl mx-auto">
              Unlock the future with AppXcess. Discover seamless development and innovation with our software and cloud solutions.
            </p>
            <Link to="/Contact">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors text-lg">
                Reach Out Now!
              </button>
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
};

export default SoftwareCloud;
