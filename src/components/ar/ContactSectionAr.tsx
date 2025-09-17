'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Calendar, Send, Star } from 'lucide-react'
import Image from 'next/image'

export function ContactSectionAr() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      primary: '02 5555 097',
      secondary: '+971 543 055 055',
      href: 'tel:+97125555097'
    },
    {
      icon: MapPin,
      title: 'الموقع',
      primary: '70 شارع الاتحاد',
      secondary: 'منطقة الربدان، أبوظبي، الإمارات',
      href: 'https://goo.gl/maps/ACcGFhZsE5gMBhVE9'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-dark-gray via-black to-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-4 h-4 mr-2" />
            احجز استشارتك
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            تواصل <span className="text-gold">معنا</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            جاهز لبدء رحلتك الجمالية؟ تواصل معنا اليوم لحجز استشارة مخصصة مع الدكتورة غادة مرسي.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-stretch">
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 rounded-3xl shadow-gold-lg p-8 border border-white/10 backdrop-blur-sm h-full">
              <h3 className="text-2xl font-serif font-bold text-white mb-8 text-right">
                معلومات التواصل
              </h3>

              <Image src="/max_care.webp" alt="Contact" width={500} height={500} />
            </div>
          </motion.div>

          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 rounded-3xl shadow-gold-lg p-8 border border-white/10 backdrop-blur-sm h-full">
              <h3 className="text-2xl font-serif font-bold text-white mb-8 text-right">
                طلب استشارة
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2 text-right">
                      الاسم الأول
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors duration-200"
                      placeholder="اسمك الأول"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2 text-right">
                      اسم العائلة
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors duration-200"
                      placeholder="اسم العائلة"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2 text-right">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors duration-200"
                    placeholder="+971 XX XXX XXXX"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>إرسال الرسالة</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-gold to-gold-dark rounded-2xl p-8 lg:p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex justify-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-white fill-current" />
            ))}
          </motion.div>

          <motion.h3
            className="text-3xl font-serif font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            اختبر التميز في طب التجميل
          </motion.h3>

          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            انضم إلى آلاف العملاء الراضين الذين وثقوا بالدكتورة غادة مرسي في رحلتهم الجمالية. احجز استشارتك اليوم واكتشف أفضل نسخة منك.
          </motion.p>

          <motion.a
            href="tel:+97125555097"
            className="inline-flex items-center space-x-2 bg-white text-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-6 h-6" />
            <span>اتصل الآن: 02 5555 097</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}


