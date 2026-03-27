import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { useState } from 'react';

type FormData = {
  fullName: string;
  phone: string;
  area: string;
};

export default function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    const webhookUrl = 'https://us-central1-zenleads-ai.cloudfunctions.net/publicWebhook/L9HUiPduOz1d1LIgh0ci';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Lỗi máy chủ: ' + response.status);
      }

      const responseData = await response.json();

      if (responseData.redirectTo) {
        window.location.href = responseData.redirectTo;
      } else {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Lỗi khi gửi form:', error);
      alert('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-2/5 gradient-blue p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">ĐĂNG KÝ NGAY</h2>
              <p className="text-white/80 mb-8">
                Để lại thông tin, chuyên gia của QTC LAND sẽ liên hệ tư vấn lộ trình phù hợp nhất cho bạn.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-medium">Tư vấn miễn phí 100%</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-medium">Nhận tài liệu đào tạo ngay</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-medium">Hỗ trợ thực địa dự án</span>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5 p-12">
              {!isSubmitted ? (
                <form 
                  id="contact-form-landing-page"
                  onSubmit={handleSubmit(onSubmit)} 
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                      Họ và tên
                    </label>
                    <input
                      {...register("fullName", { required: true })}
                      name="fullName"
                      placeholder="Nguyễn Văn A"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                    {errors.fullName && <span className="text-red-500 text-xs mt-1">Vui lòng nhập họ tên</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                      Số điện thoại
                    </label>
                    <input
                      {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}
                      name="phone"
                      placeholder="0901 234 567"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                    {errors.phone && <span className="text-red-500 text-xs mt-1">Số điện thoại không hợp lệ</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                      Khu vực mong muốn
                    </label>
                    <select
                      {...register("area", { required: true })}
                      name="area"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                    >
                      <option value="">Chọn khu vực</option>
                      <option value="hcm">TP. Hồ Chí Minh</option>
                      <option value="hn">Hà Nội</option>
                      <option value="hp">Hải Phòng</option>
                      <option value="dn">Đà Nẵng</option>
                      <option value="other">Khu vực khác</option>
                    </select>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-white py-5 rounded-xl font-bold text-lg shadow-xl shadow-orange-500/30 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'ĐANG GỬI...' : 'GỬI ĐĂNG KÝ'} <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4">Đăng ký thành công!</h3>
                  <p className="text-slate-600 mb-8">
                    Cảm ơn bạn đã quan tâm. Chuyên viên tư vấn sẽ liên hệ với bạn trong vòng 24h tới.
                  </p>
                  <a
                    href="https://zalo.me/0785867676"
                    target="_blank"
                    className="inline-flex items-center gap-3 bg-[#0068ff] text-white px-8 py-4 rounded-xl font-bold shadow-lg"
                  >
                    📩 Gia nhập đội ngũ QTC LAND ngay
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
