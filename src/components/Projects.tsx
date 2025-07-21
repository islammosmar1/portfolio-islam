import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, ExternalLink, Code, Smartphone, ShoppingCart, Plane, User } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Mobile Store",
      description: "A responsive e-commerce website for mobile phones with modern design, product catalog, and user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "E-Commerce",
      icon: Smartphone,
      features: [
        "Responsive mobile-first design",
        "Product catalog with filtering",
        "Shopping cart functionality",
        "Modern UI/UX design"
      ],
      githubUrl: "https://github.com/islammosmar1/islam-mobile",
      demoUrl: null
    },
    {
      title: "Fashion Clothing Store",
      description: "Modern clothing store website with seamless navigation, product showcase, and elegant design for fashion retail.",
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX"],
      category: "Retail",
      icon: ShoppingCart,
      features: [
        "Elegant product showcase",
        "Seamless navigation",
        "Category-based browsing",
        "Responsive design"
      ],
      githubUrl: "https://github.com/islammosmar1/islam-shop",
      demoUrl: null
    },
    {
      title: "Travel Agency Platform",
      description: "Interactive travel agency website featuring booking systems, destination showcase, and enhanced user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Interactive Features"],
      category: "Travel & Tourism",
      icon: Plane,
      features: [
        "Interactive booking system",
        "Destination galleries",
        "Travel package display",
        "Contact and inquiry forms"
      ],
      githubUrl: "https://github.com/islammosmar1/homeUp",
      demoUrl: null
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website showcasing projects and skills using React.js and contemporary web technologies.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Modern Web Tech"],
      category: "Portfolio",
      icon: User,
      features: [
        "React.js with TypeScript",
        "Responsive design",
        "Interactive animations",
        "Modern UI/UX"
      ],
      githubUrl: "https://github.com/islammosmar1/portfolio",
      demoUrl: null
    },
    {
      title: "Web Development Projects",
      description: "Collection of web development projects including business websites, landing pages, and interactive applications.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design"],
      category: "Web Development",
      icon: Code,
      features: [
        "Multiple business solutions",
        "Custom design for each project",
        "User experience optimization",
        "Cross-platform compatibility"
      ],
      githubUrl: "http://github.com/islammosmar1/University_housing",
      demoUrl: null
    },
    {
      title: "UI/UX Design Projects",
      description: "Collection of user interface and user experience design projects, including wireframes, prototypes, and design systems.",
      technologies: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping"],
      category: "Design",
      icon: User,
      features: [
        "User-centered design",
        "Interactive prototypes",
        "Design systems",
        "Wireframing and mockups"
      ],
      githubUrl: "https://github.com/islammosmar1/Meta-versus",
      demoUrl: null
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development work, from e-commerce platforms to business solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-4 border-t border-border/50">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-primary/30 text-primary hover:bg-primary/10"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="hero-gradient text-white shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://github.com/islammosmar1', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};