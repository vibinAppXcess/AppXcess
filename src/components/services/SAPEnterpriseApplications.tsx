import React from 'react';

const SAPEnterpriseApplications: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-custom-blue via-custom-teal to-custom-teal" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">SAP & Enterprise Applications</h1>
            <p className="mt-4 text-white/90 text-lg">Streamline operations, optimize processes, and drive growth with SAP and enterprise application solutions.</p>
            <p className="mt-3 text-white/80">At AppXcess, we implement, customize, and optimize SAP and enterprise-grade applications to create connected, intelligent systems across finance, supply chain, HR, and customer experience.</p>
            <div className="mt-8">
              <a href="/Contact/" className="inline-block bg-white text-custom-blue px-6 py-3 rounded-lg font-medium hover:bg-custom-teal/10 transition-colors">Talk to an Expert</a>
            </div>
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M0 80L120 90C240 100 480 120 720 120C960 120 1200 100 1320 90L1440 80V120H0V80Z" fill="rgba(255,255,255,0.95)"/>
        </svg>
      </section>

      {/* SAP Solutions for Intelligent Enterprises */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">SAP Solutions for Intelligent Enterprises</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: 'SAP ERP Implementation', d: 'End-to-end deployment of SAP ERP modules across finance, procurement, supply chain, and HR.' },
            { t: 'SAP S/4HANA Migration', d: 'Transition to the next-generation ERP platform for real-time data insights and advanced analytics.' },
            { t: 'SAP Business One', d: 'Tailored ERP for small and medium enterprises to streamline operations that deliver measurable value for your business.' },
            { t: 'SAP Integration', d: 'Seamless connectivity with CRM, cloud, and third-party systems that deliver measurable value for your business.' },
            { t: 'Analytics & Reporting', d: 'Transform raw business data into actionable intelligence that deliver measurable value for your business.' },
            { t: 'SAP Fiori UX', d: 'Modern, role-based interfaces that improve usability and accelerate user adoption and satisfaction.' },
          ].map((item, i) => (
            <div key={item.t} className="group relative rounded-xl bg-white shadow-sm border overflow-hidden">
              <div className={`absolute inset-x-0 top-0 h-1 ${i % 2 === 0 ? 'bg-custom-teal' : 'bg-custom-blue'}`} />
              <div className={`p-6 border ${i % 2 === 0 ? 'border-custom-teal/30' : 'border-custom-blue/30'}`}>
                <h3 className="text-lg font-semibold text-gray-900">{item.t}</h3>
                <p className="mt-2 text-gray-700">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Applications Beyond SAP */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Enterprise Applications Beyond SAP</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: 'CRM & Customer Engagement', d: 'Enhance customer experiences with integrated CRM solutions.' },
              { t: 'HR & Workforce Management', d: 'Digitize HR processes with modern HCM tools at scale.' },
              { t: 'Finance & Accounting Systems', d: 'Automate financial operations and ensure compliance.' },
              { t: 'Supply Chain & Inventory Management', d: 'Achieve real-time visibility and efficiency across your supply chain.' },
              { t: 'Custom Enterprise Solutions', d: 'Scalable enterprise apps built to match your unique business requirements.' },
              { t: 'Project Portfolio Management', d: 'Plan, prioritize, and track initiatives to maximize business outcomes.' },
            ].map((item, i) => (
              <div key={item.t} className="rounded-xl bg-white border p-6 shadow-sm">
                <div className={`h-2 w-12 rounded-full ${i % 2 === 0 ? 'bg-custom-teal' : 'bg-custom-blue'}`} />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.t}</h3>
                <p className="mt-2 text-gray-700">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Benefits for Your Business</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Improved efficiency and productivity',
              'Real-time insights for better decision-making',
              'Scalable systems to support growth',
              'Reduced operational costs with automation',
            ].map((b, i) => (
              <div key={b} className={`rounded-xl p-6 shadow-sm text-center border ${i % 2 === 0 ? 'bg-gradient-to-br from-white to-custom-teal/10 border-custom-teal/30' : 'bg-gradient-to-br from-white to-custom-blue/10 border-custom-blue/30'}`}>
                <div className={`mx-auto mb-3 h-10 w-10 rounded-lg text-white flex items-center justify-center font-semibold ${i % 2 === 0 ? 'bg-custom-blue' : 'bg-custom-teal'}`}>{String(i + 1).padStart(2, '0')}</div>
                <p className="text-gray-800">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-2xl p-8 md:p-10 bg-custom-blue text-white">
          <div className="md:flex items-center justify-between gap-8">
            <div className="md:max-w-2xl">
              <h3 className="text-2xl font-bold">Create a connected digital ecosystem with SAP & Enterprise Apps</h3>
              <p className="mt-2 text-white/80">Unlock efficiency, scalability, and real-time insights with AppXcess.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="/Contact/" className="inline-block bg-white text-custom-blue px-6 py-3 rounded-lg font-medium hover:bg-custom-teal/10 transition-colors">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SAPEnterpriseApplications;
