import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, TrendingUp, Users, Target, Globe, Database, Settings, BarChart3, Cpu, Clock, Heart, Lightbulb, Workflow, Link as LinkIcon, CheckCircle, Bot, Layers, Search, Play, Monitor, Cloud, Lock, Award, Star, Building, FileText, DollarSign, UserCheck, HeadphonesIcon, ShoppingCart, Brain } from 'lucide-react';

const EnterpriseWorkflowAutomation: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Enterprise Workflow Automation
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-6">
              Streamline Complex Business Processes with Precision
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-4xl mx-auto">
              At <strong>AppXcess</strong>, we help organizations <strong>automate, orchestrate, and optimize complex workflows</strong> across departments, applications, and systems. Enterprise Workflow Automation reduces manual effort, accelerates decision-making, and ensures consistent execution of business-critical processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/Contact"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center justify-center"
              >
                Schedule a Consultation Today
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

      {/* What is Enterprise Workflow Automation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Enterprise Workflow Automation?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-left p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <LinkIcon className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Application Integration</h3>
              <p className="text-gray-600">
                Connect ERP, CRM, HRMS, finance, and collaboration tools seamlessly.
              </p>
            </div>

            <div className="text-left p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Workflow className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Process Orchestration</h3>
              <p className="text-gray-600">
                Manage multi-step workflows, approvals, and dependencies efficiently.
              </p>
            </div>

            <div className="text-left p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoring & Analytics</h3>
              <p className="text-gray-600">
                Track performance, detect bottlenecks, and optimize processes.
              </p>
            </div>

            <div className="text-left p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Intelligent Automation</h3>
              <p className="text-gray-600">
                Automate repetitive tasks with RPA and AI-enhanced decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Enterprise Workflow Automation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Operational Efficiency</h3>
              </div>
              <p className="text-gray-600">
                Automate tasks, approvals, and notifications to free workforce for strategic initiatives.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Consistency & Compliance</h3>
              </div>
              <p className="text-gray-600">
                Ensure processes are executed accurately and meet regulatory requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Scalability</h3>
              </div>
              <p className="text-gray-600">
                Easily adapt workflows as your organization grows or processes change.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center mb-4">
                <Monitor className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Real-Time Visibility</h3>
              </div>
              <p className="text-gray-600">
                Monitor tasks, process metrics, and workflow health for decision-making.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center mb-4">
                <DollarSign className="h-8 w-8 text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Reduced Errors & Costs</h3>
              </div>
              <p className="text-gray-600">
                Minimize human mistakes and reduce operational overhead.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Enterprise Integration</h3>
              </div>
              <p className="text-gray-600">
                Seamlessly connect all your business systems and applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Enterprise Workflow Automation Use Cases
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <DollarSign className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Finance & Accounting</h3>
              </div>
              <p className="text-gray-600">
                Automate invoice approvals, expense reporting, and reconciliation processes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <UserCheck className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">HR & Employee Management</h3>
              </div>
              <p className="text-gray-600">
                Streamline onboarding, leave approvals, evaluations, and payroll workflows.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <HeadphonesIcon className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">IT & Support Operations</h3>
              </div>
              <p className="text-gray-600">
                Automate ticket routing, incident management, and system provisioning.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Sales & Marketing</h3>
              </div>
              <p className="text-gray-600">
                Automate lead nurturing, approvals, campaign execution, and reporting.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <ShoppingCart className="h-8 w-8 text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Supply Chain & Logistics</h3>
              </div>
              <p className="text-gray-600">
                Optimize procurement, inventory updates, and delivery tracking.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Document Management</h3>
              </div>
              <p className="text-gray-600">
                Automate document processing, approvals, and compliance workflows.
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
              Why Choose AppXcess for Enterprise Workflow Automation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">End-to-End Expertise</h3>
              <p className="text-gray-600 text-left">
                From process discovery to automation deployment and continuous optimization.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hybrid Automation</h3>
              <p className="text-gray-600 text-left">
                Combine RPA, AI, and low-code platforms for maximum impact.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customized Solutions</h3>
              <p className="text-gray-600 text-left">
                Tailored workflows aligned with your business needs and systems.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Support & Governance</h3>
              <p className="text-gray-600 text-left">
                Ensure smooth operation, compliance, and scalability of automated workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Enterprise with Automation
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            With <strong>AppXcess Enterprise Workflow Automation</strong>, you can unlock operational efficiency, accelerate processes, and empower employees to focus on value-driven tasks rather than repetitive work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Schedule a Consultation Today
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

export default EnterpriseWorkflowAutomation;
