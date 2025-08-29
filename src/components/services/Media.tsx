import React from 'react';
import { ArrowRight, Video, BarChart3, Code, Users, CheckCircle, Play, TrendingUp } from 'lucide-react';

const Media: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-custom-blue to-custom-teal text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                Trending<br />
                <span className="text-teal-300 drop-shadow-lg">Media Solutions</span>
              </h1>
              <p className="text-xl mb-8 text-white drop-shadow-lg font-medium">
                AppXcess empowers the media and entertainment industry by offering innovative IT solutions that drive efficiency and creativity.
              </p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-colors shadow-lg">
                Reach Out Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">100+</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Media Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">50+</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Content Platforms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">25+</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Streaming Solutions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">10+</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What About AppXcess?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                At AppXcess, we enable the media and entertainment industry to thrive with innovative solutions that drive creativity, efficiency, and audience engagement.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Strategy</h3>
                    <p className="text-gray-600">
                      AppXcess crafts tailored strategies to help media businesses stay ahead in a dynamic industry. By analyzing trends and audience behaviors, we deliver innovative content and distribution solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Reporting</h3>
                    <p className="text-gray-600">
                      AppXcess offers robust reporting tools for actionable insights and smarter decision-making. Track engagement, performance, and real-time data effortlessly with simplified data visualization.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Development</h3>
                    <p className="text-gray-600">
                      AppXcess designs scalable platforms for media and entertainment innovation. From streaming services to collaborative tools, we bring efficiency to every project with user-centric development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-custom-teal to-custom-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Empowering Media and Entertainment</h3>
              <p className="text-lg mb-6">
                Innovative IT Solutions to Revolutionize Creativity and Business Performance
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Industry Insights - We analyze trends and challenges to stay ahead in media innovation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Strategic Planning - Tailored frameworks to streamline your operational workflows</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Customized Solutions - Delivering tools and technology to enhance creative excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Seamless Execution - Ensuring on-time delivery with precision and quality assurance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Empowering Media Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your media and entertainment business
            </p>
          </div>
          
                     <div className="grid lg:grid-cols-3 gap-8">
             <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
               <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                 <Video className="w-8 h-8 text-custom-teal" />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Creation & Management</h3>
               <p className="text-gray-600 mb-6 flex-grow">
                 Advanced tools for content creation, editing, and management with AI-powered automation and collaborative workflows.
               </p>
              <a href="/Blog/Media-Content-AI" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
             </div>

             <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
               <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                 <BarChart3 className="w-8 h-8 text-custom-teal" />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Insights</h3>
               <p className="text-gray-600 mb-6 flex-grow">
                 Data-driven analytics to understand audience behavior, optimize content performance, and maximize engagement.
               </p>
              <a href="/Blog/Media-Data-Driven" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
             </div>

             <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
               <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                 <Users className="w-8 h-8 text-custom-teal" />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-4">Audience Engagement</h3>
               <p className="text-gray-600 mb-6 flex-grow">
                 Personalized content recommendations and interactive features to enhance viewer engagement and retention.
               </p>
              <a href="/Blog/Media-Immersive-Experiences" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Empowering Media Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our media and entertainment solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What solutions does AppXcess offer for media workflows?
              </h3>
              <p className="text-gray-600">
                AppXcess provides tailored automation and integration solutions to streamline complex media workflows, enhancing operational efficiency and reducing manual processes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How does AppXcess ensure content security?
              </h3>
              <p className="text-gray-600">
                We implement advanced encryption and secure cloud platforms to safeguard intellectual property and sensitive content with enterprise-grade security measures.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Can AppXcess support real-time broadcasting?
              </h3>
              <p className="text-gray-600">
                Yes, we offer robust solutions for real-time broadcasting, ensuring seamless content delivery across multiple platforms with low latency and high reliability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How does AppXcess assist in audience engagement?
              </h3>
              <p className="text-gray-600">
                Our data-driven tools enable personalized content recommendations to maximize viewer engagement and retention through AI-powered analytics and insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transforming the Media Landscape
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering creativity, innovation, and audience engagement through cutting-edge technology solutions
            </p>
          </div>

                     <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
               <div className="h-48 bg-cover bg-center" style={{
                 backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')"
               }}></div>
               <div className="p-6 flex flex-col flex-grow">
                 <h3 className="text-xl font-bold text-gray-900 mb-3">
                   Revolutionizing Content Creation with AI
                 </h3>
                 <p className="text-gray-600 mb-4 flex-grow">
                   Discover how artificial intelligence is transforming content creation processes and enhancing creative workflows in the media industry.
                 </p>
                <a href="/Blog/Media-Content-AI" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
               </div>
             </div>

             <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
               <div className="h-48 bg-cover bg-center" style={{
                 backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')"
               }}></div>
               <div className="p-6 flex flex-col flex-grow">
                 <h3 className="text-xl font-bold text-gray-900 mb-3">
                   The Rise of Immersive Media Experiences
                 </h3>
                 <p className="text-gray-600 mb-4 flex-grow">
                   Explore the latest trends in virtual reality, augmented reality, and immersive storytelling that are reshaping media consumption.
                 </p>
                <a href="/Blog/Media-Immersive-Experiences" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
               </div>
             </div>

             <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
               <div className="h-48 bg-cover bg-center" style={{
                 backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')"
               }}></div>
               <div className="p-6 flex flex-col flex-grow">
                 <h3 className="text-xl font-bold text-gray-900 mb-3">
                   Data-Driven Strategies in Media Distribution
                 </h3>
                 <p className="text-gray-600 mb-4 flex-grow">
                   Learn how data analytics and machine learning are optimizing content distribution and audience targeting strategies.
                 </p>
                <a href="/Blog/Media-Data-Driven" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-custom-blue to-custom-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Elevate Media Experiences?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Empowering the industry with innovative solutions for global impact
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-custom-teal px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Know More About Us
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-custom-teal transition-colors flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
