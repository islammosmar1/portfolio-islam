import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Code, User, Briefcase, GraduationCap, Award, FolderOpen, Mail, Github, Linkedin } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Code },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">IM</span>
            </div>
            <span className="font-bold text-lg text-gradient">Islam Mosmar</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                  )}
                </Button>
              );
            })}
            
            {/* Social Links */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-border/50">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('https://github.com/islammosmar1', '_blank')}
                className="text-muted-foreground hover:text-primary hover:bg-primary/10"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('http://www.linkedin.com/in/islam-mosmar-8a3a60266', '_blank')}
                className="text-muted-foreground hover:text-primary hover:bg-primary/10"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={`justify-start transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};