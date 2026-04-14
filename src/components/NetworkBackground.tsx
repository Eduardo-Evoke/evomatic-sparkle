import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
}

interface DataStream {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  active: boolean;
}

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const streamsRef = useRef<DataStream[]>([]);
  const animRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const count = 120;
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    // Distribute nodes evenly across a grid with randomization
    const cols = Math.ceil(Math.sqrt(count * (w / h)));
    const rows = Math.ceil(count / cols);
    const cellW = w / cols;
    const cellH = h / rows;
    nodesRef.current = Array.from({ length: count }, (_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      return {
        x: col * cellW + Math.random() * cellW,
        y: row * cellH + Math.random() * cellH,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.5 + 1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      };
    });

    // Initialize data streams
    streamsRef.current = Array.from({ length: 12 }, () => ({
      fromNode: Math.floor(Math.random() * count),
      toNode: Math.floor(Math.random() * count),
      progress: Math.random(),
      speed: 0.005 + Math.random() * 0.01,
      active: true,
    }));

    const maxDist = 180;

    const animate = () => {
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      timeRef.current += 0.016;
      ctx.clearRect(0, 0, cw, ch);

      const nodes = nodesRef.current;
      const streams = streamsRef.current;

      // Update positions
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.pulseSpeed;
        if (n.x < 0 || n.x > cw) n.vx *= -1;
        if (n.y < 0 || n.y > ch) n.vy *= -1;
      }

      // Draw connections with gradient
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            const grad = ctx.createLinearGradient(
              nodes[i].x, nodes[i].y,
              nodes[j].x, nodes[j].y
            );
            grad.addColorStop(0, `hsla(348, 91%, 45%, ${alpha})`);
            grad.addColorStop(0.5, `hsla(348, 91%, 55%, ${alpha * 1.2})`);
            grad.addColorStop(1, `hsla(348, 91%, 45%, ${alpha})`);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw data streams (traveling dots along connections)
      for (const stream of streams) {
        const from = nodes[stream.fromNode];
        const to = nodes[stream.toNode];
        if (!from || !to) continue;

        stream.progress += stream.speed;
        if (stream.progress >= 1) {
          stream.progress = 0;
          stream.fromNode = Math.floor(Math.random() * count);
          stream.toNode = Math.floor(Math.random() * count);
          stream.speed = 0.005 + Math.random() * 0.01;
        }

        const px = from.x + (to.x - from.x) * stream.progress;
        const py = from.y + (to.y - from.y) * stream.progress;

        // Glowing traveling dot
        const grd = ctx.createRadialGradient(px, py, 0, px, py, 6);
        grd.addColorStop(0, "hsla(348, 91%, 55%, 0.8)");
        grd.addColorStop(0.5, "hsla(348, 91%, 45%, 0.3)");
        grd.addColorStop(1, "hsla(348, 91%, 42%, 0)");
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      // Draw nodes with pulsing glow
      for (const n of nodes) {
        const pulseScale = 0.7 + Math.sin(n.pulse) * 0.3;
        const glowRadius = n.radius * 3 * pulseScale;

        // Outer glow
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowRadius);
        grd.addColorStop(0, `hsla(348, 91%, 50%, ${0.6 * pulseScale})`);
        grd.addColorStop(1, "hsla(348, 91%, 42%, 0)");
        ctx.beginPath();
        ctx.arc(n.x, n.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * pulseScale, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(348, 91%, 55%, ${0.6 + pulseScale * 0.3})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default NetworkBackground;
