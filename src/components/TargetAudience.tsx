import { motion } from 'motion/react';
import { Briefcase, GraduationCap, UserPlus, Clock } from 'lucide-react';

const audiences = [
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Người muốn kiếm thêm thu nhập",
    desc: "Tận dụng thời gian rảnh để gia tăng tài chính không giới hạn."
  },
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: "Sinh viên, nhân viên văn phòng",
    desc: "Xây dựng nghề tay trái vững chắc bên cạnh công việc chính."
  },
  {
    icon: <UserPlus className="w-10 h-10" />,
    title: "Người mới chưa có kinh nghiệm",
    desc: "Chúng tôi đào tạo bạn từ con số 0 đến khi thành thạo."
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Người muốn làm nghề lâu dài",
    desc: "Cơ hội thăng tiến lên các vị trí quản lý tại QTC LAND."
  }
];

import { TrendingUp } from 'lucide-react';

export default function TargetAudience() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                CƠ HỘI NÀY <br />
                <span className="text-secondary">DÀNH CHO AI?</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Bất kể bạn là ai, chỉ cần có khát khao thay đổi thu nhập và sự nghiêm túc, QTC LAND luôn chào đón bạn.
              </p>
              <div className="w-20 h-1 bg-secondary rounded-full"></div>
            </motion.div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {audiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/20 transition-all"
              >
                <div className="text-secondary mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
