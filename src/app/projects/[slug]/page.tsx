"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// Mock data. This should be fetched from a CMS or an API.
const CASE_STUDIES: Record<string, any> = {
  "im-nexus": {
    title: "IM Nexus",
    subtitle: "Automated Prompt Engineering with Dual-LLM Orchestration",
    heroImage: "bg-blue-500/20",
    tags: ["Gemini", "Claude", "FastAPI"],
    sections: [
      {
        title: "Business Problem",
        content: "Healthcare organizations manually create extraction prompts and JSON schemas for each provider. This process is time-consuming, prone to human error, and difficult to scale across thousands of distinct provider formats.",
      },
      {
        title: "Solution & Architecture",
        content: "Built a dual-LLM orchestration engine using Gemini and Claude that automatically converts provider documentation into EMR-ready prompts and schemas. The architecture uses FastAPI for high-throughput asynchronous processing and PostgreSQL for state management.",
      },
      {
        title: "Impact & Performance",
        content: "Achieved an 80% reduction in manual prompt engineering time, successfully generating 100+ production prompts with intelligent retry logic and robust rate limit handling.",
      },
    ],
  },
  // Other case studies would follow here...
};

export default function CaseStudyPage() {
  const { slug } = useParams();
  const caseStudy = CASE_STUDIES[slug as string] || {
    title: "Project Not Found",
    subtitle: "",
    tags: [],
    sections: [],
  };

  return (
    <main className="container mx-auto px-6 py-24 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8">
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-white/70 mb-6">{caseStudy.subtitle}</p>
          
          <div className="flex flex-wrap gap-3">
            {caseStudy.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium text-white/90">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className={`w-full h-64 md:h-96 rounded-2xl ${caseStudy.heroImage || 'bg-white/5'} mb-16 flex items-center justify-center`}>
           <span className="text-white/30 font-medium tracking-widest uppercase">System Architecture Diagram</span>
        </div>

        <div className="space-y-16">
          {caseStudy.sections.map((section: any, index: number) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6 text-white/90 border-b border-white/10 pb-2 inline-block">
                {section.title}
              </h2>
              <div className="prose prose-invert prose-lg max-w-none text-white/70">
                <p className="leading-relaxed">{section.content}</p>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}
