import { useEffect, useRef } from 'react';

export const SkillsParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 200 });
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = 45; // Increased particle count

      for (let i = 0; i < particleCount; i++) {
        // Create 3 depth layers
        const depth = Math.random();
        let size = 0.5;
        let opacity = 0.1;
        let radius = 10;
        let driftSpeed = 0.002;

        if (depth > 0.8) {
          // Foreground
          size = Math.random() * 1.5 + 1.5;
          opacity = Math.random() * 0.3 + 0.3;
          radius = Math.random() * 40 + 20;
          driftSpeed = (Math.random() * 0.004) + 0.003;
        } else if (depth > 0.4) {
          // Midground
          size = Math.random() * 1 + 0.8;
          opacity = Math.random() * 0.2 + 0.2;
          radius = Math.random() * 20 + 10;
          driftSpeed = (Math.random() * 0.003) + 0.002;
        } else {
          // Background
          size = Math.random() * 0.5 + 0.3;
          opacity = Math.random() * 0.15 + 0.05;
          radius = Math.random() * 15 + 5;
          driftSpeed = (Math.random() * 0.002) + 0.001;
        }

        const x = Math.random() * width;
        const y = Math.random() * height;

        // Mix of white and orange colors
        const isWhite = Math.random() > 0.4;
        const color = isWhite ? '255, 255, 255' : '255, 107, 74';
        const shadowColor = isWhite ? '255, 255, 255' : '255, 90, 54';

        particlesRef.current.push({
          baseX: x,
          baseY: y,
          x,
          y,
          size,
          opacity,
          angle: Math.random() * Math.PI * 2,
          driftSpeed,
          radius,
          color,
          shadowColor
        });
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.offsetWidth;
        height = parent.offsetHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });

    const parent = canvas.parentElement;
    if (parent) {
      resizeObserver.observe(parent);
    }

    // Fallback resize
    window.addEventListener('resize', resize);
    setTimeout(resize, 100);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const mouse = mouseRef.current;

      particlesRef.current.forEach((p) => {
        // Continuous ambient drift
        p.angle += p.driftSpeed;
        const driftX = Math.cos(p.angle) * p.radius;
        const driftY = Math.sin(p.angle) * p.radius;

        let targetX = p.baseX + driftX;
        let targetY = p.baseY + driftY;

        // Mouse repulsion
        const dx = targetX - mouse.x;
        const dy = targetY - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          // Easing for force to feel magnetic
          const push = force * force * 100;
          targetX += (dx / distance) * push;
          targetY += (dy / distance) * push;
        }

        // Smooth easing towards target (inertia)
        p.x += (targetX - p.x) * 0.04;
        p.y += (targetY - p.y) * 0.04;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        // Inner core
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;

        // Outer glow
        ctx.shadowBlur = p.size * 6;
        ctx.shadowColor = `rgba(${p.shadowColor}, ${p.opacity * 2})`;

        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const section = canvas.closest('section');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove as any);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', resize);
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove as any);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Ensure it ignores pointer events so it doesn't block interactions
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
