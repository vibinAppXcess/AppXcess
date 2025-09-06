import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Code, Zap, Users, Shield, TrendingUp, Rocket, Globe, Database, Settings, Target, Lightbulb, Cpu, Palette } from 'lucide-react';

const LowCodeNoCodeDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Low-Code & No-Code Development Platforms
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-6">
              Empower Business Innovation Without Heavy Coding
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              At <strong>AppXcess</strong>, we believe powerful digital solutions shouldn't require endless coding. Our <strong>Low-Code & No-Code</strong> services enable you to build enterprise-grade applications quickly, securely, and cost-efficiently—empowering both developers and business users to innovate with ease.
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

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Microsoft Power Platform</h3>
              </div>
              <p className="text-gray-600 mb-4">
                <strong>Power Apps & Automate</strong> - Unlock automation, workflow innovation, and custom solutions with minimal coding effort.
              </p>
              <p className="text-gray-600">
                We upgrade legacy systems into modern, cloud-ready, AI-enhanced platforms—ensuring seamless transformation with no disruption.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Citizen Development Enablement</h3>
              </div>
              <p className="text-gray-600 mb-4">
                We equip your non-technical teams with the tools, support, and strategies to create apps independently.
              </p>
              <p className="text-gray-600">
                From time-tracking tools to bespoke CRMs and inventory portals—our citizen development frameworks empower innovation from within.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">System Integration & Workflow Connectivity</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Ensure your low-code/no-code apps talk to each other and your core systems—ERPs, CRMs, databases—seamlessly.
              </p>
              <p className="text-gray-600">
                Drive cross-functional collaboration with smooth data flows across all platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms We Excel In */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platforms We Excel In
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Microsoft Power Apps</h3>
              <p className="text-gray-600">
                Ideal for enhancing the Microsoft ecosystem with low-code solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">OutSystems</h3>
              <p className="text-gray-600">
                A robust low-code platform for full-stack enterprise applications with modern UI/UX and DevOps-ready deployments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bubble.io</h3>
              <p className="text-gray-600">
                A leading no-code tool for rapid MVPs, web apps, and scalable digital products without traditional coding.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Zoho Creator, Salesforce Lightning, Mendix</h3>
              <p className="text-gray-600">
                Flexible options for tailored, enterprise-grade, low-code solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Low-Code & No-Code with AppXcess */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Low-Code & No-Code with AppXcess?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accelerated Time to Market</h3>
              <p className="text-gray-600">
                Drag-and-drop development means you can go from idea to production in record time.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Democratized Innovation</h3>
              <p className="text-gray-600">
                Empower non-technical staff (citizen developers) to create impactful apps quickly.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise-Grade Security</h3>
              <p className="text-gray-600">
                Built-in governance, access control, and compliance features ensure apps are secure from day one.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Efficiency & ROI</h3>
              <p className="text-gray-600">
                Faster builds, fewer resources, and reusable components save both time and money.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable & Flexible</h3>
              <p className="text-gray-600">
                From lightweight workflows to large-scale enterprise systems, platforms like OutSystems and Bubble.io scale with your business needs.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Prototyping</h3>
              <p className="text-gray-600">
                Test ideas quickly with visual development tools and iterate based on real user feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Platform Selection</h3>
              <p className="text-gray-600">
                Choose the right low-code/no-code platform based on your requirements, existing systems, and business goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Prototyping</h3>
              <p className="text-gray-600">
                Build quick prototypes to validate concepts and gather feedback before full development.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Development & Integration</h3>
              <p className="text-gray-600">
                Develop the full application with seamless integration to your existing systems and workflows.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Training & Support</h3>
              <p className="text-gray-600">
                Provide comprehensive training and ongoing support to ensure successful adoption and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Use Cases
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Employee Management</h3>
              </div>
              <p className="text-gray-600">
                Time tracking, leave management, performance reviews, and employee onboarding systems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Customer Relationship Management</h3>
              </div>
              <p className="text-gray-600">
                Custom CRM systems, lead tracking, customer support portals, and sales pipeline management.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Workflow Automation</h3>
              </div>
              <p className="text-gray-600">
                Approval processes, document management, task automation, and business process optimization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Business Intelligence</h3>
              </div>
              <p className="text-gray-600">
                Dashboards, reporting tools, data visualization, and analytics platforms for informed decision making.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Customer Portals</h3>
              </div>
              <p className="text-gray-600">
                Self-service portals, booking systems, customer support tools, and online collaboration platforms.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Cpu className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Inventory Management</h3>
              </div>
              <p className="text-gray-600">
                Stock tracking, order management, supplier portals, and supply chain optimization tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Smarter?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            At <strong>AppXcess</strong>, we help you choose the right platform—whether it's <strong>Bubble.io, OutSystems, Power Platform</strong>, or another low-code tool—and guide you through the entire journey from setup to scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Started
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

export default LowCodeNoCodeDevelopment;
