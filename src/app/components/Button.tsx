import React, { useState } from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  size = 'md',
  type = 'button'
}: ButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    
    setRipples([...ripples, { x, y, id }]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 600);
    
    onClick?.();
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  const variants = {
    primary: 'bg-white text-[#1E293B] border-2 border-[#8B0000] hover:bg-gradient-to-r hover:from-[#DC143C] hover:to-[#8B0000] hover:text-white hover:shadow-2xl hover:border-transparent',
    secondary: 'bg-white text-[#8B0000] hover:bg-gradient-to-r hover:from-[#DC143C] hover:to-[#8B0000] hover:text-white hover:shadow-2xl',
    outline: 'bg-transparent border-2 border-[#1E293B] text-[#1E293B] hover:bg-gradient-to-r hover:from-[#3B82F6] hover:to-[#1E293B] hover:text-white hover:shadow-xl hover:border-transparent'
  };

  return (
    <motion.button
      type={type}
      onClick={handleClick}
      className={`group relative overflow-hidden rounded-full font-semibold transition-all duration-300 ${sizeClasses[size]} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
            transform: 'translate(-50%, -50%)',
            animation: 'ripple 0.6s ease-out'
          }}
        />
      ))}
      <span className="relative z-10 text-[#8B0000] group-hover:text-white transition-colors duration-300">{children}</span>
    </motion.button>
  );
}