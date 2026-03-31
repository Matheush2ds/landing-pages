import { WhatsappLogo, Phone, MapPin, CaretRight, FacebookLogo, InstagramLogo, ShieldCheck } from '@phosphor-icons/react';
import logoImg from '../assets/logo.png'; 

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#0B3220] text-white/70 font-sans relative overflow-hidden">
      
      {/* CTA topo */}
      <div className="relative z-10 bg-[#14472F] py-8 border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4 text-white">
            <ShieldCheck size={48} weight="duotone" className="text-[#8cd76a]" />
            <div>
              <h4 className="text-[1.3rem] font-bold tracking-wide mb-1">
                Precisa de laudo técnico urgente?
              </h4>
              <p className="text-white/80 text-[0.95rem] font-medium">
                Nossa equipe está pronta para atuar e emitir a documentação exigida.
              </p>
            </div>
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=5564992886851"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#00A859] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#008f4c] active:scale-95 transition"
          >
            Falar com Especialista
          </a>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-[1280px] mx-auto px-6 pt-[80px] pb-[60px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr] gap-[60px] lg:gap-[80px]">
          
          {/* Logo + social */}
          <div className="flex flex-col items-start fade-in-up">
            <img src={logoImg} alt="Inset Lar" className="h-[60px] mb-[30px]" />

            <p className="mb-[30px] leading-relaxed text-[1rem] text-white/70 max-w-sm font-medium">
              Com mais de 25 anos de expertise, a Inset Lar é a parceira definitiva em controle de pragas e desentupimento para indústrias, comércios e residências no estado de Goiás.
            </p>

            <div className="flex gap-[15px]">
              <a
                href="https://www.facebook.com/INSERTLAR?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[45px] h-[45px] rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#00A859] transition"
              >
                <FacebookLogo size={20} weight="fill" />
              </a>

              <a
                href="https://www.instagram.com/insetlarcaldasnovas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[45px] h-[45px] rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#00A859] transition"
              >
                <InstagramLogo size={20} weight="fill" />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div className="fade-in-up delay-100">
            <h3 className="text-white mb-[30px] font-bold text-[1.1rem] relative inline-block">
              Navegação
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-[#8cd76a] rounded-full"></span>
            </h3>

            <ul className="flex flex-col gap-4">
              <li>
                <a href="#home" className="text-white/70 hover:text-white flex items-center gap-2">
                  <CaretRight size={14} className="text-[#8cd76a]" /> Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/70 hover:text-white flex items-center gap-2">
                  <CaretRight size={14} className="text-[#8cd76a]" /> Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white/70 hover:text-white flex items-center gap-2">
                  <CaretRight size={14} className="text-[#8cd76a]" /> Quem Somos
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=5564992886851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white flex items-center gap-2"
                >
                  <CaretRight size={14} className="text-[#8cd76a]" /> Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="fade-in-up delay-200">
            <h3 className="text-white mb-[30px] font-bold text-[1.1rem] relative inline-block">
              Fale Conosco
              <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-[#8cd76a] rounded-full"></span>
            </h3>

            <div className="flex flex-col gap-4">

              <div className="flex gap-[15px] p-4 rounded-xl bg-white/5 border border-white/10">
                <Phone size={20} className="text-[#8cd76a]" />
                <div>
                  <strong className="text-white">Telefone</strong>
                  <span className="block text-white/70">(64) 3455-4400</span>
                </div>
              </div>

              <div className="flex gap-[15px] p-4 rounded-xl bg-white/5 border border-white/10">
                <WhatsappLogo size={20} className="text-[#8cd76a]" />
                <div>
                  <strong className="text-white">WhatsApp</strong>
                  <a
                    href="https://api.whatsapp.com/send/?phone=5564992886851"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#8cd76a] font-bold hover:text-white"
                  >
                    (64) 99288-6851
                  </a>
                </div>
              </div>

              <div className="flex gap-[15px] p-4 rounded-xl bg-white/5 border border-white/10">
                <MapPin size={20} className="text-[#8cd76a]" />
                <div>
                  <strong className="text-white">Endereço</strong>
                  <span className="block text-white/70 text-sm">
                    R. Machado de Assis, S/N<br />
                    Termal, Caldas Novas - GO
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Rodapé final */}
      <div className="bg-[#072416] py-[25px] border-t border-white/5 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.85rem]">
          
          <p className="text-white/50">
            © {new Date().getFullYear()} Inset Lar. Todos os direitos reservados.
          </p>

          <p className="text-white/50">
            Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/optima_sistemas?igsh=MWtrYThnZjFvNThwcA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8cd76a] font-bold ml-1 hover:text-white transition underline underline-offset-4"
            >
              Optima Sistemas
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}