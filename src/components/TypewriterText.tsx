'use client';

import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
}

const TypewriterText = ({ text, className = '' }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(text.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
        setDelay(50); // Velocidad más rápida al borrar
      } else {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        setDelay(100); // Velocidad normal al escribir
      }

      if (!isDeleting && currentIndex === text.length) {
        // Cuando termina de escribir, espera un momento antes de empezar a borrar
        setDelay(2000);
        setIsDeleting(true);
      } else if (isDeleting && currentIndex === 0) {
        // Cuando termina de borrar, vuelve a escribir
        setIsDeleting(false);
        setDelay(100);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex, text, isDeleting, delay]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText; 