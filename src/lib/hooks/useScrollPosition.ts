'use client';

import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const [lastPosition, setLastPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      
      if (currentPosition > lastPosition) {
        setDirection('down');
      } else if (currentPosition < lastPosition) {
        setDirection('up');
      }
      
      setLastPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastPosition]);

  return {
    scrollPosition,
    direction,
    isScrolled: scrollPosition > 0
  };
};
