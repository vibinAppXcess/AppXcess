import React from 'react';
import { Truck, Cpu, Layers, Leaf, ArrowRight } from 'lucide-react';

const LogisticsBlog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">Smart Solutions Revolutionizing Supply Chains</h1>
          <p className="text-xl text-white/90">How IoT, AI, blockchain and sustainability are transforming logistics and transportation with real-time visibility, predictive optimization and greener operations.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Smart solutions are transforming supply chains in ways that were once unimaginable. The logistics and transportation industry,
            often seen as the backbone of global commerce, is rapidly adopting advanced technologies to enhance efficiency, reduce costs,
            and meet the growing demand for transparency. These changes are revolutionizing how goods move across the world, creating a
            seamless and more intelligent ecosystem for businesses and consumers alike.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">IoT visibility and condition tracking</h2>
          <p>
            One of the most significant advancements is the integration of the Internet of Things (IoT). Sensors and trackers enable
            real-time monitoring of shipments – location, temperature and condition – throughout transit. This visibility reduces risk
            of delays or damage and builds trust with customers by offering transparency.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">AI for prediction and optimization</h2>
          <p>
            Artificial intelligence analyzes vast data to predict demand, identify inefficiencies, and recommend better routing and
            scheduling. Predictive capabilities minimize waste, improve delivery times, and help businesses adapt to changing
            conditions. Automation in warehouses and autonomous vehicles further boosts productivity.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Blockchain for trust and compliance</h2>
          <p>
            Blockchain provides a secure, transparent ledger so all parties access accurate, immutable records. It reduces fraud,
            streamlines documentation, simplifies compliance with international trade regulations, and fosters collaboration across
            stakeholders.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Sustainability at the core</h2>
          <p>
            Sustainability is increasingly central. Electric vehicles, energy‑efficient transport and route optimization reduce
            emissions, while smart warehouses adopt renewable energy and AI to minimize consumption – aligning operations with global
            sustainability goals.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Overcoming adoption hurdles</h2>
          <p>
            Implementation costs, data security concerns and skills gaps are real hurdles, but the benefits outweigh the drawbacks.
            Early adopters are already gaining efficiency, reliability and resilience.
          </p>
          <p>
            In an era of rapid technological advancement, smart solutions are no longer a luxury but a necessity for staying
            competitive in logistics and transportation. By leveraging IoT, AI, blockchain and sustainability‑focused innovations,
            companies are setting new standards for efficiency and reliability.
          </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center">
            <Truck className="w-8 h-8 text-custom-teal mx-auto mb-3" />
            <div className="font-semibold">Real-time tracking</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center">
            <Cpu className="w-8 h-8 text-custom-teal mx-auto mb-3" />
            <div className="font-semibold">AI optimization</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center">
            <Layers className="w-8 h-8 text-custom-teal mx-auto mb-3" />
            <div className="font-semibold">Blockchain records</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center">
            <Leaf className="w-8 h-8 text-custom-teal mx-auto mb-3" />
            <div className="font-semibold">Sustainable ops</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to modernize your supply chain?</h3>
          <p className="text-white/90 mb-8 max-w-3xl mx-auto">We help logistics leaders deploy IoT, AI and automation for measurable impact.</p>
          <a href="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">
            Contact Us <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default LogisticsBlog;


