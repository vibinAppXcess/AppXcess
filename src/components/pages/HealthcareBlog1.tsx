import React from 'react';
import { ArrowRight } from 'lucide-react';

const HealthcareBlog1: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">Technology Trends in Healthcare</h1>
          <p className="text-xl text-white/90">AI, analytics and interoperability reshaping care delivery.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">Digital Care</h2>
          <p>Telehealth, remote monitoring and virtual collaboration expand access while improving efficiency and patient experience.</p>
          <h2 className="text-2xl font-bold text-gray-900">Data & AI</h2>
          <p>Predictive models assist diagnostics, staffing and population health—paired with explainability and governance.</p>
          <h2 className="text-2xl font-bold text-gray-900">Interoperability</h2>
          <p>APIs and standards unlock secure data exchange between EMRs, labs and payers, enabling whole‑person care.</p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Modernize your care delivery</h3>
          <a href="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">Contact Us <ArrowRight className="w-5 h-5"/></a>
        </div>
      </section>
    </div>
  );
};

export default HealthcareBlog1;
