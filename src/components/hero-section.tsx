import { Button } from "./ui/button"
import { ArrowRight, Zap } from "lucide-react"
import heroWaveform from "../assets/hero-waveform.jpg"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroWaveform} 
          alt="" 
          className="w-full h-full object-cover opacity-20 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Floating Pulse Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-accent rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-32 w-2 h-2 bg-primary rounded-full animate-pulse-slow opacity-40" />
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-secondary rounded-full animate-float opacity-50" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Company Badge */}
        <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-8 animate-slide-up">
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-muted-foreground">
            Advanced Intelligence Solutions
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            PulseWave Tech
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-semibold mb-4 text-glow animate-slide-up">
          Intelligence Delivered in Real Time
        </p>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up">
          Advanced solutions in AI, cyber, and automation for defense and intelligence missions. 
          Empowering government customers with actionable intelligence through cutting-edge technology.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button 
            size="lg" 
            className="btn-hero group"
          >
            Request a Briefing
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="btn-ghost-glow"
          >
            Explore Capabilities
          </Button>
        </div>

        {/* Waveform Visualization */}
        <div className="mt-16 flex justify-center items-end gap-1 h-16 animate-slide-up">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="waveform-line"
              style={{
                height: `${Math.random() * 100 + 20}%`,
                animationDelay: `${i * 0.1}s`,
                width: '4px'
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}