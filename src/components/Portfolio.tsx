import { motion } from 'motion/react';
import { MapPin, Building2, Globe } from 'lucide-react';

const regions = [
  {
    city: "TP. Hồ Chí Minh",
    projects: ["Vinhomes Grand Park", "Vinhomes Cần Giờ", "Vinhomes Hóc Môn"],
    img: "https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    city: "Hà Nội & Hưng Yên",
    projects: ["Vinhomes Ocean Park 1, 2, 3", "Vinhomes Smart City", "Vinhomes The Harmony"],
    img: "https://images.unsplash.com/photo-1509030464150-1b9214abc077?q=80&w=2070&auto=format&fit=crop"
  },
  {
    city: "Hải Phòng - Quảng Ninh",
    projects: ["Vinhomes Royal Island", "Vinhomes Golden Avenue", "Vinhomes Dragon Bay"],
    img: "https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=2070&auto=format&fit=crop"
  },
  {
    city: "Đà Nẵng - Nha Trang",
    projects: ["Vinhomes Golden Hills", "Vinhomes Phước Long", "Vinpearl Condotel"],
    img: "https://images.unsplash.com/photo-1559592442-7e182c8c51c1?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 text-secondary font-bold mb-4">
              <Globe className="w-5 h-5" />
              <span className="uppercase tracking-widest">Nguồn hàng dồi dào</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 uppercase">
              GIỎ HÀNG VINHOMES TOÀN QUỐC
            </h2>
            <p className="text-lg text-slate-600">
              Nguồn hàng liên tục từ Bắc chí Nam – dễ dàng chọn sản phẩm phù hợp với tệp khách hàng của bạn.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl"
            >
              <img 
                src={region.img} 
                alt={region.city} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-bold uppercase text-xs tracking-wider">{region.city}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{region.city}</h3>
                <ul className="space-y-2">
                  {region.projects.map((p, i) => (
                    <li key={i} className="text-white/80 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 p-4 bg-white rounded-2xl shadow-lg border border-slate-100">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt="Avatar" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-slate-600 font-medium">
              Hơn <span className="text-primary font-bold">5,000+</span> CTV đang hoạt động hiệu quả
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
