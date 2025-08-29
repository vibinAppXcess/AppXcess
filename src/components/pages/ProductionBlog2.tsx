import React from 'react';
import { Battery, Recycle, Truck, Gauge, ArrowRight } from 'lucide-react';

const ProductionBlog2: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">5 Strategies for Sustainable Manufacturing</h1>
          <p className="text-xl text-white/90">Energy efficiency, circularity, materials innovation, optimized logistics and culture.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">1) Energy efficiency & renewable adoption</h2>
          <p>Upgrade equipment and adopt solar/wind with smart energy management to cut emissions.</p>
          <h2 className="text-2xl font-bold text-gray-900">2) Waste minimization & circular economy</h2>
          <p>Design for reuse/recycle and turn by‑products into inputs to reduce landfill and cost.</p>
          <h2 className="text-2xl font-bold text-gray-900">3) Material innovation</h2>
          <p>Use biodegradable, recycled and low‑impact materials aligned with consumer expectations.</p>
          <h2 className="text-2xl font-bold text-gray-900">4) Greener logistics</h2>
          <p>AI‑assisted planning reduces transport emissions via routing, consolidation and EVs.</p>
          <h2 className="text-2xl font-bold text-gray-900">5) Culture & partnerships</h2>
          <p>Educate teams, set goals and collaborate with eco‑conscious suppliers to sustain impact.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-6 text-center">
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"><Gauge className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">Efficiency</div></div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"><Battery className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">Renewables</div></div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"><Recycle className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">Circularity</div></div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"><Truck className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">Logistics</div></div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Build a sustainable production roadmap</h3>
          <a href="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">Contact Us <ArrowRight className="w-5 h-5"/></a>
        </div>
      </section>
    </div>
  );
};

export default ProductionBlog2;


