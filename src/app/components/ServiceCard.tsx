import React, { useState } from 'react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

export function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
      className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/5 via-transparent to-[#DC143C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon with animated background */}
      <motion.div 
        className="relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#8B0000] to-[#DC143C] flex items-center justify-center text-white"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>

      <h3 className="text-xl font-semibold text-[#1E293B] mb-3 group-hover:text-[#8B0000] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {title}
      </h3>
      
      <p className="relative text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
        {description}
      </p>

      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#8B0000]/20 transition-all duration-500" />
    </motion.div>
  );
}
