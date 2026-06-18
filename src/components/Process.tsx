'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    image: '/card1.png',
    title: 'Florada Natural',
    description: 'Nossas abelhas coletam néctar de flores nativas da região, garantindo um mel puro e saboroso. Respeitamos os ciclos naturais das floradas para máxima qualidade.',
  },
  {
    image: '/card2.png',
    title: 'Processamento Natural',
    description: 'O mel é processado naturalmente pelas abelhas nas colmeias, mantendo todas as propriedades benéficas. Sem aquecimento ou processamentos que alterem suas características.',
  },
  {
    image: '/card3.png',
    title: 'Envase Artesanal',
    description: 'Cada pote é enchido manualmente com cuidado, garantindo a qualidade e pureza do produto. Processo manual que preserva a integridade do mel.',
  },
  {
    image: '/card4.png',
    title: 'Entrega Direta',
    description: 'Entregamos diretamente do apiário para sua casa, garantindo frescor e qualidade. Logística eficiente que mantém o produto em condições ideais.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32 px-4 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: "url('/4tela.png')" }}
      />
      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-10" />

      <div className="max-w-7xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Nosso </span>
            <span className="text-gradient">Processo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Do campo à sua mesa, um processo natural e sustentável que respeita as abelhas e o meio ambiente.
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
