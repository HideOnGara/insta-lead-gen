import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logoUrl from "@/assets/foculead-mark.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FocuLead — Encuentra tus próximos clientes en Instagram" },
      {
        name: "description",
        content:
          "Encuentra perfiles relevantes, prioriza oportunidades reales y prepara mensajes personalizados. Convierte Instagram en un canal de adquisición.",
      },
      { property: "og:title", content: "FocuLead — Encuentra tus próximos clientes en Instagram" },
      {
        property: "og:description",
        content:
          "Encuentra perfiles relevantes, prioriza oportunidades reales y prepara mensajes personalizados. Convierte Instagram en un canal de adquisición.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://foculead.com/" },
      { property: "og:image", content: "https://foculead.com/og-image.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "FocuLead — Leads de Instagram" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FocuLead — Encuentra tus próximos clientes en Instagram" },
      {
        name: "twitter:description",
        content:
          "Encuentra perfiles relevantes, prioriza oportunidades reales y prepara mensajes personalizados. Convierte Instagram en un canal de adquisición.",
      },
      { name: "twitter:image", content: "https://foculead.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://foculead.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "FocuLead",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Herramienta de prospección que encuentra leads cualificados en Instagram, prioriza oportunidades reales y prepara el primer mensaje personalizado.",
          offers: [
            { "@type": "Offer", name: "Free", price: "0", priceCurrency: "EUR" },
            { "@type": "Offer", name: "Starter", price: "29", priceCurrency: "EUR" },
            { "@type": "Offer", name: "Pro", price: "79", priceCurrency: "EUR" },
            { "@type": "Offer", name: "Business", price: "199", priceCurrency: "EUR" },
          ],
          provider: { "@type": "Organization", name: "FocuLead" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "¿Qué es un crédito?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Un crédito es un perfil analizado. Las búsquedas por ubicación y por hashtag —las que usa la mayoría— consumen 2 créditos por perfil; las de seguidores, 1. El mensaje va incluido: solo cuesta 1 crédito extra si pides regenerarlo.",
              },
            },
            {
              "@type": "Question",
              name: "¿De dónde vienen los leads?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "De perfiles públicos de Instagram. FocuLead no accede a datos privados.",
              },
            },
            {
              "@type": "Question",
              name: "¿Puedo cancelar cuando quiera?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sí. Sin permanencia, sin letra pequeña.",
              },
            },
            {
              "@type": "Question",
              name: "¿FocuLead envía los DMs por mí?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. FocuLead genera el mensaje; tú decides cuándo y cómo enviarlo.",
              },
            },
            {
              "@type": "Question",
              name: "¿Funciona para cualquier nicho?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sí. Puedes buscar por hashtag, por cuentas referentes o por ubicación y nicho.",
              },
            },
          ],
        }),
      },
    ],
  }),
});

const LOGIN_URL = "https://app.foculead.com/login";

function signupUrl(plan: string) {
  const next = encodeURIComponent(`/?checkout=${plan}`);
  return `${LOGIN_URL}?mode=signup&next=${next}`;
}

/* Scroll-triggered fade + translateY. GPU accelerated, IntersectionObserver. */
function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "li" | "section" | "header" | "ul";
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;
  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      style={style}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-1 shrink-0 text-zinc-100"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={
        "sticky top-0 z-40 backdrop-blur transition-all duration-200 " +
        (scrolled
          ? "border-b border-zinc-800 bg-zinc-950/85 supports-[backdrop-filter]:bg-zinc-950/65"
          : "border-b border-transparent bg-zinc-950/40")
      }
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-zinc-100"
        >
          <img
            src={logoUrl}
            alt="FocuLead"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span>FocuLead</span>
        </a>
        <a
          href={LOGIN_URL}
          className="rounded-md border border-zinc-800 px-3.5 py-1.5 text-sm text-zinc-300 transition-all duration-200 hover:border-zinc-700 hover:text-zinc-100 hover:-translate-y-px"
        >
          Iniciar sesión
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-32 text-center sm:pt-36 sm:pb-40 animate-fade-in">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300">
            <img
              src={logoUrl}
              alt=""
              width={14}
              height={14}
              className="h-3.5 w-3.5"
            />
            Prospección para Instagram
          </span>
        </div>
        <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-bold tracking-tight leading-[1.05] text-zinc-100 sm:text-5xl md:text-6xl">
          <span className="block text-zinc-100">Tu próximo cliente</span>
          <span className="block text-[#84cc16]">ya está en Instagram.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-zinc-400 sm:text-lg">
          Encuentra perfiles relevantes, prioriza oportunidades reales y
          contacta más rápido. Deja de buscar leads manualmente.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href={LOGIN_URL}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset] transition-all duration-200 ease-out hover:bg-primary/95 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_8px_24px_-8px_rgba(132,204,22,0.5)] active:translate-y-0 active:scale-100"
          >
            Empieza gratis →
          </a>
          <a
            href="#como-funciona"
            className="text-sm text-zinc-400 transition-colors duration-200 hover:text-zinc-100"
          >
            Ver demo ↓
          </a>
        </div>
        <p className="mt-5 text-xs text-zinc-500">
          Primera búsqueda gratis · No requiere tarjeta
        </p>
      </div>
    </section>
  );
}

function SocialProof() {
  const metrics = [
    { value: "12.000+", label: "perfiles analizados" },
    { value: "3.500+", label: "mensajes preparados" },
    { value: "526", label: "leads encontrados hoy" },
  ];
  return (
    <section className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24 animate-fade-in">
        {/* Metrics */}
        <div className="grid grid-cols-1 divide-y divide-zinc-800 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center justify-center px-6 py-6 text-center transition-colors duration-200 sm:py-2"
            >
              <div className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                {m.value}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <p className="mx-auto mt-14 max-w-xl text-center text-sm text-zinc-400">
          Equipos de prospección usan FocuLead para encontrar clientes en
          Instagram.
        </p>
      </div>
    </section>
  );
}

function Outcomes() {
  const items = [
    {
      n: "01",
      title: "Menos tiempo buscando",
      body: "Deja de revisar perfiles manualmente.",
    },
    {
      n: "02",
      title: "Más conversaciones",
      body: "Contacta perfiles relevantes cada día.",
    },
    {
      n: "03",
      title: "Mejores leads",
      body: "Prioriza cuentas con potencial real.",
    },
    {
      n: "04",
      title: "Pipeline constante",
      body: "Convierte Instagram en un canal de prospección.",
    },
  ];
  return (
    <section className="border-b border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Qué consigues con FocuLead
          </h2>
          <p className="mt-5 text-base text-zinc-400 sm:text-lg">
            Resultados concretos, no promesas. Una herramienta operativa para
            llenar tu pipeline cada semana.
          </p>
        </div>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal
              key={it.title}
              as="li"
              delay={i * 70}
              className="group flex flex-col bg-zinc-950 p-7 transition-colors duration-200 hover:bg-zinc-900/70"
            >
              <span className="font-mono text-[11px] text-zinc-600 transition-colors duration-200 group-hover:text-zinc-400">
                {it.n}
              </span>
              <h3 className="mt-5 text-base font-medium tracking-tight text-zinc-100">
                {it.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {it.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProductSearchShowcase() {
  return (
    <section className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
            01 · Buscar leads
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Encuentra perfiles relevantes.
          </h2>
          <p className="mt-5 text-base text-zinc-400 sm:text-lg">
            Busca por hashtag, nicho o cuentas similares. Cada run analiza
            cientos de perfiles, los puntúa y los entrega listos en tu pipeline.
          </p>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 sm:grid-cols-2">
            {[
              { k: "Modos", v: "Seguidores · Hashtag · Nicho" },
              { k: "Última run", v: "+15 leads nuevos" },
              { k: "Score medio", v: "62 / 100" },
              { k: "Coste estimado", v: "~338 créditos" },
            ].map((s) => (
              <li key={s.k} className="bg-zinc-950 px-4 py-3">
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  {s.k}
                </p>
                <p className="mt-1 text-[13px] text-zinc-200">{s.v}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={80} className="order-1 lg:order-2">
          <ProductFrame label="app.foculead.com / buscar-leads">
            <SearchMock />
          </ProductFrame>
        </Reveal>
      </div>
    </section>
  );
}

function ProductFrame({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-zinc-700 hover:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between gap-3 border-b border-zinc-800 bg-zinc-900/60 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        </div>
        <div className="hidden items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[11px] text-zinc-500 sm:flex">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          {label}
        </div>
        <span className="w-12" />
      </div>
      {children}
    </div>
  );
}

/* ============ Product mocks (fictional data) ============ */

function SearchMock() {
  const modes = [
    { k: "Seguidores", d: "Escanea seguidores de cuentas referencia", active: true },
    { k: "Hashtag", d: "Busca publicaciones por hashtags", active: false },
    { k: "Por nicho", d: "Combina cuentas y hashtags por nicho", active: false },
  ];
  const sources = [
    { tag: "#marketingdigital", n: 8, pct: 32 },
    { tag: "#saasgrowth", n: 5, pct: 20 },
    { tag: "#ecommerce", n: 4, pct: 16 },
    { tag: "#branding", n: 3, pct: 12 },
  ];
  const leads = [
    { i: "N", u: "@northstudio.co", niche: "Branding", score: 84, tone: "good" },
    { i: "G", u: "@growmetric", niche: "Marketing", score: 78, tone: "good" },
    { i: "A", u: "@atelier.digital", niche: "Design", score: 71, tone: "warn" },
    { i: "S", u: "@scalelabmedia", niche: "Growth", score: 66, tone: "warn" },
    { i: "B", u: "@brandnexa", niche: "Strategy", score: 58, tone: "muted" },
  ];
  const toneClass = (t: string) =>
    t === "good"
      ? "text-emerald-400"
      : t === "warn"
        ? "text-amber-400"
        : "text-zinc-400";
  return (
    <div className="bg-zinc-950 p-5 text-zinc-100 sm:p-6">
      <h3 className="text-sm font-semibold">Buscar leads</h3>
      <p className="mt-0.5 text-[11px] text-zinc-500">
        Encuentra nuevos clientes en Instagram.
      </p>

      {/* Step 1 — modes */}
      <div className="mt-5 flex items-center gap-2">
        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-zinc-700 text-[9px] text-zinc-400">
          1
        </span>
        <span className="text-[11.5px] text-zinc-300">Modo de búsqueda</span>
      </div>
      <div className="mt-2.5 grid grid-cols-3 gap-2">
        {modes.map((m) => (
          <div
            key={m.k}
            className={
              "rounded-md border p-2.5 transition-colors " +
              (m.active
                ? "border-lime-400/40 bg-lime-400/5"
                : "border-zinc-800 bg-zinc-900/40")
            }
          >
            <p className={"text-[11.5px] font-medium " + (m.active ? "text-zinc-100" : "text-zinc-300")}>
              {m.k}
            </p>
            <p className="mt-0.5 text-[10px] leading-snug text-zinc-500">{m.d}</p>
          </div>
        ))}
      </div>

      {/* Step 2 — accounts */}
      <div className="mt-4 flex items-center gap-2">
        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-zinc-700 text-[9px] text-zinc-400">
          2
        </span>
        <span className="text-[11.5px] text-zinc-300">Cuentas a escanear</span>
      </div>
      <div className="mt-2 flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/40 px-2.5 py-1.5 text-[11.5px] text-zinc-400">
        @northstudio.co, @growmetric, @atelier.digital
      </div>

      {/* Iniciar */}
      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2 text-[12px] font-medium text-primary-foreground transition-colors hover:bg-primary/95">
        ▶ Iniciar búsqueda
      </button>

      {/* Completado */}
      <div className="mt-3 flex items-center gap-2 rounded-md border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-[9px] text-emerald-400">
          ✓
        </span>
        <span className="text-[11.5px] font-medium text-emerald-300">
          Run completado · +25 leads nuevos
        </span>
      </div>

      {/* Por fuente */}
      <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
        Por fuente
      </p>
      <ul className="mt-2 space-y-1.5">
        {sources.map((s) => (
          <li key={s.tag} className="flex items-center gap-2 text-[11px]">
            <span className="w-28 shrink-0 text-zinc-300">{s.tag}</span>
            <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-lime-400/80"
                style={{ width: `${s.pct * 2.4}%` }}
              />
            </div>
            <span className="w-12 shrink-0 text-right text-zinc-500 tabular-nums">
              {s.n} · {s.pct}%
            </span>
          </li>
        ))}
      </ul>

      {/* Nuevos leads */}
      <div className="mt-5 flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
          Nuevos leads
        </p>
        <span className="text-[10.5px] text-zinc-500">Ver todos (25)</span>
      </div>
      <div className="mt-2 overflow-hidden rounded-md border border-zinc-800">
        <div className="grid grid-cols-[1.4fr_0.9fr_0.5fr] gap-2 border-b border-zinc-800 bg-zinc-900/40 px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-wider text-zinc-500">
          <span>Usuario</span>
          <span>Nicho</span>
          <span className="text-right">Score</span>
        </div>
        <ul className="divide-y divide-zinc-800/70">
          {leads.map((l) => (
            <li
              key={l.u}
              className="grid grid-cols-[1.4fr_0.9fr_0.5fr] items-center gap-2 px-3 py-1.5"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-[9.5px] font-medium text-zinc-300">
                  {l.i}
                </span>
                <span className="truncate text-[11.5px] text-zinc-100">{l.u}</span>
              </div>
              <span className="inline-flex w-fit items-center rounded bg-zinc-900 px-1.5 py-0.5 text-[10px] text-zinc-300 ring-1 ring-inset ring-zinc-800">
                {l.niche}
              </span>
              <span
                className={
                  "text-right text-[11.5px] font-semibold tabular-nums " +
                  toneClass(l.tone)
                }
              >
                {l.score}/100
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LeadDetailMock() {
  return (
    <div className="bg-zinc-950 p-5 text-zinc-100 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-[12px] font-medium text-zinc-300">
            C
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-zinc-100">
              @clinicaluminae
            </p>
            <p className="text-[10.5px] text-zinc-500">18.420 followers</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-[10.5px] text-zinc-300">
            Archive
          </span>
          <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-[10.5px] text-zinc-300">
            Instagram ↗
          </span>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-5 border-t border-zinc-800 pt-4">
        <p className="font-mono text-[9.5px] uppercase tracking-wider text-zinc-500">
          Bio
        </p>
        <p className="mt-1.5 text-[12px] leading-relaxed text-zinc-300">
          Clínica estética en Madrid · Tratamientos faciales y corporales
          personalizados · Reservas online · +6 años acompañando a más de
          3.000 pacientes.
        </p>
      </div>

      {/* Status */}
      <div className="mt-4 border-t border-zinc-800 pt-4">
        <p className="font-mono text-[9.5px] uppercase tracking-wider text-zinc-500">
          Status
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["New", "Contacted", "Replied", "Converted"].map((s, i) => (
            <span
              key={s}
              className={
                "rounded-md px-2 py-0.5 text-[10.5px] " +
                (i === 0
                  ? "bg-zinc-100 text-zinc-900 font-medium"
                  : "border border-zinc-800 text-zinc-400")
              }
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Follow-up */}
      <div className="mt-4 border-t border-zinc-800 pt-4">
        <p className="font-mono text-[9.5px] uppercase tracking-wider text-zinc-500">
          Follow-up
        </p>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex-1 rounded-md border border-zinc-800 bg-zinc-900/40 px-2.5 py-1.5 text-[11.5px] text-zinc-400">
            22 / 05 / 2026
          </div>
          <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1.5 text-[10.5px] text-zinc-300">
            Guardar
          </span>
        </div>
      </div>

      {/* Analysis */}
      <div className="mt-4 border-t border-zinc-800 pt-4">
        <p className="font-mono text-[9.5px] uppercase tracking-wider text-zinc-500">
          Lead analysis
        </p>
        <div className="mt-2.5 space-y-1.5 text-[11.5px]">
          <div className="flex items-center justify-between">
            <span className="text-zinc-500">Nicho</span>
            <span className="rounded bg-zinc-900 px-1.5 py-0.5 text-[10.5px] text-zinc-200 ring-1 ring-inset ring-zinc-800">
              Estética & Beauty
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zinc-500">Engagement</span>
            <span className="font-medium text-emerald-400">12.4%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zinc-500">Lead score</span>
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[10.5px] font-semibold text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              84/100
            </span>
          </div>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
          <div className="h-full w-[84%] rounded-full bg-emerald-500" />
        </div>
      </div>

      {/* Message */}
      <div className="mt-4 border-t border-zinc-800 pt-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[9.5px] uppercase tracking-wider text-zinc-500">
            Outreach message
          </p>
          <div className="flex items-center gap-1">
            <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[9.5px] font-medium text-zinc-900">
              ES
            </span>
            <span className="rounded border border-zinc-800 px-1.5 py-0.5 text-[9.5px] text-zinc-400">
              EN
            </span>
          </div>
        </div>
        <div className="mt-2 rounded-md border border-zinc-800 bg-zinc-900/60 p-3 text-[12px] leading-relaxed text-zinc-100">
          Hola Marta, vi vuestro contenido sobre clínicas estéticas y creo
          que podríamos ayudaros a generar más reservas usando automatización
          y captación local. ¿Te encaja una llamada rápida esta semana? 🚀
        </div>
      </div>

      {/* CTA */}
      <div className="mt-4 grid grid-cols-[1fr_2fr] gap-2">
        <button className="rounded-md border border-zinc-800 bg-zinc-900 py-2 text-[11.5px] font-medium text-zinc-200 transition-colors hover:bg-zinc-800">
          Copiar
        </button>
        <button className="rounded-md bg-primary py-2 text-[11.5px] font-semibold text-primary-foreground transition-colors hover:bg-primary/95">
          Enviar DM
        </button>
      </div>
    </div>
  );
}

function AnalyticsMock() {
  const kpis = [
    { v: "541", l: "Leads totales", tone: "text-zinc-100" },
    { v: "62%", l: "Tasa contacto", tone: "text-sky-400" },
    { v: "12%", l: "Tasa respuesta", tone: "text-emerald-400" },
    { v: "4.3%", l: "Tasa conversión", tone: "text-lime-400" },
  ];
  const funnel = [
    { k: "Generados", n: 541, w: 100 },
    { k: "Contactados", n: 337, w: 62 },
    { k: "Respondidos", n: 64, w: 18 },
    { k: "Convertidos", n: 23, w: 7 },
  ];
  const niches = [
    { k: "Estética & Beauty", n: 92, r: "14%", c: "5.2%" },
    { k: "Marketing & Growth", n: 78, r: "11%", c: "4.6%" },
    { k: "E-commerce & Retail", n: 64, r: "9%", c: "3.8%" },
    { k: "Coaching & Education", n: 58, r: "10%", c: "4.1%" },
    { k: "Real Estate", n: 47, r: "7%", c: "2.9%" },
  ];
  // simple chart polyline
  const pts = [12, 28, 18, 42, 36, 58, 49, 72, 64];
  const path = pts
    .map((p, i) => `${(i / (pts.length - 1)) * 100},${100 - p}`)
    .join(" ");
  return (
    <div className="bg-zinc-950 p-5 text-zinc-100 sm:p-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold">Analytics</h3>
          <p className="mt-0.5 text-[11px] text-zinc-500">
            Rendimiento del pipeline y conversión.
          </p>
        </div>
        <div className="flex items-center gap-1">
          {["30d", "90d", "1a"].map((t, i) => (
            <span
              key={t}
              className={
                "rounded-md px-2 py-0.5 text-[10.5px] " +
                (i === 1
                  ? "bg-lime-400 font-medium text-zinc-950"
                  : "border border-zinc-800 text-zinc-400")
              }
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* KPIs */}
      <ul className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-zinc-800 bg-zinc-800 sm:grid-cols-4">
        {kpis.map((k) => (
          <li key={k.l} className="bg-zinc-950 px-3 py-3">
            <p className="font-mono text-[9.5px] uppercase tracking-wider text-zinc-500">
              {k.l}
            </p>
            <p className={"mt-1 text-2xl font-semibold tracking-tight tabular-nums " + k.tone}>
              {k.v}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-4 grid gap-3 sm:grid-cols-[1.3fr_1fr]">
        {/* Funnel */}
        <div className="rounded-md border border-zinc-800 bg-zinc-950 p-3.5">
          <p className="font-mono text-[9.5px] uppercase tracking-wider text-zinc-500">
            Embudo de conversión
          </p>
          <ul className="mt-3 space-y-2">
            {funnel.map((f) => (
              <li key={f.k} className="flex items-center gap-2 text-[11px]">
                <span className="w-24 shrink-0 text-zinc-400">{f.k}</span>
                <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-lime-400 to-emerald-500"
                    style={{ width: `${f.w}%` }}
                  />
                </div>
                <span className="w-16 shrink-0 text-right text-zinc-300 tabular-nums">
                  {f.n} <span className="text-zinc-600">({f.w}%)</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Velocidad / chart */}
        <div className="rounded-md border border-zinc-800 bg-zinc-950 p-3.5">
          <p className="font-mono text-[9.5px] uppercase tracking-wider text-zinc-500">
            Leads por día
          </p>
          <div className="mt-2">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-20 w-full">
              <defs>
                <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#84cc16" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#84cc16" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon
                points={`0,100 ${path} 100,100`}
                fill="url(#lg)"
              />
              <polyline
                points={path}
                fill="none"
                stroke="#a3e635"
                strokeWidth="1.5"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
          <div className="mt-1 flex items-baseline justify-between text-[10.5px] text-zinc-500">
            <span>05-08</span>
            <span className="text-zinc-300">
              <span className="font-semibold tabular-nums text-zinc-100">+18%</span> vs prev.
            </span>
            <span>05-16</span>
          </div>
        </div>
      </div>

      {/* Por nicho */}
      <div className="mt-3 overflow-hidden rounded-md border border-zinc-800">
        <div className="grid grid-cols-[1.6fr_0.6fr_0.7fr_0.8fr] gap-2 border-b border-zinc-800 bg-zinc-900/40 px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-wider text-zinc-500">
          <span>Nicho</span>
          <span className="text-right">Leads</span>
          <span className="text-right">Resp.</span>
          <span className="text-right">Conv.</span>
        </div>
        <ul className="divide-y divide-zinc-800/70">
          {niches.map((n) => (
            <li
              key={n.k}
              className="grid grid-cols-[1.6fr_0.6fr_0.7fr_0.8fr] items-center gap-2 px-3 py-1.5 text-[11px]"
            >
              <span className="truncate text-zinc-200">{n.k}</span>
              <span className="text-right text-zinc-300 tabular-nums">{n.n}</span>
              <span className="text-right text-emerald-400 tabular-nums">{n.r}</span>
              <span className="text-right text-lime-400 tabular-nums">{n.c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Dinos a quién buscas",
      body: "Elige tu nicho y mercado. FocuLead hace el resto.",
    },
    {
      n: "02",
      title: "Cada perfil recibe un score",
      body: "Puntuación de 0 a 100 según relevancia, engagement y señales comerciales. Solo verás los leads que valen la pena.",
    },
    {
      n: "03",
      title: "Mensaje listo para enviar",
      body: "Un primer mensaje personalizado para cada lead, basado en su bio, nicho y contexto real.",
    },
  ];
  return (
    <section id="como-funciona" className="border-b border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          Tres pasos. Cero búsquedas manuales.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 80}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900 hover:shadow-[0_12px_30px_-15px_rgba(0,0,0,0.6)]"
            >
              <div className="text-sm font-mono text-zinc-500 transition-colors duration-200 group-hover:text-zinc-300">{s.n}</div>
              <h3 className="mt-4 text-lg font-medium text-zinc-100">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  const problems = [
    {
      title: "Horas perdidas buscando perfiles",
      icon: (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </>
      ),
    },
    {
      title: "Leads poco cualificados",
      icon: (
        <>
          <path d="M3 3l18 18" />
          <path d="M10.58 10.58a2 2 0 0 0 2.83 2.83" />
          <path d="M9.88 5.09A10.94 10.94 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a10.94 10.94 0 0 0 5.39-1.41" />
        </>
      ),
    },
    {
      title: "Mensajes genéricos que nadie responde",
      icon: (
        <>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </>
      ),
    },
    {
      title: "Prospectar todos los días agota",
      icon: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      ),
    },
  ];
  const solutions = [
    "Encuentra perfiles relevantes automáticamente",
    "Prioriza cuentas con potencial real",
    "Prepara mensajes personalizados en segundos",
    "Convierte Instagram en un canal de adquisición real",
  ];
  return (
    <section className="border-b border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            La prospección manual no escala.
          </h2>
          <p className="mt-5 text-base text-zinc-400 sm:text-lg">
            Buscar perfiles uno a uno, revisar bios y escribir DMs manualmente
            consume horas cada semana.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-10">
          <ul className="flex flex-col gap-5">
            {problems.map((p) => (
              <li
                key={p.title}
                className="flex items-start gap-4 border-b border-zinc-800/70 pb-5 last:border-0"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-zinc-800 text-zinc-400">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {p.icon}
                  </svg>
                </span>
                <span className="text-base text-zinc-300">{p.title}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 sm:p-10">
            <h3 className="text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
              FocuLead automatiza todo el proceso.
            </h3>
            <ul className="mt-8 space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-base text-zinc-200">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadDetailShowcase() {
  const highlights = [
    { k: "Bio", v: "Contexto real del perfil" },
    { k: "Engagement", v: "41.7%" },
    { k: "Lead score", v: "77 / 100" },
    { k: "Follow-up", v: "Fecha y notas" },
    { k: "Outreach", v: "Mensaje listo · ES / EN" },
  ];
  return (
    <section className="border-b border-zinc-800">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <Reveal>
          <ProductFrame label="app.foculead.com / lead">
            <LeadDetailMock />
          </ProductFrame>
        </Reveal>
        <Reveal delay={80}>
          <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
            02 · Lead detail
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Contacta con contexto.
          </h2>
          <p className="mt-5 text-base text-zinc-400 sm:text-lg">
            Cada lead incluye contexto, scoring y un mensaje listo para
            adaptar. Decide, anota, guarda follow-ups y mueve la oportunidad
            sin salir del flujo.
          </p>
          <ul className="mt-8 divide-y divide-zinc-800/80 border-y border-zinc-800/80">
            {highlights.map((h) => (
              <li
                key={h.k}
                className="flex items-center justify-between gap-3 py-3 transition-colors duration-200 hover:bg-zinc-900/40"
              >
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  {h.k}
                </span>
                <span className="text-[13px] text-zinc-200">{h.v}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function AnalyticsShowcase() {
  const kpis = [
    { v: "541", l: "leads totales" },
    { v: "90d", l: "rango activo" },
    { v: "0.0%", l: "tasa respuesta" },
    { v: "8", l: "nichos rastreados" },
  ];
  return (
    <section className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end lg:gap-16">
          <Reveal className="group">
            <span className="font-mono text-zinc-500 transition-colors duration-200 group-hover:text-zinc-300 text-3xl">
              ​
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
              Mide qué convierte.
            </h2>
            <p className="mt-5 text-base text-zinc-400 sm:text-lg">
              Visualiza rendimiento, respuestas y conversiones desde un solo
              lugar. Funnel, nichos y fuentes con el detalle que necesitas
              para iterar.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 sm:grid-cols-4">
              {kpis.map((k) => (
                <li key={k.l} className="bg-zinc-950 px-4 py-4">
                  <p className="text-2xl font-semibold tracking-tight text-zinc-100 tabular-nums">
                    {k.v}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    {k.l}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-14">
          <ProductFrame label="app.foculead.com / analytics">
            <AnalyticsMock />
          </ProductFrame>
        </Reveal>
      </div>
    </section>
  );
}

function ForWho() {
  const items = [
    "Agencias de marketing que prospectan en Instagram",
    "Freelances que buscan nuevos clientes",
    "Consultores y coaches que quieren llenar su agenda",
    "Cualquiera que venda B2B y pierda horas buscando leads a mano",
  ];
  return (
    <section className="border-b border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          Para quién es FocuLead
        </h2>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal
              key={it}
              as="li"
              delay={i * 60}
              className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-900/40 p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/70"
            >
              <CheckIcon />
              <span className="text-base text-zinc-200">{it}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

type Plan = {
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
  plan: string | null;
};

function Pricing() {
  const plans: Plan[] = [
    {
      name: "Free",
      price: "0€",
      features: ["Tu primera búsqueda, gratis", "1 usuario", "Sin tarjeta"],
      cta: "Empieza gratis",
      plan: null,
    },
    {
      name: "Starter",
      price: "29€",
      features: ["2.000 créditos/mes (~500 leads)", "Hasta 3 usuarios", "Búsquedas programadas"],
      cta: "Elegir Starter",
      popular: true,
      plan: "starter",
    },
    {
      name: "Pro",
      price: "79€",
      features: ["6.000 créditos/mes (~1.500 leads)", "Hasta 10 usuarios", "Todo lo de Starter"],
      cta: "Elegir Pro",
      plan: "pro",
    },
    {
      name: "Business",
      price: "199€",
      features: [
        "15.000 créditos/mes (~3.800 leads)",
        "Hasta 100 usuarios",
        "Para equipos y agencias",
      ],
      cta: "Elegir Business",
      plan: "business",
    },
  ];
  return (
    <section className="border-b border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          Precios claros. Sin letra pequeña.
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 70}
              className={
                "group relative flex flex-col rounded-xl border bg-zinc-900/60 p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] " +
                (p.popular
                  ? "border-primary hover:shadow-[0_20px_50px_-20px_rgba(132,204,22,0.35)]"
                  : "border-zinc-800 hover:border-zinc-700")
              }
            >
              {p.popular && (
                <span className="absolute -top-2.5 left-6 rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                  Más popular
                </span>
              )}
              <h3 className="text-lg font-medium text-zinc-100">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-zinc-100">
                  {p.price}
                </span>
                <span className="text-sm text-zinc-400">
                  /mes{p.plan ? " + IVA" : ""}
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={p.plan ? signupUrl(p.plan) : LOGIN_URL}
                className={
                  "mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 " +
                  (p.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/95 hover:shadow-[0_8px_20px_-8px_rgba(132,204,22,0.5)]"
                    : "border border-zinc-800 text-zinc-100 hover:border-zinc-700 hover:bg-zinc-900")
                }
              >
                {p.cta}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "¿Qué es un crédito?",
      a: "Un crédito es un perfil analizado. Las búsquedas por ubicación y por hashtag —las que usa la mayoría— consumen 2 créditos por perfil; las de seguidores, 1. El mensaje va incluido: solo cuesta 1 crédito extra si pides regenerarlo.",
    },
    {
      q: "¿De dónde vienen los leads?",
      a: "De perfiles públicos de Instagram. FocuLead no accede a datos privados.",
    },
    {
      q: "¿Puedo cancelar cuando quiera?",
      a: "Sí. Sin permanencia, sin letra pequeña.",
    },
    {
      q: "¿FocuLead envía los DMs por mí?",
      a: "No. FocuLead prepara el mensaje; tú decides cuándo y cómo enviarlo.",
    },
    {
      q: "¿Funciona para cualquier nicho?",
      a: "Sí. Puedes buscar por hashtag, por cuentas referentes o por ubicación y nicho.",
    },
  ];
  return (
    <section className="border-b border-zinc-800">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          Preguntas frecuentes
        </h2>
        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-zinc-800"
            >
              <AccordionTrigger className="text-left text-base text-zinc-100 hover:text-zinc-100 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="border-b border-zinc-800 bg-zinc-900/60">
      <div className="mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">
        <div className="mb-8 flex justify-center">
          <img
            src={logoUrl}
            alt="FocuLead"
            width={48}
            height={48}
            loading="lazy"
            className="h-12 w-12"
          />
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
          Empieza hoy.
          <br />
          <span className="text-zinc-500">
            Tu primera búsqueda es gratis.
          </span>
        </h2>
        <a
          href={LOGIN_URL}
          className="mt-10 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-primary/95 hover:shadow-[0_10px_30px_-10px_rgba(132,204,22,0.55)] active:translate-y-0 active:scale-100"
        >
          Crear cuenta gratis →
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-base font-semibold text-zinc-100">
            <img
              src={logoUrl}
              alt="FocuLead"
              width={24}
              height={24}
              loading="lazy"
              className="h-6 w-6"
            />
            <span>FocuLead</span>
          </div>
          <p className="mt-2 max-w-md text-xs text-zinc-400">
            © 2026 FocuLead — Amaya Oses Relloso · NIF 73418483E · Madrid
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-400">
          <a
            href="https://app.foculead.com/legal"
            className="hover:text-zinc-100"
          >
            Aviso Legal
          </a>
          <a
            href="https://app.foculead.com/privacy"
            className="hover:text-zinc-100"
          >
            Política de Privacidad
          </a>
          <a
            href="https://app.foculead.com/terms"
            className="hover:text-zinc-100"
          >
            Términos de Servicio
          </a>
          <a href="mailto:hola@foculead.com" className="hover:text-zinc-100">
            hola@foculead.com
          </a>
        </nav>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <ProductSearchShowcase />
        <Outcomes />
        <ProblemSolution />
        <HowItWorks />
        <LeadDetailShowcase />
        <AnalyticsShowcase />
        <ForWho />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
