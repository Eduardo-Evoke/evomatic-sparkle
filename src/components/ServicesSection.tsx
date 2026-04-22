import { Shield, Cloud, Server, Monitor, FileCheck, Package, GraduationCap, ClipboardList, Network } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Monitor,
    title: "Suporte & Gestão de TI",
    badge: "SLA garantido",
    description: "",
    href: "/suporte-gestao-ti",
    items: ["Atendimento ágil — remoto e presencial", "Gestão completa de ativos e sistemas", "SLA garantido"],
  },
  {
    icon: Network,
    title: "Infraestrutura & Redes",
    badge: "Alta performance",
    description: "",
    href: "/infraestrutura-servidores",
    items: ["Projetos e implantação de redes (cabeada e Wi-Fi)", "Configuração de equipamentos de rede", "Monitoramento em tempo real de toda a rede"],
  },
  {
    icon: Server,
    title: "Servidores & Virtualização",
    badge: "On-premise & cloud",
    description: "",
    href: "/infraestrutura-servidores",
    items: ["Migrações sem perda de dados", "Virtualização - Hyper-V, VMware, Proxmox", "Servidor em nuvem"],
  },
  {
    icon: Shield,
    title: "Segurança & Proteção",
    badge: "Proteção total",
    description: "",
    href: "/seguranca",
    items: ["Antivírus corporativo gerenciado", "Firewall avançado", "Backup", "Análise e remediação de vulnerabilidades", "Atualização proativa de sistemas"],
  },
  {
    icon: ClipboardList,
    title: "LGPD & Adequação",
    badge: "Diagnóstico grátis",
    description: "",
    href: "/lgpd",
    items: ["Diagnóstico do ambiente [GRATUÍTO]", "Mapeamento e controle de dados", "Adequação técnica às exigências da lei", "Treinamento aos colaboradores"],
  },
  {
    icon: GraduationCap,
    title: "Treinamentos & Capacitação",
    badge: "Equipe preparada",
    description: "",
    href: "/seguranca",
    items: ["Como identificar phishing e golpes digitais", "Boas práticas de segurança no trabalho", "Microsoft 365 na prática do dia a dia"],
  },
  {
    icon: Package,
    title: "Vendas & Locação",
    badge: "Suporte incluso",
    description: "",
    href: "/licenciamento-vendas",
    items: ["Firewall por assinatura - configurado e monitorado", "Servidores e notebooks para locação ou compra", "Licenças oficiais (Microsoft, Autodesk, e etc.)", "Desktops e equipamentos de rede"],
  },
  {
    icon: FileCheck,
    title: "Licenciamento & Auditoria",
    badge: "Conformidade",
    description: "",
    href: "/licenciamento-vendas",
    items: ["Auditoria (Microsoft, Autodesk, SketchUp...)", "Regularização e correção de licenças", "Gestão contínua de contratos"],
  },
  {
    icon: Cloud,
    title: "Cloud & Colaboração",
    badge: "Produtividade",
    description: "",
    href: "/cloud-colaboracao",
    items: ["Microsoft 365 — implantação e gestão", "SharePoint como servidor de arquivos", "Google Workspace — configuração e suporte", "Migração de servidores de e-mail e arquivos"],
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const navigate = useNavigate();

  return (
    <section className="pb-12 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mt-4 mb-8 md:-mt-16 md:mb-36">
          <p className="text-center max-w-xl mx-auto text-muted-foreground">​</p>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`relative backdrop-blur-sm border border-white/[0.08] rounded-2xl px-6 py-6 hover:border-primary/40 transition-all duration-150 ease-out group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_hsla(348,91%,42%,0.3),0_0_60px_hsla(348,91%,42%,0.15),inset_0_1px_0_hsla(348,91%,42%,0.2)] bg-background/40 ${service.href ? 'cursor-pointer' : 'cursor-default'}`}
              onClick={() => service.href && navigate(service.href)}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(1)",
                transition: `opacity 0.6s ease-out ${i * 0.1}s, transform 0.15s ease-out`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px) scale(1.04)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(1)"; }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-left text-2xl">{service.title}</h3>
              {service.description && <p className="text-foreground/70 mb-3 font-semibold text-lg">{service.description}</p>}
              <ul className="text-foreground/60 text-sm leading-relaxed space-y-1.5 hidden md:block">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-base font-bold text-slate-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item.includes("[GRATUÍTO]") ? (
                      <>
                        {item.replace("[GRATUÍTO]", "")}
                        <span className="text-primary animate-pulse font-extrabold">[GRATUÍTO]</span>
                      </>
                    ) : item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
