import React from 'react';
import { ArrowRight, Smartphone, BookOpen, Users, ShoppingCart, MessageSquare, FileText, DollarSign, Settings, Shield, Truck, Brain, Zap, Star, Globe, Target, TrendingUp, CheckCircle, Play, Camera, Video, Network, Share2, Edit3, Layout, Palette, BarChart3, CreditCard, Calculator, Wallet, Receipt, Banknote, TrendingDown, Headphones, Monitor, Smartphone as Phone, Database, Lock, Eye, Key, Car, Package, Factory, Wrench, MapPin, Calendar, UserCheck, Clock, Building, Users as Team, Award, Camera as Photo, Heart, Hash, Home, Zap as Lightning, Palette as Brush, Code, Shield as Security, HardDrive, Fingerprint, CreditCard as Payment, Store } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-custom-teal/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-custom-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-custom-teal/10 to-custom-blue/10 rounded-full blur-3xl"></div>
        </div>
        
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight text-center">
              <span className="block text-gray-900">
                Products That
              </span>
              <span className="block text-gray-900">
                Drive Innovation
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-16 text-gray-700 font-light max-w-4xl mx-auto leading-relaxed text-center">
              Explore our comprehensive suite of cutting-edge products designed to transform businesses across every industry. 
              From AI-powered solutions to enterprise-grade applications, we deliver the tools that drive success.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group bg-white text-custom-teal px-12 py-6 rounded-xl text-xl font-bold flex items-center gap-4 transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-2xl">
                <span>Explore Products</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group border-2 border-teal-600 text-teal-600 px-12 py-6 rounded-xl text-xl font-bold transition-all duration-300 flex items-center gap-4 hover:bg-teal-600 hover:text-white hover:scale-105 backdrop-blur-sm">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            {/* Feature Highlights */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              
            </div>
          </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-custom-teal rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-20 w-3 h-3 bg-custom-blue rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
      </section>


      {/* Products That Drive Innovation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Products That Drive
              <span className="block text-custom-teal">Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our wide range of products designed to empower businesses across industries and meet diverse needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mobile Apps */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-custom-teal/10 to-custom-blue/10 rounded-3xl p-8 h-full border border-custom-teal/20 hover:border-custom-teal/40 transition-all duration-300 hover:shadow-2xl flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-br from-custom-teal to-teal-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Apps</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Native and cross-platform mobile applications for iOS and Android.
                </p>
                
              </div>
            </div>

            {/* LMS */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-custom-blue/10 to-teal-500/10 rounded-3xl p-8 h-full border border-custom-blue/20 hover:border-custom-blue/40 transition-all duration-300 hover:shadow-2xl flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-br from-custom-blue to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">LMS</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  An app for managing online courses with authentication and interactive features.
                </p>
                
              </div>
            </div>

            {/* Attendance */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-teal-500/10 to-custom-teal/10 rounded-3xl p-8 h-full border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 hover:shadow-2xl flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Attendance</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  An app for tracking employee attendance, with check-in, leave requests, and reports.
                </p>
                
              </div>
            </div>

            {/* eCommerce */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-custom-blue/10 rounded-3xl p-8 h-full border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">eCommerce</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  A multi-vendor app for seamless shopping with categories and notifications.
                </p>
                
              </div>
            </div>

            {/* Social Media App */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-custom-teal/10 to-teal-600/10 rounded-3xl p-8 h-full border border-custom-teal/20 hover:border-custom-teal/40 transition-all duration-300 hover:shadow-2xl flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-br from-custom-teal to-teal-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media App</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  An app for connecting people and fostering engagement through interactive features.
                </p>
                
              </div>
            </div>

            {/* CMS */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-teal-600/10 to-custom-blue/10 rounded-3xl p-8 h-full border border-teal-600/20 hover:border-teal-600/40 transition-all duration-300 hover:shadow-2xl flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">CMS</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  An app for managing and delivering content efficiently across various platforms.
                </p>
                
              </div>
            </div>


            {/* Sales CRM */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-3xl p-8 h-full border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sales CRM</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Monitor sales pipelines, activities, and performance metrics effectively.
                </p>
                
              </div>
            </div>

            {/* Support Tickets */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl p-8 h-full border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-2xl flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Tickets</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Handle customer queries with ticketing, prioritization, and tracking.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Complete Product
              <span className="block text-custom-teal">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of products designed to empower businesses across every industry.
            </p>
          </div>

          {/* Social Media Category */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Social Media</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/network-miniature-figures-connected-by-lines-patterned-surface.jpg" alt="Social community" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Seamless Community</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Share photos, videos, and updates to connect seamlessly with your community.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/friends-using-application-mobile-phone-by-connecting-with-smart-watch.jpg" alt="Real-time interactions" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Real-Time Interactions</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Foster real-time interactions through posts, comments, and live discussions.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/back-view-man-holding-smartphone.jpg" alt="Share videos" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Share Videos</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Create and share captivating video content for a global audience.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Discover <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/laptop-which-there-is-world-people-drawn.jpg" alt="Professional connections" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Connections</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Build and expand your professional network with meaningful connections.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Connect <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Management Category */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Content Management</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/domain-links-seo-webinar-cyberspace-concept.jpg" alt="Easy publish" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Easy Publish</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Organize and publish content efficiently with easy-to-use management tools.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/lastest-version-fresh-updates-application-updates-concept.jpg" alt="Streamlined updates" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Streamlined Updates</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Streamline website updates and manage pages with intuitive features.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/laptop-with-word-content-screen.jpg" alt="Advanced content tools" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Advanced Content Tools</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Efficiently handle content with advanced features tailored for modern websites.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Discover <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/customer-relationship-management-concept.jpg" alt="Flexible CMS" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Flexible CMS</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Create and manage multipurpose web pages with friendly interfaces and tools.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Manage <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Finance Category */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Finance</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/jolly-business-partners-discussing-sales-development-meeting.jpg" alt="Expense reports" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">ExpenseManager</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Control and track business expenses with detailed analytics and reports.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Manage Expenses <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/learning-wall-digital-bargain-arm.jpg" alt="Business ledger" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Balance Log</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Handle income, expenses, and transactions with a business-focused ledger system.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Log Balance <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/data-protection-shield-secured-permission-graphic-concept.jpg" alt="Secure payment transfer" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Safe Transfer</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Oversee payments and transactions securely for streamlined business finances.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Transfer <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/man-with-shirt-tie-drawing-arrow.jpg" alt="Investment insights" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Profit Edge</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Empower business investment decisions with real-time insights and analytics.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Get Edge <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Category */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Integration</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/business-meeting-abour-servers.jpg" alt="Customer service hub" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Service Hub</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Integrate customer service with AI-driven tools for enhanced engagement.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/website-hosting-with-man-holding-tablet.jpg" alt="Web to app integration" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">WebView Integrator</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Transform your website into a mobile app with seamless web integration.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/variety-blank-speech-bubbles-dark-office-room.jpg" alt="Chat platforms integration" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Chat Hub</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Integrate chat platforms with CRM for unified customer communication.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Discover <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/e-commerce-online-shopping-digital-marketing-internet-business-technology-concept-virtual-screen.jpg" alt="Mobile commerce link" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Commerce Link</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Combine iOS capabilities with e-commerce for robust business functionality.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Connect <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* E-commerce and Sales Category */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">E-commerce and Sales</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/market-research-consumer-information-needs-concept.jpg" alt="Marketplace management" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Manage Market</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Manage single and multi-vendor operations with POS and mobile features.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/stock-market-graph-big-data-visualization-investment-graph-concept-3d-rendering.jpg" alt="Workflow optimization" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Trade Flow</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Streamline admin, seller, and customer workflows for better efficiency.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/businessman-showing-franchise-system-mobile-device.jpg" alt="Vendor management" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Vendor Connect</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Optimize marketplace management with mobile-friendly tools and panels.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Discover <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/portrait-male-personal-shopper-working.jpg" alt="Retail POS and inventory" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Retail Manager</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Combine inventory, POS, and website management for retail growth.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Manage Retail <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* HR Category */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">HR Solutions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/rag-doll-blue-circles.jpg" alt="HR platform management" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Work Manager</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Streamline employee records, attendance, and payroll in one platform.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/business-mans-pointing-glass-with-colorful-paper-notes-diverse-group-male-employees-formal-wear-using-stickers.jpg" alt="Time tracking dashboard" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Team Tracker</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Track employee hours and ensure productivity with seamless time tracking.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/scenery-designers-work.jpg" alt="Branches and locations" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Branch Link</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Manage HR operations across multiple branches with centralized tools.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Discover <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/teamwork-business-concept.jpg" alt="Team collaboration" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Team Link</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Enhance team collaboration and productivity with HR-focused tools.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Link Team <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Industrial Solutions Category */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industrial Solutions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/organic-agriculture-crop-environment-growing-concept.jpg" alt="Factory operations" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Plant Planner</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Streamline plant operations and enhance productivity with real-time tools.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/aerial-view-container-loading-unloading-sunset-top-view-containers-logistics-terminal-city-factory-train-railroad-sky-business-freight-transportation-containers-railway.jpg" alt="Production flow" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Production Flow</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Streamline manufacturing processes and monitor workflows effectively.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/logistics-means-transport-together-with-technological-futuristic-holograms.jpg" alt="POS in industry" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Smart POS</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Manage inventory, suppliers, and customer transactions seamlessly.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Discover <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/automated-food-processing-facility-with-conveyor-belts-storage-solutions-peak-production-hours.jpg" alt="Logistics trucks" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Logistics Hub</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Unify transportation and delivery operations into one efficient platform.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Manage Logistics <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobility and Operation Category */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mobility and Operation</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/woman-with-trendy-manicure-using-gps-search-right-way.jpg" alt="Mobility tracking" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Mobility Tracker</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Streamline ride-sharing operations with real-time tracking and user-friendly tools.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/businessman-hand-press-button-web-link-sign-appears-connection-business-people-social-media.jpg" alt="Cargo containers" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Cargo Monitor</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Manage and optimize fleet operations with analytics and monitoring features.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/cheerful-client-courier-with-clipboard.jpg" alt="Delivery planning" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Delivery Planner</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Ensure timely and efficient order deliveries with smart coordination tools.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Discover <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/close-up-expert-using-tablet-inspect-solar-plant-machinery.jpg" alt="Client data on mobile" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Client Link</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Access and manage client data and interactions seamlessly on the go.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Connect <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* AI Category */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Solutions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/media-journalism-global-daily-news-content-concept.jpg" alt="AI content creation" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Content Designer</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Generate creative content and ideas with AI-powered tools for businesses.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/person-working-html-computer (1).jpg" alt="Visual enhancement" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Visual Enhancer</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Enhance visuals and create stunning images using advanced AI capabilities.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/young-woman-using-mobile-phone-office.jpg" alt="Chatbot UI" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Response Assistant</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Streamline customer communication with intelligent AI-driven chat solutions.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Discover <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/videographer-using-editing-software-vr-glasses-design-montage-movie-production-edit-film-footage-with-visual-effects-computer-working-with-virtual-reality-goggles.jpg" alt="Coding with AI" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Code Assistant</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Boost development efficiency with AI-assisted coding and optimization tools.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Code <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Security Category */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Security Solutions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/medium-shot-people-working-together.jpg" alt="Website security" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Secure Site</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Protect websites from threats with advanced monitoring and protection tools.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/firewall-antivirus-alert-protection-security-caution-concept.jpg" alt="Secure data center storage" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Safe Storage</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Secure sensitive data with robust encryption and access control measures.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/standard-quality-control-concept-m (1).jpg" alt="Access control" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Access Control</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Prevent unauthorized access and enhance system security with smart tools.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Discover <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <img src="/src/assets/images/close-up-hand-holding-illuminated-light.jpg" alt="Secure transactions" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Safe Transaction</h4>
                  <p className="text-gray-600 mb-4 flex-grow">Ensure safe and encrypted transactions for seamless business operations.</p>
                  <button className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                    Secure <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Advanced
              <span className="block text-custom-teal">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology solutions powered by AI, security, and integration capabilities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">
                AI-Powered Products
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Content Designer</h4>
                    <p className="text-gray-600">
                      Generate creative content and ideas with AI-powered tools for businesses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-custom-blue rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Visual Enhancer</h4>
                    <p className="text-gray-600">
                      Enhance visuals and create stunning images using advanced AI capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Response Assistant</h4>
                    <p className="text-gray-600">
                      Streamline customer communication with intelligent AI-driven chat solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-custom-teal to-custom-blue rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Security Solutions</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Secure Site - Protect websites from threats with advanced monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Safe Storage - Secure sensitive data with robust encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Access Control - Prevent unauthorized access with smart tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Safe Transaction - Ensure encrypted transactions for business</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Ready to Transform Your
            <span className="block text-teal-300">Business?</span>
          </h2>
          <p className="text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Revolutionize your approach with customized solutions built for your specific needs and industry requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-custom-teal px-12 py-6 rounded-xl text-xl font-semibold hover:bg-gray-100 transition-all flex items-center gap-3 shadow-2xl hover:shadow-3xl hover:scale-105">
              Explore Products
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="border-2 border-white/50 text-white px-12 py-6 rounded-xl text-xl font-semibold hover:bg-white hover:text-custom-teal transition-all flex items-center gap-3 backdrop-blur-sm">
              <Star className="w-6 h-6" />
              Get Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
