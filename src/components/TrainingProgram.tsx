import { motion } from 'motion/react';
import { GraduationCap, MapPin, Search, MessageSquare, BookOpen } from 'lucide-react';

const steps = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Kiếm tiền từ BĐS từ con số 0",
    desc: "Nắm vững tư duy và kiến thức nền tảng về thị trường BĐS cao cấp."
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Tìm khách hàng không cần vốn",
    desc: "Kỹ thuật khai thác data, marketing 0 đồng hiệu quả nhất hiện nay."
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Kịch bản tư vấn & Chốt sale",
    desc: "Bộ kịch bản thực chiến giúp bạn tự tin đối thoại và thuyết phục khách hàng."
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Nắm rõ giỏ hàng Vinhomes",
    desc: "Cập nhật chi tiết các dự án đang mở bán và chính sách bán hàng mới nhất."
  }
];

export default function TrainingProgram() {
  return (
    <section id="training" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-secondary font-bold mb-4">
                <GraduationCap className="w-8 h-8" />
                <span className="uppercase tracking-widest">Chương trình đào tạo</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                SAU 2 BUỔI ĐÀO TẠO, <br />
                BẠN SẼ ĐẠT ĐƯỢC GÌ?
              </h2>
              
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-primary/5 rounded-2xl border-l-4 border-secondary">
                <p className="text-primary font-bold italic">
                  📌 Đặc biệt: Được đi thực tế dự án cùng chuyên gia để trải nghiệm thực tế sản phẩm.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Training Session" 
                className="rounded-3xl shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-secondary text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">100%</p>
                <p className="text-sm font-medium uppercase tracking-wider">Miễn phí đào tạo</p>
              </div>
            </motion.div>
            
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
