import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Cloud, Zap, Shield, TrendingUp, Users, Target, Rocket, Globe, Database, Server, Lock, BarChart3, Cpu, Settings } from 'lucide-react';

const CloudComputingDevOps: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cloud & DevOps Engineering
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-6">
              Scalable, Resilient Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Empowering Agile, Secure, and High-Performance Products
            </p>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              Legacy systems can't keep up with today's fast-paced digital economy. At <strong>AppXcess</strong>, we bring together <strong>cloud-native architectures</strong> and <strong>DevOps practices</strong> to deliver secure, adaptive, and future-ready digital platforms. Whether you're modernizing legacy applications or scaling enterprise systems, we ensure performance, reliability, and cost efficiency.
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

      {/* Our Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cloud & DevOps Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We provide end-to-end engineering and operational support to help organizations innovate with confidence:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Architecture Reviews</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive evaluation of your cloud environment to optimize performance, scalability, and security.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Reliability Engineering</h3>
              </div>
              <p className="text-gray-600">
                Proactive monitoring, disaster recovery, and SRE-driven frameworks to keep your systems always available.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Cloud Governance & FinOps</h3>
              </div>
              <p className="text-gray-600">
                Cost optimization, compliance automation, and proactive risk management to maximize ROI.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Rocket className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Migration & Modernization</h3>
              </div>
              <p className="text-gray-600">
                Phased migrations to the cloud with minimal downtime, including containerization, refactoring, and serverless strategies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">DevOps Automation</h3>
              </div>
              <p className="text-gray-600">
                CI/CD pipelines, Infrastructure as Code (IaC), DevSecOps, and automation to accelerate development lifecycles.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Managed Services</h3>
              </div>
              <p className="text-gray-600">
                Ongoing multi-cloud and hybrid environment support to ensure smooth day-to-day operations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Cloud className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Custom Cloud Solutions</h3>
              </div>
              <p className="text-gray-600">
                Tailored engineering for Microsoft Azure, AWS, and Google Cloud to meet your enterprise needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Data Engineering & Analytics</h3>
              </div>
              <p className="text-gray-600">
                Cloud-native data pipelines, real-time analytics, and AI/ML infrastructure for data-driven decision making.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Multi-Cloud Strategy</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive multi-cloud and hybrid cloud strategies to optimize performance, cost, and vendor independence.
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
              Why Choose AppXcess?
            </h2>
            <h3 className="text-2xl font-semibold text-teal-600 mb-8">
              Enterprise-Grade Capabilities
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Engineers</h3>
              <p className="text-gray-600 text-left">
                A dedicated team of Azure, AWS, GCP, and DevOps specialists with proven expertise.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Future-Ready Practices</h3>
              <p className="text-gray-600 text-left">
                Microservices, serverless, and containerized solutions designed for scale and high agility.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Built-In Security</h3>
              <p className="text-gray-600 text-left">
                Policy enforcement, compliance-as-code, and vulnerability scanning to protect your cloud assets.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Faster Innovation</h3>
              <p className="text-gray-600 text-left">
                Embedded DevOps and automation to reduce time-to-market and accelerate product delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Outcomes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Outcomes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">70% Faster Quotes</h3>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>Manufacturing:</strong> Migrated legacy RFQ systems to Azure, integrated with ERP, and optimized workflows.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">80% Higher Data Accuracy</h3>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>Automotive:</strong> Unified customer data through cloud-driven platforms for improved engagement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Zero Downtime</h3>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>Auction Platforms:</strong> Scaled global operations to serve millions without disruption.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">10M+ Users</h3>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>Collaboration:</strong> Delivered real-time communications platforms with low-latency voice, video, and messaging.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Doubled Efficiency</h3>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>mHealth Solutions:</strong> Enabled vaccination drives in low-connectivity regions with offline-first approach.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">33% Cost Savings</h3>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>Logistics:</strong> Automated operations on AWS to cut manual overhead and overall service time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Innovators */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trusted by Innovators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clients choose <strong>AppXcess</strong> as an extension of their own teams—collaborative, transparent, and results-driven. We combine precision with agility to deliver outcomes that matter.
          </p>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Cloud className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Cloud Platforms</h3>
              </div>
              <p className="text-gray-600 mb-4">Microsoft Azure, AWS, Google Cloud Platform</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Server className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Containerization</h3>
              </div>
              <p className="text-gray-600 mb-4">Docker, Kubernetes, OpenShift for container orchestration</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">DevOps Tools</h3>
              </div>
              <p className="text-gray-600 mb-4">Jenkins, GitLab CI, Azure DevOps, GitHub Actions</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Infrastructure as Code</h3>
              </div>
              <p className="text-gray-600 mb-4">Terraform, Ansible, ARM Templates, CloudFormation</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Security & Monitoring</h3>
              </div>
              <p className="text-gray-600 mb-4">Azure Security Center, AWS GuardDuty, Prometheus, Grafana</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Cpu className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Serverless & Microservices</h3>
              </div>
              <p className="text-gray-600 mb-4">Azure Functions, AWS Lambda, API Gateway, Service Mesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            From cloud strategy to execution and beyond, AppXcess is your partner in building scalable, resilient, and secure platforms that fuel innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudComputingDevOps;
