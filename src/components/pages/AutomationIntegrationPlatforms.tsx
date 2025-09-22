import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, TrendingUp, Users, Target, Globe, Database, Settings, BarChart3, Cpu, Clock, Heart, Lightbulb, Workflow, Link as LinkIcon, CheckCircle, Bot, Layers, Search, Play, Monitor, Cloud, Lock, Award, Star, ShoppingCart } from 'lucide-react';

const AutomationIntegrationPlatforms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Automation & Integration Platforms
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-6">
              Connect Apps. Automate Workflows. Work Smarter.
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-4xl mx-auto">
              At <strong>AppXcess</strong>, we help businesses streamline operations and eliminate repetitive tasks with <strong>automation and integration platforms</strong>. Tools like <strong>Zapier</strong> and <strong>Make (formerly Integromat)</strong> allow you to connect multiple apps, automate processes, and orchestrate workflows without writing a single line of code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/Contact"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Automation & Integration Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Automation & Integration Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Modern businesses rely on a growing ecosystem of apps—CRMs, marketing tools, ERPs, collaboration platforms, and more. Manually transferring data or repeating tasks across these systems wastes time, introduces errors, and limits scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-left p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <LinkIcon className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 whitespace-nowrap">Seamlessly Connect Apps</h3>
              <p className="text-gray-600">
                Connect apps across cloud and on-premise environments without complex integrations.
              </p>
            </div>

            <div className="text-left p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Workflow className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 whitespace-nowrap">Automate Workflows</h3>
              <p className="text-gray-600">
                Automate notifications, approvals, data transfers, and reports to save time and effort.
              </p>
            </div>

            <div className="text-left p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 whitespace-nowrap">Accuracy & Reliability</h3>
              <p className="text-gray-600">
                Reduce manual errors and ensure consistent, reliable data processing across systems.
              </p>
            </div>

            <div className="text-left p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accelerate Operations</h3>
              <p className="text-gray-600">
                Speed up operations and productivity, letting teams focus on value-added work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms We Work With */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platforms We Work With
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Zapier */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Zapier</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Zapier lets you create automated workflows—called "Zaps"—between your favorite apps. Whether it's syncing CRM contacts, sending automated notifications, or triggering reports, Zapier enables <strong>rapid, no-code automation</strong> across hundreds of applications.
              </p>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Easy drag-and-drop workflow creation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Connects 5,000+ popular apps</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Triggers and actions to automate repetitive tasks</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Ideal for small to medium-sized business workflows</span>
                </div>
              </div>
            </div>

            {/* Make */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Make (Integromat)</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Make is a <strong>powerful, visual automation platform</strong> that enables advanced app integrations and multi-step workflows. With scenario-based automation, you can handle complex logic, conditional operations, and data transformations—all without coding.
              </p>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Visual workflow builder for complex automations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Connects cloud apps, APIs, and on-premise systems</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Conditional logic, iterators, and routers for advanced processes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Powerful scheduling and error-handling capabilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Use Cases
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Marketing</h3>
              </div>
              <p className="text-gray-600">
                Sync leads from forms to CRM, trigger email campaigns, and track engagement automatically.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <ShoppingCart className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">E-Commerce</h3>
              </div>
              <p className="text-gray-600">
                Automate order processing, inventory updates, and customer notifications and alerts.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Finance</h3>
              </div>
              <p className="text-gray-600">
                Generate reports, update spreadsheets, and reconcile data across platforms automatically.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Operations</h3>
              </div>
              <p className="text-gray-600">
                Notify teams, schedule tasks, or update project management tools seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AppXcess for Automation & Integration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why AppXcess for Automation & Integration
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-left">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Settings className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tailored Solutions</h3>
              <p className="text-gray-600">
                We analyze your business processes and design automated workflows that fit your operations perfectly.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-left">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Deployment</h3>
              <p className="text-gray-600">
                Implement automations quickly and securely without impacting existing infrastructure.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-left">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable & Flexible</h3>
              <p className="text-gray-600">
                From small workflows to enterprise-grade integration, your automations grow with your business.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-left">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Monitor className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoring & Support</h3>
              <p className="text-gray-600">
                Continuous monitoring, optimization, and troubleshooting to ensure workflows run flawlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Unlock productivity and efficiency with <strong>AppXcess Automation & Integration Platforms</strong>. Connect your apps, streamline processes, and empower your team to focus on growth, not repetitive tasks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomationIntegrationPlatforms;
