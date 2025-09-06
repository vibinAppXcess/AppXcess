import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EdTechBlog1: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">AI-Driven Learning Experiences</h1>
          <p className="text-xl text-white/90">Personalized, adaptive and accessible education powered by AI.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">Personalization at Scale</h2>
          <p>
            AI tailors content, pacing and feedback to every learner. With dynamic pathways and intelligent recommendations,
            students achieve outcomes faster while educators focus on higher‑impact coaching.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Assessment and Insights</h2>
          <p>
            Automated grading, formative feedback and learning analytics provide real‑time visibility into progress and gaps,
            enabling timely intervention.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Accessibility</h2>
          <p>
            Speech‑to‑text, translations and assistive features broaden access and inclusion across geographies and abilities.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Bring AI to your classrooms</h3>
          <Link to="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">Contact Us <ArrowRight className="w-5 h-5"/></Link>
        </div>
      </section>
    </div>
  );
};

export default EdTechBlog1;
