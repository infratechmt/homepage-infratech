import { useMemo } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Instagram } from "lucide-react";
import WebGLBackground from "./WebGLBackground";

const WHATSAPP_PHONE = "5565933004215"; // <-- troque para seu número (sem +)
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Infratech e quero saber mais sobre Starlink/Internet."
);

export default function InfratechLanding() {
  const waLink = useMemo(() => `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MESSAGE}`, []);
  const igLink = "https://www.instagram.com/infratechmt/";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <WebGLBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />

      {/* Conteúdo */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="mx-auto max-w-3xl text-center bg-black/50 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
          >
            Infratech
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg md:text-2xl text-white/90"
          >
            Internet via satélite, Starlink e soluções de conectividade. Atendimento rápido e <strong>suporte 24h no WhatsApp</strong>.
          </motion.p>

          {/* Bloco de explicação Starlink (início do site) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 text-left mx-auto max-w-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-semibold">O que é Starlink?</h2>
            <p className="mt-3 text-white/85 leading-relaxed">
              <strong>Starlink é uma internet que vem do espaço.</strong> Ela funciona por meio de satélites que ficam girando ao redor da Terra e mandam o sinal direto para uma antena especial que você coloca na sua casa, empresa ou fazenda. Isso significa que você pode ter internet <strong>mesmo em lugares onde não chega cabo nem sinal de celular</strong>. É rápida, confiável e funciona em praticamente qualquer lugar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex">
              <button className="rounded-2xl px-6 py-3 text-lg shadow-xl bg-green-500 hover:bg-green-600 transition-colors inline-flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </button>
            </a>

            <a href="#sobre" className="inline-flex">
              <button className="rounded-2xl px-6 py-3 text-lg shadow-xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors">
                Saber mais
              </button>
            </a>

            <a href={igLink} target="_blank" rel="noreferrer" className="inline-flex">
              <button className="rounded-2xl px-6 py-3 text-lg shadow-xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors inline-flex items-center">
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </button>
            </a>
          </motion.div>

          <motion.div
            id="sobre"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 text-left"
          >
            {[
              {
                title: "Instalação ágil",
                desc: "Implantação rápida e segura para residências, eventos e área rural.",
              },
              {
                title: "Aluguel e venda de antenas",
                desc: "Planos flexíveis por mês ou por dia e também vendemos antenas Starlink.",
              },
              {
                title: "Suporte 24h no WhatsApp",
                desc: "Atendimento humano, quando você precisar.",
              },
            ].map((c, i) => (
              <div key={i} className="rounded-2xl bg-white/5 p-6 backdrop-blur-md shadow-lg">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-white/80">{c.desc}</p>
              </div>
            ))}
          </motion.div>

          <p className="mt-16 text-sm text-white/60">
            © {new Date().getFullYear()} Infratech. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Botão flutuante do WhatsApp (fixo em todas as páginas) */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp (Suporte 24 horas)"
        className="fixed bottom-4 right-4 z-50"
      >
        <div className="relative">
          <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
            <MessageCircle className="h-7 w-7" />
          </div>
          <span className="absolute -top-2 -left-2 text-[10px] md:text-xs bg-white/90 text-green-700 rounded-full px-2 py-0.5 font-semibold shadow">
            24h
          </span>
        </div>
      </a>
    </div>
  );
}
