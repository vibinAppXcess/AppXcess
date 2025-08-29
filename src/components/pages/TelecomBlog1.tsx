import React from 'react';
import { ArrowRight } from 'lucide-react';

const TelecomBlog1: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">Data Analytics for Telecom Decisions</h1>
          <p className="text-xl text-white/90">Turning network and customer data into action.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">Network Insights</h2>
          <p>Analyze traffic, outages and QoS to prioritize investments and reduce churn.</p>
          <h2 className="text-2xl font-bold text-gray-900">Customer Analytics</h2>
          <p>Use segmentation and propensity models to personalize offers and support.</p>
          <h2 className="text-2xl font-bold text-gray-900">Revenue Assurance</h2>
          <p>Detect leakage and fraud with anomaly detection across billing and usage data.</p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Make smarter network decisions</h3>
          <a href="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">Contact Us <ArrowRight className="w-5 h-5"/></a>
        </div>
      </section>
    </div>
  );
};

export default TelecomBlog1;
