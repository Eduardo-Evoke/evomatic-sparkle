import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import logoTdSynnex from "@/assets/logo-tdsynnex.png";
import logoIngramMicro from "@/assets/logo-ingrammicro.png";
import logoManageEngine from "@/assets/manage-enigme.png";
import logoAruba from "@/assets/logo-aruba.png";
import logoLenovo from "@/assets/logo-lenovo.png";
import logoProxmox from "@/assets/logo-proxmox.png";
import logoAws from "@/assets/logo-aws.png";

const allPartners = [
  { name: "Microsoft", logo: "https://img.icons8.com/fluency/120/microsoft.png", size: "h-[70px]" },
  { name: "Azure", logo: "https://img.icons8.com/fluency/120/azure-1.png", size: "h-[70px]" },
  { name: "AWS", logo: logoAws, size: "h-[70px]" },
  { name: "Fortinet", logo: "https://cdn.simpleicons.org/fortinet/EE3124", size: "h-[70px]" },
  { name: "Kaspersky", logo: "https://cdn.simpleicons.org/kaspersky/00A88E", size: "h-[80px]" },
  { name: "Bitdefender", logo: "https://cdn.simpleicons.org/bitdefender/ED1C24", size: "h-[70px]" },
  { name: "Dell", logo: "https://img.icons8.com/color/120/dell.png", size: "h-[70px]" },
  { name: "HPE", logo: "https://cdn.simpleicons.org/hp/0096D6", size: "h-[70px]" },
  { name: "Lenovo", logo: logoLenovo, size: "h-[55px]" },
  { name: "Aruba", logo: logoAruba, size: "h-[70px]" },
  { name: "Ubiquiti", logo: "https://cdn.simpleicons.org/ubiquiti/0559C9", size: "h-[70px]" },
  { name: "VMware", logo: "https://cdn.simpleicons.org/vmware/607078", size: "h-[80px]" },
  { name: "Proxmox", logo: logoProxmox, size: "h-[70px]" },
  { name: "ManageEngine", logo: logoManageEngine, size: "h-[70px]" },
  { name: "TD Synnex", logo: logoTdSynnex, size: "h-[70px]" },
  { name: "Ingram Micro", logo: logoIngramMicro, size: "h-[70px]" },
];

const VISIBLE_COUNT = 5;
const CYCLE_MS = 3000;

const PartnersSection = () => {
  const isMobile = useIsMobile();
  const visibleCount = isMobile ? 3 : 5;
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + visibleCount) % allPartners.length);
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, [isVisible, visibleCount]);

  const visiblePartners = Array.from({ length: visibleCount }, (_, i) => {
    const idx = (activeIndex + i) % allPartners.length;
    return allPartners[idx];
  });

  return (
    <section className="pt-20 pb-8 px-5 relative z-10">
      <div className="max-w-4xl mx-auto backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] bg-background/40" ref={ref}>
        <h2
          className="font-bold text-center mb-3 text-primary text-2xl md:text-5xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          Parceiros Estratégicos
        </h2>
        <p
          className="text-center mb-12 text-primary-foreground text-sm md:text-xl md:whitespace-nowrap"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease-out 0.15s",
          }}
        >
          Trabalhamos com os maiores nomes do mercado.
        </p>

        <div className="flex items-end justify-center gap-4 md:gap-14 min-h-[108px] overflow-hidden flex-wrap md:flex-nowrap">
          {visiblePartners.map((partner, i) => (
            <div
              key={`${activeIndex}-${partner.name}`}
              className="flex flex-col items-center gap-2 min-w-[60px] md:min-w-[100px] group"
              style={{
                animation: `partnerFadeIn 0.6s ease-out ${i * 0.12}s both`,
              }}
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`h-[40px] md:${partner.size || 'h-14'} w-auto object-contain opacity-90 hover:opacity-100 transition-opacity`}
                  loading="lazy"
                />
              ) : (
                <span className="text-base font-bold text-foreground/50 hover:text-foreground/80 transition-colors">
                  {partner.name}
                </span>
              )}
              <span className="mt-1 text-primary-foreground text-xs md:text-base font-semibold">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: Math.ceil(allPartners.length / visibleCount) }).map((_, i) => (
            <span
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                Math.floor(activeIndex / visibleCount) === i
                  ? "bg-primary w-4"
                  : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes partnerFadeIn {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
