import { MapPin, Clock, Phone } from '@phosphor-icons/react';

export default function Location() {
  return (
    <section 
      className="relative py-[80px] md:py-[140px] bg-white overflow-hidden"
      itemScope 
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Grid de Fundo Sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative z-10 fade-in-up">
        
        {/* CONTAINER MESTRE (Flex no mobile, Absoluto no desktop) */}
        <div className="w-full flex flex-col md:block md:h-[680px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.15)] border-[6px] md:border-[8px] border-white bg-white relative">
          
          {/* MAPA COM COORDENADAS EXATAS */}
          <div className="h-[300px] sm:h-[400px] md:h-full md:absolute md:inset-0 bg-gray-200">
            <iframe 
              src="https://www.google.com/maps?q=-17.7445458,-48.6294696&hl=pt-BR&z=17&output=embed"
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Inset Lar Dedetizadora e Desentupidora - Caldas Novas"
              className="contrast-[1.05] grayscale-[20%]"
            ></iframe>
          </div>

          {/* CARD INSTITUCIONAL */}
          <div className="relative md:absolute md:top-14 md:left-14 md:w-[440px] bg-white/95 md:backdrop-blur-xl p-6 md:p-10 md:rounded-2xl md:shadow-2xl border-t border-gray-100 md:border md:border-white/50 z-10">
            
            <h3 className="text-[1.6rem] md:text-[1.8rem] font-black text-[#111] mb-6 md:mb-8 leading-tight uppercase tracking-tighter">
              Central <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A859] to-[#007a41]">Inset Lar</span>
            </h3>
            
            <div className="flex flex-col gap-5 md:gap-6">
              
              {/* ENDEREÇO */}
              <div className="flex gap-4 group" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <div className="w-[45px] h-[45px] rounded-full bg-[#f8fafc] border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#00A859] transition-colors duration-300 shadow-sm">
                  <MapPin size={22} weight="duotone" className="text-[#00A859] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <strong className="text-[#111] block mb-1 text-[0.95rem] font-bold uppercase tracking-wider">
                    Sede Operacional
                  </strong>
                  <p className="text-[#555] text-[0.9rem] md:text-[0.95rem] leading-relaxed m-0 font-medium">
                    <span itemProp="streetAddress">
                      R. Machado de Assis, S/N – Quadra 07, Lote 22
                    </span>
                    <br/>
                    <span itemProp="addressLocality">Termal, Caldas Novas</span> – 
                    <span itemProp="addressRegion"> GO</span>
                    <br/>
                    CEP: <span itemProp="postalCode">75680-074</span>
                  </p>
                  <a 
                    href="https://www.google.com/maps/place/Inset+Lar+Dedetizadora+e+Desentupidora/@-17.7445458,-48.6294696,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 md:mt-3 text-[#00A859] font-bold hover:underline text-[0.9rem]"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* HORÁRIO */}
              <div className="flex gap-4 group">
                <div className="w-[45px] h-[45px] rounded-full bg-[#f8fafc] border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#FF7600] transition-colors duration-300 shadow-sm">
                  <Clock size={22} weight="duotone" className="text-[#FF7600] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <strong className="text-[#111] block mb-1 text-[0.95rem] font-bold uppercase tracking-wider">
                    Atendimento
                  </strong>
                  <p className="text-[#555] text-[0.9rem] md:text-[0.95rem] m-0 font-medium">
                    Seg a Sex: 08:00 - 18:00
                  </p>
                  <p className="text-[#555] text-[0.9rem] md:text-[0.95rem] m-0 mb-2 font-medium">
                    Sáb: 08:00 - 12:00
                  </p>
                  <span className="inline-block bg-red-50 border border-red-100 text-red-600 px-3 py-1 rounded-full text-[0.7rem] font-bold tracking-widest uppercase shadow-sm">
                    Plantão 24h Disponível
                  </span>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* TELEFONES */}
              <div className="flex gap-4 group">
                <div className="w-[45px] h-[45px] rounded-full bg-[#f8fafc] border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#00A859] transition-colors duration-300 shadow-sm">
                  <Phone size={22} weight="duotone" className="text-[#00A859] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <strong className="text-[#111] block mb-1 text-[0.95rem] font-bold uppercase tracking-wider">
                    Linha Direta
                  </strong>
                  <p className="text-[#555] text-[0.95rem] font-medium m-0" itemProp="telephone">
                    (64) 3455-4400
                  </p>
                  <p className="text-[#00A859] text-[1.05rem] font-black m-0 mt-1">
                    (64) 99288-6851
                  </p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}