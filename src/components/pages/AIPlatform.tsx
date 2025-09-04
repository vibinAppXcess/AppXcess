import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Database, Zap, Shield, 
  Code2, Server, ArrowRight,
  Rocket, CheckCircle, 
  FileText, TrendingUp, Globe
} from 'lucide-react';
import { Button } from '../ui';

const AIPlatform: React.FC = () => {
  

  const platformCapabilities = [
    {
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture that scales automatically with your AI workloads",
      icon: <Server size={32} />
    },
    {
      title: "Real-time Processing",
      description: "Low-latency AI inference for time-sensitive applications and decision making",
      icon: <Zap size={32} />
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with encryption, access controls, and compliance standards",
      icon: <Shield size={32} />
    },
    {
      title: "Multi-modal AI",
      description: "Support for text, images, audio, and video processing in unified workflows",
      icon: <Globe size={32} />
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      title: "Medical Diagnosis Assistant",
      description: "AI-powered diagnostic tools that assist healthcare professionals in analyzing medical images and patient data.",
      benefits: ["Improved Accuracy", "Faster Diagnosis", "Reduced Costs", "Better Patient Outcomes"]
    },
    {
      industry: "Finance",
      title: "Fraud Detection System",
      description: "Real-time fraud detection using machine learning to identify suspicious transactions and prevent financial crimes.",
      benefits: ["Real-time Detection", "Reduced False Positives", "Cost Savings", "Enhanced Security"]
    },
    {
      industry: "Manufacturing",
      title: "Predictive Maintenance",
      description: "AI-driven maintenance scheduling that predicts equipment failures before they occur.",
      benefits: ["Reduced Downtime", "Lower Maintenance Costs", "Extended Equipment Life", "Improved Efficiency"]
    },
    {
      industry: "Retail",
      title: "Personalized Shopping",
      description: "AI-powered recommendation engines that provide personalized product suggestions to customers.",
      benefits: ["Increased Sales", "Better Customer Experience", "Higher Engagement", "Improved Retention"]
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "< 100ms", label: "Response Time" },
    { number: "50+", label: "AI Models" },
    { number: "24/7", label: "Support" }
  ];

  const partnerPlatforms = [
    {
      name: 'Databricks',
      description: 'Lakehouse platform for analytics and machine learning at scale.',
      points: [
        'Unified lakehouse with Delta Lake',
        'Collaborative notebooks and ML lifecycle',
        'Optimized Spark and scalable compute',
        'Enterprise security and governance'
      ]
    },
    {
      name: 'Dataiku',
      description: 'Collaborative data science and governed MLOps with visual flows.',
      points: [
        'Visual pipelines and low-code AI',
        'Team collaboration and shared assets',
        'MLOps deployment and monitoring',
        'Role-based access and governance'
      ]
    },
    {
      name: 'DataRobot',
      description: 'AutoML, governance, and MLOps for rapid AI adoption.',
      points: [
        'Automated model building and comparison',
        'Explainability and guardrails (XAI)',
        'Deployment and monitoring at scale',
        'Business-user friendly applications'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4 mr-2" />
              AI Platforms
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              AppXcess
              <span className="block text-teal-600">AI Platform</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Build, deploy, and scale intelligent applications with a modern, modular AI platform architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/Contact"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#architecture"
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors inline-flex items-center"
              >
                Explore Architecture
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Platforms Section */}
      <section id="architecture" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Platforms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Build on industry-leading platforms with AppXcess implementation expertise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerPlatforms.map((p, i) => (
              <div key={i} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300">
                <div className="text-xl font-bold text-gray-900 mb-2">{p.name}</div>
                <p className="text-gray-600 mb-4">{p.description}</p>
                <div className="space-y-2">
                  {p.points.map((pt, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                      <span className="text-sm text-gray-600">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Platform Architecture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A modular blueprint to ingest, process, train, and serve AI at scale</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/30">
              <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Database className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Data Ingestion</h3>
              <p className="text-gray-600 text-center">Batch/stream pipelines from apps, IoT, files, and APIs with lineage.</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/30">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Server className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Lakehouse & Storage</h3>
              <p className="text-gray-600 text-center">Open table formats with governance, ACID transactions, and versions.</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/30">
              <div className="w-16 h-16 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Code2 className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Training & Experimentation</h3>
              <p className="text-gray-600 text-center">Distributed training, experiment tracking, and model registry.</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/30">
              <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Zap className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Serving & Monitoring</h3>
              <p className="text-gray-600 text-center">Low-latency inference, A/B rollout, telemetry, and drift monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade infrastructure and tools to support your AI initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformCapabilities.map((capability, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  {React.cloneElement(capability.icon, { className: "text-teal-600" })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{capability.title}</h3>
                <p className="text-gray-600 text-center">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI platform transforms industries and drives business value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-teal-600 uppercase tracking-wide">{useCase.industry}</span>
                    <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  {useCase.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Platform Performance
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Built for scale, performance, and reliability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 mb-4">
                  {stat.number}
                </div>
                <p className="text-blue-100 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Begin building intelligent applications with our AI platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/30 text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <FileText className="text-teal-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Sign Up</h3>
              <p className="text-gray-600">
                Create your account and get instant access to our AI platform
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/30 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Code2 className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Build</h3>
              <p className="text-gray-600">
                Use our APIs and tools to develop your AI-powered applications
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/30 text-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Rocket className="text-indigo-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Deploy</h3>
              <p className="text-gray-600">
                Launch your applications with our scalable infrastructure
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" className="px-8 py-4 rounded-xl shadow-lg">
                Start Free Trial
              </Button>
              <Button variant="secondary" className="px-8 py-4 rounded-xl shadow-lg">
                Contact Sales
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPlatform;
