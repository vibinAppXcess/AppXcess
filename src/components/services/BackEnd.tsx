import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Shield, Zap, Database, Code, ArrowRight, CheckCircle, BarChart3, Cpu, Lock, Globe, Settings, Activity, Layers, Terminal, Cloud, Database as DbIcon, GitBranch, Cpu as CpuIcon, Network, HardDrive, Key, Users, Clock, TrendingUp } from 'lucide-react';

const BackEnd: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Light Theme */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(20, 184, 166, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-teal-100 text-teal-800 rounded-full text-sm font-medium border border-teal-200">
              <Server className="w-5 h-5 mr-2" />
              Backend Development Services
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Backend
                </span>
              </h1>
              <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Development
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              We build robust and secure backend systems that ensure seamless functionality, 
              scalability, and integration for your applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/Contact/"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-bold rounded-2xl hover:from-teal-700 hover:to-blue-700 transition-all shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
              <Link
                to="/Contact/"
                className="inline-flex items-center px-10 py-5 border-2 border-teal-600 text-teal-600 font-bold rounded-2xl hover:bg-teal-600 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Core Backend Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building robust, scalable, and secure backend systems to power your applications and drive efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl blur-lg group-hover:blur-xl transition-all opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all border border-gray-200 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">API Development</h3>
                <p className="text-gray-600 flex-grow">
                  Seamlessly connect your systems with robust APIs designed for performance and reliability.
                </p>
              </div>
            </div>

            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg group-hover:blur-xl transition-all opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all border border-gray-200 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                  <DbIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Database Management</h3>
                <p className="text-gray-600 flex-grow">
                  Efficient and secure data storage and access solutions optimized for your business needs.
                </p>
              </div>
            </div>

            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-lg group-hover:blur-xl transition-all opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all border border-gray-200 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Integration</h3>
                <p className="text-gray-600 flex-grow">
                  Leverage the power of the cloud for scalability, reliability, and cost-effectiveness.
                </p>
              </div>
            </div>

            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-lg group-hover:blur-xl transition-all opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all border border-gray-200 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Terminal className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Architecture</h3>
                <p className="text-gray-600 flex-grow">
                  Tailored backend solutions designed to meet your unique business requirements.
                </p>
              </div>
            </div>

            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 rounded-3xl blur-lg group-hover:blur-xl transition-all opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all border border-gray-200 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Implementation</h3>
                <p className="text-gray-600 flex-grow">
                  Enterprise-grade security measures to protect your data and applications.
                </p>
              </div>
            </div>

            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl blur-lg group-hover:blur-xl transition-all opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all border border-gray-200 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
                <p className="text-gray-600 flex-grow">
                  Optimize your backend systems for maximum speed and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Side by Side */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                Backend Excellence
              </div>
              <h2 className="text-5xl font-bold text-gray-900">
                Unlock Backend Excellence with AppXcess
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Building secure, scalable, and high-performance backend systems to empower your applications 
                and ensure seamless operations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Scalability Made Simple</h3>
                    <p className="text-gray-600">Build systems that grow with your business demands.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Performance</h3>
                    <p className="text-gray-600">Deliver seamless user experiences with optimized backend operations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Architecture</h3>
                    <p className="text-gray-600">Ensure data protection with robust, scalable security measures.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">Backend Capabilities</h3>
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Server className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="text-gray-700 font-medium">API Performance</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                        <span className="text-teal-600 font-bold">95%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="text-gray-700 font-medium">Security Rating</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                        </div>
                        <span className="text-blue-600 font-bold">98%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="text-gray-700 font-medium">Uptime</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{ width: '99.9%' }}></div>
                        </div>
                        <span className="text-indigo-600 font-bold">99.9%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build robust and scalable backend solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { 
                name: 'Node.js', 
                image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                alt: 'Node.js Logo'
              },
              { 
                name: 'Python', 
                image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                alt: 'Python Logo'
              },
              { 
                name: 'Java', 
                image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
                alt: 'Java Logo'
              },
              { 
                name: 'Go', 
                image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
                alt: 'Go Logo'
              },
              { 
                name: 'PostgreSQL', 
                image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                alt: 'PostgreSQL Logo'
              },
              { 
                name: 'MongoDB', 
                image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                alt: 'MongoDB Logo'
              },
              { 
                name: 'Redis', 
                image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
                alt: 'Redis Logo'
              },
              { 
                name: 'AWS', 
                image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
                alt: 'AWS Logo'
              },
              { 
                name: 'Docker', 
                image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                alt: 'Docker Logo'
              },
              { 
                name: 'Kubernetes', 
                image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
                alt: 'Kubernetes Logo'
              },
              { 
                name: 'GraphQL', 
                image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
                alt: 'GraphQL Logo'
              },
              { 
                name: 'REST APIs', 
                image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                alt: 'REST APIs Logo'
              }
            ].map((tech, index) => (
              <div key={index} className="group h-full">
                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all border border-gray-200 group-hover:border-teal-500/50 h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform flex-shrink-0">
                    <img 
                      src={tech.image} 
                      alt={tech.alt}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback to a generic icon if image fails to load
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Backend Development Statistics
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 h-full flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-6 flex-shrink-0">
                <Server className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-teal-100 text-lg">Backend Systems</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 h-full flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-6 flex-shrink-0">
                <Database className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-teal-100 text-lg">APIs Developed</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 h-full flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-6 flex-shrink-0">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-teal-100 text-lg">Uptime</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 h-full flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-6 flex-shrink-0">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-teal-100 text-lg">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-8">
            Ready to Build Your Backend?
          </h2>
          <p className="text-xl text-teal-100 mb-10">
            Let's create a robust, scalable, and secure backend system for your application.
          </p>
          <Link
            to="/Contact/"
            className="inline-flex items-center px-12 py-6 bg-white text-teal-600 font-bold rounded-2xl hover:bg-gray-100 transition-all shadow-2xl text-lg"
          >
            Get Started Today
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BackEnd;
