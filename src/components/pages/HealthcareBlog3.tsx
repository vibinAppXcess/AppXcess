import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthcareBlog3: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">Data-Driven Decisions in Healthcare</h1>
          <p className="text-xl text-white/90">Turning clinical and operational data into better outcomes.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">Analytics for Care Quality</h2>
          <p>Identify variation, predict risk and support evidence‑based practice at the bedside.</p>
          <h2 className="text-2xl font-bold text-gray-900">Operational Insights</h2>
          <p>Monitor throughput, readmissions and utilization to continuously improve performance.</p>
          <h2 className="text-2xl font-bold text-gray-900">Governance and Security</h2>
          <p>Ensure privacy, compliance and data ethics while expanding advanced analytics capabilities.</p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Unlock value from your data</h3>
          <Link to="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">Contact Us <ArrowRight className="w-5 h-5"/></Link>
        </div>
      </section>
    </div>
  );
};

export default HealthcareBlog3;
