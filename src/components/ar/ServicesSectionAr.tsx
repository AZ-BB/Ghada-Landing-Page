'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, Heart, Scissors, Droplet, Sun, Hand, Stethoscope } from 'lucide-react'

export function ServicesSectionAr() {
  const services = [
    {
      icon: Zap,
      title: 'إزالة الشعر بالليزر',
      description: 'تقنية ليزر متقدمة لإزالة الشعر بشكل دائم للوجه والجسم.',
      treatments: ['الوجه', 'مناطق الجسم', 'كل أنواع البشرة'],
      color: 'from-[70%] from-gold to-gold-dark'
    },
    {
      icon: Sparkles,
      title: 'علاجات الوجه',
      description: 'إجراءات شاملة لتجديد البشرة وتعزيز نضارتها.',
      treatments: ['التقشير الكيميائي', 'علاجات مكافحة الشيخوخة', 'تفتيح البشرة'],
      color: 'from-[70%] from-gold to-gold-dark'
    },
    {
      icon: Droplet,
      title: 'البوتوكس (Dysport)',
      description: 'تقليل التجاعيد ونحت الملامح بفعالية عالية.',
      treatments: ['التجاعيد والخطوط الرفيعة', 'أشرطة الرقبة', 'فرط التعرق'],
      color: 'from-[70%] from-gold to-gold-dark'
    },
    {
      icon: Heart,
      title: 'الفيلر',
      description: 'تعزيز ملامح الوجه واستعادة الحجم بمظهر طبيعي.',
      treatments: ['فيلر الشفاه', 'تعزيز الخدود', 'علاج تحت العين'],
      color: 'from-[70%] from-gold to-gold-dark'
    },
    {
      icon: Sun,
      title: 'علاجات البشرة',
      description: 'إجراءات متقدمة لتجديد البشرة وتعزيز الكولاجين.',
      treatments: ['العلاج بالبلازما PRP', 'الميزوثيرابي', 'الوخز المجهري مع التردد الراديوي'],
      color: 'from-[70%] from-gold to-gold-dark'
    },
    {
      icon: Scissors,
      title: 'علاجات الشعر',
      description: 'علاجات متخصصة لتساقط الشعر وتجديد فروة الرأس.',
      treatments: ['PRP للشعر', 'الميزوثيرابي', 'علاجات فروة الرأس'],
      color: 'from-[70%] from-gold to-gold-dark'
    },
    {
      icon: Hand,
      title: 'علاجات الجسم',
      description: 'إجراءات شاملة لنحت الجسم وتحسين البشرة.',
      treatments: ['إذابة الدهون', 'تجديد اليدين', 'تقشير الجسم'],
      color: 'from-[70%] from-gold to-gold-dark'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-dark-gray via-black to-dark-gray">
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
            <Sparkles className="w-4 h-4 mr-2" />
            خدمات تجميلية مميزة
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            حلول <span className="text-gold">تجميلية متكاملة</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            اختبر أحدث ما تقدمه طب التجميل من خلال مجموعة واسعة من العلاجات المصممة لتعزيز جمالك الطبيعي.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 rounded-2xl shadow-gold hover:shadow-gold-lg transition-all duration-300 p-6 h-full border border-white/10 group-hover:border-gold/30 group-hover:bg-gradient-to-br group-hover:from-white/10 group-hover:to-gold/10 backdrop-blur-sm">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300 text-right">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-right">
                  {service.description}
                </p>

                <div className="space-y-2 flex flex-col items-start">
                  {service.treatments.map((treatment, treatmentIndex) => (
                    <div key={treatmentIndex} className="flex items-center text-sm text-gray-400 justify-end">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full ml-2" />
                      {treatment}
                    </div>
                  ))}
                </div>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    className="w-full bg-gold/10 hover:bg-gold hover:text-white text-gold font-medium py-2 px-4 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    اعرف المزيد
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center relative bg-gradient-to-r from-white/5 to-gold/10 rounded-3xl overflow-hidden shadow-gold-lg border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold/10" />
          </div>
          <div className="relative z-10 p-8 lg:p-12">
            <motion.h3
              className="text-3xl font-serif font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              جاهز لبدء رحلتك الجمالية؟
            </motion.h3>
            
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              احجز استشارة مخصصة مع الدكتورة غادة مرسي لمناقشة أهدافك واكتشاف الخطة الأنسب لك.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="tel:+97125555097"
                className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                احجز استشارة
              </motion.a>
              <motion.a
                href="#contact"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                تواصل معنا
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


