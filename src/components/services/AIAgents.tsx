import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  Shield, 
  FileText, 
  TrendingUp, 
  MessageSquare, 
  Monitor, 
  CheckCircle,
  ArrowRight,
  Award,
  BarChart3,
  Zap, 
  Database, 
  Cloud, 
  Settings, 
  Workflow, 
  Globe, 
  Lock, 
  Activity, 
  Bot, 
  Sparkles, 
  Server, 
  Code2, 
  GitBranch, 
  Rocket,
  Heart,
  Star,
  Building2,
  CreditCard,
  Camera,
  UserCheck,
  BookOpen,
  Calendar
} from 'lucide-react';


// Parallax Components
const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }: any) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: any) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: any) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};


// Bouncy Cards Components
const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          Empower Every Business Function with
          <span className="text-slate-400"> Purpose-Built AI Agents</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          <Link to="/Contact/" className="flex items-center gap-2">
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Customer Experience</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-indigo-50" />
              <span className="block font-semibold text-indigo-50 text-sm">
                24/7 Support • Multi-channel • Emotional Intelligence
              </span>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>IT Operations & Security</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="text-center">
              <Shield className="h-8 w-8 mx-auto mb-2 text-orange-50" />
              <span className="block font-semibold text-orange-50 text-sm">
                Predictive Incident Management • Self-healing Infrastructure • Security Monitoring
              </span>
            </div>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Document Intelligence & Analytics</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="text-center">
              <FileText className="h-8 w-8 mx-auto mb-2 text-emerald-50" />
              <span className="block font-semibold text-emerald-50 text-sm">
                Advanced OCR • Data Validation • Predictive Analytics • Automated Reporting
              </span>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Process Automation</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="text-center">
              <Workflow className="h-8 w-8 mx-auto mb-2 text-red-50" />
              <span className="block font-semibold text-red-50 text-sm">
                End-to-End Workflows • Process Optimization • Audit Trails
              </span>
            </div>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }: any) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: any) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};

const AIAgents: React.FC = () => {
  // Carousel state for AI chatbot services
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  
  // AI Chatbot Services Data
  const aiChatbotServices = [
    {
      id: 1,
      title: "AI Consulting",
      description: "Custom AI implementation strategy and architecture to align with business goals and compliance requirements.",
      number: "01"
    },
    {
      id: 2,
      title: "Research & Discovery",
      description: "Define clear product vision and roadmap backed by market, user, and technical insights.",
      number: "02"
    },
    {
      id: 3,
      title: "Chatbot Design & Development",
      description: "Custom-built AI chatbots and agents with enterprise-grade UX, integrations, and domain-specific capabilities.",
      number: "03"
    },
    {
      id: 4,
      title: "Training Dataset Preparation",
      description: "Curated, cleaned, and relevant datasets to ensure accurate and consistent model behavior.",
      number: "04"
    },
    {
      id: 5,
      title: "AI Agent Fine-tuning",
      description: "Align AI models with your business knowledge repository, workflows, and compliance standards.",
      number: "05"
    },
    {
      id: 6,
      title: "On-Premises & Cloud Infrastructure",
      description: "Secure on-prem deployment for sensitive environments or flexible cloud setup for scale.",
      number: "06"
    },
    {
      id: 7,
      title: "Chatbot Customization & Integration",
      description: "Seamlessly integrate into existing systems (CRM, ERP, HRMS, ticketing, or custom apps).",
      number: "07"
    },
    {
      id: 8,
      title: "Security Audits & Compliance",
      description: "Robust testing against AI-specific vulnerabilities with full GDPR/HIPAA/SOC 2 coverage.",
      number: "08"
    },
    {
      id: 9,
      title: "Quality Assurance",
      description: "Rigorous validation to ensure accuracy, stability, and safe performance before launch.",
      number: "09"
    },
    {
      id: 10,
      title: "Maintenance & Support",
      description: "Ongoing monitoring, optimization, and updates to keep your chatbot workforce effective.",
      number: "10"
    }
  ];

  // Carousel navigation functions
  const nextService = () => {
    const maxIndex = aiChatbotServices.length - 5; // Maximum index to show last 5 services
    if (currentServiceIndex < maxIndex) {
      setCurrentServiceIndex((prev) => prev + 1);
    }
  };

  const prevService = () => {
    if (currentServiceIndex > 0) {
      setCurrentServiceIndex((prev) => prev - 1);
    }
  };

  // Check if navigation buttons should be disabled
  const isPrevDisabled = currentServiceIndex === 0;
  const isNextDisabled = currentServiceIndex >= aiChatbotServices.length - 5;

  // Get current services to display (5 at a time)
  const getCurrentServices = () => {
    const services = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentServiceIndex + i) % aiChatbotServices.length;
      services.push(aiChatbotServices[index]);
    }
    return services;
  };



  

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  AI Automation
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
                AI Agents that integrate with your systems to deliver automated services and experiences. Powered by Gemini, GPT, DeepSeek, and more.
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
            
            {/* Right Image with Motion Graphics */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-4 sm:p-6 lg:p-8 h-[300px] sm:h-[350px] lg:h-[420px] flex items-center justify-center overflow-hidden relative">
                {/* SVG Animated Connectors */}
                <svg
                  className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Connector: CRM → AI Agent */}
                  <path
                    d="M 18 30 C 25 40, 35 45, 45 50"
                    stroke="#3b82f6"
                    strokeWidth="0.8"
                    fill="none"
                    strokeDasharray="2 4"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;-12;0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Connector: HR → AI Agent */}
                  <path
                    d="M 18 50 C 25 50, 35 50, 45 50"
                    stroke="#10b981"
                    strokeWidth="0.8"
                    fill="none"
                    strokeDasharray="2 4"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;-12;0"
                      dur="3s"
                      begin="0.5s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Connector: IT → AI Agent */}
                  <path
                    d="M 18 70 C 25 60, 35 55, 45 50"
                    stroke="#8b5cf6"
                    strokeWidth="0.8"
                    fill="none"
                    strokeDasharray="2 4"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;-12;0"
                      dur="3s"
                      begin="1s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Connector: Communication → AI Agent */}
                  <path
                    d="M 18 85 C 25 75, 35 65, 45 50"
                    stroke="#f97316"
                    strokeWidth="0.8"
                    fill="none"
                    strokeDasharray="2 4"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;-12;0"
                      dur="3s"
                      begin="1.5s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Connector: AI Agent → Automated Services */}
                  <path
                    d="M 50 50 C 50 60, 50 70, 50 80"
                    stroke="#14b8a6"
                    strokeWidth="0.8"
                    fill="none"
                    strokeDasharray="2 4"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;-12;0"
                      dur="3s"
                      begin="2s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Connector: AI Agent → Experiences */}
                    <path
                      d="M 55 50 C 70 50, 80 50, 70 50"
                      stroke="#ec4899"
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray="3 6"
                      strokeLinecap="round"
                      opacity="0.9"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;-18;0"
                        dur="3s"
                        begin="2.2s"
                        repeatCount="indefinite"
                      />
                    </path>
                </svg>

                {/* Central AI Agent Robot */}
                <div className="relative z-20 flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-white to-gray-200 rounded-2xl flex items-center justify-center shadow-2xl mb-2 sm:mb-3 lg:mb-4">
                    <Bot className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-gray-800" />
              </div>
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-gray-800">
                    Appxcess AI Agent
                  </div>
                </div>

                {/* Left Side - Existing Systems */}
                <div className="absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 space-y-4 sm:space-y-6 lg:space-y-8">
                  <div className="text-xs font-semibold text-white/80 mb-3 sm:mb-4 lg:mb-6">Existing Systems</div>
                  
                  {/* CRM */}
                  <div className="relative flex items-center gap-2 sm:gap-3 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/40 transition-colors border border-blue-400/30">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-400" />
                    </div>
                    <span className="text-xs text-white/70 font-medium">CRM</span>
                  </div>

                  {/* HR */}
                  <div className="relative flex items-center gap-2 sm:gap-3 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/40 transition-colors border border-green-400/30">
                      <Settings className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-green-400" />
                    </div>
                    <span className="text-xs text-white/70 font-medium">HR</span>
                  </div>

                  {/* IT */}
                  <div className="relative flex items-center gap-2 sm:gap-3 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/40 transition-colors border border-purple-400/30">
                      <Monitor className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-purple-400" />
                    </div>
                    <span className="text-xs text-white/70 font-medium">IT</span>
                  </div>

                  {/* Communication */}
                  <div className="relative flex items-center gap-2 sm:gap-3 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/40 transition-colors border border-orange-400/30">
                      <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-orange-400" />
                    </div>
                    <span className="text-xs text-white/70 font-medium">Comm</span>
                  </div>
                </div>

                {/* Bottom - Automated Services */}
                <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-6 lg:gap-8">
                  
                  <div className="relative flex flex-col items-center gap-1 sm:gap-2">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-teal-500/20 rounded-lg flex items-center justify-center border border-teal-400/30">
                      <Workflow className="h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-teal-400" />
                    </div>
                    <span className="text-xs text-white/70 font-medium">Process</span>
                  </div>

                  <div className="relative flex flex-col items-center gap-1 sm:gap-2">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-teal-500/20 rounded-lg flex items-center justify-center border border-teal-400/30">
                      <BarChart3 className="h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-teal-400" />
                    </div>
                    <span className="text-xs text-white/70 font-medium">Reporting</span>
                  </div>

                  <div className="relative flex flex-col items-center gap-1 sm:gap-2">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-teal-500/20 rounded-lg flex items-center justify-center border border-teal-400/30">
                      <Database className="h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-teal-400" />
                    </div>
                    <span className="text-xs text-white/70 font-medium">Data</span>
                  </div>
                </div>


                {/* Far Right - Experiences */}
                <div className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2">
                  <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 border border-pink-400/30 shadow-lg">
                    <div className="text-xs sm:text-sm font-semibold text-white/90 mb-3 sm:mb-4 text-center">Experiences</div>
                    
                    <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-pink-500/30 rounded-lg flex items-center justify-center">
                          <Award className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 text-pink-400" />
                        </div>
                        <span className="text-xs text-white/80 font-medium">Satisfaction</span>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-pink-500/30 rounded-lg flex items-center justify-center">
                          <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 text-pink-400" />
                        </div>
                        <span className="text-xs text-white/80 font-medium">Empowerment</span>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-pink-500/30 rounded-lg flex items-center justify-center">
                          <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 text-pink-400" />
                        </div>
                        <span className="text-xs text-white/80 font-medium">Personalized</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Central Pulsing Ring */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 border-2 border-teal-400/30 rounded-full animate-ping"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-2 border-blue-400/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 lg:w-16 lg:h-16 border-2 border-purple-400/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Floating Data Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-teal-400 rounded-full animate-ping"></div>
                  <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Repository Integration Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
              <Database className="h-4 w-4 text-blue-300 mr-2" />
              <span className="text-blue-200 text-sm font-medium">Knowledge Integration</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Why Knowledge Repository<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Integration Matters
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Organizations generate huge volumes of knowledge — documents, policies, case histories, customer records — but much of it sits unused. AppXcess AI Agents integrate directly with your knowledge repository to unlock this potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-8">
                <div className="group relative">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Database className="h-6 w-6 text-white" />
                      </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-3">Centralize Access</h3>
                          <p className="text-blue-100 leading-relaxed">Give every team member and AI Agent instant access to the same trusted source of truth. Eliminate information silos and ensure everyone works with the most current data.</p>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Brain className="h-6 w-6 text-white" />
                      </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-3">Contextualize Decisions</h3>
                          <p className="text-blue-100 leading-relaxed">Surface relevant documents, policies, or customer data when needed. Enable smarter decision-making with AI-powered insights that connect the dots across your knowledge base.</p>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-3">Accelerate Resolution</h3>
                          <p className="text-blue-100 leading-relaxed">Reduce time spent searching across systems. AI Agents instantly surface relevant documents and provide contextual answers to complex queries.</p>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-3">Ensure Consistency</h3>
                          <p className="text-blue-100 leading-relaxed">Minimize errors from outdated or siloed information. Maintain data integrity with automated synchronization and real-time updates across all systems.</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Gartner Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-blue-200">Industry-leading organizations see measurable improvements</p>
              </div>

              <div className="space-y-6">
                <motion.div 
                  className="group relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">25%</div>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Operational Efficiency</h4>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Organizations that integrate AI with knowledge repositories see a significant increase in operational efficiency
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="group relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">30%</div>
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Customer Satisfaction</h4>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      AI-enabled customer support improves customer satisfaction (CSAT) scores significantly
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="group relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">20%+</div>
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Customer Experience</h4>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Leveraging AI for knowledge-driven processes enhances customer experience scores
                    </p>
                  </div>
                </motion.div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content - Headline and CTA */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Key Features
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Comprehensive AI capabilities designed to transform your business operations with intelligent automation and seamless integration.
                  </p>
                </div>
                <div>
                  <Link to="/Contact/" className="inline-block bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Start for free
                  </Link>
                </div>
              </motion.div>

              {/* Right Content - Feature Cards Grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {/* AI Agents */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                      <Bot className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">AI Agents Automation</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Automate billing, scheduling, reporting, and more with intelligent AI agents.
                  </p>
                </motion.div>

                {/* Knowledge Integration */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-3">
                      <Database className="h-5 w-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Knowledge Integration</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Embed organizational knowledge repositories for smarter decision-making.
                  </p>
                </motion.div>

                {/* Human-in-the-Loop */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Human-in-the-Loop</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Smooth handoffs for complex or sensitive workflows with human oversight.
                  </p>
                </motion.div>

                {/* Enterprise Security */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-2xl p-6 border border-gray-500/20 hover:border-gray-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center mr-3">
                      <Shield className="h-5 w-5 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Enterprise Security</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    GDPR, HIPAA, SOC 2 ready with enterprise-grade security and compliance.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Development Services Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23018080' fill-opacity='0.08'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-custom-teal">INTELLIGENT CHATBOT SOLUTIONS</span><br />
              <span className="text-gray-900">FOR YOUR BUSINESS SUCCESS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Access a wide range of services under one roof thanks to AppXcess's rare combination of expertise.
            </p>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex justify-end mb-8">
            <div className="flex space-x-2">
              <button 
                onClick={prevService}
                disabled={isPrevDisabled}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isPrevDisabled 
                    ? 'border-gray-300 text-gray-300 cursor-not-allowed' 
                    : 'border-custom-teal/40 text-custom-teal hover:border-custom-teal hover:bg-custom-teal/10 hover:shadow-md'
                }`}
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <button 
                onClick={nextService}
                disabled={isNextDisabled}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isNextDisabled 
                    ? 'border-gray-300 text-gray-300 cursor-not-allowed' 
                    : 'border-custom-teal/40 text-custom-teal hover:border-custom-teal hover:bg-custom-teal/10 hover:shadow-md'
                }`}
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {getCurrentServices().map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-gray-400 text-sm font-medium mb-4">{service.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of AI Agents We Deliver Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Enhanced Background Motion Graphics */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating AI particles */}
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-custom-teal/20 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-3 h-3 bg-blue-500/20 rounded-full"
            animate={{
              y: [0, 40, 0],
              x: [0, -25, 0],
              scale: [1, 0.5, 1],
              opacity: [0.2, 0.9, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-5 h-5 bg-purple-500/20 rounded-full"
            animate={{
              y: [0, -35, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-60 right-1/3 w-6 h-6 bg-green-500/20 rounded-full"
            animate={{
              y: [0, 25, 0],
              x: [0, -20, 0],
              scale: [1, 0.8, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
          
          {/* Animated geometric shapes */}
          <motion.div
            className="absolute top-32 left-1/3 w-8 h-8 border-2 border-custom-teal/30 rounded-lg"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-32 right-1/4 w-10 h-10 border-2 border-blue-500/30 rounded-full"
            animate={{
              rotate: [360, 0],
              scale: [1, 0.8, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-custom-teal"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: "linear-gradient(90deg, #14b8a6, #0d9488, #14b8a6)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Types of AI Agents
              </motion.span><br />
              <span className="text-gray-900">We Deliver</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              AppXcess develops a wide variety of AI Agents tailored to different enterprise use cases and industries.
            </motion.p>
          </motion.div>

          {/* Interactive AI Agents Ecosystem */}
          <div className="relative">
            {/* AI Agent Types Layout - Left and Right Components */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              {/* Left Component - First 4 Agents */}
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Process Automation Agents */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <motion.div 
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-custom-teal/30 h-full flex flex-col relative overflow-hidden"
                      whileHover={{ 
                        boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.25)" 
                      }}
                    >
                      {/* Animated background gradient on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-custom-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                      
                      <motion.div 
                        className="w-12 h-12 bg-custom-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-custom-teal/20 transition-colors relative z-10"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          animate={{
                            rotate: [0, 10, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                        <Settings className="w-6 h-6 text-custom-teal" />
                        </motion.div>
                      </motion.div>
                      
                      <motion.h3 
                        className="text-lg font-bold text-gray-900 mb-3 relative z-10"
                        whileHover={{ 
                          color: "#14b8a6"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        Process Automation Agents
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-600 text-sm leading-relaxed flex-grow relative z-10"
                        whileHover={{ 
                          color: "#374151"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        Handle complex, multi-step workflows like billing reconciliation, claims processing, or compliance reporting.
                      </motion.p>
                      
                      {/* Floating particles on hover */}
                      <motion.div
                        className="absolute top-2 right-2 w-2 h-2 bg-custom-teal/30 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0, 0.6, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                      <motion.div
                        className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-blue-500/30 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{
                          y: [0, -8, 0],
                          opacity: [0, 0.4, 0]
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.8
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Customer Support Agents */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="group relative"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <motion.div 
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-custom-teal/30 h-full flex flex-col relative overflow-hidden"
                      whileHover={{ 
                        boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.25)" 
                      }}
                    >
                      {/* Animated background gradient on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                      
                      <motion.div 
                        className="w-12 h-12 bg-custom-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-custom-teal/20 transition-colors relative z-10"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: -5
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          animate={{
                            y: [0, -2, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                        <MessageSquare className="w-6 h-6 text-custom-teal" />
                        </motion.div>
                      </motion.div>
                      
                      <motion.h3 
                        className="text-lg font-bold text-gray-900 mb-3 relative z-10"
                        whileHover={{ 
                          color: "#14b8a6"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        Customer Support Agents
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-600 text-sm leading-relaxed flex-grow relative z-10"
                        whileHover={{ 
                          color: "#374151"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        Deliver instant, accurate responses across web, mobile, and voice channels — reducing wait times and agent workloads.
                      </motion.p>
                      
                      {/* Floating particles on hover */}
                      <motion.div
                        className="absolute top-3 right-3 w-2 h-2 bg-blue-500/30 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{
                          y: [0, -12, 0],
                          opacity: [0, 0.7, 0]
                        }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.3
                        }}
                      />
                      <motion.div
                        className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-custom-teal/30 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{
                          y: [0, -6, 0],
                          opacity: [0, 0.5, 0]
                        }}
                        transition={{
                          duration: 1.9,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.6
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Knowledge Assistants */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-custom-teal/30 h-full flex flex-col">
                      <div className="w-12 h-12 bg-custom-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-custom-teal/20 transition-colors">
                        <BookOpen className="w-6 h-6 text-custom-teal" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Knowledge Assistants</h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        Tap into enterprise knowledge repositories to answer policy, HR, or compliance-related queries instantly with advanced natural language processing capabilities.
                      </p>
                    </div>
                  </motion.div>

                  {/* Industry-Specific Agents */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-custom-teal/30 h-full flex flex-col">
                      <div className="w-12 h-12 bg-custom-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-custom-teal/20 transition-colors">
                        <Building2 className="w-6 h-6 text-custom-teal" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Industry-Specific Agents</h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        Fine-tuned for verticals like healthcare, banking, e-commerce, and education with domain-aware capabilities and specialized industry expertise and deep understanding.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Enhanced Central Hub with Connection Lines */}
              <motion.div 
                className="relative mx-auto w-80 h-80 mb-16 lg:mb-0"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Animated Connection Lines */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                >
                  {/* Left side connections */}
                  <motion.div
                    className="absolute top-1/2 left-0 w-32 h-0.5 bg-gradient-to-r from-custom-teal/30 to-transparent"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  />
                  <motion.div
                    className="absolute top-1/4 left-0 w-24 h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  />
                  <motion.div
                    className="absolute top-3/4 left-0 w-28 h-0.5 bg-gradient-to-r from-purple-500/30 to-transparent"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 0.4, 0]
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.8
                    }}
                  />
                  
                  {/* Right side connections */}
                  <motion.div
                    className="absolute top-1/2 right-0 w-32 h-0.5 bg-gradient-to-l from-custom-teal/30 to-transparent"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2.5
                    }}
                  />
                  <motion.div
                    className="absolute top-1/4 right-0 w-24 h-0.5 bg-gradient-to-l from-green-500/30 to-transparent"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 2.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 3
                    }}
                  />
                  <motion.div
                    className="absolute top-3/4 right-0 w-28 h-0.5 bg-gradient-to-l from-orange-500/30 to-transparent"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 0.4, 0]
                    }}
                    transition={{
                      duration: 2.1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2.8
                    }}
                  />
                </motion.div>

                {/* Enhanced Central Hub */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-custom-teal to-custom-blue rounded-full shadow-2xl flex items-center justify-center"
                      animate={{
                        boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.4)"
                      }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Pulsing rings */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/20 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 border border-white/10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.2, 0.05, 0.2],
                      boxShadow: [
                        "0 0 20px rgba(255,255,255,0.3)",
                        "0 0 40px rgba(255,255,255,0.6)",
                        "0 0 20px rgba(255,255,255,0.3)"
                      ]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  
                  <div className="text-center text-white relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Bot className="w-8 h-8 text-white" />
                      </motion.div>
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold mb-2"
                      animate={{
                        textShadow: "0 0 20px rgba(255,255,255,0.3)"
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      AI AGENTS
                    </motion.h3>
                    <motion.p 
                      className="text-sm opacity-90"
                      animate={{
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    >
                      Enterprise Hub
                    </motion.p>
                </div>
                </motion.div>
              </motion.div>

              {/* Right Component - Second 4 Agents */}
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Transactional Agents */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-custom-teal/30 h-full flex flex-col">
                      <div className="w-12 h-12 bg-custom-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-custom-teal/20 transition-colors">
                        <CreditCard className="w-6 h-6 text-custom-teal" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Transactional Agents</h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        Automate purchases, bookings, account actions, and financial transactions securely.
                      </p>
                    </div>
                  </motion.div>

                  {/* Virtual Workforce Assistants */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-custom-teal/30 h-full flex flex-col">
                      <div className="w-12 h-12 bg-custom-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-custom-teal/20 transition-colors">
                        <Users className="w-6 h-6 text-custom-teal" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Virtual Workforce Assistants</h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        Support employees with task management, scheduling, and proactive reminders across enterprise systems.
                      </p>
                    </div>
                  </motion.div>

                  {/* Multimodal Agents */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-custom-teal/30 h-full flex flex-col">
                      <div className="w-12 h-12 bg-custom-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-custom-teal/20 transition-colors">
                        <Camera className="w-6 h-6 text-custom-teal" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Multimodal Agents</h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        Interact via text, voice, or image inputs to deliver richer and more interactive user experiences with seamless multi-channel communication capabilities.
                      </p>
                    </div>
                  </motion.div>

                  {/* Human Collaboration Agents */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-custom-teal/30 h-full flex flex-col">
                      <div className="w-12 h-12 bg-custom-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-custom-teal/20 transition-colors">
                        <UserCheck className="w-6 h-6 text-custom-teal" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Human Collaboration Agents</h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        Work alongside employees, preparing context, extracting customer data, and ensuring smooth human-in-the-loop handoffs.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-custom-teal/10 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-lg"
            animate={{
              y: [0, 30, 0],
              x: [0, -15, 0],
              rotate: [0, -90, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-12 h-12 bg-purple-500/10 rounded-full"
            animate={{
              y: [0, -25, 0],
              x: [0, 20, 0],
              rotate: [0, 360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-20 right-1/3 w-14 h-14 bg-green-500/10 rounded-lg"
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
              rotate: [0, -180, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
          
          {/* Particle system */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-custom-teal/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-custom-teal"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: 'linear-gradient(90deg, #14b8a6, #06b6d4, #8b5cf6, #14b8a6)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Real-World
              </motion.span>
              <br />
              <motion.span 
                className="text-gray-900"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Use Cases
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Discover how AI Agents transform business operations across different industries and use cases.
            </motion.p>
          </motion.div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Billing Automation */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-custom-teal/30 h-full relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-custom-teal/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Billing Automation Motion Graphic Diagram */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Data Flow Animation */}
                  <motion.div
                    className="absolute top-4 left-4 w-8 h-8 bg-custom-teal/20 rounded-lg flex items-center justify-center"
                    animate={{
                      x: [0, 200, 0],
                      y: [0, 20, 0],
                      rotate: [0, 360, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <FileText className="w-4 h-4 text-custom-teal" />
                  </motion.div>
                  
                  {/* CRM/ERP Connection Lines */}
                  <motion.div
                    className="absolute top-8 left-12 w-32 h-0.5 bg-custom-teal/30"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  />
                  
                  {/* Reconciliation Process */}
                  <motion.div
                    className="absolute top-12 right-8 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <CheckCircle className="w-3 h-3 text-green-600" />
                  </motion.div>
                  
                  {/* Anomaly Detection */}
                  <motion.div
                    className="absolute bottom-8 left-8 w-4 h-4 bg-red-500/20 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1
                    }}
                  />
                  
                  {/* Money Flow Animation */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-2xl"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    💰
                  </motion.div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-custom-teal to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg relative overflow-hidden"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Pulsing ring effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-white/30"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <CreditCard className="w-8 h-8 text-white relative z-10" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Billing Automation</h3>
                      <div className="flex items-center text-custom-teal">
                        <Activity className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Finance & Accounting</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20, scale: 0.8 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-custom-teal/20 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <CheckCircle className="w-5 h-5 text-custom-teal mr-3 mt-1 flex-shrink-0 relative z-10" />
                      </motion.div>
                      <motion.p 
                        className="text-gray-700"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        AI Agent extracts billing details from the knowledge base and reconciles with CRM/ERP
                      </motion.p>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20, scale: 0.8 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-custom-teal/20 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                          }}
                        />
                        <CheckCircle className="w-5 h-5 text-custom-teal mr-3 mt-1 flex-shrink-0 relative z-10" />
                      </motion.div>
                      <motion.p 
                        className="text-gray-700"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        viewport={{ once: true }}
                      >
                        Flags anomalies and routes exceptions to human finance staff
                      </motion.p>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20, scale: 0.8 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-custom-teal/20 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        />
                        <CheckCircle className="w-5 h-5 text-custom-teal mr-3 mt-1 flex-shrink-0 relative z-10" />
                      </motion.div>
                      <motion.p 
                        className="text-gray-700"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1 }}
                        viewport={{ once: true }}
                      >
                        Benefit: Faster month-end closing, reduced revenue leakage
                      </motion.p>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="bg-gradient-to-r from-custom-teal/10 to-blue-500/10 rounded-lg p-4 border-l-4 border-custom-teal relative overflow-hidden"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Animated background pattern */}
                    <motion.div
                      className="absolute inset-0 opacity-5"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'reverse'
                      }}
                      style={{
                        backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(20, 184, 166, 0.1) 25%, rgba(20, 184, 166, 0.1) 50%, transparent 50%, transparent 75%, rgba(20, 184, 166, 0.1) 75%)',
                        backgroundSize: '20px 20px'
                      }}
                    />
                    
                    <motion.p 
                      className="text-sm font-medium text-custom-teal mb-1 relative z-10"
                      animate={{
                        textShadow: ['0 0 0px rgba(20, 184, 166, 0.5)', '0 0 10px rgba(20, 184, 166, 0.5)', '0 0 0px rgba(20, 184, 166, 0.5)']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Key Impact
                    </motion.p>
                    <motion.p 
                      className="text-gray-700 text-sm relative z-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 1.2 }}
                      viewport={{ once: true }}
                    >
                      Automated reconciliation reduces manual errors by 95% and speeds up financial processes
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Scheduling Optimization */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-custom-teal/30 h-full relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-custom-teal/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Scheduling Optimization Motion Graphic Diagram */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Calendar Grid Animation */}
                  <motion.div
                    className="absolute top-4 left-4 w-16 h-12 border border-blue-500/30 rounded"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Calendar dots */}
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-500/50 rounded-full"
                        style={{
                          left: `${(i % 4) * 25 + 12}%`,
                          top: `${Math.floor(i / 4) * 30 + 20}%`,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.1
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  {/* Time Slots Animation */}
                  <motion.div
                    className="absolute top-8 right-8 w-20 h-2 bg-green-500/20 rounded-full"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  />
                  
                  {/* Availability Indicator */}
                  <motion.div
                    className="absolute bottom-8 left-8 w-6 h-6 bg-green-500/30 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-green-600 rounded-full"
                      animate={{
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity
                      }}
                    />
                  </motion.div>
                  
                  {/* Optimization Arrows */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-blue-600"
                    animate={{
                      x: [0, 10, 0],
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ⚡
                  </motion.div>
                  
                  {/* Connection Lines */}
                  <motion.div
                    className="absolute top-16 left-8 w-24 h-0.5 bg-blue-500/30"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1
                    }}
                  />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Calendar className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Scheduling Optimization</h3>
                      <div className="flex items-center text-blue-600">
                        <Activity className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Operations & Logistics</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">AI Agent intelligently analyzes calendars, availability, and past booking trends</p>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Suggests optimal slots and handles rescheduling automatically</p>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Benefit: Improves utilization rates and reduces no-shows</p>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg p-4 border-l-4 border-blue-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm font-medium text-blue-600 mb-1">Key Impact</p>
                    <p className="text-gray-700 text-sm">Intelligent scheduling increases resource utilization by 40% and reduces scheduling conflicts</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Account & Customer Data Extraction */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-custom-teal/30 h-full relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-custom-teal/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Data Extraction Motion Graphic Diagram */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Multiple Data Sources */}
                  <motion.div
                    className="absolute top-4 left-4 w-6 h-6 bg-purple-500/20 rounded-lg flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Database className="w-3 h-3 text-purple-600" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-4 right-8 w-6 h-6 bg-blue-500/20 rounded-lg flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, -360, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <Users className="w-3 h-3 text-blue-600" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-8 left-8 w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <FileText className="w-3 h-3 text-green-600" />
                  </motion.div>
                  
                  {/* Data Flow Lines */}
                  <motion.div
                    className="absolute top-6 left-12 w-16 h-0.5 bg-purple-500/30"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  />
                  
                  <motion.div
                    className="absolute top-6 right-14 w-12 h-0.5 bg-blue-500/30"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1
                    }}
                  />
                  
                  {/* Central Processing Hub */}
                  <motion.div
                    className="absolute top-12 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 360, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-white rounded-full"
                      animate={{
                        scale: [1, 0.5, 1]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity
                      }}
                    />
                  </motion.div>
                  
                  {/* Output Profile */}
                  <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30"
                    animate={{
                      y: [0, -5, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                      className="absolute inset-1 bg-white/50 rounded"
                      animate={{
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }}
                    />
                  </motion.div>
                  
                  {/* Data Points */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-500/50 rounded-full"
                      style={{
                        left: `${20 + (i % 4) * 20}%`,
                        top: `${30 + Math.floor(i / 4) * 20}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Database className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Account & Customer Data Extraction</h3>
                      <div className="flex items-center text-purple-600">
                        <Activity className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Data Management</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">AI Agent pulls customer details from multiple sources (CRM, knowledge base, ticketing)</p>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Prepares consolidated profiles for sales or support teams</p>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Benefit: Saves manual lookup time, improves personalization</p>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-lg p-4 border-l-4 border-purple-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm font-medium text-purple-600 mb-1">Key Impact</p>
                    <p className="text-gray-700 text-sm">Automated data extraction reduces manual research time by 80% and improves customer insights</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Human-in-the-Loop Escalation */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-custom-teal/30 h-full relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-custom-teal/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Human-in-the-Loop Motion Graphic Diagram */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* AI Agent Processing */}
                  <motion.div
                    className="absolute top-4 left-4 w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Bot className="w-4 h-4 text-green-600" />
                  </motion.div>
                  
                  {/* Question Processing */}
                  <motion.div
                    className="absolute top-8 right-8 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <MessageSquare className="w-3 h-3 text-blue-600" />
                  </motion.div>
                  
                  {/* Decision Flow */}
                  <motion.div
                    className="absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 360, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-yellow-600 rounded-full"
                      animate={{
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity
                      }}
                    />
                  </motion.div>
                  
                  {/* Human Escalation Path */}
                  <motion.div
                    className="absolute bottom-8 left-8 w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center"
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Users className="w-4 h-4 text-orange-600" />
                  </motion.div>
                  
                  {/* Connection Lines */}
                  <motion.div
                    className="absolute top-8 left-12 w-16 h-0.5 bg-green-500/30"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  />
                  
                  <motion.div
                    className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-yellow-500/30"
                    animate={{
                      scaleY: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1
                    }}
                  />
                  
                  <motion.div
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-500/30"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.5
                    }}
                  />
                  
                  {/* Success Indicators */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-4 h-4 bg-green-500/30 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 2
                    }}
                  >
                    <CheckCircle className="w-2 h-2 text-green-600" />
                  </motion.div>
                  
                  {/* Flow Arrows */}
                  <motion.div
                    className="absolute top-6 left-1/2 transform -translate-x-1/2 text-green-600"
                    animate={{
                      x: [0, 5, 0],
                      y: [0, -3, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ↓
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-orange-600"
                    animate={{
                      x: [0, -5, 0],
                      y: [0, 3, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    ↑
                  </motion.div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Users className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Human-in-the-Loop Escalation</h3>
                      <div className="flex items-center text-green-600">
                        <Activity className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Customer Service</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">AI Agent handles FAQs, routine tasks, and structured queries</p>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Escalates edge cases to human staff with context-rich summaries</p>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Benefit: Smooth transitions, reduced agent handle time, improved customer experience</p>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-lg p-4 border-l-4 border-green-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm font-medium text-green-600 mb-1">Key Impact</p>
                    <p className="text-gray-700 text-sm">Intelligent escalation reduces response time by 60% and improves customer satisfaction scores</p>
                  </motion.div>
              </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Animated Stats Section */}
          <motion.div 
            className="bg-gradient-to-r from-custom-teal to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Multiple animated background patterns */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
            
            {/* Floating geometric shapes */}
            <motion.div
              className="absolute top-4 right-4 w-8 h-8 border-2 border-white/20 rounded-full"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/20 rounded-lg"
              animate={{
                rotate: [0, -360],
                scale: [1, 0.8, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 1
              }}
            />
            
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-3xl font-bold mb-4"
                  animate={{
                    textShadow: ['0 0 0px rgba(255, 255, 255, 0.5)', '0 0 20px rgba(255, 255, 255, 0.5)', '0 0 0px rgba(255, 255, 255, 0.5)']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Proven Results Across Industries
                </motion.h3>
                <motion.p 
                  className="text-xl opacity-90"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.9 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  viewport={{ once: true }}
                >
                  AI Agents deliver measurable business impact
                </motion.p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  className="text-center relative"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Pulsing ring around the number */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/30 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="text-4xl font-bold mb-2 relative z-10"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      textShadow: ['0 0 0px rgba(255, 255, 255, 0.5)', '0 0 15px rgba(255, 255, 255, 0.8)', '0 0 0px rgba(255, 255, 255, 0.5)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    95%
                  </motion.div>
                  <motion.p 
                    className="text-lg opacity-90"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.9 }}
                    transition={{ duration: 0.4, delay: 1.4 }}
                    viewport={{ once: true }}
                  >
                    Reduction in Manual Errors
                  </motion.p>
                </motion.div>
                
                <motion.div 
                  className="text-center relative"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Pulsing ring around the number */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/30 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.div 
                    className="text-4xl font-bold mb-2 relative z-10"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      textShadow: ['0 0 0px rgba(255, 255, 255, 0.5)', '0 0 15px rgba(255, 255, 255, 0.8)', '0 0 0px rgba(255, 255, 255, 0.5)']
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    80%
                  </motion.div>
                  <motion.p 
                    className="text-lg opacity-90"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.9 }}
                    transition={{ duration: 0.4, delay: 1.6 }}
                    viewport={{ once: true }}
                  >
                    Time Savings in Data Tasks
                  </motion.p>
                </motion.div>
                
                <motion.div 
                  className="text-center relative"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Pulsing ring around the number */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/30 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  <motion.div 
                    className="text-4xl font-bold mb-2 relative z-10"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      textShadow: ['0 0 0px rgba(255, 255, 255, 0.5)', '0 0 15px rgba(255, 255, 255, 0.8)', '0 0 0px rgba(255, 255, 255, 0.5)']
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    60%
                  </motion.div>
                  <motion.p 
                    className="text-lg opacity-90"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.9 }}
                    transition={{ duration: 0.4, delay: 1.8 }}
                    viewport={{ once: true }}
                  >
                    Faster Response Times
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real-Time ROI Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating ROI particles */}
          <motion.div
            className="absolute top-20 left-10 w-6 h-6 bg-green-500/20 rounded-full"
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-4 h-4 bg-blue-500/20 rounded-full"
            animate={{
              y: [0, 50, 0],
              x: [0, -25, 0],
              scale: [1, 0.7, 1],
              opacity: [0.2, 0.9, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-5 h-5 bg-purple-500/20 rounded-full"
            animate={{
              y: [0, -35, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Animated ROI charts */}
          <motion.div
            className="absolute top-32 left-1/3 w-12 h-12 border-2 border-green-500/30 rounded-lg"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-32 right-1/4 w-16 h-16 border-2 border-blue-500/30 rounded-full"
            animate={{
              rotate: [360, 0],
              scale: [1, 0.8, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
          />
          
          {/* Data flow lines */}
          <motion.div
            className="absolute top-1/2 left-0 w-32 h-0.5 bg-gradient-to-r from-green-500/30 to-transparent"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/3 right-0 w-24 h-0.5 bg-gradient-to-l from-blue-500/30 to-transparent"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-white"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 0px rgba(255,255,255,0)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Real-Time ROI
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              AppXcess AI Agents deliver measurable outcomes that drive business growth and operational excellence.
            </motion.p>
          </motion.div>

          {/* ROI Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 40% Reduction in Manual Tasks */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-500/50 transition-all duration-300 h-full relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Animated percentage */}
                <motion.div 
                  className="text-6xl font-bold text-green-400 mb-4 relative z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    color: ["#4ade80", "#22c55e", "#4ade80"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  40%
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-white mb-3 relative z-10"
                  whileHover={{ color: "#4ade80" }}
                  transition={{ duration: 0.2 }}
                >
                  Reduction in Manual Tasks
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 text-sm leading-relaxed relative z-10"
                  whileHover={{ color: "#e5e7eb" }}
                  transition={{ duration: 0.2 }}
                >
                  Automated workflows eliminate repetitive manual processes, freeing up for strategic work.
                </motion.p>
                
                {/* Floating particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-green-500/30 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </motion.div>
            </motion.div>

            {/* 25% Faster Resolution Times */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-500/50 transition-all duration-300 h-full relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Animated percentage */}
                <motion.div 
                  className="text-6xl font-bold text-blue-400 mb-4 relative z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    color: ["#60a5fa", "#3b82f6", "#60a5fa"]
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  25%
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-white mb-3 relative z-10"
                  whileHover={{ color: "#60a5fa" }}
                  transition={{ duration: 0.2 }}
                >
                  Faster Resolution Times
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 text-sm leading-relaxed relative z-10"
                  whileHover={{ color: "#e5e7eb" }}
                  transition={{ duration: 0.2 }}
                >
                  Knowledge repository integration enables instant access to solutions and best practices.
                </motion.p>
                
                {/* Floating particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-blue-500/30 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -12, 0],
                    opacity: [0, 0.7, 0]
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                />
              </motion.div>
            </motion.div>

            {/* 30% Boost in CSAT Scores */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 h-full relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Animated percentage */}
                <motion.div 
                  className="text-6xl font-bold text-purple-400 mb-4 relative z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    color: ["#a78bfa", "#8b5cf6", "#a78bfa"]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  30%
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-white mb-3 relative z-10"
                  whileHover={{ color: "#a78bfa" }}
                  transition={{ duration: 0.2 }}
                >
                  Significant Boost in CSAT Scores
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 text-sm leading-relaxed relative z-10"
                  whileHover={{ color: "#e5e7eb" }}
                  transition={{ duration: 0.2 }}
                >
                  Faster and more accurate responses lead to significantly improved customer satisfaction.
                </motion.p>
                
                {/* Floating particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-purple-500/30 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.7
                  }}
                />
              </motion.div>
            </motion.div>

            {/* 20% Improvement in Productivity */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-orange-500/50 transition-all duration-300 h-full relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Animated percentage */}
                <motion.div 
                  className="text-6xl font-bold text-orange-400 mb-4 relative z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    color: ["#fb923c", "#f97316", "#fb923c"]
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  20%
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-white mb-3 relative z-10"
                  whileHover={{ color: "#fb923c" }}
                  transition={{ duration: 0.2 }}
                >
                  Improvement in Productivity
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 text-sm leading-relaxed relative z-10"
                  whileHover={{ color: "#e5e7eb" }}
                  transition={{ duration: 0.2 }}
                >
                  Reduced cognitive load allows employees to focus on high-value, strategic activities.
                </motion.p>
                
                {/* Floating particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-orange-500/30 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 1.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.9
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Benefits of AppXcess AI Agents Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Enhanced Background Motion Graphics */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating benefit particles */}
          <motion.div
            className="absolute top-20 left-10 w-6 h-6 bg-custom-teal/20 rounded-full"
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-4 h-4 bg-blue-500/20 rounded-full"
            animate={{
              y: [0, 50, 0],
              x: [0, -25, 0],
              scale: [1, 0.7, 1],
              opacity: [0.2, 0.9, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-5 h-5 bg-purple-500/20 rounded-full"
            animate={{
              y: [0, -35, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-60 right-1/3 w-6 h-6 bg-green-500/20 rounded-full"
            animate={{
              y: [0, 25, 0],
              x: [0, -20, 0],
              scale: [1, 0.8, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
          
          {/* Animated geometric shapes */}
          <motion.div
            className="absolute top-32 left-1/3 w-8 h-8 border-2 border-custom-teal/30 rounded-lg"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-32 right-1/4 w-10 h-10 border-2 border-blue-500/30 rounded-full"
            animate={{
              rotate: [360, 0],
              scale: [1, 0.8, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
          />
          
          {/* Data flow lines */}
          <motion.div
            className="absolute top-1/2 left-0 w-32 h-0.5 bg-gradient-to-r from-custom-teal/30 to-transparent"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/3 right-0 w-24 h-0.5 bg-gradient-to-l from-blue-500/30 to-transparent"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Floating benefit icons */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Zap className="w-6 h-6 text-custom-teal" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0, 3, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Shield className="w-6 h-6 text-blue-500" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-custom-teal"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: "linear-gradient(90deg, #14b8a6, #0d9488, #14b8a6)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Benefits of AppXcess AI Agents
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Unlock tangible value across your enterprise with AI-driven automation and knowledge integration.
            </motion.p>
          </motion.div>

          {/* Modern Benefits Layout - Hero Card + Grid */}
          <div className="space-y-12">
            {/* Hero Benefit Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-custom-teal/10 via-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-custom-teal/20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-custom-teal/20 rounded-2xl mb-6 mx-auto">
                    <Zap className="w-8 h-8 text-custom-teal" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
                    Transform Your Business Operations
                  </h3>
                  
                  <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
                    Our AI Agents deliver measurable results across efficiency, customer satisfaction, and operational excellence. 
                    Experience the power of intelligent automation that works seamlessly with your existing systems.
                  </p>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-custom-teal mb-2">40%</div>
                      <div className="text-sm text-gray-600">Reduction in Manual Effort</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-500 mb-2">30%</div>
                      <div className="text-sm text-gray-600">Increase in CSAT Scores</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500 mb-2">20%</div>
                      <div className="text-sm text-gray-600">Boost in Productivity</div>
                    </div>
                  </div>
                </div>
              </div>
                  </motion.div>
                  
            {/* Benefits Grid - 3 columns on desktop, responsive on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* 1. Accelerate Operational Efficiency */}
                  <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-custom-teal/30 h-full relative overflow-hidden">
                  {/* Icon and Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-custom-teal/10 rounded-xl flex items-center justify-center group-hover:bg-custom-teal/20 transition-colors">
                      <Zap className="w-6 h-6 text-custom-teal" />
                    </div>
                    <div className="w-8 h-8 bg-custom-teal/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-custom-teal">1</span>
                    </div>
                </div>
                
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-custom-teal transition-colors">
                    Accelerate Operational Efficiency
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-custom-teal mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Automate repetitive workflows like billing, scheduling, and reporting</p>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-custom-teal mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Free up employee time for strategic tasks</p>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-custom-teal mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Up to 40% reduction in manual effort</p>
                    </div>
                  </div>
                </div>
                </motion.div>
                
              {/* 2. Improve Customer Satisfaction (CSAT) */}
                  <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-500/30 h-full relative overflow-hidden">
                  {/* Icon and Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Users className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-500">2</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-500 transition-colors">
                    Improve Customer Satisfaction
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Provide instant, accurate responses across channels</p>
                </div>
                
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Reduce wait times and ensure consistent answers</p>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">30% increase in CSAT scores</p>
                    </div>
                  </div>
                </div>
            </motion.div>

            {/* 3. Enhance Customer Experience */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-500/30 h-full relative overflow-hidden">
                  {/* Icon and Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <Heart className="w-6 h-6 text-purple-500" />
                    </div>
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-500">3</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-500 transition-colors">
                  Enhance Customer Experience
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Deliver context-aware assistance with knowledge integration</p>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Personalize interactions based on behavior and insights</p>
                </div>
                
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">20% improvement in CX metrics</p>
                    </div>
                  </div>
                </div>
            </motion.div>

            {/* 4. Empower Employees */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-500/30 h-full relative overflow-hidden">
                  {/* Icon and Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <UserCheck className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-green-500">4</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-500 transition-colors">
                  Empower Employees
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Virtual assistants help manage tasks, schedules, and reminders</p>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Human-in-the-loop handoffs reduce cognitive load and errors</p>
                </div>
                
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">20% boost in employee productivity</p>
                    </div>
                  </div>
                </div>
            </motion.div>

            {/* 5. Ensure Data Security & Compliance */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-500/30 h-full relative overflow-hidden">
                  {/* Icon and Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                      <Shield className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-red-500">5</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-500 transition-colors">
                  Ensure Data Security & Compliance
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">GDPR, HIPAA, and SOC 2 compliant AI Agents</p>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Maintain control over sensitive workflows and data</p>
                </div>
                
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Peace of mind for regulated industries</p>
                    </div>
                  </div>
                </div>
            </motion.div>

            {/* 6. Seamless System Integration */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-500/30 h-full relative overflow-hidden">
                  {/* Icon and Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                      <Settings className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-indigo-500">6</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-500 transition-colors">
                  Seamless System Integration
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Integrates with CRMs, ERPs, HRMS, and enterprise systems</p>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Access real-time information without switching platforms</p>
                </div>
                
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Faster decision-making and reduced errors</p>
                    </div>
                  </div>
                </div>
            </motion.div>

                </div>
          </div>
        </div>
      </section>

      {/* System Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless System Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your entire technology ecosystem for unified, intelligent automation
            </p>
          </motion.div>

          {/* Animated Robot Integration Visualization */}
          <motion.div 
            className="relative mb-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">AI Agent Integration Hub</h3>
              <p className="text-gray-300">Real-time system connections and data flow</p>
                  </div>
          
            {/* Animated Robot and System Icons */}
            <div className="relative h-96 flex items-center justify-center">
              {/* Central AI Robot */}
              <motion.div
                className="relative z-10"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden"
                  animate={{
                    boxShadow: "0 0 50px rgba(20, 184, 166, 0.6)"
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Pulsing background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-300 to-blue-400 rounded-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <Bot className="h-10 w-10 text-white relative z-10" />
                  
                  {/* Scanning lines effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
                
                {/* Robot Antenna */}
                <motion.div
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-teal-400 rounded-full"
                  animate={{ 
                    scaleY: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
              </motion.div>

              {/* System Icons positioned around the robot */}
              {[
                { icon: Database, label: "CRM", color: "blue", position: { top: "10%", left: "10%" } },
                { icon: Workflow, label: "ERP", color: "green", position: { top: "10%", right: "10%" } },
                { icon: Users, label: "HR", color: "purple", position: { bottom: "10%", left: "10%" } },
                { icon: Monitor, label: "IT", color: "orange", position: { bottom: "10%", right: "10%" } }
              ].map((system, index) => (
                <motion.div
                  key={system.label}
                  className="absolute flex flex-col items-center"
                  style={system.position}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0,
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    delay: index * 0.3, 
                    duration: 0.8,
                    y: {
                      duration: 2 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className={`w-16 h-16 bg-${system.color}-500 rounded-xl flex items-center justify-center shadow-lg mb-2 relative overflow-hidden`}
                    animate={{ 
                      boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)",
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Pulsing background effect for each system */}
                    <motion.div
                      className="absolute inset-0 bg-white opacity-20 rounded-xl"
                      animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    />
                    <motion.div
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <system.icon className="h-8 w-8 text-white relative z-10" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Connection indicator dots */}
                  <motion.div
                    className="flex space-x-1 mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.2 }}
                  >
                    {[0, 1, 2].map((dot) => (
                      <motion.div
                        key={dot}
                        className="w-1 h-1 bg-white rounded-full"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: dot * 0.2 + index * 0.3
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  <motion.span 
                    className="text-white text-sm font-medium"
                    animate={{
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4
                    }}
                  >
                    {system.label}
                  </motion.span>
                </motion.div>
              ))}

              {/* Animated Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Lines from systems to robot */}
                {[
                  { from: { x: "15%", y: "20%" }, to: { x: "50%", y: "50%" }, color: "#3b82f6" },
                  { from: { x: "85%", y: "20%" }, to: { x: "50%", y: "50%" }, color: "#10b981" },
                  { from: { x: "15%", y: "80%" }, to: { x: "50%", y: "50%" }, color: "#8b5cf6" },
                  { from: { x: "85%", y: "80%" }, to: { x: "50%", y: "50%" }, color: "#f97316" }
                ].map((line, index) => (
                  <g key={index}>
                    {/* Main connection line */}
                    <motion.line
                      x1={line.from.x}
                      y1={line.from.y}
                      x2={line.to.x}
                      y2={line.to.y}
                      stroke={line.color}
                      strokeWidth="3"
                      strokeDasharray="8,4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 1 + index * 0.2, duration: 1 }}
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;-24;0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </motion.line>
                    
                    {/* Glowing effect line */}
                    <motion.line
                      x1={line.from.x}
                      y1={line.from.y}
                      x2={line.to.x}
                      y2={line.to.y}
                      stroke={line.color}
                      strokeWidth="1"
                      strokeOpacity="0.3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 1.2 + index * 0.2, duration: 1 }}
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;-12;0"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                    </motion.line>
                  </g>
                ))}

                {/* Data Flow Particles */}
                {Array.from({ length: 12 }).map((_, index) => {
                  const paths = [
                    { cx: ["15%", "50%", "85%"], cy: ["20%", "50%", "80%"] },
                    { cx: ["85%", "50%", "15%"], cy: ["20%", "50%", "80%"] },
                    { cx: ["15%", "50%", "85%"], cy: ["80%", "50%", "20%"] },
                    { cx: ["85%", "50%", "15%"], cy: ["80%", "50%", "20%"] }
                  ];
                  const path = paths[index % paths.length];
                  const colors = ["#60a5fa", "#10b981", "#8b5cf6", "#f97316", "#06b6d4", "#ef4444"];
                  
                  return (
                    <motion.circle
                      key={index}
                      r={2 + Math.random() * 2}
                      fill={colors[index % colors.length]}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        cx: path.cx,
                        cy: path.cy
                      }}
                      transition={{
                        duration: 2.5 + Math.random() * 1,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}

                {/* Energy waves emanating from robot */}
                {Array.from({ length: 6 }).map((_, index) => (
                  <motion.circle
                    key={`wave-${index}`}
                    cx="50%"
                    cy="50%"
                    r="40"
                    fill="none"
                    stroke="#20b2aa"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 2, 0],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeOut"
                    }}
                  />
                ))}

                {/* Cross-connections between systems */}
                {[
                  { from: { x: "15%", y: "20%" }, to: { x: "85%", y: "20%" }, color: "#60a5fa" },
                  { from: { x: "15%", y: "80%" }, to: { x: "85%", y: "80%" }, color: "#8b5cf6" },
                  { from: { x: "15%", y: "20%" }, to: { x: "15%", y: "80%" }, color: "#3b82f6" },
                  { from: { x: "85%", y: "20%" }, to: { x: "85%", y: "80%" }, color: "#10b981" }
                ].map((line, index) => (
                  <motion.line
                    key={`cross-${index}`}
                    x1={line.from.x}
                    y1={line.from.y}
                    x2={line.to.x}
                    y2={line.to.y}
                    stroke={line.color}
                    strokeWidth="1"
                    strokeDasharray="3,3"
                    strokeOpacity="0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 2 + index * 0.3, duration: 1.5 }}
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;-12;0"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </motion.line>
                ))}
              </svg>

              {/* Floating Data Elements */}
              {[
                { text: "Data Sync", position: { top: "25%", left: "30%" }, color: "blue" },
                { text: "Real-time", position: { top: "25%", right: "30%" }, color: "green" },
                { text: "Automation", position: { bottom: "25%", left: "30%" }, color: "purple" },
                { text: "Integration", position: { bottom: "25%", right: "30%" }, color: "orange" },
                { text: "AI Processing", position: { top: "50%", left: "5%" }, color: "cyan" },
                { text: "Cloud Connect", position: { top: "50%", right: "5%" }, color: "pink" },
                { text: "Smart Analytics", position: { top: "70%", left: "20%" }, color: "indigo" },
                { text: "Secure Flow", position: { top: "70%", right: "20%" }, color: "red" }
              ].map((element, index) => (
                <motion.div
                  key={element.text}
                  className={`absolute px-4 py-2 bg-${element.color}-500/20 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-${element.color}-400/30`}
                  style={element.position}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    y: [0, -8, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [0.9, 1.1, 0.9]
                  }}
                  transition={{ 
                    duration: 2.5 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  whileHover={{
                    scale: 1.2,
                    opacity: 1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.span
                    animate={{
                      textShadow: [
                        "0 0 5px rgba(255,255,255,0.3)",
                        "0 0 15px rgba(255,255,255,0.6)",
                        "0 0 5px rgba(255,255,255,0.3)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {element.text}
                  </motion.span>
                </motion.div>
              ))}

              {/* Background Grid Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Floating Code Elements */}
              {[
                { text: "API", position: { top: "15%", left: "50%" } },
                { text: "JSON", position: { top: "35%", left: "8%" } },
                { text: "XML", position: { top: "35%", right: "8%" } },
                { text: "REST", position: { bottom: "35%", left: "8%" } },
                { text: "GraphQL", position: { bottom: "35%", right: "8%" } },
                { text: "WebSocket", position: { bottom: "15%", left: "50%" } }
              ].map((element, index) => (
                <motion.div
                  key={element.text}
                  className="absolute px-2 py-1 bg-gray-800/50 backdrop-blur-sm rounded text-green-400 text-xs font-mono"
                  style={element.position}
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 3 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.6
                  }}
                >
                  {element.text}
                </motion.div>
            ))}
          </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Database className="h-8 w-8 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">CRM Systems</h3>
              <p className="text-gray-600">Salesforce, HubSpot, Pipedrive, Zoho CRM integration for automated lead management and customer insights</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Workflow className="h-8 w-8 text-green-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ERP Platforms</h3>
              <p className="text-gray-600">SAP, Oracle, Microsoft Dynamics, NetSuite integration for automated business process management</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Users className="h-8 w-8 text-purple-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">HR Systems</h3>
              <p className="text-gray-600">Workday, BambooHR, ADP, SuccessFactors integration for automated HR workflows and employee management</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Monitor className="h-8 w-8 text-orange-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">IT Infrastructure</h3>
              <p className="text-gray-600">ServiceNow, Jira, Confluence, Slack integration for automated IT operations and incident management</p>
            </motion.div>
        </div>
          
          <motion.div 
            className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Real-time Data Synchronization</h3>
              <p className="text-lg mb-6">Bidirectional data flow ensures your AI agents always work with the latest information across all systems</p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div 
                  className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Activity className="h-5 w-5" />
                  <span>Live Updates</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Lock className="h-5 w-5" />
                  <span>Secure Sync</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Zap className="h-5 w-5" />
                  <span>Instant Processing</span>
                </motion.div>
                  </div>
                </div>
          </motion.div>
        </div>
      </section>

      {/* AI Models & Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powered by Leading AI Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from the most advanced AI models or let us recommend the best fit for your specific use case
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                  {/* OpenAI GPT Bot Animation */}
                  <motion.div 
                    className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Bot Body */}
                    <Bot className="h-8 w-8 text-white relative z-10" />
                    
                    {/* Advanced Reasoning Indicators */}
                    <motion.div
                      className="absolute -top-2 -right-2 flex space-x-1"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {[0, 1, 2].map((dot) => (
                        <motion.div
                          key={dot}
                          className="w-1.5 h-1.5 bg-white rounded-full"
                          animate={{
                            y: [0, -8, 0],
                            opacity: [0.3, 1, 0.3]
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: dot * 0.2
                          }}
                        />
                      ))}
                    </motion.div>
                    
                    {/* Code Generation Indicator */}
                    <motion.div
                      className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full flex items-center justify-center"
                      animate={{ 
                        scale: [0.8, 1.2, 0.8],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <span className="text-white text-xs font-bold">C</span>
                    </motion.div>
                    
                    {/* Multilingual Support Animation */}
                    <motion.div
                      className="absolute -left-2 top-1/2 transform -translate-y-1/2"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-yellow-400 rounded-full"
                        animate={{ 
                          scale: [0.5, 1, 0.5],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{ 
                          duration: 1.2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      />
                    </motion.div>
                    
                    {/* Enterprise Application Dots */}
                    <motion.div
                      className="absolute -top-1 -left-1 flex space-x-0.5"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {[0, 1, 2, 3].map((dot) => (
                        <motion.div
                          key={dot}
                          className="w-1 h-1 bg-orange-400 rounded-full"
                          animate={{
                            scale: [0.5, 1, 0.5],
                            opacity: [0.3, 1, 0.3]
                          }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: dot * 0.4
                          }}
                        />
                      ))}
                    </motion.div>
                    
                    {/* Pulsing Ring */}
                    <motion.div
                      className="absolute inset-0 border-2 border-blue-400 rounded-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.1, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                <h3 className="text-xl font-bold text-gray-900">OpenAI GPT Models</h3>
          </div>
              <p className="text-gray-600 mb-4">Advanced reasoning, creative tasks, and complex problem-solving capabilities for enterprise applications</p>
              <motion.ul 
                className="space-y-2 text-sm text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.li 
                  className="flex items-center gap-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  Advanced reasoning capabilities
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  Code generation and analysis
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  Multilingual support
                </motion.li>
              </motion.ul>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                {/* Google Gemini Bot Animation */}
                <motion.div 
                  className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Bot Body */}
                  <Bot className="h-8 w-8 text-white relative z-10" />
                  
                  {/* Multimodal Icons Animation */}
                  <motion.div
                    className="absolute -top-1 -left-1 flex space-x-1"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-yellow-400 rounded-full"
                      animate={{ scale: [0.8, 1.2, 0.8] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-red-400 rounded-full"
                      animate={{ scale: [0.8, 1.2, 0.8] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-blue-400 rounded-full"
                      animate={{ scale: [0.8, 1.2, 0.8] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                  </motion.div>
                  
                  {/* Data Stream Animation */}
                  <motion.div
                    className="absolute -right-2 top-1/2 transform -translate-y-1/2"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.div
                      className="w-1 h-8 bg-gradient-to-b from-green-300 to-green-500 rounded-full"
                      animate={{ scaleY: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                  
                  {/* Google "G" Symbol */}
                  <motion.div
                    className="absolute -bottom-1 -left-1 w-4 h-4 bg-white rounded-full flex items-center justify-center"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-green-600 text-xs font-bold">G</span>
                  </motion.div>
                  
                  {/* Pulsing Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-green-400 rounded-xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">Google Gemini</h3>
                    </div>
              <p className="text-gray-600 mb-4">Multimodal understanding, code generation, and enterprise applications with advanced AI capabilities</p>
              <motion.ul 
                className="space-y-2 text-sm text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.li 
                  className="flex items-center gap-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Multimodal capabilities
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Code understanding
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Google ecosystem integration
                </motion.li>
              </motion.ul>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                {/* DeepSeek & Others Bot Animation */}
                <motion.div 
                  className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Bot Body */}
                  <Bot className="h-8 w-8 text-white relative z-10" />
                  
                  {/* Specialized Training Indicators */}
                  <motion.div
                    className="absolute -top-2 -right-2 flex flex-col space-y-1"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {[0, 1, 2].map((line) => (
                      <motion.div
                        key={line}
                        className="w-3 h-0.5 bg-purple-300 rounded-full"
                        animate={{
                          width: ["8px", "12px", "8px"],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: line * 0.3
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  {/* Cost-effective Indicator */}
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full flex items-center justify-center"
                    animate={{ 
                      scale: [0.8, 1.2, 0.8],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <span className="text-white text-xs font-bold">$</span>
                  </motion.div>
                  
                  {/* Custom Fine-tuning Animation */}
                  <motion.div
                    className="absolute -left-2 top-1/2 transform -translate-y-1/2"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-orange-400 rounded-full"
                      animate={{ 
                        scale: [0.5, 1, 0.5],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{ 
                        duration: 1.2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                  </motion.div>
                  
                  {/* Industry Specialization Dots */}
                  <motion.div
                    className="absolute -top-1 -left-1 flex space-x-0.5"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {[0, 1, 2, 3].map((dot) => (
                      <motion.div
                        key={dot}
                        className="w-1 h-1 bg-yellow-400 rounded-full"
                        animate={{
                          scale: [0.5, 1, 0.5],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: dot * 0.4
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  {/* Pulsing Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-purple-400 rounded-xl"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">DeepSeek & Others</h3>
              </div>
              <p className="text-gray-600 mb-4">Specialized AI models and custom solutions tailored for specific industry requirements and use cases</p>
              <motion.ul 
                className="space-y-2 text-sm text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.li 
                  className="flex items-center gap-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  Cost-effective solutions
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  Specialized training
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  Custom fine-tuning
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>

          {/* CUSTOMIZATION Section */}
          <section className="py-20 bg-white" style={{ display: 'none' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Customization
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Easily develop and deploy pre-built and custom AI Agents. The flexibility of a low-code interface with pre-built skills ensures rapid implementation and enterprise-wide scalability to stay ahead of the evolving needs of your organization.
                </p>
              </motion.div>

              {/* Feature 1: Left Image, Right Content */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="order-2 lg:order-1">
                  <motion.div 
                    className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl overflow-hidden p-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20"></div>
                    
                    {/* Smooth Step-by-Step Flow Animation */}
                    <div className="relative h-full flex items-center justify-center p-4">
                      {/* Main Flow Container */}
                      <div className="relative w-full max-w-6xl h-80 flex items-center justify-between">
                        
                        {/* Step 1: Data */}
                      <motion.div 
                          className="w-24 h-24 bg-white border-2 border-[#1E3B8B] rounded-xl p-2 shadow-lg flex flex-col items-center justify-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ 
                            opacity: [0, 1, 1, 1, 1, 0.7, 1],
                            scale: [0.8, 1, 1.05, 1, 1, 1, 1],
                            borderColor: ["#1E3B8B", "#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1]
                          }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="w-8 h-8 mb-2"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: 0.5
                            }}
                          >
                            {/* Database Icon */}
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#1E3B8B]">
                              <path d="M12 2C6.48 2 2 3.79 2 6s4.48 4 10 4 10-1.79 10-4-4.48-4-10-4zM2 12c0 2.21 4.48 4 10 4s10-1.79 10-4V8c0 2.21-4.48 4-10 4S2 10.21 2 8v4zM2 18c0 2.21 4.48 4 10 4s10-1.79 10-4v-4c0 2.21-4.48 4-10 4S2 16.21 2 14v4z" fill="currentColor"/>
                            </svg>
                      </motion.div>
                      <motion.div 
                            className="w-6 h-6 mb-2"
                            animate={{ 
                              scale: [1, 1.1, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 1
                            }}
                          >
                            {/* API Icon */}
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#FF0101]">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                            </svg>
                          </motion.div>
                          <h5 className="text-xs font-semibold text-gray-800 text-center">Data</h5>
                      </motion.div>

                        {/* Arrow 1: Data to Skills Library */}
                      <motion.div 
                          className="flex-1 flex items-center justify-center"
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ 
                            opacity: [0, 0, 1, 1, 1, 0, 0],
                            scaleX: [0, 0, 1, 1, 1, 0, 0]
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1]
                          }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="w-full h-0.5 bg-[#FF0101] relative"
                            animate={{ 
                              backgroundColor: ["#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                            }}
                            transition={{ 
                              duration: 8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1]
                            }}
                          >
                            <motion.div
                              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-[#FF0101] border-t-2 border-b-2 border-t-transparent border-b-transparent"
                              animate={{ 
                                borderLeftColor: ["#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                              }}
                              transition={{ 
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1]
                              }}
                            />
                          </motion.div>
                      </motion.div>

                        {/* Step 2: Skills Library */}
                      <motion.div 
                          className="w-24 h-24 bg-white border-2 border-[#1E3B8B] rounded-xl p-2 shadow-lg flex flex-col items-center justify-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ 
                            opacity: [0, 0, 1, 1, 1, 1, 0.7, 1],
                            scale: [0.8, 0.8, 1, 1.05, 1, 1, 1, 1],
                            borderColor: ["#1E3B8B", "#1E3B8B", "#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1]
                          }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="w-8 h-8 mb-2"
                            animate={{ 
                              scale: [1, 1.1, 1],
                              rotate: [0, 10, -10, 0]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: 1.5
                            }}
                          >
                            {/* Open Book Icon */}
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#1E3B8B]">
                              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="currentColor"/>
                            </svg>
                          </motion.div>
                          <motion.div
                            className="w-6 h-6 mb-2"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 2
                            }}
                          >
                            {/* Puzzle Pieces Icon */}
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#FF0101]">
                              <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" fill="currentColor"/>
                            </svg>
                          </motion.div>
                          <h5 className="text-xs font-semibold text-gray-800 text-center">Skills Library</h5>
                      </motion.div>

                        {/* Arrow 2: Skills Library to Deploy */}
                        <motion.div
                          className="flex-1 flex items-center justify-center"
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ 
                            opacity: [0, 0, 0, 1, 1, 1, 0, 0],
                            scaleX: [0, 0, 0, 1, 1, 1, 0, 0]
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1]
                          }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="w-full h-0.5 bg-[#FF0101] relative"
                            animate={{ 
                              backgroundColor: ["#1E3B8B", "#1E3B8B", "#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                            }}
                            transition={{ 
                              duration: 8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1]
                            }}
                          >
                            <motion.div
                              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-[#FF0101] border-t-2 border-b-2 border-t-transparent border-b-transparent"
                              animate={{ 
                                borderLeftColor: ["#1E3B8B", "#1E3B8B", "#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                              }}
                              transition={{ 
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1]
                              }}
                            />
                          </motion.div>
                        </motion.div>

                        {/* Step 3: Deploy */}
                        <motion.div 
                          className="w-24 h-24 bg-white border-2 border-[#1E3B8B] rounded-xl p-2 shadow-lg flex flex-col items-center justify-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ 
                            opacity: [0, 0, 0, 1, 1, 1, 1, 0.7, 1],
                            scale: [0.8, 0.8, 0.8, 1, 1.05, 1, 1, 1, 1],
                            borderColor: ["#1E3B8B", "#1E3B8B", "#1E3B8B", "#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 1]
                          }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="w-8 h-8 mb-2"
                            animate={{ 
                              y: [0, -5, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: 2.5
                            }}
                          >
                            {/* Rocket Icon */}
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#1E3B8B]">
                              <path d="M12 2.5c0 0 4.5 2.04 4.5 10.5 0 2.49-1.04 4.5-2.5 4.5s-2.5-2.01-2.5-4.5S10.5 2.5 12 2.5zM12 2.5c0 0-4.5 2.04-4.5 10.5 0 2.49 1.04 4.5 2.5 4.5s2.5-2.01 2.5-4.5S13.5 2.5 12 2.5z" fill="currentColor"/>
                            </svg>
                          </motion.div>
                          <motion.div
                            className="w-6 h-6 mb-2"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 3
                            }}
                          >
                            {/* Launch Icon */}
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#FF0101]">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                            </svg>
                          </motion.div>
                          <h5 className="text-xs font-semibold text-gray-800 text-center">Deploy</h5>
                        </motion.div>

                        {/* Arrow 3: Deploy to Custom */}
                        <motion.div
                          className="flex-1 flex items-center justify-center"
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ 
                            opacity: [0, 0, 0, 0, 1, 1, 1, 0, 0],
                            scaleX: [0, 0, 0, 0, 1, 1, 1, 0, 0]
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 1]
                          }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="w-full h-0.5 bg-[#FF0101] relative"
                            animate={{ 
                              backgroundColor: ["#1E3B8B", "#1E3B8B", "#1E3B8B", "#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                            }}
                            transition={{ 
                              duration: 8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 1]
                            }}
                          >
                            <motion.div
                              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-[#FF0101] border-t-2 border-b-2 border-t-transparent border-b-transparent"
                              animate={{ 
                                borderLeftColor: ["#1E3B8B", "#1E3B8B", "#1E3B8B", "#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                              }}
                              transition={{ 
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 1]
                              }}
                            />
                          </motion.div>
                        </motion.div>

                        {/* Step 4: Custom */}
                        <motion.div 
                          className="w-24 h-24 bg-white border-2 border-[#1E3B8B] rounded-xl p-2 shadow-lg flex flex-col items-center justify-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ 
                            opacity: [0, 0, 0, 0, 1, 1, 1, 1, 0.7, 1],
                            scale: [0.8, 0.8, 0.8, 0.8, 1, 1.05, 1, 1, 1, 1],
                            borderColor: ["#1E3B8B", "#1E3B8B", "#1E3B8B", "#1E3B8B", "#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1]
                          }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="w-8 h-8 mb-2"
                            animate={{ 
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: 3.5
                            }}
                          >
                            {/* Gear Icon */}
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#1E3B8B]">
                              <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.6-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" fill="currentColor"/>
                      </svg>
                          </motion.div>
                          <motion.div
                            className="w-6 h-6 mb-2"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 4
                            }}
                          >
                            {/* Library Icon */}
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#FF0101]">
                              <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" fill="currentColor"/>
                            </svg>
                          </motion.div>
                          <h5 className="text-xs font-semibold text-gray-800 text-center">Custom</h5>
                        </motion.div>

                      </div>
                    </div>
                  </motion.div>
                  </div>
                
                <div className="order-1 lg:order-2">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                      Streamline workflow deployment with a library of pre-built skills
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      A robust library of ready-made skills for common workflows, enabling rapid deployment without custom development.
                    </p>
                    <Link to="/Contact/">
                      <motion.div 
                        className="flex items-center text-blue-600 font-semibold"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span>Explore Skills Library</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.div>
                    </Link>
                  </motion.div>
              </div>
              </motion.div>

              {/* Feature 2: Left Content, Right Image */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                      Low-code interface enables staff to own customization
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Allows healthcare organizations to create, train, and monitor custom AI Agents using Flow Builder's intuitive drag-and-drop interface.
                    </p>
                    <motion.div 
                      className="flex items-center text-green-600 font-semibold"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Try Flow Builder</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </motion.div>
                    </div>
                
                <div>
                  <motion.div 
                    className="relative h-96 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl overflow-hidden p-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20"></div>
                    
                    {/* Professional Step-by-Step Workflow Animation */}
                    <div className="relative h-full flex items-center justify-center p-4">
                      {/* Main Flow Container */}
                      <div className="relative w-full max-w-6xl h-80 flex items-center justify-between">
                        
                        {/* Step 1: Design */}
                      <motion.div 
                          className="w-24 h-24 bg-white border-2 border-[#1E3B8B] rounded-xl p-2 shadow-lg flex flex-col items-center justify-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: [0, 1, 1, 1, 1, 0.7, 1],
                            scale: [0.8, 1, 1.05, 1, 1, 1, 1],
                            borderColor: ["#1E3B8B", "#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1]
                          }}
                        >
                          <motion.div
                            className="w-8 h-8 mb-2"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: 0.5
                            }}
                          >
                            {/* Drag & Drop UI Components Icon */}
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#1E3B8B]">
                              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="currentColor"/>
                            </svg>
                      </motion.div>
                      <motion.div 
                            className="w-6 h-6 mb-2"
                            animate={{ 
                              scale: [1, 1.1, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 1
                            }}
                          >
                            {/* Drag Handle Icon */}
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#FF0101]">
                              <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/>
                            </svg>
                          </motion.div>
                          <h5 className="text-xs font-semibold text-gray-800 text-center">Design</h5>
                      </motion.div>

                        {/* Arrow 1: Design to Configure */}
                      <motion.div 
                          className="flex-1 flex items-center justify-center"
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ 
                            opacity: [0, 0, 1, 1, 1, 0, 0],
                            scaleX: [0, 0, 1, 1, 1, 0, 0]
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1]
                          }}
                        >
                          <motion.div
                            className="w-full h-0.5 bg-[#FF0101] relative"
                            animate={{ 
                              backgroundColor: ["#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                            }}
                            transition={{ 
                              duration: 8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1]
                            }}
                          >
                            <motion.div
                              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-[#FF0101] border-t-2 border-b-2 border-t-transparent border-b-transparent"
                              animate={{ 
                                borderLeftColor: ["#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                              }}
                              transition={{ 
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1]
                              }}
                            />
                          </motion.div>
                      </motion.div>

                        {/* Step 2: Configure */}
                      <motion.div 
                          className="w-24 h-24 bg-white border-2 border-[#1E3B8B] rounded-xl p-2 shadow-lg flex flex-col items-center justify-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: [0, 0, 1, 1, 1, 1, 0.7, 1],
                            scale: [0.8, 0.8, 1, 1.05, 1, 1, 1, 1],
                            borderColor: ["#1E3B8B", "#1E3B8B", "#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1]
                          }}
                        >
                          <motion.div
                            className="w-8 h-8 mb-2"
                            animate={{ 
                              scale: [1, 1.1, 1],
                              rotate: [0, 10, -10, 0]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: 1.5
                            }}
                          >
                            {/* Sliders Icon */}
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#1E3B8B]">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                            </svg>
                          </motion.div>
                          <motion.div
                            className="w-6 h-6 mb-2"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 2
                            }}
                          >
                            {/* Toggle Icon */}
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#FF0101]">
                              <path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="currentColor"/>
                            </svg>
                          </motion.div>
                          <h5 className="text-xs font-semibold text-gray-800 text-center">Configure</h5>
                      </motion.div>

                        {/* Arrow 2: Configure to Test */}
                        <motion.div
                          className="flex-1 flex items-center justify-center"
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ 
                            opacity: [0, 0, 0, 1, 1, 1, 0, 0],
                            scaleX: [0, 0, 0, 1, 1, 1, 0, 0]
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1]
                          }}
                        >
                          <motion.div
                            className="w-full h-0.5 bg-[#FF0101] relative"
                            animate={{ 
                              backgroundColor: ["#1E3B8B", "#1E3B8B", "#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                            }}
                            transition={{ 
                              duration: 8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1]
                            }}
                          >
                            <motion.div
                              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-[#FF0101] border-t-2 border-b-2 border-t-transparent border-b-transparent"
                              animate={{ 
                                borderLeftColor: ["#1E3B8B", "#1E3B8B", "#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                              }}
                              transition={{ 
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1]
                              }}
                            />
                          </motion.div>
                        </motion.div>

                        {/* Step 3: Test */}
                        <motion.div 
                          className="w-24 h-24 bg-white border-2 border-[#1E3B8B] rounded-xl p-2 shadow-lg flex flex-col items-center justify-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: [0, 0, 0, 1, 1, 1, 1, 0.7, 1],
                            scale: [0.8, 0.8, 0.8, 1, 1.05, 1, 1, 1, 1],
                            borderColor: ["#1E3B8B", "#1E3B8B", "#1E3B8B", "#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 1]
                          }}
                        >
                          <motion.div
                            className="w-8 h-8 mb-2"
                            animate={{ 
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: 2.5
                            }}
                          >
                            {/* Magnifying Glass Icon */}
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#1E3B8B]">
                              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
                            </svg>
                          </motion.div>
                          <motion.div
                            className="w-6 h-6 mb-2"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 3
                            }}
                          >
                            {/* Green Checkmark Icon */}
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#FF0101]">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                            </svg>
                          </motion.div>
                          <h5 className="text-xs font-semibold text-gray-800 text-center">Test</h5>
                        </motion.div>

                        {/* Arrow 3: Test to Deploy */}
                        <motion.div
                          className="flex-1 flex items-center justify-center"
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ 
                            opacity: [0, 0, 0, 0, 1, 1, 1, 0, 0],
                            scaleX: [0, 0, 0, 0, 1, 1, 1, 0, 0]
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 1]
                          }}
                        >
                          <motion.div
                            className="w-full h-0.5 bg-[#FF0101] relative"
                            animate={{ 
                              backgroundColor: ["#1E3B8B", "#1E3B8B", "#1E3B8B", "#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                            }}
                            transition={{ 
                              duration: 8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 1]
                            }}
                          >
                            <motion.div
                              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-[#FF0101] border-t-2 border-b-2 border-t-transparent border-b-transparent"
                              animate={{ 
                                borderLeftColor: ["#1E3B8B", "#1E3B8B", "#1E3B8B", "#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                              }}
                              transition={{ 
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 1]
                              }}
                            />
                          </motion.div>
                        </motion.div>

                        {/* Step 4: Deploy */}
                        <motion.div 
                          className="w-24 h-24 bg-white border-2 border-[#1E3B8B] rounded-xl p-2 shadow-lg flex flex-col items-center justify-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: [0, 0, 0, 0, 1, 1, 1, 1, 0.7, 1],
                            scale: [0.8, 0.8, 0.8, 0.8, 1, 1.05, 1, 1, 1, 1],
                            borderColor: ["#1E3B8B", "#1E3B8B", "#1E3B8B", "#1E3B8B", "#1E3B8B", "#FF0101", "#FF0101", "#FF0101", "#1E3B8B", "#1E3B8B"]
                          }}
                          transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1]
                          }}
                        >
                          <motion.div
                            className="w-8 h-8 mb-2"
                            animate={{ 
                              y: [0, -5, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: 3.5
                            }}
                          >
                            {/* Rocket Icon */}
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#1E3B8B]">
                              <path d="M12 2.5c0 0 4.5 2.04 4.5 10.5 0 2.49-1.04 4.5-2.5 4.5s-2.5-2.01-2.5-4.5S10.5 2.5 12 2.5zM12 2.5c0 0-4.5 2.04-4.5 10.5 0 2.49 1.04 4.5 2.5 4.5s2.5-2.01 2.5-4.5S13.5 2.5 12 2.5z" fill="currentColor"/>
                      </svg>
                          </motion.div>
                          <motion.div
                            className="w-6 h-6 mb-2"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 4
                            }}
                          >
                            {/* Launch Icon */}
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#FF0101]">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                            </svg>
                          </motion.div>
                          <h5 className="text-xs font-semibold text-gray-800 text-center">Deploy</h5>
                        </motion.div>

                      </div>
                      </div>
                  </motion.div>
                    </div>
              </motion.div>

            </div>
          </section>
        </div>
      </section>

      {/* Automated Deployment Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Automated End-to-End Deployment
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deploy your AI agents across any cloud platform with our automated infrastructure management
            </p>
                        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Cloud className="h-8 w-8 text-white" />
                      </div>
              <h3 className="text-xl font-bold mb-2">AWS</h3>
              <p className="text-gray-300 mb-4">Amazon Web Services with EC2, Lambda, ECS, and SageMaker integration</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  Auto-scaling infrastructure
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  Serverless deployment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  Cost optimization
                </li>
              </ul>
                    </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Server className="h-8 w-8 text-white" />
                  </div>
              <h3 className="text-xl font-bold mb-2">Microsoft Azure</h3>
              <p className="text-gray-300 mb-4">Azure Cognitive Services, Functions, and Container Instances</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  Enterprise integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  Hybrid cloud support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  Security compliance
                </li>
              </ul>
              </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-white" />
                    </div>
              <h3 className="text-xl font-bold mb-2">Google Cloud</h3>
              <p className="text-gray-300 mb-4">GCP with Vertex AI, Cloud Functions, and Kubernetes Engine</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  AI/ML optimization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Global distribution
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Data analytics
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Ocean</h3>
              <p className="text-gray-300 mb-4">Cost-effective cloud solutions with Droplets and App Platform for scalable deployment</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  Simple deployment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  Predictable pricing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  Developer-friendly
                    </li>
                </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8">
                      <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Zero-Downtime Deployment</h3>
              <p className="text-lg mb-6">Automated CI/CD pipelines ensure seamless updates and rollbacks with zero business interruption</p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                  <GitBranch className="h-5 w-5" />
                  <span>Git Integration</span>
                        </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                  <Code2 className="h-5 w-5" />
                  <span>Auto Testing</span>
                      </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                  <Activity className="h-5 w-5" />
                  <span>Health Monitoring</span>
                    </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                  <Shield className="h-5 w-5" />
                  <span>Security Scanning</span>
                  </div>
              </div>
                    </div>
                        </div>
                      </div>
      </section>

      {/* AI Agents Section */}
      {/* Bouncy Cards AI Agents Section */}
      <BouncyCardsFeatures />






      {/* Parallax Sections */}
      <div className="bg-white">
        <TextParallaxContent
          imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          subheading="Beyond Simple Conversations"
          heading="Intelligent Automation"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
            <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
              Purpose-Built AI Agents
            </h2>
            <div className="col-span-1 md:col-span-8">
              <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                Our AI Agents are designed to go beyond simple conversations. They seamlessly integrate with your existing systems — CRM, ERP, HR, IT, and more — to deliver automated services, smarter workflows, and exceptional experiences for both customers and employees.
              </p>
              <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
                Powered by cutting-edge AI models including Gemini, GPT, DeepSeek, and more, our agents understand context, emotions, and intent to deliver personalized experiences that build lasting relationships.
              </p>
              <Link to="/Contact/" className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit inline-flex items-center gap-2">
                Explore AI Agents <ArrowRight className="inline" />
            </Link>
          </div>
        </div>
        </TextParallaxContent>

        <TextParallaxContent
          imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          subheading="Automated Deployment"
          heading="End-to-End Solutions"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
            <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
              Cloud-Native Deployment
            </h2>
            <div className="col-span-1 md:col-span-8">
              <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                Deploy your AI agents across any cloud platform with our automated infrastructure management. 
                We provide automated end-to-end deployment services for AWS, Azure, GCP, and Digital Ocean.
              </p>
              <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
                Our zero-downtime deployment ensures seamless updates and rollbacks with automated CI/CD pipelines. 
                Scale your AI infrastructure instantly and cost-effectively across multiple cloud providers.
              </p>
              <Link to="/Contact/" className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit inline-flex items-center gap-2">
                Deploy Now <ArrowRight className="inline" />
              </Link>
            </div>
          </div>
        </TextParallaxContent>

      </div>

    </div>
  );
};

export default AIAgents;
