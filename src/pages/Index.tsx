import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import BackgroundEffects from '@/components/BackgroundEffects';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Background Effects */}
      <BackgroundEffects />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2025 Meenit Doshi. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Built with ❤️ using React, TypeScript, and Tailwind CSS
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:doshimeenit110503@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Email
              </a>
              <a 
                href="https://linkedin.com/in/meenit11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border/30 text-center">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-neon-green rounded-full mr-2 animate-pulse" />
                Available for opportunities
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                AI/ML Engineer
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse" />
                Full Stack Developer
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
                Data Analyst
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;