"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Program = () => {
  const programItems = [
    {
      time: "09:00 - 10:00",
      title: "Açılış Konuşmaları",
      description: "Türksat ve TÜBİTAK UZAY yetkilileri"
    },
    {
      time: "10:00 - 11:30",
      title: "Küp Uydu Teknolojileri",
      description: "Güncel gelişmeler ve uygulamalar"
    },
    {
      time: "11:30 - 13:00",
      title: "Öğle Arası",
      description: "Networking"
    },
    {
      time: "13:00 - 14:30",
      title: "Yakın Yörünge Çalışmaları",
      description: "Türkiye'nin uzay programı"
    }
  ];

  return (
    <section id="program" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Program</h2>
          <p className="text-gray-300">Çalıştay Programı</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {programItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start mb-8 bg-gray-800/50 p-6 rounded-lg"
            >
              <div className="w-full md:w-32 flex-shrink-0 mb-4 md:mb-0">
                <span className="text-blue-400 font-semibold">{item.time}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program; 