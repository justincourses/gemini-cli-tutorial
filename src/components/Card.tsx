import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white transition-all duration-300 hover:bg-white/20 ${className}`}>
      {children}
    </div>
  );
}
