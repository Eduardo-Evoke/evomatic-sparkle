import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";
import ClientsSection from "@/components/ClientsSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import TicketButton from "@/components/TicketButton";
import NetworkBackground from "@/components/NetworkBackground";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const SectionFade = ({ from, to, height = "h-40", children }: { from: string; to: string; height?: string; children?: React.ReactNode }) => (
  <div
    className={`${height} w-full relative z-30 -my-1 flex items-center justify-center`}
    style={{
      background: `linear-gradient(to bottom, ${from} 0%, ${to} 100%)`,
    }}
  >
    {children}
  </div>
);

const Index = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <main className="overflow-hidden relative">
      <NetworkBackground />
      <HeroSection />
      <SectionFade from="transparent" to="transparent" height="h-44 md:h-28">
        <div
          ref={titleRef}
          className="text-center relative z-50 mt-12"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
           <h2 className="text-2xl font-bold font-display text-[#b80a2d] md:text-5xl">Nossas Soluções</h2>
          <p className="text-sm mt-3 max-w-xs mx-auto text-primary-foreground md:max-w-none md:whitespace-nowrap md:text-2xl">Tecnologia, segurança e estratégia para sua empresa crescer sem riscos.</p>
        </div>
      </SectionFade>
      <ServicesSection />
      <ClientsSection />
      <PartnersSection />
      <FooterSection className="relative z-10 border-t border-white/[0.06] bg-transparent shadow-[0_-4px_30px_rgba(0,0,0,0.4)]" />
      <WhatsAppButton />
      <TicketButton />
    </main>
  );
};

export default Index;
