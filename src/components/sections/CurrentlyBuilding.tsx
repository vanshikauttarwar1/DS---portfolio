"use client";

import { motion } from "framer-motion";
import { Terminal, Activity, Zap } from "lucide-react";

export default function CurrentlyBuilding() {
  return (
    <section className="py-24 border-t border-border bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Terminal Window */}
          <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative group">
            
            {/* Terminal Header */}
            <div className="h-12 bg-slate-900 border-b border-slate-800 flex items-center px-4 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
                <Terminal size={14} />
                <span>currently_building.sh</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold text-emerald-500 tracking-widest uppercase">Live</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-10 font-mono text-sm md:text-base text-slate-300 leading-relaxed">
              <div className="mb-5 text-emerald-400 flex items-center gap-2">
                <Activity size={16} /> 
                <span className="opacity-70">System Initialized...</span>
              </div>
              
              <div className="mb-6 flex flex-wrap">
                <span className="text-blue-400 mr-2">~</span>
                <span className="text-rose-400 mr-2">❯</span>
                <span className="text-slate-100">Executing deployment sequence for <span className="text-amber-300 font-bold">production AI systems</span></span>
              </div>

              <div className="pl-6 border-l-2 border-slate-800 space-y-4 mb-8">
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <Zap size={14} className="text-blue-400 shrink-0" />
                  <span className="opacity-90">Scaling healthcare automation pipelines</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <Zap size={14} className="text-purple-400 shrink-0" />
                  <span className="opacity-90">Orchestrating multimodal LLM workflows</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="flex items-center gap-3"
                >
                  <Zap size={14} className="text-emerald-400 shrink-0" />
                  <span className="opacity-90">Designing highly-reliable agentic systems</span>
                </motion.div>
              </div>

              <div className="flex items-center">
                <span className="text-blue-400 mr-2">~</span>
                <span className="text-rose-400 mr-2">❯</span>
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2.5 h-5 bg-slate-400 inline-block align-middle"
                />
              </div>
            </div>

            {/* Glowing Effects */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-500/30 transition-colors duration-700" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-purple-500/30 transition-colors duration-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
