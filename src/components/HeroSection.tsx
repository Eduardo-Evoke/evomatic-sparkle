import { Calendar, Headset, MonitorCheck, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Header from "./Header";

const HeroSection = () => {
  const badges = [
    { icon: Calendar, label: "+12 anos de", sublabel: "Mercado" },
    { icon: Headset, label: "Equipe", sublabel: "Certificada" },
    { icon: Clock, label: "SLA", sublabel: "Garantido" },
    { icon: MonitorCheck, label: "Monitoramento", sublabel: "Contínuo" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pb-0 pt-[72px]">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[center_60%]"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-b from-transparent to-background z-[1]" />
      <Header />

      {/* Hero content + cards together */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto w-full py-7">
        <div className="max-w-3xl text-center mb-8 md:mb-16">
          <h1 className="text-[1.75rem] md:text-6xl lg:text-7xl leading-[1.1] md:leading-tight mb-6 md:mb-8 text-primary font-bold font-display">
            {"Soluções de TI para estruturar, modernizar e conectar sua empresa".split(" ").map((word, i) => {
              const cleanWord = word.replace(/,/g, "");
              const isHighlight = ["estruturar", "modernizar", "conectar"].includes(cleanWord.toLowerCase());
              const isWhitePulse = ["soluções", "de", "ti"].includes(cleanWord.toLowerCase());
              const totalWords = 9;
              const lastWordDelay = 0.5 + (totalWords - 1) * 0.12 + 0.8; // when last word finishes fade-in
              return (
                <span
                  key={i}
                  className={`inline-block opacity-0 animate-[fade-in_0.8s_ease-out_forwards] ${isHighlight ? "text-[1.875rem] md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent animate-[fade-in_0.8s_ease-out_forwards,glow-text_2.5s_ease-in-out_forwards]" : ""}`}
                  style={{
                    animationDelay: `${0.5 + i * 0.12}s`,
                    ...(isWhitePulse ? {
                      animation: `fade-in 0.8s ease-out ${0.5 + i * 0.12}s forwards, white-pulse 1.5s ease-in-out ${lastWordDelay}s forwards, white-pulse-loop 2s ease-in-out ${lastWordDelay + 1.5}s infinite`,
                    } : {}),
                  }}
                >
                  {word}&nbsp;
                </span>
              );
            })}
          </h1>

          <p className="text-base md:text-2xl max-w-2xl mx-auto leading-relaxed font-display lg:text-2xl font-semibold text-primary-foreground">
            Há mais de 12 anos organizando, protegendo e evoluindo ambientes de TI com
            soluções completas em infraestrutura, cloud e segurança.
          </p>
        </div>

        {/* Info cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
          {badges.map((badge, i) => (
            <div
              key={badge.label}
              className="backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 cursor-default group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] bg-background/40"
              style={{
                animationDelay: `${0.6 + i * 0.12}s`,
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-foreground text-xl font-bold block leading-tight">{badge.label}</span>
              <span className="text-foreground/50 leading-tight mt-1 font-semibold text-lg">{badge.sublabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
