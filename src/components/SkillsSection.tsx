import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const programmingLanguages = [
    { name: 'Python', level: 95, category: 'primary' },
    { name: 'JavaScript', level: 80, category: 'secondary' },
    { name: 'Java', level: 75, category: 'accent' },
    { name: 'HTML/CSS', level: 90, category: 'primary' },
    { name: 'Dart', level: 70, category: 'secondary' }
  ];

  const aiMlSkills = [
    { name: 'TensorFlow', level: 90 },
    { name: 'Keras', level: 85 },
    { name: 'OpenCV', level: 88 },
    { name: 'Scikit-learn', level: 82 },
    { name: 'NumPy', level: 90 },
    { name: 'Pandas', level: 88 },
    { name: 'Matplotlib', level: 80 },
    { name: 'MediaPipe', level: 75 }
  ];

  const webMobileSkills = [
    { name: 'Flask', level: 85 },
    { name: 'Flutter', level: 80 },
    { name: 'Android Studio', level: 75 },
    { name: 'React', level: 70 },
    { name: 'Node.js', level: 65 }
  ];

  const toolsSkills = [
    { name: 'Git/GitHub', level: 85 },
    { name: 'Microsoft Excel', level: 80 },
    { name: 'Tkinter', level: 75 },
    { name: 'Docker', level: 60 },
    { name: 'AWS', level: 55 }
  ];

  const softSkills = [
    'Communication',
    'Time Management',
    'Adaptability',
    'Teamwork',
    'Remote Work',
    'Problem Solving',
    'Critical Thinking',
    'Leadership'
  ];

  const SkillCard = ({ title, skills, showProgress = true, color = 'primary' }: {
    title: string;
    skills: Array<{name: string; level?: number; category?: string}> | string[];
    showProgress?: boolean;
    color?: string;
  }) => (
    <Card className="glassmorphism glow-border hover-glow h-full">
      <CardContent className="p-6">
        <h3 className={`text-xl font-bold mb-6 text-${color}`}>{title}</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              {typeof skill === 'string' ? (
                <Badge 
                  variant="outline" 
                  className="m-1 border-primary/30 text-primary hover:bg-primary/10"
                >
                  {skill}
                </Badge>
              ) : (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    {showProgress && <span className="text-sm text-muted-foreground">{skill.level}%</span>}
                  </div>
                  {showProgress && (
                    <Progress 
                      value={isVisible ? skill.level : 0} 
                      className="h-2"
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-40 h-40 border border-secondary rotate-45 animate-float" />
        <div className="absolute bottom-20 left-10 w-28 h-28 bg-accent/10 rounded-full animate-neural-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in-up">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Mastering the tools and technologies that drive innovation
          </p>
        </div>

        {/* Programming Languages - Highlighted Section */}
        <div className="mb-12 animate-fade-in-up">
          <Card className="glassmorphism glow-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">Programming Languages</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programmingLanguages.map((lang, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-foreground">{lang.name}</span>
                      <Badge 
                        className={`bg-${lang.category}/20 text-${lang.category} border-${lang.category}/30`}
                      >
                        {lang.level}%
                      </Badge>
                    </div>
                    <Progress 
                      value={isVisible ? lang.level : 0} 
                      className="h-3"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="animate-slide-in-left">
            <SkillCard 
              title="AI/ML & Data Science" 
              skills={aiMlSkills} 
              color="primary"
            />
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <SkillCard 
              title="Web & Mobile Development" 
              skills={webMobileSkills} 
              color="secondary"
            />
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <SkillCard 
              title="Tools & Technologies" 
              skills={toolsSkills} 
              color="accent"
            />
          </div>

          <div className="animate-slide-in-right">
            <SkillCard 
              title="Soft Skills" 
              skills={softSkills} 
              showProgress={false}
              color="neon-cyan"
            />
          </div>
        </div>

        {/* Skill Radar Chart Visualization */}
        <div className="mt-16 animate-fade-in-up">
          <Card className="glassmorphism glow-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center text-secondary mb-8">Expertise Overview</h3>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-transparent animate-spin" style={{ animationDuration: '3s' }} />
                    <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">AI/ML</div>
                        <div className="text-sm text-muted-foreground">Expert</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Machine Learning & Computer Vision specialist with 95%+ project accuracy</p>
                </div>

                <div className="space-y-4">
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-transparent animate-spin" style={{ animationDuration: '2s', animationDelay: '1s' }} />
                    <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">Full Stack</div>
                        <div className="text-sm text-muted-foreground">Advanced</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">End-to-end web and mobile application development expertise</p>
                </div>

                <div className="space-y-4">
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-transparent animate-spin" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
                    <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">Data</div>
                        <div className="text-sm text-muted-foreground">Proficient</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Data analysis and visualization with business impact insights</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;