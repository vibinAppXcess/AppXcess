import React, { useState } from 'react';

const AnchorTitle: React.FC<{ id: string; children: React.ReactNode }>
  = ({ id, children }) => (
  <h2 id={id} className="scroll-mt-24 text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
    {children}
  </h2>
);

const QualitySecurity: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  const toc = [
    { id: 'practices', label: 'Practices' },
    { id: 'kpis', label: 'KPIs' },
    { id: 'process-kpis', label: 'Process KPIs' },
    { id: 'stages', label: 'Delivery Stages' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-700 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.15)_2px,transparent_2px)] bg-[length:32px_32px] opacity-30" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Quality & Security</h1>
          <p className="mt-4 text-teal-100 max-w-3xl">
            Quality is deeply rooted in our culture. We ensure customer satisfaction
            via proven practices, measurable KPIs, and security-by-design.
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-xl bg-white/10 border border-white/10 p-4 text-center">
              <div className="text-2xl font-bold">ISO 9001</div>
              <div className="text-xs text-teal-100">quality framework</div>
            </div>
            <div className="rounded-xl bg-white/10 border border-white/10 p-4 text-center">
              <div className="text-2xl font-bold">KPIs</div>
              <div className="text-xs text-teal-100">results-driven delivery</div>
            </div>
            <div className="rounded-xl bg-white/10 border border-white/10 p-4 text-center">
              <div className="text-2xl font-bold">Security</div>
              <div className="text-xs text-teal-100">by design</div>
            </div>
            <div className="rounded-xl bg-white/10 border border-white/10 p-4 text-center">
              <div className="text-2xl font-bold">Agile</div>
              <div className="text-xs text-teal-100">with CI/CD</div>
            </div>
          </div>
        </div>
      </section>

      {/* Body with sticky TOC */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 rounded-xl border border-teal-100 bg-teal-50/50 p-4">
              <div className="text-xs font-semibold text-teal-800 mb-2">On this page</div>
              <ul className="space-y-2 text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-gray-700 hover:text-teal-700">{t.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="prose prose-teal max-w-none">
              <AnchorTitle id="practices">Practices for High-Quality Software Development</AnchorTitle>
              <p>We guarantee high customer satisfaction with project outcomes due to:</p>
              <ul>
                <li>ISO 9001-certified quality management system comprising policies, processes, and teams.</li>
                <li>True seniority of our specialists: proven proficiency, proactivity, and self-management.</li>
                <li>Result-driven KPI-based project management.</li>
              </ul>

              <AnchorTitle id="kpis">Quality is Only Real When Measured: KPIs We Use</AnchorTitle>
              <p>
                For each client, we devise a tailored set of quantitative KPIs, ranked by impact on
                project health and customer goals. These KPIs guide continuous improvement.
              </p>

              <AnchorTitle id="process-kpis">Development process quality KPIs</AnchorTitle>
              <p>Sample metrics we commonly employ (final set is tailored per engagement):</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8">Time</h3>
              <ul>
                <li>Actual vs. planned time (total and by task).</li>
                <li>Lead time, cycle time, velocity, deployment frequency, throughput.</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mt-6">Cost</h3>
              <ul>
                <li>Budget vs. actual costs; discovery estimates vs. refined budget.</li>
                <li>Cost variance dynamics.</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mt-6">Scope</h3>
              <ul>
                <li>Implemented features vs. specified requirements.</li>
                <li>Release burndown (stories, epics, or full scope).</li>
                <li>Backlog items waiting beyond deadline (target: zero).</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mt-6">QA efficiency</h3>
              <ul>
                <li>Test coverage and actuality; first-pass UAT acceptance.</li>
                <li>Defect counts by severity; rejected and reopened defect rates.</li>
                <li>Testing effectiveness per iteration.</li>
              </ul>

              <AnchorTitle id="stages">How We Take Care of Quality at Every Stage</AnchorTitle>
            </div>

            {/* Collapsible stages */}
            <div className="mt-6 divide-y rounded-xl border border-teal-100 overflow-hidden">
              {[
                {
                  title: '1. A steady start',
                  items: [
                    'Describe scope and high-level estimates aligned to expectations.',
                    'Devise quality strategy; optionally sign quality agreement.',
                    'Initial risk assessment (compliance, cybersecurity, efforts) and mitigation strategy.',
                    'Tailored collaboration strategy and plan.',
                    'Assemble a vetted, client-approved project team.'
                  ]
                },
                {
                  title: '2. Shrewd planning',
                  items: [
                    'Detailed plan, milestones, and task breakdown.',
                    'Define KPIs for progress and improvement.',
                    'Create technical requirements (stories, mockups).',
                    'Requirements traceability matrix and risk mitigation plan.',
                    'High-level test plan: scope, team, schedule, entry/exit criteria, tools, KPIs.'
                  ]
                },
                {
                  title: '3. Solution building – Architecture, UX/UI, Coding',
                  items: [
                    'Cross-review requirements; design secure, high-performing architecture.',
                    'Research users and design engaging UX/UI.',
                    'Feature DoR, handoff; transparent design-dev-QA collaboration.',
                    'Unified code rules; unit tests; reviews and pair programming.',
                    'Security/compliance checks; IaC; CI/CD with automated monitoring and environments.'
                  ]
                },
                {
                  title: '4. Rigorous testing',
                  items: [
                    'Shift-left testing; build test cases in parallel with development.',
                    'Automate tests and integrate into CI/CD; manage data and environments.',
                    'Execute manual/automated tests; analyze results; document per ISO/IEC/IEEE 29119-3:2021.'
                  ]
                },
                {
                  title: '5. Delivery',
                  items: [
                    'Provide test result report with progress, validation, and effort.',
                    'Deliver comprehensive documentation, guides, and tutorials.'
                  ]
                },
                {
                  title: '6. Maintenance',
                  items: [
                    'Evolve via CI/CD; full-scale regression for changes.',
                    'Optimize cloud resources; follow ITSM/ITIL.',
                    'Monitor and report service KPIs; continuously improve.'
                  ]
                }
              ].map((section, idx) => (
                <div key={section.title}>
                  <button
                    type="button"
                    onClick={() => setOpen(open === idx ? null : idx)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-teal-50/50"
                  >
                    <span className="font-semibold text-gray-900">{section.title}</span>
                    <span className={`text-teal-700 transition-transform ${open === idx ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div className={`${open === idx ? 'block' : 'hidden'} bg-white px-6 pb-6`}>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                      {section.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualitySecurity;


