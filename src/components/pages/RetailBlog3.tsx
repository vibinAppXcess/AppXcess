import React from 'react';
import { ArrowRight } from 'lucide-react';

const RetailBlog3: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">How to Build a Scalable Digital Marketing Strategy</h1>
          <p className="text-xl text-white/90">Grow reach, conversions and loyalty with data‑driven marketing.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">Audience and Channels</h2>
          <p>
            Define priority segments and map content to journeys across search, social, email and marketplaces.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Measurement and Experimentation</h2>
          <p>
            Establish clear KPIs, iterate with A/B testing and attribute performance across channels to invest with confidence.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Automation and Personalization</h2>
          <p>
            Use CDPs and marketing automation to trigger personalized campaigns that scale without sacrificing relevance.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Scale your marketing with AppXcess</h3>
          <a href="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">Contact Us <ArrowRight className="w-5 h-5"/></a>
        </div>
      </section>
    </div>
  );
};

export default RetailBlog3;
