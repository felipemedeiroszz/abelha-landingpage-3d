'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: "url('/5tela.png')" }}
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
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              Entre em Contato
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            Faça seu pedido ou tire suas dúvidas sobre nossos produtos.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-3xl p-8 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 block group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">WhatsApp</h3>
                  <p className="text-gray-400 text-sm">(11) 99999-9999</p>
                </div>
              </div>
            </a>

            <div className="glass rounded-3xl p-8 border border-amber-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <Phone className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Telefone</h3>
                  <p className="text-gray-400 text-sm">(11) 99999-9999</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 border border-amber-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <Mail className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Email</h3>
                  <p className="text-gray-400 text-sm">contato@apiariodoce.com.br</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 border border-amber-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <MapPin className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Endereço</h3>
                  <p className="text-gray-400 text-sm">Sítio do Mel, Km 15 - Campinas, SP</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
