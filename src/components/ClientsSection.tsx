import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import logoAcmr from "@/assets/clients/acmr.png";
import logoApplausi from "@/assets/clients/applausi.png";
import logoArc from "@/assets/clients/arc.png";
import logoBenfrio from "@/assets/clients/benfrio.png";
import logoColegioViaBrasil from "@/assets/clients/colegio-via-brasil.png";
import logoGrupoPredigna from "@/assets/clients/grupo-predigna.png";
import logoLavateriaFast from "@/assets/clients/lavateria-fast.jpeg";
import logoLavoro from "@/assets/clients/lavoro.png";
import logoFazendaBelaVista from "@/assets/clients/fazenda-bela-vista.png";
import logoMartinBrower from "@/assets/clients/martin-brower.png";
import logoMedianiVizicato from "@/assets/clients/mediani-vizicato.png";
import logoMemorial from "@/assets/clients/memorial.png";
import logoNesp from "@/assets/clients/nesp.png";
import logoOpuspac from "@/assets/clients/opuspac.png";
import logoRotaMarket from "@/assets/clients/rota-market.jpeg";
import logoRuffato from "@/assets/clients/ruffato.png";
import logoSimplify from "@/assets/clients/simplify.jpeg";

const clients = [
  { name: "ACMR", logo: logoAcmr },
  { name: "Applausi", logo: logoApplausi },
  { name: "ARC", logo: logoArc },
  { name: "Benfrio", logo: logoBenfrio },
  { name: "Colégio Anglo Via Brasil", logo: logoColegioViaBrasil },
  { name: "Grupo Predigna", logo: logoGrupoPredigna },
  { name: "Lavateria Fast", logo: logoLavateriaFast },
  { name: "Lavoro Terraplenagem", logo: logoLavoro },
  { name: "Fazenda Bela Vista", logo: logoFazendaBelaVista },
  { name: "Martin Brower", logo: logoMartinBrower },
  { name: "Mediani & Vizicato", logo: logoMedianiVizicato },
  { name: "Memorial Parque da Paz", logo: logoMemorial },
  { name: "NESP", logo: logoNesp },
  { name: "Opuspac", logo: logoOpuspac },
  { name: "Rota Market Fast", logo: logoRotaMarket },
  { name: "Ruffato Contabilidade", logo: logoRuffato },
  { name: "Simplify", logo: logoSimplify },
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
          Nossos Clientes
        </h2>
        <p
          className="text-center mb-10 text-primary-foreground text-sm md:text-xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease-out 0.15s",
          }}
        >
          Empresas que confiam na Evomatic para crescer com segurança.
        </p>

        <div className="relative overflow-hidden">
          <div className="flex animate-[marquee_40s_linear_infinite] gap-12 md:gap-16 items-center w-max">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex-shrink-0 flex items-center justify-center h-16 md:h-20 px-4"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full w-auto max-w-[140px] md:max-w-[180px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
