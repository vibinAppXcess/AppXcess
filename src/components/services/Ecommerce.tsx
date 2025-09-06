import React from 'react';
import { ArrowRight, ShoppingCart, BarChart3, Smartphone, Users, CheckCircle, Play, TrendingUp, CreditCard, Zap, Shield, Globe, Star, Package, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ecommerce: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Redesigned with asymmetric layout */}
      <section className="relative bg-gradient-to-bl from-custom-blue via-custom-teal to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">Next-Gen Ecommerce</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 drop-shadow-lg leading-tight">
                Digital Commerce
                <span className="block text-teal-300 drop-shadow-lg">Redefined</span>
              </h1>
              <p className="text-2xl mb-10 text-white/90 drop-shadow-lg font-light max-w-2xl">
                Transform your business with cutting-edge ecommerce solutions that drive growth, enhance customer experiences, and scale operations seamlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-white text-custom-teal px-10 py-5 rounded-full text-xl font-semibold flex items-center gap-3 transition-all hover:scale-105 shadow-xl">
                  Launch Your Store
                  <ArrowRight className="w-6 h-6" />
                </button>
                <button className="border-2 border-white/50 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white hover:text-custom-teal transition-all flex items-center gap-3 backdrop-blur-sm">
                  <Play className="w-6 h-6" />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Success Metrics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold">Revenue Growth</span>
                    </div>
                    <span className="text-2xl font-bold text-teal-300">300%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold">Customer Base</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-300">500K+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold">Satisfaction</span>
                    </div>
                    <span className="text-2xl font-bold text-teal-300">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - New design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Your Ecommerce
              <span className="block text-custom-teal">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we guide you through every step of building a successful online business.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-custom-teal to-custom-blue h-full"></div>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                    <div className="w-16 h-16 bg-gradient-to-br from-custom-teal to-teal-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <ShoppingCart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform Setup</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Custom ecommerce platform development tailored to your business needs with advanced features and scalability.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-custom-teal rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="text-left">
                    <h4 className="text-3xl font-bold text-custom-teal mb-2">01</h4>
                    <p className="text-gray-500 font-medium">Foundation</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-right">
                    <h4 className="text-3xl font-bold text-custom-blue mb-2">02</h4>
                    <p className="text-gray-500 font-medium">Optimization</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-custom-blue rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                    <div className="w-16 h-16 bg-gradient-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Data-driven optimization strategies to maximize conversion rates and enhance user experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Expansion</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Scale your business globally with multi-language support, international payment gateways, and localized experiences.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-teal-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="text-left">
                    <h4 className="text-3xl font-bold text-teal-600 mb-2">03</h4>
                    <p className="text-gray-500 font-medium">Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - New hexagonal design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Powerful
              <span className="block text-custom-teal">Ecommerce Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of tools designed to accelerate your online business growth and success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="bg-gradient-to-br from-custom-teal/5 to-custom-blue/5 rounded-3xl p-8 h-full border border-custom-teal/20 hover:border-custom-teal/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-custom-teal to-teal-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile-First Design</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Responsive design optimized for mobile devices, ensuring seamless shopping experiences across all platforms.
                </p>
                <div className="flex items-center text-custom-teal font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-gradient-to-br from-custom-blue/5 to-teal-500/5 rounded-3xl p-8 h-full border border-custom-blue/20 hover:border-custom-blue/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Payments</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Enterprise-grade security with multiple payment gateways, fraud protection, and PCI compliance.
                </p>
                <div className="flex items-center text-custom-blue font-semibold group-hover:gap-3 transition-all">
                  Security Details <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-gradient-to-br from-teal-500/5 to-custom-teal/5 rounded-3xl p-8 h-full border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Inventory Management</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced inventory tracking, automated reordering, and real-time stock management across multiple locations.
                </p>
                <div className="flex items-center text-teal-600 font-semibold group-hover:gap-3 transition-all">
                  Explore Features <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-gradient-to-br from-blue-500/5 to-custom-blue/5 rounded-3xl p-8 h-full border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Logistics Integration</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Seamless integration with major shipping carriers, real-time tracking, and automated fulfillment processes.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  Shipping Options <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-gradient-to-br from-custom-teal/5 to-teal-600/5 rounded-3xl p-8 h-full border border-custom-teal/20 hover:border-custom-teal/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-custom-teal to-teal-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Solutions</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Multiple payment methods including credit cards, digital wallets, and buy-now-pay-later options.
                </p>
                <div className="flex items-center text-custom-teal font-semibold group-hover:gap-3 transition-all">
                  Payment Methods <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-gradient-to-br from-teal-600/5 to-custom-blue/5 rounded-3xl p-8 h-full border border-teal-600/20 hover:border-teal-600/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth Analytics</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive analytics and reporting tools to track performance, identify opportunities, and optimize growth.
                </p>
                <div className="flex items-center text-teal-700 font-semibold group-hover:gap-3 transition-all">
                  View Analytics <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section - New design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Success
              <span className="block text-custom-teal">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how businesses are transforming their operations and achieving remarkable growth with our ecommerce solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-custom-teal to-teal-600 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Fashion Retailer</h3>
                  <p className="text-gray-600">Global Fashion Brand</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "AppXcess transformed our online presence completely. We saw a 400% increase in online sales within the first 6 months, and our customer satisfaction scores improved dramatically."
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <span className="text-custom-teal font-semibold">5.0 Rating</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Electronics Store</h3>
                  <p className="text-gray-600">Tech Solutions Inc.</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The platform's scalability and performance optimization features helped us handle 10x more traffic during peak seasons without any issues. Our conversion rates improved by 250%."
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <span className="text-custom-blue font-semibold">5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="py-20 bg-gradient-to-bl from-custom-blue via-custom-teal to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Ready to Scale Your
            <span className="block text-teal-300">Ecommerce Business?</span>
          </h2>
          <p className="text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Join thousands of successful businesses that have transformed their online presence with our cutting-edge ecommerce solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/Contact">
              <button className="bg-white text-custom-teal px-12 py-6 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all flex items-center gap-3 shadow-2xl hover:shadow-3xl hover:scale-105">
                Start Building Now
                <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
            <Link to="/Contact">
              <button className="border-2 border-white/50 text-white px-12 py-6 rounded-full text-xl font-semibold hover:bg-white hover:text-custom-teal transition-all flex items-center gap-3 backdrop-blur-sm">
                <ShoppingCart className="w-6 h-6" />
                Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
