import { Zap, Mail, Github } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/20 border-t border-border/50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Zap className="w-8 h-8 text-accent" />
                <div className="absolute inset-0 w-8 h-8 bg-accent/20 rounded-full animate-pulse" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                PulseWave Tech
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Intelligence Delivered in Real Time. Advanced solutions in AI, cyber, 
              and automation for defense and intelligence missions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#mission" className="text-muted-foreground hover:text-accent transition-colors">
                  Mission
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-muted-foreground hover:text-accent transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-accent transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a 
                  href="mailto:info@pulsewavetech.io" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  info@pulsewavetech.io
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">GitHub Integration Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} PulseWave Tech. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>www.pulsewavetech.io</span>
            <span className="hidden md:inline">•</span>
            <span>Defense & Intelligence Solutions</span>
          </div>
        </div>

        {/* Deployment Info */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-card/50 border border-border/50 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs text-muted-foreground">
              Deployed on GitHub Pages • GoDaddy Domain Ready
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}