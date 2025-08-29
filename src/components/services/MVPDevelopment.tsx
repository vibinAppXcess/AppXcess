import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Target, Users, TrendingUp, CheckCircle, ArrowRight, Play, Star, Zap, Lightbulb, Clock, Award } from 'lucide-react';

const MVPDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Split Layout */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                <Rocket className="w-4 h-4 mr-2" />
                MVP Development Services
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Turn Your Vision into a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Minimum Viable Product
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Quickly validate your ideas with AppXcess. Validate your product idea in record time, 
                achieve tangible results with minimal investment, and leverage our expertise to reduce time-to-market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/Contact/"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-blue-700 transition-all shadow-lg"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-xl hover:bg-teal-600 hover:text-white transition-colors">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
            
            {/* Right Column - Feature Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Validate Ideas</h3>
                    <p className="text-gray-600 text-sm">Test concepts quickly</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Reduce Time-to-Market</h3>
                    <p className="text-gray-600 text-sm">Launch faster than competitors</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">User Feedback</h3>
                    <p className="text-gray-600 text-sm">Real user insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our MVP Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to bring your ideas to life quickly and efficiently.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 to-blue-500"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Ideation</h3>
                    <p className="text-gray-600">
                      We help you refine your concept and define core features to deliver value to your users.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Rapid Prototyping</h3>
                    <p className="text-gray-600">
                      Our team builds interactive prototypes to test and validate your idea before full development begins.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable MVP Development</h3>
                    <p className="text-gray-600">
                      Develop a robust MVP with scalability in mind, ensuring seamless expansion as your business grows.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">User Feedback Integration</h3>
                    <p className="text-gray-600">
                      Gather feedback from real users to optimize and enhance your MVP for a stronger market fit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Grid Layout */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Delivering Value Through MVP Development
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-teal-100">MVPs Delivered</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-2">10</div>
              <div className="text-teal-100">Industries Covered</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-2">25</div>
              <div className="text-teal-100">Core Features Developed</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-teal-100">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Card Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                About AppXcess
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                About AppXcess
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At AppXcess, we specialize in turning innovative ideas into reality through streamlined MVP development. 
                Our expertise lies in building scalable and efficient solutions that help businesses validate their 
                concepts and bring their visions to life.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">Build your Minimum Viable Product quickly and efficiently.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">Focus on core features to validate ideas with real users.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">Leverage our expertise for scalable and secure solutions.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">Transition seamlessly from MVP to a full-scale product.</span>
                </div>
              </div>
              <Link
                to="/About"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-blue-700 transition-all"
              >
                More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 border border-teal-200">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600 text-sm">Every MVP meets our high standards</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">Quick turnaround times</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">Experienced developers</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                <p className="text-gray-600 text-sm">Built for growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Centered Card */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to start creating a MVP Product?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Finest choice for your Business
            </p>
            <Link
              to="/Contact/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-blue-700 transition-all shadow-lg"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MVPDevelopment;
