import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => (
  <div className={`rounded-xl shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children }: { children: ReactNode }) => (
  <div className="p-6">{children}</div>
);