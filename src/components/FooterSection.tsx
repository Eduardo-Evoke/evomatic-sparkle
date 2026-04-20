import { Mail, Phone, MapPin, Briefcase, Instagram, Linkedin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const FooterColumn = ({ children, i }: { children: React.ReactNode; i: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const delay = i * 0.1;
  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(80px) scale(0.85)",
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

const FooterSection = ({ className = "relative z-10 border bg-card" }: { className?: string }) => {
  return (
    <footer id="contato" className={className}>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto py-[10px] px-[10px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-8 md:p-10">
          {[0, 1, 2].map((colIndex) => {
            const content = [
              // Contato
              <div key="contato" className="text-primary-foreground">
                <h3 className="font-bold text-foreground mb-6 flex items-center gap-2 text-3xl">
                  <Phone className="w-5 h-5" />
                  Contato
                </h3>
                <div className="space-y-3">
                  <a href="mailto:contato@evomatic.com.br" className="flex items-center gap-3 transition-colors text-base font-semibold text-primary-foreground">
                    <Mail className="w-4 h-4 text-primary-foreground" />
                    contato@evomatic.com.br
                  </a>
                  <a href="https://wa.me/5511991784226" className="flex items-center gap-3 transition-colors text-primary-foreground text-base font-semibold">
                    <svg className="w-4 h-4 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    (11) 99178-4226
                  </a>
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href="https://www.instagram.com/evomatic.it/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                      style={{ background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/evomaticti/?viewAsMember=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                      style={{ backgroundColor: "#0A66C2" }}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>,
              // Endereço
              <div key="endereco">
                <h3 className="font-bold text-foreground mb-6 flex items-center gap-2 text-3xl">
                  <MapPin className="w-5 h-5" />
                  Endereço
                </h3>
                <p className="leading-relaxed mb-4 text-primary-foreground text-base font-semibold">
                  Rua Itirapina, 1060, 1º Andar, Sala 12<br />
                  Bairro: Cidade Luiza<br />
                  CEP: 13214-101 — Jundiaí - SP
                </p>
                <div className="rounded-xl overflow-hidden border border-white/[0.08] opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <iframe
                    title="Localização Evomatic"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5!2d-46.8978!3d-23.1897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua+Itirapina+1060+Jundia%C3%AD+SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                    width="100%"
                    height="140"
                    style={{ border: 0, filter: "grayscale(0.3) brightness(1.1) contrast(1.05)" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>,
              // Carreiras
              <div key="carreiras">
                <h3 className="font-bold text-foreground mb-6 flex items-center gap-2 text-3xl">
                  <Briefcase className="w-5 h-5" />
                  Carreiras
                </h3>
                <p className="mb-4 text-primary-foreground text-base font-semibold">
                  Quer fazer parte do nosso time?<br />
                  Envie seu currículo:
                </p>
                <a
                  href="mailto:rh@evomatic.com.br"
                  className="hover:underline text-base text-primary-foreground font-semibold"
                >
                  rh@evomatic.com.br
                </a>
              </div>,
            ];

            return (
              <FooterColumn key={colIndex} i={colIndex}>
                {content[colIndex]}
              </FooterColumn>
            );
          })}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-6 px-6">
        <p className="text-center text-primary-foreground text-base">
          © {new Date().getFullYear()} Evomatic • Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
