import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode; 
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
