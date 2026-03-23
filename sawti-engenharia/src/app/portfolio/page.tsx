"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShieldCheck, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton'; 

export default function Portfolio() {
  const [filtroAtivo, setFiltroAtivo] = useState('Subestação');
  const [projetosSalvos, setProjetosSalvos] = useState<any[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [projetoSelecionado, setProjetoSelecionado] = useState<any | null>(null);

  // CATEGORIAS ATUALIZADAS CONFORME SOLICITADO
  const categorias = [
    'Subestação', 
    'Loteamento', 
    'padrão de energia', 
    'Quadro Elétrico', 
    'Solar', 
    'SPDA',
    'Projetos',
    'Estudos e Laudos'
  ];

  // Lê a URL quando a página carrega e ajusta a categoria
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const categoriaUrl = params.get('categoria');
      if (categoriaUrl && categorias.includes(categoriaUrl)) {
        setFiltroAtivo(categoriaUrl);
      }
    }
  }, []);

  useEffect(() => {
    fetch('/projetos.json?' + new Date().getTime())
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data)) {
          setProjetosSalvos(data);
        }
        setCarregando(false);
      })
      .catch(err => {
        console.log("Nenhum projeto cadastrado no painel ainda.");
        setProjetosSalvos([]);
        setCarregando(false);
      });
  }, []);

  const projetosFiltrados = projetosSalvos.filter(projeto => projeto.tag === filtroAtivo);

  useEffect(() => {
    if (projetoSelecionado) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [projetoSelecionado]);

  return (
    <div className="min-h-screen font-sans bg-[#f8fafc] selection:bg-[#CE3235] selection:text-white">
      <Header />
      <WhatsAppButton />

      <main>
        {/* HERO SECTION DO PORTFÓLIO */}
        <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-24 bg-[#020617] overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>
          
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15], x: [0, -30, 0], y: [0, 40, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CE3235] rounded-full blur-[150px] pointer-events-none mix-blend-screen"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
              <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8 font-bold transition-all duration-300 bg-white/5 px-4 py-2 rounded-full border border-white/10 active:scale-95 cursor-pointer relative z-50">
                <ArrowLeft size={16} className="mr-2" /> 
                Retornar ao Início
              </Link>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
                Acervo <span className="text-transparent bg-clip-text bg-linear-to-r from-[#CE3235] to-red-500">Técnico</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed px-4">
                Explore o rigor técnico e a excelência aplicados em nossos projetos reais.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ÁREA DE FILTROS E GRID */}
        <section className="py-12 sm:py-16 lg:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex overflow-x-auto pb-4 sm:pb-0 sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 hide-scrollbar relative z-50">
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setFiltroAtivo(categoria)}
                  className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-sm transition-all duration-200 shadow-sm whitespace-nowrap shrink-0 cursor-pointer relative z-50 active:scale-95 ${
                    filtroAtivo === categoria
                      ? 'bg-[#CE3235] text-white shadow-red-500/25 border-2 border-[#CE3235]'
                      : 'bg-white text-slate-600 border-2 border-slate-200 hover:border-[#CE3235] hover:text-[#CE3235]'
                  }`}
                >
                  {categoria}
                </button>
              ))}
            </div>

            {carregando ? (
               <div className="flex justify-center items-center py-20 relative z-0">
                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#CE3235]"></div>
               </div>
            ) : (
              <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-0">
                <AnimatePresence mode="popLayout">
                  {projetosFiltrados.map((item) => (
                    <motion.div 
                      key={item.id}
                      layout 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setProjetoSelecionado(item)} 
                      className="group relative h-[300px] sm:h-[350px] bg-slate-200 rounded-[2rem] overflow-hidden shadow-sm border border-slate-200 cursor-pointer"
                    >
                      {item.imagem ? (
                        <div className="absolute inset-0">
                           <Image 
                             src={item.imagem} 
                             alt={`Registro Fotográfico`} 
                             fill 
                             unoptimized
                             className="object-cover opacity-90" 
                           />
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                           <ShieldCheck size={100} className="text-slate-400" />
                        </div>
                      )}
                      
                      <div className="absolute top-5 left-5">
                        <span className="bg-[#CE3235] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg backdrop-blur-md border border-white/20">
                          {item.tag}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {!carregando && projetosFiltrados.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24 sm:py-32 bg-white rounded-3xl border border-slate-200 mx-4 sm:mx-0 relative z-0">
                <ShieldCheck size={48} className="mx-auto text-slate-300 mb-4" />
                <p className="text-slate-500 font-bold text-lg sm:text-xl">Categoria vazia.</p>
                <p className="text-slate-400 text-sm mt-2 max-w-sm mx-auto">Em breve novos registros serão adicionados.</p>
              </motion.div>
            )}

          </div>
        </section>

        {/* MODAL (LIGHTBOX) FOTO TELA CHEIA */}
        <AnimatePresence>
          {projetoSelecionado && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 sm:p-8"
              onClick={() => setProjetoSelecionado(null)} 
            >
              <button 
                onClick={() => setProjetoSelecionado(null)}
                className="absolute top-6 right-6 sm:top-8 sm:right-8 z-[10000] w-12 h-12 bg-white/10 hover:bg-[#CE3235] text-white rounded-full flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>

              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full h-full max-w-7xl max-h-[85vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} 
              >
                {projetoSelecionado.imagem ? (
                  <Image 
                    src={projetoSelecionado.imagem} 
                    alt="Registro em Alta Resolução" 
                    fill 
                    unoptimized
                    className="object-contain drop-shadow-2xl" 
                  />
                ) : (
                  <div className="flex flex-col items-center text-slate-500">
                     <ShieldCheck size={80} className="mb-4 opacity-50" />
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}