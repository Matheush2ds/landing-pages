import React from 'react';
import { MapPin, Phone, Smartphone, Instagram, Clock, ShieldCheck, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pt-16 md:pt-24 border-t-4 border-t-brand-yellow text-[0.95rem] relative z-20" id="contato">
      <div className="container-custom grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 mb-16">
        
        {/* Coluna 1: Marca e Contato */}
        <div>
          <div className="mb-8">
            {/* Imagem puxada direto da pasta public */}
            <img src="/logo junin.png" alt="Junin Auto Som Cidade Jardim" className="h-10 md:h-12 w-auto object-contain" />
          </div>
          
          <p className="text-[#A3A3A3] mb-8 leading-relaxed max-w-[420px] font-medium border-l-4 border-white/10 pl-4">
            A maior rede de acessórios automotivos do Brasil. 🇧🇷<br/>
            Transformamos veículos com som de alta performance, Window Blue original e estética de luxo.
          </p>
          
          <div className="flex flex-col gap-5">
            {/* Link real do Google Maps */}
            <a href="https://www.google.com/maps/place/Junin+Auto+Som+-+Cidade+Jardim/@-16.6872588,-49.2979262,17z/data=!3m1!4b1!4m6!3m5!1s0x935ef1604a3e2ad9:0xd2757279c13ee24a!8m2!3d-16.6872588!4d-49.2953513" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#ccc] decoration-none transition-all duration-300 hover:text-brand-yellow hover:translate-x-2 group">
              <div className="bg-white/5 p-2 transition-colors group-hover:bg-brand-yellow/10">
                <MapPin className="text-brand-yellow" size={20} />
              </div>
              <span className="font-bold tracking-wide">Av. Armando de Godói, 370 - Cidade Jardim</span>
            </a>

            <a href="tel:+556236363610" className="flex items-center gap-4 text-[#ccc] decoration-none transition-all duration-300 hover:text-brand-yellow hover:translate-x-2 group" title="Ligar no Fixo">
              <div className="bg-white/5 p-2 transition-colors group-hover:bg-brand-yellow/10">
                <Phone className="text-brand-yellow" size={20} strokeWidth={2.5} />
              </div>
              <span className="font-black tracking-widest text-lg text-white group-hover:text-brand-yellow">(62) 3636-3610</span>
            </a>

            <a href="https://wa.me/5562996628238" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#ccc] decoration-none transition-all duration-300 hover:text-brand-yellow hover:translate-x-2 group" title="Chamar no WhatsApp">
              <div className="bg-white/5 p-2 transition-colors group-hover:bg-brand-yellow/10">
                <Smartphone className="text-brand-yellow" size={20} strokeWidth={2.5} />
              </div>
              <span className="font-black tracking-widest text-lg text-white group-hover:text-brand-yellow">(62) 99662-8238</span>
            </a>

            <div className="flex items-center gap-4 text-[#ccc] group">
              <div className="bg-white/5 p-2">
                <Clock className="text-brand-yellow" size={20} />
              </div>
              <span className="font-bold tracking-wide uppercase text-sm text-[#888]">Seg-Sex: 08h-18h <span className="text-brand-yellow mx-1">|</span> Sáb: 08h-12h</span>
            </div>

            <a href="https://www.instagram.com/junincidadejardim/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#ccc] decoration-none transition-all duration-300 hover:text-brand-yellow hover:translate-x-2 group">
              <div className="bg-white/5 p-2 transition-colors group-hover:bg-brand-yellow/10">
                <Instagram className="text-brand-yellow" size={20} />
              </div>
              <span className="font-bold tracking-wide">@junincidadejardim</span>
            </a>
          </div>
        </div>
        
        {/* Coluna 2: Localização (Mapa) */}
        <div className="flex flex-col">
          <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-4">
             <h3 className="text-white text-xl font-black uppercase tracking-widest">Localização</h3>
             <div className="text-[0.65rem] text-black bg-brand-yellow font-black uppercase tracking-[0.2em] px-3 py-1.5 flex items-center gap-1.5 shadow-[2px_2px_0px_rgba(255,255,255,0.2)]">
               <ShieldCheck size={14} strokeWidth={3} /> Loja Oficial
             </div>
          </div>
          
          <div className="relative border-2 border-white/10 grayscale transition-all duration-500 h-[280px] hover:grayscale-0 hover:border-brand-yellow group flex-grow">
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
            
            {/* Embed Real do Google Maps - Cravado na Loja */}
            <iframe 
              src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=pt-BR&amp;q=Av.%20Armando%20de%20God%C3%B3i,%20370%20-%20Cidade%20Jardim,%20Goi%C3%A2nia%20-%20GO+(Junin%20Auto%20Som)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Junin Auto Som Cidade Jardim"
              className="relative z-0"
            ></iframe>
          </div>
          
          {/* Link para gerar a rota direto no app do Google Maps do cliente */}
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Junin+Auto+Som+Cidade+Jardim+Goiânia" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center mt-6 text-[#888] font-bold uppercase tracking-widest text-[0.75rem] decoration-none transition-all duration-300 hover:text-brand-yellow hover:tracking-[0.25em]"
          >
            Traçar rota no Google Maps <span className="text-brand-yellow font-black text-sm ml-1">↗</span>
          </a>
        </div>
      </div>

      <div className="bg-[#020202] py-6 border-t border-white/5 text-xs font-bold uppercase tracking-wider relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-full bg-brand-yellow/5 blur-3xl pointer-events-none"></div>

        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left relative z-10">
          <p className="text-[#555]">
            © {new Date().getFullYear()} Junin Auto Som. Todos os direitos reservados. 
          </p>
          
          <a 
            href="https://www.instagram.com/optima_sistemas" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 group transition-all duration-300"
          >
            <span className="text-[#444] group-hover:text-[#888] transition-colors">Tecnologia por</span>
            <span className="flex items-center gap-1.5 text-white bg-white/5 border border-white/10 px-3 py-1.5 group-hover:border-brand-yellow/50 group-hover:bg-brand-yellow/10 transition-all duration-300 shadow-[0_0_15px_rgba(255,184,0,0)] group-hover:shadow-[0_0_15px_rgba(255,184,0,0.15)]">
              <Code2 size={14} className="text-brand-yellow" />
              <span className="tracking-widest">Optima Sistemas</span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;