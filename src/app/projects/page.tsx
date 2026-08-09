import Link from "next/link";
import { ArrowUpRight, BarChart2 } from "lucide-react";
import clsx from "clsx";
import { 
  IMNexusVisual, 
  MedicalScribeVisual, 
  VisionVisual, 
  NewsletterVisual, 
  BuyWiseVisual 
} from "@/components/visuals/ProjectVisuals";

type Project = {
  slug: string;
  title: string;
  description: string;
  impact?: string;
  tags: string[];
  liveUrl?: string;
  visual?: React.ReactNode;
  colorTheme: string;
  bgTheme: string;
};

const PROJECTS: Project[] = [
  {
    slug: "im-nexus",
    title: "IM Nexus",
    description: "Built a dual-LLM orchestration engine using Gemini and Claude that automatically converts provider documentation into EMR-ready prompts and schemas.",
    impact: "80% reduction in manual prompt engineering. 100+ production prompts.",
    tags: ["Gemini", "Claude", "FastAPI", "PostgreSQL", "GitLab CI/CD", "RBAC"],
    visual: <IMNexusVisual />,
    colorTheme: "hover:border-blue-500/50",
    bgTheme: "bg-blue-500/5",
  },
  {
    slug: "medical-scribe-ai",
    title: "Medical Scribe AI",
    description: "End-to-end speech-to-EMR pipeline converting doctor-patient audio into structured clinical attributes with high accuracy.",
    impact: "9.5+ Avg Accuracy. 2 edits per chart. Scaled 1 scribe to 2.5 providers.",
    tags: ["Whisper", "FastAPI", "AWS Lambda", "Step Functions", "S3", "Pydantic"],
    visual: <MedicalScribeVisual />,
    colorTheme: "hover:border-rose-500/50",
    bgTheme: "bg-rose-500/5",
  },
  {
    slug: "vision-language-platform",
    title: "Vision Language Platform",
    description: "Multimodal AI workflow for structured data extraction from complex PDF documents with ROI detection.",
    impact: "93-96% accuracy with a 52% lower API cost.",
    tags: ["Gemini", "GPT-4o", "FastAPI", "S3", "Vision AI"],
    visual: <VisionVisual />,
    colorTheme: "hover:border-emerald-500/50",
    bgTheme: "bg-emerald-500/5",
  },
  {
    slug: "weekly-newsletter-agent",
    title: "Weekly Newsletter Agent",
    description: "Automated agentic workflow connecting HRMS data to LLMs via an MCP Server.",
    impact: "Saved 15+ hours/week in manual reporting. 100% automated delivery.",
    tags: ["LangGraph", "MCP Server", "Antigravity", "SMTP", "Cron Jobs"],
    visual: <NewsletterVisual />,
    colorTheme: "hover:border-indigo-500/50",
    bgTheme: "bg-indigo-500/5",
  },
  {
    slug: "buywise",
    title: "BuyWise",
    description: "AI-driven product matching and sentiment analysis application.",
    impact: "Boosted product matching accuracy by 32% and user confidence by 24%.",
    tags: ["Next.js", "Prisma", "SQLite", "Sentiment Analysis"],
    visual: <BuyWiseVisual />,
    colorTheme: "hover:border-teal-500/50",
    bgTheme: "bg-teal-500/5",
  },
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-6 py-24 min-h-[90vh]">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground">
            Featured <span className="font-serif italic text-muted-foreground font-normal">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-serif">
            A selection of production-grade AI systems, LLM orchestration engines, and multimodal pipelines I've engineered.
          </p>
        </header>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => {
            const Wrapper = project.liveUrl ? 'a' : Link;
            return (
              <Wrapper
                href={project.liveUrl || `/projects/${project.slug}`}
                target={project.liveUrl ? "_blank" : "_self"}
                rel={project.liveUrl ? "noreferrer" : ""}
                key={project.slug}
                className={clsx(
                  "group relative rounded-3xl bg-card border border-border flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl",
                  project.colorTheme
                )}
              >
                {/* Top: Image Container */}
                <div className={clsx("relative h-64 w-full border-b border-border overflow-hidden", project.bgTheme)}>
                  {project.visual}
                  
                  {project.liveUrl && (
                    <div className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 text-foreground backdrop-blur-md border border-border shadow-sm">
                      <ArrowUpRight size={18} />
                    </div>
                  )}
                </div>

                {/* Bottom: Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground mb-3">
                    {project.title}
                  </h2>
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-[13px] font-medium tracking-wide border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {project.impact && (
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 mt-auto">
                      <h3 className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-1">Business Impact</h3>
                      <p className="font-medium text-sm text-foreground leading-relaxed">{project.impact}</p>
                    </div>
                  )}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </main>
  );
}
