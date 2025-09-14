'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Calendar, Send, Star } from 'lucide-react'

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      primary: '02 5555 097',
      secondary: '+971 543 055 055',
      href: 'tel:+97125555097'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'info@maxhealthcare.ae',
      secondary: 'appointments@maxhealthcare.ae',
      href: 'mailto:info@maxhealthcare.ae'
    },
    {
      icon: MapPin,
      title: 'Location',
      primary: '70 Al Itihad Street',
      secondary: 'Al Rabdan Area, Abu Dhabi, UAE',
      href: 'https://goo.gl/maps/ACcGFhZsE5gMBhVE9'
    }
  ]

  const workingHours = [
    { day: 'Monday - Thursday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '2:00 PM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-dark-gray via-black to-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Schedule Your Consultation
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Get in <span className="text-gold">Touch</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to begin your aesthetic journey? Contact us today to schedule a personalized 
            consultation with Dr. Ghada Morsy at Max Care Medical Center.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 rounded-3xl shadow-gold-lg p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-bold text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/10 transition-colors duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-gold group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-gray-200 font-medium">{info.primary}</p>
                      <p className="text-gray-400 text-sm">{info.secondary}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Working Hours */}
              <motion.div
                className="border-t pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Clock className="w-6 h-6 text-gold mr-3" />
                  <h4 className="text-xl font-semibold text-white">Working Hours</h4>
                </div>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <span className="text-gray-200 font-medium">{schedule.day}</span>
                      <span className="text-gray-400">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 rounded-3xl shadow-gold-lg p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-bold text-white mb-8">
                Request Consultation
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors duration-200"
                      placeholder="Your first name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors duration-200"
                      placeholder="Your last name"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors duration-200"
                    placeholder="+971 XX XXX XXXX"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Treatment Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors duration-200">
                    <option>Select a treatment</option>
                    <option>Laser Hair Reduction</option>
                    <option>Facial Treatments</option>
                    <option>Botulinum Toxin</option>
                    <option>Dermal Fillers</option>
                    <option>Face Treatments</option>
                    <option>Hair Treatments</option>
                    <option>Body Treatments</option>
                    <option>General Consultation</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us about your aesthetic goals and any questions you may have..."
                  ></textarea>
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
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
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
            Experience Excellence in Aesthetic Medicine
          </motion.h3>
          
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Join thousands of satisfied clients who have trusted Dr. Ghada Morsy with their 
            aesthetic journey. Book your consultation today and discover your best self.
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
            <span>Call Now: 02 5555 097</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
