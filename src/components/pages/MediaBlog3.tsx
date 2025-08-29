import React from 'react';
import { ArrowRight } from 'lucide-react';

const MediaBlog3: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">Data-Driven Strategies in Media Distribution</h1>
          <p className="text-xl text-white/90">Using analytics to personalize, protect IP and optimize distribution across platforms.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Distribution has become data‑centric. By leveraging audience insights, media companies tailor offerings, decide what to
            produce, where to publish and when to release for maximum impact.
          </p>
          <p>
            Streaming platforms track behavior in real time to recommend content precisely, boosting engagement and subscriptions.
            Social channels use analytics to target segments and ride trending topics for reach and visibility.
          </p>
          <p>
            Data also helps mitigate piracy through monitoring and predictive algorithms, protecting IP and revenue. As the
            landscape evolves, organizations that invest in robust analytics and data‑driven decision‑making will thrive.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Unlock data‑driven distribution with AppXcess</h3>
          <a href="/Contact" className="inline-flex items-center gap-2 bg-white text-custom-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">Contact Us <ArrowRight className="w-5 h-5"/></a>
        </div>
      </section>
    </div>
  );
};

export default MediaBlog3;
