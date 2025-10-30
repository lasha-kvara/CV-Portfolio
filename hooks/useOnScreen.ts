
import { useState, useEffect, RefObject } from 'react';

export const useOnScreen = <T extends HTMLElement,>(ref: RefObject<T>, rootMargin: string = '0px', threshold: number = 0.1): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(element);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [ref, rootMargin, threshold]);

  return isIntersecting;
};
