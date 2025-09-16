"use client"

import { motion } from "framer-motion"
import { CheckCircle, Heart, Users, Trophy } from "lucide-react"

export function AboutSectionAr() {
  const highlights = [
    "بكالوريوس طب وجراحة - جامعة الأزهر، مصر",
    "درجتا ماجستير من جامعة المنوفية",
    "رئيس قسم التجميل والأمراض الجلدية",
    "مرخصة في الإمارات والسعودية ومصر",
    "عضو الأكاديمية الأمريكية لطب التجميل",
    "خبيرة في أحدث علاجات التجميل",
  ]

  const values = [
    {
      icon: Heart,
      title: "رعاية تركز على المريض",
      description: "كل علاج مصمم وفقًا لاحتياجاتك وأهدافك الجمالية.",
    },
    {
      icon: Trophy,
      title: "تميز في النتائج",
      description: "الالتزام بأعلى المعايير لتحقيق نتائج استثنائية.",
    },
    {
      icon: Users,
      title: "خبرة موثوقة",
      description: "أكثر من عقدين من الخبرة في الشرق الأوسط.",
    },
  ]

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-dark-gray via-black to-dark-gray"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=""
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Heart className="w-4 h-4 mr-2" />
              تعرف على طبيبتك
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 text-right"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              د. <span className="text-gold">غادة مرسي</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-8 leading-relaxed text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              الدكتورة غادة مرسي أخصائية ماهرة وذات خبرة واسعة في طب التجميل
              والأمراض الجلدية لأكثر من 20 عامًا. تشغل منصب رئيس قسم التجميل
              والأمراض الجلدية في مركز ماكس كير الطبي بأبوظبي، وقد رسخت مكانتها
              كإحدى أبرز المتخصصين في المنطقة.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 mb-8 leading-relaxed text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              بفضل خبرتها الواسعة في علاجات مكافحة الشيخوخة وإجراءات الليزر
              وتجديد البشرة، تكرس الدكتورة غادة جهودها لتقديم أعلى مستويات
              الرعاية التجميلية وضمان نتائج متميزة لكل مريض.
            </motion.p>

            <motion.div
              className="space-y-4 flex flex-col items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 justify-end"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-gray-200">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 rounded-3xl shadow-gold-lg p-8 lg:p-10 border border-white/10 backdrop-blur-sm">
              <motion.h3
                className="text-2xl font-serif font-bold text-white mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                قيمنا الأساسية
              </motion.h3>

              <div className="space-y-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="text-right">
                      <h4 className="font-semibold text-white mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-10 p-6 bg-black/40 rounded-xl border-r-4 border-gold text-white"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-200 italic mb-3 text-right">
                  "ألتزم بمساعدة كل مريض على تحقيق أهدافه الجمالية مع الحفاظ على
                  أعلى معايير السلامة والرعاية. كل علاج هو رحلة نحو ثقة أعلى
                  وجمال طبيعي."
                </p>
                <p className="text-gold font-semibold text-right">
                  - د. غادة مرسي
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
