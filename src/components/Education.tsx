import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor's Degree",
      field: "Computer System Engineering",
      institution: "Palestine Technical University",
      period: "10/2021 - 07/2025",
      location: "Tulkarm, Palestine",
      grade: "Degree: Bachelor",
      status: "Current",
      achievements: [
        "Comprehensive study of computer systems and software engineering",
        "Hands-on experience with programming languages and development tools",
        "Focus on system design and software architecture",
        "Practical projects in web development and system optimization"
      ]
    },
    {
      degree: "Scientific Secondary Education",
      field: "Science Track",
      institution: "Jenin Secondary Boys School",
      period: "2020 - 2021",
      location: "Jenin, Palestine",
      grade: "2020-2021 / Degree: 93",
      status: "Completed",
      achievements: [
        "Graduated with distinction (93% average)",
        "Strong foundation in mathematics and sciences",
        "Preparation for higher education in technical fields"
      ]
    }
  ];

  const keyAchievements = [
    {
      title: "C++ Course Trainer",
      description: "Conducted comprehensive C++ training sessions at Ahi Evran University, Kırşehir, enhancing students' programming skills",
      icon: Award
    },
    {
      title: "Effective Training Mentor",
      description: "Mentored 40 students in C++ and programming basics, demonstrating leadership and teaching capabilities",
      icon: GraduationCap
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and continuous learning in computer science and engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border/50 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      <Badge 
                        variant={edu.status === "Current" ? "default" : "secondary"}
                        className={edu.status === "Current" ? "bg-primary text-primary-foreground" : "bg-muted"}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-3">{edu.field}</h4>
                    <h5 className="text-base font-medium text-muted-foreground mb-4">{edu.institution}</h5>
                    
                    <div className="flex flex-col gap-2 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-gradient">Key Achievements</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {keyAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card 
                  key={index} 
                  className="card-gradient border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};