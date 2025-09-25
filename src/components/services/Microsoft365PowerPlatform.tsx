import React from 'react';
import { Link } from 'react-router-dom';

const Microsoft365PowerPlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO: Angled gradient with decorative shapes */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-custom-blue via-custom-teal to-custom-teal" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-28 text-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">Microsoft 365 & Power Platform Solutions</h1>
            <p className="mt-4 text-white/90 text-lg">Accelerate digital transformation with Microsoft 365 and Power Platform consulting from AppXcess.</p>
            <p className="mt-3 text-white/80">We help enterprises harness the full potential of Microsoft 365 and Power Platform to improve collaboration, boost productivity, and automate business workflows. From cloud migration to custom app development and workflow automation, our experts ensure your business runs smarter, faster, and more securely.</p>
            <div className="mt-8">
              <Link to="/Contact/" className="inline-block bg-white text-custom-blue px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">Get Started</Link>
            </div>
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M0 80L120 90C240 100 480 120 720 120C960 120 1200 100 1320 90L1440 80V120H0V80Z" fill="rgba(255,255,255,0.9)"/>
        </svg>
      </section>

      {/* MICROSOFT 365: Split layout with angled background and accent bars */}
      <section className="relative">
        <div className="absolute inset-0 -skew-y-2 origin-top-left bg-custom-teal/10" />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
              <h2 className="text-2xl md:text-3xl font-bold text-custom-blue">Microsoft 365 – Modern Workplace Enablement</h2>
              <p className="mt-4 text-gray-700">Empower teams with secure, collaborative tools that adapt to how your organization works. We help you implement, adopt, and get value—fast.</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-custom-blue" />
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-custom-teal" />
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-custom-teal" />
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Productivity Tools', text: 'Microsoft Teams, Outlook, Word, Excel, and PowerPoint for seamless work.' },
                { title: 'Collaboration', text: 'Real-time file sharing, video conferencing, and secure storage with OneDrive & SharePoint.' },
                { title: 'Security & Compliance', text: 'Advanced threat protection, identity management, and data governance.' },
                { title: 'Cloud Flexibility', text: 'Work from anywhere with enterprise-grade reliability and scalability.' },
              ].map((item, idx) => (
                <div key={item.title} className={`relative rounded-xl bg-white border shadow-sm p-6 transition-all hover:shadow-md ${idx % 2 === 0 ? 'border-custom-teal/30' : 'border-custom-blue/30'}`}>
                  <div className={`absolute -top-1 left-6 h-1 w-20 rounded-full ${idx % 2 === 0 ? 'bg-custom-teal' : 'bg-custom-blue'}`} />
                  <h3 className="mt-3 font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POWER PLATFORM: Unique zigzag staggered layout (aligned) */}
      <section className="relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(1,128,128,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(0,52,108,0.06),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Power Platform – Low-Code Business Automation</h2>
            <p className="mt-3 text-gray-700 max-w-3xl mx-auto">A distinctive layout highlighting each capability with bold visual anchors.</p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 items-stretch">
            {[
              { k: '01', title: 'Power BI', text: 'Analytics and BI dashboards for smarter decisions.', color: 'teal' },
              { k: '02', title: 'Power Apps', text: 'Low-code apps tailored to your business.', color: 'blue' },
              { k: '03', title: 'Power Automate', text: 'Automate repetitive tasks and workflows.', color: 'teal' },
              { k: '04', title: 'Power Virtual Agents', text: 'AI chatbots for support and engagement.', color: 'blue' },
            ].map((item) => (
              <div key={item.k} className="h-full">
                <div className={`relative h-full rounded-2xl p-6 shadow-sm border bg-white overflow-hidden flex flex-col justify-center ${item.color === 'teal' ? 'border-custom-teal/30' : 'border-custom-blue/30'}`}>
                  {/* Side ribbon */}
                  <div className={`absolute left-0 top-0 h-full w-1 ${item.color === 'teal' ? 'bg-custom-teal' : 'bg-custom-blue'}`} />
                  {/* Watermark numeral */}
                  <div className={`pointer-events-none select-none absolute bottom-3 right-3 text-7xl font-extrabold tracking-tight leading-none ${item.color === 'teal' ? 'text-custom-teal/10' : 'text-custom-blue/10'}`}>{item.k}</div>
                  <div className="flex items-center gap-3">
                    <span className={`h-8 w-8 rounded-md text-white text-sm font-semibold inline-flex items-center justify-center ${item.color === 'teal' ? 'bg-custom-teal' : 'bg-custom-blue'}`}>{item.k}</span>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-gray-700">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {['Secure by design', 'Low-code velocity', 'Enterprise scale', 'Governance ready'].map(tag => (
              <span key={tag} className="rounded-full border border-custom-blue/20 bg-white px-3 py-1 text-sm text-gray-800">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE: Capabilities-style vertical timeline */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-custom-teal/10" />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Why Choose AppXcess?</h2>
          <p className="mt-3 text-gray-700 max-w-3xl mx-auto text-center">Expert delivery across Microsoft 365 and Power Platform to accelerate outcomes and reduce risk.</p>
          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-custom-blue via-gray-300 to-custom-teal" />
            <div className="space-y-10">
              {[
                { title: 'Microsoft 365 Consulting & Deployment', text: 'Smooth setup, migration, and adoption of Microsoft’s cloud ecosystem for your business.' },
                { title: 'Custom App Development', text: 'Low-code solutions with Power Apps to meet unique enterprise requirements for your business.' },
                { title: 'Business Process Automation', text: 'End-to-end automation with Power Automate for improved efficiency for your business.' },
                { title: 'Data-Driven Insights', text: 'Powerful dashboards with Power BI for real-time decision intelligence for your business.' },
                { title: 'Training & Ongoing Support', text: 'Empower teams to adopt Microsoft 365 and Power Platform with confidence for your business.' },
              ].map((step, i) => (
                <div key={step.title} className={`relative md:flex md:items-center md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="relative z-10 ml-10 md:ml-0 md:w-1/2">
                    <div className={`rounded-xl p-6 shadow-sm border ${i % 2 === 0 ? 'bg-white border-custom-blue/20' : 'bg-white border-custom-teal/20'}`}>
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <p className="mt-2 text-gray-700">{step.text}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-white border-2 border-custom-teal flex items-center justify-center text-sm font-semibold text-custom-blue">{i + 1}</div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS: Checkerboard stat tiles with top accent bars */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Benefits for Your Business</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[ 'Increased productivity and collaboration', 'Streamlined workflows and reduced manual effort', 'Enhanced security and compliance', 'Scalable solutions to support business growth' ].map((benefit, i) => (
            <div key={benefit} className="group relative rounded-xl bg-white shadow-sm border overflow-hidden">
              <div className={`absolute inset-x-0 top-0 h-1 ${i % 2 === 0 ? 'bg-custom-teal' : 'bg-custom-blue'}`} />
              <div className={`p-6 border ${i % 2 === 0 ? 'border-custom-teal/30' : 'border-custom-blue/30'}`}>
                <div className={`mx-auto mb-3 h-10 w-10 rounded-lg text-white flex items-center justify-center font-semibold ${i % 2 === 0 ? 'bg-custom-blue' : 'bg-custom-teal'}`}>{String(i + 1).padStart(2, '0')}</div>
                <p className="text-gray-800">{benefit}</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`absolute -right-10 -bottom-10 h-40 w-40 rounded-full blur-2xl ${i % 2 === 0 ? 'bg-custom-teal/10' : 'bg-custom-blue/10'}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA: Refined */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-2xl p-8 md:p-10 bg-custom-blue text-white">
          <div className="md:flex items-center justify-between gap-8">
            <div className="md:max-w-2xl">
              <h3 className="text-2xl font-bold">Unify people, data, and processes with Microsoft 365 & Power Platform</h3>
              <p className="mt-2 text-white/80">Modernize business systems, streamline processes, and achieve digital excellence with AppXcess.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link to="/Contact/" className="inline-block bg-white text-custom-blue px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">Get Started Today</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Microsoft365PowerPlatform;


