import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Bot, Zap, Shield, TrendingUp, Users, Target, Globe, Database, Settings, BarChart3, Cpu, Clock, Heart, Lightbulb, Workflow, Cloud, Brain } from 'lucide-react';

const AutomationAnywhere: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Automation Anywhere
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-6">
              Elevate Workflow Automation with AI-Powered RPA
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              At <strong>AppXcess</strong>, we harness the power of <strong>Automation Anywhere</strong>—a leading cloud-native RPA platform—to deliver intelligent, scalable, and secure automation at enterprise scale.
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

      {/* What Makes Automation Anywhere Stand Out */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Automation Anywhere Stand Out
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Cloud className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Cloud-Native & Scalable</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automation Anywhere is built for the cloud, offering fast deployment with no infrastructure setup, 99.9% uptime, built-in disaster recovery, and automatic regulatory updates.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-teal-600 mr-2" />
                  Deployment with no infrastructure setup
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-teal-600 mr-2" />
                  99.9% uptime guarantee
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-teal-600 mr-2" />
                  Built-in disaster recovery
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-teal-600 mr-2" />
                  Automatic regulatory updates
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">AI-Infused Automation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced features—such as AI reasoning, Automator AI—empower intelligent decision-making and automation orchestration. It transforms static workflows into context-aware, adaptive agents.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  AI reasoning capabilities
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  Automator AI integration
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  Agentic Process Automation
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  Context-aware, adaptive agents
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Unified, Secure Platform</h3>
              </div>
              <p className="text-gray-600 mb-4">
                From drag-and-drop bot creation to centralized governance, Automation Anywhere offers low-code/no-code operations, robust access control, audit trails, and enterprise-grade security.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-indigo-600 mr-2" />
                  Drag-and-drop bot creation
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-indigo-600 mr-2" />
                  Centralized governance
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-indigo-600 mr-2" />
                  Low-code/no-code operations
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-indigo-600 mr-2" />
                  Enterprise-grade security
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Platform Components
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Creator & Runner</h3>
              </div>
              <p className="text-gray-600">
                Design and run automations using a visual interface; execute both attended and unattended bots.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Control Room</h3>
              </div>
              <p className="text-gray-600">
                Central hub for managing bots, scheduling, performance tracking, and analytics.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Insights</h3>
              </div>
              <p className="text-gray-600">
                Dashboard that provides real-time performance metrics and ROI tracking for key stakeholders.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Bot Store</h3>
              </div>
              <p className="text-gray-600">
                Pre-built bots and automation templates for accelerated deployment for faster launches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Automation Anywhere Through AppXcess */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Why Choose Automation Anywhere Through AppXcess?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-left p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid ROI</h3>
              <p className="text-gray-600">
                Move from ideation to live automation in weeks, not months.
              </p>
            </div>

            <div className="text-left p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Cloud className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sovereign Cloud Control</h3>
              <p className="text-gray-600">
                Choose between managed cloud environments or hybrid models with on-prem options.
              </p>
            </div>

            <div className="text-left p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Autonomy</h3>
              <p className="text-gray-600">
                From workflows to agents, evolve toward autonomous operations.
              </p>
            </div>

            <div className="text-left p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security, by Design</h3>
              <p className="text-gray-600">
                Governance, compliance, and auditability are fully integrated.
              </p>
            </div>

            <div className="text-left p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">End-to-End Support</h3>
              <p className="text-gray-600">
                We manage setup, scaling, monitoring, bot maintenance, and optimization.
              </p>
            </div>

            <div className="text-left p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored automation strategies that align with your specific business processes and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Businesses across sectors are tapping into Automation Anywhere for transformative automation—whether it's handling high-volume order processing, governance across multiple apps, or augmenting human work with intelligent co-pilots.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Workflow className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High-Volume Processing</h3>
              <p className="text-gray-600">
                Handle thousands of transactions and orders with consistent accuracy and speed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-App Governance</h3>
              <p className="text-gray-600">
                Maintain compliance and security across multiple applications and systems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Intelligent Co-Pilots</h3>
              <p className="text-gray-600">
                Augment human work with AI-powered assistants for enhanced productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-left p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Faster Implementation</h3>
              <p className="text-gray-600">
                Deploy automation solutions in weeks rather than months with cloud-native architecture.
              </p>
            </div>

            <div className="text-left p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Improved Accuracy</h3>
              <p className="text-gray-600">
                Eliminate human errors in repetitive tasks with consistent, reliable automation.
              </p>
            </div>

            <div className="text-left p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Operations</h3>
              <p className="text-gray-600">
                Run processes around the clock without breaks, holidays, or downtime.
              </p>
            </div>

            <div className="text-left p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Growth</h3>
              <p className="text-gray-600">
                Easily scale automation as your business grows with cloud-native flexibility.
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
            With Automation Anywhere and AppXcess, you're not just automating tasks—you're transforming how work happens. Drive efficiency, reduce errors, and empower your teams to focus on what truly matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Started with Automation Anywhere Today
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

export default AutomationAnywhere;
