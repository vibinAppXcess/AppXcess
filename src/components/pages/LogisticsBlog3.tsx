import React from 'react';
import { Satellite, Bot, Route, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LogisticsBlog3: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">Streamlining Logistics with Advanced Tech</h1>
          <p className="text-xl text-white/90">Real‑time tracking, automation, AI routing and blockchain are redefining logistics speed and reliability.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            The logistics industry has undergone a significant transformation with the adoption of advanced technologies, reshaping how
            goods are transported, tracked, and managed. From AI to IoT, businesses are optimizing operations and improving delivery
            efficiency at scale.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">End‑to‑end visibility</h2>
          <p>
            GPS and IoT tracking provide real‑time shipment insight, improving efficiency and customer trust.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Automation in warehouses</h2>
          <p>
            Robotics and automated sorting accelerate fulfillment, reduce errors and handle peak season volumes.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">AI demand and route optimization</h2>
          <p>
            Machine learning analyzes data, weather and traffic to propose optimal routes – saving fuel and time while lowering
            emissions.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Blockchain for trust and compliance</h2>
        <p>
            Decentralized ledgers secure records, reduce fraud, and streamline documentation across borders.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center"><Satellite className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">Real‑time GPS</div></div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center"><Bot className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">Automation</div></div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center"><Route className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">AI routing</div></div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center"><Layers className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">Blockchain</div></div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Scale logistics with confidence</h3>
          <p className="text-white/90 mb-8 max-w-3xl mx-auto">We implement the platforms and integrations that keep you ahead.</p>
          <Link to="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">Contact Us <ArrowRight className="w-5 h-5"/></Link>
        </div>
      </section>
    </div>
  );
};

export default LogisticsBlog3;


