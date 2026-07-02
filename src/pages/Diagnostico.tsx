import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import {
  ArrowRight,
  Lock,
  User as UserIcon,
  Mail,
  Phone,
  Award,
  Users,
  Headphones,
  Target,
  Check,
} from "lucide-react";

import heroImage from "@/assets/diagnostico/hero-executivo-preocupado.webp";
import iconFirewall from "@/assets/diagnostico/icon-firewall-3d.webp";
import iconBackup from "@/assets/diagnostico/icon-backup-3d.webp";
import iconAcesso from "@/assets/diagnostico/icon-acesso-3d.webp";
import iconSeguranca from "@/assets/diagnostico/icon-seguranca-3d.webp";
import iconDatabase from "@/assets/diagnostico/icon-database-3d.webp";
import iconShieldOff from "@/assets/diagnostico/icon-shieldoff-3d.webp";
import iconUserX from "@/assets/diagnostico/icon-userx-3d.webp";
import iconFileWarn from "@/assets/diagnostico/icon-filewarn-3d.webp";
import iconServerOff from "@/assets/diagnostico/icon-serveroff-3d.webp";
import iconRefresh from "@/assets/diagnostico/icon-refresh-3d.webp";
import iconShield3D from "@/assets/diagnostico/icon-shield-3d.webp";

const SITE_URL = "https://www.evomatic.com.br";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
const PAGE_TITLE = "Diagnóstico Gratuito de TI para Empresas | Evomatic";
const PAGE_DESC =
  "Identifique vulnerabilidades na infraestrutura de TI da sua empresa antes que gerem prejuízo. Diagnóstico gratuito com especialistas Evomatic.";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const RED = "#cb0822";

const perguntas = [
  {
    iconSrc: iconFirewall,
    text: (
      <>
        Você sabe{" "}
        <br />o que é um <span className="bg-[#cb0822] text-white px-2 py-0.5 rounded-md">firewall</span>?
      </>
    ),
  },
  {
    iconSrc: iconBackup,
    text: (
      <>
        Você tem certeza{"\u00a0"}
        <br />
        de que seus{"\u00a0"}
        <br />
        <span className="bg-[#cb0822] text-white px-2 py-0.5 rounded-md">backups</span>
        funcionam?
      </>
    ),
  },
  {
    iconSrc: iconAcesso,
    text: (
      <>
        Você sabe quem tem <span className="bg-[#cb0822] text-white px-2 py-0.5 rounded-md">acesso</span> aos sistemas e dados da sua empresa
        hoje?
      </>
    ),
  },
  {
    iconSrc: iconSeguranca,
    text: (
      <>
        Hoje você tem <span className="bg-[#cb0822] text-white px-2 py-0.5 rounded-md">evidências</span> de que sua empresa está segura?
      </>
    ),
  },
];

const problemas = [
  { iconSrc: iconDatabase, text: "Backup inexistente ou que nunca foi testado" },
  { iconSrc: iconShieldOff, text: "Firewall sem revisão ou inexistente" },
  { iconSrc: iconUserX, text: "Ex-colaboradores com acesso ativo aos sistemas" },
  { iconSrc: iconFileWarn, text: "Microsoft 365 sem proteção adequada" },
  { iconSrc: iconServerOff, text: "Servidores sem manutenção" },
  { iconSrc: iconRefresh, text: "Ausência de plano de recuperação de desastre" },
];

const rodape = [
  { icon: Award, title: "ESPECIALISTAS", subtitle: "CERTIFICADOS" },
  { icon: Users, title: "+12 ANOS DE", subtitle: "\u00a0EXPERIÊNCIA" },
  { icon: Headphones, title: "ATENDIMENTO", subtitle: "HUMANO" },
  {
    icon: Target,
    title: "FOCO NO QUE",
    subtitle: "IMPORTA:",
    extra: "SEU NEGÓCIO",
  },
];

const Diagnostico = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("Nome completo", form.nome);
      fd.append("E-mail corporativo", form.email);
      fd.append("WhatsApp / Telefone", form.telefone);
      fd.append("_subject", "Nova solicitação de diagnóstico gratuito");
      fd.append("_captcha", "false");
      fd.append("_template", "table");
      const res = await fetch(
        "https://formsubmit.co/ajax/comercial@evomatic.com.br",
        { method: "POST", body: fd, headers: { Accept: "application/json" } },
      );
      if (!res.ok) throw new Error("Falha no envio");
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", { content_name: "Diagnostico Gratuito" });
      }
      setForm({ nome: "", email: "", telefone: "" });
      toast.success("Solicitação enviada com sucesso!", {
        description: "Nossa equipe entrará em contato em até 1 dia útil.",
        duration: 4000,
        position: "top-right",
      });
    } catch {
      toast.error(
        "Não foi possível enviar sua solicitação. Tente novamente em alguns instantes.",
        { duration: 4000, position: "top-right" },
      );
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  const font = { fontFamily: '"Urbanist", system-ui, sans-serif' };

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href={`${SITE_URL}/diagnostico`} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/diagnostico`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="Evomatic — Soluções em TI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
      </Helmet>

      <main className="min-h-screen bg-white text-black" style={font}>
        {/* HERO */}
        <section
          className="relative flex flex-col overflow-hidden bg-black text-white"
          style={{ minHeight: "580px" }}
        >
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundPosition: "75% center",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 50%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.70) 0%, transparent 100%)",
            }}
          />

          <header className="relative z-10">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
              <div className="flex flex-col md:translate-x-[50px]">
                <img src="/logo-evomatic-white.webp" alt="Evomatic — Soluções em TI" className="h-[39px] w-auto md:h-[50px] md:translate-x-[10%]" />
                <p
                  className="-mt-1 pl-[1px] text-[8.5px] font-bold uppercase tracking-[0.18em] text-white/80 md:-mt-1 md:pl-[28px] md:text-[10px]"
                  style={font}
                >
                  {"\u00a0"}SOLUÇÕES EM TI
                </p>
              </div>
            </div>
          </header>

          <div className="z-10 mx-auto flex min-h-[520px] max-w-7xl flex-1 flex-col justify-between px-6 pt-10 pb-16 md:mx-auto md:w-full md:flex-none md:min-h-0 md:justify-start md:px-10 md:pt-20 md:pb-24">
            <div className="w-[92%] md:w-auto md:max-w-[500px] md:translate-x-[50px] md:pl-[28px]">
              <h1
                className="whitespace-pre-line font-extrabold uppercase leading-[1.02] tracking-tight text-[1.755rem] md:text-[clamp(2.025rem,4.5vw,3.375rem)]"
                style={font}
              >
                <span className="text-white">{"\n"}IDENTIFIQUE OS{"\n"}PRINCIPAIS</span>
                <br />
                <span className="text-white">riscos da sua</span>
                <br />
                <span className="text-white">INFRAESTRUTURA{"\n"}ANTES QUE ELES</span>
                <br />
                <span style={{ color: RED }}>VIREM PREJUÍZO.</span>
              </h1>

              <p className="mt-8 text-[16px] leading-[1.35] text-white/90 md:mt-8 md:text-lg md:leading-relaxed" style={font}>
                Descubra vulnerabilidades, reduza riscos e tome decisões com mais confiança, com base em uma avaliação técnica da sua infraestrutura.
              </p>
            </div>

            <div className="mt-[5vh] mb-[10px] flex flex-col items-center gap-4 md:mt-10 md:mb-0 md:items-start md:translate-x-[50px] md:pl-[28px] md:gap-3">
              <button
                onClick={scrollToForm}
                className="inline-flex w-[85%] items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-lg transition-opacity hover:opacity-90 md:w-fit md:gap-5 md:px-7 md:py-4 md:text-sm"
                style={{ backgroundColor: RED }}
              >
                <span>QUERO UMA AVALIAÇÃO GRATUITA</span>
                <ArrowRight className="h-3.5 w-3.5 md:h-[17px] md:w-[17px]" strokeWidth={2.5} />
              </button>
              <div className="flex items-center gap-2 text-[14px] text-[#D1D5DB] md:text-xs md:font-normal md:text-white/70">
                <Lock className="h-3 w-3 md:h-3 md:w-3" />
                <span>100% gratuito e sem compromisso</span>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2 — REFLITA SOBRE ESTAS 4 PERGUNTAS */}
        <section className="relative overflow-hidden bg-[#f7f9fc] py-16 md:py-24">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
                `<svg xmlns='http://www.w3.org/2000/svg' width='1440' height='900' viewBox='0 0 1440 900' preserveAspectRatio='xMidYMid slice'>
                  <defs>
                    <pattern id='mesh' x='0' y='0' width='120' height='120' patternUnits='userSpaceOnUse'>
                      <circle cx='60' cy='60' r='1.6' fill='%23647480' opacity='0.65'/>
                      <circle cx='0'  cy='0'  r='1.0' fill='%23647480' opacity='0.50'/>
                      <circle cx='120' cy='0'  r='1.0' fill='%23647480' opacity='0.50'/>
                      <circle cx='0'  cy='120' r='1.0' fill='%23647480' opacity='0.50'/>
                      <circle cx='120' cy='120' r='1.0' fill='%23647480' opacity='0.50'/>
                      <line x1='0'  y1='0'  x2='60' y2='60' stroke='%2394a3b8' stroke-width='0.55' opacity='0.35'/>
                      <line x1='120' y1='0'  x2='60' y2='60' stroke='%2394a3b8' stroke-width='0.55' opacity='0.35'/>
                      <line x1='0'  y1='120' x2='60' y2='60' stroke='%2394a3b8' stroke-width='0.55' opacity='0.35'/>
                      <line x1='120' y1='120' x2='60' y2='60' stroke='%2394a3b8' stroke-width='0.55' opacity='0.35'/>
                      <line x1='60' y1='0'  x2='60' y2='60' stroke='%2394a3b8' stroke-width='0.35' opacity='0.25'/>
                      <line x1='0'  y1='60' x2='60' y2='60' stroke='%2394a3b8' stroke-width='0.35' opacity='0.25'/>
                      <line x1='60' y1='60' x2='120' y2='60' stroke='%2394a3b8' stroke-width='0.35' opacity='0.25'/>
                      <line x1='60' y1='60' x2='60' y2='120' stroke='%2394a3b8' stroke-width='0.35' opacity='0.25'/>
                    </pattern>
                  </defs>
                  <rect width='100%' height='100%' fill='url(%23mesh)'/>
                  <g fill='none' stroke='%2394a3b8' stroke-width='0.45' opacity='0.30'>
                    <path d='M120 120 Q 360 60  600 150 Q 840 240 1080 180 Q 1320 120 1440 240'/>
                    <path d='M0   300 Q 240 240 480 360 Q 720 480 960 420 Q 1200 360 1440 450'/>
                    <path d='M60  600 Q 300 540 540 660 Q 780 780 1020 720 Q 1260 660 1380 780'/>
                    <path d='M0   780 Q 300 840 600 720 Q 900 600 1200 660 Q 1440 720 1440 840'/>
                  </g>
                  <g fill='none' stroke='%23cbd5e1' stroke-width='0.6' opacity='0.45' stroke-linecap='round'>
                    <line x1='0'   y1='450' x2='1440' y2='450'/>
                    <line x1='720' y1='0'   x2='720'  y2='900'/>
                  </g>
                </svg>`
              )}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(247,249,252,0.55) 70%, rgba(247,249,252,0.90) 100%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <div className="mb-12 flex items-center justify-center gap-4">
              <span className="h-px w-12 md:w-16" style={{ backgroundColor: RED }} />
              <h2
                className="text-center text-xl font-extrabold uppercase tracking-wide text-black md:text-2xl"
                style={font}
              >
                <span className="text-black">REFLITA</span> SOBRE ESTAS{" "}
                <span style={{ color: RED }}>4 PERGUNTAS</span>
              </h2>
              <span className="h-px w-12 md:w-16" style={{ backgroundColor: RED }} />
            </div>

            <div className="space-y-4">
              {perguntas.map(({ iconSrc, text }, i) => (
                <div
                  key={i}
                  className="mx-auto flex max-w-3xl items-center gap-6 rounded-xl bg-black/85 px-6 py-3 shadow-2xl backdrop-blur-2xl border border-white/10 md:px-8 md:py-4"
                >
                  <img
                    src={iconSrc}
                    alt=""
                    className="h-20 w-20 shrink-0 object-contain md:h-24 md:w-24"
                    loading="lazy"
                  />
                  <span className="h-12 w-px md:h-14" style={{ backgroundColor: RED }} />
                  <p className="text-base font-semibold leading-snug text-white md:text-lg" style={font}>
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 mx-auto max-w-3xl px-2">
              <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10">
                <img
                  src={iconShield3D}
                  alt="Alerta de segurança"
                  className="h-40 w-40 shrink-0 object-contain drop-shadow-[0_18px_35px_rgba(203,8,34,0.35)] md:h-52 md:w-52"
                  loading="lazy"
                />
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg leading-relaxed text-black md:text-xl" style={font}>
                    Se você não consegue responder todas essas perguntas com segurança, vale a pena{" "}
                    <span className="font-bold" style={{ color: RED }}>descobrir o que está colocando sua empresa em risco.</span>
                  </p>
                  <div className="mt-6 flex justify-center md:justify-start">
                    <a
                      href="#formulario"
                      className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
                      style={{ backgroundColor: RED, ...font }}
                    >
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-white/90 text-[10px]">✓</span>
                      Descobrir meus riscos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO PROBLEMAS */}
        <section className="bg-[#0d1320] py-16 text-white md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2
              className="text-center text-2xl font-extrabold uppercase leading-tight tracking-wide md:text-3xl"
              style={font}
            >
              O QUE MAIS ENCONTRAMOS
              <br />
              <span style={{ color: RED }}>NAS EMPRESAS{"\u00a0"}</span>
            </h2>

            <div className="mt-14 grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:grid-cols-6 md:gap-x-6">
              {problemas.map(({ iconSrc, text }, i) => (
                <div key={i} className="flex flex-col items-center px-2 text-center">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-full border-2"
                    style={{ borderColor: RED }}
                  >
                    <img src={iconSrc} alt="" className="h-14 w-14 object-contain" loading="lazy" />
                  </div>
                  <p className="mt-5 text-[14px] leading-snug text-white md:text-sm" style={font}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO FORMULÁRIO */}
        <section id="formulario" className="bg-white py-16 md:py-20 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-1 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col">
              <h2
                className="text-[27px] font-extrabold uppercase leading-[1.05] tracking-tight text-black text-center md:text-center md:text-[32px] lg:text-left lg:text-4xl"
                style={font}
              >
                DIAGNÓSTICO GRATUITO
                <br />
                EM 4 PASSOS
              </h2>
              <h3
                className="mt-6 text-[21.5px] font-extrabold uppercase leading-[1.1] tracking-tight text-center md:text-center md:text-[26px] lg:text-left lg:text-3xl"
                style={{ ...font, color: RED }}
              >
                PARA PROTEGER SUA EMPRESA
              </h3>

              <div className="mt-10">
                <p className="text-sm leading-relaxed text-black md:text-[15px] lg:text-base" style={font}>
                  Agende uma conversa com um especialista da Evomatic. Antes de falar em soluções, queremos entender como sua empresa opera, quais são seus desafios e onde estão os principais riscos. A partir dessa análise, mostramos o que realmente faz sentido para o seu negócio.
                </p>

                <ul className="mt-6 space-y-4">
                  {[
                    "Especialista entra em contato para agendar diagnóstico",
                    "Reunião de diagnóstico remota — 30 a 45 minutos",
                    "Identificação dos principais riscos e oportunidades.",
                    "Apresentação de um plano de ação personalizado para sua empresa.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: RED }} strokeWidth={2.5} />
                      <span className="text-sm font-semibold text-black md:text-[15px] lg:text-base" style={font}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                {[
                  { name: "nome", placeholder: "Nome completo", icon: UserIcon, type: "text" },
                  { name: "email", placeholder: "E-mail corporativo", icon: Mail, type: "email" },
                  { name: "telefone", placeholder: "WhatsApp / Telefone", icon: Phone, type: "tel" },
                ].map(({ name, placeholder, icon: Icon, type }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-lg border border-black/10 bg-white px-4 py-3.5 shadow-[0_2px_6px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-black/60" strokeWidth={1.75} />
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [name]: e.target.value })}
                      disabled={submitting}
                      className="w-full bg-transparent text-sm text-black placeholder-black/50 outline-none"
                      style={font}
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 flex w-full items-center justify-center gap-3 rounded-full py-4 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 md:text-sm lg:text-base"
                  style={{ backgroundColor: RED }}
                >
                  <span>{submitting ? "ENVIANDO..." : "SOLICITAR AVALIAÇÃO GRATUITA"}</span>
                  {!submitting && <ArrowRight className="h-5 w-5" strokeWidth={2.5} />}
                </button>

                <div className="flex items-center gap-2 pt-2 text-xs text-black/60">
                  <Lock className="h-3.5 w-3.5" />
                  <span>Suas informações estão seguras. Não compartilhamos seus dados.</span>
                </div>
              </form>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-6xl px-6 md:mt-12">
            <div className="flex items-center gap-4 rounded-xl border border-black/10 bg-white/60 px-5 py-4 shadow-lg backdrop-blur-xl md:gap-5 md:px-6 md:py-5 lg:gap-6">
              <img src={iconSeguranca} alt="" className="h-24 w-24 shrink-0 object-contain md:h-24 md:w-24" loading="lazy" />
              <span className="h-20 w-px md:h-20" style={{ backgroundColor: RED }} />
              <p className="flex-1 text-sm leading-relaxed text-black md:text-[15px] lg:text-base" style={font}>
                Nossa avaliação vai mostrar os riscos reais do seu ambiente e o que pode ser feito para proteger o que é mais importante: o seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* RODAPÉ */}
        <footer className="bg-[#0d1320] py-10 text-white md:py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
            {rodape.map(({ icon: Icon, title, subtitle, extra }, i) => (
              <div key={i} className="flex items-center gap-4">
                <Icon className="h-10 w-10 shrink-0 md:h-12 md:w-12" style={{ color: RED }} strokeWidth={1.75} />
                <div className="text-[11px] font-bold uppercase leading-tight tracking-wide md:text-xs lg:text-sm" style={font}>
                  <p>{title}</p>
                  <p>{subtitle}</p>
                  {extra && <p>{extra}</p>}
                </div>
              </div>
            ))}
          </div>
        </footer>
      </main>
    </>
  );
};

export default Diagnostico;
