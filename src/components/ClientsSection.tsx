import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import arc from "@/assets/clients/arc.png";
import benfrio from "@/assets/clients/benfrio.png";
import colegioViaBrasil from "@/assets/clients/colegio-via-brasil.png";
import grupoPredigna from "@/assets/clients/grupo-predigna.png";
import lavateriaFast from "@/assets/clients/lavateria-fast.jpeg";
import lavoro from "@/assets/clients/lavoro.png";
import fazendaBelaVista from "@/assets/clients/fazenda-bela-vista.png";
import martinBrower from "@/assets/clients/martin-brower.png";
import medianiVizicato from "@/assets/clients/mediani-vizicato.png";
import memorialParqueDaPaz from "@/assets/clients/memorial-parque-da-paz.png";
import nesp from "@/assets/clients/nesp.png";
import opuspac from "@/assets/clients/opuspac.png";
import rotaMarketFast from "@/assets/clients/rota-market-fast.jpeg";
import ruffato from "@/assets/clients/ruffato-contabilidade.png";
import simplify from "@/assets/clients/simplify.jpeg";

type Client = { name: string; logo?: string; invert?: boolean; whiteBg?: boolean };

const clients: Client[] = [
  { name: "ACMR" },
  { name: "Applausi" },
  { name: "ARC", logo: arc, whiteBg: true },
  { name: "Benfrio", logo: benfrio },
  { name: "Colégio Anglo Via Brasil", logo: colegioViaBrasil },
  { name: "Grupo Predigna", logo: grupoPredigna, whiteBg: true },
  { name: "Lavateria Fast", logo: lavateriaFast },
  { name: "Lavoro Terraplenagem", logo: lavoro },
  { name: "Fazenda Bela Vista", logo: fazendaBelaVista },
  { name: "Martin Brower", logo: martinBrower, whiteBg: true },
  { name: "Mediani Vizicato", logo: medianiVizicato, whiteBg: true },
  { name: "Cemitério Memorial Parque da Paz", logo: memorialParqueDaPaz, whiteBg: true },
  { name: "NESP", logo: nesp, whiteBg: true },
  { name: "Opuspac", logo: opuspac },
  { name: "Rota Market Fast", logo: rotaMarketFast },
  { name: "Ruffato Contabilidade", logo: ruffato, whiteBg: true },
  { name: "Simplify", logo: simplify },
];

const ClientsSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="py-8 px-5 relative z-10">
      <div
        ref={ref}
        className="max-w-5xl mx-auto backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] bg-background/40"
      >
        <h2
          className="font-bold text-center mb-3 text-primary text-2xl md:text-5xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          Nossos Clientes
        </h2>
        <p
          className="text-center mb-12 text-primary-foreground text-sm md:text-xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease-out 0.15s",
          }}
        >
          Empresas que confiam na Evomatic para crescer com segurança.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {clients.map((client, i) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center gap-3 p-4 transition-all duration-300 hover:scale-[1.05] min-h-[120px]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease-out ${i * 0.05 + 0.2}s, transform 0.5s ease-out ${i * 0.05 + 0.2}s, background-color 0.3s, scale 0.3s`,
              }}
            >
              <div className="flex items-center justify-center w-full h-16">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className={`max-h-16 max-w-full w-auto object-contain ${client.whiteBg ? "bg-white rounded-md p-1.5" : ""}`}
                    style={client.invert ? { filter: "invert(1) brightness(2) grayscale(1) contrast(1.2)" } : undefined}
                    loading="lazy"
                  />
                ) : (
                  <span className="text-lg md:text-xl font-bold font-display text-primary-foreground tracking-wide">
                    {client.name}
                  </span>
                )}
              </div>
              <span className="text-xs md:text-sm font-semibold text-primary-foreground/80 text-center leading-tight">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
