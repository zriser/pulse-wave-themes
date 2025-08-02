import { Clock, TrendingUp, CheckCircle, Zap } from "lucide-react"

export function ExperienceSection() {
  const achievements = [
    {
      title: "AI-Powered Workflow Analysis",
      description: "Delivered advanced AI-powered workflow analysis tool for intelligence operations 3 weeks ahead of schedule, improving efficiency by 40%.",
      metric: "3 weeks early",
      category: "AI/ML Solution"
    },
    {
      title: "Cyber Threat Detection System", 
      description: "Implemented real-time cyber threat detection system processing 10TB+ daily data with 99.7% accuracy and zero false positives.",
      metric: "99.7% accuracy",
      category: "Cyber Security"
    },
    {
      title: "Automated Intelligence Pipeline",
      description: "Deployed automated intelligence processing pipeline reducing manual analysis time from 48 hours to 2 hours while maintaining accuracy.",
      metric: "96% time reduction",
      category: "Automation"
    },
    {
      title: "Multi-Source Data Integration",
      description: "Integrated 15+ disparate intelligence data sources into unified analysis platform, enabling cross-domain correlation and insights.",
      metric: "15+ sources unified",
      category: "Data Integration"
    }
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Past Performance</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Results
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our track record speaks for itself. Here are some of our recent mission-critical 
            successes that demonstrate our capability to deliver exceptional results.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className="glass-card p-8 rounded-xl hover:shadow-glow transition-all duration-300 group hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/30 rounded-lg px-3 py-1">
                  <span className="text-xs font-medium text-accent">{achievement.category}</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    {achievement.metric}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                {achievement.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
              
              <div className="mt-6 flex items-center gap-2 text-sm text-accent">
                <CheckCircle className="w-4 h-4" />
                <span>Successfully Delivered</span>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="glass-card p-12 rounded-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Performance
              <span className="text-accent"> Metrics</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Consistent excellence across all project deliverables
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">On-Time Delivery</div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">$3M+</div>
              <div className="text-sm text-muted-foreground">Contract Value</div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
          </div>
        </div>

        {/* Client Testimonial Placeholder */}
        <div className="mt-16 text-center">
          <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto border border-accent/20">
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground/90 leading-relaxed mb-8">
              "PulseWave Tech consistently delivers innovative solutions that exceed our expectations. 
              Their deep understanding of intelligence operations and technical expertise makes them 
              an invaluable partner."
            </blockquote>
            <div className="text-accent font-semibold">
              Defense Intelligence Customer
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Senior Program Manager
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}