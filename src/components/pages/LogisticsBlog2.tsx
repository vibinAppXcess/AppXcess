import React from 'react';
import { Cpu, Truck, Battery, PackageSearch, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LogisticsBlog2: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">Tech-Driven Transportation Enhancements</h1>
          <p className="text-xl text-white/90">AI, IoT, electrification, blockchain and immersive tech are reshaping transportation speed, efficiency and sustainability.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Technology is driving a new era of innovation in transportation, transforming how goods and people move across the globe.
            Facing demand for speed, efficiency and sustainability, the industry is undergoing a significant digital transformation.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">AI for planning, routing and maintenance</h2>
          <p>
            AI systems optimize routes, predict traffic and minimize delays – improving delivery time, fuel and cost. Predictive
            maintenance services vehicles before breakdowns to reduce downtime.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Autonomous delivery</h2>
          <p>
            Self‑driving trucks and drones streamline deliveries – especially the last mile – promising faster and more reliable
            logistics operations.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">IoT connectivity and monitoring</h2>
          <p>
            IoT provides real‑time visibility into fleet locations, vehicle performance and shipment conditions, enabling proactive
            responses and higher transparency.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Electrification and sustainability</h2>
          <p>
            EV adoption, better batteries and charging infrastructure reduce emissions and operating costs, especially when paired with
            renewable energy.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Blockchain and immersive tech</h2>
          <p>
            Blockchain secures supply chain records and reduces fraud; AR/VR improves training and diagnostics via guided procedures and
            safe simulations.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center"><Cpu className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">AI optimization</div></div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center"><Truck className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">Autonomous</div></div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center"><PackageSearch className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">IoT tracking</div></div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center"><Battery className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">EV fleets</div></div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Accelerate your transportation transformation</h3>
          <p className="text-white/90 mb-8 max-w-3xl mx-auto">From routing to electrification, we deliver measurable improvements fast.</p>
          <Link to="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">Contact Us <ArrowRight className="w-5 h-5"/></Link>
        </div>
      </section>
    </div>
  );
};

export default LogisticsBlog2;


