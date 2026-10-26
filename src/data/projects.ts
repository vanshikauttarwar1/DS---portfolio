export type ProjectMetric = {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
};

export type CaseStudySection = {
  title: string;
  content: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  shortSubtitle: string;
  category: "clinical-ai" | "ocr-vision" | "prompt-systems" | "agents-automation";
  categoryLabel: string;
  status: "Completed" | "In Progress";
  featured?: boolean;
  description: string;
  metrics: ProjectMetric[];
  highlights: string[];
  tags: string[];
  colorTheme: string;
  bgTheme: string;
  badgeTheme: string;
  visualKey: string;
  sections: CaseStudySection[];
};

export const PROJECTS: ProjectItem[] = [
  {
    slug: "kane-wound-care-clinical-doc",
    title: "Kane Wound Care (KWC) — Production Clinical Documentation",
    shortSubtitle: "Tabular Clinical Documentation & Encounter Matrices at Scale",
    category: "clinical-ai",
    categoryLabel: "Clinical & Healthcare AI",
    status: "Completed",
    featured: true,
    description: "Production-grade clinical documentation pipeline generating EMR-ready tabular encounter charts, wound assessment matrices, and structured notes with 97.54% zero-edit fidelity.",
    metrics: [
      { value: "65,241", label: "Total Charts", sub: "Apr–Oct 2026", highlight: true },
      { value: "97.54%", label: "Zero-Edit Rate", sub: "63,639 charts clean", highlight: true },
      { value: "$0.16", label: "Cost / Chart", sub: "Optimized pipelines" },
      { value: "61", label: "Active Clinicians", sub: "Consolidated providers" },
    ],
    highlights: [
      "Tabular Chart Generation & 97.54% Zero-Edit Accuracy: Autonomously formats complex multi-wound assessments into structured tabular encounter matrices (anatomical site, dimensions, tissue composition, and staged interventions) with 63,639 out of 65,241 charts requiring zero clinician edits.",
      "Unit Economics ($0.16 / Chart): Optimized model architecture and prompt pipelines to process complete clinical notes at $0.16 per chart.",
      "Production Scale (65,241 Charts): Generated and managed 65,241 clinical encounters across 61 consolidated clinicians in ~6.5 months.",
      "Scribe Capacity Support: Increased scribe productivity by 25–50%, allowing scribes to support up to 2–2.5 providers each based on operational workflow data.",
      "Client Turnaround & Stability: Shipped customer-requested clinical template refinements with same-day turnaround, maintaining stability across 6–7 major revisions with zero downtime.",
    ],
    tags: ["Python", "HTML", "FastAPI", "Prompt Engineering", "EHR Tabular Schemas", "GPT-5.2"],
    colorTheme: "hover:border-emerald-500/50",
    bgTheme: "bg-emerald-500/5",
    badgeTheme: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    visualKey: "kwc-clinical",
    sections: [
      {
        title: "Executive Summary & Business Context",
        content: "Kane Wound Care (KWC) required an enterprise-grade clinical documentation solution capable of supporting dozens of high-volume specialty clinicians without sacrificing medical fidelity or inflating cloud inference costs. Over a ~6.5-month production deployment window, the system generated 65,241 clinical notes with unmatched operational stability."
      },
      {
        title: "Tabular Encounter Matrices & Structured Schemas",
        content: "Unlike narrative clinic notes, clinical wound care documentation is inherently tabular. The system was designed to parse clinician dictations and map them into multidimensional evaluation tables—tracking anatomical sites, 3D measurements (L×W×D), tissue breakdown (granulation, slough, epithelial), exudate levels, and specific debridement codes. These tabular records ingest directly into EHR grids without formatting distortion."
      },
      {
        title: "System Architecture & Unit Economics",
        content: "Architected resilient prompt pipelines and structured clinical output validators running asynchronously via FastAPI. Optimized prompt token usage and inference batching to drive documentation cost down to just $0.16 per encounter, proving that frontier medical AI can achieve extraordinary unit economics at scale."
      },
      {
        title: "Clinical Fidelity & Measurable Impact",
        content: "Achieved an audited 97.54% zero-edit rate across 65,241 charts, meaning 63,639 notes required no clinician revisions prior to signing. Enabled individual clinical scribes to scale capacity from 1 provider up to 2–2.5 providers each, boosting operational scribe throughput by 25–50%."
      }
    ]
  },
  {
    slug: "kwc-ocr-pdf-splitter",
    title: "KWC OCR + PDF Splitter",
    shortSubtitle: "High-Throughput Autonomous Document Segmentation",
    category: "ocr-vision",
    categoryLabel: "OCR & Document Intelligence",
    status: "Completed",
    featured: true,
    description: "Automated optical segmentation pipeline that identifies patient boundaries in multi-page clinical records, extracts demographics, and routes verified encounters to destination SFTP servers.",
    metrics: [
      { value: "98.5%", label: "Time Reduced", sub: "4-6h down to <6m", highlight: true },
      { value: "< 6 min", label: "Batch Speed", sub: "vs 4–6 hrs manual", highlight: true },
      { value: "2–3 min", label: "Saved / Patient", sub: "Zero manual touches" },
      { value: "100–150", label: "Patients / Batch", sub: "200–370+ pages" },
    ],
    highlights: [
      "Turnaround Reduction (4–6+ Hours → <6 Mins): Slashed processing time for high-volume batches from 4–6+ hours of manual document splitting down to under 6 minutes of automated background execution.",
      "2–3 Minutes Saved per Patient: Eliminates manual boundary identification, multi-page verification, file extraction, renaming, and SFTP folder routing.",
      "High-Volume Batch Capacity: Ingests consolidated PDFs averaging 200–370+ total pages (~2 pages per patient) and autonomously segments each encounter.",
      "Zero-Touch Ingestion & SFTP Routing: Organizes patient-specific files into required folder structures and routes them automatically to destination servers.",
    ],
    tags: ["Python", "Tesseract OCR", "OCR Pipelines", "PDF Processing", "SFTP Automation", "Keyword-Based Document Splitting"],
    colorTheme: "hover:border-cyan-500/50",
    bgTheme: "bg-cyan-500/5",
    badgeTheme: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    visualKey: "kwc-splitter",
    sections: [
      {
        title: "The Problem",
        content: "Clinical operations received massive consolidated PDF batches containing 200 to 370+ pages representing 100–150 distinct patients. Medical scribes and billing staff spent 4 to 6+ hours every day manually reviewing boundaries, cutting PDFs, renaming files, and uploading them to disparate SFTP directories."
      },
      {
        title: "The Automated Pipeline",
        content: "Engineered an intelligent OCR-driven segmentation pipeline that parses multi-page medical records, detects individual patient header boundaries, extracts demographic anchors, and programmatically splits the master document into verified patient encounters."
      },
      {
        title: "Results & Reliability",
        content: "Reduced batch execution from 4–6 hours to under 6 minutes with 98.5% turnaround reduction. The system operates fully touchless, directly transferring structured patient packets to downstream SFTP repositories with zero human intervention."
      }
    ]
  },
  {
    slug: "code-reconciliation-system",
    title: "Code Reconciliation System",
    shortSubtitle: "Automated Chart-to-Billing Compliance & Audit System",
    category: "clinical-ai",
    categoryLabel: "Clinical & Healthcare AI",
    status: "Completed",
    featured: true,
    description: "Automated chart-to-billing reconciliation engine that cross-validates clinical documentation against billing claim codes to identify missed CPT codes and prevent revenue leakage.",
    metrics: [
      { value: "135+ hrs", label: "Saved / Batch", sub: "1.88 min / chart", highlight: true },
      { value: "10x", label: "Audit Speed", sub: "5-12m down to 30s-1m", highlight: true },
      { value: "~4,300", label: "Charts / Batch", sub: "Zero manual collation" },
      { value: "100%", label: "Audit Readiness", sub: "CPT discrepancy catch" },
    ],
    highlights: [
      "135+ Staff Hours Saved per Batch: Saves 1.88 minutes of manual review per chart, eliminating ~135+ hours of manual billing effort across an average batch of ~4,300 encounters.",
      "10x Faster Audit Speed (5–12 Mins → 30s–1 Min): Reduced encounter review time from ~5–12 minutes of manual checks down to 30 seconds to 1 minute via automated processing.",
      "Identifies Potential Revenue Leakage: Automatically detects unbilled encounters and potentially missed billable CPT codes from provider notes prior to claim filing.",
      "Automated Batch Processing: Processes thousands of records in bulk with zero manual collation, allowing staff to focus specifically on flagged discrepancies.",
      "Audit & Compliance Support: Validates that billed procedures have matching clinical documentation, helping support compliance and audit readiness.",
    ],
    tags: ["Python", "GPT-5.2", "Rule-Based Engines", "CPT Code Auditing"],
    colorTheme: "hover:border-blue-500/50",
    bgTheme: "bg-blue-500/5",
    badgeTheme: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    visualKey: "reconciliation",
    sections: [
      {
        title: "The Compliance & Revenue Challenge",
        content: "In large-volume clinical practices, discrepancies between doctor chart narratives and recorded billing CPT codes cause severe revenue leakage and compliance risks. Manual reconciliation took 5 to 12 minutes per chart, creating huge backlogs."
      },
      {
        title: "Intelligent Cross-Matching Engine",
        content: "Developed an asynchronous reconciliation engine that cross-validates clinical procedures mentioned in physician progress notes against final billing claim submissions. The engine automatically flags missing modifier codes, unbilled procedures, and documentation gaps."
      },
      {
        title: "Operational Savings",
        content: "Processed batches of ~4,300 charts in bulk, saving 135+ staff hours per batch (1.88 minutes per chart saved). Cut review latency by 10x (down to 30s–1m), allowing billing teams to resolve high-priority discrepancies proactively."
      }
    ]
  },
  {
    slug: "rcm-eligibility-module",
    title: "RCM Eligibility Module",
    shortSubtitle: "Automated Insurance Verification & Duplicate Prevention",
    category: "clinical-ai",
    categoryLabel: "Clinical & Healthcare AI",
    status: "Completed",
    description: "Standalone eligibility verification module featuring scheduled batch verification, pre-verification caching, and prior-authorization duplicate prevention.",
    metrics: [
      { value: "< 3 sec", label: "Check-In Target", sub: "Pre-verification cache", highlight: true },
      { value: "0 min", label: "Morning Roster", sub: "15-20 min eliminated", highlight: true },
      { value: "80%+", label: "Touchless Target", sub: "Exception-only review" },
      { value: "100%", label: "Dup Prevention", sub: "Prior-auth tracking" },
    ],
    highlights: [
      "Daily Roster Checks (15–20 Mins → 0 Mins Target): Replaced manual morning roster checks with scheduled overnight batch verification ahead of clinic opening.",
      "Front-Desk Check-In (<3 Seconds Target): Implemented pre-verification caching designed to cut front-desk check-in waiting time down to under 3 seconds.",
      "Duplicate Filing Prevention: Built tracking logic to prevent duplicate prior-authorization filings, eliminating repetitive cross-checking effort.",
      "Targeted Touchless Automation (80%+ Target): Automated routine eligibility lookups so front-desk and billing staff only intervene on genuine exceptions.",
      "Modular Reusable Architecture: Engineered as a standalone, pluggable module that can be embedded into existing platforms or deployed independently.",
    ],
    tags: ["Python", "TypeScript", "In-Memory Caching", "Asynchronous Queues", "Clearinghouse API Integration", "Scheduled Cron Jobs"],
    colorTheme: "hover:border-indigo-500/50",
    bgTheme: "bg-indigo-500/5",
    badgeTheme: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    visualKey: "rcm-eligibility",
    sections: [
      {
        title: "Problem Statement",
        content: "Manual patient eligibility checks consumed 15–20 minutes of front-desk morning roster preparation every single day. Patient arrivals were delayed by live verification queries, and duplicate prior-authorization filings caused wasted administrative effort."
      },
      {
        title: "Architecture & Verification Flow",
        content: "Engineered an overnight batch verification queue and pre-verification cache that queries payer clearinghouses ahead of time. Designed duplicate-detection logic to track active prior-authorizations and flag renewals automatically."
      },
      {
        title: "Business Outcome",
        content: "Achieved instantaneous <3 second front-desk check-in responses, eliminated manual morning roster checks, and routed routine clearances automatically, liberating front-desk staff to focus on exception handling."
      }
    ]
  },
  {
    slug: "specialty-prompt-development",
    title: "Specialty Prompt Development",
    shortSubtitle: "Clinical Documentation Framework Across 13+ Specialties",
    category: "prompt-systems",
    categoryLabel: "Prompt Systems & Platforms",
    status: "Completed",
    description: "Modular clinical documentation prompt suites standardizing SOAP note structures, clinical nomenclature, and compliance guidelines across diverse provider practices.",
    metrics: [
      { value: "13+", label: "Specialties", sub: "Wound Care, Podiatry, etc.", highlight: true },
      { value: "Rapid", label: "Practice Onboarding", sub: "Modular prompt suites", highlight: true },
      { value: "SOAP", label: "Standardization", sub: "Strict nomenclature" },
      { value: "Zero", label: "Custom Code Needed", sub: "Reusable architecture" },
    ],
    highlights: [
      "13+ Specialty Prompt Suites: Delivered tailored documentation models across 13+ specialties (including Wound Care, Podiatry, Cardiology, Orthopedics, and Internal Medicine).",
      "Rapid Practice Onboarding: Built reusable, modular prompt architectures that cut the setup time required to configure and launch new specialty provider groups.",
      "Clinical Standardization: Standardized SOAP note structures, clinical nomenclature, and compliance guidelines across diverse multi-specialty practices.",
    ],
    tags: ["System and User Prompt Design", "Prompt Optimization", "Prompt Caching", "Few-Shot Prompting"],
    colorTheme: "hover:border-violet-500/50",
    bgTheme: "bg-violet-500/5",
    badgeTheme: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
    visualKey: "specialty-prompt",
    sections: [
      {
        title: "The Challenge of Multi-Specialty Scaling",
        content: "Every medical specialty possesses distinct clinical vocabularies, anatomical conventions, billing guidelines, and SOAP note requirements. Building one-off prompts for each practice was slow, brittle, and unmaintainable."
      },
      {
        title: "Modular Prompt Architecture",
        content: "Designed a modular prompt architecture comprising core clinical engines, specialty-specific lexicons, and configurable output schemas. Supported diverse disciplines including Wound Care, Podiatry, Cardiology, Orthopedics, and Internal Medicine."
      },
      {
        title: "Impact on Practice Onboarding",
        content: "Reduced new specialty onboarding turnaround dramatically. Practices go live with standardized clinical documentation in hours rather than weeks, with 100% adherence to specialty compliance guidelines."
      }
    ]
  },
  {
    slug: "prompt-engineering-quality",
    title: "Prompt Engineering & Quality",
    shortSubtitle: "Continuous Optimization & QA Across 40+ Clinicians",
    category: "prompt-systems",
    categoryLabel: "Prompt Systems & Platforms",
    status: "Completed",
    description: "Continuous prompt optimization and telemetry-driven quality assurance resolving doctor workflow friction points and sustaining high clinician note acceptance.",
    metrics: [
      { value: "40+", label: "Clinicians Supported", sub: "Instant & Plus tiers", highlight: true },
      { value: "Low", label: "Clinician Edit Rate", sub: "High note trust", highlight: true },
      { value: "Same-Day", label: "Ops Resolution", sub: "Rapid feedback loops" },
      { value: "High", label: "Clinician Retention", sub: "Operational stability" },
    ],
    highlights: [
      "40+ Clinicians Supported: Tailored and fine-tuned AI prompts for 40+ Instant & Plus clinicians based on real-time feedback and note refinement logs.",
      "Minimized Clinician Edit Rates: Systematically optimized output quality to drive lower revision rates, ensuring clinicians trust and accept AI notes with minimal touch.",
      "Same-Day Ops Resolution: Partnered day-to-day with the Operations team to resolve clinician workflow friction points with rapid same-day turnarounds.",
    ],
    tags: ["System and User Prompt Design", "Prompt Optimization", "Prompt Caching", "Few-Shot Prompting"],
    colorTheme: "hover:border-purple-500/50",
    bgTheme: "bg-purple-500/5",
    badgeTheme: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    visualKey: "prompt-quality",
    sections: [
      {
        title: "Operational Context",
        content: "Maintaining high doctor satisfaction with automated clinical notes requires rapid iteration on subjective stylistic preferences while preserving strict clinical accuracy and compliance."
      },
      {
        title: "Feedback-Driven Refinement Loops",
        content: "Established telemetry and systematic feedback loops reviewing doctor edits. Refined prompt instructions, negative examples, and formatting directives to resolve individual clinician friction points on the same day."
      },
      {
        title: "Long-Term Retention",
        content: "Supported 40+ active clinicians across Instant & Plus service tiers, maintaining high clinician retention, high note acceptance, and close alignment between AI and Clinical Operations."
      }
    ]
  },
  {
    slug: "im-nexus",
    title: "IM-NEXUS Platform",
    shortSubtitle: "AI-Assisted Prompt Generation & Provider Management",
    category: "prompt-systems",
    categoryLabel: "Prompt Systems & Platforms",
    status: "Completed",
    featured: true,
    description: "AI-assisted prompt generation and provider configuration platform automating dual-LLM orchestration, prompt versioning, and lifecycle management for clinical operations.",
    metrics: [
      { value: "70", label: "Providers", sub: "Active configurations", highlight: true },
      { value: "328", label: "Prompts", sub: "Production schemas", highlight: true },
      { value: "80–90%", label: "Effort Slashed", sub: "AI team prompt time" },
      { value: "9+/10", label: "Avg Note Score", sub: "Strict fidelity" },
    ],
    highlights: [
      "Documentation Consistency: Supported an estimated ~10% documentation consistency and accuracy improvement across provider workflows.",
      "Reduced Manual Prompt Effort: Reduced manual prompt engineering effort by a reported 80–90% (AI team) and saved approximately 30% Operations team time per provider.",
      "Admin Portal & Management: Built the Admin Portal for provider configuration, prompt versioning, and lifecycle management.",
      "Scalable Architecture: Established a standardized platform that improves scalability, prompt quality, and onboarding consistency.",
    ],
    tags: ["FastAPI", "PostgreSQL", "Claude 3.5 Sonnet", "Gemini 3.1 Pro", "Role-Based Access Control (RBAC)", "Next.js"],
    colorTheme: "hover:border-blue-500/50",
    bgTheme: "bg-blue-500/5",
    badgeTheme: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    visualKey: "im-nexus",
    sections: [
      {
        title: "Business Problem",
        content: "Healthcare organizations manually create extraction prompts and JSON schemas for each provider. This process is time-consuming, prone to human error, and difficult to scale across dozens of distinct provider formats."
      },
      {
        title: "Solution & Dual-LLM Architecture",
        content: "Built a dual-LLM orchestration engine using Gemini and Claude that automatically converts provider documentation into EMR-ready prompts and schemas. Engineered a full Admin Portal featuring provider configuration, prompt versioning, and RBAC controls."
      },
      {
        title: "Impact & Production Milestones",
        content: "Scaled to 70 active providers and generated 328 production prompts with 8+ active internal users. Reduced manual engineering effort by 80–90% while achieving a 9+/10 average clinical accuracy score."
      }
    ]
  },
  {
    slug: "operational-newsletter-automation",
    title: "Operational Newsletter Automation",
    shortSubtitle: "Agentic Publishing Pipeline for Executive Communications",
    category: "agents-automation",
    categoryLabel: "Autonomous Agents & Automation",
    status: "Completed",
    description: "Agentic publishing pipeline connecting internal data repositories, synthesizing key highlights, and automating scheduled executive communications.",
    metrics: [
      { value: "100%", label: "Manual Effort Cut", sub: "Zero manual collation", highlight: true },
      { value: "100%", label: "Automated", sub: "Scheduled delivery", highlight: true },
      { value: "15+ hrs", label: "Weekly Saved", sub: "Org-wide reporting" },
      { value: "Reliable", label: "Delivery Workflow", sub: "Zero missed runs" },
    ],
    highlights: [
      "Manual Effort Elimination: Eliminated 100% of repetitive data collation and manual layout drafting time.",
      "Standardized Delivery: Built a consistent, reliable workflow ready for organization-wide adoption.",
      "Data Ingestion: Seamless integration of internal metrics and executive updates into ready-to-publish formats.",
    ],
    tags: ["LangGraph", "MCP Servers", "Python", "AI Agents", "HTML Email Automation"],
    colorTheme: "hover:border-indigo-500/50",
    bgTheme: "bg-indigo-500/5",
    badgeTheme: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    visualKey: "newsletter",
    sections: [
      {
        title: "The Bottleneck",
        content: "Collating cross-departmental KPIs, operational progress, and clinical metrics into structured weekly executive newsletters required hours of repetitive manual data copying and formatting."
      },
      {
        title: "Agentic Publishing Workflow",
        content: "Implemented an agentic data pipeline using LangGraph and MCP servers to connect data repositories, synthesize key highlights, draft executive summaries, and format responsive HTML email newsletters."
      },
      {
        title: "Business Outcome",
        content: "Completely eliminated repetitive manual collation (100% reduction), guaranteeing reliable, on-time weekly dissemination of executive intelligence."
      }
    ]
  },
  {
    slug: "multi-agent-smb-suite",
    title: "Multi-Agent SMB Automation Suite (N8N)",
    shortSubtitle: "Autonomous BI, Marketing, and Sales Multi-Agent System",
    category: "agents-automation",
    categoryLabel: "Autonomous Agents & Automation",
    status: "Completed",
    featured: true,
    description: "Multi-agent autonomous ecosystem orchestrating conversational WhatsApp BI queries, scheduled LinkedIn marketing generation, and 24/7 inbound lead qualification.",
    metrics: [
      { value: "3", label: "Autonomous Agents", sub: "BI, Marketing, Sales", highlight: true },
      { value: "24/7", label: "Sales Inbound", sub: "WhatsApp conversion", highlight: true },
      { value: "Real-Time", label: "WhatsApp BI", sub: "Sales & profit queries" },
      { value: "Automated", label: "LinkedIn Posts", sub: "Branded copy & visuals" },
    ],
    highlights: [
      "Conversational BI Agent (WhatsApp): Built an on-demand business intelligence agent allowing owners to query daily sales, net profits, and stock levels via natural language on WhatsApp.",
      "Autonomous Marketing & Social Agent: Developed an AI agent that generates branded promotional copy and visuals, publishing directly to LinkedIn on an automated schedule.",
      "Lead Generation & Sales Conversion Agent: Built an automated WhatsApp customer acquisition pipeline that captures, qualifies, and nurtures inbound leads into paying customers 24/7.",
    ],
    tags: ["n8n", "Multi-Agent Workflows", "WhatsApp Cloud API", "LinkedIn API Integration", "PostgreSQL"],
    colorTheme: "hover:border-amber-500/50",
    bgTheme: "bg-amber-500/5",
    badgeTheme: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    visualKey: "multi-agent-smb",
    sections: [
      {
        title: "Concept & Motivation",
        content: "Small and medium business owners often lack dedicated data analysts, social media teams, and round-the-clock sales representatives. The multi-agent suite was built to provide an autonomous operating system over familiar channels."
      },
      {
        title: "Multi-Agent Architecture in N8N",
        content: "Orchestrated three cooperative agents: (1) WhatsApp BI Agent connected to inventory and accounting databases, (2) Autonomous LinkedIn Agent generating branded copy and graphic assets, and (3) Inbound WhatsApp Sales Agent qualifying leads 24/7."
      },
      {
        title: "Impact & Commercial Value",
        content: "Enabled SMB owners to receive instant P&L answers on their phones, automated steady top-of-funnel inbound marketing, and converted customer leads around the clock with zero extra staff overhead."
      }
    ]
  },
  {
    slug: "kwc-ocr-handwritten-table-extraction",
    title: "KWC OCR — Handwritten Table & Clinical Extraction",
    shortSubtitle: "Deep Tabular Extraction from Legacy Medical Records",
    category: "ocr-vision",
    categoryLabel: "OCR & Document Intelligence",
    status: "Completed",
    description: "Computer vision and OCR pipeline parsing irregular cell boundaries, de-skewing scanned pages, and transforming handwritten tabular clinical logs into structured records.",
    metrics: [
      { value: "High", label: "Extraction Recall", sub: "Dense tabular notes", highlight: true },
      { value: "Legacy", label: "Chart Unlocked", sub: "Handwritten records", highlight: true },
      { value: "Core", label: "Foundation", sub: "Enterprise OCR layer" },
      { value: "Structured", label: "Digital Matrix", sub: "SQL/JSON export" },
    ],
    highlights: [
      "Handwritten Table Extraction: Automatically unlocked trapped tabular clinical data from handwritten charts into structured digital records.",
      "Reusable Architecture: Established the enterprise OCR foundation leveraged across subsequent document digitization initiatives.",
      "Boundary & Cell Normalization: Corrected skew, resolved irregular grid lines, and extracted handwritten clinical notations reliably.",
    ],
    tags: ["Python", "OpenCV", "Table Extraction", "Handwriting Recognition", "Document AI", "Vision-Language Models (Gemini 3.1 Pro)"],
    colorTheme: "hover:border-teal-500/50",
    bgTheme: "bg-teal-500/5",
    badgeTheme: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
    visualKey: "kwc-ocr-table",
    sections: [
      {
        title: "The Legacy Data Bottleneck",
        content: "Historic clinical charts often contain critical tabular logs (wound measurements, vitals trends, dosage histories) scribbled by hand in irregular paper grids that standard OCR tools fail to parse."
      },
      {
        title: "Deep Vision & Grid Parsing",
        content: "Engineered computer vision algorithms for cell boundary detection, rotational de-skewing, and handwriting character recognition, converting unstructured paper scans into structured digital records."
      },
      {
        title: "Enterprise Foundation",
        content: "Established a robust, reusable document intelligence pipeline that became the technical bedrock for downstream EMR ingestion and multimodal clinical analytics."
      }
    ]
  },
  {
    slug: "handwritten-chart-digitization-hitl",
    title: "Handwritten Clinical Chart Digitization & HITL Pipeline",
    shortSubtitle: "Multimodal Ophthalmology Extraction with Click-to-Verify HITL",
    category: "ocr-vision",
    categoryLabel: "OCR & Document Intelligence",
    status: "In Progress",
    featured: true,
    description: "Vision-language pipeline digitizing handwritten clinical charts with dense cursive handwriting, tabular IOP logs, and an interactive click-to-verify human-in-the-loop workflow.",
    metrics: [
      { value: "80–90%", label: "Scribe Time Cut", sub: "Click-to-verify flow", highlight: true },
      { value: "~$0.012", label: "Cost / Page", sub: "17-model benchmark", highlight: true },
      { value: "17", label: "Frontier Models", sub: "Rigorous evaluation" },
      { value: "Interactive", label: "HITL Interface", sub: "Progressive streaming" },
    ],
    highlights: [
      "80–90% Scribe Time Reduction: Built an interactive progressive streaming verification UI converting manual transcription into a click-to-verify flow.",
      "Cloud Cost Optimization: Benchmarked 17 frontier AI models to establish an architecture lowering processing cost to ~$0.012/page.",
      "High Extraction Recall: Evaluated across dense handwriting, tabular IOP logs, and surgical notes with automated medical shorthand normalization on benchmark evaluation sets.",
      "Quality Controls & Validation: Built multi-threaded background execution with automated blank-page suppression and clinical sanity checks (IOL stickers, IOP ranges).",
    ],
    tags: ["Vision-Language Models (Gemini 3.1 Pro)", "Human-in-the-Loop (HITL) Verification", "Model Benchmarking", "FastAPI", "Multimodal AI"],
    colorTheme: "hover:border-rose-500/50",
    bgTheme: "bg-rose-500/5",
    badgeTheme: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    visualKey: "ophthalmology",
    sections: [
      {
        title: "The Clinical Challenge in Ophthalmology",
        content: "Ophthalmology charts present extreme digitization challenges: rapid cursive handwriting, proprietary shorthand, dense tabular IOP (intraocular pressure) logs, and physical lens (IOL) stickers attached to paper charts."
      },
      {
        title: "17-Model Benchmark & HITL Architecture",
        content: "Benchmarked 17 frontier vision-language models for extraction accuracy vs. latency vs. cost, establishing an optimal pipeline running at just ~$0.012/page. Paired this with a progressive streaming verification interface where human reviewers click to verify low-confidence fields."
      },
      {
        title: "Current Milestones & Ongoing Work",
        content: "Reduced scribe transcription time by 80–90%. Incorporating automated blank-page suppression and clinical range sanity checks to ensure 100% safety before EMR integration."
      }
    ]
  },
  {
    slug: "custom-template-ai-engine",
    title: "Custom Template AI Engine",
    shortSubtitle: "Dynamic Prompt Restructuring & Custom SOAP Categories",
    category: "clinical-ai",
    categoryLabel: "Clinical & Healthcare AI",
    status: "In Progress",
    description: "Dynamic prompt interpretation engine that interprets provider customization requests in natural language and injects specialized clinical categories into SOAP notes.",
    metrics: [
      { value: "15+", label: "Custom Categories", sub: "Dropdown SOAP injection", highlight: true },
      { value: "Dynamic", label: "Prompt Restructuring", sub: "Natural language intent", highlight: true },
      { value: "Zero", label: "Hardcoded Paths", sub: "Flexible prompt engine" },
      { value: "High", label: "Clinical Fidelity", sub: "Medical validation" },
    ],
    highlights: [
      "Dynamic Restructuring: Built logic to interpret and execute complex provider requests (reordering sections, adjusting note length, altering writing styles).",
      "Custom SOAP Categories: Engineered a flexible system allowing providers to dynamically inject 15+ additional custom categories directly into their SOAP notes via dropdown selection.",
      "Prompt Engineering: Designing and optimizing the underlying prompt architecture for all 15+ new clinical categories, ensuring high-fidelity medical outputs.",
    ],
    tags: ["Python", "OpenAI API", "JSON Restructuring", "Dynamic Prompting", "Clinical Schema Adaptation", "Few-Shot Learning", "Prompt Chaining"],
    colorTheme: "hover:border-amber-500/50",
    bgTheme: "bg-amber-500/5",
    badgeTheme: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    visualKey: "custom-template",
    sections: [
      {
        title: "The Need for Doctor Customization",
        content: "Standard clinical documentation engines force doctors into rigid SOAP note templates. Clinicians demand custom sections (e.g., customized wound measurements, specific risk assessments, custom surgical advisories) without waiting for engineering release cycles."
      },
      {
        title: "Dynamic Intent Parsing Engine",
        content: "Designed an AI engine that parses provider template instructions (e.g., 'expand on wound prognosis', 'condense assessment to bullet points', 'inject specialized diabetic limb exam') and restructures prompt pipelines dynamically."
      },
      {
        title: "15+ Modular Clinical Categories",
        content: "Empowered providers to select from 15+ custom categories via dropdown. Developing high-fidelity prompt modules that seamlessly synthesize specialized clinical data while maintaining strict medical safety."
      }
    ]
  }
];

export const PRODUCTION_STATS = [
  { value: "65,241+", label: "Charts Generated", sub: "97.54% Zero-Edit Rate" },
  { value: "$0.16", label: "Cost / Chart", sub: "Optimized unit economics" },
  { value: "70+", label: "Providers Supported", sub: "Across 13+ Specialties" },
  { value: "328+", label: "Production Prompts", sub: "80-90% manual effort saved" },
  { value: "98.5%", label: "Turnaround Reduction", sub: "< 6 min batch processing" },
  { value: "135+ hrs", label: "Saved per Batch", sub: "Chart-to-billing reconciliation" }
];
