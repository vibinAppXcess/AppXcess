import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    title: "AI Apps – End-to-End Pipeline",
    subtitle: "From concept to deployment",
    description:
      "From AutoML to Reinforcement Learning, we deliver intelligent AI apps with a full lifecycle approach—data prep, model training, deployment, and optimization.",
    highlights: [
      "✔ Automated data cleaning & feature engineering",
      "✔ AutoML for faster model selection & tuning",
      "✔ Reinforcement Learning for adaptive intelligence",
      "✔ Continuous monitoring & retraining for accuracy",
    ],
    color: "bg-white",
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
  },
  {
    title: "On-Prem to Cloud",
    subtitle: "Seamless Cloud Migration",
    description:
      "Migrate from legacy on-premises infrastructure to scalable, secure, and cost-efficient cloud platforms while minimizing downtime.",
    highlights: [
      "✔ Cloud readiness assessment & migration planning",
      "✔ Lift-and-shift or cloud-native modernization",
      "✔ Hybrid & multi-cloud architectures",
      "✔ Security, compliance & cost optimization",
    ],
    color: "bg-gradient-to-br from-blue-700 to-teal-500 text-white",
    image:
      "https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
  },
  {
    title: "Data Engineering & Advanced Analytics",
    subtitle: "Unlock Real Insights",
    description:
      "Robust pipelines, real-time analytics, and predictive insights that drive better decision-making.",
    highlights: [
      "✔ ETL/ELT pipelines for structured & unstructured data",
      "✔ Data lakes & warehouses for scalable storage",
      "✔ Real-time analytics & visualization dashboards",
      "✔ Predictive models for forecasting & anomaly detection",
    ],
    color: "bg-white",
    image:
      "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
  },
  {
    title: "RPA – Robotic Process Automation",
    subtitle: "Automate the Mundane",
    description:
      "Automate repetitive, rule-based tasks with intelligent bots to save time, reduce errors, and increase productivity.",
    highlights: [
      "✔ Automate back-office workflows like data entry",
      "✔ Integrate with ERP, CRM & legacy systems",
      "✔ Combine AI + OCR for intelligent document processing",
      "✔ Track performance with audit-ready logs",
    ],
    color: "bg-gradient-to-br from-blue-700 to-teal-500 text-white",
    image:
      "https://images.pexels.com/photos/5474292/pexels-photo-5474292.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
  },
  {
    title: "AI Workflow Automations",
    subtitle: "Smarter Business Flows",
    description:
      "Enhance entire business workflows by integrating AI for smarter, faster, and seamless operations.",
    highlights: [
      "✔ AI-powered document & invoice processing",
      "✔ Customer service automation with chatbots",
      "✔ Predictive workflows for supply chain & sales",
      "✔ Seamless API & cloud integrations",
    ],
    color: "bg-white",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
  },
];

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  const totalCards = cards.length;
  const horizontalScrollLength = (totalCards - 1) * 100;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0.25, 0.6], [
    "0vw",
    `-${horizontalScrollLength}vw`,
  ]);
  const progressWidth = useTransform(scrollYProgress, [0.25, 1], [
    "0%",
    "100%",
  ]);

  return (
    <div ref={containerRef} className="relative">
      {/* ✅ Intro Spacer */}
      <section className="w-full bg-white flex flex-col items-center justify-center py-20 px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Unlock the Power of AI & Automation
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Explore how we help enterprises accelerate their digital transformation
          with AI, cloud, data, and automation solutions.
        </motion.p>
        <motion.button
          className="px-6 py-3 text-white font-medium rounded-md bg-gradient-to-r from-blue-700 to-teal-500 hover:opacity-90 transition-all duration-300 shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          Get Started →
        </motion.button>
      </section>

      {/* ✅ Horizontal Scroll Section */}
      <section className="relative h-[500vh] bg-gradient-to-b from-gray-50 via-white to-gray-100">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            className={`flex h-full w-[${totalCards * 100}vw]`}
            style={{ x, willChange: "transform" }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className={`relative w-screen h-full ${card.color} flex flex-col justify-center items-center p-10`}
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                {/* Card Content */}
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="w-64 h-64 object-cover rounded-2xl shadow-xl mb-6"
                  loading="lazy"
                  decoding="async"
                  width={500}
                  height={500}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />

                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {card.title}
                </motion.h2>

                <p className="text-md uppercase text-gray-500 mt-1 tracking-wide">
                  {card.subtitle}
                </p>

                <motion.p
                  className="max-w-2xl text-lg text-center mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {card.description}
                </motion.p>

                <ul className="mt-6 space-y-2 text-center">
                  {card.highlights.map((point, i) => (
                    <li key={i} className="text-base md:text-lg">
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <motion.button
                  className="mt-6 px-5 py-2 rounded-lg shadow-md bg-gradient-to-r from-teal-500 to-blue-700 text-white hover:opacity-90 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  Learn More →
                </motion.button>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ✅ Progress bar */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-2 bg-white/30 rounded-full overflow-hidden z-50 backdrop-blur-sm shadow-md">
          <motion.div
            className="h-full bg-teal-500 rounded-full"
            style={{ width: progressWidth }}
          />
        </div>
      </section>

      {/* ✅ Back to normal scroll */}
      <section className="h-screen bg-gradient-to-r from-blue-900 to-teal-700 flex flex-col items-center justify-center text-white text-center px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Ready to transform your business?
        </motion.h2>
        <p className="text-lg max-w-xl mb-6 opacity-90">
          Let’s collaborate and bring your digital transformation vision to
          life.
        </p>
        <motion.button
          className="px-6 py-3 text-white font-medium rounded-md bg-gradient-to-r from-teal-500 to-blue-700 hover:opacity-90 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          Contact Us →
        </motion.button>
      </section>
    </div>
  );
}
