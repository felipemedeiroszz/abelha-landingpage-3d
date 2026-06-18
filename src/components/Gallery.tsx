'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const galleryItems = [
  { id: 1, category: 'Training', title: 'Sessão de Treino', size: 'large' },
  { id: 2, category: 'Competition', title: 'Campeonato Regional', size: 'medium' },
  { id: 3, category: 'Facility', title: 'Octógono Profissional', size: 'medium' },
  { id: 4, category: 'Training', title: 'Sparring Session', size: 'small' },
  { id: 5, category: 'Competition', title: 'Final do Campeonato', size: 'large' },
  { id: 6, category: 'Facility', title: 'Área de Treino', size: 'small' },
  { id: 7, category: 'Training', title: 'Aula de Muay Thai', size: 'medium' },
  { id: 8, category: 'Competition', title: 'Vitória no Ring', size: 'medium' },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Training', 'Competition', 'Facility'];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Nossa Galeria</span> de Momentos
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gold-400 text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-xl ${
                item.size === 'large' ? 'col-span-2 row-span-2' : 
                item.size === 'medium' ? 'col-span-2 row-span-1' : 
                'col-span-1 row-span-1'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-900/50 to-black/80 group-hover:from-gold-600/50 group-hover:to-black/60 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-gold-400 text-sm font-medium mb-2">{item.category}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/50 transition-all duration-500 rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
