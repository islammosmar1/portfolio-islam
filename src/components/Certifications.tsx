import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Calendar, ExternalLink, Download } from "lucide-react";
import { Button } from "./ui/button";

export const Certifications = () => {
  const certifications = [
    {
      title: "60-hours Preparation on Web Development",
      issuer: "Gaza Sky Geeks & Mercy Corps",
      date: "2024",
      description: "Intensive 60-hour preparation program focused on modern web development technologies, covering frontend and backend development with practical projects.",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Development", "Project Management"],
      status: "Completed",
      credentialId: "GSG-WD-2024-001",
      image: "/src/assets/certificate-gsg.png",
      verifyUrl: "https://Gazaskygeeks.com/verify"
    },
    {
      title: "UI/UX Design Training Course (24-hours)",
      issuer: "IEEE Student Branch - Islamic University of Jenin",
      date: "August 2024",
      description: "Comprehensive 24-hour UI/UX training course conducted as part of the IEEEJenin Initiative, covering user interface design, user experience principles, and modern design practices.",
      skills: ["UI/UX Design", "User Research", "Wireframing", "Prototyping", "Design Thinking", "Figma"],
      status: "Completed",
      credentialId: "IEEE-IUG-2024-002",
      image: "/src/assets/certificate-ieee.png",
      verifyUrl: "https://ieee-iug.org/verify"
    },
    {
      title: "C++ Programming Certification",
      issuer: "Ahi Evran University",
      date: "2023",
      description: "Advanced C++ programming concepts, object-oriented programming, and software development best practices.",
      skills: ["C++", "OOP", "Data Structures", "Algorithm Design"],
      status: "Completed",
      credentialId: "AEU-CPP-2023-003"
    },
    {
      title: "Java Programming Certification",
      issuer: "Palestine Technical University (PTUK)",
      date: "2023",
      description: "Comprehensive Java programming course covering fundamentals to advanced concepts including enterprise development.",
      skills: ["Java", "Spring Framework", "Object-Oriented Programming", "Enterprise Development"],
      status: "Completed",
      credentialId: "PTUK-JAVA-2023-004"
    },
    {
      title: "React.js & Modern Frontend Development",
      issuer: "Self-Study & Projects",
      date: "2024",
      description: "Advanced React.js development including hooks, state management, TypeScript integration, and modern development practices.",
      skills: ["React.js", "TypeScript", "State Management", "Component Architecture", "Modern Frontend"],
      status: "In Progress",
      credentialId: "SELF-REACT-2024-005"
    },
    {
      title: "Database Management with Oracle",
      issuer: "Palestine Technical University",
      date: "2022",
      description: "Database design, SQL programming, and Oracle database administration and optimization.",
      skills: ["Oracle Database", "SQL", "Database Design", "Performance Tuning"],
      status: "Completed",
      credentialId: "PTU-DB-2022-006"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Certifications & Training</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and training programs that have shaped my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <Badge 
                      variant={cert.status === "Completed" ? "default" : "secondary"}
                      className={cert.status === "Completed" ? "bg-primary text-primary-foreground mb-2" : "bg-muted mb-2"}
                    >
                      {cert.status}
                    </Badge>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <h4 className="text-sm font-semibold text-primary mb-3">{cert.issuer}</h4>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm">{cert.date}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {cert.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground mb-3">
                      Credential ID: {cert.credentialId}
                    </p>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-primary/30 text-primary hover:bg-primary/10 text-xs"
                      >
                        <ExternalLink className="w-3 h-3 mr-2" />
                        Verify
                      </Button>
                      {cert.status === "Completed" && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 border-primary/30 text-primary hover:bg-primary/10 text-xs"
                        >
                          <Download className="w-3 h-3 mr-2" />
                          Download
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="card-gradient border-border/50 shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Total Certifications</div>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border/50 shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border/50 shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Skills Acquired</div>
            </CardContent>
          </Card>
          <Card className="card-gradient border-border/50 shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">250+</div>
              <div className="text-sm text-muted-foreground">Training Hours</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};