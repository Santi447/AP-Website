import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-sans transition-all duration-200";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary-container text-white rounded-md px-6 py-3 font-semibold hover:brightness-110",
    secondary: "bg-secondary-container text-on-secondary-container rounded-sm px-6 py-3 font-medium hover:brightness-95",
    tertiary: "text-primary font-bold hover:underline decoration-2 underline-offset-4 px-2 py-1"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
