import { ShieldCheck, Eye, Wrench, ShieldAlert } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import firewallBg from "@/assets/firewall-bg.png";

const benefits = [
  { icon: ShieldCheck, text: "Defesa contra invasões e ameaças" },
  { icon: Eye, text: "Monitoramento 24/7 em tempo real" },
  { icon: Wrench, text: "Gestão completa sem esforço interno" },
  { icon: ShieldAlert, text: "Continuidade da operação garantida" },
];

const FirewallSection = () => {
  const titleRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/[0.08]">
        {/* Image side */}
        <div className="relative h-64 md:h-auto min-h-[360px]">
          <img
            src={firewallBg}
            alt="Firewall hardware"
            className="absolute inset-0 w-full h-full object-cover object-left"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent md:hidden" />
        </div>

        {/* Content side */}
        <div className="relative z-10 py-12 px-8 md:px-12 flex flex-col justify-center bg-background/80 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3 leading-tight">
            <strong
              ref={titleRef}
              className="text-3xl md:text-4xl inline-block transition-all duration-1000 ease-out"
              style={{
                transform: isVisible ? "translateX(0)" : "translateX(60px)",
                opacity: isVisible ? 1 : 0,
              }}
            >
              Proteja sua empresa contra ataques hackers, falhas de segurança e indisponibilidades
            </strong>
          </h2>
          <p className="text-base font-semibold mb-6 text-primary">
            Firewall gerenciado com monitoramento contínuo e resposta imediata a incidentes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <div
                key={b.text}
                className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 cursor-default"
              >
                <b.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-foreground/80">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirewallSection;
