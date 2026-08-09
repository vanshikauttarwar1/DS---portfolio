"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

const METRICS = [
  { value: "5+", label: "Years Experience", color: "text-blue-500", bgHover: "group-hover:bg-blue-500/10", borderHover: "group-hover:border-blue-500/50", glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]" },
  { value: "100+", label: "Production Prompts", color: "text-purple-500", bgHover: "group-hover:bg-purple-500/10", borderHover: "group-hover:border-purple-500/50", glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]" },
  { value: "98%", label: "Extraction Accuracy", color: "text-emerald-500", bgHover: "group-hover:bg-emerald-500/10", borderHover: "group-hover:border-emerald-500/50", glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]" },
  { value: "95%", label: "Latency Improvement", color: "text-amber-500", bgHover: "group-hover:bg-amber-500/10", borderHover: "group-hover:border-amber-500/50", glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]" },
  { value: "52%", label: "API Cost Reduction", color: "text-rose-500", bgHover: "group-hover:bg-rose-500/10", borderHover: "group-hover:border-rose-500/50", glow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]" },
  { value: "50+", label: "Healthcare Providers", color: "text-teal-500", bgHover: "group-hover:bg-teal-500/10", borderHover: "group-hover:border-teal-500/50", glow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]" },
];

export default function Metrics() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {METRICS.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className={clsx(
                "group relative text-center p-8 bg-card border border-border rounded-2xl transition-all duration-500 overflow-hidden",
                metric.borderHover,
                metric.glow
              )}
            >
              {/* Subtle Animated Background on Hover */}
              <div className={clsx("absolute inset-0 opacity-0 transition-opacity duration-500", metric.bgHover, "group-hover:opacity-100")} />
              
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className={clsx("text-4xl md:text-5xl font-bold font-sans mb-3 transition-transform duration-500 group-hover:scale-110", metric.color)}
                >
                  {metric.value}
                </motion.div>
                <div className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest leading-relaxed">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
