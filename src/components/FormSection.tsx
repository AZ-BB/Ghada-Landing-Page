'use client'
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function FormSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
        </section>
    )
}
