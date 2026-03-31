import { WhatsappLogo, ArrowRight, ShieldCheck } from '@phosphor-icons/react';
import heroBg1 from '../assets/fachada.webp';

export default function Hero() {
  return (
    <header id="home" className="relative bg-white pt-12 pb-[100px] md:pb-[140px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        <div className="flex-1 text-center md:text-left fade-in-up">

          <h1 className="font-extrabold leading-[1.1] text-[clamp(2.5rem,5vw,4.5rem)] text-[#143F2E] mb-6 tracking-tight">
            Previna, Proteja <br /> & <span className="text-[#FF7600]">Elimine Pragas</span>
          </h1>
          
          <p className="mb-10 text-[1.1rem] md:text-[1.2rem] max-w-lg leading-relaxed text-gray-500 font-medium mx-auto md:mx-0">
            Garantimos proteção de longa duração para sua residência ou empresa com tecnologia exclusiva.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            {/* Botão Principal Laranja (Conversão Máxima) */}
            <a
              href="https://api.whatsapp.com/send/?phone=5564992886851"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#FF7600] rounded-full text-white font-bold text-[1rem] hover:bg-[#e66a00] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,118,0,0.3)] transition-all duration-300"
            >
              Fazer Orçamento <ArrowRight size={20} weight="bold" />
            </a>
            
            <a href="tel:5564992886851" className="group flex items-center justify-center gap-3 px-6 py-3.5 rounded-full border-2 border-gray-200 text-[#143F2E] font-bold hover:border-[#00A859] transition-all bg-white">
               <div className="bg-[#EAF3EF] p-2 rounded-full group-hover:bg-[#00A859] transition-colors">
                 <WhatsappLogo size={20} weight="fill" className="text-[#00A859] group-hover:text-white" />
               </div>
               (64) 99288-6851
            </a>
          </div>
        </div>

        <div className="flex-1 relative w-full flex justify-center fade-in-up delay-200 mt-10 md:mt-0">
          {/* Shape Laranja Suave atrás da foto */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[105%] bg-[#FFF4ED] rounded-[40px] -z-10 transform rotate-[-4deg]"></div>
          <div className="relative w-full max-w-[500px] h-[450px] md:h-[600px] rounded-[30px] overflow-hidden shadow-2xl border-[6px] border-white">
            <img src={heroBg1} alt="Equipe Inset Lar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}