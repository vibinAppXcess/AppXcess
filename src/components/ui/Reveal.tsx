import React, { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
  slide?: 'up' | 'down' | 'left' | 'right' | 'none';
};

const Reveal: React.FC<RevealProps> = ({ children, delayMs = 0, className = '', slide = 'up' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delayMs);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  const slideMap: Record<string, string> = {
    up: 'translate-y-4',
    down: '-translate-y-4',
    left: 'translate-x-4',
    right: '-translate-x-4',
    none: ''
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform opacity-0 ${slideMap[slide]} ${visible ? 'opacity-100 translate-x-0 translate-y-0' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;


