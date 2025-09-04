import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  MessageSquare, 
  Brain, 
  Zap, 
  Users, 
  Shield, 
  TrendingUp, 
  Globe, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Cpu,
  Database,
  Monitor,
  FileText,
  Camera,
  Mic,
  Search,
  Layers,
  Code,
  Settings,
  ShoppingBag
} from 'lucide-react';

const ComputerVisionNLP: React.FC = () => {
  const services = [
    {
      icon: <Eye className="h-12 w-12 text-teal-600" />,
      title: "Computer Vision Solutions",
      description: "Advanced image and video processing capabilities that transform visual data into actionable insights.",
      features: [
        "Object detection & recognition",
        "Facial recognition systems",
        "Image classification",
        "Video analytics"
      ]
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-teal-600" />,
      title: "Natural Language Processing",
      description: "Intelligent text and speech processing that understands and generates human language naturally.",
      features: [
        "Text analysis & sentiment",
        "Language translation",
        "Speech recognition",
        "Chatbot development"
      ]
    },
    {
      icon: <Brain className="h-12 w-12 text-teal-600" />,
      title: "Machine Learning Models",
      description: "Custom ML models trained on your specific data to solve unique business challenges.",
      features: [
        "Custom model training",
        "Predictive analytics",
        "Pattern recognition",
        "Real-time processing"
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-teal-600" />,
      title: "AI-Powered Automation",
      description: "Intelligent automation solutions that streamline processes and boost productivity.",
      features: [
        "Process automation",
        "Workflow optimization",
        "Decision support",
        "Predictive maintenance"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-teal-600" />,
      title: "Personalized Experiences",
      description: "AI-driven personalization that enhances user engagement and customer satisfaction.",
      features: [
        "User behavior analysis",
        "Content personalization",
        "Recommendation engines",
        "Customer insights"
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-teal-600" />,
      title: "Security & Compliance",
      description: "Advanced security solutions with AI-powered threat detection and compliance monitoring.",
      features: [
        "Threat detection",
        "Fraud prevention",
        "Compliance monitoring",
        "Data protection"
      ]
    }
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "Medical image analysis, patient data processing, and diagnostic assistance",
      icon: <Users className="h-8 w-8 text-teal-600" />,
      applications: [
        "Medical imaging analysis",
        "Patient record processing",
        "Diagnostic assistance",
        "Drug discovery support"
      ]
    },
    {
      title: "Manufacturing",
      description: "Quality control, predictive maintenance, and production optimization",
      icon: <Settings className="h-8 w-8 text-teal-600" />,
      applications: [
        "Quality inspection",
        "Predictive maintenance",
        "Production optimization",
        "Supply chain analytics"
      ]
    },
    {
      title: "Retail",
      description: "Customer behavior analysis, inventory management, and personalized marketing",
      icon: <ShoppingBag className="h-8 w-8 text-teal-600" />,
      applications: [
        "Customer analytics",
        "Inventory optimization",
        "Personalized marketing",
        "Visual search"
      ]
    },
    {
      title: "Finance",
      description: "Fraud detection, risk assessment, and automated trading systems",
      icon: <BarChart3 className="h-8 w-8 text-teal-600" />,
      applications: [
        "Fraud detection",
        "Risk assessment",
        "Trading algorithms",
        "Document processing"
      ]
    }
  ];

  const technologies = [
    {
      name: "TensorFlow",
      description: "Open-source machine learning framework",
      icon: <Cpu className="h-8 w-8 text-teal-600" />
    },
    {
      name: "PyTorch",
      description: "Deep learning framework for research and production",
      icon: <Brain className="h-8 w-8 text-teal-600" />
    },
    {
      name: "OpenCV",
      description: "Computer vision library for image processing",
      icon: <Eye className="h-8 w-8 text-teal-600" />
    },
    {
      name: "SpaCy",
      description: "Industrial-strength natural language processing",
      icon: <MessageSquare className="h-8 w-8 text-teal-600" />
    },
    {
      name: "Hugging Face",
      description: "Leading platform for NLP models and tools",
      icon: <Globe className="h-8 w-8 text-teal-600" />
    },
    {
      name: "Scikit-learn",
      description: "Machine learning library for Python",
      icon: <Code className="h-8 w-8 text-teal-600" />
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Requirement Analysis",
      description: "Understanding your business needs and defining project objectives",
      icon: <Target className="h-6 w-6 text-teal-600" />
    },
    {
      number: "02",
      title: "Data Collection & Preparation",
      description: "Gathering and preprocessing data for model training",
      icon: <Database className="h-6 w-6 text-teal-600" />
    },
    {
      number: "03",
      title: "Model Development",
      description: "Building and training custom AI models for your specific use case",
      icon: <Brain className="h-6 w-6 text-teal-600" />
    },
    {
      number: "04",
      title: "Testing & Validation",
      description: "Rigorous testing to ensure accuracy and performance",
      icon: <CheckCircle className="h-6 w-6 text-teal-600" />
    },
    {
      number: "05",
      title: "Deployment & Integration",
      description: "Seamless integration with your existing systems",
      icon: <Rocket className="h-6 w-6 text-teal-600" />
    },
    {
      number: "06",
      title: "Monitoring & Maintenance",
      description: "Continuous monitoring and model optimization",
      icon: <Monitor className="h-6 w-6 text-teal-600" />
    }
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate" },
    { number: "10x", label: "Faster Processing" },
    { number: "50+", label: "Models Deployed" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Service Title */}
              <div className="text-teal-600 font-bold text-sm uppercase tracking-wider">
                COMPUTER VISION & NLP APPLICATIONS
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business<br />
                with Intelligent<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Vision & Language AI
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
                Harness the power of Computer Vision and Natural Language Processing to automate processes, 
                enhance decision-making, and create personalized experiences that drive business growth.
              </p>
              
              {/* CTA Button */}
              <Link
                to="/Contact/"
                className="relative group px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 bg-teal-600 text-white hover:bg-teal-700"
              >
                <span>Start Your AI Transformation</span>
                <ArrowRight className="w-5 h-5" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
              </Link>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 h-96 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Computer Vision & NLP Technology"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Do We Do?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              We provide a comprehensive and intelligent approach to incorporating Computer Vision and NLP 
              services into business operations by delivering best-in-business solutions for our clients. 
              From AI adoption to hyper-personalized solutions, we've got you covered. Our Computer Vision 
              and NLP services are built to simplify the complexities in your business and help you scale 
              to the next level.
            </p>
            
            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Intelligent Solutions</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  Advanced AI algorithms that understand your business needs and deliver tailored results
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Seamless Integration</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  Smooth integration with existing systems to enhance productivity without disruption
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Scalable Growth</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  Solutions that grow with your business and adapt to changing market demands
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Computer Vision and NLP solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100 flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
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

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Computer Vision and NLP solutions are transforming businesses across multiple industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 border border-teal-100">
                <div className="flex items-center mb-4">
                  {industry.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-3">{industry.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {industry.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge tools and frameworks for building robust AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex justify-center mb-4">
                  {tech.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering high-quality Computer Vision and NLP solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 border border-teal-100">
                                 <div className="flex items-center mb-4">
                   <div className="flex items-center">
                     {step.icon}
                   </div>
                 </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Proven results and expertise in Computer Vision and NLP applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-teal-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's Discuss How We Can Reshape Your Business with AI
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            To empower businesses through innovative Computer Vision and NLP solutions that drive efficiency, 
            foster growth, and enhance customer engagement.
          </p>
          <Link
            to="/Contact/"
            className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center gap-2"
          >
            Start Your AI Journey
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ComputerVisionNLP;
