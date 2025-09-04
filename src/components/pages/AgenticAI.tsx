import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, Brain, Workflow, Zap, Layers, Code2, Globe, Server, Shield, Rocket, 
  CheckCircle, ArrowRight, Puzzle, MessageSquare, Database, PlugZap, LineChart
} from 'lucide-react';
import { Button } from '../ui';

const AgenticAI: React.FC = () => {
  const capabilities = [
    { icon: <Bot className="h-10 w-10 text-teal-600" />, title: 'Autonomous Agents', desc: 'Goal-driven agents that plan, act, and learn in dynamic environments.' },
    { icon: <Workflow className="h-10 w-10 text-teal-600" />, title: 'Tool Use & Orchestration', desc: 'Function calling, toolformer patterns, and multi-agent collaboration.' },
    { icon: <Layers className="h-10 w-10 text-teal-600" />, title: 'Memory & Retrieval', desc: 'Long/short-term memory, vector retrieval, and episodic context.' },
    { icon: <Zap className="h-10 w-10 text-teal-600" />, title: 'Reasoning & Planning', desc: 'Chain-of-Thought, ReAct, Tree-of-Thoughts, and self-reflection.' },
    { icon: <PlugZap className="h-10 w-10 text-teal-600" />, title: 'Integrations', desc: 'APIs, databases, RPA, and SaaS integrations to act in your stack.' },
    { icon: <Shield className="h-10 w-10 text-teal-600" />, title: 'Safety & Guardrails', desc: 'Policy engines, content filters, approvals, and audit trails.' }
  ];

  const useCases = [
    { icon: <MessageSquare className="h-8 w-8 text-teal-600" />, title: 'Customer Ops Copilots', benefits: ['Resolve tickets end-to-end', 'Omnichannel automation', 'Knowledge-grounded responses'] },
    { icon: <Code2 className="h-8 w-8 text-teal-600" />, title: 'Engineering Agents', benefits: ['Spec → PR automation', 'Test generation & triage', 'Release orchestration'] },
    { icon: <Database className="h-8 w-8 text-teal-600" />, title: 'Data & Analytics Agents', benefits: ['Self-serve insights', 'Query generation', 'Report automation'] },
    { icon: <Globe className="h-8 w-8 text-teal-600" />, title: 'Growth & Marketing', benefits: ['Campaign ops', 'Personalized content', 'A/B and analytics loops'] }
  ];

  const architecture = [
    { icon: <Server className="h-10 w-10 text-teal-600" />, title: 'Runtime', desc: 'Containerized agent runtimes with queues, schedulers, and workers.' },
    { icon: <Brain className="h-10 w-10 text-teal-600" />, title: 'Models', desc: 'Open and closed LLMs, function calling, toolformer adapters, and embeddings.' },
    { icon: <Layers className="h-10 w-10 text-teal-600" />, title: 'Memory', desc: 'Vector stores, knowledge graphs, and episodic memory stores.' },
    { icon: <LineChart className="h-10 w-10 text-teal-600" />, title: 'Observability', desc: 'Tracing, guardrails, evals, feedback, RBAC, and audit logs.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Bot className="h-4 w-4 mr-2" />
              Agentic AI Tools & Applications
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Build Autonomous, Tool-Using AI Systems
              <span className="block text-teal-600">Plan • Act • Learn • Improve</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We design agent architectures that connect LLMs with tools, memory, and guardrails to deliver reliable, measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/Contact"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center"
              >
                Talk to an Expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#capabilities"
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors inline-flex items-center"
              >
                Explore Capabilities
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Core Agentic Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to build robust, production-grade agent systems</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="bg-teal-100 p-4 rounded-xl w-fit mb-6">{c.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
                <p className="text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions & Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Solutions & Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Agentic systems that deliver real business outcomes</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((u, i) => (
              <div key={i} className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border border-teal-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4">{u.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{u.title}</h3>
                </div>
                <div className="space-y-2">
                  {u.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-teal-600 mr-2" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reference Architecture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Reference Architecture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A pragmatic stack for safe and reliable agent execution</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architecture.map((a, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-teal-100 p-4 rounded-full w-fit mx-auto mb-6">{a.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{a.title}</h3>
                <p className="text-gray-600">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to launch agentic AI?</h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">We’ll help you architect, implement, and govern agent systems that deliver value safely.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="#capabilities"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors inline-flex items-center"
            >
              Explore Capabilities
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgenticAI;


