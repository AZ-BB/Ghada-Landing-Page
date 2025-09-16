'use client'

import { motion } from 'framer-motion'
import { Award, GraduationCap, Shield, Globe, Star, Calendar } from 'lucide-react'

export function CredentialsSectionAr() {
  const licenses = [
    { title: 'هيئة الصحة أبوظبي (HAAD)', location: 'الإمارات العربية المتحدة', specialty: 'أخصائية جلدية' },
    { title: 'هيئة الصحة بدبي (DHA)', location: 'الإمارات العربية المتحدة', specialty: 'أخصائية جلدية' },
    { title: 'الهيئة السعودية للتخصصات الصحية', location: 'المملكة العربية السعودية', specialty: 'مسجل جلدية' },
    { title: 'نقابة الأطباء المصرية', location: 'مصر', specialty: 'أخصائية جلدية' },
  ]

  const certifications = [
    { year: '2017', title: 'Merz Aesthetics Radiesse Expert', organization: 'Merz Aesthetics', location: 'الإمارات' },
    { year: '2016', title: 'American Academy of Aesthetic Medicine', organization: 'AAAM', location: 'دبي، الإمارات' },
    { year: '2016', title: 'Master Class of Merz Aesthetics Academy', organization: 'Merz Aesthetics', location: 'مالطا' },
    { year: '2015', title: 'Laser and Aesthetic Medicine Diploma', organization: 'American Academy of Aesthetic Medicine', location: 'دبي، الإمارات' },
    { year: '2015', title: 'Facial Codes to Revitalization Certificate', organization: 'Allergan Medical Institute', location: 'تركيا' },
    { year: '2011', title: 'Professional Laser Diploma', organization: 'جامعة الزقازيق', location: 'مصر' },
  ]

  const achievements = [
    { icon: GraduationCap, title: 'تعليم متقدم', description: 'بكالوريوس من جامعة الأزهر ودرجتا ماجستير من جامعة المنوفية' },
    { icon: Award, title: 'اعتراف دولي', description: 'عضو في أكاديميات طبية مرموقة بعدة دول' },
    { icon: Globe, title: 'خبرة عالمية', description: 'أكثر من 20 سنة ممارسة في مصر والسعودية والإمارات' },
    { icon: Star, title: 'تميز في الرعاية', description: 'آلاف المرضى الراضين ونتائج علاجية متميزة' },
  ]

  return (
    <section id="credentials" className="py-24 bg-gradient-to-br from-dark-gray via-dark-gray to-gray-800 text-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Shield className="w-4 h-4 mr-2" />
            الاعتمادات المهنية
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            خبرة <span className="text-gold">موثوقة</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            تعكس مؤهلات واعتمادات الدكتورة غادة مرسي التزامها بالحفاظ على أعلى المعايير في طب التجميل ورعاية المرضى.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <achievement.icon className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-gold mr-3" />
                <h3 className="text-2xl font-serif font-bold">التراخيص الطبية</h3>
              </div>
              
              <div className="space-y-6">
                {licenses.map((license, index) => (
                  <motion.div
                    key={index}
                    className="border-r-4 border-gold pr-6 py-4 hover:bg-white/5 transition-colors duration-300 rounded-l-lg text-right"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-bold text-lg mb-2">{license.title}</h4>
                    <p className="text-gold font-medium mb-1">{license.specialty}</p>
                    <p className="text-gray-300 text-sm">{license.location}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-gold mr-3" />
                <h3 className="text-2xl font-serif font-bold">الشهادات والتدريب</h3>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 hover:bg-white/5 transition-colors duration-300 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-gold" />
                    </div>
                    <div className="flex-1 text-right">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold">{cert.title}</h4>
                        <span className="text-gold text-sm font-medium">{cert.year}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-1">{cert.organization}</p>
                      <p className="text-gray-400 text-xs">{cert.location}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm text-center">
            <Globe className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">اللغات</h3>
            <div className="space-y-2">
              <div className="text-gray-300">العربية (اللغة الأم)</div>
              <div className="text-gray-300">الإنجليزية (بطلاقة)</div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm text-center">
            <Star className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">الخبرة</h3>
            <div className="text-2xl font-bold text-gold mb-1">20+</div>
            <div className="text-gray-300">سنة ممارسة</div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm text-center">
            <Award className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">المنصب</h3>
            <div className="text-gray-300">رئيسة القسم</div>
            <div className="text-sm text-gray-400 mt-1">قسم التجميل والأمراض الجلدية</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


