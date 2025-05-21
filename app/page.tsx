import React from 'react';
import { motion } from "framer-motion";
import Hero from './components/Hero';
import Program from './components/Program';
import Speakers from './components/Speakers';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <Hero />
      <Program />
      <Speakers />
      <Contact />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">
            2. Yakın Yörünge ve Küp Uydu Çalıştayı
          </h1>
          <p className="text-xl mb-8">
            Türkiye'nin uzay teknolojileri alanındaki en önemli etkinliklerinden biri
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full"
          >
            Kayıt Ol
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
} 