import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Toggle this to true for testing without backend
  const MOCK_MODE = false;

  // Scroll to form if hash is present
  useEffect(() => {
    if (window.location.hash === '#contact-form') {
      setTimeout(() => {
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    // Mock mode for testing
    if (MOCK_MODE) {
      console.log('MOCK MODE: Form data:', formData);
      setTimeout(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
        setIsLoading(false);
        setTimeout(() => setSubmitted(false), 5000);
      }, 1500);
      return;
    }
    
    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('https://vocabulary-backend-production-da9d.up.railway.app/api/indusjs/consultations', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error response:', errorData);
        throw new Error(errorData.message || 'Failed to submit form. Please try again.');
      }

      const responseData = await response.json().catch(() => ({}));
      console.log('Success response:', responseData);

      // Success
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      
      if (err instanceof TypeError && err.message === 'Failed to fetch') {
        setError('⚠️ CORS Error: Your backend needs to allow cross-origin requests. Please add CORS headers to your API.');
        console.error('🔴 CORS ERROR DETECTED! Your backend at Railway needs CORS configuration.');
        console.error('Add this to your backend code:');
        console.error('const cors = require("cors");');
        console.error('app.use(cors());');
      } else {
        setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const contactInfo = [
    {
      icon: <Mail size={28} />,
      title: 'Email Us',
      details: ['info@indusjs.com'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone size={28} />,
      title: 'Call Us',
      details: ['+91 9187424089'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MapPin size={28} />,
      title: 'Visit Us',
      details: ['IndusJS Infotech Pvt. Ltd., Balaji Layout, Hongasandra, Bengaluru, Karnataka 560068'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const quickStats = [
    { icon: <Clock size={24} />, label: 'Response Time', value: '< 24 hours' },
    { icon: <MessageSquare size={24} />, label: 'Consultation', value: 'Free' },
    { icon: <CheckCircle size={24} />, label: 'Success Rate', value: '98%' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#1E293B] text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#8B0000] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#DC143C] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                Get In Touch
              </span>
            </motion.div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight lg:leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Let's Build Something Amazing Together
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Share your vision with us and we'll turn it into a powerful digital solution
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-[#DC143C]">{stat.icon}</div>
                <div className="text-left">
                  <p className="text-sm text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>{stat.label}</p>
                  <p className="font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section id="contact-form" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <ScrollReveal>
              <motion.div
                className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                      className="w-20 h-20 bg-gradient-to-br from-[#8B0000] to-[#DC143C] rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle size={40} className="text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#1E293B] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Thank You!
                    </h3>
                    <p className="text-gray-600 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                      We've received your message and will get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[#1E293B] font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Name *
                      </label>
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8B0000] transition-all duration-300"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>

                    <div>
                      <label className="block text-[#1E293B] font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Email *
                      </label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8B0000] transition-all duration-300"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[#1E293B] font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Company
                        </label>
                        <motion.input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8B0000] transition-all duration-300"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>

                      <div>
                        <label className="block text-[#1E293B] font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Phone
                        </label>
                        <motion.input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8B0000] transition-all duration-300"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#1E293B] font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Message *
                      </label>
                      <motion.textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={6}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8B0000] transition-all duration-300 resize-none"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>

                    {isLoading ? (
                      <Button type="button" variant="primary" className="w-full" size="lg" disabled>
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 size={20} className="animate-spin" />
                          Sending...
                        </span>
                      </Button>
                    ) : (
                      <Button type="submit" variant="primary" className="w-full" size="lg">
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                          <Send size={20} />
                        </span>
                      </Button>
                    )}

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 text-sm text-red-500"
                      >
                        <AlertCircle size={16} className="inline-block mr-2" />
                        {error}
                      </motion.div>
                    )}
                  </form>
                )}
              </motion.div>
            </ScrollReveal>

            {/* Contact Information Cards */}
            <div className="space-y-6">
              <ScrollReveal delay={0.2}>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Get In Touch
                </h2>
              </ScrollReveal>

              {contactInfo.map((info, index) => (
                <ScrollReveal key={index} delay={0.3 + index * 0.1}>
                  <motion.div
                    className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#8B0000]/20 transition-all duration-500"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-6">
                      <motion.div
                        className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {info.icon}
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#1E293B] mb-3 group-hover:text-[#8B0000] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {info.title}
                        </h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}

              {/* Additional Info Card */}
              <ScrollReveal delay={0.6}>
                <motion.div
                  className="bg-gradient-to-br from-[#8B0000] to-[#DC143C] rounded-2xl p-8 text-white shadow-xl"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {[
                      'Free consultation call',
                      'Quick response time',
                      'Transparent pricing',
                      'Experienced team',
                      'Long-term support'
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle size={20} className="flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
              <iframe
                src="https://maps.google.com/maps?q=Prabhavathi%20Meghana%20Towers,%20Prabhavathi%20Towers,%204th%20Main%20Rd,%20Maruthi%20Layout,%20Hongasandra,%20Bengaluru,%20Karnataka%20560068&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IndusJS Office Location - Prabhavathi Meghana Towers, Hongasandra, Bengaluru"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}