import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
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
  Network,
  Lock,
  Unlock,
  BookOpen,
  Download,
  Upload,
  Play,
  Pause,
  RefreshCw,
  Maximize,
  Minimize,
  Filter,
  SortAsc,
  SortDesc,
  Calendar,
  Clock,
  MapPin,
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';

const HuggingFace: React.FC = () => {
  const services = [
    {
      icon: <Brain className="h-12 w-12 text-teal-600" />,
      title: "Pre-trained Language Models",
      description: "Access and fine-tune state-of-the-art language models for your specific use cases.",
      features: [
        "BERT, GPT, T5 model integration",
        "Custom model fine-tuning",
        "Multi-language support",
        "Model optimization & deployment"
      ]
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-teal-600" />,
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for text analysis, sentiment, and language understanding.",
      features: [
        "Text classification & sentiment analysis",
        "Named entity recognition",
        "Question answering systems",
        "Text summarization"
      ]
    },
    {
      icon: <Eye className="h-12 w-12 text-teal-600" />,
      title: "Computer Vision Models",
      description: "Image and video processing using cutting-edge computer vision models.",
      features: [
        "Image classification & object detection",
        "Facial recognition & analysis",
        "Video content analysis",
        "Medical imaging solutions"
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-teal-600" />,
      title: "Model Hub Integration",
      description: "Seamless integration with Hugging Face's extensive model repository.",
      features: [
        "Access to 100,000+ models",
        "Model versioning & management",
        "Community model sharing",
        "Automated model deployment"
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-teal-600" />,
      title: "Dataset Management",
      description: "Comprehensive dataset handling and preprocessing for ML projects.",
      features: [
        "Dataset versioning & tracking",
        "Data preprocessing pipelines",
        "Quality assessment tools",
        "Collaborative data sharing"
      ]
    },
    {
      icon: <Cloud className="h-12 w-12 text-teal-600" />,
      title: "Inference API Services",
      description: "Scalable cloud-based inference for production-ready AI applications.",
      features: [
        "High-performance inference",
        "Auto-scaling capabilities",
        "Cost-effective pricing",
        "Global CDN distribution"
      ]
    }
  ];

  const tools = [
    {
      name: "Transformers Library",
      description: "State-of-the-art NLP models with easy-to-use APIs",
      icon: <Code className="h-8 w-8 text-teal-600" />
    },
    {
      name: "Datasets Library",
      description: "Efficient dataset loading and preprocessing",
      icon: <Database className="h-8 w-8 text-teal-600" />
    },
    {
      name: "Tokenizers",
      description: "Fast and efficient text tokenization",
      icon: <FileText className="h-8 w-8 text-teal-600" />
    },
    {
      name: "Accelerate",
      description: "Multi-GPU and distributed training",
      icon: <Zap className="h-8 w-8 text-teal-600" />
    },
    {
      name: "Evaluate",
      description: "Comprehensive model evaluation metrics",
      icon: <BarChart className="h-8 w-8 text-teal-600" />
    },
    {
      name: "Gradio",
      description: "Interactive ML model demos and web apps",
      icon: <Monitor className="h-8 w-8 text-teal-600" />
    }
  ];

  const useCases = [
    {
      title: "Customer Support Automation",
      description: "Build intelligent chatbots and support systems using pre-trained language models.",
      icon: <MessageSquare className="h-8 w-8 text-teal-600" />,
      benefits: ["24/7 customer support", "Reduced response time", "Improved customer satisfaction"]
    },
    {
      title: "Content Moderation",
      description: "Automated content filtering and moderation using advanced NLP models today.",
      icon: <Shield className="h-8 w-8 text-teal-600" />,
      benefits: ["Real-time content filtering", "Reduced manual review", "Consistent moderation"]
    },
    {
      title: "Document Analysis",
      description: "Extract insights and information from documents using OCR and NLP effectively.",
      icon: <FileText className="h-8 w-8 text-teal-600" />,
      benefits: ["Automated data extraction", "Improved accuracy", "Faster processing"]
    },
    {
      title: "Image Recognition",
      description: "Implement computer vision solutions for object detection and classification.",
      icon: <Eye className="h-8 w-8 text-teal-600" />,
      benefits: ["Automated image analysis", "Quality control", "Visual search capabilities"]
    }
  ];

  const stats = [
    { number: "100K+", label: "Pre-trained Models", icon: Brain },
    { number: "50K+", label: "Datasets Available", icon: Database },
    { number: "1M+", label: "Active Users", icon: Users },
    { number: "99.9%", label: "Uptime SLA", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4 mr-2" />
              AI & NLP Tools
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hugging Face
              <span className="block text-teal-600">AI & NLP Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Leverage the power of Hugging Face's ecosystem to build, deploy, and scale AI applications with state-of-the-art models and tools.
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
                href="https://huggingface.co"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors inline-flex items-center"
              >
                Explore Hugging Face
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-teal-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-teal-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive AI & NLP Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From model selection to deployment, we provide end-to-end solutions using Hugging Face's powerful ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-teal-100 p-4 rounded-xl w-fit mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hugging Face Tools & Libraries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the complete Hugging Face ecosystem with our expert implementation and optimization services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4 group-hover:shadow-md transition-shadow duration-300">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Hugging Face models can transform your business operations and customer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-teal-100 p-3 rounded-lg mr-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {useCase.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                      {benefit}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to implementing Hugging Face solutions that ensures success and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Analyze your requirements and select the most suitable Hugging Face models and tools.",
                icon: <Search className="h-8 w-8 text-teal-600" />
              },
              {
                step: "02",
                title: "Model Selection",
                description: "Choose from Hugging Face's extensive model library or fine-tune models for your specific needs.",
                icon: <Brain className="h-8 w-8 text-teal-600" />
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Implement and rigorously test your AI solution with comprehensive quality assurance.",
                icon: <Code className="h-8 w-8 text-teal-600" />
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Deploy your solution with monitoring, maintenance, and ongoing optimization support.",
                icon: <Rocket className="h-8 w-8 text-teal-600" />
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-teal-100 p-4 rounded-full w-fit mx-auto mb-6">
                  {process.icon}
                </div>
                <div className="text-2xl font-bold text-teal-600 mb-2">{process.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
            Let our experts help you leverage Hugging Face's powerful AI ecosystem to build innovative solutions that drive real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://huggingface.co"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors inline-flex items-center"
            >
              Explore Hugging Face
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HuggingFace;
