import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReadyToUnlock: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-ping"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <Sparkles className="text-white" size={32} />
            </div>
          </div>

          {/* Content */}
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to unlock new opportunities for your business?
          </h2>
          
          <p className="text-xl lg:text-2xl text-teal-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            From imagination to execution—your journey starts here!
          </p>

          {/* CTA Button */}
          <Link to="/Contact">
            <button className="group bg-white text-teal-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="flex items-center space-x-3">
                <span>Reach Out Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </Link>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="text-white/80">
              <div className="text-2xl font-bold text-white mb-2">500+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div className="text-white/80">
              <div className="text-2xl font-bold text-white mb-2">50+</div>
              <div className="text-sm">Expert Team Members</div>
            </div>
            <div className="text-white/80">
              <div className="text-2xl font-bold text-white mb-2">98%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToUnlock;
