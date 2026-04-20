import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

import SolutionsBackground from "@/components/SolutionsBackground";
import heroImg from "@/assets/suporte-ti-hero.jpg";
import { useRef, useState, useEffect } from "react";
import {
  Headset, Monitor, Clock, ArrowRight,
  Settings, Users, BarChart3, Wrench, Laptop,
  PhoneCall, Timer, Award, Zap
} from "lucide-react";

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

const Reveal = ({ children, delay = 0, direction = "up", className = "" }: {
  children: React.ReactNode; delay?: number; direction?: "up" | "down" | "left" | "right"; className?: string;
}) => {
  const { ref, visible } = useReveal(0.1);
  const transforms: Record<string, string> = {
    up: "translateY(40px)", down: "translateY(-40px)",
    left: "translateX(-40px)", right: "translateX(40px)",
  };
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translate(0)" : transforms[direction],
      transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
    }}>
      {children}
    </div>
  );
};

const glassCard = "backdrop-blur-sm border border-white/[0.08] rounded-2xl bg-background/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_0_30px_hsla(348,91%,42%,0.3),0_0_60px_hsla(348,91%,42%,0.15),inset_0_1px_0_hsla(348,91%,42%,0.2)] transition-all duration-300";

const diferenciais = [
  { icon: Clock, title: "Disponibilidade 24/7", desc: "Suporte técnico disponível 24 horas por dia, 7 dias por semana, incluindo feriados. Sua operação nunca para." },
  { icon: Timer, title: "SLA garantido por contrato", desc: "Tempo de resposta e resolução definidos em contrato, com indicadores claros e relatórios mensais de desempenho." },
  { icon: Headset, title: "Suporte remoto imediato", desc: "Acesso remoto seguro para resolver problemas em minutos, sem necessidade de deslocamento. Agilidade real." },
  { icon: Wrench, title: "Suporte presencial dedicado", desc: "Técnicos especializados vão até sua empresa quando necessário, com atendimento humanizado e resolutivo." },
  { icon: Settings, title: "Gestão completa de ativos", desc: "Inventário, controle de ciclo de vida, garantias e substituição de equipamentos — tudo gerenciado por nós." },
  { icon: Monitor, title: "Gestão de sistemas e licenças", desc: "Monitoramento, atualização e administração de todos os softwares e licenças da sua empresa." },
];

const comoFunciona = [
  { number: "01", icon: PhoneCall, title: "Abertura do chamado", desc: "Você abre o chamado por telefone, e-mail, WhatsApp ou portal. Resposta imediata conforme SLA." },
  { number: "02", icon: Laptop, title: "Diagnóstico e triagem", desc: "Nossa equipe classifica a prioridade e inicia o atendimento remoto ou presencial." },
  { number: "03", icon: Wrench, title: "Resolução e acompanhamento", desc: "Problema resolvido com documentação completa. Você acompanha tudo pelo portal." },
];

const SuporteGestaoTI = () => {
  return (
    <main className="overflow-hidden relative">
      <SolutionsBackground />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-[72px] z-10">
        <img src={heroImg} alt="Suporte e gestão de TI" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-20">
          <div className="max-w-2xl">
            <Reveal delay={0.3} direction="left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight mb-6">
                Sua TI funcionando com <span className="text-primary">excelência</span>, sem preocupações
              </h1>
            </Reveal>
            <Reveal delay={0.5} direction="left">
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-primary-foreground font-semibold">
                Suporte técnico presencial e remoto, gestão completa de ativos e sistemas, 
                SLA garantido por contrato e disponibilidade 24/7. Foque no seu negócio enquanto 
                nós cuidamos da sua tecnologia.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Wrapper dark suave com hierarquia entre seções */}
      <div className="relative z-10">
        {/* Transição suave do hero para a área de conteúdo */}
        <div
          className="h-16 relative z-10"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, hsl(220 10% 10%) 100%)",
          }}
        />

        <div className="relative">
          {/* Base elevada (um pouco mais clara que o background global para criar hierarquia) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, hsl(220 10% 10%) 0%, hsl(220 9% 12%) 50%, hsl(220 10% 10%) 100%)",
            }}
          />
          {/* Grid técnico ultra discreto */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(hsla(0,0%,100%,0.5) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,0.5) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse at 50% 40%, black 30%, transparent 80%)",
            }}
          />
          <div className="absolute top-40 -left-32 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[140px] pointer-events-none" />
          <div className="absolute bottom-20 -right-32 w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-[140px] pointer-events-none" />

          {/* Diferenciais */}
          <section className="py-12 px-6 relative">
            <div className="max-w-6xl mx-auto relative">
              <Reveal direction="up">
                <div className="mb-16 max-w-3xl">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                    <span className="w-8 h-px bg-primary" />
                    O que está incluso
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground/90 leading-tight mb-4">
                    Tudo o que sua TI precisa,{" "}
                    <span className="text-primary">em um só contrato</span>
                  </h2>
                  <p className="text-base md:text-lg text-foreground/60 font-medium">
                    Um serviço completo para que sua empresa tenha tecnologia funcionando
                    com estabilidade, segurança e performance.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
                {diferenciais.map((item, i) => (
                  <Reveal key={i} delay={i * 0.08} direction="up" className="h-full">
                    <div className="relative h-full bg-white/[0.03] border border-white/[0.06] rounded-xl pl-7 pr-6 py-7 backdrop-blur-sm shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-12px_rgba(0,0,0,0.4)] hover:border-primary/30 hover:bg-white/[0.05] hover:shadow-[0_4px_12px_rgba(184,10,45,0.15),0_20px_40px_-12px_rgba(184,10,45,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                      <span className="absolute left-0 top-4 bottom-4 w-[3px] bg-primary rounded-full group-hover:top-0 group-hover:bottom-0 transition-all duration-300" />
                      <div className="flex items-start gap-4 h-full">
                        <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                          <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg text-foreground/90 mb-1.5 leading-snug">
                            {item.title}
                          </h3>
                          <p className="leading-relaxed text-foreground/60 text-base font-medium">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* SLA — timeline visual */}
          <section className="py-12 px-6 relative">
            <div className="max-w-6xl mx-auto relative">
              <Reveal direction="up">
                <div className="mb-16 max-w-3xl">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                    <span className="w-8 h-px bg-primary" />
                    SLA garantido
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground/90 leading-tight mb-4">
                    Tempos de resposta{" "}
                    <span className="text-primary">previsíveis</span>
                  </h2>
                  <p className="text-base md:text-lg text-foreground/60 font-medium">
                    Cada chamado é classificado por prioridade e tem prazo definido em contrato.
                  </p>
                </div>
              </Reveal>

              <div className="relative bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_12px_32px_-12px_rgba(0,0,0,0.4)]">
                <div className="hidden md:block absolute left-12 right-12 top-[112px] h-[2px] bg-gradient-to-r from-primary via-primary/60 to-primary/20" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
                  {[
                    { label: "urgente", tempo: "30 min", desc: "Servidor parado, sistema fora do ar, incidente de segurança.", icon: Zap },
                    { label: "prioritário", tempo: "2 horas", desc: "Problema que afeta múltiplos usuários ou processos importantes.", icon: Timer },
                    { label: "Normal", tempo: "4 horas", desc: "Configurações, dúvidas técnicas, instalações e ajustes pontuais.", icon: Clock },
                  ].map((sla, i) => (
                    <Reveal key={i} delay={i * 0.12} direction="up">
                      <div className="relative flex flex-col items-center text-center">
                        <div className="relative mb-5">
                          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-[0_8px_20px_-4px_rgba(184,10,45,0.5)] ring-4 ring-white/10">
                            <sla.icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary mb-2">
                          {sla.label}
                        </span>
                        <span className="text-3xl md:text-4xl font-black text-foreground/90 mb-3 font-display">
                          {sla.tempo}
                        </span>
                        <p className="text-sm leading-relaxed text-foreground/60 max-w-[240px]">
                          {sla.desc}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Como funciona */}
          <section className="py-12 px-6 relative">
            <div className="max-w-6xl mx-auto relative">
              <Reveal direction="up">
                <div className="mb-14 max-w-3xl">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                    <span className="w-8 h-px bg-primary" />
                    Como funciona
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground/90 leading-tight mb-4">
                    Do chamado à <span className="text-primary">resolução</span>
                  </h2>
                  <p className="text-base md:text-lg text-foreground/60 font-medium">
                    Um fluxo simples, rastreável e transparente.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {comoFunciona.map((step, i) => (
                  <Reveal key={step.number} delay={i * 0.12} direction="up">
                    <div className="relative h-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm rounded-xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-12px_rgba(0,0,0,0.4)] hover:border-primary/30 hover:bg-white/[0.05] hover:shadow-[0_4px_12px_rgba(184,10,45,0.15),0_20px_40px_-12px_rgba(184,10,45,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                      <span className="absolute top-2 right-3 text-6xl font-black text-primary/15 font-display select-none leading-none">
                        {step.number}
                      </span>
                      <div className="relative">
                        <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                          <step.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <h3 className="font-bold text-lg text-foreground/90 mb-1.5">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-foreground/60">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <div className="h-32 bg-gradient-to-b from-transparent to-background" />
        </div>
      </div>



      <FooterSection />
      <WhatsAppButton />
      
    </main>
  );
};

export default SuporteGestaoTI;