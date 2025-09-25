import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, BarChart3, Users, TrendingUp, Shield, Activity, Home } from 'lucide-react';
import arDailyOccupationImg from '../../assets/images/person-using-ar-technology-their-daily-occupation.jpg';
import fiveGTechImg from '../../assets/images/5g-communication-technology-internet-network.jpg';
import environmentProjectImg from '../../assets/images/colleagues-working-together-environment-project.jpg';

const RealEstateConstruction: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-custom-blue to-custom-teal text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                Transforming Real Estate<br />
                <span className="text-teal-300 drop-shadow-lg">& Construction</span>
              </h1>
              <p className="text-xl mb-8 text-white drop-shadow-lg font-medium">
                Empowering the real estate and construction industry with innovative technology solutions for enhanced efficiency, sustainability, and growth.
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
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">200+</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">50+</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Real Estate Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">30+</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Construction Firms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">95%</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Success Rate</div>
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
              Transforming Real Estate and Construction with Innovative Solutions - Empowering the industry with cutting-edge technology for enhanced efficiency and growth.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Management Solutions</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Streamline construction projects with advanced project management tools and real-time collaboration platforms.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Estate Platforms for modern industry needs</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Create comprehensive real estate platforms for property management, sales, and customer engagement.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Insights for data-driven decisions</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Leverage data-driven insights to optimize operations, track performance, and make informed decisions.
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
                About
              </h2>
              <h3 className="text-3xl font-bold text-custom-teal mb-6">
                Empowering Real Estate Innovation
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Custom-tailored solutions designed to enhance property management, streamline construction processes, and deliver optimized results for the evolving real estate and construction landscape.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Project Optimization</h3>
                    <p className="text-gray-600">
                      Streamline construction projects with advanced management tools and real-time tracking.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Team Collaboration</h3>
                    <p className="text-gray-600">
                      Enhance team collaboration with integrated communication and project management platforms.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Operational Efficiency</h3>
                    <p className="text-gray-600">
                      Improve operational efficiency with automated workflows and intelligent systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">
                      Ensure quality standards with comprehensive monitoring and compliance tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-custom-teal to-custom-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Continue Your Real Estate Growth With Us</h3>
              <p className="text-lg mb-6">
                Empowering businesses through tailored real estate and construction solutions, trusted by hundreds of clients worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-300 mb-1">200+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-300 mb-1">50+</div>
                  <div className="text-sm">Real Estate Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-300 mb-1">30+</div>
                  <div className="text-sm">Construction Firms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-300 mb-1">95%</div>
                  <div className="text-sm">Success Rate</div>
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
              Our Process for Transforming Real Estate Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to revolutionizing real estate and construction operations through strategic technology implementation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600">
                Evaluate current operations and identify opportunities for improvement and optimization.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategy</h3>
              <p className="text-gray-600">
                Develop comprehensive strategies to streamline workflows and integrate innovative technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600">
                Deploy cutting-edge solutions to optimize processes and ensure seamless functionality.
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


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-custom-blue to-custom-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Revolutionize Real Estate and Construction?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            From innovative tools to seamless integration, AppXcess Technologies helps you streamline operations and deliver superior results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/About" className="bg-white text-custom-teal px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
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

export default RealEstateConstruction;
