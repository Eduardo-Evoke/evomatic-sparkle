import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Users, Award, Handshake } from "lucide-react";
import arc from "@/assets/clients/arc.png";
import acmr from "@/assets/clients/acmr-white.png";
import applausi from "@/assets/clients/applausi-white.png";
import benfrio from "@/assets/clients/benfrio.png";
import colegioViaBrasil from "@/assets/clients/colegio-via-brasil.png";
import grupoPredigna from "@/assets/clients/grupo-predigna-new.png";
import lavateriaFast from "@/assets/clients/lavateria-fast.png";
import lavoro from "@/assets/clients/lavoro-clean.png";
import fazendaBelaVista from "@/assets/clients/fazenda-bela-vista.png";
import martinBrower from "@/assets/clients/martin-brower-clean.png";
import medianiVizicato from "@/assets/clients/mediani-vizicato-new.png";
import memorialParqueDaPaz from "@/assets/clients/memorial-parque-da-paz-new.png";
import nesp from "@/assets/clients/nesp-white.png";
import opuspac from "@/assets/clients/opuspac-white.png";
import rotaMarketFast from "@/assets/clients/rota-market-fast.png";
import ruffato from "@/assets/clients/ruffato-new.png";
import simplify from "@/assets/clients/simplify.png";

type Client = { name: string; logo?: string; invert?: boolean; whiteBg?: boolean };

// DESKTOP Linha 1 - 5 logos
const desktopRow1: Client[] = [
  { name: "Benfrio", logo: benfrio, whiteBg: true },
  { name: "Colégio Anglo Via Brasil", logo: colegioViaBrasil, whiteBg: true },
  { name: "Lavoro Terraplenagem", logo: lavoro },
  { name: "Opuspac", logo: opuspac },
  { name: "Fazenda Bela Vista", logo: fazendaBelaVista, whiteBg: true },
];

// DESKTOP Linha 2 - 5 logos
const desktopRow2: Client[] = [
  { name: "Lavateria Fast", logo: lavateriaFast, whiteBg: true },
  { name: "Rota Market Fast", logo: rotaMarketFast },
  { name: "Simplify", logo: simplify },
  { name: "ARC", logo: arc, whiteBg: true },
  { name: "Grupo Predigna", logo: grupoPredigna },
];

// DESKTOP Linha 3 - 5 logos
const desktopRow3: Client[] = [
  { name: "Cemitério Memorial Parque da Paz", logo: memorialParqueDaPaz, whiteBg: true },
  { name: "Martin Brower", logo: martinBrower },
  { name: "NESP", logo: nesp },
  { name: "ACMR", logo: acmr },
  { name: "Applausi", logo: applausi },
];

// DESKTOP Linha 4 - 2 logos centralizados
const desktopRow4: Client[] = [
  { name: "Mediani Vizicato", logo: medianiVizicato, whiteBg: true },
  { name: "Ruffato Contabilidade", logo: ruffato, whiteBg: true },
];

// MOBILE
const transparentClients: Client[] = [
  { name: "Benfrio", logo: benfrio, whiteBg: true },
  { name: "Colégio Anglo Via Brasil", logo: colegioViaBrasil, whiteBg: true },
  { name: "Lavoro Terraplenagem", logo: lavoro },
  { name: "Opuspac", logo: opuspac },
  { name: "Fazenda Bela Vista", logo: fazendaBelaVista, whiteBg: true },
];

const transparentClientsRow2: Client[] = [
  { name: "Lavateria Fast", logo: lavateriaFast, whiteBg: true },
  { name: "Rota Market Fast", logo: rotaMarketFast },
  { name: "Simplify", logo: simplify },
];

const whiteBgClients: Client[] = [
  { name: "ARC", logo: arc, whiteBg: true },
  { name: "Grupo Predigna", logo: grupoPredigna },
  { name: "Cemitério Memorial Parque da Paz", logo: memorialParqueDaPaz, whiteBg: true },
  { name: "Martin Brower", logo: martinBrower },
  { name: "NESP", logo: nesp },
];

// Mobile: Mediani sobe pra linha 1, Ruffato sobe pra linha 3
const medianiVizicatoClient: Client = { name: "Mediani Vizicato", logo: medianiVizicato, whiteBg: true };
const ruffatoClient: Client = { name: "Ruffato Contabilidade", logo: ruffato, whiteBg: true };
const textClientsMobile: Client[] = [
  { name: "ACMR", logo: acmr, whiteBg: true },
  { name: "Applausi", logo: applausi, whiteBg: true },
];

const ClientCard = ({ client, i }: { client: Client; i: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const delay = (i % 5) * 0.1;
  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center gap-2 md:gap-3 p-1 md:p-4"
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
      <span className="mt-1 text-primary-foreground text-[11px] md:text-base font-semibold text-center leading-tight">
        {client.name}
      </span>
    </div>
  );
};

const DesktopLogoCard = ({ client, i }: { client: Client; i: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const delay = (i % 5) * 0.08;
  return (
    <div
      ref={ref}
      className="group relative w-full"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      <div className="relative flex items-center justify-center h-32 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
        <div className="absolute inset-x-6 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
        <div className="absolute inset-x-10 -bottom-2 h-3 bg-primary/30 blur-xl opacity-70" />
        <div className="flex items-center justify-center w-full h-full p-5">
          {client.logo ? (
            <img
              src={client.logo}
              alt={`Logo ${client.name}`}
              title={client.name}
              className={`max-h-full max-w-full w-auto object-contain ${
                client.whiteBg ? "" : "drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]"
              }`}
              loading="lazy"
            />
          ) : (
            <span className="text-xl font-bold font-display text-primary-foreground tracking-wide text-center">
              {client.name}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ClientsSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="py-8 px-5 relative z-10">
      <div ref={ref} className="max-w-6xl mx-auto p-4 md:p-8">
        <p
          className="text-center text-primary text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-3"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease-out",
          }}
        >
          Nossos Clientes
        </p>
        <h2
          className="font-bold text-center mb-4 text-primary-foreground text-3xl md:text-5xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          Empresas que confiam na <span className="text-primary">Evomatic</span>
        </h2>
        <p
          className="text-center mb-4 text-primary-foreground/80 text-sm md:text-lg"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease-out 0.15s",
          }}
        >
          Parcerias que impulsionam inovação e resultados.
        </p>
        <div className="flex justify-center mb-12">
          <div className="h-[3px] w-20 bg-primary rounded-full" />
        </div>

        <div className="space-y-6">
          {/* MOBILE: mantido */}
          <div className="md:hidden space-y-10">
            <div className="grid grid-cols-3 justify-items-center gap-4">
              {[...transparentClients, medianiVizicatoClient].map((client, i) => (
                <ClientCard key={`m1-${client.name}`} client={client} i={i} />
              ))}
            </div>
            <div className="grid grid-cols-3 justify-items-center gap-4">
              {transparentClientsRow2.map((client, i) => (
                <ClientCard key={`m2-${client.name}`} client={client} i={i} />
              ))}
            </div>
            <div className="grid grid-cols-3 justify-items-center gap-4">
              {[...whiteBgClients, ruffatoClient].map((client, i) => (
                <ClientCard key={`m3-${client.name}`} client={client} i={i} />
              ))}
            </div>
            <div className="grid grid-cols-3 justify-items-center gap-4">
              {textClientsMobile.map((client, i) => (
                <ClientCard key={`m4-${client.name}`} client={client} i={i} />
              ))}
            </div>
          </div>

          {/* DESKTOP: 5 / 5 / 3 centralizados */}
          <div className="hidden md:block space-y-6">
            <div className="grid grid-cols-5 gap-6">
              {desktopRow1.map((client, i) => (
                <DesktopLogoCard key={`d1-${client.name}`} client={client} i={i} />
              ))}
            </div>
            <div className="grid grid-cols-5 gap-6">
              {desktopRow2.map((client, i) => (
                <DesktopLogoCard key={`d2-${client.name}`} client={client} i={i} />
              ))}
            </div>
            <div className="grid grid-cols-5 gap-6">
              {desktopRow3.map((client, i) => (
                <DesktopLogoCard key={`d3-${client.name}`} client={client} i={i} />
              ))}
            </div>
            <div className="flex justify-center gap-6">
              {desktopRow4.map((client, i) => (
                <div key={`d4-${client.name}`} className="w-[calc((100%-4*1.5rem)/5)] min-w-[180px]">
                  <DesktopLogoCard client={client} i={i} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats - apenas desktop */}
        <div
          className="hidden md:block mt-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease-out 0.3s, transform 0.7s ease-out 0.3s",
          }}
        >
          <div className="relative rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-sm px-8 py-6">
            <div className="absolute inset-x-10 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />
            <div className="absolute inset-x-20 -bottom-2 h-3 bg-primary/30 blur-xl opacity-70" />
            <div className="grid grid-cols-3 gap-6 items-center">
              <div className="flex items-center gap-4 justify-center">
                <Users className="w-9 h-9 text-primary" strokeWidth={1.5} />
                <div className="text-left">
                  <div className="text-3xl font-bold text-primary-foreground leading-none">+50</div>
                  <div className="text-sm text-primary-foreground/70 mt-1">Empresas atendidas</div>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center">
                <Award className="w-9 h-9 text-primary" strokeWidth={1.5} />
                <div className="text-left">
                  <div className="text-3xl font-bold text-primary-foreground leading-none">96%</div>
                  <div className="text-sm text-primary-foreground/70 mt-1">Satisfação dos clientes</div>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center">
                <Handshake className="w-9 h-9 text-primary" strokeWidth={1.5} />
                <div className="text-left">
                  <div className="text-2xl font-bold text-primary-foreground leading-none">Parcerias</div>
                  <div className="text-sm text-primary-foreground/70 mt-1">de confiança e resultados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
