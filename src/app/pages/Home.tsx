import image_4b9722986b42abf4ca27149466c41a82df33eb86 from 'figma:asset/4b9722986b42abf4ca27149466c41a82df33eb86.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceTabs } from '../components/ServiceTabs';
import { IndustryCard } from '../components/IndustryCard';
import { PortfolioCard } from '../components/PortfolioCard';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ScrollReveal } from '../components/ScrollReveal';
import { ParallaxSection } from '../components/ParallaxSection';
import { SEO } from '../components/SEO';
import { OrganizationStructuredData } from '../components/StructuredData';
import { 
  Smartphone, 
  Monitor, 
  Globe, 
  CheckCircle, 
  Users, 
  Target,
  Zap,
  Heart,
  ShoppingCart,
  GraduationCap,
  Building,
  TrendingUp,
  Server,
  Wrench,
  DollarSign,
  Briefcase,
  Rocket
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import heroBannerImage from 'figma:asset/f0001c118b1c4fa6345a8e50f46445cd3d2deae6.png';

export function Home() {
  const detailedServices = [
    {
      icon: <Smartphone size={32} />,
      title: 'iOS App Development',
      description: 'We design and develop high-quality iOS applications that are reliable, scalable, and aligned with real business needs. Our focus is on building apps that not only look good, but also perform consistently and support long-term growth.',
      imageUrl: 'https://images.unsplash.com/photo-1760360059351-11e70b0025e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpT1MlMjBtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjczNzY2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: [
        {
          title: 'Native iOS Excellence',
          description: 'Build powerful native apps using Swift with smooth performance and refined user experience tailored for Apple ecosystem.'
        },
        {
          title: 'Cross-Platform Ready',
          description: 'Deploy on iOS using Flutter and React Native for faster development without compromising quality or user experience.'
        },
        {
          title: 'Scalable Architecture',
          description: 'Clean, maintainable code built for long-term growth, ensuring your app scales seamlessly as your business expands.'
        },
        {
          title: 'Secure Integrations',
          description: 'Robust API connectivity and backend integrations with industry-standard security protocols and data protection.'
        },
        {
          title: 'App Store Success',
          description: 'Full deployment support and compliance guidance to ensure smooth Apple App Store approval and launch.'
        }
      ],
      whatWeBuild: 'We create native and cross-platform iOS applications that deliver smooth performance and a refined user experience. From early-stage ideas to full-scale production apps, we handle the complete development lifecycle—planning, design, development, testing, and launch.',
      whoItsFor: [
        'Startups building MVPs or launching new digital products',
        'SMEs modernizing processes or engaging customers through mobile apps',
        'Enterprises developing secure, scalable applications for internal or external use'
      ],
      typicalUseCases: [
        'Customer-facing mobile applications',
        'Business and productivity apps',
        'MVPs and proof-of-concept builds',
        'Subscription-based and SaaS mobile apps',
        'Apps integrated with existing web or backend systems'
      ],
      platforms: [
        'Native iOS development using Swift',
        'Cross-platform development using Flutter and React Native',
        'Secure API integrations and backend connectivity',
        'Apple App Store deployment and compliance support'
      ],
      howWeAddValue: [
        'Clean and maintainable code for long-term stability',
        'Strong focus on usability and performance',
        'Transparent communication throughout the project',
        'On-time delivery with post-launch support'
      ]
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Android App Development',
      description: 'We build reliable and scalable Android applications designed to perform seamlessly across devices and user scenarios. Our approach focuses on usability, performance, and long-term maintainability—ensuring your app supports both current needs and future growth.',
      imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmRyb2lkJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzY3Mzc2NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: [
        {
          title: 'Native Android Power',
          description: 'Leverage Kotlin and Java to build high-performance native Android apps optimized for the diverse Android ecosystem.'
        },
        {
          title: 'Multi-Device Compatibility',
          description: 'Consistent performance across all Android devices, from smartphones to tablets, with responsive and adaptive design.'
        },
        {
          title: 'Modern Frameworks',
          description: 'Build once, deploy everywhere with Flutter and React Native for faster time-to-market and reduced development costs.'
        },
        {
          title: 'Third-Party Integration',
          description: 'Seamless integration with Google services, payment gateways, analytics, and other essential third-party APIs.'
        },
        {
          title: 'Play Store Ready',
          description: 'Complete Google Play Store publishing support with compliance checks and optimization for maximum visibility.'
        }
      ],
      whatWeBuild: 'We develop native and cross-platform Android applications, covering the entire lifecycle from concept and design to development, testing, and deployment on the Google Play Store.',
      whoItsFor: [
        'Startups launching Android-first or MVP applications',
        'SMEs expanding customer reach through mobile platforms',
        'Enterprises building secure and scalable Android solutions'
      ],
      typicalUseCases: [
        'Consumer-facing Android apps',
        'Business and internal productivity apps',
        'E-commerce and service-based apps',
        'MVPs and pilot applications',
        'Apps integrated with web platforms and backend systems'
      ],
      platforms: [
        'Native Android development using Kotlin and Java',
        'Cross-platform development using Flutter and React Native',
        'API integrations and third-party services',
        'Google Play Store publishing and compliance support'
      ],
      howWeAddValue: [
        'Consistent performance across devices',
        'User-friendly interfaces and smooth workflows',
        'Transparent project communication',
        'Reliable post-launch support'
      ]
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Application Development',
      description: 'We develop secure and scalable web applications that help businesses streamline operations, engage users, and grow efficiently. Our web solutions are built with a focus on performance, security, and ease of use.',
      imageUrl: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjcyOTAzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: [
        {
          title: 'Modern React Development',
          description: 'Build dynamic, responsive web applications using React and cutting-edge frontend frameworks for superior user experience.'
        },
        {
          title: 'Full-Stack Solutions',
          description: 'End-to-end web development from beautiful interfaces to robust backend systems, databases, and cloud deployment.'
        },
        {
          title: 'Business Workflow Optimization',
          description: 'Custom dashboards, portals, and SaaS platforms tailored to your unique business processes and requirements.'
        },
        {
          title: 'Enterprise-Grade Security',
          description: 'Advanced security measures, data encryption, and compliance standards to protect your business and user data.'
        },
        {
          title: 'Cloud-Ready Infrastructure',
          description: 'Scalable cloud deployment with automatic scaling, load balancing, and high availability for growing user bases.'
        }
      ],
      whatWeBuild: 'Custom web applications tailored to business workflows, including dashboards, portals, and SaaS platforms. We handle everything from frontend interfaces to backend integration.',
      whoItsFor: [
        'Startups building MVPs and digital platforms',
        'SMEs digitizing processes and customer interactions',
        'Enterprises requiring robust, custom web systems'
      ],
      typicalUseCases: [
        'Business dashboards and admin panels',
        'Customer and partner portals',
        'SaaS platforms and subscription-based systems',
        'Data-driven web applications'
      ],
      platforms: [
        'Frontend development using React and modern frameworks',
        'Backend-powered web applications',
        'Secure database and API integrations',
        'Cloud-ready deployment'
      ],
      howWeAddValue: [
        'Scalable architecture for growing user bases',
        'Clean and intuitive user interfaces',
        'Secure and performance-optimized builds',
        'Long-term support and enhancements'
      ]
    },
    {
      icon: <Server size={32} />,
      title: 'Backend & API Development',
      description: 'We build robust backend systems that serve as the foundation of reliable digital products. Our backend and API solutions ensure smooth data flow, secure integrations, and scalable performance.',
      imageUrl: 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUEklMjBiYWNrZW5kJTIwc2VydmVyfGVufDF8fHx8MTc2NzM3NjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: [
        {
          title: 'Scalable Backend Systems',
          description: 'Build powerful server-side applications using Node.js, Laravel, and Firebase for high-performance data handling.'
        },
        {
          title: 'RESTful API Design',
          description: 'Well-structured, documented APIs that enable seamless communication between mobile, web, and third-party platforms.'
        },
        {
          title: 'Database Architecture',
          description: 'Optimized database design and management for efficient data storage, retrieval, and real-time processing.'
        },
        {
          title: 'Secure Authentication',
          description: 'Industry-standard user authentication, authorization, and session management with JWT, OAuth, and multi-factor authentication.'
        },
        {
          title: 'Cloud Integration',
          description: 'Leverage AWS, Google Cloud, and Azure for scalable, reliable, and cost-effective backend infrastructure.'
        }
      ],
      whatWeBuild: 'Custom backend systems and APIs that power mobile and web applications, handling business logic, data management, and integrations.',
      whoItsFor: [
        'Businesses building mobile or web applications',
        'Product companies requiring scalable backend systems',
        'Enterprises integrating multiple platforms and services'
      ],
      typicalUseCases: [
        'API-driven mobile and web applications',
        'Third-party integrations',
        'Data management and processing systems',
        'Authentication and user management systems'
      ],
      platforms: [
        'Backend development using Node.js, Laravel, and Firebase',
        'RESTful API development',
        'Secure database integration',
        'Cloud-based backend solutions'
      ],
      howWeAddValue: [
        'Secure and scalable system design',
        'High-performance data handling',
        'Easy integration with existing platforms',
        'Future-ready architecture'
      ]
    },
    {
      icon: <Wrench size={32} />,
      title: 'Support & Maintenance',
      description: 'We provide ongoing support and maintenance to ensure your applications remain secure, stable, and up to date. Our goal is to keep your systems running smoothly while you focus on your business.',
      imageUrl: 'https://images.unsplash.com/photo-1762340915398-000c216e7cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMG1haW50ZW5hbmNlJTIwc3VwcG9ydHxlbnwxfHx8fDE3NjczNzY2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: [
        {
          title: 'Proactive Monitoring',
          description: 'Real-time application monitoring and performance tracking to identify and resolve issues before they impact users.'
        },
        {
          title: 'Rapid Issue Resolution',
          description: 'Quick response times for bug fixes, troubleshooting, and critical issues to minimize downtime and disruption.'
        },
        {
          title: 'Performance Optimization',
          description: 'Continuous performance analysis and improvements to ensure your app runs faster and more efficiently over time.'
        },
        {
          title: 'Feature Enhancements',
          description: 'Regular updates and new feature development to keep your application competitive and aligned with user needs.'
        },
        {
          title: 'Platform Updates',
          description: 'Stay current with OS updates, security patches, and compatibility improvements across iOS, Android, and web platforms.'
        }
      ],
      whatWeBuild: 'End-to-end application support, including monitoring, updates, and performance improvements after launch.',
      whoItsFor: [
        'Businesses with live mobile or web applications',
        'Product teams requiring continuous improvements',
        'Organizations needing reliable technical support'
      ],
      typicalUseCases: [
        'Bug fixes and issue resolution',
        'Performance optimization',
        'Feature enhancements',
        'Version upgrades and compatibility updates'
      ],
      platforms: [
        'iOS, Android, and Web platform support',
        'Backend system maintenance',
        'Database and API monitoring',
        'Cloud infrastructure management'
      ],
      howWeAddValue: [
        'Proactive monitoring and timely support',
        'Faster issue resolution',
        'Improved application performance',
        'Long-term reliability and stability'
      ]
    }
  ];

  const services = [
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile App Development (iOS & Android)',
      description: 'High-performance mobile apps built for scale and usability.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Application Development',
      description: 'Secure, scalable web platforms aligned to business workflows.'
    },
    {
      icon: <Server size={32} />,
      title: 'Backend & API Development',
      description: 'Robust backend systems and integrations powering your applications.'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Maintenance & Support',
      description: 'Ongoing support, performance optimization, and enhancements.'
    }
  ];

  const industries = [
    { 
      icon: <GraduationCap size={20} />, 
      title: 'EdTech',
      description: 'Learning platforms, student portals, assessment systems'
    },
    { 
      icon: <DollarSign size={20} />, 
      title: 'FinTech',
      description: 'Secure financial applications, dashboards, integrations'
    },
    { 
      icon: <Heart size={20} />, 
      title: 'Healthcare',
      description: 'Patient apps, admin systems, data-driven platforms'
    },
    { 
      icon: <ShoppingCart size={20} />, 
      title: 'E-commerce',
      description: 'Scalable storefronts, order & inventory systems'
    },
    { 
      icon: <Briefcase size={20} />, 
      title: 'Enterprise Solutions',
      description: 'Internal tools, automation, custom platforms'
    },
    { 
      icon: <Rocket size={20} />, 
      title: 'SaaS & Startups',
      description: 'MVPs, scalable products, rapid iterations'
    }
  ];

  const portfolioItems = [
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
      ]
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
      ]
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
      ]
    }
  ];

  const testimonials = [
    {
      text: "IndusJS transformed our vision into a stunning mobile app. Their expertise and professionalism exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CEO, HealthTech Solutions"
    },
    {
      text: "The team at IndusJS delivered our e-commerce platform on time and within budget. Highly recommended!",
      author: "Michael Chen",
      position: "Founder, ShopEase"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="IndusJS - Custom Mobile & Web Application Development Services"
        description="IndusJS delivers expert iOS app development, Android app development, and web application development services. Partner with our experienced team to build scalable, secure digital solutions for your business."
        keywords="mobile app development, iOS development, Android development, web application development, custom software development, app development company, digital solutions, React Native, technology services, startups, SMEs, enterprise apps"
        url="https://indusjs.com"
      />
      <OrganizationStructuredData />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-7 lg:py-11 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Transform Your Ideas Into Powerful Digital Solutions
              </h1>
              <p className="text-xl text-gray-200 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                We specialize in creating exceptional mobile and web applications that drive business growth for startups and growing businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact#contact-form">
                  <Button variant="secondary">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-primary">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <img
                  src={image_4b9722986b42abf4ca27149466c41a82df33eb86}
                  alt="Technology Innovation - Digital Transformation"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>
              
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#DC143C] to-[#8B0000] rounded-lg blur-3xl opacity-30 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Strategic Partner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Your Strategic Partner
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              At IndusJS, we don't just build applications—we create digital experiences that resonate with your users and drive measurable results. Our team combines technical excellence with strategic thinking to deliver solutions that matter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <CheckCircle size={24} />, text: 'Proven Track Record' },
              { icon: <Users size={24} />, text: 'Expert Team' },
              { icon: <Target size={24} />, text: 'Goal-Oriented Approach' },
              { icon: <Zap size={24} />, text: 'Rapid Deployment' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-secondary">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-primary" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Modern IT Services Delivering Better Tech Experiences
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Comprehensive development solutions tailored to your business needs
            </p>
          </div>
          <ServiceTabs services={detailedServices} />
        </div>
      </section>

      {/* First CTA Section - Before Industries */}
      <section className="py-20 bg-gradient-to-br from-[#3B82F6] to-[#1E293B] text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Let's Turn Your Vision Into Reality
          </h2>
          <p className="text-xl text-gray-200 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Schedule a free consultation to discuss your project requirements
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
                Contact Us
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              We work across industries where technology plays a critical role in growth and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Explore our latest work and success stories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard 
                key={index} 
                title={item.title}
                category={item.category}
                imageUrl={item.imageUrl}
                description=""
                platform={item.platform}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="secondary">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why IndusJS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why Choose IndusJS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              'Agile methodology with complete transparency at every stage',
              'Scalable, secure, and maintainable solutions built for growth',
              'Senior developers dedicated to your project success',
              'On-time delivery without compromising quality',
              'Long-term partnership and support beyond launch',
              'Customer-centric approach focused on your business goals'
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
      </section>

      {/* Second CTA Section - Before Testimonials */}
      <section className="py-20 bg-gradient-to-r from-[#1E293B] to-[#3B82F6] text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-200 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Let's discuss your project and bring your vision to life
          </p>
          <Link to="/contact">
            <button 
              className="group relative px-8 py-4 bg-white text-[#1E293B] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {/* Button Background Gradient on Hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#1E293B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              {/* Button Text */}
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Consult our Experts
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-6 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}