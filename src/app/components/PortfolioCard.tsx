import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  platform: string;
  highlights?: string[];
}

export function PortfolioCard({ title, category, imageUrl, description, platform, highlights }: PortfolioCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-sm text-secondary font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
          {category}
        </span>
        <h3 className="text-xl font-semibold text-primary mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {title}
        </h3>
        <p className="text-gray-600 mt-2 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          {description}
        </p>
        
        {highlights && highlights.length > 0 && (
          <div className="space-y-2 mb-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        )}
        
        <div className="pt-3 border-t border-gray-100 mt-auto">
          <span className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
            Platform: <span className="text-primary font-medium">{platform}</span>
          </span>
        </div>
      </div>
    </div>
  );
}