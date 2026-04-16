import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Urbanist";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700", "800", "900"],
  subsets: ["latin"],
});

const phases = [
  { number: "01", title: "Diagnóstico", desc: "Análise completa do nível de adequação à LGPD" },
  { number: "02", title: "Mapeamento + Fluxos de Dados", desc: "Identificação e catalogação de todos os dados pessoais" },
  { number: "03", title: "Base Legal + Avaliação de Risco", desc: "Definição das bases legais e avaliação de riscos" },
  { number: "04", title: "Políticas e Governança", desc: "Criação de políticas de privacidade e governança" },
  { number: "05", title: "Segurança da Informação", desc: "Controles técnicos e organizacionais de segurança" },
  { number: "06", title: "Gestão de Terceiros", desc: "Avaliação de fornecedores que tratam dados" },
  { number: "07", title: "Treinamento", desc: "Capacitação sobre proteção de dados" },
  { number: "08", title: "Gestão de Consentimento e Direitos", desc: "Controles de consentimento e direitos dos titulares" },
  { number: "09", title: "Plano de Incidentes", desc: "Procedimentos para tratamento de vazamentos" },
  { number: "10", title: "Monitoramento e Auditoria", desc: "Acompanhamento permanente da conformidade" },
];

const RED = "#cd0a31";
const DARK = "#0a0a1a";
const LIGHT_BG = "#f0f1f5";

export const MainVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background subtle pulse
  const bgPulse = interpolate(Math.sin(frame * 0.02), [-1, 1], [0.97, 1.03]);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 50% 40%, #1a1a2e, ${DARK})`,
        fontFamily,
        overflow: "hidden",
      }}
    >
      {/* Animated background grid */}
      <AbsoluteFill style={{ opacity: 0.04 }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${(i % 5) * 25}%`,
              top: `${Math.floor(i / 5) * 25}%`,
              width: 270,
              height: 270,
              border: "1px solid white",
              borderRadius: 8,
              transform: `rotate(${Math.sin(frame * 0.01 + i) * 3}deg)`,
            }}
          />
        ))}
      </AbsoluteFill>

      {/* Floating red glow orbs */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${RED}33, transparent 70%)`,
          left: -100 + Math.sin(frame * 0.015) * 40,
          top: -100 + Math.cos(frame * 0.012) * 30,
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${RED}22, transparent 70%)`,
          right: -80 + Math.cos(frame * 0.018) * 50,
          bottom: -80 + Math.sin(frame * 0.014) * 40,
          filter: "blur(50px)",
        }}
      />

      {/* Title sequence */}
      <Sequence from={0} durationInFrames={75}>
        <TitleScene />
      </Sequence>

      {/* Phase cards appearing one by one */}
      {phases.map((phase, i) => (
        <Sequence key={i} from={60 + i * 36} durationInFrames={480 - (60 + i * 36)}>
          <PhaseCard phase={phase} index={i} totalPhases={phases.length} />
        </Sequence>
      ))}

      {/* Final completion burst */}
      <Sequence from={420} durationInFrames={60}>
        <CompletionScene />
      </Sequence>
    </AbsoluteFill>
  );
};

const TitleScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 15, stiffness: 80 } });
  const subtitleSpring = spring({ frame: frame - 12, fps, config: { damping: 20 } });
  const lineScale = spring({ frame: frame - 8, fps, config: { damping: 25 } });

  const titleY = interpolate(titleSpring, [0, 1], [60, 0]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const subtitleOpacity = interpolate(subtitleSpring, [0, 1], [0, 1]);
  const subtitleY = interpolate(subtitleSpring, [0, 1], [30, 0]);

  // Exit
  const exitOpacity = interpolate(frame, [55, 70], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: exitOpacity,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "white",
            transform: `translateY(${titleY}px)`,
            opacity: titleOpacity,
            letterSpacing: -2,
          }}
        >
          Adequação à <span style={{ color: RED }}>LGPD</span>
        </div>
        <div
          style={{
            width: interpolate(lineScale, [0, 1], [0, 200]),
            height: 4,
            background: `linear-gradient(90deg, transparent, ${RED}, transparent)`,
            margin: "16px auto",
            borderRadius: 2,
          }}
        />
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.6)",
            transform: `translateY(${subtitleY}px)`,
            opacity: subtitleOpacity,
            fontWeight: 400,
          }}
        >
          10 fases para conformidade total
        </div>
      </div>
    </AbsoluteFill>
  );
};

const PhaseCard: React.FC<{
  phase: { number: string; title: string; desc: string };
  index: number;
  totalPhases: number;
}> = ({ phase, index, totalPhases }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Layout: 2 columns of 5
  const col = index < 5 ? 0 : 1;
  const row = index % 5;

  const cardSpring = spring({ frame, fps, config: { damping: 14, stiffness: 120 } });
  const numberSpring = spring({ frame: frame - 5, fps, config: { damping: 10 } });
  const textSpring = spring({ frame: frame - 10, fps, config: { damping: 18 } });

  const cardScale = interpolate(cardSpring, [0, 1], [0.5, 1]);
  const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1]);
  const cardX = interpolate(cardSpring, [0, 1], [col === 0 ? -80 : 80, 0]);

  const numberScale = interpolate(numberSpring, [0, 1], [0, 1]);
  const textOpacity = interpolate(textSpring, [0, 1], [0, 1]);
  const textX = interpolate(textSpring, [0, 1], [20, 0]);

  // Subtle idle float
  const floatY = Math.sin(frame * 0.04 + index * 0.8) * 2;

  // Card positions
  const cardWidth = 440;
  const cardHeight = 80;
  const startX = col === 0 ? 60 : 560;
  const startY = 140 + row * 100;

  // Progress line connecting cards
  const progressWidth = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        position: "absolute",
        left: startX,
        top: startY + floatY,
        width: cardWidth,
        height: cardHeight,
        transform: `scale(${cardScale}) translateX(${cardX}px)`,
        opacity: cardOpacity,
      }}
    >
      {/* Glow behind card */}
      <div
        style={{
          position: "absolute",
          inset: -8,
          background: `${RED}15`,
          borderRadius: 20,
          filter: "blur(15px)",
          opacity: interpolate(cardSpring, [0.5, 1], [0, 1], { extrapolateLeft: "clamp" }),
        }}
      />

      {/* Card */}
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "rgba(255,255,255,0.06)",
          border: `1px solid rgba(255,255,255,0.1)`,
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Red accent line on left */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 4,
            background: RED,
            borderRadius: "4px 0 0 4px",
            transform: `scaleY(${progressWidth})`,
            transformOrigin: "top",
          }}
        />

        {/* Number circle */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${RED}, #ff2a4a)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transform: `scale(${numberScale})`,
            boxShadow: `0 4px 20px ${RED}55`,
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: 800,
            }}
          >
            {phase.number}
          </span>
        </div>

        {/* Text */}
        <div
          style={{
            opacity: textOpacity,
            transform: `translateX(${textX}px)`,
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 17,
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {phase.title}
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: 12,
              fontWeight: 400,
              marginTop: 2,
            }}
          >
            {phase.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

const CompletionScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const burstSpring = spring({ frame, fps, config: { damping: 12 } });
  const textSpring = spring({ frame: frame - 10, fps, config: { damping: 15 } });

  const ringScale = interpolate(burstSpring, [0, 1], [0, 1.2]);
  const ringOpacity = interpolate(burstSpring, [0, 0.5, 1], [0, 0.8, 0]);

  const checkScale = interpolate(textSpring, [0, 1], [0, 1]);
  const textOpacity = interpolate(textSpring, [0, 1], [0, 1]);
  const textY = interpolate(textSpring, [0, 1], [20, 0]);

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      {/* Burst ring */}
      <div
        style={{
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: "50%",
          border: `3px solid ${RED}`,
          transform: `scale(${ringScale})`,
          opacity: ringOpacity,
        }}
      />

      {/* Check + text */}
      <div style={{ textAlign: "center", transform: `scale(${checkScale})` }}>
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${RED}, #ff2a4a)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
            boxShadow: `0 0 40px ${RED}66`,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>
        <div
          style={{
            color: "white",
            fontSize: 32,
            fontWeight: 800,
            opacity: textOpacity,
            transform: `translateY(${textY}px)`,
          }}
        >
          Conformidade <span style={{ color: RED }}>Total</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
