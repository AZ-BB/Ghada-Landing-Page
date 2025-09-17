'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const beforeAfterImages = Array.from({ length: 19 }, (_, i) => `/before-after/${i}.jpg`)

export function BeforeAfterSectionAr() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const total = beforeAfterImages.length

  const goNext = () => setCurrentIndex((i) => (i + 1) % total)
  const goPrev = () => setCurrentIndex((i) => (i - 1 + total) % total)
  const goTo = (i: number) => setCurrentIndex(i)

  useEffect(() => {
    if (isHovered) return
    const id = setInterval(goNext, 4000)
    return () => clearInterval(id)
  }, [isHovered, currentIndex])

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-dark-gray via-black to-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
        //   initial={{ opacity: 0, y: 40 }}
        //   whileInView={{ opacity: 1, y: 0 }}
        //   transition={{ duration: 0.7 }}
        //   viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            قبل وبعد
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white">
            نتائج <span className="text-gold">مرضانا</span>
          </h2>
        </motion.div>

        <div
          dir="ltr"
          className="relative rounded-2xl border border-white/10 bg-white/5 shadow-gold overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          >
            {beforeAfterImages.map((src, index) => (
              <div key={src} className="relative shrink-0 w-full aspect-[4/3] sm:aspect-[4/3] bg-black">
                <Image
                  src={src}
                  alt={`صورة قبل وبعد رقم ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority={index < 1}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            ))}
          </motion.div>

          <button
            aria-label="السابق"
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white p-2 border border-white/10 backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            aria-label="التالي"
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white p-2 border border-white/10 backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {beforeAfterImages.map((_, i) => (
              <button
                key={i}
                aria-label={`اذهب إلى الشريحة ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === i ? 'w-6 bg-gold' : 'w-2.5 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="tel:+97125555097"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-gold-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
          >
            احجز استشارة
          </a>
        </div>
      </div>
    </section>
  )
}


