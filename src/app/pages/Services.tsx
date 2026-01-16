import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  Smartphone, 
  Monitor, 
  Globe, 
  Palette, 
  Server, 
  Wrench,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Users,
  Target
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Smartphone size={40} />,
      title: 'iOS App Development',
      description: 'We create reliable and performance-driven iOS applications that align with Apple\'s design and usability standards.',
      whatWeDo: 'Native and cross-platform iOS apps built for stability, performance, and long-term scalability.',
      idealFor: [
        'Startups launching new iOS products',
        'Businesses targeting premium mobile users',
        'Enterprises building secure iOS solutions'
      ],
      platforms: 'iOS',
      technologies: 'Swift, SwiftUI, UIKit, React Native'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Android App Development',
      description: 'Our Android applications are built to perform consistently across devices and user environments.',
      whatWeDo: 'Custom Android app development with a focus on usability, performance, and scalability.',
      idealFor: [
        'Android-first businesses',
        'Consumer and enterprise Android applications',
        'Businesses expanding mobile reach'
      ],
      platforms: 'Android',
      technologies: 'Kotlin, Java, Jetpack Compose, Flutter'
    },
    {
      icon: <Globe size={40} />,
      title: 'Web Application Development',
      description: 'We develop secure, scalable web applications that help businesses operate efficiently and serve users effectively.',
      whatWeDo: 'Custom web platforms including dashboards, portals, and SaaS applications tailored to business workflows.',
      benefits: [
        'Centralize operations and data',
        'Improve user experience',
        'Scale seamlessly as your business grows'
      ],
      useCases: [
        'Business dashboards and admin panels',
        'Customer and partner portals',
        'SaaS and subscription platforms'
      ],
      technologies: 'React, Node.js, modern frameworks, backend integrations'
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'We design intuitive user experiences that make digital products easy to use and engaging.',
      whatWeDo: 'User-centered UI/UX design focused on usability, clarity, and consistency across platforms.',
      benefits: [
        'Better user adoption',
        'Improved engagement',
        'Reduced learning curve'
      ],
      deliverables: [
        'Wireframes and prototypes',
        'Visual design systems',
        'App and web interfaces'
      ]
    },
    {
      icon: <Server size={40} />,
      title: 'Backend & API Development',
      description: 'We build robust backend systems that power reliable mobile and web applications.',
      whatWeDo: 'Custom backend development and API integration to handle data, business logic, and system communication.',
      benefits: [
        'Secure and scalable data handling',
        'Seamless integrations',
        'Reliable application performance'
      ],
      useCases: [
        'API-driven applications',
        'Third-party integrations',
        'Authentication and data management'
      ],
      technologies: 'Node.js, Laravel, Firebase, REST APIs'
    },
    {
      icon: <Wrench size={40} />,
      title: 'Support & Maintenance',
      description: 'We ensure your applications remain stable, secure, and up to date after launch.',
      whatWeDo: 'Ongoing monitoring, updates, enhancements, and issue resolution to keep your systems running smoothly.',
      benefits: [
        'Reduced downtime',
        'Improved performance',
        'Long-term reliability'
      ],
      supportIncludes: [
        'Bug fixes and optimizations',
        'Feature enhancements',
        'Version and compatibility updates'
      ]
    }
  ];

  const engagementProcess = [
    {
      number: '01',
      title: 'Requirement Understanding & Consultation',
      description: 'We start by understanding your business goals, user needs, and technical requirements.'
    },
    {
      number: '02',
      title: 'UI/UX and Technical Planning',
      description: 'Strategic planning of user experience, system architecture, and development roadmap.'
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing, feedback loops, and quality assurance.'
    },
    {
      number: '04',
      title: 'Launch & Ongoing Support',
      description: 'Smooth deployment, launch support, and continuous maintenance for long-term success.'
    }
  ];

  const whyChoose = [
    {
      icon: <Target size={24} />,
      title: 'Business-focused development approach',
      description: 'We align technical solutions with your business objectives'
    },
    {
      icon: <Users size={24} />,
      title: 'Transparent communication',
      description: 'Clear updates and collaborative approach throughout the project'
    },
    {
      icon: <Shield size={24} />,
      title: 'Scalable and secure solutions',
      description: 'Built for growth with enterprise-grade security standards'
    },
    {
      icon: <Zap size={24} />,
      title: 'On-time delivery mindset',
      description: 'Committed to meeting deadlines without compromising quality'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Long-term partnership focus',
      description: 'Supporting your success beyond project completion'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Custom Software Development Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            We help businesses design, build, and scale digital products through reliable mobile and web development services. Our solutions are built to support real business goals, user needs, and long-term growth.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#11E293B] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                Comprehensive development solutions tailored to your business needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-[rgba(255,255,255,0)] border-2 border-gray-100 hover:border-[#8B0000]/20 p-8 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-lg bg-[#8B0000] flex items-center justify-center text-white mb-6">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {service.description}
                  </p>

                  {/* What We Do */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#1E293B] mb-2 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <CheckCircle className="text-[#8B0000]" size={18} />
                      What We Do
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {service.whatWeDo}
                    </p>
                  </div>

                  {/* Benefits/Ideal For */}
                  {service.benefits && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#1E293B] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        How It Helps You
                      </h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <ArrowRight className="text-[#8B0000] flex-shrink-0 mt-0.5" size={14} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.idealFor && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#1E293B] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Ideal For
                      </h4>
                      <ul className="space-y-1">
                        {service.idealFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <ArrowRight className="text-[#8B0000] flex-shrink-0 mt-0.5" size={14} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.deliverables && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#1E293B] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Deliverables
                      </h4>
                      <ul className="space-y-1">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <ArrowRight className="text-[#8B0000] flex-shrink-0 mt-0.5" size={14} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.supportIncludes && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#1E293B] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Support Includes
                      </h4>
                      <ul className="space-y-1">
                        {service.supportIncludes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <ArrowRight className="text-[#8B0000] flex-shrink-0 mt-0.5" size={14} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Use Cases */}
                  {service.useCases && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#1E293B] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Use Cases
                      </h4>
                      <ul className="space-y-1">
                        {service.useCases.map((useCase, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <ArrowRight className="text-[#8B0000] flex-shrink-0 mt-0.5" size={14} />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    {service.platforms && (
                      <div className="mb-2">
                        <span className="font-semibold text-[#1E293B] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Platforms:{' '}
                        </span>
                        <span className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {service.platforms}
                        </span>
                      </div>
                    )}
                    
                    {service.technologies && (
                      <div>
                        <span className="font-semibold text-[#1E293B] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Technologies:{' '}
                        </span>
                        <span className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {service.technologies}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Ready to Start */}
      <section className="py-16 bg-gradient-to-r from-[#1E293B] to-[#3B82F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Tell us what you're building, and we'll take it forward from here.
            </p>
            <Link to="/contact#contact-form">
              <Button 
                size="lg" 
                className="bg-white text-[#1E293B] hover:bg-gray-100 hover:shadow-xl"
              >
                Talk to Our Experts
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* How We Engage Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1E293B] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                How We Engage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                Our delivery model is simple and transparent
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementProcess.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="relative h-full">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#8B0000]/20 transition-all duration-500 hover:shadow-2xl h-full flex flex-col">
                    {/* Number Badge */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#8B0000] to-[#DC143C] text-white flex items-center justify-center font-bold text-2xl shadow-xl flex-shrink-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {step.number}
                    </div>

                    <div className="pt-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-[#1E293B] mb-3 min-h-[56px] flex items-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose IndusJS Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#FEF2F2] via-[#FFF5F5] to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#8B0000]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#DC143C]/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-[#8B0000]/10 text-[#8B0000] rounded-full text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Our Commitment
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#8B0000] to-[#DC143C] bg-clip-text text-transparent mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Why Choose IndusJS
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                We're committed to your success with a client-first approach
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="h-full">
                  <div className="group bg-white rounded-2xl p-8 border-2 border-[#8B0000]/10 hover:border-[#8B0000]/30 transition-all duration-500 shadow-md hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8B0000] to-[#DC143C] flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow flex-shrink-0">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-bold text-[#1E293B] mb-3 group-hover:text-[#8B0000] transition-colors min-h-[64px] flex items-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}