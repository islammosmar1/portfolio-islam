import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail, MapPin, Phone, Download, User, Code, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="space-y-8 animate-slide-up">
            <div className="relative">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full bg-card-gradient shadow-glow animate-glow border-4 border-primary/20">
                <div className="w-full h-full rounded-full bg-accent-gradient flex items-center justify-center text-6xl font-bold">
                  IM
                </div>
              </div>
              <Badge className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground border-0">
                Available for Work
              </Badge>
            </div>

            <div className="text-center lg:text-left space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-gradient">Islam Mosmar</span>
              </h1>
              <h2 className="text-2xl text-muted-foreground font-medium">
                Computer System Engineer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Frontend Developer passionate about creating responsive, user-friendly interfaces 
                using modern web technologies and best practices.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/30">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Jenin, Palestine</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/30">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">+972598188707</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/30">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">islammosmar2@gmail.com</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant"
                onClick={() => window.open('/islamcv.pdf', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                onClick={() => window.open('https://github.com/islammosmar1', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                onClick={() => window.open('http://www.linkedin.com/in/islam-mosmar-8a3a60266', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Stats and Skills */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-xl bg-card-gradient border border-border/30 text-center hover:shadow-glow transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-6 rounded-xl bg-card-gradient border border-border/30 text-center hover:shadow-glow transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>

            {/* Skills Overview */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Core Skills</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-primary" />
                  <span className="font-medium">Frontend Development</span>
                  <div className="flex-1 bg-muted rounded-full h-2 ml-3">
                    <div className="bg-primary h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-primary" />
                  <span className="font-medium">UI/UX Design</span>
                  <div className="flex-1 bg-muted rounded-full h-2 ml-3">
                    <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="font-medium">Problem Solving</span>
                  <div className="flex-1 bg-muted rounded-full h-2 ml-3">
                    <div className="bg-primary h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="p-6 rounded-xl bg-card-gradient border border-border/30">
              <h4 className="text-lg font-bold mb-4 text-gradient">Languages</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Arabic</div>
                  <div className="text-muted-foreground text-sm">Native</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">English</div>
                  <div className="text-muted-foreground text-sm">Fluent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};