"use client";

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioHome() {
  const [portfolioDestaques, setPortfolioDestaques] = useState<any[]>([]);

  useEffect(() => {
    // Ordem atualizada: Loteamento, Subestação, Solar, Projetos
    const destaquesHome = [
      { 
        titulo: "Infraestrutura de Loteamentos", 
        tag: "Loteamento", 
        imagem: "/home/loteamento.webp" 
      },
      { 
        titulo: "Construção de Subestações", 
        tag: "Subestação", 
        imagem: "/home/se.webp" 
      },
      { 
        titulo: "Usinas Solares Fotovoltaicas", 
        tag: "Solar", 
        imagem: "/home/solar.webp" 
      },
      { 
        titulo: "Projetos de Alta Complexidade", 
        tag: "Projetos", 
        imagem: "/home/projetos.webp" 
      }
    ];
    setPortfolioDestaques(destaquesHome);
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 lg:py-32 bg-slate-50 scroll-mt-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 sm:mb-16 gap-6 text-center md:text-left relative z-50">
          <div className="max-w-2xl w-full">
            <h2 className="text-xs sm:text-sm font-extrabold text-[#CE3235] tracking-widest uppercase mb-2 flex items-center justify-center md:justify-start gap-2">
              <span className="w-6 h-px bg-[#CE3235]"></span> Histórico de Obras
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Portfólio</h3>
          </div>
          
          <Link href="/portfolio" className="group inline-flex items-center justify-center px-8 py-3.5 bg-white border-2 border-slate-200 rounded-2xl font-bold text-slate-700 hover:border-[#CE3235] hover:text-[#CE3235] active:scale-95 transition-all duration-300 shadow-sm text-sm sm:text-base w-full md:w-auto cursor-pointer overflow-hidden">
            Ver portfólio completo 
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 relative z-0">
          {portfolioDestaques.map((item, index) => (
            <Link href={`/portfolio?categoria=${item.tag}`} key={index}>
              <motion.div variants={fadeUp} className="group relative h-[350px] sm:h-[450px] lg:h-[500px] bg-slate-200 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                
                <div className="absolute inset-0">
                  <Image 
                    src={item.imagem} 
                    alt={item.titulo} 
                    fill 
                    unoptimized 
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute top-6 right-6">
                  <span className="bg-[#CE3235] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg backdrop-blur-md">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
                       <MapPin size={14} />
                    </div>
                    <span className="text-slate-300 text-xs sm:text-sm font-medium">Visualizar projeto</span>
                  </div>
                  <h4 className="text-white font-extrabold text-2xl sm:text-3xl leading-tight">
                    {item.titulo}
                  </h4>
                </div>

              </motion.div>
            </Link>
          ))}
        </motion.div>

      </div>
    </section>
  );
}