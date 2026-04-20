import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import arc from "@/assets/clients/arc.png";
import acmr from "@/assets/clients/acmr.png";
import applausi from "@/assets/clients/applausi.png";
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

// Linha 1 - fundo branco padronizado
const transparentClients: Client[] = [
  { name: "Benfrio", logo: benfrio, whiteBg: true },
  { name: "Colégio Anglo Via Brasil", logo: colegioViaBrasil, whiteBg: true },
  { name: "Lavoro Terraplenagem", logo: lavoro, whiteBg: true },
  { name: "Opuspac", logo: opuspac, whiteBg: true },
  { name: "Fazenda Bela Vista", logo: fazendaBelaVista, whiteBg: true },
];

// Logos sem fundo - linha 2
const transparentClientsRow2: Client[] = [
  { name: "Lavateria Fast", logo: lavateriaFast },
  { name: "Rota Market Fast", logo: rotaMarketFast },
  { name: "Simplify", logo: simplify },
];

// Logos que precisam de fundo branco para legibilidade
const whiteBgClients: Client[] = [
  { name: "ARC", logo: arc, whiteBg: true },
  { name: "Grupo Predigna", logo: grupoPredigna, whiteBg: true },
  { name: "Cemitério Memorial Parque da Paz", logo: memorialParqueDaPaz, whiteBg: true },
  { name: "Martin Brower", logo: martinBrower, whiteBg: true },
  { name: "NESP", logo: nesp, whiteBg: true },
];

// Linha final
const textClients: Client[] = [
  { name: "Ruffato Contabilidade", logo: ruffato, whiteBg: true },
  { name: "ACMR", logo: acmr, whiteBg: true },
  { name: "Applausi", logo: applausi, whiteBg: true },
  { name: "Mediani Vizicato", logo: medianiVizicato, whiteBg: true },
];

const ClientCard = ({ client, i }: { client: Client; i: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const delay = (i % 5) * 0.1;
  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center gap-3 p-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(80px) scale(0.85)",
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      <div
        className={`flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-110 ${
          client.whiteBg ? "bg-white p-2 md:p-3" : ""
        }`}
      >
        {client.logo ? (
          <img
            src={client.logo}
            alt={`Logo ${client.name}`}
            className="max-h-full max-w-full w-auto object-contain"
            loading="lazy"
          />
        ) : (
          <span className="text-lg md:text-xl font-bold font-display text-primary-foreground tracking-wide text-center">
            {client.name}
          </span>
        )}
      </div>
      <span className="mt-1 text-primary-foreground text-xs md:text-base font-semibold text-center">
        {client.name}
      </span>
    </div>
  );
};

const ClientsSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="py-8 px-5 relative z-10">
      <div
        ref={ref}
        className="max-w-5xl mx-auto p-8"
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

        <div className="space-y-10">
          {/* Linha 1: logos sem fundo */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {transparentClients.map((client, i) => (
              <ClientCard key={client.name} client={client} i={i} />
            ))}
          </div>

          {/* Linha 2: logos sem fundo */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {transparentClientsRow2.map((client, i) => (
              <ClientCard key={client.name} client={client} i={i} />
            ))}
          </div>

          {/* Linha 3: logos com fundo branco */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {whiteBgClients.map((client, i) => (
              <ClientCard key={client.name} client={client} i={i} />
            ))}
          </div>

          {/* Linha 4: clientes em texto */}
          {textClients.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {textClients.map((client, i) => (
                <ClientCard key={client.name} client={client} i={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
