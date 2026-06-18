'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    image: '/card1.png',
    name: 'Mel Puro',
    description: 'Mel 100% natural, colhido diretamente das colmeias. Sem aditivos ou processamentos. Rico em antioxidantes naturais e propriedades terapêuticas.',
    price: 'R$ 45,00',
  },
  {
    image: '/card2.png',
    name: 'Mel de Florada',
    description: 'Mel específico de floradas regionais, com sabores únicos e propriedades terapêuticas. Coletado em épocas específicas para máxima qualidade.',
    price: 'R$ 55,00',
  },
  {
    image: '/card3.png',
    name: 'Própolis',
    description: 'Própolis pura em extrato, conhecida por suas propriedades antibacterianas e anti-inflamatórias. Fortalece o sistema imunológico naturalmente.',
    price: 'R$ 35,00',
  },
  {
    image: '/card4.png',
    name: 'Kit Premium',
    description: 'Combo especial com mel, própolis e geleia real. O melhor do apiário em um só kit. Presente perfeito para quem busca saúde natural.',
    price: 'R$ 120,00',
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-32 px-4 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: "url('/3tela.png')" }}
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
            <span className="text-white">Nossos </span>
            <span className="text-gradient">Produtos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Produtos 100% naturais, direto do apiário para sua mesa. Qualidade garantida em cada pote.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                alt={card.name}
                className="w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                <div className="relative mb-3">
                  <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 drop-shadow-lg">
                    {card.name}
                  </h3>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-70" />
                </div>
                <p className="text-gray-200 text-sm mb-3 leading-relaxed font-medium">
                  {card.description}
                </p>
                <div className="text-center">
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                    {card.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
