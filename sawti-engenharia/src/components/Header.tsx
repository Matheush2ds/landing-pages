"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const forceDarkText = scrolled || !isHome;

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full z-[200] transition-all duration-500 top-0 sm:top-4 px-0 sm:px-6 lg:px-8"
    >
      <div 
        className={`mx-auto max-w-7xl transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl border border-slate-200/50 shadow-sm sm:rounded-2xl py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="flex justify-between items-center h-16 px-4 sm:px-6">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center z-50 relative">
            <a href={isHome ? "#inicio" : "/"} className="flex items-center gap-2 outline-none">
              <img 
                src="/home/logo_sawti.webp" 
                alt="Sawti Engenharia" 
                className={`w-auto object-contain transition-all duration-500 ${
                  scrolled ? 'h-9 sm:h-10' : 'h-11 sm:h-12'
                } ${isHome && !scrolled ? 'brightness-0 invert' : ''}`}
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10">
            {['Início', 'Segmentos', 'Portfólio', 'FAQ'].map((item) => {
              const anchor = `#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
              const href = isHome ? anchor : `/${anchor}`;
              
              return (
                <a 
                  key={item}
                  href={href}
                  className={`relative group text-sm font-bold uppercase tracking-widest transition-colors ${
                    forceDarkText ? 'text-slate-700 hover:text-[#CE3235]' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#CE3235] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              );
            })}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center">
            <a 
              href={isHome ? "#contato" : "/#contato"} 
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-[#CE3235] rounded-xl hover:bg-white hover:text-slate-900 shadow-lg shadow-red-500/20 border border-transparent hover:border-slate-200"
            >
              Fale Conosco
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50 relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`p-2 rounded-xl transition-colors ${
                forceDarkText || isMenuOpen ? 'text-slate-800 bg-slate-100/80' : 'text-white bg-white/10 backdrop-blur-md border border-white/20'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Abre por cima de tudo) */}
      <div className={`md:hidden fixed inset-x-4 top-24 z-40 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/50 shadow-2xl transition-all duration-300 origin-top overflow-hidden ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0'}`}>
        <div className="px-6 py-6 space-y-2">
          {['Início', 'Segmentos', 'Portfólio', 'FAQ'].map((item) => {
             const anchor = `#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
             const href = isHome ? anchor : `/${anchor}`;
             
             return (
              <a 
                key={item}
                href={href}
                onClick={() => setIsMenuOpen(false)} 
                className="block px-4 py-3 text-base font-extrabold text-slate-800 hover:bg-red-50 hover:text-[#CE3235] rounded-xl transition-colors"
              >
                {item}
              </a>
            );
          })}
          <div className="pt-6 mt-2 border-t border-slate-100">
            <a 
              href={isHome ? "#contato" : "/#contato"} 
              onClick={() => setIsMenuOpen(false)} 
              className="flex justify-center items-center w-full px-4 py-4 text-base font-bold text-white bg-[#CE3235] rounded-xl hover:bg-red-700 shadow-lg shadow-red-500/20"
            >
              Fale Conosco <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}