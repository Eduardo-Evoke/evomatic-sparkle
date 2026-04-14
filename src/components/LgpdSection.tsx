import {
  ShieldCheck, FileText, Lock, Eye, TrendingUp, AlertTriangle,
  DollarSign, Gavel, ChevronRight, Timer, ExternalLink, Skull, Scale
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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

/* ── Data ── */
const phases = [
  { number: "01", icon: ShieldCheck, title: "Diagnóstico e Mapeamento", desc: "Análise completa, mapeamento de dados e identificação de riscos." },
  { number: "02", icon: FileText, title: "Políticas e Base Legal", desc: "Bases legais, políticas de privacidade e governança." },
  { number: "03", icon: Lock, title: "Implementação e Segurança", desc: "Controles técnicos, consentimento e treinamento." },
  { number: "04", icon: Eye, title: "Monitoramento Contínuo", desc: "Auditoria, plano de incidentes e melhoria contínua." },
];

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

const LgpdSection = () => {
  const [activePhase, setActivePhase] = useState(-1);
  const [activeCase, setActiveCase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { ref: goodNewsRef, isVisible: goodNewsVisible } = useScrollReveal({ threshold: 0.3 });

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActiveCase((p) => (p + 1) % cases.length), 5000);
    return () => clearInterval(id);
  }, []);

  const c0 = useCountUp(719, 2000, isVisible);
  const c1 = useCountUp(50, 1800, isVisible);
  const c2 = useCountUp(299, 2200, isVisible);
  const c3 = useCountUp(2115, 2500, isVisible);

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="py-20 px-6 bg-background">
      {/* Watermarks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Padlock */}
          <svg className="absolute -right-16 -bottom-10 w-[400px] h-[400px] text-white opacity-[0.03] rotate-[10deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /><circle cx="12" cy="16" r="1" />
          </svg>
          {/* Shield check */}
          <svg className="absolute -left-20 -top-10 w-[500px] h-[500px] text-white opacity-[0.02] rotate-[-8deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.4">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
          </svg>
          {/* Coins / dollar */}
          <svg className="absolute right-1/4 top-10 w-[300px] h-[300px] text-white opacity-[0.02] rotate-[15deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          {/* Small padlock */}
          <svg className="absolute left-1/3 bottom-5 w-[200px] h-[200px] text-white opacity-[0.02] rotate-[-15deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /><circle cx="12" cy="16" r="1" />
          </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ═══ TITLE ═══ */}
        <div className="text-center mb-14" style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}>
        </div>

        {/* ═══ 1. NÚMEROS ═══ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {[
            { icon: DollarSign, val: `R$ ${(c0 / 100).toFixed(2)} mi`, label: "Custo médio de vazamento", src: "IBM Report 2025" },
            { icon: AlertTriangle, val: `R$ ${c1} mi`, label: "Multa máxima por infração", src: "Lei 13.709/2018", highlight: true },
            { icon: Timer, val: `${c2} dias`, label: "Tempo médio para detectar e conter um vazamento", src: "IBM Report 2025" },
            { icon: TrendingUp, val: c3.toLocaleString("pt-BR"), label: "Fiscalizações ANPD em 2024", src: "ANPD" },
          ].map((s, i) => (
            <div key={i} className={`relative rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default overflow-hidden backdrop-blur-md ${
              s.highlight
                ? "bg-[#cc0a30] border-[#cc0a30] text-white"
                : "bg-white/[0.06] border-white/10 text-foreground"
            }`}>
              <s.icon className={`w-5 h-5 mb-3 ${s.highlight ? "text-white/70" : "text-[#cc0a30]"}`} />
              <span className={`block text-2xl lg:text-3xl font-black leading-none mb-1 tabular-nums ${
                s.highlight ? "text-white" : "text-foreground"
              }`}>{s.val}</span>
              <span className={`block text-xs leading-snug mb-2 ${s.highlight ? "text-white/80" : "text-muted-foreground"}`}>{s.label}</span>
              <span className={`text-[10px] ${s.highlight ? "text-white/50" : "text-muted-foreground"}`}>{s.src}</span>
            </div>
          ))}
        </div>


        {/* ═══ 2. BLOCO DE CONSEQUÊNCIA ═══ */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Skull, title: "Publicização da infração", desc: "Sua empresa exposta publicamente por descumprir a LGPD." },
            { icon: Scale, title: "Indenização automática", desc: "Justiça entende que vazamento já gera dano moral — sem precisar provar prejuízo." },
            { icon: AlertTriangle, title: "Bloqueio de dados", desc: "ANPD pode suspender tratamento de dados imediatamente." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl p-4 border border-white/10 bg-white/[0.06] backdrop-blur-md" style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(25px)",
              transition: `opacity 0.5s ease-out ${0.3 + i * 0.15}s, transform 0.5s ease-out ${0.3 + i * 0.15}s`,
            }}>
              <div className="w-9 h-9 rounded-lg bg-[#cc0a30]/20 flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-[#cc0a30]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ═══ 3. CASOS REAIS ═══ */}
        <div className="mb-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cases.map((c, i) => (
              <a
                key={i}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/[0.06] backdrop-blur-md rounded-2xl border border-white/10 p-5 hover:border-[#cc0a30]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Red top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#cc0a30] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{c.flag}</span>
                  <span className="text-[10px] font-bold text-[#cc0a30] uppercase tracking-wider">{c.country}</span>
                </div>

                <h4 className="text-sm font-bold text-foreground leading-snug mb-2 group-hover:text-[#cc0a30] transition-colors min-h-[40px]">
                  {c.title}
                </h4>

                <p className="text-[11px] text-muted-foreground leading-relaxed mb-4">{c.detail}</p>

                {/* BIG FINE */}
                <div className="bg-[#cc0a30]/10 rounded-xl px-4 py-3 mb-3 border border-[#cc0a30]/20">
                  <span className="block text-2xl font-black text-[#cc0a30] leading-none">{c.fine}</span>
                  <span className="text-[10px] text-[#cc0a30]/60">em multas e indenizações</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-muted-foreground group-hover:text-[#cc0a30] transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  <span>Ver notícia · {c.source}</span>
                </div>
              </a>
            ))}
          </div>
        </div>


        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2">
            <Gavel className="w-5 h-5 text-[#cc0a30]" />
            <h3 className="text-lg font-bold text-foreground">Já aconteceu. Pode acontecer com você.</h3>
          </div>
        </div>
      </div>
      </div>

      {/* ═══ SOLUÇÃO ═══ */}
      <div className="pt-0 pb-20 px-6 relative overflow-hidden bg-background">
        {/* 3D geometric background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Padlock */}
          <svg className="absolute -right-16 -bottom-10 w-[400px] h-[400px] text-white opacity-[0.03] rotate-[10deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /><circle cx="12" cy="16" r="1" />
          </svg>
          {/* Shield check */}
          <svg className="absolute -left-20 -top-10 w-[500px] h-[500px] text-white opacity-[0.02] rotate-[-8deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.4">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
          </svg>
          {/* Coins / dollar */}
          <svg className="absolute right-1/4 top-10 w-[300px] h-[300px] text-white opacity-[0.02] rotate-[15deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          {/* Small padlock */}
          <svg className="absolute left-1/3 bottom-5 w-[200px] h-[200px] text-white opacity-[0.02] rotate-[-15deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /><circle cx="12" cy="16" r="1" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div
          ref={goodNewsRef}
          className="text-center mb-16"
          style={{
            opacity: goodNewsVisible ? 1 : 0,
            transform: goodNewsVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.92)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <h3 className="text-3xl font-extrabold leading-tight mb-2 text-foreground md:text-5xl">
            A boa notícia é: você pode <span className="text-[#cc0a30]">evitar</span> esse cenário.
          </h3>
          <p className="text-sm md:text-base max-w-2xl mx-auto text-muted-foreground">
            Estruturamos toda a adequação à LGPD para eliminar riscos, multas e incidentes.
          </p>
        </div>

        {/* Desktop: Benefits card + Timeline */}
        <div className="hidden lg:grid grid-cols-[420px_1fr] gap-6 items-start">
          {/* Left: Benefits card */}
          <div className="bg-white/[0.06] backdrop-blur-md rounded-2xl border border-white/10 p-7 -ml-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#cc0a30]/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#cc0a30]" />
              </div>
              <h4 className="text-xl font-extrabold leading-tight text-foreground">Adequação completa à LGPD</h4>
            </div>

            <div className="space-y-4 mb-7">
              {[
                "Proteja os dados e a reputação da sua empresa",
                "Atenda às exigências da ANPD",
                "Reduza riscos jurídicos e operacionais",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#cc0a30]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronRight className="w-3 h-3 text-[#cc0a30]" />
                  </div>
                  <span className="text-sm leading-snug text-foreground">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <a
                href="#contato"
                className="inline-block text-center bg-[#cc0a30] hover:bg-[#b0092a] text-white font-bold text-sm py-3.5 px-10 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(205,10,49,0.4)] mb-2"
              >
                Solicitar diagnóstico LGPD
              </a>
            </div>
            <p className="text-[11px] text-white/30 text-center">Diagnóstico completo por especialistas em LGPD</p>
          </div>

          {/* Right: Timeline */}
          <div className="relative" onMouseLeave={() => setActivePhase(-1)}>
            <div className="relative" style={{ height: "380px" }}>
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1.5 z-0">
                <div className="absolute inset-0 bg-[#cc0a30]/20 rounded-full" />
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#cc0a30] to-[#ff2a4a] rounded-full transition-all duration-500 ease-out"
                  style={{ width: activePhase >= 0 ? `${(activePhase / (phases.length - 1)) * 80 + 10}%` : "0%" }}
                />
                <div className="absolute right-[-12px] top-1/2 -translate-y-1/2">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-[#cc0a30]" />
                </div>
              </div>

              {activePhase >= 0 && (
                <div
                  className="absolute top-1/2 -translate-y-1/2 z-30 pointer-events-none transition-all duration-500 ease-out"
                  style={{ left: `${(activePhase / (phases.length - 1)) * 80 + 10}%`, marginLeft: "-10px" }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#cc0a30] shadow-[0_0_20px_rgba(205,10,49,0.7)]">
                    <div className="w-5 h-5 rounded-full bg-[#ff2a4a] animate-ping opacity-40" />
                  </div>
                </div>
              )}

              {phases.map((phase, i) => {
                const isTop = i % 2 === 0;
                const left = (i / (phases.length - 1)) * 80 + 10;
                return (
                  <div key={phase.number} className="absolute z-10" style={{ left: `${left}%`, top: isTop ? "0" : "auto", bottom: isTop ? "auto" : "0", transform: "translateX(-50%)", width: "230px", height: "auto" }}>
                    <div className="text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: isTop ? "flex-end" : "flex-start", ...(isTop ? {} : { flexDirection: "column-reverse" as const }) }}>
                      <div onMouseEnter={() => setActivePhase(i)} className={`${isTop ? "mb-3" : "mb-0 mt-3"} rounded-xl border border-white/10 px-4 py-3 shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(205,10,49,0.3)] hover:border-[#cc0a30]/50 cursor-pointer flex flex-col justify-center backdrop-blur-sm bg-[#1a1a2e]`}>
                        <h3 className="text-sm font-bold text-white leading-tight mb-1">{phase.title}</h3>
                        <p className="text-[11px] text-white/50 leading-relaxed">{phase.desc}</p>
                      </div>
                      <div className={`w-px h-6 bg-gradient-to-${isTop ? "b" : "t"} from-[#cc0a30]/60 to-transparent`} />
                      <div className="relative cursor-pointer" onMouseEnter={() => setActivePhase(i)}>
                        <div className={`w-14 h-14 rounded-full border-[3px] bg-[#1a1a2e] flex items-center justify-center shadow-md transition-all duration-300 ${activePhase >= i ? "border-[#cc0a30] scale-110 shadow-[0_0_20px_rgba(205,10,49,0.3)]" : "border-[#cc0a30]/40"}`}>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${activePhase >= i ? "bg-[#cc0a30] text-white" : "bg-[#cc0a30]/10"}`}>
                            <span className={`text-sm font-bold transition-colors duration-300 ${activePhase >= i ? "text-white" : "text-[#cc0a30]"}`}>{phase.number}</span>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="bg-white/[0.06] backdrop-blur-md rounded-2xl border border-white/10 p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#cc0a30]/20 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-[#cc0a30]" />
              </div>
              <h4 className="text-lg font-extrabold text-white">Evite multas de até R$ 50 milhões</h4>
            </div>
            <div className="space-y-3 mb-5">
              {[
                "Proteja os dados e a reputação da sua empresa",
                "Atenda às exigências da ANPD",
                "Reduza riscos jurídicos e operacionais",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#cc0a30]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronRight className="w-2.5 h-2.5 text-[#cc0a30]" />
                  </div>
                  <span className="text-sm text-white/70">{text}</span>
                </div>
              ))}
            </div>
            <a href="#contato" className="block w-full text-center bg-[#cc0a30] hover:bg-[#b0092a] text-white font-bold text-sm py-3 rounded-xl transition-all">
              Solicitar diagnóstico LGPD
            </a>
          </div>

          <div className="space-y-4">
            {phases.map((phase, i) => (
              <div key={phase.number} className="relative">
                {i < phases.length - 1 && <div className="absolute left-[22px] top-[60px] bottom-[-16px] w-0.5 bg-gradient-to-b from-[#cc0a30] to-[#cc0a30]/20" />}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#cc0a30] text-white flex items-center justify-center text-sm font-bold shrink-0 z-10">{phase.number}</div>
                  <div className="flex-1 bg-white/[0.08] rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#cc0a30]/20 flex items-center justify-center shrink-0">
                        <phase.icon className="w-4 h-4 text-[#cc0a30]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">{phase.title}</h3>
                        <p className="text-xs text-white/50 mt-1 leading-relaxed">{phase.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default LgpdSection;
