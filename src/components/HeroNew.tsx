import { Button } from "./ui/button";
import { Github, User, Code } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroNew = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Floating particles background */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 rounded-full opacity-10"
            style={{
              background: `radial-gradient(circle, hsl(250, 100%, 75%) 0%, transparent 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icons Section */}
          <div 
            className={`flex items-center justify-center gap-8 mb-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="p-4 rounded-full bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/50 transition-all duration-300 hover:scale-110">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <div className="p-4 rounded-full bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/50 transition-all duration-300 hover:scale-110">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div className="p-4 rounded-full bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/50 transition-all duration-300 hover:scale-110">
              <Github className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Main heading */}
          <div 
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-foreground">Welcome To My</span>
              <br />
              <span className="text-gradient">Portfolio Website</span>
            </h1>
            
            <h2 className={`text-3xl md:text-4xl font-bold text-primary mb-4 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Islam Alaa Mosmar
            </h2>
            
            <p 
              className={`text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Full Stack Developer & UI/UX Designer
            </p>
            
            <p 
              className={`text-lg text-primary max-w-2xl mx-auto mt-2 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              www.IslamMosmar.dev
            </p>
          </div>

          {/* Scroll indicator */}
          <div 
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
              </div>
              <span className="text-xs text-muted-foreground">Scroll Down</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};