import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="iletisim" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">İletişim</h2>
          <p className="text-gray-300">Sorularınız için bize ulaşın</p>
        </motion.div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-white mb-2 text-sm sm:text-base">Ad Soyad</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                placeholder="Adınız Soyadınız"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">E-posta</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="ornek@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Mesaj</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="Mesajınız..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg"
            >
              Gönder
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 