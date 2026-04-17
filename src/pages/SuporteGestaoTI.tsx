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

      {/* Diferenciais */}
      <section className="py-20 px-6 relative z-10 overflow-hidden">
        {/* Transição esfumaçada superior — funde com o fundo escuro acima */}
        <div className="absolute inset-x-0 -top-px h-40 pointer-events-none bg-gradient-to-b from-background via-background/70 to-transparent z-20" />
        {/* Base branca suave */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 50% 40%, hsl(0 0% 100%) 0%, hsl(220 14% 96%) 60%, hsl(220 14% 92%) 100%)",
        }} />
        {/* Glows coloridos suaves para profundidade 3D */}
        <div className="absolute -top-32 -left-20 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full bg-primary/[0.08] blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-white blur-[120px] pointer-events-none opacity-60" />
        {/* Ruído sutil */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "256px 256px",
          }}
        />
        {/* Transição esfumaçada inferior — funde com o fundo escuro abaixo */}
        <div className="absolute inset-x-0 -bottom-px h-40 pointer-events-none bg-gradient-to-t from-background via-background/70 to-transparent z-20" />
        <div className="max-w-6xl mx-auto relative z-30">
          <Reveal direction="up">
            <div className="text-center mb-16 pt-[15%]">
              <h2 className="text-3xl font-bold font-display text-black mb-4 md:text-6xl">
                O que está{" "}
                <span className="text-primary">incluso</span>{" "}
                no nosso suporte
              </h2>
              <p className="max-w-3xl mx-auto text-base md:text-lg text-neutral-700 font-semibold">
                Um serviço completo de TI para que sua empresa tenha tecnologia funcionando com estabilidade, segurança e performance.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {diferenciais.map((item, i) => (
              <Reveal key={i} delay={i * 0.1} direction="up">
                <div className={`${glassCard} p-6 h-full`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 text-xl text-primary">{item.title}</h3>
                  <p className="leading-relaxed font-medium text-base text-secondary">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SLA — destaque */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4 md:text-5xl">
                SLA: compromisso com <span className="text-primary">resultados</span>
              </h2>
              <p className="max-w-2xl mx-auto text-base md:text-lg font-semibold text-primary-foreground">
                Nosso contrato de nível de serviço garante tempos de resposta e resolution que mantêm sua operação rodando.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Urgências", tempo: "Até 30 min", desc: "Servidor parado, sistema fora do ar, incidente de segurança. Resposta imediata com prioridade máxima.", highlight: true },
              { label: "Alto", tempo: "Até 2 horas", desc: "Problema que afeta múltiplos usuários ou impacta processos importantes da operação.", highlight: false },
              { label: "Normal", tempo: "Até 4 horas", desc: "Solicitações de configuração, dúvidas técnicas, instalação de software e ajustes pontuais.", highlight: false },
            ].map((sla, i) => (
              <Reveal key={i} delay={i * 0.15} direction="up">
                <div className={`${glassCard} p-8 h-full flex flex-col ${sla.highlight ? "border-primary/50 shadow-[0_0_50px_rgba(184,10,45,0.15),0_0_80px_rgba(184,10,45,0.08)] ring-1 ring-primary/20 scale-[1.03]" : ""}`}>
                  <span className={`text-xs font-bold uppercase tracking-wider mb-3 block ${sla.highlight ? "text-primary bg-primary/10 px-3 py-1 rounded-full w-fit" : "text-primary"}`}>{sla.label}</span>
                  <span className={`text-3xl font-black block mb-3 ${sla.highlight ? "text-primary" : "text-foreground"}`}>{sla.tempo}</span>
                  <p className="text-muted-foreground leading-relaxed font-bold text-base">{sla.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4 md:text-6xl">
                Como funciona na prática
              </h2>
              <p className="max-w-2xl mx-auto text-base md:text-lg text-primary-foreground font-semibold">
                Do chamado à resolução, um fluxo eficiente e transparente.
              </p>
            </div>
          </Reveal>
          <div className="space-y-4 max-w-3xl mx-auto">
            {comoFunciona.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.15} direction="right">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(184,10,45,0.4)] transition-all duration-300">
                    {step.number}
                  </div>
                  <div className={`flex-1 ${glassCard} p-5`}>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                        <step.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1 text-xl">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed font-bold text-base">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>



      <FooterSection />
      <WhatsAppButton />
      
    </main>
  );
};

export default SuporteGestaoTI;