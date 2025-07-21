import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border/50 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-gradient">Islam Mosmar</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Computer System Engineer passionate about creating innovative web solutions 
              and bringing ideas to life through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" className="text-muted-foreground hover:text-primary transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-muted-foreground hover:text-primary transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Stay Connected</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>islammosmar2@gmail.com</p>
              <p>+972598188707</p>
              <p>Jenin, Palestine</p>
            </div>
            <div className="flex gap-2 pt-4">
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
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                onClick={() => window.open('mailto:islammosmar2@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Islam Mosmar. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};