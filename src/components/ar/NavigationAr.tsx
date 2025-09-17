'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavigationAr() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isArabic = pathname?.startsWith('/ar')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'الخدمات', href: '#services' },
    { name: 'الاعتمادات', href: '#credentials' },
    { name: 'تواصل', href: '#contact' },
  ]

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-gradient-to-r from-dark-gray via-black to-dark-gray shadow-xl border-b border-gold/10'
            : 'bg-gradient-to-r from-dark-gray via-black to-dark-gray shadow-lg'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo2.png"
                  alt="شعار د. غادة مرسي"
                  width={200}
                  height={200}
                  className="object-contain h-10 w-auto sm:h-12 lg:h-16"
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:flex-row items-center">
              {navigationItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200 hover:text-gold mx-4',
                    isScrolled ? 'text-white' : 'text-white'
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
              {/* Language Switcher */}
              <div className="flex items-center gap-2">
                <Link
                  href="/en"
                  aria-label="Switch to English"
                  className={cn(
                    'px-3 py-1 rounded-full text-sm transition-colors',
                    !isArabic ? 'bg-white/10 text-white border border-white/20' : 'text-white/80 hover:text-white'
                  )}
                >
                  EN
                </Link>
                <span className="text-white/30">/</span>
                <Link
                  href="/ar"
                  aria-label="التبديل إلى العربية"
                  className={cn(
                    'px-3 py-1 rounded-full text-sm transition-colors',
                    isArabic ? 'bg-white/10 text-white border border-white/20' : 'text-white/80 hover:text-white'
                  )}
                >
                  AR
                </Link>
              </div>
              <motion.a
                href="tel:+97125555097"
                className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 shadow-lg shadow-gold/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                احجز موعد
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'p-2 rounded-md transition-colors duration-200',
                  isScrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/10'
                )}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-gradient-to-r from-dark-gray via-black to-dark-gray border-t border-white/10 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4 text-right">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-gold font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="tel:+97125555097"
                  className="block bg-gold hover:bg-gold-dark text-white text-center px-6 py-3 rounded-full font-medium transition-colors duration-200 shadow-md"
                >
                  احجز موعد
                </a>
              </div>
              {/* Language Switcher - Mobile */}
              <div className="pt-4 border-t">
                <div className="flex justify-center items-center gap-2">
                  <Link
                    href="/en"
                    aria-label="Switch to English"
                    className={cn(
                      'px-3 py-1 rounded-full text-sm transition-colors',
                      !isArabic ? 'bg-white/10 text-white border border-white/20' : 'text-white/80 hover:text-white'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    EN
                  </Link>
                  <span className="text-white/30">/</span>
                  <Link
                    href="/ar"
                    aria-label="التبديل إلى العربية"
                    className={cn(
                      'px-3 py-1 rounded-full text-sm transition-colors',
                      isArabic ? 'bg-white/10 text-white border border-white/20' : 'text-white/80 hover:text-white'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AR
                  </Link>
                </div>
              </div>
              <div className="pt-4 space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2 justify-end">
                  <span>02 5555 097</span>
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div className="flex items-center space-x-2 justify-end">
                  <span>info@maxhealthcare.ae</span>
                  <Mail className="w-4 h-4 text-gold" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  )
}


