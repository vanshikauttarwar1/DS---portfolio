"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Layers, Sparkles, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { PROJECTS } from "@/data/projects";
import { renderProjectVisual } from "@/components/visuals/ProjectVisuals";

export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const project = PROJECTS.find(
    (p) => p.slug === slug || (slug === "grexa-multi-agent-smb-suite" && p.slug === "multi-agent-smb-suite")
  );

  if (!project) {
    return (
      <main className="container mx-auto px-6 py-24 min-h-screen flex items-center justify-center">
        <div className="max-w-md text-center bg-card p-8 rounded-3xl border border-border shadow-lg">
          <h1 className="text-2xl font-bold mb-3 text-foreground">Project Not Found</h1>
          <p className="text-muted-foreground text-sm mb-6">
            The project you are looking for does not exist or may have been renamed.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Return to Projects</span>
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const isInProgress = project.status === "In Progress";

  return (
    <main className="container mx-auto px-4 md:px-6 py-12 md:py-20 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-10 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects Showcase</span>
        </Link>

        {/* Header Section */}
        <header className="mb-12">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-mono font-medium border border-border flex items-center gap-1.5">
              <Layers size={12} />
              {project.categoryLabel}
            </span>

            {isInProgress ? (
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-mono font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                In Active Build
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-emerald-500" />
                Production Deployed
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-foreground leading-[1.15]">
            {project.title}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-8">
            {project.shortSubtitle} &mdash; {project.description}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-muted text-foreground/80 text-xs font-mono font-medium border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Visual Architecture Preview Container */}
        <div className={clsx("w-full h-64 md:h-80 rounded-3xl border border-border overflow-hidden mb-12 shadow-xl", project.bgTheme)}>
          {renderProjectVisual(project.visualKey)}
        </div>

        {/* Key Metrics Grid */}
        <div className="mb-16 p-6 rounded-3xl bg-card border border-border shadow-sm">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-1.5">
            <Sparkles size={14} className="text-primary" />
            <span>Measured Production Impact</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((metric, idx) => (
              <div 
                key={idx}
                className={clsx(
                  "p-4 rounded-2xl border flex flex-col justify-center",
                  metric.highlight ? "bg-primary/5 border-primary/20" : "bg-muted/40 border-border"
                )}
              >
                <div className="text-2xl md:text-3xl font-bold font-sans tracking-tight text-foreground">
                  {metric.value}
                </div>
                <div className="text-xs font-mono font-bold text-primary uppercase tracking-wider mt-1">
                  {metric.label}
                </div>
                {metric.sub && (
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    {metric.sub}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive Case Study Content */}
        <div className="space-y-12 mb-16">
          {project.sections.map((section, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-xs"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {section.title}
              </h2>
              <div className="text-muted-foreground leading-relaxed text-sm md:text-base font-serif space-y-4">
                <p>{section.content}</p>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Production Highlights Checklist */}
        <div className="p-6 md:p-8 rounded-3xl bg-muted/40 border border-border mb-16">
          <h2 className="text-lg font-mono font-bold uppercase tracking-widest text-foreground mb-4">
            Key Engineering &amp; Operational Highlights
          </h2>
          <div className="space-y-3">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm md:text-base text-foreground/90 leading-relaxed">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/projects"
            className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; All Projects
          </Link>

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border hover:bg-muted/60 text-xs md:text-sm font-mono font-semibold text-foreground transition-all group"
            >
              <span>Next: {nextProject.title}</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

      </div>
    </main>
  );
}
