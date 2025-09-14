'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-dark-gray text-white py-3 px-4 hidden lg:block relative z-50 border-b border-gold">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 hover:text-gold transition-colors duration-200">
              <MapPin className="w-4 h-4 text-gold" />
              <span>70 Al Itihad St., Rabdan area, Abu Dhabi</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-gold transition-colors duration-200">
              <Phone className="w-4 h-4 text-gold" />
              <a href="tel:+97125555097" className="hover:text-gold transition-colors duration-200">02 5555 097</a>
            </div>
            <div className="flex items-center space-x-2 hover:text-gold transition-colors duration-200">
              <Mail className="w-4 h-4 text-gold" />
              <a href="mailto:info@maxhealthcare.ae" className="hover:text-gold transition-colors duration-200">info@maxhealthcare.ae</a>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <span className="text-gold">🕒 Open: Mon-Thu 9AM-8PM | Fri 2PM-8PM | Sat 9AM-6PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        className={cn(
          'fixed left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'top-0 bg-gradient-to-r from-dark-gray via-black to-dark-gray shadow-xl border-b border-gold/10'
            : 'top-12 lg:top-11 bg-gradient-to-r from-dark-gray via-black to-dark-gray shadow-lg'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo2.png"
                  alt="Dr. Ghada Morsy Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
                {/* <div className="text-xl lg:text-2xl font-serif font-bold text-gold">
                  Dr. Ghada Morsy
                </div> */}
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200 hover:text-gold',
                    isScrolled ? 'text-white' : 'text-white'
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="tel:+97125555097"
                className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 shadow-lg shadow-gold/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Appointment
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
            <div className="px-4 py-6 space-y-4">
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
                  Book Appointment
                </a>
              </div>
              <div className="pt-4 space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>02 5555 097</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gold" />
                  <span>info@maxhealthcare.ae</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  )
}
