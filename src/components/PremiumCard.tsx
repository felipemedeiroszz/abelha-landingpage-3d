'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PremiumCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function PremiumCard({ number, icon: Icon, title, description, delay = 0 }: PremiumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group"
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-xl border border-amber-500/20 shadow-2xl">
        
        {/* Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-600/5 pointer-events-none" />
        
        {/* Golden Illuminated Border */}
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-amber-400/30 via-transparent to-amber-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        {/* Luxury Reflection */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        
        {/* Cinematic Shadow */}
        <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 via-transparent to-amber-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[32px] -z-10" />
        
        {/* Liquid Honey Dripping Effect */}
        <div className="absolute top-0 left-0 right-0 h-2 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"
            animate={{
              x: ['-100%', '100%'],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-0 left-1/4 w-2 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full opacity-60 blur-sm"
            animate={{
              height: [8, 24, 8],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute top-0 left-1/2 w-2 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full opacity-60 blur-sm"
            animate={{
              height: [8, 20, 8],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-0 left-3/4 w-2 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full opacity-60 blur-sm"
            animate={{
              height: [8, 28, 8],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3,
            }}
          />
        </div>
        
        {/* Floating Golden Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        
        {/* Background Number */}
        <div className="absolute top-4 right-6 text-[120px] font-bold text-amber-500/5 select-none pointer-events-none leading-none">
          {number}
        </div>
        
        {/* Honeycomb Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="honeycomb"
                x="0"
                y="0"
                width="28"
                height="49"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M14 0 L28 7 L28 21 L14 28 L0 21 L0 7 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-amber-500"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#honeycomb)" />
          </svg>
        </div>
        
        {/* Card Content */}
        <div className="relative p-8 z-10">
          {/* Hexagonal Icon Container */}
          <div className="relative w-20 h-20 mb-6">
            {/* Hexagon Shape */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 100 115"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient id={`hexGradient-${number}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#D97706" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id={`hexGlow-${number}`}>
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
                  fill="url(#hexGradient)"
                  filter={`url(#hexGlow-${number})`}
                  className="opacity-80"
                />
              </svg>
            </div>
            
            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Icon className="w-10 h-10 text-black" strokeWidth={2} />
              </motion.div>
            </div>
            
            {/* Golden Glow Around Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-16 h-16 bg-amber-400/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-sm">
            {description}
          </p>
        </div>
        
        {/* Decorative Watermark - Honeycomb */}
        <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 115" className="w-16 h-16">
            <path
              d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-amber-500"
            />
          </svg>
        </div>
        
        {/* Quality Seal Badge */}
        <div className="absolute top-4 left-4 opacity-20 pointer-events-none">
          <div className="w-12 h-12 rounded-full border-2 border-amber-500 flex items-center justify-center">
            <span className="text-amber-500 text-xs font-bold">100%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
