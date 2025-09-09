import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Zap, Shield, Users, Target, Heart, Brain, Layers, Search, Monitor, Cloud, Award, Star, Settings } from 'lucide-react';

const UiPath: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              UiPath
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-6">
              Intelligent, Scalable, and Enterprise-Grade RPA
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-4xl mx-auto">
              At <strong>AppXcess</strong>, we leverage <strong>UiPath</strong>—a leading enterprise automation platform—for intelligent, wide-scale workflow automation. Trusted by businesses across industries, UiPath helps transform repetitive, rule-based tasks into seamless digital workflows that scale, adapt, and accelerate business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/Contact"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center justify-center"
              >
                Start Your UiPath Automation Journey Today
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

      {/* Platform Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Overview: From Discovery to Automation at Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The UiPath Business Automation Platform covers every stage of automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-indigo-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Search className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Discover</h3>
              </div>
              <p className="text-gray-600">
                Use AI-driven process mining, task mining, and communication mining to pinpoint high-impact automation opportunities
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Automate</h3>
              </div>
              <p className="text-gray-600">
                Rapidly build both UI and API-based automations with low-code tools and generative AI support
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Operate</h3>
              </div>
              <p className="text-gray-600">
                Manage automations at scale, with analytics, governance, continuous testing, and cloud-native flexibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Suite of Automation Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Complete Suite of Automation Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              UiPath equips organizations with a full ecosystem of automation capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Layers className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Studio</h3>
              </div>
              <p className="text-gray-600">
                Low-code visual IDEs for both citizen developers and RPA teams
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Robots</h3>
              </div>
              <p className="text-gray-600">
                Attended and unattended bots that execute workflows across applications and systems
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Monitor className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Orchestrator</h3>
              </div>
              <p className="text-gray-600">
                Central command center for deploying, scheduling, monitoring, and governing bots
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Search className="h-8 w-8 text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Process Discovery Tools</h3>
              </div>
              <p className="text-gray-600">
                Tools like Task Capture and Automation Hub identify and prioritize automation projects
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">AI & Analytics</h3>
              </div>
              <p className="text-gray-600">
                Document Understanding, AI Center, Insights, Data Service—governance
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Cloud className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Cloud-Native Platform</h3>
              </div>
              <p className="text-gray-600">
                Secure, scalable infrastructure that adapts to your business needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why UiPath Shines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why UiPath Shines
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-indigo-50 rounded-xl">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Overall RPA Platform in 2025</h3>
              <p className="text-gray-600">
                UiPath ranks highest for usability, integration, and scalability
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Insights</h3>
              <p className="text-gray-600">
                Pioneering "agentic automation": intelligent agents that adapt and act on their own
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Results in Healthcare</h3>
              <p className="text-gray-600">
                Omega Healthcare automated claims and billing workflows using UiPath.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Components Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Components That Power Enterprise Automation
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full table-fixed">
                <thead className="bg-gradient-to-r from-teal-50 to-blue-50">
                  <tr>
                    <th className="w-1/3 px-8 py-6 text-left text-base font-bold text-gray-900 border-r border-gray-200">Component</th>
                    <th className="w-2/3 px-8 py-6 text-left text-base font-bold text-gray-900">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 text-base font-semibold text-gray-900 border-r border-gray-200 align-top">Studio & StudioX/Web</td>
                    <td className="px-8 py-6 text-base text-gray-700 leading-relaxed align-top">Intuitive drag-and-drop workflow designers—suitable for both developers and citizen developers</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 text-base font-semibold text-gray-900 border-r border-gray-200 align-top">Recording Features</td>
                    <td className="px-8 py-6 text-base text-gray-700 leading-relaxed align-top">Support for desktop, web, Citrix, and more—simplifying building of automation scripts</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 text-base font-semibold text-gray-900 border-r border-gray-200 align-top">Robots</td>
                    <td className="px-8 py-6 text-base text-gray-700 leading-relaxed align-top">Attended and unattended bots for diverse automation scenarios</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 text-base font-semibold text-gray-900 border-r border-gray-200 align-top">Orchestrator</td>
                    <td className="px-8 py-6 text-base text-gray-700 leading-relaxed align-top">Full control center to manage, schedule, and monitor automation fleets</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 text-base font-semibold text-gray-900 border-r border-gray-200 align-top">AI & Discovery Tools</td>
                    <td className="px-8 py-6 text-base text-gray-700 leading-relaxed align-top">Process mining, Task Capture, and AI Center to accelerate and enhance automation projects</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 text-base font-semibold text-gray-900 border-r border-gray-200 align-top">Analytics & Insights</td>
                    <td className="px-8 py-6 text-base text-gray-700 leading-relaxed align-top">Dashboards and insights for visibility, performance monitoring, and continuous improvement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose UiPath via AppXcess */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose UiPath via AppXcess?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-indigo-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Speed & Scale</h3>
              </div>
              <p className="text-gray-600">
                Deploy automations quickly, reliably, and confidently with secure, cloud-native infrastructure
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Flexibility</h3>
              </div>
              <p className="text-gray-600">
                From attended desktop bots to unattended fully automated agents, UiPath adapts to your needs
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Democratized Automation</h3>
              </div>
              <p className="text-gray-600">
                Empower business users with StudioX, or leverage UiPath Apps for low-code experiences
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">AI-Driven & Secure</h3>
              </div>
              <p className="text-gray-600">
                Embedded AI, generative automation, and governance-through-design ensure compliance and innovation go hand in hand
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Future-Ready Platform</h3>
              </div>
              <p className="text-gray-600">
                With agentic AI, UiPath is leading toward truly scalable, autonomous, context-aware automation
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Supported Excellence</h3>
              </div>
              <p className="text-gray-600">
                Benefit from UiPath Academy, Marketplace accelerators, and robust global support ecosystems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Automate with Confidence */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate with Confidence?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            At <strong>AppXcess</strong>, we design and deliver UiPath-powered automations tailored to your business: from discovery and deployment to scaling and optimization. Let us help you build an automation-first organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Start Your UiPath Automation Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/Contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UiPath;
