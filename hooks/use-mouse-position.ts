import { useState, useEffect } from "react";

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      let animationFrameId: number;
      let currentX = 0;
      let currentY = 0;
      
      const handleMouseMove = (e: MouseEvent) => {
        const targetX = e.clientX;
        const targetY = e.clientY;
        
        const animate = () => {
          // Smooth interpolation (easing factor)
          currentX += (targetX - currentX) * 0.15;
          currentY += (targetY - currentY) * 0.15;
          
          setMousePosition({ x: currentX, y: currentY });
          
          // Continue animating if we're not close enough
          if (Math.abs(targetX - currentX) > 1 || Math.abs(targetY - currentY) > 1) {
            animationFrameId = requestAnimationFrame(animate);
          }
        };
        
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        animationFrameId = requestAnimationFrame(animate);
      };
      
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }, []);

  return mousePosition;
}