import React from 'react';
import { ArrowRight } from 'lucide-react';

const RetailBlog1: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">Why Seamless Integration is Crucial for Business Success</h1>
          <p className="text-xl text-white/90">Connecting POS, ecommerce, inventory and CRM to unlock efficiency and growth.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">Unified Systems, Unified Experiences</h2>
          <p>
            Retailers operate across many touchpoints—stores, marketplaces, mobile apps and social commerce. Seamless integration links
            these systems so data flows in real time, enabling consistent pricing, inventory visibility and a cohesive customer
            journey.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Operational Efficiency</h2>
          <p>
            Integrated platforms eliminate manual reconciliation between POS, OMS and ERP. Automated updates reduce errors, speed up
            fulfillment and free teams to focus on higher‑value work.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Better Decisions with Shared Data</h2>
          <p>
            With a single source of truth across sales, inventory and customer profiles, leaders can optimize assortments, allocate
            stock intelligently and tailor promotions to demand.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to unify your retail stack?</h3>
          <a href="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">Contact Us <ArrowRight className="w-5 h-5"/></a>
        </div>
      </section>
    </div>
  );
};

export default RetailBlog1;
