"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, MessageSquare, Clock, Hash } from "lucide-react";
import clsx from "clsx";
import { GeoVisual, PromptVisual, AIDesignVisual, LangGraphVisual, GenAIVisual } from "@/components/visuals/BlogVisuals";

const BLOGS = [
  {
    title: "From SEO to GEO: What YouTube Unboxed at Google Ananta Got Me Thinking About",
    excerpt: "Exploring the shift from Search Engine Optimization to Generative Engine Optimization.",
    date: "2024",
    readTime: "5 min read",
    category: "Medium Article",
    url: "https://medium.com/@vanshikauttarwar14/from-seo-to-geo-what-youtube-unboxed-at-google-ananta-got-me-thinking-about-a20222879f53",
    tags: ["SEO", "Generative AI", "Search", "Strategy"],
    visual: <GeoVisual />,
    colorTheme: "hover:border-amber-500/50",
    bgTheme: "bg-amber-500/5"
  },
  {
    title: "Production Prompt Engineering: Beyond Writing Better Prompts",
    excerpt: "Moving beyond basic prompt tweaks to build robust, production-ready AI pipelines.",
    date: "2024",
    readTime: "7 min read",
    category: "Medium Article",
    url: "https://medium.com/@vanshikauttarwar14/production-prompt-engineering-beyond-writing-better-prompts-ea176b189fe7",
    tags: ["Prompt Engineering", "LLMs", "Pipelines"],
    visual: <PromptVisual />,
    colorTheme: "hover:border-teal-500/50",
    bgTheme: "bg-teal-500/5"
  },
  {
    title: "AI Didn't Replace Design, It Changed Who Gets to Create",
    excerpt: "How artificial intelligence is democratizing design and empowering a new wave of creators.",
    date: "2024",
    readTime: "6 min read",
    category: "Medium Article",
    url: "https://medium.com/@vanshikauttarwar14/ai-didnt-replace-design-it-changed-who-gets-to-create-4b0790b0e48b",
    tags: ["Design", "AI Tools", "Generative Art"],
    visual: <AIDesignVisual />,
    colorTheme: "hover:border-fuchsia-500/50",
    bgTheme: "bg-fuchsia-500/5"
  },
  {
    title: "Building with GenAI, LangGraph, and FastAPI",
    excerpt: "Insights and architectural decisions for deploying agentic workflows using LangGraph and FastAPI.",
    date: "2024",
    readTime: "1 min read",
    category: "LinkedIn Post",
    url: "https://www.linkedin.com/posts/vanshika-uttarwar_genai-langgraph-fastapi-activity-7481228087289032704-MwFD?utm_medium=ios_app&rcm=ACoAAC6JrYoBlzgQd7aLFJimsay25o4cRs1d-40&utm_source=social_share_send&utm_campaign=copy_link",
    tags: ["LangGraph", "FastAPI", "Agentic Workflows"],
    visual: <LangGraphVisual />,
    colorTheme: "hover:border-blue-500/50",
    bgTheme: "bg-blue-500/5"
  },
  {
    title: "Thoughts on GenAI, LLMs, and AI Engineering",
    excerpt: "Exploring the latest trends and best practices in Generative AI and building scalable LLM applications.",
    date: "2024",
    readTime: "1 min read",
    category: "LinkedIn Post",
    url: "https://www.linkedin.com/posts/vanshika-uttarwar_genai-llm-aiengineering-activity-7480318028665069569-z65v?utm_medium=ios_app&rcm=ACoAAC6JrYoBlzgQd7aLFJimsay25o4cRs1d-40&utm_source=social_share_send&utm_campaign=copy_link",
    tags: ["LLMs", "AI Engineering", "Scalability"],
    visual: <GenAIVisual />,
    colorTheme: "hover:border-violet-500/50",
    bgTheme: "bg-violet-500/5"
  }
];

export default function BlogsPage() {
  return (
    <main className="container mx-auto px-6 py-24 min-h-[90vh]">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground">
            Technical <span className="font-serif italic text-muted-foreground font-normal">Writing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-serif">
            Thoughts, tutorials, and lessons learned from building AI systems in the trenches.
          </p>
        </header>

        <div className="space-y-6">
          {BLOGS.map((blog, index) => (
            <motion.a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={clsx(
                "group relative bg-card border border-border flex flex-col md:flex-row overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl rounded-2xl md:rounded-3xl",
                blog.colorTheme
              )}
            >
              {/* Left Side: Visualization Container */}
              <div className={clsx("relative h-56 md:h-auto md:w-2/5 shrink-0 border-b md:border-b-0 md:border-r border-border overflow-hidden", blog.bgTheme)}>
                {blog.visual}
              </div>

              {/* Right Side: Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1 justify-center">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground mb-5">
                  <span className="px-2.5 py-1 bg-primary/10 text-primary rounded-md border border-primary/20 flex items-center gap-1.5">
                    {blog.category.includes("Medium") ? <BookOpen size={12} /> : <MessageSquare size={12} />}
                    {blog.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} /> {blog.readTime}
                  </span>
                  <div className="hidden md:flex ml-auto p-2 rounded-full bg-muted group-hover:bg-primary group-hover:text-primary-foreground text-foreground transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <h2 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {blog.title}
                </h2>

                <p className="text-muted-foreground text-sm md:text-base mb-6">
                  {blog.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {blog.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-muted/40 text-muted-foreground hover:text-foreground rounded-md text-[11px] font-mono font-bold tracking-widest border border-border/50 transition-colors flex items-center gap-1 uppercase"
                    >
                      <Hash size={10} className="text-primary/70" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}
