import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Emotion Detection System',
      category: 'AI/ML',
      featured: true,
      description: 'Advanced ML model using TensorFlow and OpenCV to detect emotions from images and live video feeds with 95%+ accuracy',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'MediaPipe', 'Flask'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      features: ['Multi-face detection', 'Real-time processing', 'Emotion probability scores', 'Data visualization'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'ASL Sign Language Recognition',
      category: 'AI/ML',
      featured: true,
      description: 'Deep learning model to classify American Sign Language gestures with 92% accuracy and real-time hand gesture to text conversion',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'MediaPipe', 'Flask'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      features: ['Real-time gesture recognition', 'Hand tracking', 'Text conversion', 'Learning mode'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'AI Stock Price Predictor',
      category: 'AI/ML',
      featured: false,
      description: 'LSTM neural network predicting stock prices with technical indicators and interactive web dashboard',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'Flask', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      features: ['LSTM predictions', 'Technical analysis', 'Risk assessment', 'Real-time data'],
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Medicine Ordering App',
      category: 'Mobile',
      featured: false,
      description: 'Full-stack Android application for online medicine ordering with inventory management and payment integration',
      technologies: ['Flutter', 'Dart', 'Android Studio', 'Firebase', 'XML'],
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
      features: ['Order tracking', 'Prescription upload', 'Payment gateway', 'Admin panel'],
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Smart Home IoT Dashboard',
      category: 'Web',
      featured: false,
      description: 'Centralized IoT control system for smart home devices with real-time monitoring and automated control',
      technologies: ['Python', 'Flask', 'SQLite', 'JavaScript', 'Chart.js', 'Raspberry Pi'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      features: ['Device control', 'Energy monitoring', 'Automation rules', 'Mobile responsive'],
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Computer Vision Object Detection',
      category: 'AI/ML',
      featured: false,
      description: 'RESTful API for real-time object detection and counting using YOLO with batch processing capabilities',
      technologies: ['Python', 'YOLO', 'OpenCV', 'Flask', 'Docker', 'REST API'],
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
      features: ['Real-time detection', 'Batch processing', 'Custom training', 'RESTful API'],
      github: '#',
      demo: '#'
    }
  ];

  const categories = ['All', 'AI/ML', 'Web', 'Mobile'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-36 h-36 border border-accent rotate-12 animate-float" />
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-primary/10 rounded-full animate-neural-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in-up">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Innovative solutions demonstrating expertise in AI/ML, Full Stack Development, and Data Analysis
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">🌟 Flagship Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={project.id} className="glassmorphism glow-border hover-glow group animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/90 text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-background/80 border-primary/30 text-primary">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-3">{project.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-secondary mb-2">Key Features:</h5>
                      <div className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-border/30">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs border-border/30">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1 glow-border hover-glow">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 gradient-primary text-primary-foreground">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 animate-fade-in-up">
          <div className="flex flex-wrap gap-3 bg-muted/10 p-2 rounded-lg">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={activeFilter === category ? "gradient-primary text-primary-foreground" : "glow-border hover-glow"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="glassmorphism glow-border hover-glow group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="outline" className="text-xs bg-background/80 border-primary/30 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  {project.featured && (
                    <div className="absolute top-2 left-2">
                      <Badge className="text-xs bg-primary/90 text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-bold text-foreground mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                  
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-border/30">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs border-border/30">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs glow-border hover-glow">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 text-xs gradient-primary text-primary-foreground">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-16 animate-fade-in-up">
          <Card className="glassmorphism glow-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center text-accent mb-8">Project Impact</h3>
              
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">95%+</div>
                  <div className="text-sm text-muted-foreground">ML Model Accuracy</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-secondary">10+</div>
                  <div className="text-sm text-muted-foreground">Completed Projects</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies Used</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-neon-cyan">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;