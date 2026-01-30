// import image_77294a69e4b97c6fe3c1ae666c2678ce94805108 from 'figma:asset/77294a69e4b97c6fe3c1ae666c2678ce94805108.png';
const image_77294a69e4b97c6fe3c1ae666c2678ce94805108 = './../assets/77294a69e4b97c6fe3c1ae666c2678ce94805108.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, ArrowRight } from 'lucide-react';
import logoImage from '../../assets/IndusJSLogo-transparent.png';

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/indusjs', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#8B0000] to-[#DC143C] text-white relative overflow-hidden">
      {/* Remove background pattern - keeping simple */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="IndusJS Logo" 
                className="h-[60px] w-auto brightness-0 invert"
              />
              { /*<h3 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>*/}
                { /*IndusJS              </h3>*/}
            </div>
            <p className="text-white/80 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Your Strategic Partner in App & Web Development
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white hover:shadow-lg flex items-center justify-center transition-all group backdrop-blur-sm"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-white group-hover:text-[#8B0000]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Services
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              {[
                'iOS App Development',
                'Android App Development',
                'Web Application Development',
                'Custom Software Solutions',
                'UI/UX Design',
                'Cloud Solutions'
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to="/services" className="text-white/80 hover:text-white flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Company
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Industries', path: '/industries' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={link.path} className="text-white/80 hover:text-white flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Get In Touch
            </h4>
            <div className="flex flex-col space-y-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              <motion.a 
                href="mailto:info@indusjs.com" 
                className="flex items-start gap-3 text-white/80 hover:text-white group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-white" />
                <div>
                  <p className="font-semibold text-white mb-1">Email</p>
                  <p>info@indusjs.com</p>
                </div>
              </motion.a>
              
              <motion.a 
                href="tel:+919187424089" 
                className="flex items-start gap-3 text-white/80 hover:text-white group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-white" />
                <div>
                  <p className="font-semibold text-white mb-1">Phone</p>
                  <p>+91 9187424089</p>
                </div>
              </motion.a>

              <motion.div 
                className="flex gap-3 text-gray-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Location</p>
                  <p>IndusJS Infotech Pvt. Ltd., Balaji Layout, Hongasandra, Bengaluru, Karnataka 560068</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-white/20 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              &copy; {new Date().getFullYear()} IndusJS Infotech Pvt. Ltd. | All rights reserved.
            </p>
            <div className="flex gap-6 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Link to="#" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer Section */}
        <motion.div 
          className="mt-8 pt-6 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-white/60 text-xs leading-relaxed text-left md:text-left" style={{ fontFamily: 'Inter, sans-serif', maxWidth: '100%' }}>
            <span className="font-semibold text-white/70">Disclaimer:</span> The free 1-page website offer is applicable only for eligible colleges and schools. The offer is subject to evaluation and basic requirements. Additional features, pages, hosting, and future enhancements will be charged separately. IndusJS reserves the right to approve or decline the offer.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}