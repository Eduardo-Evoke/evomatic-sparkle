import { useRef, useState, useEffect } from "react";
import { Rocket, Award, Users, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import quemSomosBg from "@/assets/quem-somos-bg.jpg";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";


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
  children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right"; className?: string;
}) => {
  const { ref, visible } = useReveal(0.12);
  const transform = direction === "up" ? "translateY(40px)" : direction === "left" ? "translateX(-40px)" : "translateX(40px)";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0)" : transform,
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const timeline = [
  {
    year: "2010",
    title: "O início da jornada",
    text: "A trajetória começou em uma empresa metalúrgica em Jundiaí/SP. Foram quase três anos de aprendizado técnico intenso, cursos e especializações em infraestrutura de TI — e uma paixão por inovação que já era evidente desde o primeiro dia.",
    icon: Rocket,
  },
  {
    year: "2013",
    title: "O primeiro grande projeto",
    text: "Convidado para estruturar do zero toda a TI de uma empresa de terraplenagem — cabeamento, servidores, firewall, Active Directory. O projeto foi entregue em tempo recorde, funcionando com organização e segurança. Ali nasceu a certeza: esse modelo fazia sentido.",
    icon: Building2,
  },
  {
    year: "2014",
    title: "A virada decisiva",
    text: "Uma auditoria complexa de licenciamento Autodesk que o TI interno não conseguia resolver. O desafio foi aceito e o resultado foi tão positivo que a empresa substituiu o TI interno, confiando toda a gestão do ambiente. Novos clientes começaram a chegar por indicação.",
    icon: Award,
  },
  {
    year: "2015–2025",
    title: "Crescimento consistente",
    text: "Uma década construindo relacionamentos de confiança. Cada cliente atendido com excelência, cada ambiente cuidado com responsabilidade. A empresa cresceu organicamente — sempre por indicação — consolidando um portfólio completo de soluções em TI.",
    icon: Users,
  },
  {
    year: "2026",
    title: "De Evoke a Evomatic",
    text: "A Evoke amadureceu — e com ela, sua identidade. Em 2026, a empresa se reinventa como Evomatic: novo nome, nova marca, mesma essência. Mais de 12 anos de experiência agora com estrutura ampliada e o mesmo compromisso inabalável: tecnologia, segurança e atendimento humano de verdade.",
    icon: ShieldCheck,
  },
];

const values = [
  { title: "Excelência técnica", desc: "Conhecimento construído com experiência real — não apenas teoria." },
  { title: "Atendimento humano", desc: "Disponibilidade genuína, inclusive em emergências e fora do horário." },
  { title: "Confiança", desc: "Relacionamentos de longo prazo construídos com transparência e resultados." },
  { title: "Compromisso", desc: "Cada ambiente tratado como se fosse nosso. Cada problema resolvido como se fosse urgente." },
];

const QuemSomos = () => {
  return (
    <main className="overflow-hidden relative">
      {/* Background image + glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={quemSomosBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.06]"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.05] blur-[200px]" />
        <div className="absolute top-[60%] right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/[0.02] blur-[140px]" />
      </div>

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-28 pb-10 px-6">
        <Header />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-transparent z-0" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold font-display text-primary mb-6 lg:text-6xl">
              Quem Somos
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-lg md:text-2xl leading-relaxed font-display text-primary-foreground">
              Mais de 12 anos transformando a TI de empresas que acreditam que tecnologia é estratégia — não custo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-primary text-center mb-16">
              Nossa Trajetória
            </h2>
          </Reveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent md:-translate-x-px" />

            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={item.year} delay={i * 0.1} direction={isLeft ? "left" : "right"}>
                  <div className={`relative flex items-start -mb-2 md:-mb-3 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-20 -translate-x-1/2 mt-2 shadow-[0_0_20px_hsla(348,91%,42%,0.5)]" />

                    {/* Content card */}
                    <div className={`ml-14 md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"}`}>
                      <div className="backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 md:p-8 bg-background/40 hover:border-primary/30 transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] group">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <span className="text-primary font-bold text-sm tracking-wider uppercase">{item.year}</span>
                            <h3 className="text-xl font-bold text-foreground font-display">{item.title}</h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed font-semibold">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-primary text-center mb-4">
              Nossos Valores
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-center text-lg mb-14 max-w-2xl mx-auto text-primary-foreground">
              O que nos move desde o primeiro dia — e que continuará nos guiando.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 bg-background/40 hover:border-primary/30 transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] h-full">
                  <h3 className="text-xl font-bold text-foreground font-display mb-3 text-center">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-semibold text-center">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="relative z-10 px-6 pb-24">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center backdrop-blur-sm border border-white/[0.08] rounded-2xl p-10 md:p-16 bg-background/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
            <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground mb-6">
              Nosso compromisso é <span className="text-primary">simples</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-primary-foreground">
              Atendimento rápido, eficiente e humano, aliado a soluções tecnológicas sólidas e bem planejadas. Sempre disponíveis — inclusive em situações críticas.
            </p>
            <a
              href="/#contato"
              className="inline-flex items-center gap-2 text-primary-foreground px-8 py-3 rounded-lg text-base font-semibold transition-all duration-300 bg-primary hover:brightness-110"
            >
              Fale com a gente
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </Reveal>
      </section>

      <FooterSection />
      <WhatsAppButton />
      
    </main>
  );
};

export default QuemSomos;
