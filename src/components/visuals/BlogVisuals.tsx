"use client";

import { motion } from "framer-motion";
import { Search, Sparkles, Terminal, Code2, Paintbrush, Zap, Network, BrainCircuit, Settings } from "lucide-react";

const GridBackground = () => (
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
       style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '16px 16px' }} 
  />
);

export function GeoVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl" />
      
      <div className="relative w-full max-w-[220px] flex flex-col gap-3 z-10">
        {/* Old SEO Search Bar */}
        <div className="h-10 bg-white rounded-full border border-slate-200 shadow-sm flex items-center px-4 gap-2 opacity-60">
          <Search size={14} className="text-slate-400" />
          <div className="h-1.5 w-1/2 bg-slate-200 rounded" />
        </div>
        
        <div className="flex justify-center">
          <div className="w-[1px] h-4 bg-gradient-to-b from-slate-200 to-amber-400" />
        </div>

        {/* New GEO Generative Box */}
        <motion.div 
          animate={{ scale: [0.98, 1.02, 0.98] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="bg-white rounded-xl border border-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.2)] p-4 flex flex-col gap-3"
        >
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-amber-500" />
            <div className="h-2 w-1/3 bg-amber-100 rounded" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-full bg-slate-100 rounded" />
            <div className="h-1.5 w-5/6 bg-slate-100 rounded" />
            <div className="h-1.5 w-4/5 bg-slate-100 rounded" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function PromptVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl" />

      <motion.div 
        animate={{ y: [-2, 2, -2] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="relative w-full max-w-[240px] bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden z-10"
      >
        <div className="h-8 bg-slate-950 flex items-center px-3 gap-1.5 border-b border-slate-800">
          <div className="w-2 h-2 rounded-full bg-rose-500" />
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <Terminal size={12} className="ml-auto text-slate-500" />
        </div>
        <div className="p-4 font-mono text-[10px] space-y-2">
          <div className="flex text-teal-400 gap-2">
            <span>&gt;</span>
            <span className="text-slate-300">system_prompt = <span className="text-amber-300">"You are an expert..."</span></span>
          </div>
          <div className="flex text-teal-400 gap-2">
            <span>&gt;</span>
            <span className="text-slate-300">optimize_tokens(context)</span>
          </div>
          <div className="mt-2 pt-2 border-t border-slate-800 flex flex-col gap-1.5">
             <div className="h-1 w-full bg-emerald-500/20 rounded">
               <motion.div 
                 className="h-full bg-emerald-500 rounded" 
                 animate={{ width: ["0%", "100%", "0%"] }} 
                 transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
               />
             </div>
             <span className="text-emerald-400 ml-auto">Tokens: 4,096 / 128k</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function AIDesignVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-3xl" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[260px] h-40 bg-white rounded-xl shadow-xl border border-slate-200 flex overflow-hidden z-10">
        {/* Code Side */}
        <div className="w-1/2 bg-slate-900 border-r border-slate-800 p-3 flex flex-col gap-2">
          <div className="flex items-center gap-1 text-slate-400 mb-1">
            <Code2 size={12} /> <div className="h-1.5 w-12 bg-slate-700 rounded" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1 w-full bg-cyan-500/50 rounded" />
            <div className="h-1 w-4/5 bg-fuchsia-500/50 rounded ml-2" />
            <div className="h-1 w-3/4 bg-slate-700 rounded ml-2" />
            <div className="h-1 w-5/6 bg-cyan-500/50 rounded" />
          </div>
        </div>
        {/* Design Side */}
        <div className="w-1/2 bg-slate-50 p-3 flex flex-col items-center justify-center relative">
          <Paintbrush size={14} className="absolute top-2 right-2 text-slate-300" />
          <motion.div 
            animate={{ rotate: 180 }} 
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="w-16 h-16 rounded-lg bg-gradient-to-tr from-cyan-400 to-fuchsia-500 opacity-80 blur-md absolute"
          />
          <div className="w-16 h-16 rounded-lg bg-white border border-slate-200 shadow-sm z-10 flex items-center justify-center">
            <Sparkles size={24} className="text-fuchsia-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function LangGraphVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[240px] h-48 flex items-center justify-center z-10">
        {/* Central Router */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute z-20 w-14 h-14 bg-white rounded-full border-4 border-blue-100 shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center"
        >
          <Network size={20} className="text-blue-600" />
        </motion.div>

        {/* Edges & Nodes */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
           <path d="M 120 96 C 60 96, 60 48, 40 48" stroke="url(#blue-grad)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
           <path d="M 120 96 C 60 96, 60 144, 40 144" stroke="url(#blue-grad)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
           <path d="M 120 96 C 180 96, 180 96, 200 96" stroke="url(#blue-grad)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
           <defs>
             <linearGradient id="blue-grad">
               <stop offset="0%" stopColor="#93c5fd" />
               <stop offset="100%" stopColor="#3b82f6" />
             </linearGradient>
           </defs>
        </svg>

        <div className="absolute left-6 top-8 w-10 h-10 bg-slate-900 rounded-lg border border-slate-700 flex items-center justify-center z-20 shadow-lg">
          <Zap size={14} className="text-amber-400" />
        </div>
        <div className="absolute left-6 bottom-8 w-10 h-10 bg-slate-900 rounded-lg border border-slate-700 flex items-center justify-center z-20 shadow-lg">
          <Settings size={14} className="text-slate-300" />
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-lg border border-blue-400 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
          <Sparkles size={16} className="text-white" />
        </div>
      </div>
    </div>
  );
}

export function GenAIVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl" />

      <motion.div 
        animate={{ y: [-5, 5, -5] }} 
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="relative w-full max-w-[200px] h-40 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl flex items-center justify-center z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute w-24 h-24 bg-violet-600/30 rounded-full blur-xl"
        />
        
        <div className="w-16 h-16 bg-violet-600 rounded-xl border border-violet-400 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.6)] z-20 relative">
          <BrainCircuit size={32} className="text-white" />
          
          {/* Data particles */}
          <motion.div animate={{ y: -20, opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute top-0 right-0 w-1.5 h-1.5 bg-violet-300 rounded-full" />
          <motion.div animate={{ y: 20, opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-violet-300 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
