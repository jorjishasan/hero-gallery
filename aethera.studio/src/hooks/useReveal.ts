import { useEffect, useRef } from 'react';

export const useReveal = <T extends HTMLElement = HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find all children with .reveal and add .visible
            const reveals = element.querySelectorAll('.reveal');
            reveals.forEach((el) => el.classList.add('visible'));
            
            // If the element itself has .reveal, add .visible
            if (element.classList.contains('reveal')) {
              element.classList.add('visible');
            }
            
            // Once visible, we can stop observing if desired, 
            // but the prompt doesn't explicitly say to unobserve
            // so we'll keep it for potential re-reveals or consistency
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
};
