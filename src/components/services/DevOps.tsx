import React from 'react';
import { Link } from 'react-router-dom';
import { GitBranch, Zap, Cloud, Shield, BarChart3, ArrowRight, CheckCircle, Activity, Layers, Terminal, Database, Code, Server, Cpu, Network, HardDrive, Key, Users, Clock, TrendingUp, Settings, Monitor, GitCommit, RefreshCw, Target, Award, GitPullRequest, GitMerge, Play, Pause, AlertCircle, Star, Globe, Lock, Wifi, Smartphone, Tablet, Laptop, ChevronRight, ChevronLeft } from 'lucide-react';

const DevOps: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Width with Side Navigation */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 overflow-hidden min-h-screen">
        {/* Side Navigation Dots */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-10 space-y-4">
          <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full opacity-50"></div>
          <div className="w-3 h-3 bg-indigo-600 rounded-full opacity-50"></div>
          <div className="w-3 h-3 bg-purple-600 rounded-full opacity-50"></div>
        </div>
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(20, 184, 166, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8">
            {/* Floating Badge */}
            <div className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm text-teal-800 rounded-full text-lg font-semibold border border-teal-200 shadow-xl animate-bounce">
              <GitBranch className="w-5 h-5 mr-3" />
              DevOps Excellence Platform
            </div>
            
            {/* Main Headlines with Typing Effect */}
            <div className="space-y-6">
              <h1 className="text-8xl lg:text-9xl font-black leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600">
                  DEVOPS
                </span>
              </h1>
              <h2 className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                MASTERY
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-700">
                Where Code Meets Operations
              </h3>
            </div>
            
            {/* Subtitle with Animated Underline */}
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl lg:text-3xl text-gray-600 leading-relaxed font-medium">
                Transform your development pipeline with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 font-bold"> intelligent automation</span>, 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-bold"> seamless orchestration</span>, and 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-bold"> continuous innovation</span>
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mt-6 rounded-full animate-pulse"></div>
            </div>
            
            {/* CTA Buttons with Icons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link
                to="/Contact/"
                className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-bold rounded-3xl hover:from-teal-700 hover:to-blue-700 transition-all shadow-2xl text-xl transform hover:scale-105"
              >
                <Play className="mr-3 w-6 h-6" />
                START JOURNEY
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/Contact/"
                className="group inline-flex items-center px-12 py-6 border-3 border-teal-600 text-teal-600 font-bold rounded-3xl hover:bg-teal-600 hover:text-white transition-all text-xl transform hover:scale-105"
              >
                <Activity className="mr-3 w-6 h-6 group-hover:animate-pulse" />
                WATCH DEMO
              </Link>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Uptime</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Deployments/Day</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                <div className="text-gray-600 font-medium">CI/CD Pipelines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section - Horizontal Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              DevOps Process Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to modern software delivery
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Plan & Design",
                  description: "Strategic planning and architecture design",
                  icon: Target,
                  color: "from-teal-500 to-blue-500"
                },
                {
                  step: "02",
                  title: "Develop & Test",
                  description: "Code development with automated testing",
                  icon: Code,
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  step: "03",
                  title: "Deploy & Release",
                  description: "Automated deployment and release management",
                  icon: GitCommit,
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  step: "04",
                  title: "Monitor & Optimize",
                  description: "Continuous monitoring and performance optimization",
                  icon: Monitor,
                  color: "from-purple-500 to-pink-500"
                }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
                      Step {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase - Masonry Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              DevOps Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for modern software delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Large Card */}
            <div className="lg:col-span-2 group">
              <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-3xl p-8 text-white h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold">Continuous Integration</h3>
                  <GitMerge className="w-12 h-12" />
                </div>
                <p className="text-xl mb-6">
                  Seamless integration to streamline your workflows and accelerate development cycles with automated testing and quality gates.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-teal-100">Real-time monitoring</span>
                </div>
              </div>
            </div>

            {/* Regular Cards */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 h-full hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Deployment</h3>
                <p className="text-gray-600">
                  Deploy faster with minimal errors using automation and best practices.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 h-full hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalability Solutions</h3>
                <p className="text-gray-600">
                  Build systems that grow with your business needs and handle increased loads.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 h-full hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Monitoring & Logging</h3>
                <p className="text-gray-600">
                  Keep track of performance with real-time insights and comprehensive logging.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 h-full hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Management</h3>
                <p className="text-gray-600">
                  Optimize your infrastructure for peak efficiency and cost-effectiveness.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 h-full hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Compliance</h3>
                <p className="text-gray-600">
                  Ensure robust security at every development stage and maintain compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Live DevOps Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time insights into your development pipeline
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pipeline Status */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Pipeline Status</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 font-medium">Active</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-900 font-medium">Code Review</div>
                        <div className="text-gray-500 text-sm">Completed 2 min ago</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-bold">✓</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <RefreshCw className="w-6 h-6 text-white animate-spin" />
                      </div>
                      <div>
                        <div className="text-gray-900 font-medium">Build & Test</div>
                        <div className="text-gray-500 text-sm">In progress...</div>
                      </div>
                    </div>
                    <div className="text-blue-600 font-bold">⟳</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl border border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                        <GitCommit className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-gray-600 font-medium">Deploy</div>
                        <div className="text-gray-400 text-sm">Waiting...</div>
                      </div>
                    </div>
                    <div className="text-gray-400 font-bold">⏳</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-3xl p-8 text-white">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-teal-100">Uptime</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl p-8 text-white">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-blue-100">Success Rate</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl p-8 text-white">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-indigo-100">Deployments/Day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack - Carousel Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              DevOps Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading tools for seamless integration and deployment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Jenkins', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
              { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
              { name: 'Kubernetes', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
              { name: 'GitHub Actions', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
              { name: 'AWS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
              { name: 'Terraform', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
              { name: 'Ansible', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
              { name: 'Prometheus', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
              { name: 'Grafana', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
              { name: 'ELK Stack', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg' },
              { name: 'GitLab CI', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
              { name: 'Helm', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg' }
            ].map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all border border-gray-200 group-hover:border-teal-500/50 transform hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <img 
                      src={tech.image} 
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'block';
                        }
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold" style={{ display: 'none' }}>
                      {tech.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-gray-900 font-semibold text-sm">{tech.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Split Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                Why Choose DevOps?
              </div>
              <h2 className="text-5xl font-bold text-gray-900">
                Accelerate Your Development
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Unlock the potential of seamless integration and collaboration in your development pipeline. 
                Our DevOps solutions are trusted to enhance productivity, accelerate delivery, and optimize performance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-lg">Faster Time to Market</div>
                    <div className="text-gray-600">Reduce deployment time by 80%</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-lg">Improved Quality</div>
                    <div className="text-gray-600">Automated testing and quality gates</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-lg">Cost Optimization</div>
                    <div className="text-gray-600">Reduce infrastructure costs by 40%</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-lg">Enhanced Security</div>
                    <div className="text-gray-600">Built-in security and compliance</div>
                  </div>
                </div>
              </div>
              
              <Link
                to="/Contact/"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-bold rounded-2xl hover:from-teal-700 hover:to-blue-700 transition-all shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8 border border-gray-200">
                <div className="aspect-square bg-gradient-to-br from-teal-200 to-blue-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <GitBranch className="w-24 h-24 text-teal-600 mx-auto mb-4" />
                    <p className="text-teal-800 font-semibold text-lg">DevOps Pipeline</p>
                    <p className="text-teal-600 text-sm">Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Background */}
      <section className="py-20 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-8">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-teal-100 mb-10">
            Let's implement comprehensive DevOps strategies to accelerate your development and deployment cycles.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/Contact/"
              className="inline-flex items-center px-12 py-6 bg-white text-teal-600 font-bold rounded-2xl hover:bg-gray-100 transition-all shadow-2xl text-lg"
            >
              Start Your Journey
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOps;
