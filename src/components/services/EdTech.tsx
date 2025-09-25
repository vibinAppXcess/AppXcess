import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Cloud, CheckCircle, Play, GraduationCap, Brain } from 'lucide-react';

const EdTech: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Redesigned with split layout */}
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 drop-shadow-lg leading-tight">
              Future of
              <span className="block text-teal-300 drop-shadow-lg">Learning</span>
            </h1>
            <p className="text-2xl mb-12 text-white/90 drop-shadow-lg font-light max-w-3xl mx-auto">
              Empowering the next generation with cutting-edge educational technology that transforms how we learn, teach, and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/Contact" className="bg-white text-custom-teal px-10 py-5 rounded-lg text-xl font-semibold flex items-center gap-3 transition-all hover:scale-105 shadow-xl">
                Start Learning Journey
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      

      {/* Features Section - New hexagonal grid layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Revolutionary
              <span className="block text-custom-teal">Learning Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of educational technologies designed to enhance learning outcomes and engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="bg-gradient-to-br from-custom-teal/10 to-custom-blue/10 rounded-3xl p-8 h-full border border-custom-teal/20 hover:border-custom-teal/40 transition-all duration-300 hover:shadow-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-custom-teal to-teal-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Learning</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Personalized learning experiences powered by artificial intelligence that adapt to each student's unique needs and pace.
                </p>
                
              </div>
            </div>

            <div className="group relative">
              <div className="bg-gradient-to-br from-custom-blue/10 to-teal-500/10 rounded-3xl p-8 h-full border border-custom-blue/20 hover:border-custom-blue/40 transition-all duration-300 hover:shadow-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive insights into learning progress, engagement metrics, and performance optimization strategies.
                </p>
                
              </div>
            </div>

            <div className="group relative">
              <div className="bg-gradient-to-br from-teal-500/10 to-custom-teal/10 rounded-3xl p-8 h-full border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 hover:shadow-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Scalable cloud solutions that ensure seamless access to educational content from anywhere, anytime.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section - New design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Experience the
                <span className="block text-custom-teal">Future of Learning</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Immerse yourself in our interactive learning platform that combines cutting-edge technology with proven educational methodologies.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Simulations</h3>
                    <p className="text-gray-600">
                      Hands-on learning experiences that bring complex concepts to life through virtual reality and augmented reality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-custom-blue rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Collaboration</h3>
                    <p className="text-gray-600">
                      Connect with peers and instructors in real-time, fostering collaborative learning environments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Adaptive Assessments</h3>
                    <p className="text-gray-600">
                      Intelligent testing systems that adjust difficulty based on performance and learning progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-gradient-to-br from-custom-teal to-custom-blue rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-2xl font-bold mb-4">Try Our Interactive Demo</h3>
                  <p className="text-lg opacity-90">
                    Experience firsthand how our platform transforms learning through interactive content and real-time feedback.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="font-semibold text-gray-900">AI Tutor Available</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="font-semibold text-gray-900">Progress Tracking</span>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="font-semibold text-gray-900">Collaborative Tools</span>
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  </div>
                </div>
                
                <Link to="/Contact" className="w-full mt-6 bg-gradient-to-r from-custom-teal to-custom-blue text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3">
                  <Play className="w-5 h-5" />
                  Launch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Ready to Transform
            <span className="block text-teal-300">Education?</span>
          </h2>
          <p className="text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Join thousands of educators and learners who are already experiencing the future of education with our innovative platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/Contact" className="bg-white text-custom-teal px-12 py-6 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all flex items-center gap-3 shadow-2xl hover:shadow-3xl hover:scale-105">
              Start Free Trial
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EdTech;
