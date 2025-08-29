import React from 'react';
import { ArrowRight, Wifi, BarChart3, Smartphone, Users, CheckCircle, Play, TrendingUp, Shield, Activity, Zap, Cloud } from 'lucide-react';

const Telecommunications: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-custom-blue to-custom-teal text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                Empowering Telecom<br />
                <span className="text-teal-300 drop-shadow-lg">with Innovative Solutions</span>
              </h1>
              <p className="text-xl mb-8 text-white drop-shadow-lg font-medium">
                Transforming connectivity and efficiency in the telecommunications sector with cutting-edge technology solutions.
              </p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-colors shadow-lg">
                Discover More About Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">100+</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Network Solutions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">50+</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Telecom Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">25+</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">IoT Integrations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">99%</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Uptime Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unlocking Telecom Potential Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Unlocking Telecom<br />
              <span className="text-custom-teal">Potential</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering Telecommunications with Smart IT Solutions - Revolutionizing connectivity and efficiency in the telecom sector.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-custom-teal">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Network Optimization</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Improve performance and reduce downtime with advanced optimization tools and real-time monitoring.
              </p>
              <a href="/Blog/Telecom-Data-Analytics" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-custom-teal">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience Enhancements</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Deliver seamless, personalized customer interactions with tailored IT solutions and advanced analytics.
              </p>
              <a href="/Blog/Telecom-Big-Data" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-custom-teal">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud-Based Solutions</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Transform operations with scalable and secure cloud-based infrastructure for telecom services.
              </p>
              <a href="/Blog/Telecom-Decision-Impact" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-custom-teal">4</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IoT Integration</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Enable smart device connectivity and automation across telecom infrastructures and networks.
              </p>
              <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Edge Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Strategic Edge
              </h2>
              <h3 className="text-3xl font-bold text-custom-teal mb-6">
                Revolutionizing Telecom with Advanced Solutions
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                AppXcess Technologies delivers innovative tools and strategies tailored to address the unique challenges of the telecommunication sector, enabling seamless connectivity and improved efficiency.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Network Infrastructure</h3>
                    <p className="text-gray-600">
                      Advanced network solutions for optimal performance and reliability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Integration</h3>
                    <p className="text-gray-600">
                      Scalable cloud solutions for modern telecom operations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Security Solutions</h3>
                    <p className="text-gray-600">
                      Robust security measures for protecting telecom infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-custom-teal to-custom-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Empower Seamless Connectivity and Efficiency</h3>
              <p className="text-lg mb-6">
                AppXcess Technologies delivers cutting-edge solutions to optimize telecommunication systems, enhance scalability, and provide an intuitive user experience. Redefine connectivity with tools designed to meet the demands of a fast-evolving industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Network Optimization - Advanced performance monitoring and optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Cloud Infrastructure - Scalable and secure cloud-based solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>IoT Integration - Smart device connectivity and automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Customer Experience - Personalized and seamless interactions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Approach to Redefining Telecom
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive methodology for revolutionizing telecommunications through strategic technology implementation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Discovery</h3>
              <p className="text-gray-600">
                Dive into your network's capabilities and challenges to uncover opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Blueprint Creation</h3>
              <p className="text-gray-600">
                Craft a tailored roadmap to enhance connectivity and streamline operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Execution</h3>
              <p className="text-gray-600">
                Deploy innovative solutions to maximize efficiency and drive seamless integration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Evolution</h3>
              <p className="text-gray-600">
                Continuously adapt and upgrade systems to meet the growing demands of the telecom industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest News
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-Driven Insights & Smart Decisions - Driving telecom innovation with big data, analytics, and informed strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')"
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  The Role of Data Analytics in Making Informed Business Decisions
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Explore how data analytics is transforming decision-making processes in the telecommunications industry.
                </p>
                <a href="/Blog/Telecom-Data-Analytics" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')"
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Harnessing the Power of Big Data for Strategic Decision-Making
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Discover how big data is revolutionizing strategic planning and operational efficiency in telecom.
                </p>
                <a href="/Blog/Telecom-Big-Data" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')"
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  The Impact of Big Data on Business Decision-Making
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Learn about the transformative impact of big data analytics on business strategies and outcomes.
                </p>
                <a href="/Blog/Telecom-Decision-Impact" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-custom-blue to-custom-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Elevate Your Telecom Operations?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            From planning to deployment, AppXcess Technologies empowers telecom providers with innovative solutions to enhance connectivity and optimize networks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-custom-teal px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Reach Out Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-custom-teal transition-colors flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Telecommunications;
