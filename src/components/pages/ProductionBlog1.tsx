import React from 'react';
import { Brain, Boxes, ShieldCheck, Recycle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductionBlog1: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">Revolutionizing Supply Chains with AI Technology</h1>
          <p className="text-xl text-white/90">How AI delivers prediction, automation, visibility and sustainability across modern production networks.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            AI is reshaping supply chain models with data‑driven decision‑making, predictive capabilities and automation – creating
            smarter, adaptive and resilient ecosystems.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Demand forecasting and inventory optimization</h2>
          <p>
            Machine learning predicts demand, aligns production with market needs and reduces overstock/stockouts, improving customer
            satisfaction and working capital.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Automation across plants and logistics</h2>
          <p>
            AI‑powered robots streamline repetitive tasks; route planning and fleet optimization cut transit time and fuel use.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">End‑to‑end visibility and traceability</h2>
          <p>
            AI systems track every stage from sourcing to delivery. Combined with blockchain, records are secure and tamper‑proof.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Sustainability and efficiency</h2>
          <p>
            Algorithms optimize resources, energy and waste to meet sustainability goals while maintaining profitability.
          </p>
          <p>
            While adoption faces cost, integration and skills challenges, early adopters report significant efficiency and service gains.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"><Brain className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">Predictive AI</div></div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"><Boxes className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">Smart Inventory</div></div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"><ShieldCheck className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">Secure Records</div></div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"><Recycle className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">Sustainable</div></div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to apply AI to your supply chain?</h3>
          <Link to="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">Contact Us <ArrowRight className="w-5 h-5"/></Link>
        </div>
      </section>
    </div>
  );
};

export default ProductionBlog1;


