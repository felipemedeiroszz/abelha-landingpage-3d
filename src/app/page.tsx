'use client';

import { useEffect, useRef, useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import Bee3D from '@/components/Fighter3D';
import Products from '@/components/Products';
import Process from '@/components/Process';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#' || !targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <main className="min-h-screen bg-amber-950 overflow-x-hidden scroll-smooth">
      <Navigation scrollY={scrollY} />
      
      {/* Fixed 3D Bee - visible across all sections */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        <Bee3D scrollProgress={scrollProgress} />
      </div>
      
      <Hero />
      <About />
      <Products />
      <Process />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-amber-500/20 bg-black/50 relative z-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            Desenvolvido por{' '}
            <a
              href="https://www.instagram.com/lfinfo_sjb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            >
              lfinfo
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
