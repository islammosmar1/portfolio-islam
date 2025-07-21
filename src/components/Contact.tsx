import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "islammosmar2@gmail.com",
      href: "mailto:islammosmar2@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+972598188707",
      href: "tel:+972598188707"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jenin, Palestine",
      href: "#"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/islammosmar",
      href: "https://github.com/islammosmar1"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/islam-mosmar",
      href: "http://www.linkedin.com/in/islam-mosmar-8a3a60266"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm always interested in new opportunities, challenging projects, and meaningful collaborations. 
              Whether you have a project in mind or just want to say hello, feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card 
                    key={index} 
                    className="card-gradient border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-4">
                      <a 
                        href={contact.href}
                        className="flex items-center gap-4 group"
                        target={contact.href.startsWith('http') ? '_blank' : '_self'}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-muted-foreground">{contact.label}</div>
                          <div className="text-foreground group-hover:text-primary transition-colors">
                            {contact.value}
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Let's work together!</h4>
              <p className="text-muted-foreground">
                I'm passionate about creating digital solutions that make a difference. 
                Let's discuss how we can bring your vision to life.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-gradient border-border/50 shadow-card animate-slide-in-right">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input 
                      placeholder="Your first name" 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input 
                      placeholder="Your last name" 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input 
                    placeholder="What's this about?" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or say hello..." 
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full hero-gradient text-white shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};