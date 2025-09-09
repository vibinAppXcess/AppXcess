import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  Shield, 
  FileText, 
  TrendingUp, 
  Globe, 
  MessageSquare, 
  Monitor, 
  Clock, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  BarChart3,
  Target,
  Lightbulb,
  Rocket
} from 'lucide-react';

const AIAgents: React.FC = () => {
  const aiAgents = [
    {
      icon: <Users className="h-12 w-12 text-teal-600" />,
      title: "CX Agent",
      description: "24/7 chat and voice support that instantly resolves everyday inquiries and insights that improve conversation. With an amalgamation of AI and Human Expertise, deliver exceptional services.",
      features: [
        "Multi-channel support",
        "24/7 availability", 
        "Human escalation",
        "Conversation insights"
      ]
    },
    {
      icon: <Monitor className="h-12 w-12 text-teal-600" />,
      title: "IT Ops Agent",
      description: "An AI Agent that analyzes complex IT issues at once, acts on multiple incidents in unison, and significantly reduces downtime. An agent with tenfold expertise and continuously learning and mastering tools.",
      features: ["Incident management", "Automated resolution", "Continuous learning", "Tool integration"]
    },
    {
      icon: <Shield className="h-12 w-12 text-teal-600" />,
      title: "Sec Ops Agent",
      description: "Effectively monitor AI tools across your organization and gain insights into data usage. Secure GenAI interaction, detect risks, protect sensitive data, and ensure compliance requirements in one agent.",
      features: ["AI tool monitoring", "Risk detection", "Data protection", "Compliance management"]
    },
    {
      icon: <FileText className="h-12 w-12 text-teal-600" />,
      title: "OCR Agent",
      description: "Turn documents into decisions. Our OCR Agent doesn't just read text—it extracts meaning, detects patterns, and integrates into workflows. Say goodbye to manual data entry and hello to intelligent automation.",
      features: ["Text extraction", "Pattern detection", "Workflow integration", "Error-free processing"]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-teal-600" />,
      title: "Marketing Agent",
      description: "Fuel your brand with an AI marketing agent that transforms insights into impact. From lead generation to running an optimized marketing campaign, this agent will work around the clock so you never miss a beat.",
      features: ["Lead generation", "Campaign optimization", "24/7 operation", "Brand voice consistency"]
    },
    {
      icon: <Users className="h-12 w-12 text-teal-600" />,
      title: "HR Agent",
      description: "Streamline human resources operations with an HR agent that handles recruitment, onboarding, performance management, and HR inquiries. Automate routine tasks and enhance employee experience.",
      features: ["Recruitment automation", "Employee onboarding", "Performance tracking", "HR policy guidance"]
    }
  ];

  const capabilities = [
    {
      title: "Conversational AI",
      description: "Advanced natural language processing for human-like interactions"
    },
    {
      title: "LLM Firewall",
      description: "Secure and controlled access to large language models"
    },
    {
      title: "AI Governance",
      description: "Comprehensive oversight and compliance management"
    },
    {
      title: "Seamless escalation",
      description: "Smooth transition from AI to human support when needed"
    },
    {
      title: "Contextual understanding",
      description: "Deep comprehension of conversation context and history"
    },
    {
      title: "Custom RAG",
      description: "Tailored retrieval-augmented generation for your data"
    },
    {
      title: "Real-time analysis",
      description: "Instant processing and insights from live data streams"
    },
    {
      title: "Secure AI adoption framework strategy",
      description: "Enterprise-grade security for AI implementation"
    }
  ];

  const achievements = [
    { number: "10M+", label: "lines of codes" },
    { number: "2400+", label: "projects completed" },
    { number: "900+", label: "satisfied clients" },
    { number: "16+", label: "countries served" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Service Title */}
              <div className="text-teal-600 font-bold text-sm uppercase tracking-wider">
                AI AGENTS AS A SERVICE
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Smart business<br />
                starts with<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  intelligent AI agents
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
                Scale your business with specially built AI agents that streamline support, boost IT reliability, fortify security, and govern data, so your teams can focus on innovation.
              </p>
              
              {/* CTA Button */}
              <Link
                to="/Contact/"
                className="relative group px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 bg-teal-600 text-white hover:bg-teal-700"
              >
                <span>Build Your AI Agents</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
              </Link>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 h-[420px] flex items-center justify-center overflow-hidden">
                <img
                  src="/src/assets/images/man-robot-working-together-high-tech-office.jpg"
                  alt="AI Agents Technology"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empower Every Business Function with Purpose-Built AI Agents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiAgents.map((agent, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100 flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="flex justify-center mb-4">
                  {agent.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{agent.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{agent.description}</p>
                <ul className="space-y-2 mb-6">
                  {agent.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(240, 253, 250, 0.9), rgba(239, 246, 255, 0.9), rgba(240, 253, 250, 0.9)), url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-xl text-gray-600">
              We equip your enterprise with AI Agents that think, act, and adapt in real time.
            </p>
          </div>
          
          <div className="relative">
            {/* Capabilities Grid */}
            <div className="relative max-w-7xl mx-auto">
              {/* Top row - 3 capabilities */}
              <div className="flex justify-center mb-16">
                {capabilities.slice(0, 3).map((capability, index) => (
                  <div key={index} className="relative mx-12">
                    {/* Animated connecting line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-teal-400 via-blue-500 to-teal-600">
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-400 rounded-full shadow-lg animate-pulse"></div>
                      <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute left-1/2 top-0 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-teal-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    {/* Capability box */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-teal-200 p-6 w-56 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                      <div className="text-center">
                        <div className="mx-auto mb-3 flex items-center justify-center">
                          {index === 0 && (
                            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
                              <MessageSquare className="w-6 h-6 text-teal-600" />
                            </div>
                          )}
                          {index === 1 && (
                            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
                              <Shield className="w-6 h-6 text-teal-600" />
                            </div>
                          )}
                          {index === 2 && (
                            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
                              <Award className="w-6 h-6 text-teal-600" />
                            </div>
                          )}
                        </div>
                        <h3 className="font-bold text-teal-700 text-lg mb-3">{capability.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Middle row - 2 capabilities */}
              <div className="flex justify-center mb-16">
                {capabilities.slice(3, 5).map((capability, index) => (
                  <div key={index} className="relative mx-16">
                    {/* Diagonal connecting lines */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-teal-400 via-blue-500 to-teal-600 transform rotate-45">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-400 rounded-full shadow-lg animate-pulse"></div>
                      <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    {/* Capability box */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-teal-200 p-6 w-56 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-teal-50 rounded-xl mx-auto mb-3 flex items-center justify-center">
                          {index === 0 && <Users className="w-6 h-6 text-teal-600" />}
                          {index === 1 && <Brain className="w-6 h-6 text-teal-600" />}
                        </div>
                        <h3 className="font-bold text-teal-700 text-lg mb-3">{capability.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom row - 3 capabilities */}
              <div className="flex justify-center">
                {capabilities.slice(5, 8).map((capability, index) => (
                  <div key={index} className="relative mx-12">
                    {/* Animated connecting line */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-teal-600 via-blue-500 to-teal-400">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-600 rounded-full shadow-lg animate-pulse"></div>
                      <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute left-1/2 bottom-0 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    {/* Capability box */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-teal-200 p-6 w-56 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-teal-50 rounded-xl mx-auto mb-3 flex items-center justify-center">
                          {index === 0 && <BarChart3 className="w-6 h-6 text-teal-600" />}
                          {index === 1 && <Target className="w-6 h-6 text-teal-600" />}
                          {index === 2 && <Shield className="w-6 h-6 text-teal-600" />}
                        </div>
                        <h3 className="font-bold text-teal-700 text-lg mb-3">{capability.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating geometric shapes background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-32 left-32 w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-20 right-20 w-14 h-14 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              
              {/* Geometric lines */}
              <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-teal-400 to-transparent transform rotate-45"></div>
              <div className="absolute top-1/4 right-1/4 w-32 h-0.5 bg-gradient-to-r from-blue-400 to-transparent transform -rotate-45"></div>
              <div className="absolute bottom-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-teal-400 to-transparent transform -rotate-45"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-0.5 bg-gradient-to-r from-blue-400 to-transparent transform rotate-45"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Productivity Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Double Your Team's Productivity
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Automate 60% of Work & See a 40% Performance Surge!
            </h3>
            <p className="text-xl mb-8">
              Why waste another minute on a manual task? The future of productivity is here.
            </p>
            <Link to="/Contact/" className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Boost your Productivity
            </Link>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Consult with us Now
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to transform your business with AI Agents? Let's discuss your needs and build the perfect solution.
          </p>
          <Link
            to="/Contact/"
            className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center gap-2"
          >
            Get Started Today
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIAgents;
