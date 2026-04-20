import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

import SolutionsBackground from "@/components/SolutionsBackground";
import heroImg from "@/assets/licenciamento-hero.jpg";
import { useRef, useState, useEffect } from "react";
import {
  ShieldCheck, ArrowRight, CheckCircle2, Monitor, Laptop, Server,
  Shield, FileCheck, Search, FileText, ClipboardList, Award,
  ShoppingCart, Building2, Package, Network
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

const vendasItems = [
  { icon: Shield, title: "Firewall as a Service", desc: "Alugue um firewall já configurado, monitorado 24/7 e com suporte incluso. Sem investimento inicial, sem dor de cabeça." },
  { icon: Laptop, title: "Servidores e notebooks", desc: "Locação ou compra de servidores, notebooks e workstations com configuração sob medida e suporte técnico incluso." },
  { icon: FileCheck, title: "Licenças oficiais", desc: "Microsoft 365, Windows Server, Autodesk, antivírus corporativo e mais — tudo original, com nota fiscal e suporte." },
  { icon: Monitor, title: "Desktops e equipamentos de rede", desc: "Computadores corporativos, switches, access points e toda a infraestrutura que sua empresa precisa." },
];

const auditoriaItems = [
  { icon: Search, title: "Auditoria de licenças", desc: "Levantamento completo de todos os softwares instalados na sua empresa — Microsoft, Autodesk, SketchUp e outros — identificando irregularidades." },
  { icon: FileText, title: "Regularização e correção", desc: "Adequação do parque de licenças, remoção de softwares não autorizados e aquisição das licenças necessárias para ficar em conformidade." },
  { icon: ClipboardList, title: "Gestão contínua de contratos", desc: "Acompanhamento de vencimentos, renovações e otimização de custos com licenciamento — para que você nunca mais seja pego de surpresa." },
];

const beneficios = [
  { icon: Award, title: "Produtos originais", desc: "Trabalhamos apenas com fabricantes e distribuidores autorizados. Tudo com nota fiscal e garantia." },
  { icon: ShieldCheck, title: "Suporte incluso", desc: "Cada produto vendido ou locado vem com configuração, implantação e suporte técnico da Evomatic." },
  { icon: Package, title: "Locação flexível", desc: "Alugue equipamentos e licenças com custo mensal previsível, sem imobilizar capital." },
  { icon: Building2, title: "Consultoria especializada", desc: "Orientamos a melhor escolha para o seu cenário, sem vender o que você não precisa." },
];

const LicenciamentoVendas = () => {
  return (
    <main className="overflow-hidden relative">
      <SolutionsBackground />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-[72px]">
        <img src={heroImg} alt="Licenciamento e vendas" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10 opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-20">
          <div className="max-w-2xl">
            <Reveal delay={0.3} direction="left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight mb-6">
                Equipamentos e licenças oficiais — com <span className="text-primary">suporte incluso</span>
              </h1>
            </Reveal>
            <Reveal delay={0.5} direction="left">
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-primary-foreground font-semibold">
                Venda, locação e licenciamento de tecnologia para sua empresa. Tudo original, 
                configurado e com o suporte técnico que só a Evomatic oferece.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Wrapper dark suave — textura "documento/certificação" exclusiva da página de Licenciamento */}
      <div className="relative z-10">
        <div className="relative">
          {/* Base elevada */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, hsl(220 10% 10%) 180px, hsl(220 9% 12%) 50%, hsl(220 10% 10%) 100%)",
            }}
          />

          {/* Marca d'água — selos circulares de "certificação" sutis */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.10]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Ccircle cx='160' cy='160' r='70'/%3E%3Ccircle cx='160' cy='160' r='84'/%3E%3Cpath d='M130 160 l22 22 l40 -46' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "320px 320px",
              maskImage:
                "radial-gradient(ellipse at 50% 40%, black 25%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 40%, black 25%, transparent 80%)",
            }}
          />

          {/* Linhas horizontais finas — sensação de documento / régua */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.09]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg, hsla(0,0%,100%,0.45) 0 1px, transparent 1px 32px)",
            }}
          />

          {/* Marcação lateral — pequenos traços verticais como margem de planilha */}
          <div
            className="absolute inset-y-0 left-0 w-24 pointer-events-none opacity-[0.12]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg, hsla(0,0%,100%,0.6) 0 1px, transparent 1px 12px)",
              maskImage: "linear-gradient(90deg, black, transparent)",
              WebkitMaskImage: "linear-gradient(90deg, black, transparent)",
            }}
          />
          <div
            className="absolute inset-y-0 right-0 w-24 pointer-events-none opacity-[0.12]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg, hsla(0,0%,100%,0.6) 0 1px, transparent 1px 12px)",
              maskImage: "linear-gradient(270deg, black, transparent)",
              WebkitMaskImage: "linear-gradient(270deg, black, transparent)",
            }}
          />

          {/* Ruído fílmico sutil */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "256px 256px",
            }}
          />

          {/* Iluminação ambiente — glows distribuídos */}
          <div className="absolute top-32 -left-40 w-[600px] h-[600px] rounded-full bg-primary/[0.07] blur-[170px] pointer-events-none" />
          <div className="absolute top-[40%] -right-40 w-[560px] h-[560px] rounded-full bg-white/[0.04] blur-[180px] pointer-events-none" />
          <div className="absolute bottom-10 -right-32 w-[520px] h-[520px] rounded-full bg-primary/[0.05] blur-[160px] pointer-events-none" />

          {/* Spotlight superior */}
          <div
            className="absolute inset-x-0 top-0 h-[600px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 50% 0%, hsla(0,0%,100%,0.05), transparent 70%)",
            }}
          />

          {/* Vendas & Locação */}
          <section className="py-12 px-6 relative">
            <div className="max-w-6xl mx-auto relative">
              <Reveal direction="up">
                <div className="mb-16 max-w-3xl">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                    <span className="w-8 h-px bg-primary" />
                    Vendas & Locação
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground/90 leading-tight mb-4">
                    Equipamentos e licenças <span className="text-primary">sob medida</span>
                  </h2>
                  <p className="text-base md:text-lg font-semibold text-primary-foreground">
                    Do firewall ao notebook, do antivírus ao Microsoft 365 — fornecemos, configuramos e damos suporte.
                  </p>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {vendasItems.map((item, i) => (
                  <Reveal key={i} delay={i * 0.1} direction="up">
                    <div className="relative backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 hover:border-primary/40 transition-all duration-150 ease-out cursor-default shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_hsla(348,91%,42%,0.3),0_0_60px_hsla(348,91%,42%,0.15),inset_0_1px_0_hsla(348,91%,42%,0.2)] bg-background/40 h-full flex items-start gap-4 hover:-translate-y-2 hover:scale-[1.04]">
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

          {/* Licenciamento & Auditoria */}
          <section className="py-12 px-6 relative">
            <div className="max-w-6xl mx-auto relative">
              <Reveal direction="up">
                <div className="mb-16 max-w-3xl">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                    <span className="w-8 h-px bg-primary" />
                    Licenciamento & Auditoria
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground/90 leading-tight mb-4">
                    Descubra o que está irregular <span className="text-primary">antes da fiscalização</span>
                  </h2>
                  <p className="text-base md:text-lg font-semibold text-primary-foreground">
                    Auditorias de software, regularização de licenças e gestão contínua para que sua empresa nunca corra riscos desnecessários.
                  </p>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {auditoriaItems.map((item, i) => (
                  <Reveal key={i} delay={i * 0.15} direction="up">
                    <div className="relative backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 hover:border-primary/40 transition-all duration-150 ease-out cursor-default shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_hsla(348,91%,42%,0.3),0_0_60px_hsla(348,91%,42%,0.15),inset_0_1px_0_hsla(348,91%,42%,0.2)] bg-background/40 h-full hover:-translate-y-2 hover:scale-[1.04]">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-foreground font-bold mb-2 text-lg">{item.title}</h3>
                      <p className="text-foreground/50 leading-relaxed font-bold text-base">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>


      <FooterSection />
      <WhatsAppButton />
      
    </main>
  );
};

export default LicenciamentoVendas;
