import React from 'react';
import { Building2, Users, TrendingUp, Globe, Database, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import powerPlatformImg from '../../assets/images/ai-artificial-intelligence-data-analytics-professional-monitors-aidriven-analytics-dashboards-evaluate-web-traffic-customer-engagement-real-time.jpg';

const EnterpriseApps: React.FC = () => {
  const stats = [
    { number: "12", label: "Industries Served", icon: Users },
    { number: "35", label: "Team Members", icon: Users },
    { number: "80+", label: "Enterprise Projects", icon: TrendingUp },
    { number: "25+", label: "Systems Integrated", icon: Globe }
  ];

  const services = [
    {
      title: "Salesforce CRM & Automation",
      description: "Comprehensive Salesforce implementation and customization to streamline your customer relationship management and sales processes.",
      icon: Users,
      features: ["CRM implementation", "Sales automation", "Customer analytics"],
      href: "/Salesforce-CRM-Automation"
    },
    {
      title: "HR Systems",
      description: "Smarter HR for a modern workforce. Streamline workforce management, enhance employee experiences, and provide data-driven insights for growth.",
      icon: Users,
      features: ["Recruitment & Onboarding", "Payroll & Benefits", "Performance Management"],
      href: "/HR-Systems"
    },
    {
      title: "Microsoft 365 & Power Platform",
      description: "Full Microsoft ecosystem integration including Office 365, Power BI, Power Automate, and Power Apps for business transformation.",
      icon: Building2,
      features: ["Office 365 setup", "Power BI dashboards", "Workflow automation"],
      href: "/Microsoft-365-Power-Platform"
    },
    {
      title: "SAP & Enterprise Applications",
      description: "Enterprise resource planning solutions with SAP implementation, customization, and integration for large-scale operations.",
      icon: Database,
      features: ["ERP implementation", "System integration", "Process optimization"],
      href: "/SAP-Enterprise-Applications"
    },
    {
      title: "Business Tools",
      description: "Streamline work, empower teams, and drive growth with smart business tools that simplify workflows and enhance collaboration.",
      icon: Settings,
      features: ["Workflow Automation", "Project Management", "Collaboration Tools"],
      href: "/Business-Tools"
    }
  ];

  const platforms = [
    {
      name: "Enterprise Systems",
      description: "Custom enterprise solutions tailored to your specific business needs",
      icon: Settings
    },
    {
      name: "Business Intelligence",
      description: "Advanced analytics and reporting solutions for data-driven decisions",
      icon: TrendingUp
    }
  ];

  const features = [
    {
      title: "Enterprise-grade solutions",
      description: "Our experts implement robust, scalable enterprise applications that grow with your business."
    },
    {
      title: "Seamless integration",
      description: "We ensure all your business systems work together harmoniously for maximum efficiency."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                We provide<br />
                <span className="text-teal-200">Enterprise</span><br />
                business solutions.
              </h1>
              <p className="text-xl text-teal-100 mb-8">
                ENTERPRISE SYSTEMS & APPLICATIONS
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/Contact/" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">
                  Learn More About AppXcess
                </Link>
                <Link to="/Contact/" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-teal-600 transition-colors inline-block text-center">
                  Contact Us Now
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Building2 className="h-16 w-16 text-teal-200 mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  AppXcess Specializes in<br />
                  Cutting-Edge <span className="text-teal-200">Enterprise Solutions.</span>
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-200 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold">{feature.title}</h4>
                        <p className="text-teal-100 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Empowering Your Business with Advanced Enterprise Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive enterprise solutions designed to transform your business operations and drive growth
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.href ?? '#'} className="group block bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:underline">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leading Enterprise Platforms & Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We integrate with the most powerful enterprise platforms to deliver exceptional business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-teal-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-6">
                  <platform.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                <p className="text-gray-600 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Microsoft Power Platform Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Microsoft Power Platform Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Harness the full potential of Microsoft's Power Platform to automate workflows, create custom applications, and gain powerful business insights. Our expertise ensures seamless integration with your existing Microsoft ecosystem.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Power BI dashboards and analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Power Automate workflow automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Power Apps custom applications</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-gray-100 rounded-3xl p-8">
              <div className="w-full h-80 rounded-2xl overflow-hidden">
                <img 
                  src={powerPlatformImg} 
                  alt="Microsoft Power Platform"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salesforce & CRM Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-teal-100 to-gray-100 rounded-3xl p-8">
                <div className="w-full h-80 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                    alt="Salesforce CRM Solutions"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Salesforce CRM & Business Automation
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transform your customer relationships and sales processes with comprehensive Salesforce solutions. From initial implementation to advanced customization, we ensure your CRM drives business growth and customer satisfaction.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Salesforce implementation & setup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Custom automation & workflows</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Integration with existing systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAP & ERP Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                SAP & Enterprise Resource Planning
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Streamline your enterprise operations with SAP solutions that integrate all aspects of your business. Our SAP expertise ensures successful implementation, customization, and optimization for maximum operational efficiency.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">SAP ERP implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Business process optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">System integration & migration</span>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/SAP-Enterprise-Applications" className="inline-block bg-custom-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-custom-teal transition-colors">Explore SAP & Enterprise Applications</Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-gray-100 rounded-3xl p-8">
              <div className="w-full h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80" 
                  alt="SAP ERP Solutions"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to transform your business with enterprise-grade solutions?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            The smartest choice for scalable, secure, and efficient enterprise applications and business systems.
          </p>
                     <Link to="/Contact" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors inline-block text-center">
            Contact us Now
          </Link>
        </div>
      </section>


    </div>
  );
};

export default EnterpriseApps;
