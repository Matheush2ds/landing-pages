import { WhatsappLogo, Phone, MapPin, CaretRight, FacebookLogo, InstagramLogo, ShieldCheck } from '@phosphor-icons/react';
import logoImg from '../assets/logo.png'; 

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#050505] text-[#a0a0a0] font-sans relative overflow-hidden">
      
      {/* Grid de Fundo Sutil (Versão Escura) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Pré-Footer Destaque (Corporate Banner) */}
      <div className="relative z-10 bg-gradient-to-r from-[#00A859] to-[#007a41] py-8 border-y border-white/10 shadow-[0_0_30px_rgba(0,168,89,0.2)]">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-white">
            <ShieldCheck size={48} weight="duotone" className="opacity-90" />
            <div>
              <h4 className="text-[1.3rem] font-black uppercase tracking-wide mb-1">Precisa de laudo técnico urgente?</h4>
              <p className="text-white/80 text-[0.95rem] m-0 font-medium">Nossa equipe está pronta para atuar e emitir a documentação exigida.</p>
            </div>
          </div>
          <a href="https://api.whatsapp.com/send/?phone=5564992886851" target="_blank" rel="noopener noreferrer" className="shrink-0 bg-white text-[#00A859] px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-gray-100 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
            Falar com Especialista
          </a>
        </div>
      </div>

      {/* Footer Principal */}
      <div className="max-w-[1280px] mx-auto px-6 pt-[80px] pb-[60px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr] gap-[60px] lg:gap-[80px]">
          
          {/* Coluna 1: Marca e Redes */}
          <div className="flex flex-col items-start fade-in-up">
            <img src={logoImg} alt="Inset Lar" className="h-[60px] mb-[30px]" />
            <p className="mb-[30px] leading-relaxed text-[1rem] text-gray-400 max-w-sm font-medium">
              Com mais de 25 anos de expertise, a Inset Lar é a parceira definitiva em controle de pragas e desentupimento para indústrias, comércios e residências no estado de Goiás.
            </p>
            <div className="flex gap-[15px]">
              <a href="https://www.facebook.com/INSERTLAR?mibextid=ZbWKwL" target="_blank" aria-label="Facebook" rel="noopener noreferrer" className="w-[50px] h-[50px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#FF7600] hover:border-transparent hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,118,0,0.3)] transition-all duration-300">
                  <FacebookLogo size={24} weight="fill" />
              </a>
              <a href="https://www.instagram.com/insetlarcaldasnovas/" target="_blank" aria-label="Instagram" rel="noopener noreferrer" className="w-[50px] h-[50px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#FF7600] hover:border-transparent hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,118,0,0.3)] transition-all duration-300">
                  <InstagramLogo size={24} weight="fill" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="fade-in-up delay-100">
            <h3 className="text-white mb-[30px] font-black text-[1.1rem] uppercase tracking-widest relative inline-block">
              Navegação
              <span className="absolute -bottom-2 left-0 w-1/2 h-[3px] bg-gradient-to-r from-[#00A859] to-transparent rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#home" className="text-gray-400 font-medium hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2"><CaretRight size={14} weight="bold" className="text-[#00A859]" /> Início</a></li>
              <li><a href="#servicos" className="text-gray-400 font-medium hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2"><CaretRight size={14} weight="bold" className="text-[#00A859]" /> Nossos Serviços</a></li>
              <li><a href="#sobre" className="text-gray-400 font-medium hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2"><CaretRight size={14} weight="bold" className="text-[#00A859]" /> Quem Somos</a></li>
              <li><a href="https://api.whatsapp.com/send/?phone=5564992886851" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-medium hover:text-[#FF7600] hover:translate-x-2 transition-all duration-300 flex items-center gap-2"><CaretRight size={14} weight="bold" className="text-[#FF7600]" /> Solicitar Orçamento</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contatos em Box */}
          <div className="fade-in-up delay-200">
            <h3 className="text-white mb-[30px] font-black text-[1.1rem] uppercase tracking-widest relative inline-block">
              Fale Conosco
              <span className="absolute -bottom-2 left-0 w-1/2 h-[3px] bg-gradient-to-r from-[#FF7600] to-transparent rounded-full"></span>
            </h3>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-[15px] p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00A859]/50 transition-colors">
                <div className="mt-1 bg-[#00A859]/20 p-2 rounded-xl">
                  <Phone size={24} weight="fill" className="text-[#00A859]" />
                </div>
                <div>
                  <strong className="text-white block mb-1 text-[0.95rem] tracking-wide">Telefone Fixo</strong>
                  <span className="text-gray-400">(64) 3455-4400</span>
                </div>
              </div>

              <div className="flex items-start gap-[15px] p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF7600]/50 transition-colors">
                <div className="mt-1 bg-[#FF7600]/20 p-2 rounded-xl">
                  <WhatsappLogo size={24} weight="fill" className="text-[#FF7600]" />
                </div>
                <div>
                  <strong className="text-white block mb-1 text-[0.95rem] tracking-wide">Plantão 24h</strong>
                  <a href="https://api.whatsapp.com/send/?phone=5564992886851" target="_blank" rel="noopener noreferrer" className="text-[#00A859] hover:text-[#FF7600] font-bold transition-colors">
                    (64) 99288-6851
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-[15px] p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="mt-1 bg-white/10 p-2 rounded-xl">
                  <MapPin size={24} weight="fill" className="text-white" />
                </div>
                <div>
                  <strong className="text-white block mb-1 text-[0.95rem] tracking-wide">Endereço</strong>
                  <span className="text-gray-400 text-[0.9rem] leading-relaxed block">
                    R. Machado de Assis, S/N<br/>Termal, Caldas Novas - GO
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer Bottom (Assinatura) */}
      <div className="bg-black py-[25px] border-t border-white/10 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.85rem] font-medium">
          <p className="m-0 text-gray-500">© {new Date().getFullYear()} Inset Lar. Todos os direitos reservados.</p>
          <p className="m-0 text-gray-500">
            Desenvolvido por <a href="https://www.instagram.com/optima_sistemas" target="_blank" rel="noopener noreferrer" className="text-[#FF7600] font-bold uppercase tracking-widest ml-1 hover:text-white transition-colors">Optima Sistemas</a>
          </p>
        </div>
      </div>
    </footer>
  )
}