import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Award, Target, PenLine } from 'lucide-react';
import Image from 'next/image';
import { Yesteryear } from 'next/font/google';

const yesteryear = Yesteryear({ subsets: ['latin'], weight: '400' });

function SignatureAnimation() {
  return (
    <span className="relative inline-flex items-center whitespace-nowrap ml-3">
      <motion.span
        initial={{ clipPath: 'inset(-30% 100% -30% -10%)' }}
        whileInView={{ clipPath: 'inset(-30% -10% -30% -10%)' }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        className={`${yesteryear.className} text-[#CE3235] text-[1.6em] sm:text-[1.8em] font-normal leading-normal pb-3 px-1 inline-block`}
      >
        Engenheiro
      </motion.span>
      
      <motion.div
        initial={{ left: "-5%", bottom: "0%", opacity: 0 }}
        whileInView={{ 
          left: "100%", 
          opacity: [0, 1, 1, 1, 0], 
          rotate: [0, -15, 10, -10, 15, -10, 10, -15, 0] 
        }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          left: { duration: 2, ease: "easeInOut", delay: 0.5 },
          opacity: { duration: 2.4, times: [0, 0.1, 0.8, 0.9, 1], delay: 0.3 },
          rotate: { duration: 2, ease: "easeInOut", delay: 0.5 }
        }}
        className="absolute pointer-events-none z-10 origin-bottom-left"
      >
         <PenLine size={32} className="text-slate-800 -ml-4" />
      </motion.div>
    </span>
  );
}

export default function Lideranca() {
  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden scroll-mt-20 border-t border-slate-100">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-red-50/50 blur-3xl opacity-40"></div>
         <div className="absolute bottom-[10%] -left-[10%] w-[400px] h-[400px] rounded-full bg-slate-100 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1 relative z-10">
            <h2 className="text-xs sm:text-sm font-extrabold text-[#CE3235] tracking-widest uppercase mb-2 sm:mb-3 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#CE3235] rounded-full"></div> Liderança Técnica
            </h2>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 text-center lg:text-left">
              <span className="block mb-2">Expertise Assinada</span>
              <span className="flex items-center justify-center lg:justify-start mt-2">
                por <SignatureAnimation />
              </span>
            </h3>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6 font-medium text-center lg:text-left px-2 lg:px-0">
              A Sawti Engenharia é a materialização do compromisso do Eng. Thiago Queiroz Barbosa com a excelência técnica e a segurança operacional. Aqui, cada projeto recebe supervisão direta e especializada.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 sm:mb-10 font-medium text-center lg:text-left px-2 lg:px-0">
              Atuamos como consultores estratégicos, garantindo que sua infraestrutura elétrica cumpra rigorosamente a NR-10 e as diretrizes das concessionárias de energia, assegurando a homologação e a eficiência a longo prazo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
               <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#CE3235] shrink-0 border border-slate-200">
                    <HardHat size={20} className="sm:w-6 sm:h-6" />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 text-base sm:text-lg">Supervisão Direta</h4>
                   <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 sm:mt-0">Acompanhamento técnico minucioso em todas as obras.</p>
                 </div>
               </div>
               <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#CE3235] shrink-0 border border-slate-200">
                    <Award size={20} className="sm:w-6 sm:h-6" />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 text-base sm:text-lg">Conformidade Total</h4>
                   <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 sm:mt-0">Projetos fundamentados nas normas ABNT com emissão de ART.</p>
                 </div>
               </div>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-white border border-slate-200 shadow-xl order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none group">
             
             <div className="relative h-[350px] sm:h-[450px] w-full overflow-hidden bg-slate-100">
               {/* CAMINHO ATUALIZADO PARA PUXAR DA PASTA PUBLIC/HOME/ */}
               <Image 
                 src="/home/thiago.webp" 
                 alt="Engenheiro Thiago Queiroz Barbosa" 
                 fill 
                 unoptimized
                 className="object-cover object-top transition-transform duration-1000 group-hover:scale-105" 
                 sizes="(max-width: 768px) 100vw, 50vw" 
                 priority 
               />
             </div>
             
             <div className="bg-white p-6 sm:p-8 flex flex-col items-center text-center sm:items-start sm:text-left border-t border-slate-100 relative z-10 shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.1)]">
                <p className="text-[10px] sm:text-xs font-bold text-[#CE3235] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Target size={14}/> Responsabilidade Técnica
                </p>
                <p className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight mb-3">
                  Eng. Thiago Queiroz Barbosa
                </p>
                
                <div className="inline-flex bg-slate-50 text-slate-600 text-sm font-bold px-4 py-2 rounded-lg border border-slate-200">
                  CREA: <span className="text-slate-900 ml-1">1017067899D-GO</span>
                </div>
             </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}