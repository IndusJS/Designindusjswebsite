import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DetailedServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  whatWeBuild: string;
  whoItsFor: string[];
  typicalUseCases: string[];
  platforms: string[];
  howWeAddValue: string[];
}

export function DetailedServiceCard({
  icon,
  title,
  description,
  whatWeBuild,
  whoItsFor,
  typicalUseCases,
  platforms,
  howWeAddValue
}: DetailedServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Header Section */}
      <div className="p-6 lg:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {title}
            </h3>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
          {description}
        </p>
        
        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {/* Expandable Details Section */}
      {isExpanded && (
        <div className="border-t border-gray-200 bg-gray-50 p-6 lg:p-8 space-y-6">
          {/* What We Build */}
          <div>
            <h4 className="font-semibold text-primary mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              What We Build
            </h4>
            <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              {whatWeBuild}
            </p>
          </div>

          {/* Who It's For */}
          <div>
            <h4 className="font-semibold text-primary mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Who It's For
            </h4>
            <ul className="space-y-2">
              {whoItsFor.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="text-secondary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Typical Use Cases */}
          <div>
            <h4 className="font-semibold text-primary mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Typical Use Cases
            </h4>
            <ul className="space-y-2">
              {typicalUseCases.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="text-secondary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms & Technology */}
          <div>
            <h4 className="font-semibold text-primary mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Platforms & Technology
            </h4>
            <ul className="space-y-2">
              {platforms.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="text-secondary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How We Add Value */}
          <div>
            <h4 className="font-semibold text-primary mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              How We Add Value
            </h4>
            <ul className="space-y-2">
              {howWeAddValue.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="text-secondary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
