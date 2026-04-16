import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Building2 } from "lucide-react";

const clients = [
  "Escritórios de Advocacia",
  "Clínicas Médicas",
  "Construtoras",
  "Indústrias",
  "Varejo",
  "Logística",
  "Educação",
  "Contabilidades",
  "Imobiliárias",
  "Consultorias",
  "Startups",
  "Comércio Exterior",
];

const ClientsSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="py-12 px-5 relative z-10" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-bold text-center mb-3 text-primary text-2xl md:text-5xl font-display"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          Segmentos que Atendemos
        </h2>
        <p
          className="text-center mb-10 text-primary-foreground text-sm md:text-xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease-out 0.15s",
          }}
        >
          Soluções sob medida para diversos setores do mercado.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {clients.map((client, i) => (
            <div
              key={client}
              className="group relative flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.06] bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/[0.06] transition-all duration-300 cursor-default"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.96)",
                transition: `opacity 0.5s ease-out ${0.05 * i}s, transform 0.5s ease-out ${0.05 * i}s`,
              }}
            >
              <Building2 className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors shrink-0" />
              <span className="text-sm md:text-base text-foreground/80 group-hover:text-foreground transition-colors font-medium">
                {client}
              </span>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: "inset 0 0 20px hsl(348 91% 42% / 0.06)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
