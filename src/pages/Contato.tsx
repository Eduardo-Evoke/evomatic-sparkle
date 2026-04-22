import { useRef, useEffect, useState } from "react";
import { Mail, Phone, MapPin, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import StaticTexture from "@/components/StaticTexture";

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const Reveal = ({ children, delay = 0, direction = "up", className = "" }: {
  children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right"; className?: string;
}) => {
  const { ref, visible } = useReveal(0.12);
  const transform = direction === "up" ? "translateY(40px)" : direction === "left" ? "translateX(-40px)" : "translateX(40px)";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0)" : transform,
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const Contato = () => {
  return (
    <main className="overflow-hidden relative">
      <StaticTexture />
      <Header />

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal delay={0}>
            <h1 className="text-4xl md:text-6xl font-bold font-display text-primary mb-4">
              Fale Conosco
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-primary-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Estamos prontos para atender sua empresa. Escolha o canal mais conveniente.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative z-10 px-6 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <Reveal delay={0.15}>
            <a
              href="https://wa.me/5511991784226"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 bg-background/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-bold text-xl">WhatsApp</h3>
              <p className="text-primary-foreground text-base font-semibold">(11) 99178-4226</p>
            </a>
          </Reveal>

          {/* Email */}
          <Reveal delay={0.25}>
            <a
              href="mailto:contato@evomatic.com.br"
              className="group flex flex-col items-center gap-4 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 bg-background/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-bold text-xl">E-mail</h3>
              <p className="text-primary-foreground text-base font-semibold">contato@evomatic.com.br</p>
            </a>
          </Reveal>

          {/* Carreiras */}
          <Reveal delay={0.35}>
            <a
              href="mailto:rh@evomatic.com.br"
              className="group flex flex-col items-center gap-4 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 bg-background/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-bold text-xl">Carreiras</h3>
              <p className="text-primary-foreground text-base font-semibold">rh@evomatic.com.br</p>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Address + Map */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.2}>
            <div className="backdrop-blur-sm border border-white/[0.08] rounded-2xl overflow-hidden bg-background/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
                {/* Address Info */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-foreground font-bold text-2xl">Visite-nos</h3>
                  </div>
                  <p className="text-primary-foreground leading-relaxed text-base font-semibold text-center">
                    Rua Itirapina, 1060, 1º Andar, Sala 12<br />
                    Bairro: Cidade Luiza<br />
                    CEP: 13214-101&nbsp;<br />
                    Jundiaí - SP
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-primary text-center font-bold">
                      Venha tomar um café conosco, será um prazer recebê-lo.
                    </p>
                  </div>
                </div>

                {/* Map */}
                <div className="min-h-[320px] md:min-h-[380px]">
                  <iframe
                    title="Localização Evomatic"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5!2d-46.8978!3d-23.1897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua+Itirapina+1060+Jundia%C3%AD+SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    style={{ border: 0, filter: "grayscale(0.3) brightness(1.1) contrast(1.05)", minHeight: 320 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      
      <WhatsAppButton />
    </main>
  );
};

export default Contato;