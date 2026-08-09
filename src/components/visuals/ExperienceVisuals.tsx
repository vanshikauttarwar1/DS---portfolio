"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, LineChart, Code2, Layers, Cpu, Server, Table } from "lucide-react";

const GridBackground = () => (
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
       style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '16px 16px' }} 
  />
);

export function ScribeEMRVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[320px] h-48 flex items-center justify-between z-10">
        
        {/* Input Node */}
        <motion.div 
          animate={{ y: [-5, 5, -5] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-16 h-16 bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-center shadow-lg relative z-20"
        >
          <Database size={24} className="text-slate-300" />
        </motion.div>

        {/* Dual LLM Architecture */}
        <div className="flex flex-col gap-6 relative z-20">
          <motion.div 
            animate={{ scale: [0.95, 1.05, 0.95] }} 
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-16 h-16 bg-blue-600 rounded-2xl border-2 border-blue-400 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.6)]"
          >
            <BrainCircuit size={24} className="text-white" />
            <span className="absolute -top-3 text-[9px] font-bold bg-blue-900 text-blue-200 px-2 py-0.5 rounded-full border border-blue-500/50 uppercase">Gemini</span>
          </motion.div>

          <motion.div 
            animate={{ scale: [1.05, 0.95, 1.05] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-16 h-16 bg-purple-600 rounded-2xl border-2 border-purple-400 flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.6)]"
          >
            <Cpu size={24} className="text-white" />
            <span className="absolute -bottom-3 text-[9px] font-bold bg-purple-900 text-purple-200 px-2 py-0.5 rounded-full border border-purple-500/50 uppercase">Claude</span>
          </motion.div>
        </div>

        {/* Output Node (EMR) */}
        <motion.div 
          animate={{ y: [5, -5, 5] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="w-20 h-24 bg-slate-900 rounded-xl border border-emerald-500/50 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] relative z-20 gap-2"
        >
          <Layers size={20} className="text-emerald-400" />
          <div className="flex flex-col gap-1.5 w-full px-3">
             <div className="h-1.5 w-full bg-emerald-500/40 rounded-full" />
             <div className="h-1.5 w-4/5 bg-emerald-500/40 rounded-full" />
             <div className="h-1.5 w-full bg-emerald-500/40 rounded-full" />
          </div>
        </motion.div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
           <path d="M 64 96 C 100 96, 120 56, 136 56" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="4 4" className="opacity-50" />
           <path d="M 64 96 C 100 96, 120 136, 136 136" stroke="#9333ea" strokeWidth="2" fill="none" strokeDasharray="4 4" className="opacity-50" />
           
           <path d="M 184 56 C 210 56, 220 96, 248 96" stroke="#10b981" strokeWidth="2" fill="none" strokeDasharray="4 4" className="opacity-50" />
           <path d="M 184 136 C 210 136, 220 96, 248 96" stroke="#10b981" strokeWidth="2" fill="none" strokeDasharray="4 4" className="opacity-50" />
        </svg>
      </div>
    </div>
  );
}

export function SchoolknotVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/15 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[320px] h-48 bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl p-4 flex gap-4 z-10 overflow-hidden">
        {/* Sidebar / SQL Table */}
        <div className="w-1/3 border-r border-slate-700 flex flex-col gap-3 pr-4">
           <div className="flex items-center gap-1.5 text-slate-300 border-b border-slate-800 pb-2">
             <Server size={14} className="text-emerald-500" />
             <span className="text-[10px] font-mono font-bold">SQL_PROD</span>
           </div>
           <div className="space-y-2">
             {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-1">
                  <div className="h-1.5 w-1/3 bg-slate-700 rounded" />
                  <div className="h-1.5 w-2/3 bg-emerald-500/30 rounded" />
                </div>
             ))}
           </div>
        </div>

        {/* Dashboard (Tableau representation) */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
               <LineChart size={16} className="text-teal-400" />
               <div className="h-2 w-16 bg-slate-600 rounded" />
            </div>
            <div className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[9px] font-bold rounded border border-emerald-500/50">KPIs LIVE</div>
          </div>
          
          <div className="flex-1 flex items-end justify-between gap-1.5 pt-4">
             {[30, 45, 25, 70, 50, 90].map((h, i) => (
                <motion.div 
                  key={i}
                  className="w-full bg-gradient-to-t from-teal-600 to-emerald-400 rounded-t-sm"
                  initial={{ height: "10%" }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 2, delay: i * 0.1, ease: "easeOut" }}
                />
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function EncoraVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-rose-500/15 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[300px] h-48 flex gap-4 z-10">
        
        {/* React Web App Side */}
        <motion.div 
          animate={{ y: [-3, 3, -3] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-1/2 h-full bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden flex flex-col"
        >
          <div className="h-6 bg-slate-100 border-b border-slate-200 flex items-center px-2 gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 p-3 flex flex-col items-center justify-center relative">
            {/* Abstract React Atom */}
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} className="w-16 h-16 rounded-full border border-rose-200 absolute" />
            <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }} className="w-16 h-16 rounded-full border border-rose-300 absolute scale-x-50" />
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="w-16 h-16 rounded-full border border-rose-200 absolute scale-y-50" />
            <Code2 size={24} className="text-rose-500 relative z-10" />
          </div>
        </motion.div>

        {/* Python/Pandas Side */}
        <motion.div 
          animate={{ y: [3, -3, 3] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="w-1/2 h-full bg-slate-900 rounded-xl shadow-2xl border border-slate-700 flex flex-col"
        >
          <div className="h-8 bg-slate-950 flex items-center px-3 border-b border-slate-800">
            <span className="text-[9px] font-mono font-bold text-slate-400">pipeline.py</span>
          </div>
          <div className="p-3 font-mono text-[9px] text-slate-300 space-y-1.5">
             <div className="text-rose-400">import <span className="text-slate-300">pandas</span> as <span className="text-amber-300">pd</span></div>
             <div className="h-1.5 w-full bg-slate-800 rounded mt-2" />
             <div className="h-1.5 w-3/4 bg-slate-800 rounded" />
             
             {/* Dataframe representation */}
             <div className="mt-3 bg-slate-950 border border-slate-800 rounded p-1.5 flex flex-col gap-1">
               <div className="flex items-center gap-1.5 pb-1 border-b border-slate-800">
                 <Table size={10} className="text-emerald-500" />
                 <span className="text-[8px] text-emerald-400">df_cleaned</span>
               </div>
               <div className="h-1 w-full bg-rose-500/40 rounded" />
               <div className="h-1 w-full bg-rose-500/40 rounded" />
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
