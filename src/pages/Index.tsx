import { HeaderSection, AboutSection, UtilityComponents } from "@/components/Sections";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header & Hero Section */}
      <HeaderSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Main Content Sections */}
      <div className="space-y-0">
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Utility Components */}
      <UtilityComponents />
    </div>
  );
};

export default Index;
