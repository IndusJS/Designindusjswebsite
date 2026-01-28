import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
// import whatsappLogo from 'figma:asset/67340318c211b582307c08178e67ed57a75aa448.png';
const whatsappLogo = '';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = '919187424089'; // India: +91 9187424089
  const message = encodeURIComponent('Hello! I would like to discuss a project with IndusJS.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-24 left-8 z-50 group"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {/* Ripple Effect */}
          <motion.div
            className="absolute inset-0 bg-[#25D366] rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />

          {/* WhatsApp Logo */}
          <div className="relative">
            <img
              src={whatsappLogo}
              alt="WhatsApp"
              className="w-14 h-14 cursor-pointer"
            />
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}