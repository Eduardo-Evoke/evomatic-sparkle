import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

import SolutionsBackground from "@/components/SolutionsBackground";
import heroImg from "@/assets/cloud-hero.jpg";
import { useRef, useState, useEffect } from "react";
import {
  Cloud, ArrowRight, Mail, FolderOpen, Users, RefreshCw,
  ShieldCheck, Zap, Globe, CheckCircle2, Monitor, Lock
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

const cloudItems = [
  { icon: Monitor, title: "Microsoft 365 — implantação e gestão", desc: "Configuração completa do Microsoft 365: Exchange Online, Teams, OneDrive, SharePoint e todas as ferramentas de produtividade, com gestão contínua." },
  { icon: FolderOpen, title: "SharePoint como servidor de arquivos", desc: "Substitua o servidor de arquivos local pelo SharePoint. Acesso de qualquer lugar, controle de permissões, versionamento e backup automático." },
  { icon: Globe, title: "Google Workspace — configuração e suporte", desc: "Implantação e suporte para Gmail corporativo, Google Drive, Google Meet e todas as ferramentas de colaboração do Google." },
  { icon: RefreshCw, title: "Migração de e-mail e arquivos", desc: "Migração segura e sem perda de dados — de servidores locais, outros provedores ou entre plataformas cloud. Sem downtime para sua equipe." },
];

const beneficios = [
  { icon: Zap, title: "Produtividade real", desc: "Equipe colaborando em tempo real, de qualquer lugar, com as ferramentas certas." },
  { icon: Lock, title: "Segurança na nuvem", desc: "Dados protegidos com criptografia, backup automático e controle de acesso." },
  { icon: Users, title: "Colaboração sem barreiras", desc: "Reuniões, arquivos e comunicação integrados numa única plataforma." },
  { icon: ShieldCheck, title: "Suporte especializado", desc: "Equipe Evomatic gerenciando e dando suporte para que tudo funcione perfeitamente." },
];

const CloudColaboracao = () => {
  return (
    <main className="overflow-hidden relative">
      <SolutionsBackground />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-[72px]">
        <img src={heroImg} alt="Cloud e colaboração" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-20">
          <div className="max-w-2xl">
            <Reveal delay={0.3} direction="left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight mb-6">
                E-mail, arquivos e equipe na nuvem — <span className="text-primary">produtivos e seguros</span>
              </h1>
            </Reveal>
            <Reveal delay={0.5} direction="left">
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-primary-foreground font-semibold">
                Implantação, migração e gestão de Microsoft 365 e Google Workspace. 
                Sua empresa conectada, colaborativa e com dados protegidos na nuvem.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Soluções Cloud */}
      <section className="py-12 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4 md:text-5xl">
                O que <span className="text-primary">fazemos</span> por você
              </h2>
              <p className="max-w-3xl mx-auto text-base md:text-lg text-primary-foreground font-semibold">
                Da implantação à gestão diária, cuidamos de toda a sua infraestrutura cloud para que sua equipe foque no que importa.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cloudItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.1} direction="up">
                <div
                  className="relative backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 hover:border-primary/40 transition-all duration-150 ease-out cursor-default shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_hsla(348,91%,42%,0.3),0_0_60px_hsla(348,91%,42%,0.15),inset_0_1px_0_hsla(348,91%,42%,0.2)] bg-background/40 h-full flex items-start gap-4"
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px) scale(1.04)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold mb-2 text-lg">{item.title}</h3>
                    <p className="text-foreground/50 leading-relaxed font-bold text-base">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-12 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4 md:text-5xl">
                Por que migrar para a nuvem com a <span className="text-primary">Evomatic</span>?
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {beneficios.map((b, i) => (
              <Reveal key={i} delay={i * 0.1} direction="up">
                <div
                  className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/[0.08] backdrop-blur-sm bg-background/40 hover:border-primary/40 transition-all duration-150 ease-out cursor-default shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_hsla(348,91%,42%,0.3),0_0_60px_hsla(348,91%,42%,0.15),inset_0_1px_0_hsla(348,91%,42%,0.2)] h-full"
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px) scale(1.04)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2 text-lg">{b.title}</h3>
                  <p className="text-foreground/50 leading-relaxed font-bold text-base">{b.desc}</p>
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

export default CloudColaboracao;
