import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Cloud, Code, Shield, Zap, Users, TrendingUp, Globe, Database, Server, Lock } from 'lucide-react';

const FullStackCloudDeployment: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Full Stack Development with 
              <span className="text-teal-600 block">Cloud Deployment</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Seamless Integration. Custom Solutions. End-to-End Platforms.
            </p>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              At <strong>AppXcess</strong>, we specialize in full-stack development powered by robust cloud deployment strategies. 
              From intuitive front-end design to scalable back-end infrastructures, we deliver applications that are efficient, resilient, and future-ready.
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

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Efficiency · Scalability · Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why Choose Full Stack with Cloud Deployment?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Unified Development Model</h3>
              <p className="text-gray-600 text-left">
                Our approach bridges front-end and back-end—delivering experiences and integration across your tech stack.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud-Optimized Architectures</h3>
              <p className="text-gray-600 text-left">
                Harness cloud environments—auto-scaling—through containerized deployment, serverless, microservices.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Truly User-Centric Design Experience</h3>
              <p className="text-gray-600 text-left">
                Every interface is intuitive, responsive, and accessible, ensuring strong engagement across platforms and devices.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Resilient & Scalable Systems</h3>
              <p className="text-gray-600 text-left">
                Built to endure, our architectures adapt to growing user demand while maintaining performance and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">End-to-End Full Stack Solutions</h3>
                <p className="text-gray-600 mb-4">
                  From UI/UX to server-side logic, we craft cohesive applications tailored to your unique business workflows.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Front-end development with modern frameworks
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Back-end API development and database design
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Full-stack integration and testing
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cloud Deployment Strategies</h3>
                <p className="text-gray-600 mb-4">
                  Deploy modern applications via container platforms like Kubernetes, serverless services such as AWS Lambda or Azure Functions, or managed orchestration platforms for efficient delivery.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Container orchestration with Docker & Kubernetes
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Serverless deployment models
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Multi-cloud and hybrid cloud solutions
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">CI/CD & DevOps Integration</h3>
                <p className="text-gray-600 mb-4">
                  Streamline development with pipelines, infrastructure as code (IaC), and continuous monitoring to accelerate delivery and reduce downtime.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Automated testing and deployment pipelines
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Infrastructure as Code (IaC) implementation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Continuous monitoring and alerting
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Secure & Compliant Operations</h3>
                <p className="text-gray-600 mb-4">
                  Security and compliance are embedded at every layer—from secure code practices, continuous auditing, to cloud configuration and data protection.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Security-first development practices
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Compliance with industry standards
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Data protection and privacy measures
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value We Bring */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Value We Bring to Your Business
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Greater Agility</h3>
              <p className="text-gray-600 text-left">
                Update and deploy with confidence using modern DevOps workflows.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimized Costs</h3>
              <p className="text-gray-600 text-left">
                Cloud environments offer cost-efficient scaling, reducing overhead.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Operational Resilience</h3>
              <p className="text-gray-600 text-left">
                Enjoy stability, backup automation, and disaster readiness.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Future-Proof</h3>
              <p className="text-gray-600 text-left">
                Ready for growth and adaptable to emerging tech trends at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery & Strategy</h3>
              <p className="text-gray-600">
                Understand your needs and define an architecture that aligns with your business and technology goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Design & Build</h3>
              <p className="text-gray-600">
                Engage teams across front-end, back-end, and cloud engineering to develop scalable, modular solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deployment & Optimization</h3>
              <p className="text-gray-600">
                Deploy via cloud-native infrastructure, optimize for performance, cost, and reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Support & Evolution</h3>
              <p className="text-gray-600">
                Continuous monitoring, updates, support, and enhancements ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Front-End</h3>
              </div>
              <p className="text-gray-600 mb-4">React, Angular, Vue, responsive UI frameworks</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Server className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Back-End</h3>
              </div>
              <p className="text-gray-600 mb-4">Node.js, Python, Java, APIs, microservices, and WebSockets</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Cloud className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Cloud Platforms</h3>
              </div>
              <p className="text-gray-600 mb-4">AWS (Lambda, ECS), Azure, GCP (Cloud Run), Docker, Kubernetes</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">DevOps & CI/CD</h3>
              </div>
              <p className="text-gray-600 mb-4">Jenkins, GitHub Actions, Terraform, Infrastructure as Code</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Security & Monitoring</h3>
              </div>
              <p className="text-gray-600 mb-4">Cloud-native logging, automated testing, secure deployment</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Data & Storage</h3>
              </div>
              <p className="text-gray-600 mb-4">Cloud databases, data lakes, real-time analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AppXcess */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why AppXcess?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Holistic Approach</h3>
              <p className="text-gray-600 text-left">
                Full-stack development with deep cloud-engineering expertise.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Delivery</h3>
              <p className="text-gray-600 text-left">
                Architectures that grow seamlessly over time with your business.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600 text-left">
                Rigorous testing ensures performance, reliability, and consistency.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-Term Partnership</h3>
              <p className="text-gray-600 text-left">
                From launch to scale, we provide ongoing support and optimization.
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
            Transform your digital roadmap with <strong>Full Stack Development and Cloud Deployment</strong> from AppXcess. 
            Create resilient, scalable, and secure applications that evolve with your business.
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

export default FullStackCloudDeployment;
