import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const AboutSection = () => {
  const languages = [{
    name: 'English',
    level: 'Fluent'
  }, {
    name: 'Hindi',
    level: 'Native'
  }, {
    name: 'Gujarati',
    level: 'Native'
  }];
  const certifications = ['Core Python - Udemy', 'Mobile App Development - AppBirds', 'Data Analysis - Mass Finance', 'IoT Development - Acmegrade'];
  return <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full animate-neural-pulse" />
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-secondary/10 rotate-45 animate-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in-up">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Designing Solutions, Not Just Visuals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Personal Info */}
          <div className="animate-slide-in-left">
            <div className="glassmorphism p-8 rounded-xl glow-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Personal Information</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="text-foreground">India</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="text-foreground">+91 9429603169</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="text-foreground">doshimeenit110503@gmail.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Status:</span>
                  <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30 bg-lime-300">
                    Available for Opportunities
                  </Badge>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-secondary mb-4">Languages</h4>
                <div className="grid grid-cols-3 gap-3">
                  {languages.map((lang, index) => <div key={index} className="text-center">
                      <div className="text-sm font-medium text-foreground">{lang.name}</div>
                      <div className="text-xs text-muted-foreground">{lang.level}</div>
                    </div>)}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-accent mb-4">Work Preferences</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary/30 text-primary">Remote Work</Badge>
                  <Badge variant="outline" className="border-secondary/30 text-secondary">Flexible Hours</Badge>
                  <Badge variant="outline" className="border-accent/30 text-accent">Relocation Ready</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Certifications */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              {/* Education */}
              <Card className="glassmorphism glow-border hover-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Education</h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary/30 pl-6">
                      <h4 className="text-lg font-semibold text-foreground">Bachelor of Technology</h4>
                      <p className="text-secondary font-medium">Computer Engineering</p>
                      <p className="text-muted-foreground">Indus Institution of Technology and Engineering</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-muted-foreground">2021 - 2025</span>
                        <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30">
                          CGPA: 9.12
                        </Badge>
                      </div>
                    </div>

                    <div className="border-l-2 border-secondary/30 pl-6">
                      <h4 className="text-lg font-semibold text-foreground">Higher Secondary Certificate</h4>
                      <p className="text-muted-foreground">Indian Certificate of Secondary Education (HSC)</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-muted-foreground">2020 - 2021</span>
                        <Badge variant="outline" className="border-secondary/30 text-secondary">
                          87%
                        </Badge>
                      </div>
                    </div>

                    <div className="border-l-2 border-accent/30 pl-6">
                      <h4 className="text-lg font-semibold text-foreground">Secondary School Certificate</h4>
                      <p className="text-muted-foreground">Indian School Certificate (SSC)</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-muted-foreground">2018 - 2019</span>
                        <Badge variant="outline" className="border-accent/30 text-accent">
                          84%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="glassmorphism glow-border hover-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-secondary mb-6">Certifications</h3>
                  
                  <div className="grid gap-3">
                    {certifications.map((cert, index) => <div key={index} className="flex items-center p-3 bg-muted/10 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-neural-pulse" />
                        <span className="text-foreground">{cert}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mt-16 text-center animate-fade-in-up">
          <Card className="glassmorphism glow-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-accent mb-6">Professional Summary</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Open to roles in <span className="text-primary font-semibold">AI/ML engineering</span>, 
                <span className="text-secondary font-semibold"> data analysis</span>, 
                <span className="text-accent font-semibold"> tech support</span>, or 
                <span className="text-neon-cyan font-semibold"> full stack development</span>. 
                Willing to work flexible hours, relocate, or contribute remotely to deliver innovative solutions 
                that drive business impact and technological advancement.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default AboutSection;