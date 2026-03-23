import { useState, useEffect } from 'react';
import { WhatsappLogo, MapPin, ShieldCheck } from '@phosphor-icons/react';
import heroBg1 from '../assets/fachada.webp';
import heroBg2 from '../assets/serviços/caminhao-desentupimento.webp';
import heroBg3 from '../assets/serviços/desentupimento2.webp';

export default function Hero() {
  const images = [heroBg1, heroBg2, heroBg3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header id="home" className="relative h-[95vh] min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      
      {/* Slider de Fundo Cinematográfico */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[6000ms] ease-out ${
            index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Máscara Escura para o texto brilhar */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10"></div>

      {/* Conteúdo Central */}
      <div className="relative z-20 w-full max-w-[1000px] mx-auto px-6 flex flex-col items-center pt-10">
        
        {/* Badge 3D Flutuante - Goiânia e Caldas */}
        <div className="fade-in-up flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full font-bold uppercase tracking-widest text-xs mb-8 shadow-[0_0_20px_rgba(255,118,0,0.3)] float-slow">
          <MapPin size={18} weight="fill" className="text-[#FF7600]" />
          Caldas Novas • Goiânia • Região
        </div>

        {/* Título Massivo */}
        <h1 className="fade-in-up delay-100 font-black uppercase leading-[1.1] text-[clamp(2.5rem,6vw,5rem)] text-white tracking-tighter mb-6 drop-shadow-2xl">
          Proteção <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A859] to-[#00ff88]">Absoluta</span> <br/>
          Para o seu espaço.
        </h1>

        <p className="fade-in-up delay-200 mb-10 text-[clamp(1.1rem,2vw,1.3rem)] max-w-2xl mx-auto leading-relaxed text-gray-300 font-medium">
          Dedetização e desentupimento com tecnologia de ponta. Resolvemos infestações e entupimentos com rapidez, garantia e zero dor de cabeça.
        </p>

        {/* Botões e Provas Sociais */}
        <div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center gap-6">
          <a
            href="https://api.whatsapp.com/send/?phone=5564992886851"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#FF7600] rounded-full text-white font-black uppercase tracking-widest text-sm overflow-hidden shadow-[0_0_30px_rgba(255,118,0,0.4)] hover:shadow-[0_0_50px_rgba(255,118,0,0.6)] hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            <WhatsappLogo size={24} weight="fill" className="mr-3 relative z-10" />
            <span className="relative z-10">Orçamento Rápido</span>
          </a>

          <div className="flex items-center gap-2 text-white/80 font-medium text-sm bg-black/40 px-6 py-4 rounded-full border border-white/10 backdrop-blur-sm">
             <ShieldCheck size={24} className="text-[#00A859]" weight="duotone" />
             Garantia de Serviço
          </div>
        </div>

      </div>
    </header>
  );
}