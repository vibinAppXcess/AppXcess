import React, { useState } from 'react';
import { ArrowRight, MapPin, Phone, Mail, Send, Building, Globe, Clock, MessageSquare, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Local state kept for live UX; submission posts directly to Zoho endpoint

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
              <span className="text-white">Contact&nbsp;Us</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-16 text-white/80 font-light max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business? Let's discuss how our innovative solutions can drive your success. Get in touch with our team today.
            </p>
            
            {/* Feature Highlights */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-custom-teal to-custom-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Presence</h3>
                <p className="text-white/70 text-sm">Malaysia - India - Australia - Singapore - Dubai</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-custom-blue to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
                <p className="text-white/70 text-sm">Round-the-clock assistance across all time zones</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-white/70 text-sm">Dedicated professionals ready to help</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-custom-teal rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-20 w-3 h-3 bg-custom-blue rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Our Contact
              <span className="block text-teal-600">Address Here</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with us across our global offices and get the support you need for your business transformation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* HQ - Malaysia */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-100">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">HQ - Malaysia</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Headquarters Office</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">+60 11-2357 9727</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                  <a href="mailto:info@appxcess.com" className="text-gray-600 hover:underline">info@appxcess.com</a>
                </div>
              </div>
            </div>
            
            {/* Tech Center - India */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tech Center - India</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Technology Development Center</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">+91 91136 19873</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <a href="mailto:tech@appxcess.com" className="text-gray-600 hover:underline">tech@appxcess.com</a>
                </div>
              </div>
            </div>
            
            {/* Biz Dev Center - Australia */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Biz Dev Center - Australia</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Business Development Center</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">+61 450 868 663</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                  <a href="mailto:biz@appxcess.com" className="text-gray-600 hover:underline">biz@appxcess.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-10 lg:p-16 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Form</h3>
              <form
                action="https://forms.zohopublic.in/appxcesstechnologies1/form/ContactForm/formperma/0HaUVP05CdEEomI-v4NPwHPK64kz-q-NVPP61jSbtik/htmlRecords/submit"
                method="POST"
                encType="multipart/form-data"
                accept-charset="UTF-8"
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="Name_First" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="Name_First"
                      name="Name_First"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="Name_Last" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="Name_Last"
                      name="Name_Last"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="international_PhoneNumber_countrycode" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input type="hidden" name="PhoneNumber_countrycodeval" id="international_PhoneNumber_countrycodeval" value="+91" />
                  <input
                    type="tel"
                    id="international_PhoneNumber_countrycode"
                    name="PhoneNumber_countrycode"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                    autoComplete="off"
                  />
                </div>
                
                <div>
                  <label htmlFor="Email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="SingleLine" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="SingleLine"
                    name="SingleLine"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Enter subject"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="SingleLine1" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <input
                    type="text"
                    id="SingleLine1"
                    name="SingleLine1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <span>Submit Now</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Ready to start your digital transformation journey? Our team of experts is here to help you achieve your business goals with cutting-edge technology solutions.
                </p>
              </div>
              
              {/* Quick Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Phone Numbers</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Malaysia: +60 11-2357 9727</p>
                      <p>Australia: +61 450 868 663</p>
                      <p>India: +91 91136 19873</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Addresses</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>
                        General: <a href="mailto:info@appxcess.com" className="hover:underline">info@appxcess.com</a>
                      </p>
                      <p>
                        Business: <a href="mailto:biz@appxcess.com" className="hover:underline">biz@appxcess.com</a>
                      </p>
                      <p>
                        Technical: <a href="mailto:tech@appxcess.com" className="hover:underline">tech@appxcess.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Locations</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>HQ - Malaysia</p>
                      <p>Tech Center - India</p>
                      <p>Biz Dev Center - Australia</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4">Why Choose AppXcess?</h4>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Global expertise with local presence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>24/7 technical support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Customized solutions for your business</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Proven track record of success</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Find Us on the Map</h3>
          <div className="relative w-full overflow-hidden rounded-3xl shadow-lg border border-gray-100" style={{paddingTop: '56.25%'}}>
            <iframe
              title="AppXcess Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.029458744361!2d101.6869!3d3.139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49d7e5a0fdfd%3A0x9e0d0c2a9d4b0d79!2sKuala%20Lumpur!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
              width="600"
              height="450"
              style={{border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
            Revolutionize your approach with customized solutions built for your needs. Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-custom-teal px-12 py-6 rounded-xl text-xl font-semibold hover:bg-gray-100 transition-all flex items-center gap-3 shadow-2xl hover:shadow-3xl hover:scale-105">
              Get Started
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="border-2 border-white/50 text-white px-12 py-6 rounded-xl text-xl font-semibold hover:bg-white hover:text-custom-teal transition-all flex items-center gap-3 backdrop-blur-sm">
              <MessageSquare className="w-6 h-6" />
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
