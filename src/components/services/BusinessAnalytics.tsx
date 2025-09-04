import React, { useEffect, useRef, useState } from 'react';
import { BarChart3, PieChart, LineChart, Database, Layers, Cog, Gauge, ShieldCheck, Users, Rocket } from 'lucide-react';

const BusinessAnalytics: React.FC = () => {
  const offerings = [
    {
      icon: BarChart3,
      title: 'BI dashboards & visualization',
      description:
        'Interactive dashboards with role-based KPIs and drill-downs for real-time decision-making. Align stakeholders with a single source of truth.'
    },
    {
      icon: LineChart,
      title: 'Predictive & prescriptive analytics',
      description:
        'Forecast demand, churn, and revenue with scenario modeling and what-if analysis to optimize outcomes before you commit.'
    },
    {
      icon: Database,
      title: 'Data warehousing & modeling',
      description:
        'Build modern cloud data warehouses and semantic models that power analytics with speed, quality, and governance.'
    },
    {
      icon: Layers,
      title: 'ETL/ELT pipelines & integration',
      description:
        'Ingest and transform data from CRMs, ERPs, apps, and IoT. Automate pipelines to keep reports fresh and reliable.'
    },
    {
      icon: PieChart,
      title: 'Self-serve analytics enablement',
      description:
        'Turn analysts and business teams into power users with curated datasets, templates, and governance guardrails.'
    },
    {
      icon: Cog,
      title: 'Operational analytics',
      description:
        'Embed analytics in day-to-day processes—alerts, SLAs, and action workflows integrated with your business tools.'
    }
  ];

  const outcomes = [
    { icon: Gauge, title: 'Faster decisions', text: 'Real-time KPIs and trusted data speed up executive and frontline decisions.' },
    { icon: ShieldCheck, title: 'Data quality & governance', text: 'Standardized definitions, lineage, and controls for accuracy and compliance.' },
    { icon: Users, title: 'Adoption at scale', text: 'Change management and training to ensure analytics are used daily.' },
    { icon: Rocket, title: 'Time-to-value', text: 'Prebuilt accelerators and iterative delivery shorten the path to ROI.' }
  ];

  

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Business Analytics & Decision Intelligence
              </h1>
              <p className="mt-5 text-lg text-teal-100">
                Turn siloed data into an insights engine—dashboards, predictive models, and governed data that drive confident decisions.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/Contact/" className="bg-white text-teal-700 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">Speak to an expert</a>
                <a href="/AI-Data-Science-ML/" className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-teal-700 transition-colors">Explore AI & ML</a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <BarChart3 className="h-14 w-14 text-teal-200 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Make data your advantage</h3>
              <p className="text-teal-100 text-sm">
                From modern warehouses and ELT to BI dashboards and predictive insights, we deliver analytics that teams actually use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Analytics services</h2>
          <ServicesAnimated items={offerings} />
        </div>
      </section>

      {/* Data To Drive Results - Tabbed Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">Data To Drive Results</h2>
          <TabbedResults />
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Outcomes we drive</h2>
          <OutcomesAnimated items={outcomes} />
        </div>
      </section>

      {/* Toolkit tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Our Toolkit for Data Analysis as a Service</h2>
          <ToolkitTabs />
        </div>
      </section>

      

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready for decision intelligence?</h2>
          <p className="mt-3 text-teal-100">
            We’ll align KPIs, data models, and dashboards to your business goals—then enable your teams to use them daily.
          </p>
          <a href="/Contact/" className="inline-block mt-6 bg-white text-teal-700 px-8 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">Get in touch</a>
        </div>
      </section>
    </div>
  );
};

export default BusinessAnalytics;

// Local tabbed component for "Data To Drive Results" (redesigned)
const TabbedResults: React.FC = () => {
  const tabs = [
    {
      key: 'scenario',
      label: 'Scenario Stimulation',
      content:
        "We'll help forecast outcomes of strategic business decisions even before you implement them. Our experts help build ‘what–if’ scenario stimulations using real-time inputs, historical data, and predictive models. Our experts also leverage data visualization through decision trees and dashboards for real-time comparison. They also use statistical modelling and ML to predict outcomes for variable changes."
    },
    {
      key: 'clv',
      label: 'Customer Lifetime Value Prediction',
      content:
        'Quantify and segment customers by predicted lifetime value to focus acquisition, retention, and upsell where it matters most—linking actions to revenue impact.'
    },
    {
      key: 'ops',
      label: 'Realistic Operational Monitoring',
      content:
        'Blend business rules with ML to monitor operations in real-time. Trigger alerts, compare to baselines, and surface leading indicators to prevent incidents.'
    },
    {
      key: 'risk',
      label: 'Regulatory Risk Forecasting',
      content:
        'Assess and forecast compliance risks with clear metrics, lineage, and controls—supporting audits and proactive remediation.'
    }
  ];

  const [active, setActive] = useState<string>(tabs[0].key);
  const activeIndex = tabs.findIndex((t) => t.key === active);
  const activeTab = tabs[activeIndex];

  const benefits: Record<string, string[]> = {
    scenario: [
      'Model outcomes before executing strategic decisions',
      'What–if analysis with real-time and historical signals',
      'Decision trees and dashboards for side-by-side comparisons'
    ],
    clv: [
      'Segment users by predicted value and churn risk',
      'Prioritize marketing and retention investments',
      'Link actions to revenue lift and CAC payback'
    ],
    ops: [
      'Detect anomalies and SLA breaches in real-time',
      'Trigger alerts with baselines and trends',
      'Reduce incidents with leading indicators'
    ],
    risk: [
      'Quantify regulatory exposure with clear metrics',
      'Data lineage, auditability, and policy controls',
      'Proactive remediation through early warnings'
    ]
  };

  return (
    <div className="bg-gradient-to-br from-white to-teal-50 rounded-2xl p-6 md:p-8 border border-teal-100">
      {/* Top numbered pills */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-5 mb-8">
        {tabs.map((t, i) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            aria-selected={active === t.key}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              active === t.key
                ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                : 'bg-white text-gray-700 border-gray-200 hover:border-teal-300 hover:text-teal-700'
            }`}
          >
            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs ${
              active === t.key ? 'bg-white text-teal-700' : 'bg-teal-600/10 text-teal-700'
            }`}
            >
              {i + 1}
            </span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Content card */}
      <div className="bg-white rounded-xl md:rounded-2xl p-7 md:p-10 shadow-[0_6px_22px_rgba(0,0,0,0.08)] border border-gray-100">
        <div className="flex items-start gap-4">
          <div className="hidden md:flex flex-col items-center mt-1">
            {/* vertical step indicator */}
            <div className="w-2 h-2 rounded-full bg-teal-600" />
            <div className="w-px h-12 bg-teal-200" />
            <div className="w-2 h-2 rounded-full bg-teal-300" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{activeTab.label}</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">{activeTab.content}</p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {benefits[active].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1 w-2 h-2 rounded-full bg-teal-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Local tabbed component for Toolkit
const ToolkitTabs: React.FC = () => {
  type TabKey = 'platforms' | 'bi' | 'ml' | 'ingestion' | 'processing' | 'security' | 'storage';
  const [active, setActive] = useState<TabKey>('platforms');

  const tabs: { key: TabKey; label: string; emoji: string }[] = [
    { key: 'platforms', label: 'Data Platforms', emoji: '☁️' },
    { key: 'bi', label: 'BI Tools', emoji: '📊' },
    { key: 'ml', label: 'AI/ML Frameworks', emoji: '🧠' },
    { key: 'ingestion', label: 'Data Ingestion', emoji: '🔌' },
    { key: 'processing', label: 'Data Processing', emoji: '⚙️' },
    { key: 'security', label: 'Security', emoji: '🔒' },
    { key: 'storage', label: 'Storage', emoji: '🗄️' }
  ];

  const content: Record<TabKey, { name: string; logo?: string; desc?: string }[]> = {
    platforms: [
      { name: 'Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg', desc: 'Secure Azure foundation for analytics and integration.' },
      { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', desc: 'Broad data + AI services with global footprint.' },
      { name: 'Google Cloud Platform', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Cloud_logo.svg', desc: 'GCP analytics and ML services for scale and speed.' }
    ],
    bi: [
      { name: 'Power BI', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg', desc: 'Enterprise BI with semantic models and RLS.' },
      { name: 'Tableau', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Tableau_logo.svg', desc: 'Visual analytics and storytelling for business teams.' },
      { name: 'Looker', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Looker_logo.svg', desc: 'Governed metrics with embeds and governed access.' }
    ],
    ml: [
      { name: 'Databricks', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png', desc: 'Lakehouse for data engineering and ML at scale.' },
      { name: 'Hugging Face', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Hugging_Face_logo.svg', desc: 'NLP/LLM ecosystem with models and RAG tooling.' },
      { name: 'TensorFlow', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg', desc: 'Deep learning framework for training and serving.' },
      { name: 'PyTorch', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg', desc: 'Flexible deep learning for research and production.' }
    ],
    ingestion: [
      { name: 'Fivetran', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Fivetran_logo.svg', desc: 'Managed ELT connectors for hundreds of sources.' },
      { name: 'Airbyte', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Airbyte_logo.svg', desc: 'Open-source ELT with extensible connectors.' },
      { name: 'Kafka Connect', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka.svg', desc: 'Streaming ingestion for real-time analytics.' }
    ],
    processing: [
      { name: 'dbt', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Dbt_logo.png', desc: 'Analytics engineering with modular SQL transformations.' },
      { name: 'Apache Spark', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg', desc: 'Distributed compute for batch and streaming workloads.' },
      { name: 'Beam / Dataflow', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Apache_Beam_logo.svg', desc: 'Unified batch/stream processing via GCP Dataflow.' }
    ],
    security: [
      { name: 'Row-Level Security', desc: 'Fine-grained access on metrics and datasets.' },
      { name: 'IAM & SSO', desc: 'Centralized auth with SCIM, SSO, and roles.' },
      { name: 'Data Masking', desc: 'Protect PII with masking and tokenization.' }
    ],
    storage: [
      { name: 'Snowflake', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg', desc: 'Elastic warehouse with secure data sharing.' },
      { name: 'BigQuery', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/BigQuery_Logo.svg', desc: 'Serverless analytics with ANSI SQL and ML.' },
      { name: 'Azure Synapse', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Azure_Synapse_Analytics_Logo.svg', desc: 'Unified analytics with pipelines, SQL, and Spark.' }
    ]
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3 justify-center">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
              active === t.key
                ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                : 'bg-white text-gray-700 border-gray-200 hover:border-teal-300 hover:text-teal-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content[active].map((item) => (
          <div key={item.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow">
            <div className="flex items-center space-x-4">
              {item.logo ? (
                <img src={item.logo} alt={item.name} className="w-12 h-12 object-contain" />
              ) : (
                <div className="w-12 h-12 rounded-xl bg-teal-600/10 flex items-center justify-center text-teal-700 font-semibold">
                  {item.name.substring(0,1)}
                </div>
              )}
              <div>
                <div className="text-gray-900 font-semibold">{item.name}</div>
                <div className="text-sm text-gray-600">{item.desc || tDescription(active)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function tDescription(key: 'platforms' | 'bi' | 'ml' | 'ingestion' | 'processing' | 'security' | 'storage'): string {
  switch (key) {
    case 'platforms':
      return 'Cloud platforms for secure, scalable analytics operations.';
    case 'bi':
      return 'Business intelligence and visualization for self-serve insights.';
    case 'ml':
      return 'Frameworks and platforms for building and serving ML models.';
    case 'ingestion':
      return 'Connectors and pipelines to move data reliably and quickly.';
    case 'processing':
      return 'Transformations and compute engines for analytics workloads.';
    case 'security':
      return 'Governance, access, and protection across data and analytics.';
    case 'storage':
      return 'Warehouses and lakes to store and query large datasets.';
    default:
      return '';
  }
}


// Animated outcomes grid using IntersectionObserver
const OutcomesAnimated: React.FC<{ items: { icon: any; title: string; text: string }[] }> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean[]>(Array(items.length).fill(false));
  const accents = [
    { bg: 'bg-teal-600', ring: 'ring-teal-200', grad: 'from-teal-50 to-white' },
    { bg: 'bg-indigo-600', ring: 'ring-indigo-200', grad: 'from-indigo-50 to-white' },
    { bg: 'bg-amber-600', ring: 'ring-amber-200', grad: 'from-amber-50 to-white' },
    { bg: 'bg-rose-600', ring: 'ring-rose-200', grad: 'from-rose-50 to-white' }
  ];

  useEffect(() => {
    const nodes = containerRef.current?.querySelectorAll('[data-animate]');
    if (!nodes || nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexAttr = (entry.target as HTMLElement).getAttribute('data-index');
            if (indexAttr) {
              const idx = parseInt(indexAttr, 10);
              setVisible((prev) => {
                if (prev[idx]) return prev;
                const updated = [...prev];
                updated[idx] = true;
                return updated;
              });
            }
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [items.length]);

  return (
    <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((o, i) => {
        const accent = accents[i % accents.length];
        return (
        <div
          key={o.title}
          data-animate
          data-index={i}
          className={`rounded-2xl p-6 border border-gray-100 bg-gradient-to-br ${accent.grad} transform transition-all duration-700 ease-out ${
            visible[i] ? 'opacity-100 translate-y-0 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)] hover:-translate-y-1.5' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-white mb-4 ring-4 ${accent.ring} ${accent.bg}`}>
            <o.icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{o.title}</h3>
          <p className="mt-2 text-sm text-gray-600">{o.text}</p>
        </div>
        );
      })}
    </div>
  );
};

// Animated services grid (matching outcomes style)
const ServicesAnimated: React.FC<{ items: { icon: any; title: string; description: string }[] }> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean[]>(Array(items.length).fill(false));
  const accents = [
    { bg: 'bg-teal-600', ring: 'ring-teal-200', grad: 'from-white to-teal-50' },
    { bg: 'bg-indigo-600', ring: 'ring-indigo-200', grad: 'from-white to-indigo-50' },
    { bg: 'bg-amber-600', ring: 'ring-amber-200', grad: 'from-white to-amber-50' }
  ];

  useEffect(() => {
    const nodes = containerRef.current?.querySelectorAll('[data-animate]');
    if (!nodes || nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexAttr = (entry.target as HTMLElement).getAttribute('data-index');
            if (indexAttr) {
              const idx = parseInt(indexAttr, 10);
              setVisible((prev) => {
                if (prev[idx]) return prev;
                const updated = [...prev];
                updated[idx] = true;
                return updated;
              });
            }
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [items.length]);

  return (
    <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((o, i) => {
        const accent = accents[i % accents.length];
        return (
          <div
            key={o.title}
            data-animate
            data-index={i}
            className={`rounded-2xl p-6 border border-gray-100 bg-gradient-to-br ${accent.grad} transform transition-all duration-700 ease-out ${
              visible[i] ? 'opacity-100 translate-y-0 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)] hover:-translate-y-1.5' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-white mb-4 ring-4 ${accent.ring} ${accent.bg}`}>
              <o.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{o.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{o.description}</p>
          </div>
        );
      })}
    </div>
  );
};

