import React from 'react';

export default function Section({ 
  children, 
  variant = 'base', 
  className = '',
  as: Component = 'section',
  ...props 
}) {
  const variants = {
    base: "bg-surface",
    inset: "bg-surface-container-low",
    floating: "bg-surface-container-lowest shadow-[0_12px_32px_rgba(2,31,41,0.06)]",
    overlay: "bg-surface-container-high"
  };

  return (
    <Component 
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
