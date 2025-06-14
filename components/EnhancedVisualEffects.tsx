import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Enhanced visual effects overlay
function VisualEffectsOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create floating geometric shapes
    const shapes: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      type: 'triangle' | 'circle' | 'square';
    }> = [];

    // Initialize shapes
    for (let i = 0; i < 20; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 10,
        speed: Math.random() * 0.5 + 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.1 + 0.05,
        type: ['triangle', 'circle', 'square'][Math.floor(Math.random() * 3)] as 'triangle' | 'circle' | 'square'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get scroll progress
      const scrollContainer = document.querySelector('.scroll-container');
      const scrollProgress = scrollContainer 
        ? scrollContainer.scrollTop / (scrollContainer.scrollHeight - scrollContainer.clientHeight)
        : 0;

      shapes.forEach((shape, index) => {
        // Update position
        shape.y += shape.speed;
        shape.rotation += shape.rotationSpeed;

        // Reset position when out of bounds
        if (shape.y > canvas.height + shape.size) {
          shape.y = -shape.size;
          shape.x = Math.random() * canvas.width;
        }

        // Adjust based on scroll
        const scrollEffect = Math.sin(scrollProgress * Math.PI * 2 + index) * 50;
        const currentX = shape.x + scrollEffect;

        ctx.save();
        ctx.translate(currentX, shape.y);
        ctx.rotate(shape.rotation);
        ctx.globalAlpha = shape.opacity * (0.5 + Math.sin(scrollProgress * Math.PI * 4) * 0.3);

        // Set color based on scroll progress
        const hue = (120 + scrollProgress * 60) % 360; // Green to yellow spectrum
        ctx.fillStyle = `hsla(${hue}, 70%, 60%, ${shape.opacity})`;
        ctx.strokeStyle = `hsla(${hue}, 70%, 80%, ${shape.opacity * 2})`;
        ctx.lineWidth = 1;

        // Draw shape
        switch (shape.type) {
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -shape.size / 2);
            ctx.lineTo(-shape.size / 2, shape.size / 2);
            ctx.lineTo(shape.size / 2, shape.size / 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
          case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            break;
          case 'square':
            ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
            ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
            break;
        }

        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, mixBlendMode: 'screen' }}
    />
  );
}

// Gradient overlay that changes with scroll
function DynamicGradientOverlay() {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container');
      if (!scrollContainer) return;

      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const progress = scrollTop / scrollHeight;
      setScrollProgress(progress);
    };

    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const gradientStyle = {
    background: `radial-gradient(ellipse at ${50 + scrollProgress * 50}% ${50 + Math.sin(scrollProgress * Math.PI * 2) * 30}%, 
      rgba(132, 255, 87, ${0.03 + scrollProgress * 0.05}) 0%, 
      rgba(46, 125, 50, ${0.02 + scrollProgress * 0.03}) 50%, 
      transparent 100%)`,
  };

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 2, ...gradientStyle }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}

// Main enhanced effects component
function EnhancedVisualEffects() {
  return (
    <>
      <VisualEffectsOverlay />
      <DynamicGradientOverlay />
    </>
  );
}

export default EnhancedVisualEffects;
