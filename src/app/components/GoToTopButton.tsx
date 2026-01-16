import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 group"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {/* Ripple Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#8B0000] to-[#DC143C] rounded-full"
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

          {/* Main Button */}
          <div className="relative bg-gradient-to-r from-[#8B0000] to-[#DC143C] text-white p-4 rounded-full shadow-2xl cursor-pointer">
            <ArrowUp className="w-6 h-6" />
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000] to-[#DC143C] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
