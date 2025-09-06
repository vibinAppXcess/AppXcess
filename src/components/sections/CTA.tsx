import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from '../ui';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="bg-teal-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-teal-200 uppercase tracking-wide">Start Now</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Get Start For Free No Credit Card Required
            </h2>
            
            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mb-6">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full pl-10 pr-4 py-3 border-0 rounded-lg focus:ring-2 focus:ring-white focus:outline-none text-gray-900"
                />
              </div>
              <Link to="/Contact">
                <Button variant="whiteOutline" className="whitespace-nowrap">Get Started</Button>
              </Link>
            </div>
            
            <p className="text-teal-100">
              Want to contact our team and book a call?{' '}
              <Link to="/Contact" className="text-teal-200 hover:text-white underline">
                Try it now
              </Link>
            </p>
          </div>

          {/* Right Content - Office Image with Overlay */}
          <div className="relative">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="aspect-video bg-white/20 rounded-xl flex items-center justify-center relative">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <p className="text-sm">Office Team</p>
                </div>
                
                {/* Overlay Card */}
                <div className="absolute top-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Services</h4>
                    <div className="w-16 h-16 mx-auto mb-2">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="40" fill="#0D9488" />
                        <circle cx="50" cy="50" r="25" fill="#14B8A6" />
                        <circle cx="50" cy="50" r="10" fill="#2DD4BF" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-600">SCORE</p>
                    <p className="text-lg font-bold text-teal-600">58%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
