"use client";

import { Download } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="container mx-auto px-6 py-24 min-h-[90vh] flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-foreground">
              My <span className="font-serif italic text-muted-foreground font-normal">Resume</span>
            </h1>
            <p className="text-xl text-muted-foreground font-serif">
              A summary of my experience, education, and technical skills.
            </p>
          </div>
          
          <a
            href="/resume.pdf"
            download="Vanshika_Uttarwar_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors shadow-sm whitespace-nowrap w-fit"
          >
            <Download size={18} />
            <span>Download PDF</span>
          </a>
        </header>

        <div className="flex-1 w-full bg-muted rounded-2xl overflow-hidden border border-border flat-card">
          {/* Using an iframe to embed the PDF */}
          <iframe
            src="/resume.pdf#toolbar=0"
            className="w-full h-[70vh] md:h-[800px]"
            title="Vanshika Uttarwar Resume"
          />
        </div>
      </div>
    </main>
  );
}
