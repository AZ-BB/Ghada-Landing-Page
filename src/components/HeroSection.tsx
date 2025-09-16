'use client'

import { motion } from 'framer-motion'
import { Star, Award, Users, Calendar } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  const stats = [
    { icon: Star, label: '20+ Years', sublabel: 'Experience' },
    { icon: Award, label: 'International', sublabel: 'Certifications' },
    { icon: Users, label: '5,000+', sublabel: 'Clients' },
    { icon: Calendar, label: 'Week Before', sublabel: 'Appointments' },
  ]

  return (
    <section id="home" className="relative min-h-[78vh] lg:min-h-[86vh] flex items-center overflow-hidden bg-[url('/bg.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-x-0 -bottom-40 h-80 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32 pb-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-gray-300">
              <Star className="h-4 w-4 text-gold" aria-hidden="true" />
              Board‑Certified Aesthetics & Dermatology
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.15] text-white">
              <span className="text-white">Dr. Ghada Morsy</span>
              <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-normal text-white/80">Aesthetic & Dermatology Specialist</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Personalized, evidence‑based treatments with natural, refined results. Trusted by thousands across Abu Dhabi for more than <span className="text-gold font-semibold">20 years</span>.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+97125555097"
                aria-label="Call to book a consultation"
                className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-sm sm:text-base font-sans font-semibold text-black transition-colors hover:bg-gold-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
              >
                Book Consultation
              </a>
              <a
                href="#services"
                aria-label="View available services"
                className="inline-flex items-center justify-center rounded-sm border border-gold bg-white/0 px-8 py-4 text-sm sm:text-base font-sans  text-white transition-colors hover:bg-gold/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/30"
              >
                View Services
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center justify-center sm:justify-start gap-3 rounded-xl border border-white/5 bg-white/[0.04] px-4 py-3 overflow-hidden">
                  <div className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-full bg-black/40 border border-gold/40">
                    <stat.icon className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 text-left">
                    <div className="text-xs sm:text-[11px] text-gray-300 break-words">{stat.sublabel}</div>
                    <div className="text-sm sm:text-xs font-semibold text-white break-words">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Portrait */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none p-16 pb-4 rounded-2xl border-2 border-gold bg-gold/80 backdrop-blur-sm shadow-gold">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/3.png"
                  alt="Portrait of Dr. Ghada Morsy"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className='absolute -bottom-0.5 left-1/2 w-[85%] sm:w-[83%] -translate-x-1/2 rounded-2xl p-[1.5px] bg-black'></div>
              <div
                className="absolute -bottom-4 left-1/2 w-[88%] sm:w-[84%] -translate-x-1/2 rounded-2xl p-[1px] bg-gradient-to-r from-white/30 via-white/15 to-white/30 shadow-gold-lg"
                aria-label="Profile card with rating"
              >
                <div className="relative rounded-2xl border-2 border-gold bg-black/80 px-5 py-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">Dr. Ghada Morsy</p>
                      <p className="text-xs text-gray-300">Aesthetic & Dermatology Specialist</p>
                    </div>
                    <div className="flex items-center gap-1" aria-label="Rated five out of five stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-gold fill-current drop-shadow" />
                      ))}
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent opacity-70" />
                  <div className="pointer-events-none absolute -left-3 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-gold/20 blur-md" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
