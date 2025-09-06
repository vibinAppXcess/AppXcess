import React from 'react';

const HRSystems: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Distinct gradient with brand colors */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-custom-blue via-custom-teal to-teal-500" />
        <svg className="absolute -top-10 right-0 h-64 w-64 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M40.7,-67.5C50.9,-60.6,57.4,-50.3,63.4,-39.7C69.4,-29.1,74.8,-18.2,76.2,-6.2C77.6,5.7,75,18.7,68.2,28.5C61.4,38.3,50.3,44.9,39.2,52.3C28.2,59.7,17.1,67.9,3.6,73.3C-9.9,78.8,-19.7,81.6,-30.1,79.8C-40.6,78,-51.7,71.6,-59.3,62.4C-67,53.3,-71.3,41.5,-74.5,29.7C-77.7,18,-79.8,6.3,-77.9,-4.2C-76.1,-14.8,-70.3,-24.1,-63.4,-32.1C-56.5,-40.1,-48.4,-46.8,-39.1,-54.7C-29.9,-62.5,-19.5,-71.4,-7.2,-76.3C5.1,-81.1,10.3,-81.8,20.2,-77.8C30.1,-73.8,45.6,-65.1,40.7,-67.5Z" transform="translate(100 100)" />
        </svg>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Smarter HR for a Modern Workforce
            </h1>
            <p className="mt-5 text-teal-50 text-lg">
              Streamline workforce management, enhance employee experiences, and provide decision-makers with the insights they need to drive growth.
            </p>
            <div className="mt-8">
              <a href="/Contact/" className="inline-block bg-white text-custom-blue px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Split content with angled background */}
      <section className="relative">
        <div className="absolute inset-0 -skew-y-2 origin-top-left bg-teal-50" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-custom-blue">What do we do?</h2>
            <p className="mt-4 text-gray-700">
              At AppXcess, we understand that people are the backbone of every business. Our HR Systems are designed to streamline workforce management, enhance employee experiences, and provide decision-makers with the insights they need to drive growth.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="h-6 w-6 rounded-full bg-custom-teal/20 flex items-center justify-center text-custom-teal font-semibold">1</span><span>Comprehensive workforce management solutions.</span></li>
              <li className="flex items-start gap-3"><span className="h-6 w-6 rounded-full bg-custom-blue/20 flex items-center justify-center text-custom-blue font-semibold">2</span><span>Enhanced employee experience and engagement.</span></li>
              <li className="flex items-start gap-3"><span className="h-6 w-6 rounded-full bg-custom-teal/20 flex items-center justify-center text-custom-teal font-semibold">3</span><span>Data-driven insights for strategic decision making.</span></li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-2xl border border-teal-100 bg-white p-8 shadow-custom">
              <h3 className="text-lg font-semibold text-gray-900">Why Choose AppXcess HR Systems?</h3>
              <ul className="mt-4 space-y-3 text-gray-700 list-disc list-inside">
                <li>Tailored solutions for your business needs</li>
                <li>Cloud-ready platforms with enterprise-grade security</li>
                <li>End-to-end support from implementation to training</li>
                <li>Proven expertise in HR technology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Key Features: staggered cards with brand accents */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Key Features of Our HR Systems</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Recruitment & Onboarding', text: 'Simplify hiring with applicant tracking, automated workflows, and smooth onboarding processes that help new employees settle in faster.' },
              { title: 'Payroll & Benefits Management', text: 'Ensure accurate and timely payroll processing while managing employee benefits with built-in compliance features.' },
              { title: 'Employee Self-Service Portal', text: 'Give employees the ability to manage their own profiles, apply for leave, and access HR documents anytime, anywhere.' },
              { title: 'Performance & Learning Management', text: 'Set clear goals, track performance, and promote professional growth with integrated training and learning modules.' },
              { title: 'Time & Attendance Tracking', text: 'Automate attendance, shift scheduling, and leave management for improved workforce productivity.' },
              { title: 'HR Analytics & Reporting', text: 'Turn workforce data into actionable insights with advanced analytics and customizable dashboards.' },
              { title: 'Compliance & Security', text: 'Stay aligned with labor laws, data protection regulations, and industry standards with built-in compliance checks and secure systems.' },
              { title: 'Employee Engagement & Communication', text: 'Foster a connected workplace with tools for feedback, surveys, recognition programs, and seamless internal communication channels.' },
              { title: 'Workforce Planning & Succession', text: 'Strategic talent management with succession planning, career pathing, and organizational chart management for future-ready teams.' },
            ].map((item, idx) => (
              <div key={item.title} className={`relative rounded-xl bg-white border shadow-sm p-6 transition-all hover:shadow-md ${idx % 2 === 0 ? 'border-custom-teal/30' : 'border-custom-blue/30'}`}>
                <div className={`absolute -top-1 left-6 h-1 w-20 rounded-full ${idx % 2 === 0 ? 'bg-custom-teal' : 'bg-custom-blue'}`} />
                <h3 className="mt-3 font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Benefits: vertical timeline layout */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Benefits for Your Business</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-center">Transform your HR operations with comprehensive solutions that deliver measurable results across your organization.</p>
          <div className="mt-10 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-custom-blue via-gray-300 to-custom-teal" />
            <div className="space-y-10">
              {[
                { title: 'Increased Efficiency', text: 'Reduce manual HR processes and free up time for strategic initiatives. Automate routine tasks and streamline workflows to focus on what matters most.' },
                { title: 'Enhanced Employee Experience', text: 'Provide employees with transparency, accessibility, and empowerment through self-service features. Create a positive workplace culture that attracts and retains top talent.' },
                { title: 'Better Decision-Making', text: 'Leverage data-driven insights to optimize workforce planning and retention. Make informed decisions based on comprehensive HR analytics and reporting.' },
                { title: 'Scalable & Flexible', text: 'Whether you have 50 employees or 50,000, our HR systems adapt as your business grows. Flexible architecture that scales with your organization.' },
                { title: 'Seamless Integration', text: 'Connect HR with CRM, ERP, and other enterprise applications for a unified business ecosystem. Ensure all systems work together harmoniously.' },
                { title: 'Compliance & Security', text: 'Stay aligned with labor laws, data protection regulations, and industry standards. Built-in compliance checks and enterprise-grade security features.' },
              ].map((step, i) => (
                <div key={step.title} className={`relative md:flex md:items-center md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="relative z-10 ml-10 md:ml-0 md:w-1/2">
                    <div className={`rounded-xl p-6 shadow-sm border ${i % 2 === 0 ? 'bg-white border-custom-blue/20' : 'bg-white border-custom-teal/20'}`}>
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <p className="mt-2 text-gray-700">{step.text}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-white border-2 border-teal-400 flex items-center justify-center text-sm font-semibold text-custom-blue">{i + 1}</div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Why Choose AppXcess: brand feature grid with gradient accents */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-teal-50" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Why Choose AppXcess HR Systems?</h2>
          <p className="mt-3 text-gray-700 max-w-3xl mx-auto text-center">Comprehensive HR solutions that go beyond administration to create a connected, agile, and people-first workplace.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { k: '01', title: 'Tailored Solutions', text: 'Customized HR workflows that align with your business needs and industry requirements.' },
              { k: '02', title: 'Cloud-Ready Platforms', text: 'Accessible anytime, anywhere, with enterprise-grade security and scalability.' },
              { k: '03', title: 'End-to-End Support', text: 'From implementation to training and ongoing support, we ensure smooth adoption.' },
              { k: '04', title: 'Proven Expertise', text: 'Trusted by enterprises for delivering reliable business applications and HR solutions.' },
              { k: '05', title: 'Modern Technology', text: 'Cutting-edge HR technology stack that keeps you ahead of the competition.' },
              { k: '06', title: 'Data-Driven Insights', text: 'Advanced analytics and reporting capabilities for informed decision-making.' },
            ].map((item, idx) => (
              <div key={item.k} className="group relative rounded-xl bg-white shadow-sm border overflow-hidden">
                <div className={`absolute inset-x-0 top-0 h-1 ${idx % 2 === 0 ? 'bg-custom-teal' : 'bg-custom-blue'}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-white text-sm font-semibold ${idx % 2 === 0 ? 'bg-custom-teal' : 'bg-custom-blue'}`}>{item.k}</span>
                    <span className="text-xs uppercase tracking-wider text-gray-400">Feature</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-700">{item.text}</p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`absolute -right-10 -bottom-10 h-40 w-40 rounded-full blur-2xl ${idx % 2 === 0 ? 'bg-custom-teal/10' : 'bg-custom-blue/10'}`} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 text-sm text-gray-600"><span className="h-2 w-2 rounded-full bg-custom-blue" /> Increased efficiency</span>
            <span className="inline-flex items-center gap-2 text-sm text-gray-600"><span className="h-2 w-2 rounded-full bg-custom-teal" /> Better engagement</span>
            <span className="inline-flex items-center gap-2 text-sm text-gray-600"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Smarter decisions</span>
          </div>
        </div>
      </section>

      {/* CTA - split panel with brand colors */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-2xl p-8 bg-custom-blue text-white">
            <h3 className="text-2xl font-bold">Ready to transform your HR?</h3>
            <p className="mt-2 text-teal-100">Talk to our HR experts and get a tailored solution roadmap.</p>
            <a href="/Contact/" className="mt-6 inline-block bg-white text-custom-blue px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">Speak to an Expert</a>
          </div>
          <div className="rounded-2xl p-8 bg-white border border-custom-teal/30">
            <h3 className="text-2xl font-bold text-custom-blue">Empower your workforce</h3>
            <p className="mt-2 text-gray-700">From recruitment to retirement, we help you create a connected, agile, and people-first workplace.</p>
            <div className="mt-6 flex gap-3">
              <a href="/Contact/" className="btn-primary">Get Free Consultation</a>
              <a href="/About/" className="btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HRSystems;
