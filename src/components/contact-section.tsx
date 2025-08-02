import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Mail, Phone, MapPin, Send, Zap } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = `PulseWave Tech Inquiry from ${formData.name}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization}

Message:
${formData.message}
    `.trim()
    
    window.location.href = `mailto:info@pulsewavetech.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Next
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to enhance your intelligence operations? Contact us today to discuss 
            how PulseWave Tech can deliver mission-critical solutions for your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/30 rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a 
                      href="mailto:info@pulsewavetech.io" 
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      info@pulsewavetech.io
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 border border-primary/30 rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-muted-foreground">Within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-secondary/20 border border-secondary/30 rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">Serving CONUS & OCONUS</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass-card p-8 rounded-xl">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Why Contact Us?
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Free initial consultation and requirements analysis
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Security clearance ready team members
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Rapid prototype development and deployment
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Firm-fixed-price contract expertise
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Request a Briefing</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium mb-2">
                  Organization
                </label>
                <Input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20 resize-none"
                  placeholder="Tell us about your mission requirements and how we can help..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full btn-hero group"
                disabled={!formData.name || !formData.email || !formData.message}
              >
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}