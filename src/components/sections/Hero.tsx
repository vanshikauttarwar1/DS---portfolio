"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Magnetic from "@/components/ui/Magnetic";

const ROLES = [
  "AI Engineer",
  "Data Scientist",
  "LLM Developer",
  "Backend Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center bg-background px-6 pt-24 pb-12 overflow-hidden">
      {/* Minimal Aurora Background */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }} 
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-300/20 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2], y: [0, -50, 0] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-300/20 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3], x: [0, -50, 0] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] bg-pink-300/20 rounded-full mix-blend-multiply filter blur-[90px] pointer-events-none" 
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 text-foreground">
              Building <span className="font-serif italic font-normal text-muted-foreground">Reliable</span><br />
              AI Systems.
            </h1>
            
            <div className="text-xl md:text-3xl font-medium text-foreground/80 h-10 md:h-12 mb-6 flex flex-wrap items-center gap-x-2">
              <span>Hi, I'm Vanshika, an</span>
              <div className="relative inline-block w-[280px] text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="absolute font-semibold text-primary"
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-serif">
              I specialize in orchestrating Large Language Models, developing intelligent agents, and scaling robust backend architectures that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Magnetic>
                <Link
                  href="/resume"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors shadow-sm"
                >
                  <Download size={18} />
                  <span>Resume</span>
                </Link>
              </Magnetic>
              <div className="h-10 w-px bg-border mx-2 hidden sm:block" />
              <Magnetic>
                <a
                  href="https://github.com/vanshikauttarwar1"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 border border-border bg-white text-foreground rounded-md hover:bg-muted transition-colors shadow-sm inline-block"
                >
                  <FaGithub size={20} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://www.linkedin.com/in/vanshika-uttarwar/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 border border-border bg-white text-foreground rounded-md hover:bg-muted transition-colors shadow-sm inline-block"
                >
                  <FaLinkedin size={20} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="mailto:vanshikauttarwar14@gmail.com"
                  className="p-3 border border-border bg-white text-foreground rounded-md hover:bg-muted transition-colors shadow-sm inline-block"
                >
                  <Mail size={20} />
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-[6px] border-white shadow-2xl shadow-black/10 bg-muted">
              <Image
                src="/profile_new.png"
                alt="Vanshika Uttarwar"
                fill
                className="object-cover"
                priority
                quality={100}
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
