import { useState, useEffect } from "react";

export function useHeroAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<any[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // 1. Set mounted state to true once the component reaches the browser
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 2. Only generate particles if we are on the client (mounted)
  useEffect(() => {
    if (!isMounted) return;

    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 10,
    }));
    
    // Removed startTransition as it can be unstable during initial hydration
    setParticles(newParticles);
  }, [isMounted]);

  // Smooth Mouse Tracking
  useEffect(() => {
    if (!isMounted) return; // Don't attach listeners until mounted

    let animationFrameId: number;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const animate = () => {
        currentX += (e.clientX - currentX) * 0.15;
        currentY += (e.clientY - currentY) * 0.15;
        setMousePosition({ x: currentX, y: currentY });
        
        if (Math.abs(e.clientX - currentX) > 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMounted]);

  return { mousePosition, particles };
}







/**
 * HOOK: useHeroAnimation
 * PURPOSE: Logic engine for the Hero section's interactive background and particles.
 * 
 * * USED IN: 
 * - Hero.tsx
 * 
 * * LOGIC BREAKDOWN:
 * 1. Particle Generation: On mount, creates 50 unique particles with randomized 
 * positions, sizes, and animation timings to avoid a repetitive pattern.
 * 2. Smooth Mouse Tracking: Uses requestAnimationFrame (rAF) and linear interpolation (lerp) 
 * to create a "lagged" or "lazy" follow effect for the cursor.
 * 
 * * FEATURES:
 * - Performance Optimized: Uses 'passive: true' on listeners and 'startTransition' for state 
 * updates to keep the main thread responsive.
 * - Auto-Cleanup: Disconnects listeners and cancels animation frames on unmount to prevent memory leaks.
 * 
 * * RETURN VALUES:
 * - mousePosition: { x, y } coordinates for the smoothed cursor position.
 * - particles: Array of particle objects with properties for the HeroBackground component.
 * * HOW TO TWEAK:
 * - To change mouse "smoothness": Adjust the 0.15 multiplier (lower = slower/smoother).
 * - To change particle count: Adjust the length in 'Array.from'.
 */