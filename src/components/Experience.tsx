import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Frontend Development Achievements",
      company: "Personal Projects & Training",
      period: "2020 - Present",
      location: "Palestine",
      type: "Self-Directed Learning",
      achievements: [
        "Designed and developed complete websites for various businesses and organizations",
        "Created a responsive mobile phone store e-commerce website",
        "Built a modern clothing store website with seamless navigation",
        "Developed a travel agency website with an interactive booking system",
        "Implemented multiple other projects enhancing user experience",
        "Utilized responsive, user-friendly interfaces using HTML, CSS, and JavaScript",
        "Created a professional portfolio website showcasing modern web technologies",
        "Optimized website performance through code refinement and React.js best practices",
        "Participated in code reviews following scalable and maintainable development standards"
      ],
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design", "UI/UX", "Code Reviews"]
    },
    {
      title: "Web Development - Trainee",
      company: "Gaza Sky Geeks",
      period: "6 weeks",
      location: "Jenin, Palestine",
      type: "Intensive Training",
      achievements: [
        "Mastered HTML, CSS, and JavaScript to build responsive, user-friendly interfaces",
        "Developed a personal portfolio and worked on hands-on projects to enhance skills"
      ],
      skills: ["HTML", "CSS", "JavaScript", "Portfolio Development"]
    },
    {
      title: "C++ Course - Trainer",
      company: "Ahi Evran University - Palestine Technical University",
      period: "Course Duration",
      location: "Kirşehir, Turkey & Palestine",
      type: "Training & Education",
      achievements: [
        "Provided in-depth education on fundamental C++ programming concepts",
        "Trained students through object-oriented programming guides and topics like data structures",
        "Focused on software optimization and problem-solving techniques"
      ],
      skills: ["C++", "OOP", "Data Structures", "Teaching", "Problem Solving"]
    },
    {
      title: "UI/UX - Trainee",
      company: "IEEE-IUG",
      period: "Training Period",
      location: "Jenin, Palestine",
      type: "Design Training",
      achievements: [
        "Learned the principles of user-centered design, wireframing, and prototyping",
        "Worked on designing intuitive interfaces, improving usability, and enhancing user experience"
      ],
      skills: ["UI/UX Design", "Wireframing", "Prototyping", "User-Centered Design"]
    },
    {
      title: "JAVA Course - Trainer",
      company: "Palestine Technical University (PTUK)",
      period: "Course Duration",
      location: "Palestine",
      type: "Training & Education",
      achievements: [
        "Taught core Java concepts to student group",
        "Focused on object-oriented programming fundamentals and practical applications"
      ],
      skills: ["Java", "OOP", "Teaching", "Programming Fundamentals"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in technology, from training programs to practical implementations
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border/50 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 mt-1">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                        <h4 className="text-lg font-semibold text-primary mb-2">{exp.company}</h4>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};