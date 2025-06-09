import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      role: 'Mobile App Development Intern',
      company: 'AppBirds',
      duration: '2025',
      type: 'Internship',
      description: 'Developed full-stack mobile applications using Flutter with focus on user experience optimization and backend integration.',
      achievements: [
        'Built responsive mobile apps with Flutter framework',
        'Optimized user experience and interface design',
        'Integrated backend APIs and services',
        'Collaborated with cross-functional development teams'
      ],
      technologies: ['Flutter', 'Dart', 'Android Studio', 'Firebase', 'REST APIs'],
      category: 'current'
    },
    {
      id: 2,
      role: 'Data Analyst Intern',
      company: 'Mass Finance',
      duration: '2024',
      type: 'Internship',
      description: 'Analyzed financial data and created insights for business decisions while working with large datasets and visualization dashboards.',
      achievements: [
        'Analyzed complex financial datasets for business insights',
        'Created interactive visualization dashboards',
        'Developed automated reporting systems',
        'Provided data-driven recommendations to stakeholders'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Excel', 'SQL'],
      category: 'recent'
    },
    {
      id: 3,
      role: 'Internet of Things Intern',
      company: 'Acmegrade',
      duration: '2023',
      type: 'Internship',
      description: 'Developed IoT solutions and sensor integration projects while working on embedded systems and connectivity protocols.',
      achievements: [
        'Designed and implemented IoT sensor networks',
        'Developed embedded system solutions',
        'Worked with various connectivity protocols',
        'Created real-time monitoring systems'
      ],
      technologies: ['Python', 'Raspberry Pi', 'Arduino', 'MQTT', 'Sensors', 'IoT Protocols'],
      category: 'past'
    },
    {
      id: 4,
      role: 'Skill Development Intern',
      company: 'Indus University',
      duration: '2022',
      type: 'Internship',
      description: 'Enhanced technical skills in various programming domains and participated in collaborative development projects.',
      achievements: [
        'Mastered multiple programming languages and frameworks',
        'Participated in team-based development projects',
        'Gained hands-on experience with modern development tools',
        'Built foundational skills in software engineering'
      ],
      technologies: ['Python', 'Java', 'Web Development', 'Git', 'Software Engineering'],
      category: 'foundation'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'current': return 'primary';
      case 'recent': return 'secondary';
      case 'past': return 'accent';
      case 'foundation': return 'neon-cyan';
      default: return 'primary';
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'current': return { text: 'Current', class: 'bg-primary/20 text-primary border-primary/30' };
      case 'recent': return { text: 'Recent', class: 'bg-secondary/20 text-secondary border-secondary/30' };
      case 'past': return { text: 'Completed', class: 'bg-accent/20 text-accent border-accent/30' };
      case 'foundation': return { text: 'Foundation', class: 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30' };
      default: return { text: 'Experience', class: 'bg-primary/20 text-primary border-primary/30' };
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-16 w-32 h-32 border border-secondary rotate-45 animate-float" />
        <div className="absolute bottom-32 left-12 w-24 h-24 bg-accent/10 rounded-full animate-neural-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in-up">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Building expertise through hands-on internships and collaborative projects
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const categoryBadge = getCategoryBadge(exp.category);
              
              return (
                <div 
                  key={exp.id} 
                  className={`relative mb-12 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-8 md:left-1/2 w-4 h-4 bg-${getCategoryColor(exp.category)} rounded-full transform md:-translate-x-1/2 z-10 animate-neural-pulse`} />
                  
                  {/* Experience Card */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card className="glassmorphism glow-border hover-glow">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className={`text-xl font-bold text-${getCategoryColor(exp.category)} mb-1`}>
                              {exp.role}
                            </h3>
                            <p className="text-lg text-foreground font-medium">{exp.company}</p>
                          </div>
                          <div className="text-right">
                            <Badge className={categoryBadge.class}>
                              {categoryBadge.text}
                            </Badge>
                            <p className="text-sm text-muted-foreground mt-1">{exp.duration}</p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Key Achievements */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-secondary mb-3">Key Achievements:</h4>
                          <div className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className={`w-1.5 h-1.5 bg-${getCategoryColor(exp.category)} rounded-full mt-2 mr-3 flex-shrink-0`} />
                                <p className="text-sm text-muted-foreground">{achievement}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold text-accent mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <Badge 
                                key={idx} 
                                variant="outline" 
                                className="text-xs border-border/30 hover:bg-muted/20"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 animate-fade-in-up">
          <Card className="glassmorphism glow-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center text-primary mb-8">Experience Highlights</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Industries Experienced</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/20 text-primary border-primary/30">Mobile Development</Badge>
                    <Badge className="bg-secondary/20 text-secondary border-secondary/30">Financial Technology</Badge>
                    <Badge className="bg-accent/20 text-accent border-accent/30">Internet of Things</Badge>
                    <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30">Education Technology</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary">Core Competencies Developed</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      Full-stack mobile and web application development
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      Data analysis and business intelligence
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      IoT systems and embedded programming
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3" />
                      Cross-functional team collaboration
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/30">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">4</div>
                    <div className="text-sm text-muted-foreground">Internships</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-secondary">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-accent">15+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-neon-cyan">100%</div>
                    <div className="text-sm text-muted-foreground">Completion Rate</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;