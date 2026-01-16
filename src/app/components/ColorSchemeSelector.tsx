import React, { useState } from 'react';
import { Check } from 'lucide-react';

export interface ColorScheme {
  name: string;
  description: string;
  primary: string;
  secondary: string;
  accent?: string;
  preview: {
    bg: string;
    text: string;
  };
}

export const colorSchemes: ColorScheme[] = [
  {
    name: 'Current - Deep Blue',
    description: 'Professional and trustworthy',
    primary: '#0F2A44',
    secondary: '#3B5BDB',
    preview: {
      bg: 'from-[#0F2A44] to-[#3B5BDB]',
      text: 'text-white'
    }
  },
  {
    name: 'Ocean Breeze',
    description: 'Fresh and modern',
    primary: '#0A4D68',
    secondary: '#088395',
    preview: {
      bg: 'from-[#0A4D68] to-[#088395]',
      text: 'text-white'
    }
  },
  {
    name: 'Purple Passion',
    description: 'Creative and innovative',
    primary: '#4A1C74',
    secondary: '#7B2CBF',
    preview: {
      bg: 'from-[#4A1C74] to-[#7B2CBF]',
      text: 'text-white'
    }
  },
  {
    name: 'Forest Green',
    description: 'Growth and sustainability',
    primary: '#1B4332',
    secondary: '#2D6A4F',
    preview: {
      bg: 'from-[#1B4332] to-[#2D6A4F]',
      text: 'text-white'
    }
  },
  {
    name: 'Sunset Orange',
    description: 'Energetic and bold',
    primary: '#D94910',
    secondary: '#FF6B35',
    preview: {
      bg: 'from-[#D94910] to-[#FF6B35]',
      text: 'text-white'
    }
  },
  {
    name: 'Ruby Red',
    description: 'Powerful and confident',
    primary: '#8B0000',
    secondary: '#DC143C',
    preview: {
      bg: 'from-[#8B0000] to-[#DC143C]',
      text: 'text-white'
    }
  },
  {
    name: 'Teal Tech',
    description: 'Modern and clean',
    primary: '#004A55',
    secondary: '#00B4D8',
    preview: {
      bg: 'from-[#004A55] to-[#00B4D8]',
      text: 'text-white'
    }
  },
  {
    name: 'Midnight Navy',
    description: 'Sophisticated and premium',
    primary: '#161B33',
    secondary: '#4361EE',
    preview: {
      bg: 'from-[#161B33] to-[#4361EE]',
      text: 'text-white'
    }
  },
  {
    name: 'Emerald Elegance',
    description: 'Luxurious and refined',
    primary: '#064420',
    secondary: '#059669',
    preview: {
      bg: 'from-[#064420] to-[#059669]',
      text: 'text-white'
    }
  },
  {
    name: 'Slate Professional',
    description: 'Corporate and timeless',
    primary: '#1E293B',
    secondary: '#475569',
    preview: {
      bg: 'from-[#1E293B] to-[#475569]',
      text: 'text-white'
    }
  },
  {
    name: 'Royal Indigo',
    description: 'Majestic and elegant',
    primary: '#312E81',
    secondary: '#6366F1',
    preview: {
      bg: 'from-[#312E81] to-[#6366F1]',
      text: 'text-white'
    }
  },
  {
    name: 'Amber Glow',
    description: 'Warm and inviting',
    primary: '#78350F',
    secondary: '#F59E0B',
    preview: {
      bg: 'from-[#78350F] to-[#F59E0B]',
      text: 'text-white'
    }
  }
];

interface ColorSchemeSelectorProps {
  onSelect: (scheme: ColorScheme) => void;
  currentScheme?: ColorScheme;
}

export function ColorSchemeSelector({ onSelect, currentScheme }: ColorSchemeSelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (scheme: ColorScheme, index: number) => {
    setSelectedIndex(index);
    onSelect(scheme);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Choose Your Color Scheme
        </h3>
        <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
          Select a color palette that best represents your brand identity
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {colorSchemes.map((scheme, index) => (
          <button
            key={index}
            onClick={() => handleSelect(scheme, index)}
            className={`relative group text-left transition-all duration-300 rounded-xl overflow-hidden border-2 ${
              selectedIndex === index
                ? 'border-blue-500 shadow-lg scale-105'
                : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
            }`}
          >
            {/* Color Preview */}
            <div className={`h-32 bg-gradient-to-br ${scheme.preview.bg} relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex gap-2 justify-center mb-2">
                    <div 
                      className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                      style={{ backgroundColor: scheme.primary }}
                    />
                    <div 
                      className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                      style={{ backgroundColor: scheme.secondary }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Selected Checkmark */}
              {selectedIndex === index && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Check size={16} className="text-blue-500" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-4 bg-white">
              <h4 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {scheme.name}
              </h4>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                {scheme.description}
              </p>
              <div className="mt-3 flex gap-2 text-xs">
                <div>
                  <span className="text-gray-500">Primary:</span>
                  <span className="ml-1 font-mono font-semibold text-gray-700">{scheme.primary}</span>
                </div>
              </div>
              <div className="flex gap-2 text-xs">
                <div>
                  <span className="text-gray-500">Secondary:</span>
                  <span className="ml-1 font-mono font-semibold text-gray-700">{scheme.secondary}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          How to Apply Your Color Scheme
        </h4>
        <ol className="text-sm text-blue-800 space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
          <li>1. Select your preferred color scheme above</li>
          <li>2. Copy the Primary and Secondary color codes</li>
          <li>3. Update the values in <code className="bg-blue-100 px-2 py-1 rounded">/src/styles/theme.css</code></li>
          <li>4. The changes will apply throughout your entire website</li>
        </ol>
      </div>

      {/* Selected Scheme Display */}
      {selectedIndex !== undefined && (
        <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Selected: {colorSchemes[selectedIndex].name}
          </h4>
          <div className="space-y-2 font-mono text-sm">
            <div className="flex items-center gap-3">
              <span className="text-gray-600 w-24">Primary:</span>
              <code className="bg-white px-3 py-1 rounded border border-gray-300 flex-1">
                {colorSchemes[selectedIndex].primary}
              </code>
              <div 
                className="w-10 h-10 rounded border-2 border-gray-300"
                style={{ backgroundColor: colorSchemes[selectedIndex].primary }}
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-600 w-24">Secondary:</span>
              <code className="bg-white px-3 py-1 rounded border border-gray-300 flex-1">
                {colorSchemes[selectedIndex].secondary}
              </code>
              <div 
                className="w-10 h-10 rounded border-2 border-gray-300"
                style={{ backgroundColor: colorSchemes[selectedIndex].secondary }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
