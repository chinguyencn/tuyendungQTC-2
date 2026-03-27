import { motion } from 'motion/react';
import { Calendar, Clock, Monitor, Map, AlertCircle } from 'lucide-react';

export default function TrainingSchedule() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-primary rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              THÔNG TIN <br />
              <span className="text-secondary">KHOÁ ĐÀO TẠO</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-secondary">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Khai giảng</p>
                  <p className="text-xl font-bold">02/04/2026</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-secondary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Thời gian</p>
                  <p className="text-xl font-bold">8h45 – 17h00</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-secondary">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Hình thức</p>
                  <p className="text-xl font-bold">Online qua Zoom</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-secondary">
                  <Map className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Thực địa</p>
                  <p className="text-xl font-bold">Chủ Nhật hàng tuần</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-slate-50 p-12 flex flex-col justify-center">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <AlertCircle className="w-8 h-8 text-secondary/20" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Lưu ý quan trọng</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Số lượng học viên mỗi khoá có hạn để đảm bảo chất lượng đào tạo tốt nhất. Chúng tôi ưu tiên các ứng viên đăng ký sớm.
              </p>
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl text-secondary font-bold">
                <span className="flex h-3 w-3 rounded-full bg-secondary animate-ping"></span>
                Chỉ còn 12 suất cuối cùng!
              </div>
              <a 
                href="#register"
                className="mt-8 block w-full bg-secondary text-white py-4 rounded-xl font-bold text-center shadow-lg shadow-orange-500/20 hover:opacity-90 transition-opacity"
              >
                GIỮ CHỖ NGAY
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
