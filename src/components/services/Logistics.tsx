import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, MapPin, Clock, CheckCircle } from 'lucide-react';
import industry40Img from '../../assets/images/industry-4-0-technology-concept-smart-factory-fourth-industrial-revolution.jpg';
import smartTransportImg from '../../assets/images/smart-transport-technology-concept-future-car-traffic-newish-city-road.jpg';
import vrWarehouseImg from '../../assets/images/future-virtual-reality-technology-innovative-vr-warehouse-management.jpg';

const Logistics: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-custom-blue to-custom-teal text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                Optimize Your<br />
                <span className="text-teal-300 drop-shadow-lg">Logistics Operations</span>
              </h1>
              <p className="text-xl mb-8 text-white drop-shadow-lg font-medium">
                Empowering businesses with real-time tracking, route optimization, and seamless supply chain management.
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
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">80%</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Operational Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">60%</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">70%</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Resource Utilization</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">100%</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Customer Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Network Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Revolutionize Your<br />
              <span className="text-custom-teal">Transportation Network</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced solutions for fleet management, delivery scheduling, and cost efficiency.
            </p>
          </div>
          
                     <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fleet Management</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Comprehensive fleet tracking and management solutions with real-time monitoring and analytics.
              </p>
              
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Route Optimization</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                AI-powered route planning to minimize fuel costs and maximize delivery efficiency, improve on-time performance.
              </p>
              
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Delivery Scheduling</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Smart scheduling systems that adapt to real-time conditions and customer preferences for higher on-time rates.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Proven Process for Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to transforming your logistics operations
            </p>
          </div>

                     <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-custom-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Knowledge</h3>
              <p className="text-gray-600">
                Gain deep insights into industry-specific logistics challenges
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-custom-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Working</h3>
              <p className="text-gray-600">
                Implement efficient workflows tailored to your operations
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-custom-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solution</h3>
              <p className="text-gray-600">
                Deliver scalable and innovative transportation solutions
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-custom-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Process</h3>
              <p className="text-gray-600">
                Ensure continuous improvement and performance monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Driving Value in Logistics and Transportation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your logistics operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Streamlined Fleet Management</h3>
                  <p className="text-gray-600">
                    Enhance operations with advanced tracking and fleet analytics. Monitor vehicle performance, 
                    driver behavior, and maintenance schedules in real-time.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Integrated Supply Networks</h3>
                  <p className="text-gray-600">
                    Boost efficiency by connecting across transportation networks. Seamlessly integrate with 
                    existing systems and partners for end-to-end visibility.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Monitoring</h3>
                  <p className="text-gray-600">
                    Ensure proactive adjustments with real-time updates. Get instant alerts and notifications 
                    for any deviations or issues in your supply chain.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Customizable Solutions</h3>
                  <p className="text-gray-600">
                    Address unique challenges with tailored strategies. Our solutions adapt to your specific 
                    business requirements and industry needs.
                  </p>
                </div>
              </div>
            </div>

           <div className="bg-white rounded-2xl p-8 shadow-lg">
             <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
             <div className="space-y-4">
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-custom-teal" />
                 <span className="text-gray-700">Real-time GPS tracking</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-custom-teal" />
                 <span className="text-gray-700">Automated route optimization</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-custom-teal" />
                 <span className="text-gray-700">Fuel consumption monitoring</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-custom-teal" />
                 <span className="text-gray-700">Driver performance analytics</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-custom-teal" />
                 <span className="text-gray-700">Maintenance scheduling</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-custom-teal" />
                 <span className="text-gray-700">Customer delivery notifications</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-custom-teal" />
                 <span className="text-gray-700">Accurate ETA predictions</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-custom-teal" />
                 <span className="text-gray-700">Inventory and warehouse visibility</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-custom-teal" />
                 <span className="text-gray-700">Cold-chain temperature alerts</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-custom-teal" />
                 <span className="text-gray-700">Compliance and documentation automation</span>
               </div>
             </div>
           </div>
         </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest News From The Digital World
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends and innovations in logistics technology
            </p>
          </div>

                     <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: `url(${industry40Img})`
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Smart Solutions Revolutionizing Supply Chains
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Discover how AI and IoT are transforming traditional supply chain operations.
                </p>
                <Link to="/Blog/Logistics-Smart-Solutions" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: `url(${smartTransportImg})`
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Tech-Driven Transportation Enhancements
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Explore the latest technologies improving transportation efficiency and safety.
                </p>
                <Link to="/Blog/Logistics-Tech-Enhancements" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: `url(${vrWarehouseImg})`
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Streamlining Logistics with Advanced Tech
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Learn how advanced technologies are streamlining logistics operations worldwide.
                </p>
                <Link to="/Blog/Logistics-Advanced-Tech" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
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
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Logistics Operations?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Join thousands of businesses that have revolutionized their transportation and logistics with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Contact/" className="bg-white text-custom-teal px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
