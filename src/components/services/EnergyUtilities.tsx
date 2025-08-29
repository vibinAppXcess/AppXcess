import React from 'react';
import { ArrowRight, Zap, BarChart3, Smartphone, Users, CheckCircle, Play, TrendingUp, Shield, Activity, Leaf } from 'lucide-react';

const EnergyUtilities: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-custom-blue to-custom-teal text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                Driving Sustainability<br />
                <span className="text-teal-300 drop-shadow-lg">in Energy and Utilities</span>
              </h1>
              <p className="text-xl mb-8 text-white drop-shadow-lg font-medium">
                Empowering energy and utility organizations with cutting-edge technology for improved efficiency, sustainability, and operational excellence.
              </p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-colors shadow-lg">
                More About Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">150+</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Energy Providers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">10</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Energy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">13</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Solutions Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">8</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Projects in Progress</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Makes Us<br />
              <span className="text-custom-teal">Unique?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At AppXcess Technologies, we provide tailored IT solutions that drive efficiency, sustainability, and innovation for the energy and utilities sector. Our expertise enables organizations to adapt to changing demands with ease.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Experts in Energy IT Transformation</h3>
                  <p className="text-gray-600">
                    Specialized knowledge in transforming energy and utility operations through innovative technology solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Solutions Used by 150+ Energy Providers</h3>
                  <p className="text-gray-600">
                    Proven track record with energy providers globally, delivering reliable and scalable solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Supporting Renewable Energy Transition</h3>
                  <p className="text-gray-600">
                    Smart technology solutions to support the transition to renewable energy sources and sustainable practices.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Assistance</h3>
                  <p className="text-gray-600">
                    Round-the-clock support to ensure uninterrupted utility operations and maximum uptime.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-custom-teal to-custom-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Empower Your Energy Solutions With Us</h3>
              <p className="text-lg mb-6">
                At AppXcess Technologies, we are committed to delivering innovative IT services for energy and utility providers, focusing on efficiency, sustainability, and growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-300 mb-1">10</div>
                  <div className="text-sm">Energy Clients Engaged</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-300 mb-1">7</div>
                  <div className="text-sm">Experts on Board</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-300 mb-1">13</div>
                  <div className="text-sm">Tailored Solutions Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-300 mb-1">8</div>
                  <div className="text-sm">Projects in Progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Process for Transforming Energy Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to revolutionizing energy and utility operations through strategic technology implementation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding</h3>
              <p className="text-gray-600">
                Gain in-depth insights into energy and utility challenges to design tailored solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planning</h3>
              <p className="text-gray-600">
                Develop strategic frameworks to streamline workflows and integrate innovative technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600">
                Deploy cutting-edge IT solutions to optimize processes and ensure seamless functionality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Optimization</h3>
              <p className="text-gray-600">
                Continuously refine systems for greater efficiency, sustainability, and adaptability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AppXcess Powers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                AppXcess Powers<br />
                <span className="text-custom-teal">Energy Transformation</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Revolutionizing energy distribution and renewable integration with cutting-edge technology solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Grid Innovations</h3>
                    <p className="text-gray-600">
                      Revolutionize energy distribution with real-time monitoring and automation tools.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Renewable Energy Integration</h3>
                    <p className="text-gray-600">
                      Seamless solutions to integrate solar, wind, and other renewable sources into your energy mix.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-custom-teal to-custom-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">About AppXcess</h3>
              <p className="text-lg mb-6">
                Leading the transformation of energy and utility operations through innovative technology solutions and sustainable practices.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Smart Grid Management - Real-time monitoring and control systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Renewable Energy Integration - Seamless renewable source management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Energy Analytics - Data-driven insights for optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Sustainability Solutions - Green technology implementation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Industry Updates - Stay informed with the latest trends and innovations in energy and utilities technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')"
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  The Role of IT in Revolutionizing Energy Management
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Explore how information technology is transforming energy management and distribution systems.
                </p>
                <a href="/Blog/Energy-Utilities-Transformation" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')"
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Harnessing the Power of Smart Meters
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Discover how smart metering technology is revolutionizing utility monitoring and customer engagement.
                </p>
                <a href="/Blog/Energy-Utilities-Smart-Meters" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')"
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Sustainable Energy: Integrating Renewables with IT
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Learn how technology is enabling seamless integration of renewable energy sources into existing grids.
                </p>
                <a href="/Blog/Energy-Utilities-Renewables" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
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
          backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Energy Operations?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            From strategy to execution, AppXcess Technologies is your partner in driving efficiency and innovation in the energy and utilities sector.
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

export default EnergyUtilities;
