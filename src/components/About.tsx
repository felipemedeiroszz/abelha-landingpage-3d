'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    image: '/card1.png',
    title: 'Mel 100% Puro',
    description: 'Mel natural sem aditivos, conservantes ou processamentos industriais. Direto das colmeias para sua mesa. Mantém todas as propriedades naturais, enzimas e antioxidantes preservados.',
  },
  {
    image: '/card2.png',
    title: 'Sustentável',
    description: 'Práticas apícolas que respeitam as abelhas e o meio ambiente. Apiário ecologicamente correto. Produção que promove a biodiversidade e preserva os ecossistemas locais.',
  },
  {
    image: '/card3.png',
    title: 'Tradicional',
    description: 'Gerações de conhecimento em apicultura familiar. Técnicas tradicionais combinadas com ciência moderna. Herança cultural passada de pai para filho com dedicação e amor.',
  },
  {
    image: '/card4.png',
    title: 'Qualidade Garantida',
    description: 'Controle rigoroso de qualidade em cada etapa. Certificado e inspecionado para garantir pureza. Análises laboratorias completas e rastreabilidade total do produto.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: "url('/2tela.png')" }}
      />
      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-10" />

      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl z-10" />

      <div className="max-w-7xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Por Que Escolher</span> Nosso Mel
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mais que mel, oferecemos um produto natural de qualidade superior, produzido com amor e respeito pela natureza.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                <div className="relative mb-3">
                  <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 drop-shadow-lg">
                    {card.title}
                  </h3>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-70" />
                </div>
                <p className="text-gray-200 text-sm leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
