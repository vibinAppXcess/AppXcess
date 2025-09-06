import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EdTechBlog2: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">Cloud Platforms for Education</h1>
          <p className="text-xl text-white/90">Scalable infrastructure for content, collaboration and analytics.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">Always‑On Learning</h2>
          <p>
            Cloud‑hosted platforms ensure reliable access to courses and tools from anywhere with secure identity and data protection.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Collaboration</h2>
          <p>
            Real‑time classrooms, group projects and content authoring simplify delivery for instructors and promote engagement.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
          <p>
            Centralized data enables dashboards that track outcomes, retention and resource utilization to improve programs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Move learning to the cloud</h3>
          <Link to="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">Contact Us <ArrowRight className="w-5 h-5"/></Link>
        </div>
      </section>
    </div>
  );
};

export default EdTechBlog2;
