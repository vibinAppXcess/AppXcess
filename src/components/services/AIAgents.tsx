import React, { useRef } from 'react';
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
  Target,
  Zap, 
  Database, 
  Cloud, 
  Settings, 
  Workflow, 
  Cpu, 
  Globe, 
  Lock, 
  Activity, 
  Layers, 
  Bot, 
  Sparkles, 
  Server, 
  Network, 
  Code2, 
  GitBranch, 
  Rocket,
  PencilLine
} from 'lucide-react';
import aiAgentsHeroImg from '../../assets/images/man-robot-working-together-high-tech-office.jpg';

// TimelineContent Component
const TimelineContent = ({ as: Component, animationNum, timelineRef, customVariants, className, children, ...props }) => {
  return (
    <motion.div
      ref={timelineRef}
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={animationNum}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Parallax Components
const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
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

const StickyImage = ({ imgUrl }) => {
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

const OverlayCopy = ({ subheading, heading }) => {
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

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <Link to="/Contact/" className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit inline-flex items-center gap-2">
        Learn more <ArrowRight className="inline" />
      </Link>
    </div>
  </div>
);

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

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};

const AIAgents: React.FC = () => {
  const aiAgents = [
    {
      icon: <Users className="h-12 w-12 text-teal-600" />,
      title: "Customer Experience Agent",
      description: "Revolutionary 24/7 customer support that goes beyond simple Q&A. Our CX Agent understands context, emotions, and intent to deliver personalized experiences that build lasting relationships. Integrated with your CRM, it provides real-time insights and seamless handoffs to human agents when needed.",
      features: [
        "Multi-channel support (chat, voice, email, social)",
        "Emotional intelligence & sentiment analysis", 
        "Proactive customer outreach",
        "Real-time CRM integration",
        "Conversation analytics & insights",
        "Seamless human escalation"
      ]
    },
    {
      icon: <Monitor className="h-12 w-12 text-teal-600" />,
      title: "IT Operations Agent",
      description: "Your intelligent IT guardian that never sleeps. This agent continuously monitors your infrastructure, predicts issues before they occur, and automatically resolves common problems. It learns from every incident, improving its response time and accuracy with each interaction.",
      features: [
        "Predictive incident management", 
        "Automated root cause analysis", 
        "Self-healing infrastructure",
        "Performance optimization",
        "Security threat detection",
        "Integration with ITSM tools"
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-teal-600" />,
      title: "Security Operations Agent",
      description: "Advanced cybersecurity guardian that protects your organization 24/7. This agent monitors AI tool usage, detects anomalies, enforces security policies, and ensures compliance across all systems. It provides real-time threat intelligence and automated response capabilities.",
      features: [
        "AI tool monitoring & governance", 
        "Real-time threat detection", 
        "Automated incident response",
        "Compliance management",
        "Data privacy protection",
        "Security policy enforcement"
      ]
    },
    {
      icon: <FileText className="h-12 w-12 text-teal-600" />,
      title: "Document Intelligence Agent",
      description: "Transform unstructured documents into actionable insights. This agent doesn't just read text—it understands context, extracts key information, validates data accuracy, and seamlessly integrates findings into your business workflows. Perfect for processing invoices, contracts, reports, and forms.",
      features: [
        "Advanced OCR & text extraction", 
        "Intelligent data validation", 
        "Workflow automation",
        "Multi-format support",
        "Error detection & correction",
        "API integration capabilities"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-teal-600" />,
      title: "Marketing Intelligence Agent",
      description: "Your AI-powered marketing strategist that works around the clock. This agent analyzes market trends, optimizes campaigns in real-time, generates personalized content, and identifies new opportunities. It integrates with your marketing stack to deliver measurable ROI improvements.",
      features: [
        "Campaign optimization & A/B testing", 
        "Content generation & personalization", 
        "Lead scoring & qualification",
        "Market trend analysis",
        "ROI tracking & reporting",
        "Multi-platform campaign management"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-teal-600" />,
      title: "Human Resources Agent",
      description: "Streamline HR operations with intelligent automation. This agent handles everything from recruitment screening to employee onboarding, performance reviews, and policy inquiries. It ensures consistent, fair, and efficient HR processes while maintaining the human touch where needed.",
      features: [
        "Automated recruitment screening", 
        "Employee onboarding workflows", 
        "Performance review assistance",
        "HR policy guidance",
        "Benefits administration",
        "Employee sentiment analysis"
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-teal-600" />,
      title: "Data Analytics Agent",
      description: "Transform raw data into actionable business insights. This agent continuously analyzes your data, identifies patterns, generates reports, and provides predictive analytics. It democratizes data access across your organization, enabling data-driven decision making at every level.",
      features: [
        "Automated report generation", 
        "Predictive analytics & forecasting", 
        "Anomaly detection",
        "Natural language queries",
        "Real-time dashboards",
        "Data quality monitoring"
      ]
    },
    {
      icon: <Workflow className="h-12 w-12 text-teal-600" />,
      title: "Process Automation Agent",
      description: "Orchestrate complex business processes with intelligent automation. This agent maps, optimizes, and automates end-to-end workflows across departments. It learns from process patterns, suggests improvements, and ensures consistent execution while maintaining audit trails.",
      features: [
        "End-to-end workflow automation", 
        "Process optimization recommendations", 
        "Exception handling",
        "Audit trail maintenance",
        "Cross-system integration",
        "Performance monitoring"
      ]
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-teal-600" />,
      title: "Sales Intelligence Agent",
      description: "Accelerate sales performance with AI-powered insights and automation. This agent analyzes customer interactions, predicts buying behavior, suggests next best actions, and automates follow-ups. It integrates with your CRM to provide sales teams with the intelligence they need to close more deals.",
      features: [
        "Lead scoring & qualification", 
        "Sales opportunity analysis", 
        "Automated follow-up sequences",
        "Customer behavior prediction",
        "Sales performance insights",
        "CRM data enrichment"
      ]
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
      title: "Contextual",
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
      title: "Secure AI strategy",
      description: "Enterprise-grade security and compliance for AI implementation"
    }
  ];

  

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
                    boxShadow: [
                      "0 0 30px rgba(20, 184, 166, 0.3)",
                      "0 0 50px rgba(20, 184, 166, 0.6)",
                      "0 0 30px rgba(20, 184, 166, 0.3)"
                    ]
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
                      boxShadow: [
                        `0 0 20px rgba(59, 130, 246, 0.3)`,
                        `0 0 40px rgba(59, 130, 246, 0.6)`,
                        `0 0 20px rgba(59, 130, 246, 0.3)`
                      ],
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
                      <motion.animate
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
                      <motion.animate
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
                    <motion.animate
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

                        {/* Step 2: Skills Library */}
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

                        {/* Step 3: Deploy */}
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

                        {/* Step 4: Custom */}
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


      {/* End-to-End Workflow Automation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto p-4">
          <article className="max-w-5xl mx-auto py-10 text-center space-y-2 px-8">
            <motion.h1
              className="md:text-5xl sm:text-4xl text-3xl font-medium"
              initial={{ y: -20, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0, duration: 0.5 }}
              viewport={{ once: true }}
            >
              End-to-End Workflow Automation
            </motion.h1>
            <motion.p
              className="text-gray-600 sm:text-base text-sm sm:w-[70%] w-full mx-auto"
              initial={{ y: -20, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              From simple tasks to complex business processes, our AI agents orchestrate complete workflows with intelligent decision-making
            </motion.p>
          </article>
          
          <div className="grid grid-cols-12 gap-4">
            {/* Process Orchestration Steps */}
            <motion.div
              className="lg:col-span-5 sm:col-span-6 col-span-12 relative w-full rounded-xl overflow-hidden border border-neutral-200 bg-white"
              initial={{ y: -20, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0, duration: 0.5 }}
              viewport={{ once: true }}
            >
              
              <div className="p-6 space-y-4 min-h-[400px] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Intelligent Process Orchestration</h3>
                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Process Discovery & Mapping",
                        description: "AI agents analyze your existing workflows, identify bottlenecks, and map optimal process flows across all systems.",
                        details: "Comprehensive analysis of current processes, stakeholder interviews, and data flow mapping to create a complete picture of your operations.",
                        features: ["Workflow Analysis", "Bottleneck Identification", "Stakeholder Mapping"],
                        color: "teal"
                      },
                      {
                        step: "2", 
                        title: "Intelligent Automation Design",
                        description: "Design custom automation workflows that adapt to your business rules, exceptions, and changing requirements.",
                        details: "Create intelligent automation blueprints that handle complex business logic, exception scenarios, and dynamic rule changes.",
                        features: ["Custom Workflows", "Exception Handling", "Rule Engine"],
                        color: "blue"
                      },
                      {
                        step: "3",
                        title: "Seamless Integration", 
                        description: "Connect all your systems, databases, and applications for unified data flow and process execution.",
                        details: "Establish secure, real-time connections between all your business systems for seamless data synchronization and process orchestration.",
                        features: ["API Integration", "Real-time Sync", "Security Protocols"],
                        color: "purple"
                      },
                      {
                        step: "4",
                        title: "Continuous Optimization",
                        description: "AI agents continuously monitor, learn, and optimize processes for maximum efficiency and performance.",
                        details: "Ongoing monitoring and machine learning algorithms that identify improvement opportunities and automatically optimize workflows.",
                        features: ["Performance Monitoring", "ML Optimization", "Predictive Analytics"],
                        color: "green"
                      }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-4"
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.8 + i * 0.2, duration: 0.6 }}
                      >
                        <motion.div 
                          className={`w-8 h-8 bg-${item.color}-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className={`text-${item.color}-600 font-bold text-sm`}>{item.step}</span>
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                          <p className="text-gray-500 text-xs">{item.details}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
              </div>

                <article className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-white/20">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Process Orchestration
            </h3>
                  <p className="text-sm text-gray-600">
                    AI-powered workflow automation that adapts to your business needs
                  </p>
                </article>
                    </div>
            </motion.div>


            {/* AI Integration Benefits */}
            <motion.div
              className="lg:col-span-3 sm:col-span-6 col-span-12 border rounded-lg p-4 group border-neutral-200"
              initial={{ y: -20, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.h1
                className="text-4xl font-semibold"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                AI Integration Benefits
              </motion.h1>
              <motion.p
                className="text-sm"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              >
                Transform your business operations with intelligent automation
              </motion.p>
              
              <div className="space-y-4 mt-6">
                {[
                  {
                    icon: <Zap className="h-6 w-6 text-yellow-500" />,
                    title: "Lightning Fast Processing",
                    description: "Reduce processing time by up to 90% with AI-powered automation",
                    color: "yellow"
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-green-500" />,
                    title: "Enhanced Security",
                    description: "Advanced security protocols and compliance monitoring built-in",
                    color: "green"
                  },
                  {
                    icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
                    title: "Scalable Growth",
                    description: "Automatically scale operations as your business grows",
                    color: "blue"
                  },
                  {
                    icon: <Target className="h-6 w-6 text-purple-500" />,
                    title: "Precision Accuracy",
                    description: "99.9% accuracy rate in automated decision-making processes",
                    color: "purple"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-all duration-300"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 2.0 + i * 0.2,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div 
                      className="flex-shrink-0 p-2 rounded-lg bg-white shadow-sm"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                  </motion.div>
                ))}
                      </div>
            </motion.div>

            {/* Implementation Timeline */}
            <motion.div
              className="lg:col-span-4 sm:col-span-6 col-span-12 border rounded-lg p-4 group border-neutral-200"
              initial={{ y: -20, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 1.0, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.h1
                className="text-4xl font-semibold"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              >
                Implementation Timeline
              </motion.h1>
              <motion.p
                className="text-sm"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.0, duration: 0.5 }}
              >
                From consultation to full deployment in record time
              </motion.p>
              
              <div className="space-y-4 mt-6">
                {[
                  {
                    week: "Week 1-2",
                    title: "Discovery & Analysis",
                    description: "Comprehensive assessment of your current processes and requirements",
                    status: "Planning",
                    color: "blue"
                  },
                  {
                    week: "Week 3-4",
                    title: "Design & Architecture",
                    description: "Custom AI agent design tailored to your specific business needs",
                    status: "Design",
                    color: "purple"
                  },
                  {
                    week: "Week 5-6",
                    title: "Development & Testing",
                    description: "Rigorous development and testing of your AI automation solution",
                    status: "Development",
                    color: "green"
                  },
                  {
                    week: "Week 7-8",
                    title: "Deployment & Training",
                    description: "Seamless deployment and comprehensive team training",
                    status: "Deployment",
                    color: "orange"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-all duration-300"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 2.2 + i * 0.2,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            item.color === "blue" ? "bg-blue-100 text-blue-700" :
                            item.color === "purple" ? "bg-purple-100 text-purple-700" :
                            item.color === "green" ? "bg-green-100 text-green-700" :
                            "bg-orange-100 text-orange-700"
                          }`}>
                            {item.week}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.color === "blue" ? "bg-blue-50 text-blue-600" :
                            item.color === "purple" ? "bg-purple-50 text-purple-600" :
                            item.color === "green" ? "bg-green-50 text-green-600" :
                            "bg-orange-50 text-orange-600"
                          }`}>
                            {item.status}
                          </span>
                    </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                      <motion.div 
                        className={`w-3 h-3 rounded-full ${
                          item.color === "blue" ? "bg-blue-500" :
                          item.color === "purple" ? "bg-purple-500" :
                          item.color === "green" ? "bg-green-500" :
                          "bg-orange-500"
                        }`}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    {i < 3 && (
                      <div className={`absolute -bottom-2 left-6 w-0.5 h-4 ${
                        item.color === "blue" ? "bg-blue-200" :
                        item.color === "purple" ? "bg-purple-200" :
                        item.color === "green" ? "bg-green-200" :
                        "bg-orange-200"
                      }`} />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            </div>


          <motion.div 
            className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white mt-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Workflows?</h3>
              <p className="text-lg mb-6">Let our AI experts analyze your processes and design the perfect automation solution for your business</p>
              <Link
                to="/Contact/"
                className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Start Your Automation Journey
                <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          </motion.div>
        </div>
      </section>




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

        <TextParallaxContent
          imgUrl="/src/assets/images/ai-artificial-intelligence-data-analytics-professional-monitors-aidriven-analytics-dashboards-evaluate-web-traffic-customer-engagement-real-time.jpg"
          subheading="Enterprise Ready"
          heading="Transform Your Operations"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
            <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
              Purpose-Built Solutions
            </h2>
            <div className="col-span-1 md:col-span-8">
              <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                From Customer Experience Agents to Security Operations, our AI agents are purpose-built for every business function. 
                Each agent is designed to understand your specific industry requirements and deliver measurable results.
              </p>
              <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
                Whether you need IT Operations automation, Document Intelligence, or Marketing Intelligence, 
                our agents integrate seamlessly with your existing systems to deliver exceptional experiences.
              </p>
              <Link to="/Contact/" className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit inline-flex items-center gap-2">
                Get Custom Solution <ArrowRight className="inline" />
              </Link>
            </div>
          </div>
        </TextParallaxContent>
      </div>

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
