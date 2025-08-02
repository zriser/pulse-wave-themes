import { Users, Award, Target, CheckCircle } from "lucide-react"

export function DifferentiatorsSection() {
  const differentiators = [
    {
      icon: Users,
      title: "Customer & Mission-Centric Approach",
      description: "Deep understanding of defense sector requirements with solutions tailored to mission-critical objectives."
    },
    {
      icon: Award,
      title: "Experienced Team with Military/Gov Background",
      description: "Our team brings extensive experience from military and government service, understanding operational contexts."
    },
    {
      icon: Target,
      title: "Proven Track Record",
      description: "Consistent delivery of firm-fixed-price projects valued at $2-3M annually with exceptional results."
    },
    {
      icon: CheckCircle,
      title: "Technical Expertise at Intelligence/Automation Intersection",
      description: "Unique specialization combining intelligence analysis with cutting-edge automation technologies."
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Sets Us
            <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Apart
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our unique combination of technical expertise, mission understanding, and proven 
            delivery makes us the ideal partner for your defense intelligence needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Visual */}
          <div className="relative">
            <div className="glass-card p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">$2-3M</div>
                    <div className="text-sm text-muted-foreground">Annual Project Value</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">100%</div>
                    <div className="text-sm text-muted-foreground">On-Time Delivery</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">15+</div>
                    <div className="text-sm text-muted-foreground">Years Combined Experience</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full animate-float" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full animate-pulse" />
          </div>

          {/* Right side - Differentiators */}
          <div className="space-y-8">
            {differentiators.map((diff, index) => {
              const IconComponent = diff.icon
              return (
                <div 
                  key={diff.title}
                  className="flex gap-6 group hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-accent" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                      {diff.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Transform Your
              <span className="block text-accent">Intelligence Operations?</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with PulseWave Tech to leverage our proven expertise and deliver 
              mission-critical results for your organization.
            </p>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-center">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Firm-Fixed-Price Contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Security Clearance Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Rapid Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}