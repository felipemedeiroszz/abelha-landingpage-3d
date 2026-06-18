'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Trophy, Users, Calendar, Star } from 'lucide-react';

const stats = [
  { icon: Calendar, value: 10, label: 'Anos de Experiência', suffix: '+' },
  { icon: Users, value: 500, label: 'Alunos Formados', suffix: '+' },
  { icon: Trophy, value: 20, label: 'Competições', suffix: '+' },
  { icon: Star, value: 98, label: 'Satisfação dos Alunos', suffix: '%' },
];

function StatCard({ icon: Icon, value, label, suffix }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mx-auto mb-6">
        <Icon className="w-10 h-10 text-black" />
      </div>
      <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-xl text-gray-400">{label}</div>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gold-900/10 to-black" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Nossos Números</span> Falam por Si
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
