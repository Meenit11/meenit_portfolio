import { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [typingText, setTypingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'AI/ML Engineer',
    'Full Stack Developer',
    'Python Developer',
    'Data Analyst'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setTypingText(currentRole.substring(0, typingText.length - 1));
        if (typingText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        setTypingText(currentRole.substring(0, typingText.length + 1));
        if (typingText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typingText, isDeleting, currentIndex, roles]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      
      {/* Floating Modern Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-20 h-20 glass-card rounded-2xl animate-float backdrop-blur-sm" />
        <div className="absolute top-40 right-20 w-16 h-16 glass-card rounded-full animate-float backdrop-blur-sm" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 gradient-vibrant rounded-xl animate-float opacity-60" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 glass-card rounded-2xl animate-float backdrop-blur-sm" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 gradient-primary rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-12 animate-fade-in-up">
            <div className="w-56 h-56 mx-auto rounded-full gradient-vibrant p-1 hover-glow">
              <div className="w-full h-full rounded-full glass-card-premium flex items-center justify-center backdrop-blur-xl">
                <div className="w-52 h-52 rounded-full bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 flex items-center justify-center text-7xl font-bold gradient-primary bg-clip-text text-transparent border border-border/20">
                  MD
                </div>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="animate-slide-in-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Meenit Doshi
            </h1>
          </div>

          <div className="animate-slide-in-right">
            <div className="text-2xl md:text-3xl text-foreground mb-8 h-20 flex items-center justify-center">
              <span className="text-muted-foreground">I'm a </span>
              <span className="text-primary font-bold ml-2 min-w-[300px] text-left">
                {typingText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-in-up">
            <div className="glass-card-premium p-6 rounded-2xl hover-lift modern-border group">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">9.12</div>
              <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">CGPA</div>
              <div className="w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-3 opacity-60" />
            </div>
            <div className="glass-card-premium p-6 rounded-2xl hover-lift modern-border group">
              <div className="text-3xl font-bold text-vibrant-teal mb-2">10+</div>
              <div className="text-sm text-muted-foreground group-hover:text-vibrant-teal transition-colors">Projects</div>
              <div className="w-full h-1 bg-vibrant-teal rounded-full mt-3 opacity-60" />
            </div>
            <div className="glass-card-premium p-6 rounded-2xl hover-lift modern-border group">
              <div className="text-3xl font-bold text-vibrant-orange mb-2">4</div>
              <div className="text-sm text-muted-foreground group-hover:text-vibrant-orange transition-colors">Internships</div>
              <div className="w-full h-1 bg-vibrant-orange rounded-full mt-3 opacity-60" />
            </div>
            <div className="glass-card-premium p-6 rounded-2xl hover-lift modern-border group">
              <div className="text-3xl font-bold text-vibrant-purple mb-2">15+</div>
              <div className="text-sm text-muted-foreground group-hover:text-vibrant-purple transition-colors">Technologies</div>
              <div className="w-full h-1 bg-vibrant-purple rounded-full mt-3 opacity-60" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up">
            <Button 
              onClick={scrollToProjects}
              className="gradient-primary text-primary-foreground hover-glow interactive-scale px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg"
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              className="glass-card-premium hover-lift px-10 py-4 rounded-2xl text-lg font-medium backdrop-blur-xl"
            >
              <Download className="mr-3" size={18} />
              Download Resume
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              className="glass-card-premium hover-lift px-10 py-4 rounded-2xl text-lg font-medium backdrop-blur-xl"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 animate-fade-in-up">
            <a 
              href="https://github.com" 
              className="glass-card p-4 rounded-2xl text-muted-foreground hover:text-primary hover-glow transition-all duration-300 backdrop-blur-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/meenit11" 
              className="glass-card p-4 rounded-2xl text-muted-foreground hover:text-primary hover-glow transition-all duration-300 backdrop-blur-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:doshimeenit110503@gmail.com" 
              className="glass-card p-4 rounded-2xl text-muted-foreground hover:text-primary hover-glow transition-all duration-300 backdrop-blur-sm"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Professional Summary */}
          <div className="mt-16 max-w-4xl mx-auto animate-fade-in-up">
            <div className="glass-card-premium p-8 rounded-3xl modern-border">
              <p className="text-xl text-muted-foreground leading-relaxed text-center">
                Highly motivated Computer Engineering graduate with hands-on experience in 
                <span className="gradient-primary bg-clip-text text-transparent font-semibold"> Machine Learning</span>, 
                <span className="gradient-secondary bg-clip-text text-transparent font-semibold"> Full Stack Development</span>, and 
                <span className="text-accent font-semibold"> mobile app development</span>. 
                Demonstrated ability to deliver impactful AI/ML projects with <span className="text-vibrant-teal font-semibold">95%+ accuracy</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;