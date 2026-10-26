"use client";

import { motion } from "framer-motion";
import {
  FileJson,
  Mic,
  Scan,
  Mail,
  BarChart3,
  Settings,
  User,
  Command,
  Zap,
  Split,
  FileCheck,
  ShieldCheck,
  Clock,
  Sparkles,
  Server,
  Layers,
  Activity,
  Sliders,
  TrendingDown,
  CheckCircle2
} from "lucide-react";

export const GridBackground = () => (
  <div
    className="absolute inset-0 opacity-[0.05] pointer-events-none"
    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '16px 16px' }}
  />
);

// 1. KWC Clinical Documentation Visual
export function KWCClinicalVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-blue-500/15 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[300px] h-48 bg-card border border-border rounded-xl shadow-xl p-3 flex flex-col justify-between overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <FileCheck size={14} />
            </div>
            <span className="text-xs font-mono font-bold tracking-tight text-foreground">KWC Tabular Clinical Chart</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            97.54% Zero-Edit
          </span>
        </div>

        {/* Tabular Clinical Chart Preview */}
        <div className="my-auto bg-muted/40 rounded-lg border border-border/60 overflow-hidden text-[10px] font-mono">
          <div className="flex justify-between items-center px-2 py-1 bg-muted/80 border-b border-border text-[9px] text-muted-foreground">
            <span className="text-primary font-bold">Wound Care Tabular Chart</span>
            <span className="text-emerald-500 font-bold">$0.16/chart</span>
          </div>
          <div className="grid grid-cols-4 gap-1 px-2 py-1 bg-muted/30 border-b border-border/50 text-muted-foreground font-semibold text-[8px] uppercase">
            <span>Site</span>
            <span>L×W×D (cm)</span>
            <span>Tissue</span>
            <span>Status</span>
          </div>
          <div className="grid grid-cols-4 gap-1 px-2 py-1 text-[9px] border-b border-border/30">
            <span className="text-foreground font-medium">Sacral</span>
            <span className="text-emerald-600 dark:text-emerald-400">4.2×3.1×0.8</span>
            <span>75% Gran</span>
            <span className="text-emerald-500 font-semibold">Healing</span>
          </div>
          <div className="grid grid-cols-4 gap-1 px-2 py-1 text-[9px]">
            <span className="text-foreground font-medium">L Heel</span>
            <span className="text-emerald-600 dark:text-emerald-400">2.1×1.4×0.3</span>
            <span>90% Epith</span>
            <span className="text-blue-500 font-semibold">Stable</span>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-border/60">
          <div className="bg-muted/50 rounded p-1">
            <div className="text-[11px] font-bold font-mono text-emerald-600 dark:text-emerald-400">65,241</div>
            <div className="text-[9px] text-muted-foreground uppercase">Charts</div>
          </div>
          <div className="bg-muted/50 rounded p-1">
            <div className="text-[11px] font-bold font-mono text-blue-600 dark:text-blue-400">61</div>
            <div className="text-[9px] text-muted-foreground uppercase">Clinicians</div>
          </div>
          <div className="bg-muted/50 rounded p-1">
            <div className="text-[11px] font-bold font-mono text-foreground">+50%</div>
            <div className="text-[9px] text-muted-foreground uppercase">Capacity</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. KWC OCR + PDF Splitter Visual
export function KWCSplitterVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-cyan-500/15 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[300px] h-48 bg-card border border-border rounded-xl shadow-xl p-3 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
              <Split size={14} />
            </div>
            <span className="text-xs font-mono font-bold tracking-tight text-foreground">Batch Ingestion & Split</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 flex items-center gap-1">
            <Clock size={10} />
            &lt; 6 min Batch
          </span>
        </div>

        {/* Visual Workflow: Master PDF -> Segmented Patient Packets */}
        <div className="flex items-center justify-between my-auto px-2">
          {/* Master Batch PDF */}
          <motion.div
            animate={{ scale: [0.98, 1.02, 0.98] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-20 h-20 bg-slate-900 text-white rounded-lg p-2 flex flex-col justify-between border border-slate-700 shadow-md text-center"
          >
            <div className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest font-bold">PDF Batch</div>
            <div className="text-[11px] font-mono font-bold text-slate-200 leading-tight">370+ pgs</div>
            <div className="text-[8px] text-slate-400 font-mono">150 Pts</div>
          </motion.div>

          {/* Splitting Laser & Arrows */}
          <div className="flex flex-col items-center gap-1">
            <motion.div
              animate={{ x: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-cyan-500"
            >
              <Zap size={18} />
            </motion.div>
            <span className="text-[9px] font-mono font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">98.5% Cut</span>
          </div>

          {/* SFTP Folders */}
          <div className="flex flex-col gap-1.5">
            {[1, 2, 3].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 2, delay: idx * 0.3 }}
                className="w-24 h-5 bg-muted rounded border border-border px-2 flex items-center justify-between text-[9px] font-mono"
              >
                <div className="flex items-center gap-1 text-foreground">
                  <Server size={10} className="text-cyan-500" />
                  <span>PT_{idx.toString().padStart(3, '0')}</span>
                </div>
                <span className="text-emerald-500 font-bold">✓</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground pt-2 border-t border-border/60">
          <span>Manual: 4–6 hrs</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">Saved: 2–3 min/patient</span>
        </div>
      </div>
    </div>
  );
}

// 3. Code Reconciliation System Visual
export function ReconciliationVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-blue-500/15 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[300px] h-48 bg-card border border-border rounded-xl shadow-xl p-3 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <ShieldCheck size={14} />
            </div>
            <span className="text-xs font-mono font-bold tracking-tight text-foreground">CPT Code Reconciliation</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            10x Faster Audit
          </span>
        </div>

        {/* Comparison Engine Mockup */}
        <div className="space-y-1.5 my-auto">
          <div className="flex items-center justify-between bg-muted/50 p-2 rounded-lg border border-border/60 text-[10px] font-mono">
            <span className="text-muted-foreground">Chart: Debridement</span>
            <span className="text-blue-600 dark:text-blue-400 font-bold">CPT 11042</span>
            <span className="text-emerald-500 font-bold">Matched ✓</span>
          </div>
          <div className="flex items-center justify-between bg-blue-500/5 p-2 rounded-lg border border-blue-500/20 text-[10px] font-mono">
            <span className="text-muted-foreground">Chart: Compression</span>
            <span className="text-amber-500 font-bold">CPT 29580</span>
            <span className="text-blue-500 font-bold">Recovered +$</span>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="flex items-center justify-between text-[10px] font-mono pt-2 border-t border-border/60">
          <span className="text-muted-foreground font-medium">Batch ~4,300 Charts</span>
          <span className="font-bold text-blue-600 dark:text-blue-400">135+ Staff Hours Saved</span>
        </div>
      </div>
    </div>
  );
}

// 4. RCM Eligibility Module Visual
export function RCMEligibilityVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-indigo-500/15 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[300px] h-48 bg-card border border-border rounded-xl shadow-xl p-3 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
              <Activity size={14} />
            </div>
            <span className="text-xs font-mono font-bold tracking-tight text-foreground">RCM Real-Time Eligibility</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            &lt; 3s Check-in
          </span>
        </div>

        {/* Verification Card */}
        <div className="bg-slate-900 text-slate-200 rounded-lg p-2.5 my-auto border border-slate-800 text-[10px] font-mono space-y-1.5 shadow-inner">
          <div className="flex justify-between items-center text-slate-400">
            <span>Payer: BlueCross / Aetna</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 size={11} /> Active
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span>Prior-Auth Dup Check:</span>
            <span className="text-indigo-400 font-bold">Protected (0 Dups)</span>
          </div>
          <div className="flex justify-between items-center text-slate-400">
            <span>Morning Roster:</span>
            <span className="text-slate-100 font-bold">0 min (Overnight Batch)</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[10px] font-mono pt-2 border-t border-border/60 text-muted-foreground">
          <span>Target: 80%+ Touchless</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">Modular Reusable Core</span>
        </div>
      </div>
    </div>
  );
}

// 5. Specialty Prompt Development Visual
export function SpecialtyPromptVisual() {
  const specialties = ["Wound Care", "Podiatry", "Cardiology", "Orthopedics"];
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-violet-500/15 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[300px] h-48 bg-card border border-border rounded-xl shadow-xl p-3 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-violet-500/10 text-violet-500 flex items-center justify-center">
              <Layers size={14} />
            </div>
            <span className="text-xs font-mono font-bold tracking-tight text-foreground">Multi-Specialty Engine</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
            13+ Specialties
          </span>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 gap-2 my-auto">
          {specialties.map((s) => (
            <div
              key={s}
              className="p-2 rounded-lg bg-muted/60 border border-border text-center flex flex-col justify-center"
            >
              <div className="text-[11px] font-mono font-bold text-foreground">{s}</div>
              <div className="text-[9px] text-violet-600 dark:text-violet-400 font-mono">Standardized SOAP</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[10px] font-mono pt-2 border-t border-border/60 text-muted-foreground">
          <span>Zero Custom Code</span>
          <span className="text-violet-600 dark:text-violet-400 font-bold">Rapid Practice Launch</span>
        </div>
      </div>
    </div>
  );
}

// 6. Prompt Engineering & Quality Visual
export function PromptQualityVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-purple-500/15 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[300px] h-48 bg-card border border-border rounded-xl shadow-xl p-3 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-purple-500/10 text-purple-500 flex items-center justify-center">
              <TrendingDown size={14} />
            </div>
            <span className="text-xs font-mono font-bold tracking-tight text-foreground">QA & Edit Optimization</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
            40+ Clinicians
          </span>
        </div>

        {/* Feedback loop visualization */}
        <div className="bg-muted/40 rounded-lg p-2.5 my-auto border border-border text-[10px] font-mono space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Clinician Edit Rate:</span>
            <span className="text-emerald-500 font-bold flex items-center gap-1">
              Minimized &darr;
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Ops Resolution:</span>
            <span className="text-purple-600 dark:text-purple-400 font-bold">Same-Day Turnaround</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Provider Tiers:</span>
            <span className="text-foreground font-bold">Instant & Plus Supported</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[10px] font-mono pt-2 border-t border-border/60 text-muted-foreground">
          <span>Continuous Tuning</span>
          <span className="text-purple-600 dark:text-purple-400 font-bold">High Doctor Retention</span>
        </div>
      </div>
    </div>
  );
}

// 7. SMB Multi-Agent Suite Visual
export function SMBMultiAgentVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-amber-500/15 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[300px] h-48 bg-card border border-border rounded-xl shadow-xl p-3 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Sparkles size={14} />
            </div>
            <span className="text-xs font-mono font-bold tracking-tight text-foreground">SMB Multi-Agent Suite</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            3 Autonomous Agents
          </span>
        </div>

        {/* 3 Agents Display */}
        <div className="grid grid-cols-3 gap-1.5 my-auto text-center font-mono">
          <div className="bg-muted/50 p-2 rounded-lg border border-border flex flex-col items-center">
            <span className="text-emerald-500 font-bold text-xs">WhatsApp</span>
            <span className="text-[9px] text-muted-foreground mt-0.5">BI Agent</span>
          </div>
          <div className="bg-muted/50 p-2 rounded-lg border border-border flex flex-col items-center">
            <span className="text-blue-500 font-bold text-xs">LinkedIn</span>
            <span className="text-[9px] text-muted-foreground mt-0.5">Marketing</span>
          </div>
          <div className="bg-muted/50 p-2 rounded-lg border border-border flex flex-col items-center">
            <span className="text-amber-500 font-bold text-xs">24/7 Sales</span>
            <span className="text-[9px] text-muted-foreground mt-0.5">Lead Bot</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[10px] font-mono pt-2 border-t border-border/60 text-muted-foreground">
          <span>Powered by N8N</span>
          <span className="text-amber-600 dark:text-amber-400 font-bold">Zero Staff Overhead</span>
        </div>
      </div>
    </div>
  );
}

// Backwards compatibility alias
export const GrexaVisual = SMBMultiAgentVisual;

// 8. KWC OCR Table Extraction Visual
export function KWCOCRTableVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-teal-500/15 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[300px] h-48 bg-card border border-border rounded-xl shadow-xl p-3 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-teal-500/10 text-teal-500 flex items-center justify-center">
              <Scan size={14} />
            </div>
            <span className="text-xs font-mono font-bold tracking-tight text-foreground">Handwritten Table OCR</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            Tabular Extraction
          </span>
        </div>

        {/* Simulated Table Grid with Scanning Bar */}
        <div className="relative bg-slate-900 rounded-lg p-2 my-auto border border-slate-800 text-[9px] font-mono overflow-hidden">
          <div className="grid grid-cols-3 gap-1 text-slate-400 border-b border-slate-800 pb-1 font-bold">
            <span>Date</span>
            <span>Wound (cm)</span>
            <span>Exudate</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-slate-200 pt-1">
            <span>10/12</span>
            <span className="text-teal-400">2.4 x 1.2</span>
            <span>Serous</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-slate-200">
            <span>10/19</span>
            <span className="text-teal-400">1.8 x 0.9</span>
            <span>None</span>
          </div>

          {/* Laser Scanner */}
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[10px] font-mono pt-2 border-t border-border/60 text-muted-foreground">
          <span>Legacy Records Unlocked</span>
          <span className="text-teal-600 dark:text-teal-400 font-bold">Clean Structured Data</span>
        </div>
      </div>
    </div>
  );
}

// 9. Ophthalmology HITL Visual
export function OphthalmologyVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-rose-500/15 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[300px] h-48 bg-card border border-border rounded-xl shadow-xl p-3 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-rose-500/10 text-rose-500 flex items-center justify-center">
              <Scan size={14} />
            </div>
            <span className="text-xs font-mono font-bold tracking-tight text-foreground">Ophthalmology HITL</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
            In Active Build
          </span>
        </div>

        {/* Benchmarking + HITL Verification */}
        <div className="bg-muted/40 rounded-lg p-2.5 my-auto border border-border text-[10px] font-mono space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Scribe Time Reduction:</span>
            <span className="text-rose-600 dark:text-rose-400 font-bold">80–90%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Unit Cost / Page:</span>
            <span className="text-emerald-500 font-bold">~$0.012 / page</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Models Benchmarked:</span>
            <span className="text-foreground font-bold">17 Frontier AI Models</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[10px] font-mono pt-2 border-t border-border/60 text-muted-foreground">
          <span>Interactive Click-to-Verify</span>
          <span className="text-rose-600 dark:text-rose-400 font-bold">Dense Handwriting OCR</span>
        </div>
      </div>
    </div>
  );
}

// 10. Custom Template AI Engine Visual
export function CustomTemplateVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-amber-500/15 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[300px] h-48 bg-card border border-border rounded-xl shadow-xl p-3 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Sliders size={14} />
            </div>
            <span className="text-xs font-mono font-bold tracking-tight text-foreground">Dynamic Template Engine</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            In Progress
          </span>
        </div>

        {/* Dropdown Selector Simulation */}
        <div className="space-y-1.5 my-auto bg-muted/40 p-2 rounded-lg border border-border text-[10px] font-mono">
          <div className="flex items-center justify-between bg-card p-1.5 rounded border border-border shadow-sm">
            <span className="text-muted-foreground">Inject Category:</span>
            <span className="text-amber-600 dark:text-amber-400 font-bold">15+ Categories &darr;</span>
          </div>
          <div className="flex justify-between items-center text-[9px] text-muted-foreground px-1">
            <span>Dynamic Restructuring</span>
            <span className="text-emerald-500 font-bold">Zero Hardcoding</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[10px] font-mono pt-2 border-t border-border/60 text-muted-foreground">
          <span>SOAP Adaptation</span>
          <span className="text-amber-600 dark:text-amber-400 font-bold">High Clinical Fidelity</span>
        </div>
      </div>
    </div>
  );
}

// Existing visuals retained
export function IMNexusVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <GridBackground />
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[280px] h-48 flex items-center justify-between">
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="w-16 h-20 bg-card shadow-xl rounded-md border border-border p-2 flex flex-col gap-1.5 z-10"
        >
          <div className="h-1.5 w-3/4 bg-muted-foreground/40 rounded" />
          <div className="h-1 w-full bg-muted-foreground/20 rounded" />
          <div className="h-1 w-5/6 bg-muted-foreground/20 rounded" />
          <div className="h-1 w-full bg-muted-foreground/20 rounded" />
          <div className="mt-auto h-2 w-1/2 bg-blue-500 rounded" />
        </motion.div>

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

        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-24 h-32 bg-slate-900 shadow-2xl rounded-md border border-slate-700 p-2.5 flex flex-col gap-1.5 z-10 text-white"
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

      <div className="relative w-full max-w-[280px] h-48 bg-card shadow-2xl rounded-xl border border-border flex overflow-hidden">
        <div className="w-16 bg-slate-900 border-r border-slate-800 p-2 flex flex-col items-center gap-4 pt-4">
          <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center text-white mb-2 shadow-[0_0_15px_rgba(225,29,72,0.6)]">
            <Mic size={18} />
          </div>
          <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center"><User size={16} /></div>
          <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center mt-auto mb-2"><Settings size={16} /></div>
        </div>

        <div className="flex-1 p-4 flex flex-col bg-card">
          <div className="flex items-center justify-between mb-4">
            <div className="h-3 w-1/3 bg-muted rounded" />
            <div className="px-2 py-1 rounded bg-rose-600 text-[9px] font-bold text-white shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> REC
            </div>
          </div>

          <div className="h-14 bg-muted/50 rounded-lg border border-border flex items-center justify-center gap-1.5 mb-4 px-4 overflow-hidden shadow-inner">
            {[1, 3, 2, 5, 4, 2, 6, 3, 2, 1, 4, 2, 5, 3].map((i, index) => (
              <motion.div
                key={index}
                className="w-1.5 bg-rose-500 rounded-full"
                animate={{ height: ["20%", `${i * 15}%`, "20%"] }}
                transition={{ repeat: Infinity, duration: 1.2, delay: index * 0.05, ease: "easeInOut" }}
              />
            ))}
          </div>

          <div className="space-y-2.5 mt-auto">
            <div className="h-2 w-full bg-muted rounded" />
            <div className="h-2 w-4/5 bg-muted rounded" />
            <div className="h-2 w-1/2 bg-muted rounded" />
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

      <div className="relative w-full max-w-[260px] h-48 bg-card shadow-2xl rounded-lg border border-border p-2">
        <div className="w-full h-full bg-slate-900 rounded border border-slate-700 overflow-hidden relative">
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

          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)] z-20"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />

          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <motion.div
              className="w-32 h-20 border-[3px] border-emerald-500 bg-emerald-500/20 rounded flex items-start justify-end p-1 relative"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
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
        className="w-full max-w-[280px] h-48 bg-card shadow-2xl rounded-xl border border-border flex flex-col overflow-hidden relative z-10"
      >
        <div className="h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <div className="ml-4 h-5 w-32 bg-slate-800 rounded flex items-center px-2">
            <div className="h-1.5 w-16 bg-slate-600 rounded-full" />
          </div>
        </div>

        <div className="flex-1 p-4 flex gap-4">
          <div className="flex-1 space-y-3">
            <div className="h-2 w-2/3 bg-muted rounded" />
            <div className="space-y-1.5">
              <div className="h-1.5 w-full bg-muted/60 rounded" />
              <div className="h-1.5 w-full bg-muted/60 rounded" />
              <div className="h-1.5 w-4/5 bg-muted/60 rounded" />
            </div>

            <div className="mt-4 space-y-3 border-l-[3px] border-indigo-200 dark:border-indigo-800 pl-3 relative">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-indigo-600 ring-4 ring-card shadow-md" />
              <div className="h-5 w-2/3 bg-indigo-50 dark:bg-indigo-950/40 rounded border border-indigo-200 dark:border-indigo-800" />
              <div className="absolute -left-[7px] bottom-1 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 ring-4 ring-card" />
              <div className="h-5 w-1/2 bg-muted rounded border border-border" />
            </div>
          </div>

          <motion.div
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-16 h-16 rounded-full bg-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.5)] flex items-center justify-center text-white border-[4px] border-card absolute right-4 bottom-4"
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

// Visual dispatcher map
export function renderProjectVisual(visualKey: string) {
  switch (visualKey) {
    case "kwc-clinical":
      return <KWCClinicalVisual />;
    case "kwc-splitter":
      return <KWCSplitterVisual />;
    case "reconciliation":
      return <ReconciliationVisual />;
    case "rcm-eligibility":
      return <RCMEligibilityVisual />;
    case "specialty-prompt":
      return <SpecialtyPromptVisual />;
    case "prompt-quality":
      return <PromptQualityVisual />;
    case "im-nexus":
      return <IMNexusVisual />;
    case "newsletter":
      return <NewsletterVisual />;
    case "multi-agent-smb":
    case "grexa":
      return <SMBMultiAgentVisual />;
    case "kwc-ocr-table":
      return <KWCOCRTableVisual />;
    case "ophthalmology":
      return <OphthalmologyVisual />;
    case "custom-template":
      return <CustomTemplateVisual />;
    case "buywise":
      return <BuyWiseVisual />;
    default:
      return <KWCClinicalVisual />;
  }
}
