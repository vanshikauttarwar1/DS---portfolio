"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Activity, Users } from "lucide-react";

const PHILOSOPHIES = [
  {
    title: "Reliability Over Hype",
    description: "Building robust, deterministic wrappers around non-deterministic models.",
    icon: <ShieldCheck size={20} strokeWidth={1.5} />,
  },
  {
    title: "Ship Production-Ready",
    description: "Prioritizing observability, rate limiting, and RBAC from day one.",
    icon: <Zap size={20} strokeWidth={1.5} />,
  },
  {
    title: "Measure Business Impact",
    description: "Decisions driven by extraction accuracy, latency, and cost reduction.",
    icon: <Activity size={20} strokeWidth={1.5} />,
  },
  {
    title: "Augment Users",
    description: "AI systems should empower human operators without removing agency.",
    icon: <Users size={20} strokeWidth={1.5} />,
  },
];

export default function ProfessionalPhilosophy() {
  return (
    <section className="py-24 border-t border-border bg-muted/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-foreground">
            Professional <span className="font-serif italic font-normal text-muted-foreground">Philosophy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-serif">
            My approach to building AI systems is grounded in rigorous software engineering principles, not just API wrappers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PHILOSOPHIES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 flat-card rounded-xl group hover:border-primary transition-colors flex items-start gap-6"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 font-sans tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
