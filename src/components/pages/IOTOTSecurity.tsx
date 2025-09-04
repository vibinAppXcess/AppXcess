import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import { Shield, Radio, Network, Lock, AlertTriangle, ArrowRight } from 'lucide-react';

const IOTOTSecurity: React.FC = () => {
  const approachSecureDesign = [
    'IoT/OT Threat Modeling and Risk',
    'Secure IoT/OT Application design & Source code review',
    'Vulnerability Assessment and Penetration Testing',
    'Assessment for IoT/OT apps in the cloud, on-premises, and hybrid.',
    'IoT/OT assets management'
  ];

  const approachImplementation = [
    'IoT/OT Application Security Assessment',
    'Security Baselining for system components',
    'IoT infrastructure identity and access management',
    'Communication Channel Security',
    'Incident Management Procedure Definition'
  ];

  const approachOperations = [
    'IOT current state security review',
    'Integration of ICS alerts with SIEM',
    'IOT Data lifecycle protection',
    'Integration with the organizational incident management process',
    'Stakeholder security awareness program'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              IOT/OT Security
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Safeguard your devices and networks
              <span className="block text-teal-600">for any IoT/OT environment</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Safeguard your devices and networks in any IoT/OT environment with our outstanding security solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/Contact"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center"
              >
                Let’s Talk
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#approach"
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors inline-flex items-center"
              >
                Explore Our Approach
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Your partner for IoT/OT security</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With Terralogic’s expertise in a wide range of cutting-edge products and solutions, you gain an outstanding partner to guide you through the increasingly complex security solutions landscape. Terralogic’s IoT/OT security services encompass NIST SP 800-30, ISO/SAE 21434, and WP.29 frameworks.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-100 text-center">
                <Radio className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                <div className="font-semibold text-gray-900">IoT/OT Infrastructure</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-100 text-center">
                <Network className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                <div className="font-semibold text-gray-900">Network Segmentation</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-100 text-center">
                <Lock className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                <div className="font-semibold text-gray-900">Device Hardening</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-100 text-center">
                <AlertTriangle className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                <div className="font-semibold text-gray-900">Threat Detection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Secure by design, implemented with rigor, and operated with vigilance</p>
            <p className="mt-4 text-gray-600 max-w-4xl mx-auto">We use defense-in-depth across people, process, and technology. Each phase delivers tangible artifacts and measurable outcomes mapped to NIST SP 800-30, ISO/SAE 21434, and WP.29 controls.</p>
          </div>
          <div className="space-y-20">
            {/* Row 1: Secure Design - bullets left, illustration right */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Reveal slide="up">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Secure Design</h3>
                <ul className="space-y-2">
                  {approachSecureDesign.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-teal-600"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal slide="left" className="relative">
                <div className="absolute -top-8 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 opacity-30 blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80"
                  alt="Secure Design Illustration"
                  className="mx-auto md:mx-0 w-full h-64 object-cover rounded-2xl border border-purple-200 shadow"
                />
              </Reveal>
            </div>

            {/* Row 2: Secure Implementation - illustration left, bullets right */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Reveal slide="right" className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -top-8 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-teal-300 to-blue-400 opacity-30 blur-2xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
                    alt="Secure Implementation Illustration"
                    className="mx-auto md:mx-0 w-full h-64 object-cover rounded-2xl border border-teal-200 shadow"
                  />
                </div>
              </Reveal>
              <Reveal slide="up" className="order-1 md:order-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Secure Implementation</h3>
                <ul className="space-y-2">
                  {approachImplementation.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-teal-600"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Row 3: Secure Operations - bullets left, illustration right */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Reveal slide="up">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Secure Operations</h3>
                <ul className="space-y-2">
                  {approachOperations.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-teal-600"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal slide="left" className="relative">
                <div className="absolute -bottom-8 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-300 to-pink-400 opacity-30 blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1600&q=80"
                  alt="Secure Operations Illustration"
                  className="mx-auto md:mx-0 w-full h-64 object-cover rounded-2xl border border-indigo-200 shadow"
                />
              </Reveal>
            </div>
          </div>

          {/* Engagement timeline */}
          
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Need an IoT/OT security assessment?</h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">Let’s define a roadmap across NIST SP 800-30, ISO/SAE 21434, and WP.29 that fits your organization.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Talk to Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="#approach"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors inline-flex items-center"
            >
              View Our Approach
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IOTOTSecurity;


