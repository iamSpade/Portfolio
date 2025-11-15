import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-arch-bg border-t border-arch-border">
      <div className="section-container py-8">
        <div className="flex items-center justify-between">
          <p className="font-ibm-plex text-xs text-arch-text-secondary/60">
            © 2024 Engineering reliable systems. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-arch-text-secondary/60 hover:text-arch-accent transition-colors duration-150"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-arch-text-secondary/60 hover:text-arch-accent transition-colors duration-150"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
