"use client";

import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData();
    formData.append("access_key", "531440b1-b578-4745-8e1f-0ceb79b80252");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
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
                disabled={status === "submitting" || status === "success"}
                className={`w-full py-3 font-medium rounded-md shadow-sm mt-4 transition-colors ${
                  status === "success" ? "bg-emerald-500 text-white" : 
                  status === "error" ? "bg-red-500 text-white" : 
                  "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {status === "submitting" ? "Sending..." : 
                 status === "success" ? "Message Sent!" :
                 status === "error" ? "Error! Try Again." :
                 "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
