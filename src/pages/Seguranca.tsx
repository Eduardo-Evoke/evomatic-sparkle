import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

import SolutionsBackground from "@/components/SolutionsBackground";
import firewallHero from "@/assets/seguranca-hero.jpg";
import { useRef, useState, useEffect } from "react";
import {
  ShieldCheck, Eye, Wrench, ShieldAlert, ArrowRight,
  Bug, HardDrive, RefreshCw, Shield, GraduationCap,
  Fingerprint, Mail, BookOpen
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

const segurancaItems = [
  { icon: Shield, title: "Antivírus corporativo gerenciado", desc: "Proteção centralizada em todas as estações e servidores, com painel de gestão, alertas em tempo real e atualizações automáticas." },
  { icon: ShieldCheck, title: "Firewall avançado", desc: "Filtragem inteligente de tráfego, bloqueio de ameaças e controle de acessos para proteger toda a sua rede corporativa." },
  { icon: HardDrive, title: "Backup", desc: "Cópias de segurança automatizadas, verificadas e com plano de recuperação — para que seus dados estejam sempre protegidos." },
  { icon: Bug, title: "Análise e remediação de vulnerabilidades", desc: "Varreduras periódicas para identificar e corrigir brechas de segurança antes que sejam exploradas." },
  { icon: RefreshCw, title: "Atualização proativa de sistemas", desc: "Gestão contínua de patches e atualizações em servidores, estações e softwares críticos para manter tudo seguro e estável." },
];

const treinamentoItems = [
  { icon: Fingerprint, title: "Como identificar phishing e golpes digitais", desc: "Capacitação prática para que seus colaboradores reconheçam e-mails falsos, links maliciosos e tentativas de engenharia social." },
  { icon: Mail, title: "Boas práticas de segurança no trabalho", desc: "Senhas fortes, cuidados com dispositivos, uso seguro de redes e políticas internas de proteção de dados." },
  { icon: BookOpen, title: "Microsoft 365 na prática do dia a dia", desc: "Treinamento para extrair o máximo das ferramentas: Teams, SharePoint, OneDrive e Outlook com produtividade e segurança." },
];

const beneficios = [
  { icon: ShieldCheck, title: "Defesa em camadas", desc: "Antivírus, firewall, backup e monitoramento trabalhando juntos para proteção completa." },
  { icon: Eye, title: "Visibilidade total", desc: "Dashboards e relatórios que mostram exatamente o que está acontecendo na sua rede." },
  { icon: Wrench, title: "Gestão sem esforço", desc: "Nós cuidamos de toda a operação técnica para que sua equipe foque no negócio." },
  { icon: ShieldAlert, title: "Continuidade garantida", desc: "Resposta rápida a incidentes para manter sua operação rodando sem paradas." },
];

const Seguranca = () => {
  return (
    <main className="overflow-hidden relative">
      <SolutionsBackground />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-[72px] z-10">
        <img src={firewallHero} alt="Segurança de rede" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-b from-transparent via-background/40 via-40% to-background pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-20">
          <div className="max-w-2xl">
            <Reveal delay={0.3} direction="left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight mb-6">
                Evite ataques, vazamentos e <span className="text-primary">paralisações</span>
              </h1>
            </Reveal>
            <Reveal delay={0.5} direction="left">
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-primary-foreground font-semibold">
                Proteção completa para sua empresa: antivírus gerenciado, firewall avançado, backup confiável, 
                análise de vulnerabilidades e treinamento da equipe. Segurança de verdade, em todas as camadas.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Segurança */}
      <section className="py-12 px-6 relative z-10 overflow-hidden">
        {/* Textura hexagonal — exclusiva da página de Segurança */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.18]"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='64' viewBox='0 0 56 64'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpolygon points='28,2 54,17 54,47 28,62 2,47 2,17'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "56px 64px",
            maskImage: "radial-gradient(ellipse at center, black 35%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 85%)",
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-white/[0.015] blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.01] blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal direction="up">
            <div className="mb-16 max-w-3xl">
              <span className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-primary mb-4 text-lg">
                <span className="w-8 h-px bg-primary" />
                Segurança & Backup
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground/90 leading-tight mb-4">
                Proteção <span className="text-primary">completa</span> para sua operação
              </h2>
              <p className="text-base md:text-lg font-semibold text-primary-foreground">
                Soluções integradas que protegem seus dados, sua rede e seus sistemas contra as ameaças mais comuns e sofisticadas.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {segurancaItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.1} direction="up">
                <div className={`${glassCard} p-6 h-full`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2 text-xl">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-bold text-base">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Treinamentos */}
      <section className="py-12 px-6 relative z-10 overflow-hidden">
        {/* Textura hexagonal — exclusiva da página de Segurança */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.18]"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='64' viewBox='0 0 56 64'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpolygon points='28,2 54,17 54,47 28,62 2,47 2,17'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "56px 64px",
            maskImage: "radial-gradient(ellipse at center, black 35%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 85%)",
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] rounded-full bg-white/[0.015] blur-[180px]" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-white/[0.01] blur-[100px]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal direction="up">
            <div className="mb-16 max-w-3xl">
              <span className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-primary mb-4 text-lg">
                <span className="w-8 h-px bg-primary" />
                Treinamentos & Capacitação
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground/90 leading-tight mb-4">
                Equipe treinada erra menos e vira sua <span className="text-primary">primeira linha de defesa</span>
              </h2>
              <p className="text-base md:text-lg font-semibold text-primary-foreground">
                Capacitação prática para que seus colaboradores saibam se proteger — e proteger a empresa.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {treinamentoItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.15} direction="up">
                <div className={`${glassCard} p-6 h-full`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2 text-xl">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-bold text-base">{item.desc}</p>
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

export default Seguranca;
