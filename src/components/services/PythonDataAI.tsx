import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Brain, 
  Database, 
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
  Monitor,
  FileText,
  Camera,
  Mic,
  Search,
  Layers,
  Settings,
  ShoppingBag,
  Flask,
  GitBranch,
  Cloud,
  Server,
  Terminal,
  Package,
  TestTube,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  CpuIcon,
  Network,
  Lock,
  Unlock,
  Eye,
  MessageSquare
} from 'lucide-react';

const PythonDataAI: React.FC = () => {
  const services = [
    {
      icon: <Brain className="h-12 w-12 text-teal-600" />,
      title: "Machine Learning Development",
      description: "Custom ML models and algorithms built with Python's powerful ecosystem for predictive analytics and pattern recognition.",
      features: [
        "Custom ML model development",
        "Deep learning implementations",
        "Predictive analytics",
        "Model optimization & tuning"
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-teal-600" />,
      title: "Data Engineering & ETL",
      description: "Robust data pipelines and ETL processes using Python for efficient data processing and transformation.",
      features: [
        "Data pipeline development",
        "ETL process automation",
        "Data warehousing",
        "Real-time data processing"
      ]
    },
    {
      icon: <BarChart className="h-12 w-12 text-teal-600" />,
      title: "Data Analytics & Visualization",
      description: "Advanced analytics and interactive visualizations using Python's rich ecosystem of data science libraries.",
      features: [
        "Statistical analysis",
        "Interactive dashboards",
        "Data visualization",
        "Business intelligence"
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-teal-600" />,
      title: "AI-Powered Automation",
      description: "Intelligent automation solutions using Python to streamline business processes and workflows.",
      features: [
        "Process automation",
        "Workflow optimization",
        "RPA implementation",
        "Smart decision systems"
      ]
    },
    {
      icon: <Eye className="h-12 w-12 text-teal-600" />,
      title: "Computer Vision Solutions",
      description: "Advanced image and video processing applications using Python's computer vision libraries.",
      features: [
        "Image recognition",
        "Object detection",
        "Video analytics",
        "Facial recognition"
      ]
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-teal-600" />,
      title: "Natural Language Processing",
      description: "NLP applications and chatbots built with Python for intelligent text and speech processing.",
      features: [
        "Text analysis",
        "Sentiment analysis",
        "Chatbot development",
        "Language translation"
      ]
    }
  ];

  const technologies = [
    {
      name: "TensorFlow",
      description: "Open-source ML framework",
      icon: <Cpu className="h-8 w-8 text-teal-600" />
    },
    {
      name: "PyTorch",
      description: "Deep learning framework",
      icon: <Brain className="h-8 w-8 text-teal-600" />
    },
    {
      name: "Pandas",
      description: "Data manipulation library",
      icon: <Database className="h-8 w-8 text-teal-600" />
    },
    {
      name: "NumPy",
      description: "Numerical computing",
      icon: <BarChart className="h-8 w-8 text-teal-600" />
    },
    {
      name: "Scikit-learn",
      description: "Machine learning library",
      icon: <Code className="h-8 w-8 text-teal-600" />
    },
    {
      name: "OpenCV",
      description: "Computer vision library",
      icon: <Eye className="h-8 w-8 text-teal-600" />
    },
    {
      name: "SpaCy",
      description: "NLP library",
      icon: <MessageSquare className="h-8 w-8 text-teal-600" />
    },
    {
      name: "Flask/Django",
      description: "Web frameworks",
      icon: <Server className="h-8 w-8 text-teal-600" />
    },
    {
      name: "Jupyter",
      description: "Interactive notebooks",
      icon: <FileText className="h-8 w-8 text-teal-600" />
    },
    {
      name: "Docker",
      description: "Containerization",
      icon: <Package className="h-8 w-8 text-teal-600" />
    },
    {
      name: "Git",
      description: "Version control",
      icon: <GitBranch className="h-8 w-8 text-teal-600" />
    },
    {
      name: "AWS/Azure",
      description: "Cloud platforms",
      icon: <Cloud className="h-8 w-8 text-teal-600" />
    }
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "Medical data analysis, patient diagnostics, and drug discovery",
      icon: <Users className="h-8 w-8 text-teal-600" />,
      applications: [
        "Medical image analysis",
        "Patient data analytics",
        "Drug discovery algorithms",
        "Predictive diagnostics"
      ]
    },
    {
      title: "Finance",
      description: "Risk assessment, fraud detection, and algorithmic trading",
      icon: <BarChart3 className="h-8 w-8 text-teal-600" />,
      applications: [
        "Fraud detection systems",
        "Risk modeling",
        "Trading algorithms",
        "Credit scoring"
      ]
    },
    {
      title: "E-commerce",
      description: "Recommendation systems, inventory optimization, and customer analytics",
      icon: <ShoppingBag className="h-8 w-8 text-teal-600" />,
      applications: [
        "Product recommendations",
        "Demand forecasting",
        "Customer segmentation",
        "Price optimization"
      ]
    },
    {
      title: "Manufacturing",
      description: "Quality control, predictive maintenance, and supply chain optimization",
      icon: <Settings className="h-8 w-8 text-teal-600" />,
      applications: [
        "Quality inspection",
        "Predictive maintenance",
        "Supply chain analytics",
        "Production optimization"
      ]
    }
  ];

  const processSteps = [
    {
      title: "Requirement Analysis",
      description: "Understanding business needs and defining project scope",
      icon: <Target className="h-6 w-6 text-teal-600" />
    },
    {
      title: "Data Assessment",
      description: "Evaluating data quality and availability for model development",
      icon: <Database className="h-6 w-6 text-teal-600" />
    },
    {
      title: "Model Development",
      description: "Building and training custom Python-based AI models",
      icon: <Brain className="h-6 w-6 text-teal-600" />
    },
    {
      title: "Testing & Validation",
      description: "Rigorous testing to ensure model accuracy and performance",
      icon: <TestTube className="h-6 w-6 text-teal-600" />
    },
    {
      title: "Deployment",
      description: "Seamless integration and deployment of Python solutions",
      icon: <Rocket className="h-6 w-6 text-teal-600" />
    },
    {
      title: "Monitoring",
      description: "Continuous monitoring and model optimization",
      icon: <Monitor className="h-6 w-6 text-teal-600" />
    }
  ];

  const benefits = [
    {
      title: "Scalable Solutions",
      description: "Python's scalability allows our solutions to grow with your business needs",
      icon: <TrendingUp className="h-8 w-8 text-teal-600" />
    },
    {
      title: "Rapid Development",
      description: "Fast development cycles with Python's extensive libraries and frameworks",
      icon: <Zap className="h-8 w-8 text-teal-600" />
    },
    {
      title: "Cost-Effective",
      description: "Open-source ecosystem reduces development and licensing costs",
      icon: <Award className="h-8 w-8 text-teal-600" />
    },
    {
      title: "Future-Proof",
      description: "Python's growing ecosystem ensures long-term viability and support",
      icon: <Star className="h-8 w-8 text-teal-600" />
    }
  ];

  const stats = [
    { number: "500+", label: "Python Projects" },
    { number: "50+", label: "AI Models Deployed" },
    { number: "95%", label: "Client Satisfaction" },
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
                PYTHON FOR DATA & AI PROJECTS
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business<br />
                with Python-Powered<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  AI Solutions
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
                Harness the power of Python's rich ecosystem to build scalable, intelligent solutions 
                that drive business growth through advanced data science and artificial intelligence.
              </p>
              
              {/* CTA Button */}
              <Link
                to="/Contact/"
                className="relative group px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 bg-teal-600 text-white hover:bg-teal-700"
              >
                <span>Start Your Python AI Journey</span>
                <ArrowRight className="w-5 h-5" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
              </Link>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 h-96 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Python AI Development"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Do We Do?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              We specialize in developing cutting-edge Python-based AI solutions that transform businesses. 
              Our expertise spans from machine learning and data engineering to computer vision and natural 
              language processing, delivering scalable solutions that drive real business value.
            </p>
            
            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{benefit.title}</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Python AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Python-based solutions for data science and artificial intelligence
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

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Python Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge Python libraries and frameworks for building robust AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-teal-100">
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

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Python AI solutions are transforming businesses across multiple industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-100 shadow-lg">
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering high-quality Python AI solutions
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
              Why Choose Our Python AI Solutions?
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Proven expertise in Python-based AI development and data science
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
            Ready to Build Your Python AI Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our Python expertise can transform your business with intelligent, 
            scalable AI solutions that drive growth and innovation.
          </p>
          <Link
            to="/Contact/"
            className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center gap-2"
          >
            Start Your Python AI Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PythonDataAI;
