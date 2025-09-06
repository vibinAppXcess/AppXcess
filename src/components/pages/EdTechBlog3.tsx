import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EdTechBlog3: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">Measuring Learning Impact</h1>
          <p className="text-xl text-white/90">Using data to improve outcomes and program effectiveness.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">Define Success Metrics</h2>
          <p>
            Establish learning objectives and KPIs such as completion, mastery and career outcomes to align stakeholders.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Collect and Analyze</h2>
          <p>
            Combine LMS, assessment and engagement data to understand what works and where to iterate.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Close the Loop</h2>
          <p>
            Apply findings to content, pedagogy and support models; communicate impact to learners and partners.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Improve outcomes with data</h3>
          <Link to="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">Contact Us <ArrowRight className="w-5 h-5"/></Link>
        </div>
      </section>
    </div>
  );
};

export default EdTechBlog3;
