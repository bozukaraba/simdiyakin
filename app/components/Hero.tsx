"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black/80 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/space-bg.jpg')" }}
      />
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            2. Yakın Yörünge ve Küp Uydu Çalıştayı
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Türkiye'nin uzay teknolojileri alanındaki en önemli etkinliklerinden biri
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full"
            >
              Kayıt Ol
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10"
            >
              Programı İndir
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 