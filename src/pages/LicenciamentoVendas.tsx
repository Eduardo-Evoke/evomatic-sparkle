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

      {/* Vendas & Locação */}
      <section className="py-12 px-6 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.07]" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.25) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.25) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider mb-3 text-lg">
                <ShoppingCart className="w-4 h-4" />
                Vendas & Locação
              </span>
              <h2 className="text-3xl font-bold font-display text-foreground mb-4 md:text-5xl">
                Equipamentos e licenças <span className="text-primary">sob medida</span>
              </h2>
              <p className="max-w-3xl mx-auto text-base md:text-lg font-semibold text-primary-foreground">
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
      <section className="py-12 px-6 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] rounded-full bg-primary/[0.05] blur-[180px]" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/[0.03] blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.07]" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.25) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.25) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider mb-3 text-lg">
                <Search className="w-4 h-4" />
                Licenciamento & Auditoria
              </span>
              <h2 className="text-3xl font-bold font-display text-foreground mb-4 md:text-5xl">
                Descubra o que está irregular <span className="text-primary">antes da fiscalização</span>
              </h2>
              <p className="max-w-3xl mx-auto text-base md:text-lg font-semibold text-primary-foreground">
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


      <FooterSection />
      <WhatsAppButton />
      
    </main>
  );
};

export default LicenciamentoVendas;
