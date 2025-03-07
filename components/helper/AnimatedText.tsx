"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure GSAP plugins are registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedTextProps {
  children: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  duration?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  tag = "span",
  className = "",
  delay = 0,
  duration = 0.8,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const Component = tag as any;
  const textContent = typeof children === "string" ? children : "";

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined" || !containerRef.current) return;

    const container = containerRef.current;
    const textElements = Array.from(container.childNodes);
    
    // Reset any existing animations/styles
    gsap.set(textElements, { 
      y: 0, 
      opacity: 1,
      clearProps: "all" 
    });

    // Set initial state before animation
    gsap.set(textElements, { 
      y: 50, 
      opacity: 0 
    });
    
    // Create scroll trigger for animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom-=100",
        toggleActions: "play none none none",
        markers: false
      }
    });
    
    tl.to(textElements, {
      y: 0,
      opacity: 1,
      duration: duration,
      stagger: 0.05,
      delay: delay,
      ease: "power3.out",
    });

    return () => {
      // Clean up
      if (tl) tl.kill();
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
    };
  }, [children, delay, duration]);

  // Create individual elements for each word
  const words = textContent.split(" ").map((word, index) => (
    <span key={index} className="inline-block px-1">
      {word}
    </span>
  ));

  return (
    <Component className={`inline-block ${className}`}>
      <div 
        ref={containerRef} 
        className="flex flex-wrap justify-center whitespace-normal"
        style={{ willChange: "transform, opacity" }}
      >
        {words}
      </div>
    </Component>
  );
};

export default AnimatedText;