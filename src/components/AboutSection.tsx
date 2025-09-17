'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Heart, Users, Trophy } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
  const highlights = [
    'MBBS from Al Azhar University, Egypt',
    '2 Master\'s Degrees from Menoufiya University',
    'Head of Aesthetics',
    'Licensed in UAE, Saudi Arabia & Egypt',
    'Member of American Academy of Aesthetic Medicine',
    'Expert in cutting-edge aesthetic treatments'
  ]

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Every treatment is tailored to your unique needs and aesthetic goals.'
    },
    {
      icon: Trophy,
      title: 'Excellence in Results',
      description: 'Committed to delivering exceptional outcomes with the highest standards.'
    },
    {
      icon: Users,
      title: 'Trusted Expertise',
      description: 'Over two decades of experience serving clients across the Middle East.'
    }
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-dark-gray via-black to-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              <Heart className="w-4 h-4 mr-2" />
              Meet Your Doctor
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Dr. <span className="text-gold">Ghada Morsy</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Dr. Ghada Morsy is a highly skilled and experienced Aesthetics
              with over 20 years of expertise in cosmetic dermatology. As the Head of the Department
              of Aesthetics at Max Care Medical Center in Abu Dhabi, she has established
              herself as one of the leading specialists in the region.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              With extensive knowledge in anti-aging treatments, laser procedures, and facial
              rejuvenation, Dr. Ghada is dedicated to providing the highest quality of cosmetic
              care and ensuring exceptional results for every patient.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
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

          {/* Right Content - Values */}
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
                Our Core Values
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
                    <div>
                      <h4 className="font-semibold text-white mb-2">{value.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <motion.div
                className="mt-10 p-6 bg-black/40 rounded-xl border-l-4 border-gold text-white"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-200 italic mb-3">
                  "I am committed to helping each patient achieve their aesthetic goals while
                  maintaining the highest standards of safety and care. Every treatment is a
                  journey towards enhanced confidence and natural beauty."
                </p>
                <p className="text-gold font-semibold">- Dr. Ghada Morsy</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Clinic Environment Showcase */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* <div className="relative rounded-3xl overflow-hidden shadow-gold-lg mb-16 border border-white/10">
            <Image
              src="/2.jpg"
              alt="Max Care Medical Center - Professional Treatment Environment"
              width={1200}
              height={600}
              className="w-full h-[18rem] lg:h-[22rem] object-cover scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="text-center text-white max-w-3xl">
                <motion.h3
                  className="text-3xl lg:text-4xl text-heading-primary mb-3 text-subtle"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  State-of-the-Art Facility
                </motion.h3>
                <motion.p
                  className="text-base lg:text-lg text-white/90 mx-auto text-subtle"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Experience premium aesthetic treatments in our modern, fully equipped medical center.
                </motion.p>
              </div>
            </div>
          </div> */}
        </motion.div>

        {/* Experience Timeline */}
        {/* <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-serif font-bold text-white mb-12">
            Professional Journey
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: '2006-2008', title: 'Advanced Education', desc: 'Completed Master\'s Degrees at Menoufiya University' },
              { year: '2008-2017', title: 'Regional Expertise', desc: '15 years of practice in Egypt and Saudi Arabia' },
              { year: '2017-Present', title: 'UAE Leadership', desc: 'Leading Aesthetics Department in Abu Dhabi' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 rounded-xl shadow-lg p-6 border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>
                <div className="text-gold font-semibold mb-2">{item.year}</div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
