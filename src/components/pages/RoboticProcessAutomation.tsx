import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Bot, Zap, Shield, TrendingUp, Users, Target, Globe, Database, Settings, BarChart3, Cpu, Clock, Heart, Lightbulb, Workflow } from 'lucide-react';

const RoboticProcessAutomation: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Robotic Process Automation (RPA)
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-6">
              Automate the Routine. Empower Your Workforce.
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              At <strong>AppXcess</strong>, we streamline your most repetitive, rule-based workflows with <strong>Robotic Process Automation (RPA)</strong>—software "bots" that mimic human interactions within digital systems. These digital workers handle tasks like data entry, form processing, document transfers, and system integrations, so your team can focus on what truly drives value.
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

      {/* How RPA Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How RPA Works
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Modern RPA mimics human actions—logging into applications, clicking buttons, extracting data, and moving it between systems—without needing backend APIs. Through visual workflows or screen scraping, bots replay the steps you perform manually, usually created via low-code interfaces like bot studios and orchestrated through centralized dashboards.
              </p>
              <p className="text-lg text-gray-600">
                Today's platforms also include orchestration hubs, analytics, and governance tools to manage deployment, monitor performance, and maintain security.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Bot className="h-12 w-12 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Bot Creation</h3>
                  <p className="text-sm text-gray-600">Low-code visual workflows</p>
                </div>
                <div className="text-center">
                  <Settings className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Orchestration</h3>
                  <p className="text-sm text-gray-600">Centralized management</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
                  <p className="text-sm text-gray-600">Performance monitoring</p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
                  <p className="text-sm text-gray-600">Governance & compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why RPA Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why RPA Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accelerate Efficiency</h3>
              <p className="text-gray-600">
                Bots work 24/7—fast, accurate, and tireless—speeding up operations and reducing cycle times.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reduce Costs & Errors</h3>
              <p className="text-gray-600">
                Automation dramatically lowers manual labor and minimizes mistakes in repetitive tasks.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Non-Intrusive Implementation</h3>
              <p className="text-gray-600">
                RPA integrates with existing systems via the UI—no major changes to core infrastructure needed.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable & Resilient</h3>
              <p className="text-gray-600">
                Easily deploy more bots as demand grows, ensuring seamless business continuity and operational control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common RPA Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common RPA Use Cases
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Finance & Banking</h3>
              </div>
              <p className="text-gray-600">
                Automate invoice processing, transaction reconciliation, compliance reporting.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Insurance</h3>
              </div>
              <p className="text-gray-600">
                Streamline claims entry, policy administration, and fraud screening.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Workflow className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Manufacturing & Logistics</h3>
              </div>
              <p className="text-gray-600">
                Accelerate order processing, inventory updates, supplier communications.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Customer Support</h3>
              </div>
              <p className="text-gray-600">
                Automate ticket routing, account updates, CRM entries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced RPA: Hyperautomation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced RPA: The Rise of Hyperautomation
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              RPA is evolving into <strong>Hyperautomation</strong>—an integrated approach combining RPA, AI, machine learning, process mining, and low-code platforms. This enables intelligent, end-to-end workflow automation and adaptive, data-driven operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Bot className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">RPA</h3>
              <p className="text-sm text-gray-600">Process automation</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Cpu className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">AI & ML</h3>
              <p className="text-sm text-gray-600">Intelligent decisions</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <BarChart3 className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Process Mining</h3>
              <p className="text-sm text-gray-600">Workflow analysis</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Settings className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Low-Code</h3>
              <p className="text-sm text-gray-600">Rapid development</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Lightbulb className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Integration</h3>
              <p className="text-sm text-gray-600">End-to-end solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* The RPA Advantage with AppXcess */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The RPA Advantage with AppXcess
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <strong>AppXcess bridges automation with impact</strong>—building RPA solutions that are rapid, reliable, and resilient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Bot Studio Development</h3>
              </div>
              <p className="text-gray-600">
                We design intuitive, low-code bot workflows tailored to your operations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Orchestration & Monitoring</h3>
              </div>
              <p className="text-gray-600">
                Deploy bots at scale with dashboards that monitor performance, utilization, and ROI.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Security & Compliance First</h3>
              </div>
              <p className="text-gray-600">
                Our bots include credential vaults, audit trails, and governance features to keep your operations safe.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Cpu className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">AI-Enhanced Automation</h3>
              </div>
              <p className="text-gray-600">
                From structured bots to intelligent automation, we integrate AI for tasks like document parsing and exception handling.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Managed Automation Services</h3>
              </div>
              <p className="text-gray-600">
                AppXcess supports your bots beyond deployment—with maintenance, updates, scaling, and optimization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Custom Solutions</h3>
              </div>
              <p className="text-gray-600">
                Tailored RPA implementations that align with your specific business processes and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Results */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Speed</h3>
              <p className="text-lg text-gray-600">
                Complete high-volume batch tasks overnight with zero human intervention.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Savings</h3>
              <p className="text-lg text-gray-600">
                Reduce operational costs by up to 70% through task automation.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transformation</h3>
              <p className="text-lg text-gray-600">
                Enable staff to shift from mundane tasks to strategic, value-added work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Smarter?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Elevate productivity and accuracy with RPA from <strong>AppXcess</strong>. Discover how automation can optimize your workflows—think smarter, work faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Started with RPA Today
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

export default RoboticProcessAutomation;
