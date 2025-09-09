import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Cpu, BarChart3, CheckCircle, Play } from 'lucide-react';

const Manufacturing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-custom-blue to-custom-teal text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                Optimizing Supply Chains. <span className="text-teal-300 drop-shadow-lg">Empowering Manufacturing.</span>
              </h1>
              <p className="text-xl mb-8 text-white drop-shadow-lg font-medium">
                Transforming industries with innovative solutions that drive efficiency, optimize operations, and scale manufacturing processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/About" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-colors shadow-lg">
                  More About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/Contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-custom-teal transition-colors flex items-center justify-center gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">25</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Satisfied Industrial Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">15</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Optimized Supply Chains</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">45</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Advanced Programs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">5</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Industry Experts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Driving Innovation for<br />
              <span className="text-custom-teal">Manufacturing and Supply Chains</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform processes, enhance efficiency, and scale operations with cutting-edge technology solutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Manufacturing</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Leverage IoT and automation to optimize factory operations, improve productivity, and reduce operational costs.
              </p>
              
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain Optimization</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Streamline logistics and optimize inventory management with intelligent data-driven solutions.
              </p>
              
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom ERP Development</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Tailored and robust enterprise systems for seamless and efficient resource planning and management.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Our Business
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                At AppXcess, we are committed to driving innovation and excellence in the manufacturing and supply chain sectors. With a focus on enhancing productivity, optimizing operations, and ensuring seamless workflows, our solutions empower businesses to meet their evolving demands with confidence and efficiency.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-custom-teal" />
                  <span className="text-gray-700">Achieve operational efficiency with custom automation solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-custom-teal" />
                  <span className="text-gray-700">Utilize advanced analytics for smarter inventory and resource planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-custom-teal" />
                  <span className="text-gray-700">Foster seamless communication across teams and departments</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-custom-teal" />
                  <span className="text-gray-700">Tailored technologies designed to grow with your business needs</span>
                </div>
              </div>
              
              <Link to="/About" className="mt-8 bg-custom-teal hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-colors">
                More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-custom-teal to-custom-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Empowering Your Manufacturing & Supply Chain</h3>
              <p className="text-lg mb-6">
                Optimize your business operations with AppXcess's transformative solutions tailored for manufacturing and supply chain excellence. From enhanced efficiency to smarter resource management, we help you stay ahead in a competitive market.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">25</div>
                  <div className="text-sm">Satisfied Industrial Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15</div>
                  <div className="text-sm">Optimized Supply Chains</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">45</div>
                  <div className="text-sm">Advanced Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">5</div>
                  <div className="text-sm">Industry Experts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Insights for Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with the latest trends and advancements in manufacturing and supply chain innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('/src/assets/images/close-up-anthropomorphic-robot-working-as-delivery-man.jpg')"
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Revolutionizing Supply Chains with AI Technology
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Discover how artificial intelligence is transforming traditional supply chain operations and decision-making processes.
                </p>
                <Link to="/Blog/Production-AI-Supply-Chain" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('/src/assets/images/business-partnership-leader-gather-nurture-young-seedling-plant-with-esg-icons-symbolizing-corporate-unity-commitment-environmental-protection-natural-preservation-reliance.jpg')"
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  5 Strategies for Sustainable Manufacturing
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Explore innovative approaches to sustainable manufacturing that benefit both business and environment.
                </p>
                <Link to="/Blog/Production-Sustainable-Manufacturing" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('/src/assets/images/computer-software-website-traffic-analytics-data-computer-screen-snugly.jpg')"
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Optimizing Inventory with Data-Driven Insights
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Learn how data analytics can revolutionize inventory management and supply chain optimization.
                </p>
                <Link to="/Blog/Production-Inventory-Optimization" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-custom-blue to-custom-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to revolutionize your operations?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Transform your manufacturing and supply chain processes with our innovative solutions designed for the modern industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Contact" className="bg-white text-custom-teal px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
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

export default Manufacturing;
