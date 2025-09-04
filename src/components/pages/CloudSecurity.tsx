import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import { Cloud, Shield, Lock, Network, Server, Database, CheckCircle, ArrowRight, KeyRound, Zap } from 'lucide-react';

const CloudSecurity: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Mastering Cloud Security
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Secure by Design, Secure in Operation
              <span className="block text-teal-600">Across AWS • Azure • GCP</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Practical controls and governance to protect identities, data, workloads, and networks in the cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/Contact" className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center">
                Talk to Cloud Security
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="#foundations" className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors inline-flex items-center">
                View Foundations
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Governance & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Governance & Compliance</h2>
              <p className="text-gray-600 mb-4">Align controls with frameworks and keep environments audit‑ready.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> Policy as code (SCPs, Azure Policies, Organization Policies)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> CIS/NIST mappings and evidence collection automation</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> Change management and drift detection</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> Segregation of duties and break‑glass controls</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-white h-56 flex items-center justify-center">
              <Shield className="h-16 w-16 text-teal-600" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Posture Management & Automation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="order-2 md:order-1 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white h-56 flex items-center justify-center">
              <Server className="h-16 w-16 text-indigo-600" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Posture Management & Automation</h2>
              <p className="text-gray-600 mb-4">Shift from reactive fixes to continuous hardening.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-600 mr-2 mt-1" /> CSPM/CIEM baselines with ticketing integration</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-600 mr-2 mt-1" /> Auto‑remediation for high‑risk misconfigurations</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-600 mr-2 mt-1" /> Golden images and secure modules for reuse</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-600 mr-2 mt-1" /> KPIs: MTTD/MTTR, control coverage, drift rate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Provider Playbooks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Provider Playbooks</h2>
            <p className="text-gray-600">Opinionated checklists tailored to each major cloud.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 border border-teal-200 bg-gradient-to-br from-teal-50 to-white">
              <div className="text-lg font-semibold text-gray-900 mb-2">AWS</div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-0.5" /> Organizations, SCPs, Control Tower</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-0.5" /> IAM Identity Center, KMS, GuardDuty, Security Hub</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-0.5" /> VPC endpoints, WAF, CloudTrail, Config</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white">
              <div className="text-lg font-semibold text-gray-900 mb-2">Azure</div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-600 mr-2 mt-0.5" /> Landing Zones, Management Groups, Policy</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-600 mr-2 mt-0.5" /> Entra ID, PIM, Key Vault, Defender for Cloud</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-600 mr-2 mt-0.5" /> Private Link, WAF, Monitor, Sentinel</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 border border-orange-200 bg-gradient-to-br from-orange-50 to-white">
              <div className="text-lg font-semibold text-gray-900 mb-2">GCP</div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> Folders/Projects, Org Policies</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> IAM Conditions, KMS, SCC, Chronicle</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-0.5" /> VPC‑SC, Cloud Armor, Audit Logs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 1. Foundations & IAM */}
      <section id="foundations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <Reveal>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Foundations & IAM</h2>
              <p className="text-gray-600 mb-4">Establish secure landing zones and strong identity controls.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> Multi-account landing zones, org policies, guardrails</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> Federation, MFA, least privilege, conditional access</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> Key management (KMS/CMK) and secrets rotation</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> Baseline logging and monitoring enabled by default</li>
              </ul>
            </Reveal>
            <Reveal slide="left" className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-white h-56 flex items-center justify-center">
              <KeyRound className="h-16 w-16 text-teal-600" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Data & Workload Protection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <Reveal slide="right" className="order-2 md:order-1 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white h-56 flex items-center justify-center">
              <Database className="h-16 w-16 text-indigo-600" />
            </Reveal>
            <Reveal className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data & Workload Protection</h2>
              <p className="text-gray-600 mb-4">Protect data and compute across VMs, containers, and serverless.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-600 mr-2 mt-1" /> Encryption, tokenization, and sensitive data discovery</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-600 mr-2 mt-1" /> Container and image scanning, runtime protection</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-600 mr-2 mt-1" /> Serverless permissions boundaries and monitoring</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-600 mr-2 mt-1" /> Backup, immutability, and recovery testing</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Network Security */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <Reveal>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Network Security</h2>
              <p className="text-gray-600 mb-4">Segment, inspect, and protect traffic across public and private edges.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> VPC/VNet design, private endpoints, service mesh</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> WAF, DDOS protection, DNS and TLS hygiene</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> Secure remote access and bastion patterns</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> Cross‑region routing and policy consistency</li>
              </ul>
            </Reveal>
            <Reveal slide="left" className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-white h-56 flex items-center justify-center">
              <Network className="h-16 w-16 text-teal-600" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Visibility & Response */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <Reveal slide="right" className="order-2 md:order-1 rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white h-56 flex items-center justify-center">
              <Zap className="h-16 w-16 text-orange-500" />
            </Reveal>
            <Reveal className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visibility & Response</h2>
              <p className="text-gray-600 mb-4">Detect threats and respond quickly with automation.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-1" /> Central logging, CSPM/CIEM, and detections</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-1" /> SOAR runbooks and automated containment</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-1" /> Incident response readiness and simulations</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-1" /> Post‑incident reviews and hardening actions</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Need a cloud security review?</h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">We can baseline your environment and prioritize quick wins.</p>
          <Link to="/Contact" className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Schedule Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CloudSecurity;


