import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServiceHighlight {
  title: string;
  description: string;
}

interface ServiceDetail {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  highlights: ServiceHighlight[];
  whatWeBuild: string;
  whoItsFor: string[];
  typicalUseCases: string[];
  platforms: string[];
  howWeAddValue: string[];
}

interface ServiceTabsProps {
  services: ServiceDetail[];
}

export function ServiceTabs({ services }: ServiceTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  // Safety check for highlights
  if (!activeService || !activeService.highlights || activeService.highlights.length === 0) {
    return null;
  }

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeIndex === index
                ? 'bg-secondary text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-secondary hover:text-secondary'
            }`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 shadow-sm">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <h3 className="text-3xl lg:text-4xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {activeService.title}
            </h3>
            <ArrowUpRight className="text-secondary" size={28} />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            {activeService.description}
          </p>
        </div>

        {/* Central Layout: Image surrounded by highlights */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Side - 2 Highlights */}
            <div className="space-y-8 lg:order-1">
              {activeService.highlights.slice(0, 2).map((highlight, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-2 mb-2">
                    <h4 className="font-semibold text-lg text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {highlight.title}
                    </h4>
                    <ArrowUpRight className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Center - Image */}
            <div className="lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl"></div>
                <ImageWithFallback
                  src={activeService.imageUrl}
                  alt={activeService.title}
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-xl"
                />
              </div>
            </div>

            {/* Right Side - 3 Highlights */}
            <div className="space-y-8 lg:order-3">
              {activeService.highlights.slice(2, 5).map((highlight, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-2 mb-2">
                    <h4 className="font-semibold text-lg text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {highlight.title}
                    </h4>
                    <ArrowUpRight className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Know More Button */}
        <div className="text-center mt-12">
          <Link to="/services">
            <button className="px-8 py-3 bg-secondary text-white rounded-full font-medium hover:bg-primary transition-colors shadow-md flex items-center gap-2 mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Know More
              <ArrowUpRight size={18} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}