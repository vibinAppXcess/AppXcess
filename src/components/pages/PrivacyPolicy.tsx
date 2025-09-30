import React from 'react';
import { Shield, Lock, Eye, FileText, CheckCircle, Calendar, ArrowRight, Users, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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
              <span className="block text-white whitespace-nowrap">Privacy Policy</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-16 text-white/80 font-light max-w-4xl mx-auto leading-relaxed">
              Welcome to AppXcess Technologies Privacy Policy. We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            
            {/* Feature Highlights */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Data Protection</h3>
                <p className="text-white/70 text-sm">Advanced encryption and secure storage</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transparency</h3>
                <p className="text-white/70 text-sm">Clear information about data usage</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Compliance</h3>
                <p className="text-white/70 text-sm">Adherence to privacy regulations</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-custom-teal rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-20 w-3 h-3 bg-custom-blue rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Welcome to AppXcess Technologies Privacy Policy
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At AppXcess Technologies, we are committed to protecting your privacy. This Privacy Policy explains how we handle the personal information you provide when using our contact form. By using our website, you agree to the terms outlined here.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Information We Collect</h3>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  When you use our contact form, we may collect the following information:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Name:</strong> To address you appropriately.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Email Address:</strong> To respond to your inquiries.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Phone Number:</strong> For further communication, if provided.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Message Content:</strong> Any information you share in your message.</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-600">
                We do not collect any additional personal information beyond what is submitted through the contact form.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">How We Use Your Information</h3>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  We use the information collected via the contact form for the following purposes:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">To respond to your inquiries or requests.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">To provide the information or assistance you requested.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">To improve our customer service and website experience.</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-600">
                We do not sell, rent, or share your information with third parties for marketing purposes.
              </p>
            </div>

            {/* How We Protect Your Information */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">How We Protect Your Information</h3>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-6">
                <p className="text-gray-700">
                  We implement appropriate technical and organizational measures to ensure the security of the information you share with us. These measures include encryption and secure storage to prevent unauthorized access, loss, or misuse of your data.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Data Retention</h3>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6">
                <p className="text-gray-700">
                  We retain the information you submit via the contact form only as long as necessary to respond to your inquiry or comply with legal obligations. Once your inquiry is resolved, we may securely delete your data.
                </p>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cookies and Tracking</h3>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6">
                <p className="text-gray-700">
                  Our website may use cookies or similar technologies to enhance user experience and improve site functionality. Cookies are not used to collect personal information submitted through the contact form.
                </p>
              </div>
            </div>

            {/* Changes to This Privacy Policy */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-green-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Changes to This Privacy Policy</h3>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-2xl p-6">
                <p className="text-gray-700">
                  We may update this policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Updates will be posted on this page with a revised "Effective Date."
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Questions About This Privacy Policy?</h3>
              <p className="text-white/90 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/Contact" className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center gap-3">
                  <ArrowRight className="w-5 h-5" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Privacy Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Your Privacy
              <span className="block text-indigo-600">Matters to Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to protecting your personal information and ensuring transparency in how we handle your data.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Data</h3>
              <p className="text-gray-600">Your information is protected with industry-standard encryption and security measures.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparent</h3>
              <p className="text-gray-600">We clearly explain how we collect, use, and protect your personal information.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliant</h3>
              <p className="text-gray-600">We adhere to privacy regulations and best practices for data protection.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Limited Retention</h3>
              <p className="text-gray-600">We only keep your data for as long as necessary to serve your needs.</p>
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
            Trust in Our
            <span className="block text-teal-200">Privacy Commitment</span>
          </h2>
          <p className="text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Your privacy is our priority. We're committed to protecting your data and maintaining transparency in all our practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/Contact" className="bg-white text-custom-teal px-12 py-6 rounded-xl text-xl font-semibold hover:bg-gray-100 transition-all flex items-center gap-3 shadow-2xl hover:shadow-3xl hover:scale-105">
              Contact Us
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
