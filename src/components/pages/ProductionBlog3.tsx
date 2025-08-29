import React from 'react';
import { LineChart, Boxes, RefreshCw, Radio, ArrowRight } from 'lucide-react';

const ProductionBlog3: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">Optimizing Inventory with Data-Driven Insights</h1>
          <p className="text-xl text-white/90">Forecasting, segmentation, automated replenishment and IoT visibility keep supply aligned with demand.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">Forecast demand accurately</h2>
          <p>Use historical sales, seasonality and market signals to maintain optimal stock and avoid over/under‑stocking.</p>
          <h2 className="text-2xl font-bold text-gray-900">Segment inventory</h2>
          <p>Prioritize by variability, turnover and profitability to focus resources on high‑value items.</p>
          <h2 className="text-2xl font-bold text-gray-900">Automate replenishment</h2>
          <p>Real‑time thresholds trigger restocking to reduce stockouts and working capital lock‑in.</p>
          <h2 className="text-2xl font-bold text-gray-900">Predict and mitigate risks</h2>
          <p>Analytics detects supplier or transport risk so teams can adjust orders proactively.</p>
          <h2 className="text-2xl font-bold text-gray-900">Gain IoT visibility</h2>
          <p>RFID and sensors track movement and conditions to prevent loss and ensure accuracy.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-6 text-center">
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"><LineChart className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">Forecast</div></div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"><Boxes className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">Segment</div></div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"><RefreshCw className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">Replenish</div></div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100"><Radio className="w-8 h-8 text-custom-teal mx-auto mb-3"/><div className="font-semibold">IoT Track</div></div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Balance inventory with demand—continuously</h3>
          <a href="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">Contact Us <ArrowRight className="w-5 h-5"/></a>
        </div>
      </section>
    </div>
  );
};

export default ProductionBlog3;


