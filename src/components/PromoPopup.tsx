import { motion, AnimatePresence } from 'motion/react';
import { X, Gift } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = sessionStorage.getItem('hasSeenPopup');
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenPopup', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Nhận tư vấn miễn phí!
              </h3>
              <p className="text-slate-600 mb-6">
                Đừng bỏ lỡ cơ hội trở thành CTV Vinhomes với mức hoa hồng hấp dẫn nhất thị trường.
              </p>
              <div className="space-y-3">
                <a
                  href="#register"
                  onClick={closePopup}
                  className="block w-full bg-secondary text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-500/30 hover:opacity-90 transition-opacity"
                >
                  ĐĂNG KÝ GIỮ CHỖ NGAY
                </a>
                <a
                  href="https://zalo.me/0785867676"
                  target="_blank"
                  className="block w-full border-2 border-primary text-primary py-4 rounded-xl font-bold hover:bg-primary/5 transition-colors"
                >
                  CHAT QUA ZALO
                </a>
              </div>
            </div>
            
            <div className="bg-primary/5 p-4 text-center text-xs text-slate-500">
              * Ưu tiên 50 suất đăng ký sớm nhất trong tháng này
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
