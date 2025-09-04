import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import { Shield, Lock, Network, AlertTriangle, CheckCircle, ArrowRight, KeyRound, Eye, Server, Zap } from 'lucide-react';

const CybersecurityFundamentals: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Cybersecurity Fundamentals
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Build a Resilient Security Posture
              <span className="block text-teal-600">People • Process • Technology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Core practices to protect identities, data, applications, and infrastructure against modern threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/Contact"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center"
              >
                Talk to Security Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#pillars"
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors inline-flex items-center"
              >
                Explore the Pillars
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Identity & Access */}
      <section id="pillars" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <Reveal>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Identity & Access Management</h2>
              <p className="text-gray-600 mb-4">Reduce account takeover and lateral movement with strong identity controls.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> MFA everywhere and phishing‑resistant auth</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> Least privilege and just‑in‑time access (JIT)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> Privileged access management for admins & OT</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> Continuous access evaluation and anomaly alerts</li>
              </ul>
            </Reveal>
            <Reveal slide="left" className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-white h-56 flex items-center justify-center">
              <KeyRound className="h-16 w-16 text-teal-600" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 2: Data & Application Security */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <Reveal slide="right" className="order-2 md:order-1 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white h-56 flex items-center justify-center">
              <Lock className="h-16 w-16 text-indigo-600" />
            </Reveal>
            <Reveal className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data & Application Security</h2>
              <p className="text-gray-600 mb-4">Safeguard sensitive data and ship secure software fast.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-600 mr-2 mt-1" /> Encryption in transit and at rest, key management</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-600 mr-2 mt-1" /> SDLC security: SAST/DAST, dependency scanning, IaC checks</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-600 mr-2 mt-1" /> Secrets management and commit hygiene</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-indigo-600 mr-2 mt-1" /> API security and zero-trust app access</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 3: Network & Infrastructure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <Reveal>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Network & Infrastructure</h2>
              <p className="text-gray-600 mb-4">Contain blast radius and harden runtime environments.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> Micro-segmentation and secure remote access</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> Endpoint protection and patch cadence</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> Cloud hardening: CIS, NIST benchmarks, logging</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-teal-600 mr-2 mt-1" /> Backup/restore, DR tests, immutable storage</li>
              </ul>
            </Reveal>
            <Reveal slide="left" className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-white h-56 flex items-center justify-center">
              <Network className="h-16 w-16 text-teal-600" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 4: Detection & Response */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <Reveal slide="right" className="order-2 md:order-1 rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white h-56 flex items-center justify-center">
              <AlertTriangle className="h-16 w-16 text-orange-500" />
            </Reveal>
            <Reveal className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Detection & Response</h2>
              <p className="text-gray-600 mb-4">Shorten MTTD/MTTR with visibility, automation, and drills.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-1" /> Centralized logging, SIEM use cases, alert tuning</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-1" /> Playbooks for ransomware, insider, and OT incidents</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-1" /> Automated containment and ticketing workflows</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-1" /> Tabletop exercises and continuous improvement</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to strengthen your security posture?</h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">Let’s prioritize quick wins and roadmap strategic initiatives.</p>
          <Link
            to="/Contact"
            className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Contact Security Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityFundamentals;


