"use client";

import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:vanshikauttarwar14@gmail.com?subject=Portfolio Message from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
  };

  return (
    <main className="container mx-auto px-6 py-24 min-h-[90vh]">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground">
            Get in <span className="font-serif italic text-muted-foreground font-normal">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-serif">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flat-card p-8 rounded-2xl flex flex-col gap-6">
              <a href="mailto:vanshikauttarwar14@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-sm text-muted-foreground">vanshikauttarwar14@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-sm text-muted-foreground">Remote / Global</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/vanshikauttarwar1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors shadow-sm w-full justify-center"
              >
                <FaGithub size={18} />
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vanshika-uttarwar/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-border bg-white text-foreground font-medium rounded-md hover:bg-muted transition-colors shadow-sm w-full justify-center"
              >
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flat-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Send a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 rounded-md border border-border bg-white focus:outline-none focus:border-primary transition-colors text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 rounded-md border border-border bg-white focus:outline-none focus:border-primary transition-colors text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                <textarea 
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full p-3 rounded-md border border-border bg-white focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                  placeholder="Hi Vanshika, I'd like to talk about..."
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors shadow-sm mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
