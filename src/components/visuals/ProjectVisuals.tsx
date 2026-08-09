"use client";

import { motion } from "framer-motion";
import { FileJson, Mic, FileText, Scan, Mail, BarChart3, Settings, User, Command, Zap } from "lucide-react";

const GridBackground = () => (
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
       style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '16px 16px' }} 
  />
);

export function IMNexusVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      
      {/* Background glowing orbs - keeping them pastel/light for ambient effect */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[280px] h-48 flex items-center justify-between">
        
        {/* Input Document */}
        <motion.div 
          animate={{ y: [-5, 5, -5] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="w-16 h-20 bg-white shadow-xl rounded-md border border-slate-200 p-2 flex flex-col gap-1.5 z-10"
        >
          <div className="h-1.5 w-3/4 bg-slate-300 rounded" />
          <div className="h-1 w-full bg-slate-200 rounded" />
          <div className="h-1 w-5/6 bg-slate-200 rounded" />
          <div className="h-1 w-full bg-slate-200 rounded" />
          <div className="mt-auto h-2 w-1/2 bg-blue-500 rounded" /> {/* Vibrant touch */}
        </motion.div>

        {/* Processing Nodes - Vibrant */}
        <div className="flex flex-col gap-4 relative z-20">
          <motion.div 
            animate={{ scale: [0.95, 1.05, 0.95], rotate: [0, 5, 0] }} 
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center border border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.6)] relative z-10"
          >
            <div className="absolute -left-6 top-1/2 h-[3px] w-6 bg-gradient-to-r from-transparent to-blue-500" />
            <Zap size={22} className="text-white" />
            <div className="absolute -right-6 top-1/2 h-[3px] w-6 bg-gradient-to-l from-transparent to-blue-500" />
          </motion.div>
          <motion.div 
            animate={{ scale: [1.05, 0.95, 1.05], rotate: [0, -5, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center border border-purple-400 shadow-[0_0_20px_rgba(147,51,234,0.6)] relative z-10"
          >
            <div className="absolute -left-6 top-1/2 h-[3px] w-6 bg-gradient-to-r from-transparent to-purple-500" />
            <Command size={22} className="text-white" />
            <div className="absolute -right-6 top-1/2 h-[3px] w-6 bg-gradient-to-l from-transparent to-purple-500" />
          </motion.div>
        </div>

        {/* Output Schema - Deep dark contrast */}
        <motion.div 
          animate={{ y: [5, -5, 5] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-24 h-32 bg-slate-900 shadow-2xl rounded-md border border-slate-700 p-2.5 flex flex-col gap-1.5 z-10"
        >
          <div className="flex items-center gap-1.5 mb-1">
            <FileJson size={12} className="text-blue-400" />
            <div className="h-1.5 w-1/2 bg-slate-600 rounded" />
          </div>
          <div className="h-1 w-full bg-blue-500/80 rounded" />
          <div className="h-1 w-4/5 bg-blue-500/80 rounded" />
          <div className="h-1 w-5/6 bg-purple-500/80 rounded ml-2" />
          <div className="h-1 w-3/4 bg-purple-500/80 rounded ml-2" />
          <div className="h-1 w-full bg-blue-500/80 rounded" />
        </motion.div>
      </div>
    </div>
  );
}

export function MedicalScribeVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-rose-500/15 rounded-full blur-3xl" />
      
      <div className="relative w-full max-w-[280px] h-48 bg-white shadow-2xl rounded-xl border border-slate-200 flex overflow-hidden">
        {/* Sidebar - Clean contrast */}
        <div className="w-16 bg-slate-900 border-r border-slate-800 p-2 flex flex-col items-center gap-4 pt-4">
          {/* Vibrant icon */}
          <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center text-white mb-2 shadow-[0_0_15px_rgba(225,29,72,0.6)]">
            <Mic size={18} />
          </div>
          <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center"><User size={16} /></div>
          <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center mt-auto mb-2"><Settings size={16} /></div>
        </div>
        
        {/* Main Area */}
        <div className="flex-1 p-4 flex flex-col bg-white">
          <div className="flex items-center justify-between mb-4">
            <div className="h-3 w-1/3 bg-slate-200 rounded" />
            <div className="px-2 py-1 rounded bg-rose-600 text-[9px] font-bold text-white shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> REC
            </div>
          </div>
          
          {/* Audio Waveform - Highly Vibrant */}
          <div className="h-14 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center gap-1.5 mb-4 px-4 overflow-hidden shadow-inner">
             {[1, 3, 2, 5, 4, 2, 6, 3, 2, 1, 4, 2, 5, 3].map((i, index) => (
              <motion.div 
                key={index}
                className="w-1.5 bg-rose-500 rounded-full"
                animate={{ height: ["20%", `${i * 15}%`, "20%"] }}
                transition={{ repeat: Infinity, duration: 1.2, delay: index * 0.05, ease: "easeInOut" }}
              />
            ))}
          </div>

          {/* Transcript Lines */}
          <div className="space-y-2.5 mt-auto">
            <div className="h-2 w-full bg-slate-200 rounded" />
            <div className="h-2 w-4/5 bg-slate-200 rounded" />
            <div className="h-2 w-1/2 bg-slate-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function VisionVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[260px] h-48 bg-white shadow-2xl rounded-lg border border-slate-200 p-2">
        <div className="w-full h-full bg-slate-900 rounded border border-slate-700 overflow-hidden relative">
          
          {/* Fake Document Content (Dark mode document to make lasers pop) */}
          <div className="p-4 space-y-4 opacity-70">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-slate-700 rounded border border-slate-600" />
              <div className="flex-1 space-y-2.5">
                <div className="h-3 w-3/4 bg-slate-600 rounded" />
                <div className="h-2 w-full bg-slate-700 rounded" />
                <div className="h-2 w-5/6 bg-slate-700 rounded" />
              </div>
            </div>
            <div className="h-2 w-full bg-slate-700 rounded" />
            <div className="h-2 w-full bg-slate-700 rounded" />
            <div className="h-2 w-3/4 bg-slate-700 rounded" />
          </div>

          {/* Scanning Laser - Intense Vibrant */}
          <motion.div 
            className="absolute left-0 right-0 h-[2px] bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)] z-20"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />

          {/* Bounding Box */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <motion.div 
              className="w-32 h-20 border-[3px] border-emerald-500 bg-emerald-500/20 rounded flex items-start justify-end p-1 relative"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              {/* Corner brackets */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-4 border-l-4 border-emerald-400" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-4 border-r-4 border-emerald-400" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-4 border-l-4 border-emerald-400" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-4 border-r-4 border-emerald-400" />

              <span className="absolute -top-5 right-0 text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded uppercase tracking-widest font-bold shadow-lg flex items-center gap-1">
                <Scan size={10} /> 96% Match
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NewsletterVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute right-0 bottom-0 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl" />
      
      <motion.div 
        animate={{ y: [-3, 3, -3] }} 
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="w-full max-w-[280px] h-48 bg-white shadow-2xl rounded-xl border border-slate-200 flex flex-col overflow-hidden relative z-10"
      >
        {/* Header - Dark mode for contrast */}
        <div className="h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <div className="ml-4 h-5 w-32 bg-slate-800 rounded flex items-center px-2">
            <div className="h-1.5 w-16 bg-slate-600 rounded-full" />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 p-4 flex gap-4">
          <div className="flex-1 space-y-3">
            <div className="h-2 w-2/3 bg-slate-200 rounded" />
            <div className="space-y-1.5">
               <div className="h-1.5 w-full bg-slate-100 rounded" />
               <div className="h-1.5 w-full bg-slate-100 rounded" />
               <div className="h-1.5 w-4/5 bg-slate-100 rounded" />
            </div>
            
            {/* Automation steps */}
            <div className="mt-4 space-y-3 border-l-[3px] border-indigo-200 pl-3 relative">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-indigo-600 ring-4 ring-white shadow-md" />
              <div className="h-5 w-2/3 bg-indigo-50 rounded border border-indigo-200" />
              <div className="absolute -left-[7px] bottom-1 w-3 h-3 rounded-full bg-slate-300 ring-4 ring-white" />
              <div className="h-5 w-1/2 bg-slate-50 rounded border border-slate-200" />
            </div>
          </div>
          
          {/* Floating Agent Badge - Vibrant */}
          <motion.div 
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-16 h-16 rounded-full bg-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.5)] flex items-center justify-center text-white border-[4px] border-white absolute right-4 bottom-4"
          >
            <Mail size={24} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export function BuyWiseVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-0 left-0 w-48 h-48 bg-teal-500/15 rounded-full blur-3xl" />
      
      <div className="w-full max-w-[280px] h-48 bg-slate-900 shadow-2xl rounded-xl border border-slate-700 p-4 flex flex-col relative z-10 text-white">
        <div className="flex items-center justify-between mb-4">
           <div className="flex items-center gap-2.5">
             <div className="w-10 h-10 rounded bg-teal-600 shadow-[0_0_15px_rgba(13,148,136,0.5)] flex items-center justify-center text-white"><BarChart3 size={20} /></div>
             <div>
               <div className="h-2.5 w-20 bg-slate-600 rounded mb-1.5" />
               <div className="h-1.5 w-12 bg-slate-700 rounded" />
             </div>
           </div>
           <div className="px-2.5 py-1 bg-teal-500 border border-teal-400 rounded text-[10px] font-bold text-white shadow-sm shadow-teal-500/20">
             +32% ROI
           </div>
        </div>

        {/* Dynamic Chart - Vibrant */}
        <div className="flex-1 flex items-end justify-between gap-1.5 mt-2 border-b border-slate-700 pb-1 px-1">
          {[30, 45, 25, 60, 40, 85, 55, 95].map((h, i) => (
            <div key={i} className="w-full relative flex items-end justify-center group h-full">
              <motion.div 
                className="w-full bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-sm max-w-[14px]"
                initial={{ height: "0%" }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
              />
            </div>
          ))}
        </div>

        {/* Floating Sentiment Tags - Vibrant */}
        <motion.div 
          animate={{ y: [-2, 2, -2], x: [0, 2, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -right-2 top-8 px-4 py-1.5 bg-emerald-500 border border-emerald-400 text-white text-[10px] font-bold uppercase rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]"
        >
          Positive
        </motion.div>
        <motion.div 
          animate={{ y: [2, -2, 2], x: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute -left-2 bottom-12 px-4 py-1.5 bg-slate-700 border border-slate-600 text-white text-[10px] font-bold uppercase rounded-full shadow-lg"
        >
          Neutral
        </motion.div>
      </div>
    </div>
  );
}
