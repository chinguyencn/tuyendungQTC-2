import { motion } from 'motion/react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      {/* Zalo Floating Button */}
      <motion.a
        href="https://zalo.me/0785867676"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center gap-2 bg-[#0068ff] text-white p-3 rounded-full shadow-lg hover:bg-[#0056d2] transition-colors group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap px-0 group-hover:px-2 font-medium">
          Chat Zalo
        </span>
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Hotline Floating Button */}
      <motion.a
        href="tel:0785867676"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center gap-2 bg-secondary text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-colors group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap px-0 group-hover:px-2 font-medium">
          0785 867 676
        </span>
        <Phone className="w-6 h-6" />
      </motion.a>

      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={scrollToTop}
          className="bg-white text-primary p-3 rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-slate-200 flex gap-2">
        <a 
          href="#register" 
          className="flex-1 bg-secondary text-white py-3 rounded-xl font-bold text-center shadow-lg shadow-orange-500/20"
        >
          ĐĂNG KÝ NGAY
        </a>
        <a 
          href="https://zalo.me/0785867676" 
          className="bg-[#0068ff] text-white p-3 rounded-xl shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
