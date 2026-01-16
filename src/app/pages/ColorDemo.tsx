import React, { useState } from 'react';
import { ColorSchemeSelector, ColorScheme, colorSchemes } from '../components/ColorSchemeSelector';
import { Smartphone, Globe, Server, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ColorDemo() {
  const [selectedScheme, setSelectedScheme] = useState<ColorScheme>(colorSchemes[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft size={20} />
            <span style={{ fontFamily: 'Inter, sans-serif' }}>Back to Home</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Color Scheme Options
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Choose from professionally curated color palettes for your IndusJS website. Each scheme is designed to convey trust, professionalism, and innovation.
          </p>
        </div>

        {/* Color Selector */}
        <div className="mb-12">
          <ColorSchemeSelector 
            onSelect={setSelectedScheme}
            currentScheme={selectedScheme}
          />
        </div>

        {/* Live Preview */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Live Preview
          </h2>
          
          {/* Hero Section Preview */}
          <div 
            className="rounded-xl p-12 mb-8 text-white bg-gradient-to-br"
            style={{ 
              backgroundImage: `linear-gradient(to bottom right, ${selectedScheme.primary}, ${selectedScheme.secondary})`
            }}
          >
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Transform Your Ideas Into Digital Solutions
            </h3>
            <p className="text-lg opacity-90 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              We specialize in creating exceptional mobile and web applications that drive business growth.
            </p>
            <div className="flex gap-4">
              <button 
                className="px-6 py-3 bg-white rounded-full font-semibold transition-transform hover:scale-105"
                style={{ color: selectedScheme.primary, fontFamily: 'Inter, sans-serif' }}
              >
                Get Started
              </button>
              <button 
                className="px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Services Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: <Smartphone size={24} />, title: 'Mobile Development', desc: 'iOS & Android apps' },
              { icon: <Globe size={24} />, title: 'Web Applications', desc: 'Scalable web platforms' },
              { icon: <Server size={24} />, title: 'Backend & APIs', desc: 'Robust server systems' }
            ].map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white"
                  style={{ backgroundColor: selectedScheme.secondary }}
                >
                  {service.icon}
                </div>
                <h4 
                  className="font-semibold mb-2"
                  style={{ color: selectedScheme.primary, fontFamily: 'Poppins, sans-serif' }}
                >
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Proven track record of successful projects',
              'Expert team of senior developers',
              'Agile methodology with full transparency',
              'Long-term support and maintenance'
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle 
                  size={20} 
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: selectedScheme.secondary }}
                />
                <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button Preview */}
          <div className="mt-8 p-8 rounded-xl text-center" style={{ backgroundColor: selectedScheme.primary }}>
            <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Ready to Build Something Amazing?
            </h3>
            <p className="text-white opacity-90 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Let's discuss your project and bring your vision to life
            </p>
            <button 
              className="px-8 py-4 bg-white rounded-full font-semibold transition-transform hover:scale-105 shadow-lg"
              style={{ color: selectedScheme.primary, fontFamily: 'Inter, sans-serif' }}
            >
              Get Started Today
            </button>
          </div>
        </div>

        {/* Implementation Guide */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            How to Apply Your Selected Colors
          </h2>
          
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Step 1: Update theme.css
            </h3>
            <p className="text-gray-700 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Open <code className="bg-gray-100 px-2 py-1 rounded">/src/styles/theme.css</code> and update the color values:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`@theme {
  --color-primary: ${selectedScheme.primary};
  --color-secondary: ${selectedScheme.secondary};
  /* ... rest of your theme config */
}`}</code>
            </pre>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Current Selection
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium w-28">Scheme:</span>
                <span className="font-semibold text-gray-900">{selectedScheme.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium w-28">Primary:</span>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-6 h-6 rounded border-2 border-gray-300"
                    style={{ backgroundColor: selectedScheme.primary }}
                  />
                  <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">
                    {selectedScheme.primary}
                  </code>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium w-28">Secondary:</span>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-6 h-6 rounded border-2 border-gray-300"
                    style={{ backgroundColor: selectedScheme.secondary }}
                  />
                  <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">
                    {selectedScheme.secondary}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
