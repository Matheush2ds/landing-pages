import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ShieldCheck, Trophy } from "lucide-react";

const backgroundImages = [
  "/fachada.webp",
  "/internacarro.webp",
  "/polimentof.webp",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Slider automático
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Preload imagens
  useEffect(() => {
    backgroundImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleConversion = () => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "conversion", {
        send_to: "AW-10962802224/",
      });
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-black pt-[130px] md:pt-[100px]">

      {/* Background slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${backgroundImages[index]}')` }}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] z-10 opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>

      {/* Conteúdo */}
      <div className="container-custom relative z-20 w-full flex flex-col items-center md:items-start text-center md:text-left">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >

          {/* Título */}
          <h1 className="text-[2.5rem] md:text-[clamp(3.5rem,7vw,5.5rem)] leading-[0.95] mb-6 font-black tracking-tighter uppercase">
            Seu carro merece <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">
              Tratamento VIP
            </span>
          </h1>

          {/* Descrição */}
          <p className="text-lg md:text-xl text-[#D4D4D4] max-w-[600px] mb-10 font-medium leading-snug mx-auto md:mx-0 border-l-4 border-brand-yellow pl-4">
            Do som de alta fidelidade à proteção estética completa.
            Transformamos veículos em máquinas de luxo com{" "}
            <strong className="text-white">garantia absoluta</strong>.
          </p>

          {/* Botão */}
          <div className="flex flex-wrap gap-4 mb-8 w-full justify-center md:justify-start">

            <a
              href="https://wa.me/5562996628238?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full md:w-auto justify-center hover:scale-105 transition"
              onClick={handleConversion}
            >
              <MessageCircle size={20} />
              ORÇAMENTO RÁPIDO
            </a>

          </div>

          {/* Prova social */}
          <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-300 items-center md:items-start">

            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-brand-yellow" />
              Garantia de serviço
            </div>

            <div className="flex items-center gap-2">
              <Trophy size={18} className="text-brand-yellow" />
              Atendimento Personalizado
            </div>

          </div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-2xl opacity-70"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ↓
      </motion.div>

    </section>
  );
};

export default Hero;