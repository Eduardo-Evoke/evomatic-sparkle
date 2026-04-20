/**
 * LgpdBackground
 * Fundo corporativo para a página LGPD.
 * Remete a tratamento/proteção de dados pessoais:
 *  - Base cinza-grafite neutra
 *  - Grid técnico discreto (estrutura/governança)
 *  - Padrão sutil de dígitos binários (dados sendo processados)
 *  - Glows radiais para profundidade
 *  - Vinheta para foco no conteúdo
 */
const LgpdBackground = () => {
  // Padrão de binários repetível (SVG monocromático, opacidade controlada via container)
  const binaryPattern =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='360' height='180' viewBox='0 0 360 180'><g font-family='ui-monospace,Menlo,monospace' font-size='12' fill='white'><text x='6' y='18'>01001100 01000111 01010000 01000100</text><text x='6' y='42'>11010010 00110101 10100110 01011001</text><text x='6' y='66'>00110100 01010110 01100001 11010010</text><text x='6' y='90'>10110011 01001010 11000101 01101001</text><text x='6' y='114'>01100100 01100001 01110100 01100001</text><text x='6' y='138'>11001100 01010101 00110011 10101010</text><text x='6' y='162'>00010111 11100010 01010101 01000011</text></g></svg>\")";

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base: gradiente cinza-grafite neutro */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(220 10% 12%) 0%, hsl(220 8% 14%) 45%, hsl(220 9% 11%) 100%)",
        }}
      />

      {/* Grid técnico fino e discreto (governança / estrutura) */}
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

      {/* Padrão sutil de dígitos binários — dados pessoais processados */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: binaryPattern,
          backgroundRepeat: "repeat",
          backgroundSize: "360px 180px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Ruído suave para quebrar uniformidade digital */}
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
            "radial-gradient(ellipse at center, transparent 60%, hsla(0,0%,0%,0.25) 100%)",
        }}
      />
    </div>
  );
};

export default LgpdBackground;
