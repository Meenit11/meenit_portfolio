import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin, Github, Download, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('0kNVK_tP-6egmIdbq');

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_5qnyacl',
        'template_2slvjtq',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Meenit Doshi',
        }
      );

      console.log('Email sent successfully:', result.text);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'doshimeenit110503@gmail.com',
      link: 'mailto:doshimeenit110503@gmail.com',
      color: 'primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9429603169',
      link: 'tel:+919429603169',
      color: 'secondary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/meenit11',
      link: 'https://linkedin.com/in/meenit11',
      color: 'accent'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/meenit-doshi',
      link: 'https://github.com',
      color: 'neon-cyan'
    }
  ];

  const availability = [
    { type: 'Remote Work', available: true },
    { type: 'Flexible Hours', available: true },
    { type: 'Relocation', available: true },
    { type: 'Full-time', available: true },
    { type: 'Part-time', available: true },
    { type: 'Contract', available: true }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-16 w-40 h-40 border border-primary rotate-12 animate-float" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/10 rounded-full animate-neural-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in-up">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Ready to collaborate on innovative AI/ML projects or full-stack development opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <Card className="glassmorphism glow-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="glow-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="glow-border"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project collaboration, job opportunity, etc."
                      required
                      className="glow-border"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      required
                      className="glow-border resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-primary-foreground hover:scale-105 transition-transform"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right space-y-8">
            {/* Contact Methods */}
            <Card className="glassmorphism glow-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <a
                        key={index}
                        href={method.link}
                        target={method.label === 'LinkedIn' || method.label === 'GitHub' ? '_blank' : undefined}
                        rel={method.label === 'LinkedIn' || method.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                        className="flex items-center p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors hover-glow group"
                      >
                        <div className={`p-3 rounded-lg bg-${method.color}/20 mr-4 group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-5 h-5 text-${method.color}`} />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{method.label}</div>
                          <div className={`text-foreground font-medium group-hover:text-${method.color} transition-colors`}>
                            {method.value}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-border/30">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Based in India - Open to Remote/Relocation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="glassmorphism glow-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-accent mb-6">Availability</h3>
                
                <div className="mb-6">
                  <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30 mb-4">
                    🟢 Available for New Opportunities
                  </Badge>
                  <p className="text-muted-foreground text-sm">
                    Actively seeking AI/ML Engineer, Full Stack Developer, or Data Analyst positions
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {availability.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/10 rounded-lg">
                      <span className="text-sm text-foreground">{item.type}</span>
                      <Badge variant={item.available ? "default" : "outline"} className="text-xs">
                        {item.available ? '✓' : '✗'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glassmorphism glow-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-neon-cyan mb-6">Quick Actions</h3>
                
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start glow-border hover-glow">
                    <Download className="w-4 h-4 mr-3" />
                    Download Resume (PDF)
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start glow-border hover-glow">
                    <Github className="w-4 h-4 mr-3" />
                    View GitHub Portfolio
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start glow-border hover-glow">
                    <Linkedin className="w-4 h-4 mr-3" />
                    Connect on LinkedIn
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border/30 text-center">
                  <p className="text-sm text-muted-foreground">
                    Response time: <span className="text-primary font-medium">Within 24 hours</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up">
          <Card className="glassmorphism glow-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're looking for an AI/ML engineer to develop cutting-edge solutions, 
                a full-stack developer to bring your ideas to life, or a data analyst to unlock 
                insights from your data - I'm here to help turn your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gradient-primary text-primary-foreground px-8">
                  <Mail className="w-4 h-4 mr-2" />
                  Start a Conversation
                </Button>
                <Button variant="outline" className="glow-border hover-glow px-8">
                  <Download className="w-4 h-4 mr-2" />
                  View My Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;