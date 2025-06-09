import { useEffect, useRef } from 'react';

const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Create particles
    const createParticles = () => {
      const colors = ['#00FFFF', '#8A2BE2', '#4169E1', '#00FF7F'];
      
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections to nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = particle.color;
              ctx.globalAlpha = (100 - distance) / 100 * 0.1;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.1 }}
      />

      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="matrix-rain">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-neon-matrix text-xs font-mono animate-matrix-rain"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            >
              {Array.from({ length: 50 }).map((_, j) => (
                <div key={j} className="block">
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Neural Network Nodes */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-primary rounded-full animate-neural-pulse"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${20 + (i * 4)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-secondary/5 to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-neon-cyan/5 to-transparent" />
      </div>

      {/* Geometric Patterns */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        {/* Rotating hexagons */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-primary/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-secondary/30 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-accent/30 rotate-12 animate-bounce" style={{ animationDuration: '4s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      {/* AI Circuit Board Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0 100 L50 100 L50 50 L150 50 L150 150 L200 150" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    fill="none" 
                    className="text-primary/20" />
              <circle cx="50" cy="100" r="3" fill="currentColor" className="text-primary/30" />
              <circle cx="50" cy="50" r="3" fill="currentColor" className="text-secondary/30" />
              <circle cx="150" cy="50" r="3" fill="currentColor" className="text-accent/30" />
              <circle cx="150" cy="150" r="3" fill="currentColor" className="text-neon-cyan/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
    </>
  );
};

export default BackgroundEffects;