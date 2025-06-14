
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string; // e.g., 'animate-fade-in-up'
  threshold?: number;
  triggerOnce?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animationClass = 'animate-fade-in-up', // Default animation
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!triggerOnce) {
            // setIsVisible(false); // Option to re-trigger animation
          }
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce]);

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 transition-opacity duration-500', // Start hidden, prepare for animation
        isVisible ? animationClass : '',
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
