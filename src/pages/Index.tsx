import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import NetworkBackground from "@/components/NetworkBackground";
import SEO from "@/components/SEO";
import { ORGANIZATION_SCHEMA, LOCAL_BUSINESS_SCHEMA, WEBSITE_SCHEMA } from "@/lib/seo";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const PartnersSection = lazy(() => import("@/components/PartnersSection"));
const ClientsSection = lazy(() => import("@/components/ClientsSection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));
const TicketButton = lazy(() => import("@/components/TicketButton"));

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
      <SEO
        title="Evomatic — Empresa de TI em Jundiaí e Campinas | Infraestrutura, Cloud e Segurança"
        description="Empresa de TI em Jundiaí/SP com atuação em Campinas e região. Suporte técnico, infraestrutura, cloud, segurança da informação e adequação à LGPD há mais de 12 anos."
        path="/"
        schemas={[ORGANIZATION_SCHEMA, LOCAL_BUSINESS_SCHEMA, WEBSITE_SCHEMA]}
      />
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
           <h2 className="text-3xl font-bold font-display text-[#b80a2d] md:text-5xl">Nossas Soluções</h2>
          <p className="text-sm mt-3 max-w-xs mx-auto text-primary-foreground md:max-w-none md:whitespace-nowrap md:text-2xl">Tecnologia, segurança e estratégia para sua empresa crescer sem riscos.</p>
        </div>
      </SectionFade>
      <Suspense fallback={null}>
        <ServicesSection />
        <ClientsSection />
        <PartnersSection />
        <FooterSection className="relative z-10 border-t border-white/[0.06] bg-transparent shadow-[0_-4px_30px_rgba(0,0,0,0.4)]" />
        <WhatsAppButton />
        <TicketButton />
      </Suspense>
    </main>
  );
};

export default Index;
