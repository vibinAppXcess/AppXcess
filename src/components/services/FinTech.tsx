import React from 'react';
import { ArrowRight, CreditCard, BarChart3, Smartphone, Users, CheckCircle, Play, TrendingUp, Shield, Activity, Zap } from 'lucide-react';

const FinTech: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-custom-blue to-custom-teal text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                Revolutionizing<br />
                <span className="text-teal-300 drop-shadow-lg">FinTech Solutions</span>
              </h1>
              <p className="text-xl mb-8 text-white drop-shadow-lg font-medium">
                Empowering the financial industry with secure, scalable, and user-centric technologies that drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-colors shadow-lg">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-custom-teal transition-colors flex items-center justify-center gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">19</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">20</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Employees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">19</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">EA's Developed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">50</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Scalable Programs</div>
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
              What We Can Do<br />
              <span className="text-custom-teal">for You</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming FinTech with Innovative Solutions - Empowering the financial industry with secure, scalable, and user-centric technologies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Payment Solutions</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Accelerate transactions with cutting-edge payment processing technologies that ensure security and speed.
              </p>
              <a href="/Blog/FinTech-Trends-Innovations" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial App Development</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Create secure, user-friendly apps for modern financial services with advanced features and intuitive interfaces.
              </p>
              <a href="/Blog/FinTech-AI-Big-Data" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Blockchain Integration</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Leverage blockchain to enhance security and transparency in FinTech operations with decentralized solutions.
              </p>
              <a href="/Blog/FinTech-Blockchain-Beyond" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
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
                About
              </h2>
              <h3 className="text-3xl font-bold text-custom-teal mb-6">
                Empowering FinTech Innovation
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Custom-tailored solutions designed to enhance financial analysis, develop smarter strategies, and deliver optimized results for the evolving FinTech landscape.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Develop Expert Analyzers</h3>
                    <p className="text-gray-600">
                      Tailored to your financial needs with advanced analytics and insights.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Integrate Custom Indicators</h3>
                    <p className="text-gray-600">
                      Custom-made indicators for precise market insights and decision-making.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Track Team Progress</h3>
                    <p className="text-gray-600">
                      Seamlessly track your team's progress with advanced tools and analytics.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Streamlined Operations</h3>
                    <p className="text-gray-600">
                      Ensure streamlined operations with cutting-edge applications and automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-custom-teal to-custom-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Continue Your Financial Growth With Us</h3>
              <p className="text-lg mb-6">
                Empowering businesses through tailored FinTech solutions, trusted by hundreds of clients worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-300 mb-1">19</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-300 mb-1">20</div>
                  <div className="text-sm">Employees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-300 mb-1">19</div>
                  <div className="text-sm">EA's Developed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-300 mb-1">50</div>
                  <div className="text-sm">Scalable Programs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest News - Revolutionizing financial services with cutting-edge technology, secure platforms, and smarter solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')"
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Trends and Innovations
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Explore the latest trends and innovations shaping the future of financial technology and digital banking.
                </p>
                <a href="/Blog/FinTech-Trends-Innovations" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
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
                  AI and Big Data in FinTech
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Discover how artificial intelligence and big data are revolutionizing financial services and decision-making.
                </p>
                <a href="/Blog/FinTech-AI-Big-Data" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
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
                  Blockchain Beyond Bitcoin
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Explore the broader applications of blockchain technology in financial services and beyond.
                </p>
                <a href="/Blog/FinTech-Blockchain-Beyond" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
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
          backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Financial Technology?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            From innovative solutions to seamless implementation—your transformation starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-custom-teal px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Contact Us
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

export default FinTech;
