import React from 'react';
import { IndustryCard } from '../components/IndustryCard';
import { Heart, ShoppingCart, Building, GraduationCap, TrendingUp, Users, Utensils, Plane, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Industries() {
  const industries = [
    { icon: <Heart size={24} />, title: 'Healthcare', description: 'HIPAA-compliant solutions for modern healthcare delivery' },
    { icon: <ShoppingCart size={24} />, title: 'E-commerce', description: 'Scalable platforms for online retail success' },
    { icon: <Building size={24} />, title: 'Finance', description: 'Secure fintech solutions and banking applications' },
    { icon: <GraduationCap size={24} />, title: 'Education', description: 'Engaging e-learning platforms and educational tools' },
    { icon: <TrendingUp size={24} />, title: 'Real Estate', description: 'Property management and marketplace solutions' },
    { icon: <Users size={24} />, title: 'Social Media', description: 'Community-driven platforms and social networks' },
    { icon: <Utensils size={24} />, title: 'Food & Beverage', description: 'Restaurant apps and delivery platforms' },
    { icon: <Plane size={24} />, title: 'Travel & Hospitality', description: 'Booking systems and travel management' }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            Delivering industry-specific solutions across diverse sectors
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-secondary hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-secondary mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {industry.title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industries Showcase */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Featured Industry Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Explore how we deliver specialized solutions across key industries
            </p>
          </div>

          <div className="space-y-16">
            {/* Healthcare */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>Healthcare</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We build HIPAA-compliant healthcare solutions including patient portals, telemedicine platforms, and healthcare management systems that prioritize security and usability.
                </p>
                <ul className="space-y-3">
                  {['Patient management systems', 'Telemedicine platforms', 'Health data analytics', 'HIPAA-compliant solutions'].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <CheckCircle size={18} className="text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-lg shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY3NTk4NDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Healthcare technology solutions"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            {/* E-commerce */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1 relative">
                <div className="overflow-hidden rounded-lg shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZXxlbnwxfHx8fDE3Njc1ODI1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="E-commerce shopping platform"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <ShoppingCart size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>E-commerce</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Scalable e-commerce platforms with secure payment integration, inventory management, and seamless user experiences designed to drive conversions and growth.
                </p>
                <ul className="space-y-3">
                  {['Custom online stores', 'Payment gateway integration', 'Inventory management', 'Mobile shopping apps'].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <CheckCircle size={18} className="text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>Education</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Engaging e-learning platforms and educational tools that enhance learning experiences, streamline administration, and support both students and educators.
                </p>
                <ul className="space-y-3">
                  {['Learning management systems', 'Student portals', 'Virtual classrooms', 'Educational mobile apps'].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <CheckCircle size={18} className="text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-lg shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1762330917056-e69b34329ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZyUyMG9ubGluZXxlbnwxfHx8fDE3Njc1MTc5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Online education and learning"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E293B] to-[#3B82F6] text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Looking to build or scale a digital product in your industry?
          </h2>
          <p className="text-xl text-gray-200 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Let's discuss how IndusJS can support your business goals.
          </p>
          <Link to="/contact#contact-form">
            <button 
              className="group relative px-8 py-4 bg-white text-[#1E293B] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {/* Button Background Gradient on Hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#1E293B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              {/* Button Text */}
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Talk to Our Experts
                <ArrowRight size={20} />
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* Why Industry Experience Matters Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why Industry Experience Matters
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              Working across industries enables us to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Understand business-specific challenges quickly',
                'Design solutions aligned with real user needs',
                'Apply proven practices across domains',
                'Deliver scalable and future-ready systems'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}