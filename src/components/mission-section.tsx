import { Target, Shield, Zap } from "lucide-react"

export function MissionSection() {
  return (
    <section id="mission" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Mission</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Defense Through
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Advanced Intelligence
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            PulseWave Tech empowers government and defense customers with actionable intelligence 
            through advanced data analysis, AI/ML solutions, and automated workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Core Values */}
          <div className="glass-card p-8 rounded-xl hover:shadow-glow transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:animate-pulse">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Mission Critical</h3>
            <p className="text-muted-foreground">
              Delivering solutions that meet the highest standards of reliability and security 
              for defense and intelligence operations.
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl hover:shadow-glow transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:animate-pulse">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Real-Time Intelligence</h3>
            <p className="text-muted-foreground">
              Leveraging cutting-edge AI and ML technologies to provide actionable insights 
              when they matter most.
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl hover:shadow-glow transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-6 group-hover:animate-pulse">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Precision Focus</h3>
            <p className="text-muted-foreground">
              Customer-centric approach with deep understanding of defense sector requirements 
              and mission objectives.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground/90 leading-relaxed">
              "We bridge the gap between complex data and actionable intelligence, 
              enabling our defense partners to make informed decisions at the speed of relevance."
            </blockquote>
            <div className="mt-8 flex justify-center">
              <div className="flex gap-1 h-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}