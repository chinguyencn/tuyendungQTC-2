import { motion } from 'motion/react';
import { Rocket, TrendingUp, Users, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Thương hiệu Vinhomes",
    desc: "Sản phẩm từ thương hiệu BĐS số 1 Việt Nam, uy tín, pháp lý rõ ràng, cực kỳ dễ bán."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Hoa hồng hấp dẫn",
    desc: "Mức chiết khấu cao nhất thị trường, nhận nhanh chóng ngay sau khi hoàn tất giao dịch."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Hệ thống hỗ trợ 24/7",
    desc: "Đội ngũ chuyên gia đồng hành từ khâu tìm kiếm khách hàng đến khi chốt sale thành công."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Cơ hội cho người mới",
    desc: "Quy trình bài bản giúp người chưa biết gì cũng có thể ra giao dịch ngay trong tháng đầu."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              VÌ SAO BẠN NÊN THAM GIA NGAY?
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-slate-600">
              Chỉ cần bạn nghiêm túc – phần còn lại đã có đội ngũ QTC LAND hỗ trợ bạn từ A đến Z.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-secondary/30 transition-all group"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
