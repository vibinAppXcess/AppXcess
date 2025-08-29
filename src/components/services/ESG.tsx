import React from 'react';
import { ArrowRight, Leaf, Users, Shield, TrendingUp, CheckCircle, Globe, Target, Award, Lightbulb, BarChart3, Zap, Star, Heart, Building, Eye, Lock, Database, FileText, MessageSquare, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const ESG: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white overflow-hidden">
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="block text-white">
                ESG
              </span>
              <span className="block text-white">
                Driven
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-16 text-white/80 font-light max-w-4xl mx-auto leading-relaxed">
              We empower organizations to integrate ESG principles, fostering responsible growth through innovative solutions, data-driven insights, and sustainable practices.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group bg-white text-custom-teal px-12 py-6 rounded-xl text-xl font-bold flex items-center gap-4 transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-2xl">
                <span>Learn More</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group border-2 border-white/50 text-white px-12 py-6 rounded-xl text-xl font-bold transition-all duration-300 flex items-center gap-4 backdrop-blur-sm hover:bg-white hover:text-custom-teal hover:scale-105">
                <Star className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Get Started</span>
              </button>
            </div>
            
            {/* Feature Highlights */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-custom-teal to-custom-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Environmental</h3>
                <p className="text-white/70 text-sm">Minimize environmental footprints through innovative technologies</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Social</h3>
                <p className="text-white/70 text-sm">Drive relationships and inclusive progress</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Governance</h3>
                <p className="text-white/70 text-sm">Transparency, accountability, and trust</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-custom-teal rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-20 w-3 h-3 bg-custom-blue rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Businesses today align with ESG principles to drive growth and meet stakeholder expectations.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Organizations are undergoing significant transformations as global emphasis on ESG and sustainability intensifies. With mounting pressure from governments, regulators, consumers, and investors, businesses must prioritize sustainable practices to ensure long-term value creation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                A critical aspect of ESG is the social responsibility of organizations.
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At AppXcess, we help businesses assess, document, and enhance the impact of their social initiatives through comprehensive research, strategic consulting, and tailored solutions.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg font-semibold text-gray-900">Comprehensive Research</span>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Strategic Consulting</h4>
                    <p className="text-gray-600">Tailored solutions for your specific ESG needs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Data-Driven Insights</h4>
                    <p className="text-gray-600">Leverage advanced analytics for informed decisions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Innovative Solutions</h4>
                    <p className="text-gray-600">Cutting-edge technology for sustainable growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AppXcess Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Driving Innovation for a
              <span className="block text-green-600">Sustainable Future</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging deep industry expertise and advanced technologies, our approach aligns operations with sustainable goals, enhancing brand reputation and fostering customer loyalty.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Driven Solutions</h3>
              <p className="text-gray-600">Empowering businesses with AI-powered solutions for sustainable growth.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>
              <p className="text-gray-600">Delivering tailored ESG strategies for sustainable growth across industries.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unified Approach</h3>
              <p className="text-gray-600">Combining expertise to provide innovative problem-solving solutions.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Insights</h3>
              <p className="text-gray-600">Analyzing trends to deliver actionable, data-driven results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Commitment to
              <span className="block text-green-600">Positive Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aligning business success with ethical, transparent, and sustainable operational practices.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Environmental */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At AppXcess, we minimize environmental footprints through innovative technologies and sustainable practices. From tackling climate change to reducing carbon emissions, our solutions help businesses operate responsibly while protecting the planet.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Energy efficiency and renewable adoption</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Biodiversity and waste reduction</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Water conservation strategies</span>
                </div>
              </div>
            </div>
            
            {/* Social */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-100">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our focus on the social pillar drives relationships and inclusive progress. AppXcess prioritizes data privacy, employee well-being, and diversity to create environments where individuals thrive.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">Data privacy and employee well-being</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">Diversity and inclusion initiatives</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">Community engagement and CSR</span>
                </div>
              </div>
            </div>
            
            {/* Governance */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Governance</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Governance at AppXcess centers on transparency, accountability, and trust. We help businesses implement strong frameworks for ethical decision-making, compliance, and risk management.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Transparency and accountability</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Ethical decision-making frameworks</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Compliance and risk management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Our Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a range of services across all three spectrums of ESG
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ESG Compliance */}
            <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">ESG Compliance</h3>
              <p className="text-white/90 mb-6">
                Simplify ESG compliance with innovative tools and strategic guidance, enabling businesses to meet sustainability requirements effortlessly.
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Effortless Data Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Adapting to Evolving Standards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Integrated ESG Solutions</span>
                </li>
              </ul>
            </div>
            
            {/* ESG Diagnostics */}
            <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-3xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">ESG Diagnostics</h3>
              <p className="text-white/90 mb-6">
                Comprehensive ESG diagnostics and EHS consulting to help businesses identify compliance gaps and streamline operations.
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>In-Depth ESG Assessments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>EHS Consulting Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Digital Integration</span>
                </li>
              </ul>
            </div>
            
            {/* ESG Strategy */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">ESG Strategy</h3>
              <p className="text-white/90 mb-6">
                Design and implement robust ESG strategy and roadmap that aligns with stakeholder expectations and long-term value creation goals.
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Strategic Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Digital Tracking and Reporting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Enhanced Stakeholder Engagement</span>
                </li>
              </ul>
            </div>
            
            {/* Impact Assessment */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Impact Assessment</h3>
              <p className="text-white/90 mb-6">
                Comprehensive impact assessment and social research services to evaluate the outcomes of corporate social responsibility initiatives.
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Detailed Impact Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Customised Methodologies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Data-Driven Recommendations</span>
                </li>
              </ul>
            </div>
            
            {/* Social Research */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Social Research</h3>
              <p className="text-white/90 mb-6">
                Evaluate the relevance, effectiveness, and sustainability of social efforts while identifying opportunities for improvement.
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>CSR Program Evaluation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Stakeholder Trust Building</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Community Engagement</span>
                </li>
              </ul>
            </div>
            
            {/* Sustainability Consulting */}
            <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-3xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainability Consulting</h3>
              <p className="text-white/90 mb-6">
                Strategic guidance on ESG frameworks and compliance to drive measurable progress toward a sustainable future.
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>ESG Framework Guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Compliance Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Measurable Progress Tracking</span>
                </li>
              </ul>
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
            Driving Sustainable
            <span className="block text-teal-300">Impact</span>
          </h2>
          <p className="text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            As businesses navigate the ESG landscape, we simplify complexities and optimize processes to drive meaningful, sustainable change.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-custom-teal px-12 py-6 rounded-xl text-xl font-semibold hover:bg-gray-100 transition-all flex items-center gap-3 shadow-2xl hover:shadow-3xl hover:scale-105">
              Get Started
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="border-2 border-white/50 text-white px-12 py-6 rounded-xl text-xl font-semibold hover:bg-white hover:text-custom-teal transition-all flex items-center gap-3 backdrop-blur-sm">
              <MessageSquare className="w-6 h-6" />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ESG;
