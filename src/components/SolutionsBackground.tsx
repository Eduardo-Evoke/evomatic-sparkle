/**
 * SolutionsBackground
 * Fundo leve, moderno e tecnológico para as páginas de Soluções.
 * - Base cinza-grafite neutro (sem azul) suavizando o preto puro
 * - Grid técnico fino e discreto
 * - Glows radiais com blur forte para profundidade
 * - Ruído sutil para quebrar uniformidade digital
 * - Vinheta suave nas bordas para focar o conteúdo
 */
const SolutionsBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base: gradiente cinza-grafite neutro (mais leve que o preto puro) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(220 8% 9%) 0%, hsl(220 6% 11%) 45%, hsl(220 5% 8%) 100%)",
        }}
      />

      {/* Grid técnico fino e discreto */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(hsla(0,0%,100%,0.6) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      />

      {/* Linhas diagonais ultra sutis (textura tech abstrata) */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, hsla(0,0%,100%,0.4) 0 1px, transparent 1px 14px)",
        }}
      />

      {/* Ruído suave para quebrar a uniformidade digital */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* Glows radiais difusos — profundidade sem poluição */}
      <div className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full bg-primary/[0.05] blur-[160px]" />
      <div className="absolute top-[40%] -right-40 w-[560px] h-[560px] rounded-full bg-white/[0.025] blur-[170px]" />
      <div className="absolute bottom-[-10%] left-[30%] w-[520px] h-[520px] rounded-full bg-primary/[0.035] blur-[180px]" />

      {/* Vinheta sutil nas bordas para foco no conteúdo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, hsla(0,0%,0%,0.45) 100%)",
        }}
      />
    </div>
  );
};

export default SolutionsBackground;
