import { Database, Brain, Shield, Workflow, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export function CapabilitiesSection() {
  const capabilities = [
    {
      icon: Database,
      title: "Data Analysis & Manipulation",
      description: "Advanced data processing and analysis capabilities for large-scale intelligence datasets.",
      features: ["Real-time data processing", "Multi-source integration", "Pattern recognition"]
    },
    {
      icon: Brain,
      title: "AI/ML Solutions",
      description: "Cutting-edge artificial intelligence and machine learning solutions for defense applications.",
      features: ["Predictive analytics", "Anomaly detection", "Natural language processing"]
    },
    {
      icon: Shield,
      title: "Cyber & Network Analysis",
      description: "Comprehensive cyber operations and network technical analysis (CNO/SIGDEV).",
      features: ["Threat assessment", "Network forensics", "Security automation"]
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Streamlined automated workflows for enhanced operational efficiency.",
      features: ["Process optimization", "Task automation", "Integration platforms"]
    }
  ]

  return (
    <section id="capabilities" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Core Competencies</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Technology
            <span className="block bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging state-of-the-art technologies to deliver mission-critical solutions 
            for defense and intelligence operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon
            return (
              <div 
                key={capability.title}
                className="glass-card p-8 rounded-xl hover:shadow-glow transition-all duration-300 group hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:animate-pulse">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {capability.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="ghost" 
                      className="text-accent hover:text-accent-foreground hover:bg-accent/10 p-0 h-auto group/btn"
                    >
                      Learn more 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Technical Expertise Highlight */}
        <div className="mt-16">
          <div className="glass-card p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-6">
              Intelligence & Automation
              <span className="block text-accent">Intersection</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Our unique expertise lies at the intersection of intelligence analysis and automation 
              technology, delivering solutions that enhance both operational efficiency and decision-making capabilities.
            </p>
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}