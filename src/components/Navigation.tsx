'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrollY: number;
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  const navItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Produtos', href: '#products' },
    { name: 'Processo', href: '#process' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-amber-950/80 backdrop-blur-xl border-b border-amber-400/10'
          : 'bg-transparent'
      }`}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="APIÁRIO DOCE"
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              APIÁRIO DOCE
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
