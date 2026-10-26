"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "AI & Generative AI",
    skills: ["LLMs", "Prompt Engineering", "RAG", "Agentic Workflows", "Structured Outputs", "Gemini", "Anthropic", "OpenAI", "LangChain", "LangGraph", "MCP", "Prompt Optimization", "LLM Observability (Langfuse)", "LLM evaluation and benchmarking"],
  },
  {
    title: "AI Specializations",
    skills: ["Vision Language Models (VLMs)", "OCR Pipelines", "Document Intelligence"],
  },
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "Pydantic", "SQLAlchemy"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS (S3, EC2, Lambda, Step Functions, Glue)", "Serverless Architecture", "Docker", "Git"],
  },
  {
    title: "Data & Analytics",
    skills: ["SQL", "PostgreSQL", "Snowflake", "Pandas", "Tableau", "Excel"],
  },
  {
    title: "Frontend",
    skills: ["ReactJS", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
              Technical <span className="font-serif italic text-muted-foreground font-normal">Arsenal</span>
            </h2>
            <p className="text-lg text-muted-foreground font-serif">
              A comprehensive toolkit of the technologies I use to build scalable AI systems and robust applications.
            </p>
          </header>

          <div className="space-y-12">
            {SKILL_CATEGORIES.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-6 tracking-tight text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-background border border-border shadow-sm hover:border-primary hover:text-primary transition-colors text-muted-foreground cursor-default backdrop-blur-md"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
