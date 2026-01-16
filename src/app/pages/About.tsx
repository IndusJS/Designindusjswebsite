import React from 'react';
import { CheckCircle, Target, Users, Shield, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const coreExpertise = [
    '15+ years of experience in mobile application development, delivering iOS and Android solutions across industries',
    '5+ years of experience in web application development, building scalable and secure platforms',
    '10+ years of project management experience, ensuring structured delivery, clear communication, and on-time execution'
  ];

  const valuePoints = [
    'Direct involvement of experienced professionals',
    'Faster decision-making and clear accountability',
    'Flexible engagement models tailored to project needs',
    'A strong focus on quality, not headcount'
  ];

  const approachSteps = [
    'Understanding business goals and user needs',
    'Defining clear requirements and delivery milestones',
    'Building scalable and maintainable solutions',
    'Communicating progress consistently',
    'Supporting clients beyond launch'
  ];

  const whyChooseUs = [
    'Experience-led delivery',
    'Senior guidance throughout the project lifecycle',
    'Transparent communication and predictable outcomes',
    'Scalable, future-ready solutions',
    'Long-term support mindset'
  ];

  const badges = [
    {
      icon: <Users size={32} />,
      title: 'Senior-Led Delivery',
      description: 'Projects guided by experienced developers and project managers'
    },
    {
      icon: <Target size={32} />,
      title: 'Agile & Transparent Process',
      description: 'Clear milestones, regular updates, predictable outcomes'
    },
    {
      icon: <Shield size={32} />,
      title: 'Scalable Architecture Focus',
      description: 'Solutions designed for long-term growth'
    },
    {
      icon: <Zap size={32} />,
      title: 'End-to-End Ownership',
      description: 'From idea to launch and ongoing support'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            About IndusJS
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            Building Digital Products with Experience and Clarity
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                IndusJS Infotech Pvt. Ltd. is a technology services company focused on delivering custom mobile and web application development solutions. We partner with businesses to design, build, and scale digital products that are reliable, secure, and aligned with real business goals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                While we are a growing organization, our strength lies in the experience behind our work.
              </p>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3Njc1NDk4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern office team collaboration"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg -z-10 blur-2xl transform translate-x-4 translate-y-4"></div>
            </motion.div>
          </div>
        </div>
      </section>
 {/* Why Clients Choose IndusJS */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-12 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Why Clients Choose IndusJS
          </h2>
          
          {/* Badges/Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {badges.map((badge, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:border-secondary hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center text-secondary mx-auto mb-4 shadow-sm">
                  {badge.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {badge.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {badge.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-primary italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
              At IndusJS, experience leads the way—so your digital products are built with confidence
            </p>
          </div>
        </div>
      </section>
      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Commitment
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            We believe in long-term partnerships built on trust, accountability, and consistent delivery. Every engagement is guided by the same principles—clarity in communication, quality in execution, and responsibility in delivery.
          </p>
        </div>
      </section>
      {/* Experience That Drives Execution */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1672385277648-85eddc237a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2NzU5MjE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Software development and coding"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-secondary/10 rounded-lg -z-10 blur-2xl transform -translate-x-4 translate-y-4"></div>
            </motion.div>

            {/* Right - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Experience That Drives Execution
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                IndusJS is led and supported by seasoned technology professionals who bring deep hands-on experience across mobile, web, and project delivery.
              </p>
              
              <h3 className="text-xl font-semibold text-primary mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our core expertise includes:
              </h3>
              
              <div className="space-y-4 mb-8">
                {coreExpertise.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                This experience enables us to guide projects with confidence, anticipate challenges early, and deliver solutions that are built to last.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Let's Build Something Great Together
            </h2>
            <p className="text-xl text-gray-200 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Partner with IndusJS to bring your vision to life with experienced professionals
            </p>
            <Link to="/contact#contact-form">
              <button 
                className="group relative px-8 py-4 bg-white text-primary font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
   
    </div>
  );
}