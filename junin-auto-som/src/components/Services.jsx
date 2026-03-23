import React from 'react';

// Nomes de arquivos exatos conforme sua pasta public
const services = [
  { img: "/isufilm.webp", title: "Window Blue / Insulfilm", desc: "Redução de calor e privacidade máxima com películas originais de alta performance." },
  { img: "/som.webp", title: "Projetos de Som", desc: "Do áudio interno básico ao som de competição de altíssima fidelidade e potência." },
  { img: "/multimidia.webp", title: "Multimídia & Tech", desc: "Desbloqueio de tela, integração CarPlay e Android Auto com molduras originais." },
  { img: "/ppf.webp", title: "PPF (Proteção)", desc: "Escudo invisível contra arranhões, pedras e manchas para a pintura do seu carro." },
  { img: "/vitrificacao.webp", title: "Estética & Vitrificação", desc: "Proteção cerâmica para um brilho vitrificado, intenso e duradouro na lataria." },
  { img: "/banco-de-couro.webp", title: "Bancos em Couro", desc: "Conforto e sofisticação com costuras e acabamento padrão de fábrica." },
];

const Services = () => {
  return (
    <section className="py-20 md:py-28 relative border-t border-white/5" id="servicos">
      <div className="container-custom relative z-10">
        
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] font-black uppercase tracking-tighter mb-4">
              Nossos <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200 drop-shadow-lg">
                Serviços
              </span>
            </h2>
            <p className="text-[#A3A3A3] text-lg font-medium border-l-4 border-brand-yellow pl-4 max-w-[500px]">
              Soluções de alto padrão. Estética, tecnologia e acabamento de priemira para quem exige o melhor do seu carro.
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-2 text-brand-yellow font-black uppercase tracking-widest text-sm">
            <span className="w-12 h-[2px] bg-brand-yellow"></span>
            Padrão VIP
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item, index) => (
            <div 
              className="group relative h-[380px] md:h-[420px] bg-[#050505] overflow-hidden border border-white/5 hover:border-brand-yellow transition-colors duration-300 cursor-pointer" 
              key={index}
            >
              <div className="absolute inset-0 z-0 bg-black">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-[#000]/60 to-transparent h-full"></div>
              </div>
              
              <div className="relative z-10 flex flex-col justify-end h-full p-6 lg:p-8">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-6">
                  <div className="w-10 h-1 bg-brand-yellow mb-4 transition-all duration-300 group-hover:w-16 shadow-[0_0_10px_rgba(255,184,0,0.5)]"></div>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-3 drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-[#E5E5E5] text-sm md:text-base font-medium leading-relaxed drop-shadow-md">
                    {item.desc}
                  </p>
                </div>

                <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  <a 
                    href={`https://wa.me/556236363610?text=Olá,%20tenho%20interesse%20no%20serviço%20de%20*${item.title}*`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-brand-yellow text-black font-black uppercase tracking-widest py-3.5 text-[0.85rem] hover:bg-white transition-colors"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;