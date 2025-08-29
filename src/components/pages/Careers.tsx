import React, { useState } from 'react';
import { 
  Users, Target, CheckCircle, ArrowRight, Mail, MapPin, Phone, 
  Facebook, Instagram, Twitter, Linkedin, ChevronRight,
  BarChart3, Lightbulb, Code2, Server, Eye, ArrowUpRight,
  Rocket, Brain, Shield, Zap, Globe, Award, Heart, Star
} from 'lucide-react';

const Careers: React.FC = () => {
  const [activeBenefit, setActiveBenefit] = useState(0);

  const benefits = [
    { 
      name: "Innovative Environment", 
      icon: <Lightbulb size={24} />,
      description: "Collaborate with cutting-edge technology and drive change."
    },
    { 
      name: "Career Growth", 
      icon: <Rocket size={24} />,
      description: "Unlock endless opportunities for personal and professional development."
    },
    { 
      name: "Diverse Community", 
      icon: <Users size={24} />,
      description: "Work alongside talented individuals from varied backgrounds."
    },
    { 
      name: "Work-Life Balance", 
      icon: <Heart size={24} />,
      description: "Enjoy a culture that values both work and personal life."
    },
    { 
      name: "Competitive Benefits", 
      icon: <Award size={24} />,
      description: "Access attractive compensation and employee perks."
    },
    { 
      name: "Recognition & Awards", 
      icon: <Star size={24} />,
      description: "Be acknowledged for your contributions and achievements."
    }
  ];

  const cultureValues = [
    {
      title: "Innovation First",
      description: "We foster a culture where new ideas are celebrated and innovation is encouraged at every level.",
      icon: <Brain size={24} />
    },
    {
      title: "Collaboration",
      description: "Teamwork and open communication are the foundation of our success and growth.",
      icon: <Users size={24} />
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to client relationships.",
      icon: <Target size={24} />
    },
    {
      title: "Continuous Learning",
      description: "We believe in lifelong learning and provide opportunities for skill development.",
      icon: <Code2 size={24} />
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Countries" },
    { number: "95%", label: "Employee Satisfaction" },
    { number: "25+", label: "Open Positions" }
  ];

  const testimonials = [
    {
      quote: "AppXcess has provided me with incredible growth opportunities. The innovative environment and supportive team make every day exciting.",
      author: "Alex Chen",
      role: "Senior Developer"
    },
    {
      quote: "The work-life balance here is exceptional. I feel valued and supported in both my professional and personal development.",
      author: "Maria Rodriguez",
      role: "UX Designer"
    },
    {
      quote: "Joining AppXcess was the best career decision I've made. The diverse team and cutting-edge projects are truly inspiring.",
      author: "David Kim",
      role: "DevOps Engineer"
    }
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
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Join.</span>
                <span className="block">Innovate.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Thrive.</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Be a part of AppXcess, where innovation meets opportunity. Explore roles that shape the future of technology.
            </p>
            <div className="pt-8">
              <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-xl font-medium hover:from-teal-600 hover:to-blue-600 transition-all duration-300 group shadow-lg">
                <span className="flex items-center space-x-2">
                  <span>Know More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Experience the AppXcess Culture
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Discover a workplace where innovation thrives, collaboration flourishes, and your ideas matter. At AppXcess, we empower our team to grow, connect, and make a difference.
            </p>
            <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-xl font-medium hover:from-teal-600 hover:to-blue-600 transition-all duration-300 group shadow-lg">
              <span className="flex items-center space-x-2">
                <span>More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  {React.cloneElement(value.icon, { className: "text-teal-600" })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join the AppXcess Family.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's Why:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
                onMouseEnter={() => setActiveBenefit(index)}
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  {React.cloneElement(benefit.icon, { className: "text-teal-600" })}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                  {benefit.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center mr-6">
                {React.cloneElement(benefits[activeBenefit].icon, { className: "text-teal-600", size: 28 })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefits[activeBenefit].name}
                </h3>
                <p className="text-gray-600 text-lg">
                  {benefits[activeBenefit].description}
                </p>
                <button className="mt-6 flex items-center text-teal-600 font-medium group">
                  Learn more about this benefit
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our Team by the Numbers
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Growing together, innovating together
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

      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Start Your Career Journey Today.
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Unlock opportunities to grow, innovate, and thrive with a career at AppXcess.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/Careers/Apply" className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-xl font-medium hover:from-teal-600 hover:to-blue-600 transition-all duration-300 shadow-lg">
              Apply Now
            </a>
            <button className="bg-white/90 backdrop-blur-sm text-gray-900 border border-white/30 px-8 py-4 rounded-xl font-medium hover:bg-white transition-all duration-300 shadow-lg">
              View Open Positions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
