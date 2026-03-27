import { motion } from 'motion/react';
import { CheckCircle, Award, DollarSign, Zap, Shield } from 'lucide-react';

const benefits = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Hoa hồng cao",
    desc: "Thu nhập không giới hạn, tỷ lệ chiết khấu hấp dẫn nhất thị trường."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Thưởng nóng",
    desc: "Thưởng tiền mặt và quà tặng giá trị ngay sau mỗi giao dịch thành công."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Đào tạo miễn phí",
    desc: "100% chi phí đào tạo và đi thực địa dự án do QTC LAND tài trợ."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Hỗ trợ Marketing",
    desc: "Cung cấp data khách hàng tiềm năng, tài liệu bán hàng chuyên nghiệp."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Làm việc tự do",
    desc: "Không áp KPI doanh số, không gò bó thời gian, làm việc mọi lúc mọi nơi."
  }
];

import { Clock } from 'lucide-react';

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-secondary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                QUYỀN LỢI ĐẶC QUYỀN <br />
                <span className="text-secondary">KHI GIA NHẬP QTC LAND</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Chúng tôi không chỉ tuyển dụng, chúng tôi xây dựng sự nghiệp cùng bạn. Mọi công cụ và nguồn lực tốt nhất đều sẵn sàng để bạn thành công.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Nhận hoa hồng ngay sau khi khách ký HĐMB",
                  "Tham gia các sự kiện kick-off hoành tráng",
                  "Được vinh danh và thưởng quý/năm",
                  "Lộ trình thăng tiến rõ ràng lên Trưởng nhóm/Giám đốc"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-primary">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    {text}
                  </li>
                ))}
              </ul>

              <a 
                href="#register"
                className="inline-block px-10 py-4 bg-primary text-white rounded-xl font-bold shadow-xl hover:bg-primary/90 transition-all"
              >
                TÌM HIỂU THÊM
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
