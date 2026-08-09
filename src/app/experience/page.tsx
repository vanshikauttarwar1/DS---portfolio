"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { ScribeEMRVisual, SchoolknotVisual, EncoraVisual } from "@/components/visuals/ExperienceVisuals";

const EXPERIENCES = [
  {
    year: "Aug 2025 — Present",
    role: "Data Scientist",
    company: "ScribeEMR Systems Pvt. Ltd.",
    description: "Architecting end-to-end AI workflows, including IM Nexus for automated prompt generation, WoundCare AI for speech-to-EMR pipelines, and LangGraph-powered agentic workflows. Leading the design of dual-LLM orchestration layers using Gemini and Claude.",
    impact: "Reduced manual prompt engineering effort by 80%+ and achieved 98%+ extraction accuracy.",
    tech: ["Python", "FastAPI", "Pydantic", "LLMs", "Gemini", "Claude", "GPT-4o", "Qwen", "LangGraph", "LangChain", "RAG", "Agentic Workflows", "Prompt Engineering", "Prompt Optimization", "Structured Outputs", "LLM Observability (Langfuse)", "MCP", "Vision Language Models (VLMs)", "Whisper", "Speech AI", "OCR Pipelines", "Document Intelligence", "AWS", "PostgreSQL"],
    visual: <ScribeEMRVisual />,
    colorTheme: "hover:border-blue-500/50",
    bgTheme: "bg-blue-500/5",
    dotTheme: "bg-blue-500",
    dateColor: "text-blue-500"
  },
  {
    year: "Aug 2024 — Jun 2025",
    role: "Data Analyst",
    company: "Schoolknot",
    description: "Engineered SQL-based reporting pipelines for a 1M+ record ERP platform. Conducted exploratory data analysis to identify module adoption gaps and built executive Tableau dashboards tracking KPIs.",
    impact: "Improved reporting accuracy by 30% and billing efficiency by 10%.",
    tech: ["SQL", "Tableau", "Data Analysis", "LLM Evaluation"],
    visual: <SchoolknotVisual />,
    colorTheme: "hover:border-emerald-500/50",
    bgTheme: "bg-emerald-500/5",
    dotTheme: "bg-emerald-500",
    dateColor: "text-emerald-500"
  },
  {
    year: "Jun 2021 — Aug 2024",
    role: "Software Developer",
    company: "Encora",
    description: "Developed responsive web applications using ReactJS for healthcare and ed-tech clients. Built Python and SQL-based analytics solutions and automated reporting pipelines using Pandas.",
    impact: "Automated reporting pipelines, reducing manual effort by 40+ hours per month.",
    tech: ["ReactJS", "Python", "Pandas", "SQL", "JavaScript", "HTML/CSS"],
    visual: <EncoraVisual />,
    colorTheme: "hover:border-rose-500/50",
    bgTheme: "bg-rose-500/5",
    dotTheme: "bg-rose-500",
    dateColor: "text-rose-500"
  },
];

export default function ExperiencePage() {
  return (
    <main className="container mx-auto px-6 py-24 min-h-[90vh]">
      <div className="max-w-6xl mx-auto">
        <header className="mb-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground">
            Professional <span className="font-serif italic text-muted-foreground font-normal">Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            A chronological timeline of my career as a data scientist, analyst, and software developer.
          </p>
        </header>

        <div className="relative">
          {/* Central Timeline Line (Desktop) / Left Timeline Line (Mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-32">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full group">
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={clsx(
                      "absolute left-8 md:left-1/2 w-5 h-5 -translate-x-1/2 rounded-full border-4 border-background z-10 shadow-[0_0_15px_rgba(0,0,0,0.1)]",
                      exp.dotTheme
                    )}
                  />

                  {/* Mobile Date (Hidden on Desktop) */}
                  <div className="md:hidden pl-20 mb-4 pt-1">
                    <span className={clsx("font-mono font-bold tracking-widest uppercase text-sm", exp.dateColor)}>
                      {exp.year}
                    </span>
                  </div>

                  {/* Left Side Container (Desktop) */}
                  <div className={clsx(
                    "w-full md:w-[45%] pl-20 md:pl-0",
                    isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  )}>
                    {isEven ? (
                      <ExperienceCard exp={exp} isEven={isEven} />
                    ) : (
                      <div className="hidden md:flex flex-col justify-center h-full opacity-60 transition-opacity group-hover:opacity-100">
                        <span className={clsx("font-mono font-bold tracking-widest uppercase text-lg", exp.dateColor)}>
                          {exp.year}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Right Side Container (Desktop) */}
                  <div className={clsx(
                    "hidden md:flex w-[45%]",
                    isEven ? "text-left pl-12" : "text-right pr-12 justify-end"
                  )}>
                    {!isEven ? (
                      <ExperienceCard exp={exp} isEven={isEven} />
                    ) : (
                      <div className="flex flex-col justify-center h-full opacity-60 transition-opacity group-hover:opacity-100">
                        <span className={clsx("font-mono font-bold tracking-widest uppercase text-lg", exp.dateColor)}>
                          {exp.year}
                        </span>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

function ExperienceCard({ exp, isEven }: { exp: any, isEven: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "bg-card border border-border flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-[2rem]",
        exp.colorTheme
      )}
    >
      {/* Visual Container */}
      <div className={clsx("relative h-48 w-full overflow-hidden border-b border-border shrink-0", exp.bgTheme)}>
        {exp.visual}
      </div>

      {/* Content Container */}
      <div className="p-6 md:p-8 flex flex-col flex-1 text-left">
        <h2 className="text-2xl font-bold tracking-tight mb-1 text-foreground">{exp.role}</h2>
        <h3 className="text-lg text-muted-foreground font-serif italic mb-5">{exp.company}</h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
          {exp.description}
        </p>

        <div className="mb-6 p-4 rounded-xl bg-muted/40 border border-border relative overflow-hidden group-hover:bg-muted/80 transition-colors">
          <div className={clsx("absolute left-0 top-0 bottom-0 w-1", exp.dotTheme)} />
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground mb-1">Business Impact</h4>
          <p className="text-sm text-foreground font-medium">{exp.impact}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {exp.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-background border border-border text-[11px] font-mono font-medium text-foreground shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
