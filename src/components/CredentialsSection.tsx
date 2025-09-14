'use client'

import { motion } from 'framer-motion'
import { Award, GraduationCap, Shield, Globe, Star, Calendar } from 'lucide-react'

export function CredentialsSection() {
  const licenses = [
    {
      title: 'Health Authority Abu Dhabi (HAAD)',
      location: 'United Arab Emirates',
      specialty: 'Dermatology Specialist'
    },
    {
      title: 'Dubai Health Authority (DHA)',
      location: 'United Arab Emirates', 
      specialty: 'Dermatology Specialist'
    },
    {
      title: 'Saudi Council for Health and Specialties',
      location: 'Kingdom of Saudi Arabia',
      specialty: 'Dermatology Registrar'
    },
    {
      title: 'Egyptian Medical Syndicate of Physicians',
      location: 'Egypt',
      specialty: 'Dermatology Specialist'
    }
  ]

  const certifications = [
    {
      year: '2017',
      title: 'Merz Aesthetics Radiesse Expert',
      organization: 'Merz Aesthetics',
      location: 'UAE'
    },
    {
      year: '2016',
      title: 'American Academy of Aesthetic Medicine',
      organization: 'AAAM',
      location: 'Dubai, UAE'
    },
    {
      year: '2016',
      title: 'Master Class of Merz Aesthetics Academy',
      organization: 'Merz Aesthetics',
      location: 'Malta'
    },
    {
      year: '2015',
      title: 'Laser and Aesthetic Medicine Diploma',
      organization: 'American Academy of Aesthetic Medicine',
      location: 'Dubai, UAE'
    },
    {
      year: '2015',
      title: 'Facial Codes to Revitalization Certificate',
      organization: 'Allergan Medical Institute',
      location: 'Turkey'
    },
    {
      year: '2011',
      title: 'Professional Laser Diploma',
      organization: 'Al Zagazig University',
      location: 'Egypt'
    }
  ]

  const achievements = [
    {
      icon: GraduationCap,
      title: 'Advanced Education',
      description: 'MBBS from Al Azhar University & 2 Master\'s Degrees from Menoufiya University'
    },
    {
      icon: Award,
      title: 'International Recognition',
      description: 'Member of prestigious medical academies across multiple countries'
    },
    {
      icon: Globe,
      title: 'Global Experience',
      description: '20+ years of practice across Egypt, Saudi Arabia, and UAE'
    },
    {
      icon: Star,
      title: 'Excellence in Care',
      description: 'Thousands of satisfied patients and exceptional treatment outcomes'
    }
  ]

  return (
    <section id="credentials" className="py-24 bg-gradient-to-br from-dark-gray via-dark-gray to-gray-800 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
            Professional Credentials
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Trusted <span className="text-gold">Expertise</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Dr. Ghada Morsy's extensive qualifications and certifications reflect her commitment 
            to maintaining the highest standards in aesthetic medicine and patient care.
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
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
          {/* Licenses */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-gold mr-3" />
                <h3 className="text-2xl font-serif font-bold">Medical Licenses</h3>
              </div>
              
              <div className="space-y-6">
                {licenses.map((license, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 border-gold pl-6 py-4 hover:bg-white/5 transition-colors duration-300 rounded-r-lg"
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

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-gold mr-3" />
                <h3 className="text-2xl font-serif font-bold">Certifications & Training</h3>
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
                    <div className="flex-1">
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

        {/* Languages & Additional Info */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm text-center">
            <Globe className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Languages</h3>
            <div className="space-y-2">
              <div className="text-gray-300">Arabic (Native)</div>
              <div className="text-gray-300">English (Fluent)</div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm text-center">
            <Star className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Experience</h3>
            <div className="text-2xl font-bold text-gold mb-1">20+</div>
            <div className="text-gray-300">Years of Practice</div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm text-center">
            <Award className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Position</h3>
            <div className="text-gray-300">Head of Department</div>
            <div className="text-sm text-gray-400 mt-1">Aesthetics & Dermatology</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
