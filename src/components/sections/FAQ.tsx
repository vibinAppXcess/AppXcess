import React, { useEffect, useState } from 'react';
import { 
  ChevronDown, ChevronUp, ArrowRight,
  HelpCircle, MessageCircle, Users, Globe, Code, Shield
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [faqs, setFaqs] = useState<{ question: string; answer: string; category?: string }[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('http://localhost:8000/api/faqs/');
        if (!res.ok) return;
        const data = await res.json();
        const items = Array.isArray(data) ? data : Array.isArray(data?.results) ? data.results : [];
        if (!cancelled && items.length) {
          setFaqs(items.map((i: any) => ({ question: i.question, answer: i.answer, category: i.category })));
        }
      } catch (_) {
        // silently keep fallback content
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const categories = [
    {
      title: "General Questions",
      icon: <HelpCircle size={24} />,
      description: "Common questions about our services and company"
    },
    {
      title: "Technical Support",
      icon: <Code size={24} />,
      description: "Questions about our technical capabilities and processes"
    },
    {
      title: "Client Services",
      icon: <MessageCircle size={24} />,
      description: "Information about working with us and project management"
    },
    {
      title: "Team & Careers",
      icon: <Users size={24} />,
      description: "Questions about joining our team and company culture"
    },
    {
      title: "Global Reach",
      icon: <Globe size={24} />,
      description: "Information about our international presence and capabilities"
    },
    {
      title: "Security & Quality",
      icon: <Shield size={24} />,
      description: "Questions about our security practices and quality assurance"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Team Members" },
    { number: "25+", label: "Countries Served" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-teal-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about our services, processes, and how we can help bring your ideas to life.
            </p>
            <div className="pt-8">
                             <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-xl font-medium hover:from-teal-600 hover:to-blue-600 transition-all duration-300 group shadow-lg">
                 <span className="flex items-center space-x-2">
                   <span>Contact Us</span>
                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                 </span>
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Know About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our FAQ categories to find the information you need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="bg-teal-100 p-4 rounded-xl w-fit mb-6 mx-auto group-hover:bg-teal-200 transition-colors duration-300">
                  {React.cloneElement(category.icon, { className: "text-teal-600", size: 32 })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{category.title}</h3>
                <p className="text-gray-600 text-center">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Automation style accordion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
            <p className="text-xl text-gray-600">Find answers to the most commonly asked questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-teal-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
            {faqs.length === 0 && (
              <></>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that speak for our expertise and reliability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 mb-4">
                  {stat.number}
                </div>
                <p className="text-blue-100 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Can't find what you're looking for? Our team is here to help. Get in touch with us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:bg-teal-700">
               Contact Support
             </button>
             <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:bg-teal-600 hover:text-white">
               Schedule a Call
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
