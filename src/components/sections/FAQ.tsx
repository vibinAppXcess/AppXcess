import React, { useEffect, useState } from 'react';
import { 
  ChevronDown, ChevronUp, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const defaultFaqs: { question: string; answer: string }[] = [
    {
      question: 'What services does AppXcess offer?',
      answer:
        'AppXcess specializes in IT services and engineering including mobile application development, backend development, UI/UX design, DevOps solutions, quality assurance and testing, and support and maintenance.'
    },
    { question: 'How can I get started with AppXcess?', answer: '' },
    { question: 'Does AppXcess provide post-launch support?', answer: '' },
    { question: 'Can AppXcess handle enterprise-level projects?', answer: '' },
    { question: 'How do I join the AppXcess team?', answer: '' },
    { question: 'Does AppXcess work with international clients?', answer: '' },
    { question: 'What technologies does AppXcess use?', answer: '' }
  ];

  const [faqs, setFaqs] = useState<{ question: string; answer: string; category?: string }[]>(defaultFaqs);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('http://localhost:8000/api/faqs/');
        if (!res.ok) return;
        const data = await res.json();
        const items = Array.isArray(data) ? data : Array.isArray(data?.results) ? data.results : [];
        if (!cancelled) {
          if (items.length) {
            setFaqs(items.map((i: any) => ({ question: i.question, answer: i.answer, category: i.category })));
          } else {
            setFaqs(defaultFaqs);
          }
        }
      } catch (_) {
        // On error, use default FAQs
        if (!cancelled) setFaqs(defaultFaqs);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const categories = [
    {
      title: "General Questions",
      description: "Common questions about our services and company",
      details: "Get answers to frequently asked questions about our company, services, and how we can help your business grow and succeed in the digital landscape."
    },
    {
      title: "Technical Support",
      description: "Questions about our technical capabilities and processes",
      details: "Learn about our technical expertise, development processes, and how we ensure high-quality solutions that meet your specific requirements and industry standards."
    },
    {
      title: "Client Services",
      description: "Information about working with us and project management",
      details: "Discover our client-focused approach, project management methodologies, and how we maintain transparent communication throughout the development lifecycle."
    },
    {
      title: "Team & Careers",
      description: "Questions about joining our team and company culture",
      details: "Explore career opportunities, our company culture, and what it's like to work with a team of passionate professionals dedicated to innovation and excellence."
    },
    {
      title: "Global Reach",
      description: "Information about our international presence and capabilities",
      details: "Understand our global presence, international project experience, and how we serve clients across different time zones, cultural contexts, and diverse markets."
    },
    {
      title: "Security & Quality",
      description: "Questions about our security practices and quality assurance",
      details: "Learn about our comprehensive security measures, quality assurance processes, and how we protect your data while delivering exceptional results and maintaining compliance."
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Expert Team Members" },
    { number: "5+", label: "Countries Served" },
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
                             <Link to="/Contact" className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-xl font-medium hover:from-teal-600 hover:to-blue-600 transition-all duration-300 group shadow-lg inline-block">
                 <span className="flex items-center space-x-2">
                   <span>Contact Us</span>
                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                 </span>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Know About Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              About AppXcess
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Know About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover what makes AppXcess a trusted partner for businesses worldwide. Learn about our expertise, values, and commitment to delivering exceptional technology solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mb-4"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-teal-600 font-medium mb-4">
                      {category.description}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {category.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Learn More?
              </h3>
              <p className="text-gray-600 mb-6">
                Explore our comprehensive services and discover how we can help transform your business with innovative technology solutions.
              </p>
              <Link 
                to="/about" 
                className="inline-block bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-teal-700 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn More About Us
              </Link>
            </div>
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
            <Link 
              to="/contact" 
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:bg-teal-700"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
