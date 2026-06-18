'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, BoxIcon, User, Baby, Hand } from 'lucide-react';

const programs = [
  {
    icon: Hand,
    title: 'MMA',
    description: 'Artes Marciais Mistas - Combinação completa de stand-up e ground fighting para competição e defesa pessoal.',
    features: ['Striking', 'Grappling', 'Sparring Controlado', 'Preparação para Competição'],
  },
  {
    icon: Zap,
    title: 'Muay Thai',
    description: 'A arte das oito armas - socos, cotovelos, joelhos e canelas em um sistema de combate devastador.',
    features: ['Técnica de Soco', 'Chutes e Joelhos', 'Clinch Work', 'Condicionamento Físico'],
  },
  {
    icon: Shield,
    title: 'Jiu-Jitsu Brasileiro',
    description: 'A arte suave - domínio do combate no chão com técnicas de alavancagem e controle.',
    features: ['Guardas', 'Passagens', 'Finalizações', 'Defesa Pessoal'],
  },
  {
    icon: BoxIcon,
    title: 'Boxe',
    description: 'A nobre arte - técnica refinada de punhos, footwork e estratégia de combate.',
    features: ['Técnica de Soco', 'Defesa e Esquiva', 'Footwork', 'Trabalho de Corda'],
  },
  {
    icon: User,
    title: 'Defesa Pessoal',
    description: 'Técnicas práticas e eficazes para situações reais de perigo e autoconfiança.',
    features: ['Situações de Rua', 'Defesa contra Agarrões', 'Consciência Situacional', 'Simulações Realistas'],
  },
  {
    icon: Baby,
    title: 'Treinamento Infantil',
    description: 'Formação de caráter, disciplina e confiança para crianças e adolescentes.',
    features: ['Disciplina', 'Respeito', 'Coordenação Motora', 'Anti-bullying'],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Nossos Programas</span> de Treinamento
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Escolha o caminho que melhor se adapta aos seus objetivos e transforme-se em um guerreiro completo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-500 relative overflow-hidden">
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-transparent to-gold-500/0 group-hover:from-gold-500/10 group-hover:to-gold-500/10 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <program.icon className="w-10 h-10 text-black" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-gold-400 transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-gold-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
