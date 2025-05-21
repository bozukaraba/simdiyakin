import React from 'react';
import { motion } from 'framer-motion';

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Ahmet Yılmaz",
      title: "TÜBİTAK UZAY",
      image: "/speaker1.jpg",
      topic: "Küp Uydu Teknolojileri"
    },
    {
      name: "Prof. Dr. Mehmet Demir",
      title: "İstanbul Teknik Üniversitesi",
      image: "/speaker2.jpg",
      topic: "Uzay Sistemleri"
    },
    {
      name: "Dr. Ayşe Kaya",
      title: "Türksat",
      image: "/speaker3.jpg",
      topic: "Uydu Haberleşmesi"
    }
  ];

  return (
    <section id="konusmacilar" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Konuşmacılar</h2>
          <p className="text-gray-300">Alanında uzman konuşmacılar</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-lg overflow-hidden"
            >
              <div className="aspect-w-1 aspect-h-1">
                <div className="w-full h-48 sm:h-64 bg-gray-700" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{speaker.name}</h3>
                <p className="text-blue-400 mb-2">{speaker.title}</p>
                <p className="text-gray-300">{speaker.topic}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers; 