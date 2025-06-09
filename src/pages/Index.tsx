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
      <footer className="relative z-10 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="glass-card-premium p-8 rounded-3xl modern-border">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  Meenit Doshi
                </h3>
                <p className="text-muted-foreground mb-1">
                  © 2025 All rights reserved.
                </p>
                <p className="text-sm text-muted-foreground">
                  Built with ❤️ using React, TypeScript, and Tailwind CSS
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="mailto:doshimeenit110503@gmail.com"
                  className="glass-card px-4 py-2 rounded-xl text-muted-foreground hover:text-primary hover-glow transition-all duration-300"
                >
                  Email
                </a>
                <a 
                  href="https://linkedin.com/in/meenit11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card px-4 py-2 rounded-xl text-muted-foreground hover:text-primary hover-glow transition-all duration-300"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card px-4 py-2 rounded-xl text-muted-foreground hover:text-primary hover-glow transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border/20 text-center">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="glass-card px-4 py-3 rounded-xl hover-lift group">
                  <span className="flex items-center text-muted-foreground group-hover:text-vibrant-teal transition-colors">
                    <div className="w-3 h-3 bg-vibrant-teal rounded-full mr-3 animate-subtle-pulse" />
                    Available for opportunities
                  </span>
                </div>
                <div className="glass-card px-4 py-3 rounded-xl hover-lift group">
                  <span className="flex items-center text-muted-foreground group-hover:text-primary transition-colors">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-subtle-pulse" />
                    AI/ML Engineer
                  </span>
                </div>
                <div className="glass-card px-4 py-3 rounded-xl hover-lift group">
                  <span className="flex items-center text-muted-foreground group-hover:text-vibrant-orange transition-colors">
                    <div className="w-3 h-3 bg-vibrant-orange rounded-full mr-3 animate-subtle-pulse" />
                    Full Stack Developer
                  </span>
                </div>
                <div className="glass-card px-4 py-3 rounded-xl hover-lift group">
                  <span className="flex items-center text-muted-foreground group-hover:text-vibrant-purple transition-colors">
                    <div className="w-3 h-3 bg-vibrant-purple rounded-full mr-3 animate-subtle-pulse" />
                    Data Analyst
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;