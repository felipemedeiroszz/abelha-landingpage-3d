'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Aluno há 3 anos',
    rating: 5,
    text: 'A academia mudou minha vida completamente. Além de estar em forma, ganhei confiança e fiz amigos para a vida toda. Os professores são incríveis!',
  },
  {
    name: 'Ana Rodrigues',
    role: 'Aluna há 2 anos',
    rating: 5,
    text: 'Comecei como iniciante e hoje compito em campeonatos. O ambiente é super acolhedor e a estrutura é de nível profissional.',
  },
  {
    name: 'Pedro Santos',
    role: 'Aluno há 5 anos',
    rating: 5,
    text: 'A melhor academia da região. Professores certificados, estrutura completa e uma comunidade incrível. Recomendo para todos!',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">O Que Nossos Alunos</span> Dizem
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <Quote className="w-12 h-12 text-gold-400 mb-6" />
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {testimonials[currentIndex].text}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold text-white mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gold-400">{testimonials[currentIndex].role}</p>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                ))}
              </div>
            </div>
          </motion.div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-gold-400 text-black flex items-center justify-center hover:bg-gold-300 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-gold-400 text-black flex items-center justify-center hover:bg-gold-300 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-gold-400 w-8' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
