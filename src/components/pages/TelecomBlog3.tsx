import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TelecomBlog3: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">Impact of Big Data on Decision‑Making</h1>
          <p className="text-xl text-white/90">How data transforms telecom strategy and operations.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">Strategic Decisions</h2>
          <p>Insights guide investment prioritization, partnerships and product roadmaps.</p>
          <h2 className="text-2xl font-bold text-gray-900">Operational Decisions</h2>
          <p>Data‑driven actions reduce downtime, costs and customer churn.</p>
          <h2 className="text-2xl font-bold text-gray-900">Governance</h2>
          <p>Policies ensure privacy, security and responsible use of data at scale.</p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Turn data into advantage</h3>
          <Link to="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">Contact Us <ArrowRight className="w-5 h-5"/></Link>
        </div>
      </section>
    </div>
  );
};

export default TelecomBlog3;
