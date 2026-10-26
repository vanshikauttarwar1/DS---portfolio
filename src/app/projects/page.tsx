"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  SlidersHorizontal, 
  Layers,
  ChevronRight
} from "lucide-react";
import clsx from "clsx";
import { PROJECTS, ProjectItem } from "@/data/projects";
import { renderProjectVisual } from "@/components/visuals/ProjectVisuals";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "clinical-ai", label: "Clinical & Healthcare AI" },
  { id: "ocr-vision", label: "OCR & Document Intelligence" },
  { id: "prompt-systems", label: "Prompt Systems & Platforms" },
  { id: "agents-automation", label: "Autonomous Agents" },
  { id: "in-progress", label: "In Progress" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: PROJECTS.length,
      "clinical-ai": PROJECTS.filter(p => p.category === "clinical-ai").length,
      "ocr-vision": PROJECTS.filter(p => p.category === "ocr-vision").length,
      "prompt-systems": PROJECTS.filter(p => p.category === "prompt-systems").length,
      "agents-automation": PROJECTS.filter(p => p.category === "agents-automation").length,
      "in-progress": PROJECTS.filter(p => p.status === "In Progress").length,
    };
    return counts;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      if (activeCategory === "all") return true;
      if (activeCategory === "in-progress") return project.status === "In Progress";
      return project.category === activeCategory;
    });
  }, [activeCategory]);

  return (
    <main className="container mx-auto px-4 md:px-6 py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-mono font-medium text-primary mb-6">
            <Sparkles size={12} className="text-primary" />
            <span>12 Production AI Workflows &amp; Engines</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]">
            Production <span className="font-serif italic font-normal text-muted-foreground">Systems</span>{" & "}Impact
          </h1>
        </header>

        {/* Filters Controls */}
        <section className="mb-12 space-y-6">
          <div className="flex items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full">
              <SlidersHorizontal size={16} className="text-muted-foreground shrink-0 hidden sm:block mr-1" />
              {CATEGORIES.map((cat) => {
                const count = categoryCounts[cat.id] ?? 0;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={clsx(
                      "px-3.5 py-2 rounded-xl text-xs md:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer border",
                      isActive
                        ? "bg-foreground text-background border-foreground shadow-sm"
                        : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/30"
                    )}
                  >
                    <span>{cat.label}</span>
                    <span 
                      className={clsx(
                        "text-[10px] font-mono px-1.5 py-0.2 rounded-full",
                        isActive ? "bg-background/20 text-background" : "bg-muted text-muted-foreground"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Active Result Status */}
          <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
            <span>
              Showing <strong className="text-foreground">{filteredProjects.length}</strong> of {PROJECTS.length} projects
            </span>
          </div>
        </section>

        {/* Unified Impact Grid */}
        <section>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-24 bg-card rounded-3xl border border-border">
              <p className="text-lg font-medium text-foreground mb-2">No projects match this category</p>
              <p className="text-sm text-muted-foreground mb-6">Select a different category to view projects.</p>
              <button
                onClick={() => setActiveCategory("all")}
                className="px-4 py-2 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </AnimatePresence>
            </div>
          )}
        </section>

      </div>
    </main>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const isInProgress = project.status === "In Progress";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className={clsx(
        "group relative rounded-3xl bg-card border border-border flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl",
        project.colorTheme
      )}
    >
      {/* Top Visual Container */}
      <div className={clsx("relative h-56 md:h-60 w-full border-b border-border overflow-hidden", project.bgTheme)}>
        {renderProjectVisual(project.visualKey)}

        {/* Status Pill Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          {isInProgress ? (
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-[11px] font-mono font-bold flex items-center gap-1.5 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              In Active Build
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-bold flex items-center gap-1.5 backdrop-blur-md shadow-sm">
              <CheckCircle2 size={12} className="text-emerald-500" />
              Production Deployed
            </span>
          )}
        </div>

        {/* Deep Dive Action Link */}
        <Link
          href={`/projects/${project.slug}`}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 text-foreground backdrop-blur-md border border-border shadow-sm group-hover:scale-110 group-hover:bg-foreground group-hover:text-background transition-all"
          title="View Case Study"
        >
          <ArrowUpRight size={18} />
        </Link>
      </div>

      {/* Card Content Area */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        
        {/* Category Label */}
        <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-1.5">
          <Layers size={12} />
          <span>{project.categoryLabel}</span>
        </div>

        {/* Project Title */}
        <h2 className="text-2xl md:text-2xl font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
          <Link href={`/projects/${project.slug}`} className="hover:underline flex items-baseline justify-between gap-2">
            <span>{project.title}</span>
          </Link>
        </h2>

        {/* Project Description */}
        <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* UNIFIED IMPACT GRID: High-Density 4-Metric Grid */}
        <div className="mb-6 p-4 rounded-2xl bg-muted/40 border border-border/80">
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Key Performance Metrics
          </div>

          <div className="grid grid-cols-2 gap-3">
            {project.metrics.map((metric, idx) => (
              <div 
                key={idx}
                className={clsx(
                  "p-2.5 rounded-xl border flex flex-col justify-center transition-colors",
                  metric.highlight 
                    ? "bg-card border-border shadow-xs" 
                    : "bg-muted/50 border-border/60"
                )}
              >
                <div className="text-lg md:text-xl font-bold font-sans tracking-tight text-foreground">
                  {metric.value}
                </div>
                <div className="text-[11px] font-mono font-bold text-primary uppercase tracking-wider mt-0.5">
                  {metric.label}
                </div>
                {metric.sub && (
                  <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
                    {metric.sub}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto pt-4 border-t border-border/60">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-[11px] font-mono font-medium border border-border/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Card Footer: Link to Case Study */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-card border border-border hover:bg-muted/50 text-xs font-mono font-semibold text-foreground transition-colors group/link"
        >
          <span>Explore Architecture &amp; Implementation</span>
          <ChevronRight size={14} className="text-muted-foreground group-hover/link:translate-x-1 group-hover/link:text-foreground transition-all" />
        </Link>

      </div>
    </motion.div>
  );
}
