import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1582408921715-18e7806367c1?q=80&w=2070&auto=format&fit=crop" 
          alt="Vinhomes Grand Park" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary text-white text-sm font-bold rounded-full mb-6 tracking-wider uppercase">
              QTC LAND - Tuyển dụng 2026
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              TUYỂN DỤNG CTV KINH DOANH <br />
              <span className="text-secondary">BĐS VINHOMES</span> TOÀN QUỐC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium leading-relaxed">
              Dành cho người đang muốn kiếm thêm thu nhập nhưng chưa biết bắt đầu từ đâu. 
              <span className="text-secondary font-bold"> Ngay cả khi bạn chưa có bất kỳ kinh nghiệm nào.</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Không cần kinh nghiệm",
                "Đào tạo miễn phí từ A-Z",
                "Chuyên gia hỗ trợ chốt sale",
                "Làm việc linh hoạt thời gian"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-secondary text-white rounded-xl font-bold text-lg shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2"
              >
                ĐĂNG KÝ NGAY <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#training"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center"
              >
                LỘ TRÌNH ĐÀO TẠO
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 hidden lg:block">
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative h-full"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]"></div>
        </motion.div>
      </div>
    </section>
  );
}
