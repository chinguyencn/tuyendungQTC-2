import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tại sao chọn QTC?', href: '#features' },
    { name: 'Đối tượng', href: '#audience' },
    { name: 'Đào tạo', href: '#training' },
    { name: 'Quyền lợi', href: '#benefits' },
    { name: 'Giỏ hàng', href: '#portfolio' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">Q</div>
          <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-primary' : 'text-white'}`}>
            QTC <span className="text-secondary">LAND</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="px-6 py-2.5 bg-secondary text-white rounded-full font-bold shadow-lg shadow-orange-500/20 hover:scale-105 transition-all"
          >
            ĐĂNG KÝ NGAY
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-primary' : 'text-white'} /> : <Menu className={isScrolled ? 'text-primary' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-slate-700 hover:text-secondary py-2 border-b border-slate-50"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 w-full bg-secondary text-white py-4 rounded-xl font-bold text-center shadow-lg"
          >
            ĐĂNG KÝ NGAY
          </a>
        </motion.div>
      )}
    </nav>
  );
}
