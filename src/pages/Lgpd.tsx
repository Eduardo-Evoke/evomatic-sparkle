import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import LgpdBackground from "@/components/LgpdBackground";

import lgpdHero from "@/assets/lgpd-hero.jpg";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  ShieldCheck, FileText, Lock, Eye, TrendingUp, AlertTriangle,
  DollarSign, Timer, ExternalLink, Skull, Scale, ArrowRight,
  ChevronRight, CheckCircle2, AlertOctagon, Users, Building
} from "lucide-react";

/* ── Scroll Reveal Hook ── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Animated Element ── */
const Reveal = ({ children, delay = 0, direction = "up", className = "" }: {
  children: React.ReactNode; delay?: number; direction?: "up" | "down" | "left" | "right"; className?: string;
}) => {
  const { ref, visible } = useReveal(0.1);
  const transforms: Record<string, string> = {
    up: "translateY(40px)", down: "translateY(-40px)",
    left: "translateX(-40px)", right: "translateX(40px)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0)" : transforms[direction],
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/* ── Animated Counter ── */
function useCountUp(end: number, duration = 1800, start: boolean) {
  const [count, setCount] = useState(0);
  const ran = useRef(false);
  useEffect(() => {
    if (!start || ran.current) return;
    ran.current = true;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [start, end, duration]);
  return count;
}

const cases = [
  {
    flag: "🇧🇷", country: "Brasil · 2023",
    title: "Meta condenada por vazamento de 15 milhões de brasileiros",
    fine: "R$ 20 mi", detail: "29ª Vara Cível de BH. Nome, telefone e e-mail expostos.",
    source: "Migalhas",
    url: "https://www.migalhas.com.br/quentes/393349/meta-e-condenada-a-pagar-r-20-mi-por-vazamento-de-dados-no-facebook",
  },
  {
    flag: "🇧🇷", country: "Brasil · 2024",
    title: "INSS obrigado a publicar sanção no app Meu INSS por 60 dias",
    fine: "Publicização", detail: "Incidente de segurança sem comunicação aos titulares. Dano reputacional massivo.",
    source: "ANPD · Confidata",
    url: "https://confidata.com.br/blog/mapa-sancoes-anpd-todos-casos-2026",
  },
  {
    flag: "🇧🇷", country: "Brasil · 2024",
    title: "Saúde de SC: 300 mil pessoas afetadas por vazamento de 4 GB",
    fine: "4 sanções", detail: "Exfiltração de dados sensíveis de saúde. Comunicação individual obrigatória.",
    source: "ANPD · Confidata",
    url: "https://confidata.com.br/blog/mapa-sancoes-anpd-todos-casos-2026",
  },
];

const phases = [
  { number: "01", icon: ShieldCheck, title: "Diagnóstico e Mapeamento", desc: "Análise completa do cenário atual, mapeamento de todos os dados pessoais tratados e identificação de riscos e vulnerabilidades." },
  { number: "02", icon: FileText, title: "Políticas e Base Legal", desc: "Definição das bases legais, criação de políticas de privacidade, termos de uso e estrutura de governança de dados." },
  { number: "03", icon: Lock, title: "Implementação e Segurança", desc: "Implantação de controles técnicos, gestão de consentimento, treinamento da equipe e adequação de processos." },
  { number: "04", icon: Eye, title: "Monitoramento Contínuo", desc: "Auditoria periódica, plano de resposta a incidentes e programa de melhoria contínua para manter a conformidade." },
];

const Lgpd = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.15 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const c0 = useCountUp(719, 2000, isVisible);
  const c1 = useCountUp(50, 1800, isVisible);
  const c2 = useCountUp(299, 2200, isVisible);
  const c3 = useCountUp(2115, 2500, isVisible);

  return (
    <main className="overflow-hidden relative">
      <LgpdBackground />
      <Header />
      <div className="relative z-10">

      {/* ═══ HERO — ALARME ═══ */}
      <section className="relative h-[60vh] flex items-center pt-[72px]">
        <img src={lgpdHero} alt="LGPD" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent opacity-100" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-b from-transparent via-background/40 via-40% to-background pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-20">
          <div className="max-w-2xl">
            <Reveal delay={0.1} direction="left">
              <span className="inline-flex items-center gap-2 text-primary text-base font-semibold mb-4 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 animate-pulse">
                <AlertOctagon className="w-4 h-4" />
                Sua empresa está em risco
              </span>
            </Reveal>
            <Reveal delay={0.3} direction="left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight mb-6">
                Multas de até <span className="text-primary">R$ 50 milhões</span> por infração à LGPD
              </h1>
            </Reveal>
            <Reveal delay={0.5} direction="left">
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-primary-foreground font-semibold">
                A ANPD já aplicou mais de 2.000 fiscalizações. Empresas que não se adequaram estão sendo 
                multadas, expostas publicamente e impedidas de tratar dados. Não espere ser a próxima.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ NÚMEROS DE ALARME ═══ */}
      <section className="py-12 px-6 relative" ref={statsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: DollarSign, val: "60%", label: "Das pequenas empresas fecham em até 6 meses após um vazamento de dados", src: "National Cyber Security Alliance" },
              { icon: AlertTriangle, val: `R$ ${c1} mi`, label: "Multa máxima por infração à LGPD", src: "Lei 13.709/2018", highlight: true },
              { icon: Timer, val: "1 a cada 39s", label: "Um ataque cibernético acontece no mundo", src: "University of Maryland" },
              { icon: TrendingUp, val: c3.toLocaleString("pt-BR"), label: "Fiscalizações da ANPD em 2024", src: "ANPD" },
            ].map((s, i) => (
              <div key={i} className={`rounded-2xl p-5 border backdrop-blur-md ${
                s.highlight
                  ? "bg-primary border-primary text-primary-foreground"
                  : "bg-card border-white/10 text-foreground"
              }`}>
                <s.icon className={`w-5 h-5 mb-3 ${s.highlight ? "text-primary-foreground/70" : "text-primary"}`} />
                <span className={`block text-2xl lg:text-3xl font-black leading-none mb-1 tabular-nums`}>{s.val}</span>
                <span className={`block text-sm leading-snug mb-2 font-bold ${s.highlight ? "text-primary-foreground" : "text-muted-foreground"}`}>{s.label}</span>
                <span className={`text-xs font-bold ${s.highlight ? "text-primary-foreground/50" : "text-muted-foreground"}`}>{s.src}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RISCOS / CONSEQUÊNCIAS ═══ */}
      <section className="py-12 px-6 relative overflow-hidden">
        {/* Textura corporativa sutil — linhas verticais finas */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, hsla(0,0%,100%,0.6) 0 1px, transparent 1px 80px)",
            maskImage: "linear-gradient(180deg, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage: "linear-gradient(180deg, transparent, black 20%, black 80%, transparent)",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal direction="up">
            <div className="mb-16 max-w-3xl">
              <span className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-primary mb-4 text-lg">
                <span className="w-8 h-px bg-primary" />
                Consequências
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground/90 leading-tight mb-4">
                O que acontece com quem <span className="text-primary">não se adequa</span>
              </h2>
              <p className="text-base md:text-lg text-primary-foreground font-semibold">
                As consequências vão muito além da multa financeira.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              { icon: Skull, title: "Publicização da infração", desc: "Sua empresa exposta publicamente pela ANPD. Dano reputacional irreversível com clientes e parceiros." },
              { icon: Scale, title: "Indenização automática", desc: "A Justiça entende que vazamento de dados já gera dano moral — sem necessidade de provar prejuízo." },
              { icon: AlertTriangle, title: "Bloqueio de dados", desc: "A ANPD pode suspender todo o tratamento de dados da sua empresa, paralisando operações." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.15} direction="up"><div className="backdrop-blur-sm border border-white/[0.08] rounded-2xl bg-background/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_0_30px_hsla(348,91%,42%,0.3),0_0_60px_hsla(348,91%,42%,0.15),inset_0_1px_0_hsla(348,91%,42%,0.2)] transition-all duration-300 p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-xl">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-bold">{item.desc}</p>
                </div>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROVA SOCIAL — CASOS REAIS ═══ */}
      <section className="py-12 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-3 text-primary md:text-5xl">
                Já aconteceu. Pode acontecer com você.
              </h2>
              <p className="max-w-2xl mx-auto text-base md:text-lg font-semibold text-primary-foreground">
                Casos reais de empresas e órgãos que sofreram sanções por descumprir a LGPD.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <Reveal key={i} delay={i * 0.2} direction="up">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full bg-card rounded-2xl border border-white/10 overflow-hidden hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Barra superior */}
                  <div className="h-1 bg-primary/20 group-hover:bg-primary transition-colors duration-300" />

                  <div className="flex flex-col flex-1 p-6">
                    {/* Cabeçalho: flag + país */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl leading-none">{c.flag}</span>
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{c.country}</span>
                    </div>

                    {/* Título */}
                    <h4 className="text-lg font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                      {c.title}
                    </h4>

                    {/* Descrição */}
                    <p className="text-base text-muted-foreground leading-relaxed mb-5 flex-1 font-semibold">{c.detail}</p>

                    {/* Valor da multa */}
                    <div className="rounded-xl px-5 py-4 mb-4 border border-primary/20 bg-[sidebar-primary-foreground] bg-slate-50">
                      <span className="block text-3xl font-black text-primary leading-none mb-1">{c.fine}</span>
                      <span className="text-sm text-primary/60">em multas e sanções</span>
                    </div>

                    {/* Link da fonte */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-semibold">Ver notícia · {c.source}</span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NOSSA SOLUÇÃO — O QUE FAZEMOS ═══ */}
      <section className="py-12 px-6 relative overflow-hidden">
        {/* Textura corporativa sutil — linhas verticais finas */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, hsla(0,0%,100%,0.6) 0 1px, transparent 1px 80px)",
            maskImage: "linear-gradient(180deg, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage: "linear-gradient(180deg, transparent, black 20%, black 80%, transparent)",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal direction="up">
            <div className="mb-16 max-w-3xl">
              <span className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-primary mb-4 text-lg">
                <span className="w-8 h-px bg-primary" />
                A solução
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground/90 leading-tight mb-4">
                A boa notícia: você pode <span className="text-primary">evitar</span> tudo isso.
              </h2>
              <p className="text-base md:text-lg text-primary-foreground font-semibold">
                Estruturamos toda a adequação à LGPD da sua empresa, do diagnóstico ao monitoramento contínuo.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Card resumo */}
            <Reveal delay={0} direction="left"><div className="backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 bg-background/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_0_30px_hsla(348,91%,42%,0.3),0_0_60px_hsla(348,91%,42%,0.15),inset_0_1px_0_hsla(348,91%,42%,0.2)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Adequação completa à LGPD</h3>
              </div>
              <div className="space-y-4 mb-8 text-base">
                {[
                  { icon: Users, text: "Proteja os dados dos seus clientes e colaboradores" },
                  { icon: Scale, text: "Atenda às exigências da ANPD e evite multas" },
                  { icon: Building, text: "Ganhe credibilidade com parceiros e fornecedores" },
                  { icon: Lock, text: "Reduza riscos jurídicos e operacionais" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span className="text-base text-foreground/80 font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
              <a
                href="/#contato"
                className="inline-flex items-center gap-2 w-full justify-center bg-primary hover:brightness-110 text-primary-foreground font-bold text-base py-3.5 rounded-xl transition-all duration-300 animate-[soft-pulse_2.5s_ease-in-out_infinite]"
              >
                Solicitar diagnóstico LGPD
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-muted-foreground text-center mt-3 font-semibold text-sm">Diagnóstico completo por especialistas em LGPD</p>
            </div></Reveal>

            {/* Fases */}
            <div className="space-y-4">
              {phases.map((phase, i) => (
                <Reveal key={phase.number} delay={i * 0.15} direction="right"><div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(184,10,45,0.4)] transition-all duration-300">
                    {phase.number}
                  </div>
                  <div className="flex-1 bg-card rounded-xl p-5 border border-white/10 group-hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                        <phase.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1 text-xl">{phase.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-bold">{phase.desc}</p>
                      </div>
                    </div>
                  </div>
                </div></Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>


      <FooterSection />
      <WhatsAppButton />
    </main>
  );
};

export default Lgpd;
