import { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const [typingText, setTypingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ['AI/ML Engineer', 'Full Stack Developer', 'Python Developer', 'Data Analyst'];
  useEffect(() => {
    const currentRole = roles[currentIndex];
    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      if (isDeleting) {
        setTypingText(currentRole.substring(0, typingText.length - 1));
        if (typingText === '') {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % roles.length);
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
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-16 h-16 border border-primary/20 rounded-lg animate-float" />
        <div className="absolute top-40 right-20 w-12 h-12 border border-secondary/20 rounded-full animate-float" style={{
        animationDelay: '2s'
      }} />
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-accent/10 rounded-lg animate-float" style={{
        animationDelay: '4s'
      }} />
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-neutral-sage/20 rounded-full animate-float" style={{
        animationDelay: '1s'
      }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1 animate-soft-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <div className="w-44 h-44 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl font-bold text-primary px-0 rounded-sm">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up">
            <div className="glass-card p-4 rounded-lg hover-lift border-l-4 border-primary">
              <div className="text-2xl font-bold text-primary">9.12</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
            <div className="glass-card p-4 rounded-lg hover-lift border-l-4 border-vibrant-teal">
              <div className="text-2xl font-bold text-vibrant-teal">10+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="glass-card p-4 rounded-lg hover-lift border-l-4 border-vibrant-orange">
              <div className="text-2xl font-bold text-vibrant-orange">4</div>
              <div className="text-sm text-muted-foreground">Internships</div>
            </div>
            <div className="glass-card p-4 rounded-lg hover-lift border-l-4 border-vibrant-purple">
              <div className="text-2xl font-bold text-vibrant-purple">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up">
            <Button onClick={scrollToProjects} className="gradient-primary text-primary-foreground hover:scale-105 transition-transform px-8 py-3">
              View Projects
            </Button>
            <Button variant="outline" className="subtle-border hover-lift px-8 py-3">
              <Download className="mr-2" size={16} />
              Download Resume
            </Button>
            <Button onClick={scrollToContact} variant="outline" className="subtle-border hover-lift px-8 py-3">
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up">
            <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors p-2" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/meenit11" className="text-muted-foreground hover:text-primary transition-colors p-2" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:doshimeenit110503@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Mail size={24} />
            </a>
          </div>

          {/* Professional Summary */}
          <div className="mt-12 max-w-3xl mx-auto animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Highly motivated Computer Engineering graduate with hands-on experience in 
              <span className="text-primary"> Machine Learning</span>, 
              <span className="text-secondary"> Full Stack Development</span>, and 
              <span className="text-accent"> mobile app development</span>. 
              Demonstrated ability to deliver impactful AI/ML projects with <span className="text-neutral-sage">95%+ accuracy</span>.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;