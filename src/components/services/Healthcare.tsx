import React from 'react';
import { ArrowRight, Heart, BarChart3, Smartphone, Users, CheckCircle, Play, TrendingUp, Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import doctorVirtualAppImg from '../../assets/images/doctor-using-virtual-application.jpg';
import physicianSeminarImg from '../../assets/images/mature-medical-physician-explaining-treatment-nurses-healthcare-seminar-pointing-digital-monitor-clinic-herapist-discussing-with-colleagues-about-disease-medicine-professional.jpg';
import teamworkConsultingImg from '../../assets/images/teamwork-consulting-doctors-with-patient-hospital-meeting-help-assistance-healthcare-documents-data-charts-woman-consultation-with-medical-workers-vaccine-information.jpg';

const Healthcare: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-custom-blue to-custom-teal text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
                 {/* Background Image */}
         <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
           backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
           backgroundPosition: 'center',
           backgroundSize: 'cover'
         }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                Technologies<br />
                <span className="text-teal-300 drop-shadow-lg">for Healthcare</span>
              </h1>
              <p className="text-xl mb-8 text-white drop-shadow-lg font-medium">
                Empowering healthcare organizations with cutting-edge technology for improved patient outcomes and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/About" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-colors shadow-lg">
                  More About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/Contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-custom-teal transition-colors flex items-center justify-center gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">100+</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Healthcare Facilities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">50K+</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Patients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">25+</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Hospitals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2 drop-shadow-lg">99%</div>
                    <div className="text-sm text-white font-medium drop-shadow-lg">Compliance Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Healthcare Simplified<br />
              <span className="text-custom-teal">with Technology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Helping healthcare organizations streamline operations, enhance patient care, and achieve compliance through cutting-edge technology.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient Care Enhancement</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Empowering healthcare providers with tailored IT solutions to optimize workflows, reduce costs, and improve decision-making through data-driven insights.
              </p>
              
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Data Management</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Delivering innovative technologies that support telemedicine, patient engagement, and secure data management for seamless and effective healthcare delivery.
              </p>
              
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-custom-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Efficiency</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Optimizing healthcare operations with modern technology to streamline processes and significantly improve overall facility performance and reliability.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Building Smarter Healthcare Strategies
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                From optimizing patient journeys to streamlining operational workflows, AppXcess Technologies partners with healthcare providers to craft strategies that deliver measurable results.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Healthcare Roadmaps</h3>
                    <p className="text-gray-600">
                      Create comprehensive strategies to transition seamlessly into digital healthcare systems and tools.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Operational Efficiency Consulting</h3>
                    <p className="text-gray-600">
                      Identify and resolve inefficiencies to ensure smooth processes across healthcare facilities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-custom-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Application Development</h3>
                    <p className="text-gray-600">
                      Design healthcare-specific applications to improve communication, patient engagement, and staff coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-custom-teal to-custom-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Creating Tailored IT Solutions</h3>
              <p className="text-lg mb-6">
                Whether it's enhancing telemedicine platforms or developing secure data systems, AppXcess Technologies builds custom IT solutions to address the unique challenges of the healthcare sector.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Secure Data Management Systems - Develop robust solutions for managing sensitive patient data</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Interactive Dashboards - Gain real-time visibility into operations and patient care</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Regulatory Compliance Analytics - Ensure adherence to healthcare standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300" />
                  <span>Patient Outcome Analytics - Analyze treatment outcomes to improve care quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Knowledge to Drive Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with actionable tips, trends, and innovations. Discover how technology is reshaping healthcare through our blogs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('/src/assets/images/doctor-using-virtual-application.jpg')"
              }}></div>
             <div className="p-6 flex flex-col flex-grow">
               <h3 className="text-xl font-bold text-gray-900 mb-3">
                 Technology Trends
               </h3>
               <p className="text-gray-600 mb-4 flex-grow">
                 Advancements in AI and analytics are reshaping healthcare delivery and patient care outcomes.
               </p>
               <Link to="/Blog/Healthcare-Technology-Trends" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                 Read More <ArrowRight className="w-4 h-4" />
               </Link>
             </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
             <div className="h-48 bg-cover bg-center" style={{
               backgroundImage: "url('/src/assets/images/mature-medical-physician-explaining-treatment-nurses-healthcare-seminar-pointing-digital-monitor-clinic-herapist-discussing-with-colleagues-about-disease-medicine-professional.jpg')"
             }}></div>
             <div className="p-6 flex flex-col flex-grow">
               <h3 className="text-xl font-bold text-gray-900 mb-3">
                 Streamlining Operations
               </h3>
               <p className="text-gray-600 mb-4 flex-grow">
                 Overcome challenges with tailored IT strategies designed specifically for healthcare environments.
               </p>
               <Link to="/Blog/Healthcare-Operational-Excellence" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                 Read More <ArrowRight className="w-4 h-4" />
               </Link>
             </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('/src/assets/images/teamwork-consulting-doctors-with-patient-hospital-meeting-help-assistance-healthcare-documents-data-charts-woman-consultation-with-medical-workers-vaccine-information.jpg')"
              }}></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Data-Driven Decisions
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Advanced analytics improve outcomes and efficiency across healthcare operations and patient care.
                </p>
                <Link to="/Blog/Healthcare-Data-Driven" className="text-custom-teal font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* CTA Section */}
       <section className="py-20 bg-gradient-to-r from-custom-blue to-custom-teal text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{
           backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
         }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Healthcare with Technology?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            From innovative solutions to seamless implementation—your transformation starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-custom-teal px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;
