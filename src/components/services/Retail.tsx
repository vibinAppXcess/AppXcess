import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, BarChart3, Smartphone, Users, CheckCircle, Play, TrendingUp } from 'lucide-react';
import integrateCircuitImg from '../../assets/images/integrate-circuit-links-merge-concept.jpg';
import digitalAssetsImg from '../../assets/images/digital-assets-finance-money-business-concept.jpg';
import creativeMonitorImg from '../../assets/images/creative-monitor-tech-digitally-generated-desk.jpg';

const Retail: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-custom-blue to-custom-teal text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                Transforming Retail<br />
                <span className="text-teal-300 drop-shadow-lg">for the Future</span>
              </h1>
              <p className="text-xl mb-8 text-white drop-shadow-lg font-medium">
                Empowering Growth with Intelligent IT Solutions. AppXcess leverages innovative IT solutions to redefine retail operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/About" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-colors shadow-lg text-center">
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
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">20</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Satisfied Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">15</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Experts on Board</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">30</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Solutions Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">17</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Custom Solutions</div>
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
              Retail Solutions Delivered by<br />
              <span className="text-custom-teal">AppXcess</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Crafting innovative solutions to elevate retail performance and enhance customer experiences.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Experiences</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Enhance customer engagement with data-driven insights and tailored recommendations for shopping experiences.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <ShoppingBag className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inventory Management</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Leverage automation to optimize stock levels and reduce operational inefficiencies with smart inventory solutions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Omnichannel Integration</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Unify online and offline retail operations for seamless and engaging customer experiences across all channels.
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
                Transforming Retail with Tailored IT Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                AppXcess leverages innovative IT solutions to redefine retail operations. From enhancing customer experiences with personalized engagement to streamlining inventory and supply chain management, we empower retailers to adapt and thrive in a competitive marketplace.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text:white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Understanding Trends</h3>
                    <p className="text-gray-600">
                      Analyze market shifts to help businesses stay ahead of consumer demands and adapt to changing retail landscapes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Innovative Solutions</h3>
                    <p className="text-gray-600">
                      Implement cutting-edge technologies to bridge online and offline retail channels for seamless operations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items:center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Focus</h3>
                    <p className="text-gray-600">
                      Enhance shopping experiences by tailoring solutions to meet unique customer needs and preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-custom-teal to-custom-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Empowering Retail Excellence</h3>
              <p className="text-lg mb-6">
                Tailored IT Solutions for Every Retail Need - From personalized experiences to efficient processes
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Elevate Customer Experiences - Seamlessly unify online and offline retail operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Optimize Retail Efficiency - Leverage advanced analytics and streamlined solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Efficient Processes - Streamline retail operations to optimize supply chains</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Customized Solutions - Delivering tools and technology to enhance retail excellence</span>
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
              Business Strategy & Marketing Evolution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering modern retail through integration, transformation, and scalable digital marketing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: `url(${integrateCircuitImg})`
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Why Seamless Integration is Crucial for Business Success
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Discover how seamless integration between online and offline retail channels can drive business success and customer satisfaction.
                </p>
                <a href="/Blog/Retail-Seamless-Integration" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: `url(${digitalAssetsImg})`
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Embracing Digital Transformation for Competitive Advantage
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Learn how digital transformation strategies can provide competitive advantages in the modern retail landscape.
                </p>
                <a href="/Blog/Retail-Digital-Transformation" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: `url(${creativeMonitorImg})`
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How to Build a Scalable Digital Marketing Strategy
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Explore strategies for building scalable digital marketing approaches that grow with your retail business.
                </p>
                <a href="/Blog/Retail-Scalable-Marketing" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
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
          backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Retail Operations?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Revolutionize your approach with customized solutions built for your retail needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/About" className="bg:white text-custom-teal px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/Contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-custom-teal transition-colors flex items-center justify-center gap-2">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Retail;
