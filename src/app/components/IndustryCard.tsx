import React from 'react';

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

export function IndustryCard({ icon, title, description }: IndustryCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-secondary hover:shadow-md transition-all duration-300 text-center">
      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-secondary mx-auto mb-4">
        {icon}
      </div>
      <h4 className="font-semibold text-primary mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
        {title}
      </h4>
      {description && (
        <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
          {description}
        </p>
      )}
    </div>
  );
}