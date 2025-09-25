import React from 'react';
import { Link } from 'react-router-dom';

const SalesforceCRMAutomation: React.FC = () => {
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
              Transform CRM and Automation with Salesforce
            </h1>
            <p className="mt-5 text-teal-50 text-lg">
              Streamline operations, elevate customer engagement, and unlock growth with tailored Salesforce solutions.
            </p>
            <div className="mt-8">
              <Link to="/Contact/" className="inline-block bg-white text-custom-blue px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">
                Get Free Consultation
              </Link>
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
              As a certified Salesforce Consulting Partner, we design and implement CRM and automation strategies that fit today and scale for tomorrow. Our experts combine industry experience with platform mastery to maximize ROI.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="h-6 w-6 rounded-full bg-custom-teal/20 flex items-center justify-center text-custom-teal font-semibold">1</span><span>Discovery-driven roadmaps aligned to business outcomes.</span></li>
              <li className="flex items-start gap-3"><span className="h-6 w-6 rounded-full bg-custom-blue/20 flex items-center justify-center text-custom-blue font-semibold">2</span><span>Secure architectures with scalable data models.</span></li>
              <li className="flex items-start gap-3"><span className="h-6 w-6 rounded-full bg-custom-teal/20 flex items-center justify-center text-custom-teal font-semibold">3</span><span>Change management and enablement for rapid adoption.</span></li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-2xl border border-teal-100 bg-white p-8 shadow-custom">
              <h3 className="text-lg font-semibold text-gray-900">Why Choose Us?</h3>
              <ul className="mt-4 space-y-3 text-gray-700 list-disc list-inside">
                <li>Certified Salesforce experts</li>
                <li>Tailored, outcome-first solutions</li>
                <li>Proven cross-industry implementations</li>
                <li>Collaborative, customer-centric approach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - CRM services: staggered cards with brand accents */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Salesforce CRM Services</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Salesforce Implementation', text: 'Align Salesforce with business goals using end-to-end delivery and best-practice governance.' },
              { title: 'Salesforce Customization', text: 'Extend with custom apps, Lightning, and configuration for UX, performance, and scale.' },
              { title: 'Data Migration', text: 'Secure, validated migrations that preserve integrity and minimize downtime.' },
              { title: 'Salesforce Integration', text: 'Connect ERP, billing, and martech to streamline data flows and processes.' },
              { title: 'Analytics & Reporting', text: 'Actionable dashboards and KPIs to power decision-making across teams.' },
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

      {/* Section 3 - Automation: vertical timeline layout (moved above benefits) */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Automation Capabilities</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-center">Pair Salesforce with intelligent automation to eliminate manual work, accelerate processes, and increase accuracy.</p>
          <div className="mt-10 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-custom-blue via-gray-300 to-custom-teal" />
            <div className="space-y-10">
              {[
                { title: 'Salesforce Flow & Orchestration', text: 'Design event‑driven workflows, screen flows, and approval chains that encode your best practices. Orchestrate multi‑team, multi‑step processes with clear ownership, SLAs, and rollback strategies for resilient operations.' },
                { title: 'RPA for Repetitive Tasks', text: 'Eliminate swivel‑chair work by automating high‑volume, rules‑based activities like data entry, reconciliations, and document handling. Leverage UiPath, Automation Anywhere, or Power Automate to reduce errors and free teams for higher‑value tasks.' },
                { title: 'Integration Automation', text: 'Create reliable, bi‑directional data flows between Salesforce and systems like ERP, billing, support, and martech. Use APIs, event streaming, or iPaaS (MuleSoft/Boomi) to synchronize records, trigger downstream actions, and maintain data quality.' },
                { title: 'Sales & Marketing Automations', text: 'Operationalize lead scoring, segmentation, and nurture programs with Account Engagement (Pardot) and Marketing Cloud. Automate MQL to SQL handoffs, pipeline hygiene, and playbooks to accelerate conversion and improve forecasting accuracy.' },
                { title: 'Service Automations', text: 'Route cases intelligently, enforce SLA timers, and suggest knowledge articles at the right moment. Deploy chatbots and guided workflows with Service Cloud and Einstein to shorten handle time while improving CSAT and agent productivity.' },
                { title: 'Low‑Code Integrations', text: 'Ship quick wins using Zapier/Make and Platform Events to connect tools for alerts, approvals, and record sync. Start lightweight, then harden to enterprise‑grade integrations as adoption grows and requirements evolve.' },
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

      {/* Section 4 - Benefits: brand feature grid with gradient accents */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-teal-50" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Benefits for Your Business</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">Practical outcomes that compound value across teams — from faster delivery to smarter decisions.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { k: '01', title: 'Design & Development', text: 'Cloud apps, Lightning components, reusable sites and forms, reports, and dashboards.' },
              { k: '02', title: 'Integrations', text: 'Trustworthy data flows via APIs, MuleSoft, Boomi, and extensible objects.' },
              { k: '03', title: 'Data Visualization', text: 'Insights with Tableau, Analytics Cloud, and tailored Lightning reports.' },
              { k: '04', title: 'Drive Sales', text: 'Align Sales and Marketing Clouds to lift conversion and reduce costs.' },
              { k: '05', title: 'Operational Efficiency', text: 'Automate repetitive work and standardize processes to scale with confidence.' },
              { k: '06', title: 'Governance & Security', text: 'Secure architectures, access controls, and auditability baked into delivery.' },
            ].map((item, idx) => (
              <div key={item.k} className="group relative rounded-xl bg-white shadow-sm border overflow-hidden">
                <div className={`absolute inset-x-0 top-0 h-1 ${idx % 2 === 0 ? 'bg-custom-teal' : 'bg-custom-blue'}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-white text-sm font-semibold ${idx % 2 === 0 ? 'bg-custom-teal' : 'bg-custom-blue'}`}>{item.k}</span>
                    <span className="text-xs uppercase tracking-wider text-gray-400">Benefit</span>
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

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 text-sm text-gray-600"><span className="h-2 w-2 rounded-full bg-custom-blue" /> Faster delivery</span>
            <span className="inline-flex items-center gap-2 text-sm text-gray-600"><span className="h-2 w-2 rounded-full bg-custom-teal" /> Higher adoption</span>
            <span className="inline-flex items-center gap-2 text-sm text-gray-600"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Better decisions</span>
          </div>
        </div>
      </section>

      

      {/* CTA - split panel with brand colors */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl rounded-2xl p-8 bg-custom-blue text-white text-center">
            <h3 className="text-2xl font-bold">Ready to modernize CRM?</h3>
            <p className="mt-2 text-teal-100">Talk to our certified experts and get a tailored Salesforce roadmap.</p>
            <a href="/Contact/" className="mt-6 inline-block bg-white text-custom-blue px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">Speak to an Expert</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesforceCRMAutomation;


