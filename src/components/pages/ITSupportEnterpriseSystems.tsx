import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, Settings, TrendingUp, Users, Zap, Target, Globe, Database, Server, Lock, BarChart3, Cpu, AlertTriangle, Clock, Heart, Cloud } from 'lucide-react';

const ITSupportEnterpriseSystems: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              IT Support & Enterprise Systems
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-6">
              Sustaining Your Digital Ecosystem with Reliability, Security & Scale
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              At <strong>AppXcess</strong>, our <strong>Support & Enterprise Systems</strong> services ensure your technology backbone is always robust, optimized, and evolving. Whether you have mission-critical enterprise platforms or end-user applications, we deliver seamless support, proactive maintenance, and enterprise-grade system management to keep your operations at peak performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/Contact"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/Contact"
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Ongoing IT Support & Maintenance</h3>
              </div>
              <p className="text-gray-600">
                We provide continuous support for your applications and infrastructure—handling performance monitoring, incident resolution, updates, and security patches to ensure uninterrupted operations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Server className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Enterprise Systems Engineering</h3>
              </div>
              <p className="text-gray-600">
                From ERP and CRM platforms to complex in-house systems, our team ensures smooth operation, scalable enhancements, and integration within your broader enterprise architecture.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Performance Monitoring & Optimization</h3>
              </div>
              <p className="text-gray-600">
                Using proactive monitoring tools, we diagnose and resolve slowdowns, optimize system performance, and ensure uptime across your digital infrastructure and resilience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Security & Compliance Management</h3>
              </div>
              <p className="text-gray-600">
                We enforce security protocols, manage access controls, conduct audits, and keep your systems compliant with relevant standards—reducing risk and preserving trust.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Scalability & Upgrade Strategy</h3>
              </div>
              <p className="text-gray-600">
                As your business grows, your systems need to evolve. We help you plan and implement scalable architecture, smooth cloud migration, and thoughtful system modernization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Rapid Troubleshooting & Incident Response</h3>
              </div>
              <p className="text-gray-600">
                When issues arise, our dedicated support team responds swiftly—diagnosing root causes, restoring services, and ensuring minimal disruption to your business and continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AppXcess */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AppXcess for Enterprise Support
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proactive Approach</h3>
              <p className="text-gray-600 text-left">
                We catch and fix issues before they affect your users with monitoring, automation, alerts, and rapid response.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Practices</h3>
              <p className="text-gray-600 text-left">
                We embed best practices for uptime, scalability, and compliance across your systems.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Functional Team</h3>
              <p className="text-gray-600 text-left">
                Our team combines DevOps, system engineers, cybersecurity, and monitoring experts for full-spectrum support.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Models</h3>
              <p className="text-gray-600 text-left">
                From managed services to dedicated support, we tailor support models to fit your business size and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliable Operations</h3>
              <p className="text-gray-600 text-left">
                Maintenance and support that reduces downtime and preserves user satisfaction.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimized Systems</h3>
              <p className="text-gray-600 text-left">
                Better system performance through fine-tuned monitoring, scaling, and automation.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Security</h3>
              <p className="text-gray-600 text-left">
                Systems are protected, patched, and compliant at all times, proactively monitored.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Growth</h3>
              <p className="text-gray-600 text-left">
                Upgrades and scalability built in, so systems evolve along with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Models */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Support Models
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">24/7 Managed Services</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Round-the-clock monitoring, maintenance, and support for mission-critical systems continuously.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-teal-600 mr-2" />
                  Continuous monitoring
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-teal-600 mr-2" />
                  Proactive maintenance
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-teal-600 mr-2" />
                  Instant incident response
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Dedicated Support Team</h3>
              </div>
              <p className="text-gray-600 mb-4">
                A dedicated team of experts focused exclusively on your systems and requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  Specialized expertise
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  Deep system knowledge
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  Customized solutions
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Hybrid Support Model</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Flexible combination of managed services and dedicated support tailored to your needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-indigo-600 mr-2" />
                  Scalable resources
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-indigo-600 mr-2" />
                  Cost optimization
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-indigo-600 mr-2" />
                  Flexible engagement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Server className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Systems</h3>
              </div>
              <p className="text-gray-600 mb-4">ERP, CRM, HRIS, and custom enterprise applications at scale</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Cloud className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Cloud Platforms</h3>
              </div>
              <p className="text-gray-600 mb-4">AWS, Azure, GCP, and hybrid cloud environments, securely scalable</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Database Systems</h3>
              </div>
              <p className="text-gray-600 mb-4">SQL Server, Oracle, MySQL, PostgreSQL, and NoSQL databases</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Security</h3>
              </div>
              <p className="text-gray-600 mb-4">Security frameworks, compliance standards, and audit management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Businesses */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trusted by Businesses Who Demand Consistency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our clients regard AppXcess as an extension of their own team—reliably managing their systems so they can focus on growth, innovation, and user experience. We deliver support with precision, urgency, and true ownership of uptime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Support Your Digital Backbone?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Partner with <strong>AppXcess</strong> for reliable IT Support & Enterprise Systems that ensure your technology drives results—without disruptions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/Contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors inline-flex items-center justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITSupportEnterpriseSystems;
