import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Check,
  Home,
  Instagram,
  MapPin,
  MessageCircle,
  RadioTower,
  ShieldCheck,
  Zap,
} from "lucide-react";
import logo from "../assets/logo.svg";
import WebGLBackground from "./WebGLBackground";

const WHATSAPP_PHONE = "5565933004215";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Ola! Vim pelo site da Infratech e quero saber mais sobre Starlink/Internet."
);

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Precos", href: "#precos" },
  { label: "Contato", href: "#contato" },
];

const projects = [
  {
    icon: Home,
    title: "Internet residencial",
    desc: "Conectividade estavel para casas em areas urbanas, rurais e locais sem fibra.",
  },
  {
    icon: Building2,
    title: "Empresas e obras",
    desc: "Instalacao para operacoes que precisam de internet rapida, previsivel e com suporte.",
  },
  {
    icon: MapPin,
    title: "Fazendas e eventos",
    desc: "Projetos temporarios ou fixos para campo, eventos, alojamentos e pontos remotos.",
  },
];

const rentalPlans = [
  {
    name: "Starlink Fixa",
    description: "Para casas, empresas, fazendas, obras e pontos fixos de internet.",
    featured: true,
    periods: [
      { label: "1 dia", value: "R$ 80/dia" },
      { label: "2 dias", value: "R$ 70/dia" },
      { label: "3 dias", value: "R$ 50/dia" },
      { label: "Acima de 7 dias", value: "R$ 30/dia" },
    ],
    features: [
      "Voce escolhe o periodo de aluguel",
      "Recebe o equipamento Starlink pronto para uso",
      "Entrega e retirada feitas por nossos tecnicos",
    ],
  },
  {
    name: "Starlink Movel",
    description: "Para quem precisa de internet por diarias em deslocamentos ou eventos.",
    periods: [
      { label: "5 diarias", value: "R$ 80/dia" },
      { label: "10 diarias", value: "R$ 60/dia" },
      { label: "15 diarias", value: "R$ 50/dia" },
      { label: "20 diarias", value: "R$ 40/dia" },
    ],
    features: [
      "Pacotes por quantidade de diarias",
      "Equipamento liberado durante o periodo escolhido",
      "Entrega e retirada feitas por nossos tecnicos",
    ],
  },
];

export default function InfratechLanding() {
  const waLink = useMemo(() => `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MESSAGE}`, []);
  const igLink = "https://www.instagram.com/infratechmt/";

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      <WebGLBackground />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/80 via-black/55 to-black" />

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-black/65 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#inicio" className="flex items-center">
            <img src={logo} alt="Infra Tech" className="h-10 w-auto" />
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-green-600"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="inicio" className="flex min-h-screen items-center px-4 pb-16 pt-28 md:px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"
              >
                <RadioTower className="h-4 w-4" />
                Starlink, internet rural e conectividade profissional
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="mt-6 max-w-3xl text-5xl font-extrabold tracking-tight md:text-7xl"
              >
                INFRA TECH
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16 }}
                className="mt-5 max-w-2xl text-lg leading-relaxed text-white/82 md:text-2xl"
              >
                Internet via satelite para casas, empresas, fazendas, eventos e locais onde cabo
                ou sinal de celular nao resolvem.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#precos"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 shadow-xl shadow-cyan-300/20 transition hover:bg-cyan-200"
                >
                  Ver precos
                  <Zap className="h-5 w-5" />
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/16"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar com suporte
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="rounded-[28px] border border-white/10 bg-black/45 p-6 shadow-2xl backdrop-blur-xl"
            >
              <h2 className="text-2xl font-semibold">O que e Starlink?</h2>
              <p className="mt-4 leading-relaxed text-white/80">
                Starlink e uma internet que vem do espaco. Ela usa satelites para mandar sinal
                direto para uma antena instalada na sua casa, empresa, fazenda ou evento. Assim,
                voce consegue internet rapida mesmo em lugares sem cabo ou sinal de celular.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Instalacao agil e segura",
                  "Aluguel por dia ou por mes",
                  "Venda de antenas Starlink",
                  "Suporte 24h no WhatsApp",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-white/6 p-3">
                    <ShieldCheck className="h-5 w-5 text-cyan-300" />
                    <span className="text-white/86">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projetos" className="px-4 py-20 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Projetos
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                Conectividade para cada tipo de operacao.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45 }}
                    className="rounded-2xl border border-white/10 bg-white/7 p-6 backdrop-blur-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/14 text-cyan-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
                    <p className="mt-3 leading-relaxed text-white/72">{project.desc}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="precos" className="px-4 py-20 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  Tabela de precos
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                  Aluguel de Starlink por diaria.
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-white/72">
                  Escolha entre Starlink Fixa ou Starlink Movel. O valor final e calculado pelo
                  periodo contratado.
                </p>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/16"
              >
                Pedir orcamento
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {rentalPlans.map((plan) => (
                <motion.article
                  key={plan.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45 }}
                  className={`rounded-2xl border p-6 backdrop-blur-xl ${
                    plan.featured
                      ? "border-cyan-300/50 bg-cyan-300/12 shadow-2xl shadow-cyan-300/12"
                      : "border-white/10 bg-white/7"
                  }`}
                >
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-3 leading-relaxed text-white/72">{plan.description}</p>

                  <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                    {plan.periods.map((period) => (
                      <div
                        key={period.label}
                        className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-white/10 bg-black/20 px-4 py-3 last:border-b-0"
                      >
                        <span className="text-white/78">{period.label}</span>
                        <strong className="text-lg text-cyan-100">{period.value}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-white/86">
                        <Check className="h-5 w-5 text-cyan-300" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/7 p-5 backdrop-blur-xl">
              <h3 className="text-xl font-semibold">Observacoes importantes</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {[
                  "Entrega e retirada em locais especificos, conforme sua localizacao.",
                  "E necessario ter visibilidade para o ceu para instalar o equipamento.",
                  "O aluguel inclui equipamento e suporte tecnico durante o periodo contratado.",
                ].map((note) => (
                  <div key={note} className="flex gap-3 text-white/78">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="px-4 pb-28 pt-12 md:px-6">
          <div className="mx-auto max-w-6xl rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur-xl md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  Atendimento 24h
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Quer internet no seu local? Chame a Infratech.
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 font-bold text-white transition hover:bg-green-600"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
                <a
                  href={igLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/16"
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-12 max-w-6xl text-sm text-white/55">
            © {new Date().getFullYear()} Infratech. Todos os direitos reservados.
          </p>
        </section>
      </main>

      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp - suporte 24 horas"
        className="fixed bottom-4 right-4 z-50"
      >
        <div className="relative">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-105 md:h-16 md:w-16">
            <MessageCircle className="h-7 w-7" />
          </div>
          <span className="absolute -left-2 -top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-green-700 shadow md:text-xs">
            24h
          </span>
        </div>
      </a>
    </div>
  );
}
