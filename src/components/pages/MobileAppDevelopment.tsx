import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Smartphone, Globe, Zap, Users, TrendingUp, Shield, Code, Cloud, Palette, Target, Rocket, Heart, Lightbulb } from 'lucide-react';

const MobileAppDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Mobile Application Development
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-6">
              Top Mobile and Web App Development Services
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Build Apps That Stand Out From the Rest
            </p>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              At <strong>AppXcess</strong>, our mobile and web application development services help you design and build apps that provide <strong>unforgettable user experiences</strong> across all platforms. We craft applications that are not just functional, but also engaging, scalable, and future-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/Contact"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              It's All About Bringing a Change to Users' Lives
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-50 to-blue-50">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Well-Scripted Strategy</h3>
              <p className="text-gray-600">
                A strategy that delivers meaningful value to users and aligns with business objectives.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Robust Framework</h3>
              <p className="text-gray-600">
                A framework that translates ideas into usable products with scalable architecture.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Design-First Approach</h3>
              <p className="text-gray-600">
                A design approach that prioritizes user experience and intuitive interactions.
              </p>
            </div>
          </div>

          
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise – What We Do
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Smartphone className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Native Development</h3>
              </div>
              <p className="text-gray-600 mb-4">Native Android & iOS Development and maintenance</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Cross-Platform</h3>
              </div>
              <p className="text-gray-600 mb-4">Cross-Platform Solutions (Flutter, React Native)</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Progressive Web Apps</h3>
              </div>
              <p className="text-gray-600 mb-4">Progressive Web Apps (PWAs) for performance</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Enterprise Solutions at Scale</h3>
              </div>
              <p className="text-gray-600 mb-4">Enterprise Mobility Solutions at scale</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Industry Domains</h3>
              </div>
              <p className="text-gray-600 mb-4">eCommerce, FinTech, HealthTech, EduTech, Logistics & More</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Rocket className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">End-to-End</h3>
              </div>
              <p className="text-gray-600 mb-4">Complete development lifecycle from strategy to maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Do It – Design to Transform Lives
            </h2>
          </div>

          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-teal-600">1</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Understand the Goals</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  We start by understanding your <strong>business objectives, user needs, and market dynamics</strong>, ensuring that the app is aligned with your vision from inception.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl">
                <Target className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                <p className="text-center text-gray-700">Strategic alignment with business goals</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl order-2 lg:order-1">
                <Zap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <p className="text-center text-gray-700">Rapid development cycles</p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Agile for Rapid Delivery</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  We leverage <strong>Agile, DevOps, and DesOps</strong> practices for rapid development cycles, continuous integration, and faster time to market. Automation in our development pipeline reduces implementation delays and accelerates delivery.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-indigo-600">3</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Microservices Architecture</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Adopt faster innovation and seamless scalability with <strong>microservices-based app development</strong>. This enables modular, high-performance applications that adapt to changing business needs.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
                <Code className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                <p className="text-center text-gray-700">Modular, scalable architecture</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl order-2 lg:order-1">
                <Cloud className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <p className="text-center text-gray-700">Cloud-first solutions</p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-purple-600">4</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Cloud Integration</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  With our strong expertise in <strong>cloud-first solutions</strong>, we integrate applications with cloud platforms to ensure reliability, performance, and scalability across global markets.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-pink-600">5</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">UX/UI Design Excellence</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  We are a <strong>design-driven company</strong>. Our global pool of design experts creates <strong>intuitive, engaging, and impactful user experiences</strong> that not only look great but also transform how users interact with technology.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-xl">
                <Palette className="h-16 w-16 text-pink-600 mx-auto mb-4" />
                <p className="text-center text-gray-700">Design-driven excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AI & ML-Powered Apps</h3>
              <p className="text-gray-600 text-sm text-left">
                Build intelligent apps with personalization, predictive analytics, and automation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">IoT & Wearable Integration</h3>
              <p className="text-gray-600 text-sm text-left">
                Extend mobile apps to connected devices and smart ecosystems at scale.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Secure by Design</h3>
              <p className="text-gray-600 text-sm text-left">
                Embed security best practices in code, APIs, and cloud infrastructure and continuous monitoring.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Post-Launch Support</h3>
              <p className="text-gray-600 text-sm text-left">
                Continuous monitoring, updates, and feature enhancements to keep your app future-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits for Your Business
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Faster Time to Market</h3>
              <p className="text-gray-600">
                Accelerated development with Agile & DevOps methodologies.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced User Engagement</h3>
              <p className="text-gray-600">
                Beautiful designs and seamless experiences that keep users coming back.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Scalability</h3>
              <p className="text-gray-600">
                Apps built to grow with your business needs and user base.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reduced Complexity</h3>
              <p className="text-gray-600">
                Simplified operations through automation and integration.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Edge</h3>
              <p className="text-gray-600">
                Innovative apps that set you apart in the marketplace.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Future-Ready</h3>
              <p className="text-gray-600">
                Modern architecture that adapts to emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AppXcess */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why AppXcess?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Expertise</h3>
              <p className="text-gray-600 text-left">
                Experience across industries and app ecosystems.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-600 text-left">
                Tailored apps designed for your business challenges.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Future-Ready</h3>
              <p className="text-gray-600 text-left">
                Modern architecture, cloud integration, and features.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">End-to-End Partner</h3>
              <p className="text-gray-600 text-left">
                From ideation to support, we're with you at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Ideas Into Powerful Apps
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            At <strong>AppXcess</strong>, we don't just build apps—we build <strong>experiences that make an impact</strong>. Whether you need a customer-facing mobile app, an enterprise solution, or a cloud-integrated digital platform, our team ensures your vision is transformed into a product that drives success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Ready to build your next mobile app?
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
