import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, Settings, Code, Cloud, Building2, ShieldCheck } from 'lucide-react';
import { Button } from '../ui';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [cityAnimation, setCityAnimation] = useState(0);
  const navigate = useNavigate();

  const words = [
    "BUILDING",
    "SMARTER", 
    "BUSINESS",
    "SOLUTIONS"
  ];

  // Removed unused icon arrays

  useEffect(() => {
    const typeSpeed = isDeleting ? 80 : 120;
    const deleteSpeed = 40;
    const pauseTime = 1500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentCharIndex < words[currentWordIndex].length) {
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentCharIndex > 0) {
          setCurrentCharIndex(currentCharIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [currentCharIndex, isDeleting, currentWordIndex, words]);

  // Animation phase cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // City animation cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCityAnimation((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 15;
    const y = (clientY / innerHeight - 0.5) * 15;
    setMousePosition({ x, y });
  };

  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);
    setTimeout(() => setActiveButton(null), 300);
    
    if (buttonType === 'contact' || buttonType === 'learn') {
      navigate('/Contact');
    }
  };

  return (
    <section 
      id="home" 
      className="bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 py-20 lg:py-32 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Digital City Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Skyscrapers */}
        <div className="absolute bottom-0 left-0 w-full h-64 opacity-20">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute bottom-0 bg-gradient-to-t from-teal-400 to-transparent transition-all duration-2000 ${
                cityAnimation === 0 ? 'opacity-100' : cityAnimation === 1 ? 'opacity-70' : 'opacity-90'
              }`}
              style={{
                left: `${i * 12.5}%`,
                width: `${Math.random() * 3 + 2}%`,
                height: `${Math.random() * 40 + 60}%`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              {/* Building windows */}
              {[...Array(5)].map((_, j) => (
                <div
                  key={j}
                  className={`absolute w-1 h-1 bg-yellow-400 rounded-full transition-all duration-1000 ${
                    cityAnimation === 1 ? 'animate-pulse' : 'animate-ping'
                  }`}
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${j * 15 + 10}%`,
                    animationDelay: `${j * 0.3}s`
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Holographic Graphs and Dashboards */}
        <div className="absolute inset-0 opacity-15">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute bg-gradient-to-r from-teal-400 to-blue-400 rounded-lg transition-all duration-3000 ${
                cityAnimation === 0 ? 'animate-pulse' : cityAnimation === 1 ? 'animate-bounce' : 'animate-ping'
              }`}
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 60 + 20}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 60 + 30}px`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              {/* Graph lines */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path
                  d="M10,80 Q30,60 50,40 T90,20"
                  stroke="rgba(20, 184, 166, 0.8)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
                <circle cx="30" cy="60" r="2" fill="rgba(20, 184, 166, 0.9)" className="animate-ping" />
                <circle cx="50" cy="40" r="2" fill="rgba(20, 184, 166, 0.9)" className="animate-ping" />
                <circle cx="70" cy="30" r="2" fill="rgba(20, 184, 166, 0.9)" className="animate-ping" />
              </svg>
            </div>
          ))}
        </div>

        {/* Drones and Data Streams */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-teal-400 rounded-full transition-all duration-2000 ${
                cityAnimation === 0 ? 'animate-bounce' : cityAnimation === 1 ? 'animate-ping' : 'animate-pulse'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${Math.random() * 2 + 2}s`
              }}
            />
          ))}
          
          {/* Data streams */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`stream-${i}`}
              className="absolute w-px bg-gradient-to-b from-teal-400 to-transparent animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: '0%',
                height: `${Math.random() * 50 + 30}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${Math.random() * 1 + 1}s`
              }}
            />
          ))}
        </div>

        {/* Floating orbs with different animation phases */}
        <div 
          className={`absolute top-20 left-20 w-32 h-32 bg-teal-200 rounded-full opacity-20 blur-xl transition-all duration-1000 ${
            animationPhase === 0 ? 'animate-pulse' : animationPhase === 1 ? 'animate-bounce' : 'animate-ping'
          }`}
          style={{ 
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px) scale(${1 + Math.sin(Date.now() / 2000) * 0.1})`,
          }}
        ></div>
        <div 
          className={`absolute bottom-20 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-xl transition-all duration-1000 ${
            animationPhase === 1 ? 'animate-pulse' : animationPhase === 2 ? 'animate-bounce' : 'animate-ping'
          }`}
          style={{ 
            transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px) scale(${1 + Math.cos(Date.now() / 2500) * 0.1})`,
          }}
        ></div>
        <div 
          className={`absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-200 rounded-full opacity-20 blur-xl transition-all duration-1000 ${
            animationPhase === 2 ? 'animate-pulse' : animationPhase === 3 ? 'animate-bounce' : 'animate-ping'
          }`}
          style={{ 
            transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px) scale(${1 + Math.sin(Date.now() / 3000) * 0.1})`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight cursor-default select-none"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{ 
                  transform: isHovering ? `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` : 'translate(0, 0)',
                  transition: 'transform 0.3s ease-out'
                }}
              >
                BUILDING SMARTER BUSINESS SOLUTIONS
              </h1>
              
              <p 
                className="text-xl text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300 cursor-default"
                style={{ 
                  transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                Your partner in pioneering change with revolutionary IT services and engineering expertise...
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className={activeButton === 'learn' ? 'scale-95' : ''}
                onClick={() => handleButtonClick('learn')}
                onMouseEnter={() => setActiveButton('learn')}
                onMouseLeave={() => setActiveButton(null)}
              >
                Learn More
              </Button>
              <Button
                variant="outline"
                className={activeButton === 'contact' ? 'scale-95' : ''}
                onClick={() => handleButtonClick('contact')}
                onMouseEnter={() => setActiveButton('contact')}
                onMouseLeave={() => setActiveButton(null)}
              >
                Contact Us
              </Button>
            </div>

            {/* Interactive Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-teal-600 group-hover:text-teal-700 transition-colors">100+</div>
                <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">Projects Completed</div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-teal-600 group-hover:text-teal-700 transition-colors">50+</div>
                <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">Expert Team</div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-teal-600 group-hover:text-teal-700 transition-colors">99%</div>
                <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Clear Smart City Animation */}
          <div className="relative">
            <div className="relative w-full h-96 bg-transparent rounded-2xl border border-teal-200 shadow-lg overflow-hidden">
              {/* Smart Business Widgets */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl shadow p-4 border border-teal-100 w-40">
                <div className="text-xs font-semibold text-gray-600 mb-2">KPI Overview</div>
                <div className="flex items-end gap-2 h-20">
                  {['h-6','h-10','h-14','h-12','h-16'].map((h, i) => (
                    <span key={i} className={`w-4 rounded bg-teal-400/70 ${h}`} style={{ animation: 'barPulse 3s ease-in-out infinite', animationDelay: `${i*0.2}s` }}></span>
                  ))}
                </div>
              </div>

              <div className="absolute top-10 right-8 bg-white/90 backdrop-blur-sm rounded-xl shadow p-4 border border-blue-100 w-36 h-32 flex items-center justify-center">
                <div className="relative w-20 h-20 rounded-full border-4 border-blue-200">
                  <div className="absolute inset-0 rounded-full border-4 border-teal-500" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 50%)', animation: 'rotateRing 8s linear infinite' }}></div>
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-teal-50 to-blue-50"></div>
                </div>
              </div>

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl shadow p-4 border border-indigo-100 w-60">
                <div className="text-xs font-semibold text-gray-600 mb-2">Trend</div>
                <svg viewBox="0 0 200 60" className="w-full h-16">
                  <polyline fill="none" stroke="rgba(99,102,241,0.8)" strokeWidth="3"
                            points="0,50 30,40 60,45 90,30 120,35 150,20 180,25 200,10">
                    <animate attributeName="points" dur="6s" repeatCount="indefinite"
                      values="0,50 30,40 60,45 90,30 120,35 150,20 180,25 200,10; 0,45 30,35 60,40 90,25 120,30 150,18 180,22 200,14; 0,50 30,40 60,45 90,30 120,35 150,20 180,25 200,10" />
                  </polyline>
                </svg>
              </div>

              {/* Slow rising data streams */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-px bg-gradient-to-b from-teal-500/70 to-transparent"
                    style={{
                      left: `${20 + i * 10}%`,
                      bottom: '6rem',
                      height: `${90 + (i % 2) * 30}px`,
                      animation: 'rise 4s linear infinite',
                      animationDelay: `${i * 0.35}s`,
                    }}
                  />
                ))}
              </div>

              {/* Gentle scan line */}
              <div className="absolute left-0 right-0 h-8 bg-gradient-to-b from-white/20 to-transparent"
                   style={{ animation: 'sweep 6s ease-in-out infinite' }} />

              {/* Soft glow orbs */}
              <div className="absolute -top-10 -right-8 w-36 h-36 rounded-full bg-teal-200/50 blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-200/50 blur-2xl"></div>

              {/* Network nodes and lines */}
              <svg className="absolute inset-0 opacity-60" viewBox="0 0 400 300" preserveAspectRatio="none">
                <g stroke="rgba(13,148,136,0.25)" strokeWidth="1">
                  <line x1="60" y1="200" x2="160" y2="120" />
                  <line x1="160" y1="120" x2="260" y2="160" />
                  <line x1="260" y1="160" x2="330" y2="90" />
                </g>
                <g>
                  <circle cx="60" cy="200" r="3" fill="rgba(13,148,136,0.7)">
                    <animate attributeName="r" values="2;3;2" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="160" cy="120" r="3" fill="rgba(59,130,246,0.7)">
                    <animate attributeName="r" values="2;3;2" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="260" cy="160" r="3" fill="rgba(99,102,241,0.7)">
                    <animate attributeName="r" values="2;3;2" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="330" cy="90" r="3" fill="rgba(13,148,136,0.7)">
                    <animate attributeName="r" values="2;3;2" dur="2.5s" begin="0.9s" repeatCount="indefinite" />
                  </circle>
                </g>
              </svg>

              {/* Rotating ring accent */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-48 h-48 rounded-full border-2 border-teal-300/30" style={{ animation: 'spinSlow 18s linear infinite' }}></div>
              </div>

              {/* Moving vehicle indicator */}
              <div className="absolute bottom-8 left-0 right-0">
                <div className="relative h-2">
                  <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-300/50 to-transparent"></div>
                  <div className="absolute -top-1 w-3 h-3 rounded-full bg-teal-500 shadow-sm" style={{ animation: 'drive 5s linear infinite' }}></div>
                </div>
              </div>

              {/* Services icons cluster */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-6 left-6 w-9 h-9 rounded-xl bg-white shadow border border-teal-100 flex items-center justify-center"
                     style={{ animation: 'floatY 4.5s ease-in-out infinite', animationDelay: '0s' }}>
                  <Brain className="text-teal-600" size={18} />
                </div>
                <div className="absolute top-10 right-8 w-9 h-9 rounded-xl bg-white shadow border border-blue-100 flex items-center justify-center"
                     style={{ animation: 'floatY 4.5s ease-in-out infinite', animationDelay: '.3s' }}>
                  <Settings className="text-blue-600" size={18} />
                </div>
                <div className="absolute bottom-16 left-10 w-9 h-9 rounded-xl bg-white shadow border border-indigo-100 flex items-center justify-center"
                     style={{ animation: 'floatY 4.5s ease-in-out infinite', animationDelay: '.6s' }}>
                  <Code className="text-indigo-600" size={18} />
                </div>
                <div className="absolute bottom-20 right-12 w-9 h-9 rounded-xl bg-white shadow border border-teal-100 flex items-center justify-center"
                     style={{ animation: 'floatY 4.5s ease-in-out infinite', animationDelay: '.9s' }}>
                  <Cloud className="text-teal-600" size={18} />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-9 h-9 rounded-xl bg-white shadow border border-blue-100 flex items-center justify-center"
                     style={{ animation: 'floatY 4.5s ease-in-out infinite', animationDelay: '1.2s' }}>
                  <Building2 className="text-blue-600" size={18} />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-9 h-9 rounded-xl bg-white shadow border border-indigo-100 flex items-center justify-center"
                     style={{ animation: 'floatY 4.5s ease-in-out infinite', animationDelay: '1.5s' }}>
                  <ShieldCheck className="text-indigo-600" size={18} />
                </div>
              </div>
            </div>

            {/* Keyframes for rising streams and sweep */}
            <style>{`
              @keyframes rise {
                0% { transform: translateY(0); opacity: 0.25; }
                50% { opacity: 0.5; }
                100% { transform: translateY(-70%); opacity: 0; }
              }
              @keyframes sweep {
                0% { top: 100%; opacity: 0; }
                10% { opacity: 0.15; }
                50% { top: 0%; opacity: 0.15; }
                60% { opacity: 0; }
                100% { top: -20%; opacity: 0; }
              }
              @keyframes spinSlow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes drive {
                0% { left: 0%; opacity: 0; }
                10% { opacity: 1; }
                50% { left: 50%; opacity: 1; }
                90% { opacity: 1; }
                100% { left: 100%; opacity: 0; }
              }
              @keyframes floatY {
                0% { transform: translateY(0); }
                50% { transform: translateY(-6px); }
                100% { transform: translateY(0); }
              }
              @keyframes barPulse {
                0% { transform: scaleY(1); }
                50% { transform: scaleY(1.1); }
                100% { transform: scaleY(1); }
              }
              @keyframes rotateRing {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
