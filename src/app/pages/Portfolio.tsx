import React from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { PortfolioCard } from '../components/PortfolioCard';
import { SEO } from '../components/SEO';
import { Filter } from 'lucide-react';

export function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'News & Content Distribution Platform',
      category: 'Media & Publishing – Web / Mobile',
      imageUrl: 'https://images.unsplash.com/photo-1663316026819-ea3a6293e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwbWVkaWElMjBwdWJsaXNoaW5nfGVufDF8fHx8MTc2ODQwMjE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'High-performance digital news platform enabling real-time publishing, content categorization, and multi-device delivery at scale.',
      platform: 'iOS | Android | Web',
      highlights: [
        'Real-time content publishing',
        'Push notifications',
        'SEO-optimized architecture'
      ],
      industries: ['Media', 'Web', 'Mobile']
    },
    {
      title: 'Fleet Management Solution',
      category: 'Logistics & Mobility – Web / Mobile',
      imageUrl: 'https://images.unsplash.com/photo-1755119848466-ca5a54039cc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGVldCUyMHZlaGljbGUlMjB0cmFja2luZ3xlbnwxfHx8fDE3Njg0MDIxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'End-to-end fleet operations system providing live tracking, analytics, and operational control for distributed vehicle networks.',
      platform: 'iOS | Android | Web',
      highlights: [
        'Live vehicle tracking',
        'Route optimization',
        'Operations dashboard'
      ],
      industries: ['Logistics', 'Web', 'Mobile']
    },
    {
      title: 'Language & Dictionary Application',
      category: 'Education & Reference – Web / Mobile',
      imageUrl: 'https://images.unsplash.com/photo-1667980432734-0e662dd989c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWN0aW9uYXJ5JTIwbGFuZ3VhZ2UlMjBsZWFybmluZ3xlbnwxfHx8fDE3Njg0MDIxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Fast, intuitive dictionary and learning tool designed for search accuracy, offline access, and cross-platform consistency.',
      platform: 'iOS | Android | Web',
      highlights: [
        'Advanced word search',
        'Offline access',
        'Audio pronunciation'
      ],
      industries: ['Education', 'Web', 'Mobile']
    },
    {
      title: 'Food Delivery & Ordering App',
      category: 'Food & Beverage – Web / Mobile',
      imageUrl: 'https://images.unsplash.com/photo-1601972602288-3be527b4f18a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzY4MjkzOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'On-demand food ordering platform connecting customers, vendors, and delivery partners with real-time order tracking.',
      platform: 'iOS | Android | Web',
      highlights: [
        'Live order tracking',
        'Payment gateway integration',
        'Vendor & delivery dashboards'
      ],
      industries: ['Food & Beverage', 'Web', 'Mobile']
    },
    {
      title: 'School Management Platform',
      category: 'Education – Web / Mobile',
      imageUrl: 'https://images.unsplash.com/photo-1734542380868-0b60ea9f8742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBlZHVjYXRpb24lMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc2ODQwMjE3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Integrated school management system digitizing academic and administrative workflows for institutions.',
      platform: 'iOS | Android | Web',
      highlights: [
        'Student & staff management',
        'Attendance & exams',
        'Parent-teacher communication'
      ],
      industries: ['Education', 'Web', 'Mobile']
    }
  ];

  const filters = ['All', 'Web', 'Mobile', 'Education', 'Logistics', 'Media', 'Food & Beverage'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.industries.includes(selectedFilter)
      );

  return (
    <div className="min-h-screen">
      <SEO 
        title="Portfolio - IndusJS | Real-World Digital Solutions"
        description="Explore IndusJS portfolio showcasing enterprise-grade web and mobile applications across media, logistics, education, and food delivery sectors. Delivered for growth-stage clients."
        keywords="portfolio, case studies, mobile apps, web applications, enterprise solutions, IndusJS projects, fleet management, news platform, school management, food delivery app"
        url="https://indusjs.com/portfolio"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Portfolio
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              A snapshot of real-world platforms and systems delivered for enterprise and growth-stage clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Filter by:</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedFilter === filter
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <PortfolioCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                No projects found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer Note - Trust Signal */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Confidentiality Note
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Projects showcased are anonymized representations of work delivered for existing clients. 
                    Specific brand names are not disclosed due to confidentiality agreements. All platforms 
                    highlighted demonstrate our capability to deliver enterprise-ready solutions across diverse domains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}