'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video2.mp4" type="video/mp4" />
      </video>
      
      {/* Black gradient overlay on entire hero */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-30 px-4 max-w-6xl mx-auto ml-10 md:ml-10 md:mt-0 -mt-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-start"
        >
          <img
            src="/texto.png"
            alt="APIÁRIO DOCE"
            className="w-full h-auto object-contain max-w-sm md:max-w-7xl"
          />
        </motion.div>
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-black/80" />
    </section>
  );
}
