import React from 'react';
import { ArrowRight } from 'lucide-react';

const TelecomBlog2: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">Harnessing Big Data in Telecom</h1>
          <p className="text-xl text-white/90">Strategic planning and operational excellence with analytics.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">Capacity Planning</h2>
          <p>Forecast demand and allocate spectrum and infrastructure effectively.</p>
          <h2 className="text-2xl font-bold text-gray-900">Experience KPIs</h2>
          <p>Correlate device, app and network metrics to improve QoE.</p>
          <h2 className="text-2xl font-bold text-gray-900">Automation</h2>
          <p>Use AI for ticket triage, RCA and self‑optimizing networks.</p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Scale analytics across your network</h3>
          <a href="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">Contact Us <ArrowRight className="w-5 h-5"/></a>
        </div>
      </section>
    </div>
  );
};

export default TelecomBlog2;
