import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto bg-background">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-xl tracking-tighter text-foreground">VU.</span>
          <p className="text-sm text-muted-foreground mt-2 text-center md:text-left max-w-xs font-mono">
            Building Reliable AI Systems for Real-World Impact.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/vanshikauttarwar1" target="_blank" rel="noreferrer" className="p-2 border border-border rounded-md hover:bg-muted text-foreground transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/vanshika-uttarwar/" target="_blank" rel="noreferrer" className="p-2 border border-border rounded-md hover:bg-muted text-foreground transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:vanshikauttarwar14@gmail.com" className="p-2 border border-border rounded-md hover:bg-muted text-foreground transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs font-mono text-muted-foreground">
        &copy; {new Date().getFullYear()} Vanshika Uttarwar. All rights reserved.
      </div>
    </footer>
  );
}
