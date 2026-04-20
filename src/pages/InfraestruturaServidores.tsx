import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

import SolutionsBackground from "@/components/SolutionsBackground";
import heroImg from "@/assets/infraestrutura-hero.jpg";
import { useRef, useState, useEffect } from "react";
import {
  Server, Wifi, Network, Monitor, ArrowRight,
  Globe, HardDrive, Activity, Shield, Cpu, Building2, Layers, Cable
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

const redesItems = [
  { icon: Cable, title: "Projetos e implantação de redes", desc: "Redes cabeadas (Cat5e/Cat6) e Wi-Fi corporativo, projetadas para performance e cobertura total — sem ponto cego." },
  { icon: Network, title: "Configuração de equipamentos", desc: "Roteadores, switches gerenciáveis, firewalls e access points configurados para máxima estabilidade e segurança." },
  { icon: Activity, title: "Monitoramento em tempo real", desc: "Acompanhamento 24/7 de toda a rede: tráfego, latência, disponibilidade e alertas automáticos de falha." },
  { icon: Shield, title: "Segmentação e segurança", desc: "VLANs, políticas de acesso e isolamento de rede para proteger seus dados e dispositivos críticos." },
  { icon: Wifi, title: "Wi-Fi inteligente", desc: "Cobertura profissional com roaming, controle de banda e rede separada para visitantes." },
  { icon: Globe, title: "Links e redundância", desc: "Gestão de links de internet com failover automático para garantir que sua empresa nunca fique offline." },
];

const servidoresItems = [
  { icon: HardDrive, title: "Migrações sem perda de dados", desc: "Planejamento e execução de migrações seguras — de servidores físicos para virtuais, de local para nuvem ou datacenter." },
  { icon: Layers, title: "Virtualização profissional", desc: "Implantação e gestão de ambientes virtualizados com Hyper-V, VMware e Proxmox — otimizando recursos e reduzindo custos." },
  { icon: Building2, title: "Servidor em datacenter próprio", desc: "Sem hardware no seu escritório. Hospedamos seu servidor em datacenter Tier III com redundância de energia, rede e climatização." },
  { icon: Cpu, title: "Dimensionamento sob medida", desc: "Análise da sua demanda real para definir o servidor ideal — sem superdimensionar nem comprometer performance." },
  { icon: Monitor, title: "Gestão e monitoramento", desc: "Monitoramento proativo de saúde, performance e capacidade dos servidores com alertas e relatórios." },
  { icon: Server, title: "Backup e continuidade", desc: "Políticas de backup automatizadas e plano de disaster recovery para garantir a continuidade da sua operação." },
];

const beneficios = [
  { icon: Activity, title: "Performance garantida", desc: "Infraestrutura dimensionada e monitorada para entregar velocidade e estabilidade." },
  { icon: Shield, title: "Segurança integrada", desc: "Cada componente configurado com boas práticas de segurança desde o primeiro dia." },
  { icon: Globe, title: "Escalabilidade", desc: "Cresça sem retrabalho. Infraestrutura pronta para acompanhar a evolução do seu negócio." },
  { icon: Server, title: "Sem dor de cabeça", desc: "Nós cuidamos de tudo — da compra do equipamento à gestão diária." },
];

const InfraestruturaServidores = () => {
  return (
    <main className="overflow-hidden relative">
      <SolutionsBackground />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-[72px] z-10">
        <img src={heroImg} alt="Infraestrutura e servidores" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-b from-transparent via-background/40 via-40% to-background pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-20">
          <div className="max-w-2xl">
            <Reveal delay={0.3} direction="left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight mb-6">
                A base que sua empresa precisa para <span className="text-primary">crescer</span>
              </h1>
            </Reveal>
            <Reveal delay={0.5} direction="left">
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-primary-foreground font-semibold">
                Redes rápidas e estáveis, servidores sob medida e virtualização profissional. <br />
                Projetamos, implantamos e gerenciamos toda a infraestrutura de TI da sua empresa.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Infraestrutura & Redes */}
      <section className="py-12 px-6 relative z-10 overflow-hidden">
        {/* 3D perspective grid — textura única, mais visível */}
        <div className="absolute inset-0 pointer-events-none" style={{ perspective: "600px" }}>
          <div className="absolute inset-0 origin-bottom" style={{
            transform: "rotateX(55deg) scale(2.5)",
            backgroundImage: `linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to top, transparent 0%, white 15%, white 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, white 15%, white 85%, transparent 100%)",
          }} />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-white/[0.015] blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.01] blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal direction="up">
            <div className="mb-16 max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                <span className="w-8 h-px bg-primary" />
                Infraestrutura & Redes
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground/90 leading-tight mb-4">
                Rede rápida, estável e <span className="text-primary">sem ponto cego</span>
              </h2>
              <p className="text-base md:text-lg font-semibold text-primary-foreground">
                Projetos completos de rede cabeada e Wi-Fi, com monitoramento em tempo real e equipamentos de ponta.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {redesItems.map((item, i) => (
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

      {/* Servidores & Virtualização */}
      <section className="py-12 px-6 relative z-10 overflow-hidden">
        {/* 3D perspective grid — textura única, mais visível */}
        <div className="absolute inset-0 pointer-events-none" style={{ perspective: "600px" }}>
          <div className="absolute inset-0 origin-bottom" style={{
            transform: "rotateX(55deg) scale(2.5)",
            backgroundImage: `linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to top, transparent 0%, white 15%, white 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, white 15%, white 85%, transparent 100%)",
          }} />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] rounded-full bg-white/[0.015] blur-[180px]" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-white/[0.01] blur-[100px]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal direction="up">
            <div className="mb-16 max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                <span className="w-8 h-px bg-primary" />
                Servidores & Virtualização
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground/90 leading-tight mb-4">
                Servidor certo para o seu negócio: <span className="text-primary">local, nuvem ou datacenter</span>
              </h2>
              <p className="text-base md:text-lg font-semibold text-primary-foreground">
                Migrações seguras, virtualização profissional e hospedagem em datacenter próprio sem hardware no seu escritório.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servidoresItems.map((item, i) => (
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


      <FooterSection />
      <WhatsAppButton />
      
    </main>
  );
};

export default InfraestruturaServidores;
