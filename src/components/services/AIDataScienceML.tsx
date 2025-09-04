import React, { useState } from 'react';
import { Brain, LineChart, Database, Settings, Cpu, Eye, MessageSquare, Rocket, Shield, Cloud, Gauge } from 'lucide-react';

const AIDataScienceML: React.FC = () => {
  const consultingCapabilities = [
    {
      title: 'Data strategy consulting',
      description:
        'Get a precise strategy to transform your data into business value, with a clear roadmap prioritizing high-impact initiatives and measurable outcomes. We assess data maturity, align with objectives, and design scalable data architectures.',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop'
    },
    {
      title: 'Data management',
      description:
        'Build a reliable data foundation that eliminates inconsistencies and ensures data quality. We design pipelines across diverse sources, implement robust transformations, and unify datasets with entity resolution and normalization.',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop'
    },
    {
      title: 'Predictive modeling and refinement',
      description:
        'Transform historical data into accurate forecasts and decision support. From ensemble learning to deep architectures, we set up rigorous validation and continuous model improvement across business use cases.',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop'
    },
    {
      title: 'AI and ML integration',
      description:
        'Optimize the data science lifecycle with automation—from preparation and exploration to deployment and monitoring. We evaluate AI readiness, identify high-impact use cases, and embed automation and governance end-to-end.',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop'
    }
  ];

  const mlCapabilities = [
    {
      icon: LineChart,
      title: 'Custom ML model development',
      description:
        'Personalize experiences and uncover insights with decision trees, random forests, gradient boosting, and regression models tuned to your data and deployed for real-world use.',
      tags: ['Forecasting', 'Churn', 'Pricing']
    },
    {
      icon: MessageSquare,
      title: 'NLP solutions',
      description:
        'Extract insights from unstructured text for automation and personalization—classification, entity extraction, summarization, and retrieval-augmented generation.',
      tags: ['RAG', 'Chatbots', 'Search']
    },
    {
      icon: Eye,
      title: 'Computer vision',
      description:
        'High-accuracy vision systems for detection, segmentation, and tracking across retail, manufacturing, and logistics workflows.',
      tags: ['Detection', 'OCR', 'Quality']
    },
    {
      icon: Brain,
      title: 'Deep learning solutions',
      description:
        'Modern neural architectures tailored to your domain, with MLOps for reliable training, deployment, and monitoring.',
      tags: ['LLMs', 'Transformers', 'MLOps']
    }
  ];

  const valueProps = [
    { icon: Rocket, title: 'GenAI early-mover advantage', description: 'Move beyond PoCs to production-ready, scalable GenAI with measurable impact.' },
    { icon: Database, title: 'Data readiness for large-scale AI', description: 'Data engineering that ensures well-structured, high-quality data for high-impact AI.' },
    { icon: Settings, title: 'ThoughtMesh GenAI accelerator', description: 'Enterprise foundation with dataOps, governance, RAG, and model monitoring pre-wired.' },
    { icon: Gauge, title: 'Comprehensive MLOps toolkit', description: 'Streamlined lifecycle—training, tagging, cleaning, quality control, and continuous delivery.' },
    { icon: Cloud, title: 'Azure Data & AI competencies', description: 'Architectures aligned with latest Azure advancements for efficient model ops and analytics.' },
    { icon: Shield, title: 'Security & governance', description: 'Built-in controls for privacy, compliance, and responsible AI.' }
  ];

  const platforms = [
    { icon: Database, name: 'Databricks', description: 'Unified data + ML platform for scalable pipelines and analytics.' },
    { icon: Cpu, name: 'Dataiku', description: 'Collaborative data science platform for governed enterprise AI.' },
    { icon: Brain, name: 'Datarobot', description: 'Automated ML for predictive analytics and rapid iteration.' },
    { icon: MessageSquare, name: 'Hugging Face', description: 'Leading ecosystem for LLMs, NLP models, and RAG tooling.' }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                AI-Driven Data Science & Machine Learning
              </h1>
              <p className="mt-5 text-lg text-teal-100">
                Turn complex data into actionable insights with predictive models and GenAI—built with strong data foundations and robust MLOps.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/Contact/" className="bg-white text-teal-700 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">
                  Talk to an expert
                </a>
                <a href="/Data-AI/" className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-teal-700 transition-colors">
                  Explore Data & AI
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Brain className="h-14 w-14 text-teal-200 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">From data to decisions</h3>
              <p className="text-teal-100 text-sm">
                Strategy, pipelines, and models—aligned to business outcomes, validated continuously, and delivered with production-grade governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Data science consulting</h2>
          <div className="space-y-12">
            {consultingCapabilities.map((cap, idx) => (
              <div key={cap.title} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`w-full ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={cap.image}
                    alt={cap.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/homepage.png';
                    }}
                    className="w-full h-64 object-cover rounded-xl border border-teal-100 shadow-sm"
                  />
                </div>
                <div className={`${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-2xl font-semibold text-gray-900">{cap.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ML capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">Machine learning development</h2>
          <p className="max-w-3xl mx-auto text-center text-gray-600 mb-10">
            Explore our ML capabilities—select a pill to preview details.
          </p>

          <div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 justify-center">
              {mlCapabilities.map((cap, idx) => (
                <button
                  key={cap.title}
                  onClick={() => setActiveIndex(idx)}
                  className={`${idx === activeIndex ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border ${idx === activeIndex ? 'border-teal-600' : 'border-gray-200'}`}
                >
                  {cap.title}
                </button>
              ))}
            </div>

            <div className="mt-6 grid lg:grid-cols-3 gap-8 items-stretch">
              <div className="lg:col-span-2">
                <div className="bg-gray-50 rounded-2xl border border-teal-100 p-8 h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-teal-500 text-white mb-4">
                    {mlCapabilities[activeIndex] && (
                      <>{React.createElement(mlCapabilities[activeIndex].icon, { className: 'h-6 w-6' })}</>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{mlCapabilities[activeIndex]?.title}</h3>
                  <p className="mt-2 text-gray-600">{mlCapabilities[activeIndex]?.description}</p>
                  {Array.isArray((mlCapabilities as any)[activeIndex]?.tags) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(mlCapabilities as any)[activeIndex].tags.map((tag: string) => (
                        <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-teal-100 bg-gradient-to-br from-white to-teal-50 p-6">
                <div className="absolute inset-0 opacity-40" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(13,148,136,0.25) 1px, transparent 1px)', backgroundSize: '16px 16px'}} />
                <div className="relative">
                  <h4 className="text-sm font-semibold text-teal-700 uppercase tracking-wide">What you get</h4>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-5">
                    <li>Clear success metrics and validation plan</li>
                    <li>Production-grade deployment path</li>
                    <li>Monitoring and retraining strategy</li>
                    <li>Security and governance built-in</li>
                  </ul>
                  <a href="/Contact/" className="inline-block mt-6 bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-700">Discuss your use case</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props - complete redesign */}
      <section className="relative py-24 bg-gradient-to-br from-teal-800 via-teal-900 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25) 2px, transparent 2px)', backgroundSize: '40px 40px'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">Why this approach works</h2>
              <p className="mt-4 text-teal-100">
                Outcome-driven, governance-first delivery that moves beyond PoCs to
                scalable AI in production.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/10 backdrop-blur border border-white/10 p-4">
                  <div className="text-3xl font-bold">90%+</div>
                  <div className="text-sm text-teal-100">projects hit success KPIs</div>
                </div>
                <div className="rounded-xl bg-white/10 backdrop-blur border border-white/10 p-4">
                  <div className="text-3xl font-bold">50% faster</div>
                  <div className="text-sm text-teal-100">from pilot to prod</div>
                </div>
              </div>

              
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {valueProps.map((v, idx) => (
                <div key={v.title} className="relative rounded-2xl bg-white/10 backdrop-blur border border-white/10 p-6 hover:bg-white/15 transition-colors">
                  <div className="absolute -left-3 top-6 h-6 w-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-bold shadow-md">
                    {idx + 1}
                  </div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-teal-500 text-white">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-teal-100">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Platforms & tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((p) => (
              <div key={p.name} className="rounded-xl p-6 border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-600 text-white mb-4">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to turn data into results?</h2>
          <p className="mt-3 text-teal-100">
            Let’s align your data strategy, stand up pipelines, and deploy models that drive outcomes.
          </p>
          <a href="/Contact/" className="inline-block mt-6 bg-white text-teal-700 px-8 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">
            Get started
          </a>
        </div>
      </section>
    </div>
  );
};

export default AIDataScienceML;


