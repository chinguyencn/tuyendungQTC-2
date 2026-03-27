import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram } from 'lucide-react';

const locations = [
  { city: "Hà Nội", address: "SN 18 (C6-16TM3C) Đường 10 - Sunrise K, KĐT The Manor Central Park, P. Định Công" },
  { city: "TP.HCM", address: "Số 45 Đường T2, Khu C, VH Grand Park, Phường Long Bình & Số 24 - Đường số 2 - P5 - Q8" },
  { city: "Gia Lâm", address: "HA2-97 - Vinhomes OCP1 - Hà Nội" },
  { city: "Hưng Yên", address: "SH19.104 - Vinhomes OCP2 - Văn Giang" },
  { city: "Hải Phòng", address: "HP-348, Đường Hạnh Phúc, Vũ Yên" },
  { city: "Thanh Hóa", address: "NQ06-36 - Vinhomes Star City" },
  { city: "Quảng Ninh", address: "TC-23 - Vinhomes Golden Avenue – Móng Cái" },
  { city: "Long An", address: "G8, Đường 3/2 - Hậu Nghĩa - Tây Ninh" },
  { city: "Nha Trang", address: "Số 29 Thích Quảng Đức, KĐT Mới Phước Long, P. Nam Nha Trang" },
  { city: "Đà Nẵng", address: "Lô 33 B2, KĐT Golden Hills, Đường Nguyễn Tất Thành Nối Dài, Q. Liên Chiểu" }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">
              QTC <span className="text-secondary">LAND</span>
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Đơn vị phân phối chính thức Bất động sản Vinhomes toàn quốc. Chúng tôi kiến tạo cơ hội nghề nghiệp và sự thịnh vượng cho hàng ngàn Cộng tác viên trên khắp Việt Nam.
            </p>
            <div className="flex gap-4">
              {[Facebook, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-secondary" />
              HỆ THỐNG CHI NHÁNH TOÀN QUỐC
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {locations.map((loc, index) => (
                <div key={index} className="border-l border-white/10 pl-6">
                  <h4 className="font-bold text-secondary mb-1">{loc.city}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{loc.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest">Hotline 24/7</p>
                <p className="font-bold">0785 867 676</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary-light">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest">Email</p>
                <p className="font-bold">tuyendung@qtcland.vn</p>
              </div>
            </div>
          </div>
          
          <p className="text-white/30 text-sm">
            © 2026 QTC LAND. All rights reserved. Designed by International Expert.
          </p>
        </div>
      </div>
    </footer>
  );
}
