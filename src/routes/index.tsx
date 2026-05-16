import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logoUrl from "@/assets/foculead-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "foculead — encuentra tu próximo cliente en instagram" },
      {
        name: "description",
        content:
          "foculead encuentra perfiles de Instagram que encajan con tu cliente ideal y genera mensajes listos para contactar.",
      },
      { property: "og:title", content: "foculead — encuentra tu próximo cliente en instagram" },
      {
        property: "og:description",
        content:
          "foculead encuentra perfiles de Instagram que encajan con tu cliente ideal y genera mensajes listos para contactar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://foculead.com/" },
      { property: "og:image", content: "https://foculead.com/og-image.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "foculead — lead gen para instagram" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "foculead — encuentra tu próximo cliente en instagram" },
      {
        name: "twitter:description",
        content:
          "foculead encuentra perfiles de Instagram que encajan con tu cliente ideal y genera mensajes listos para contactar.",
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
          name: "foculead",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Herramienta de prospección que encuentra leads cualificados en Instagram y genera el primer mensaje.",
          offers: [
            { "@type": "Offer", name: "Free", price: "0", priceCurrency: "EUR" },
            { "@type": "Offer", name: "Starter", price: "29", priceCurrency: "EUR" },
            { "@type": "Offer", name: "Pro", price: "79", priceCurrency: "EUR" },
            { "@type": "Offer", name: "Business", price: "199", priceCurrency: "EUR" },
          ],
          provider: { "@type": "Organization", name: "foculead" },
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
                text: "Cada perfil analizado consume 1 crédito. Generar el DM consume 1 crédito adicional.",
              },
            },
            {
              "@type": "Question",
              name: "¿De dónde vienen los leads?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "De perfiles públicos de Instagram. foculead no accede a datos privados.",
              },
            },
            {
              "@type": "Question",
              name: "¿Puedo cancelar cuando quiera?",
              acceptedAnswer: { "@type": "Answer", text: "Sí. Sin permanencia." },
            },
            {
              "@type": "Question",
              name: "¿foculead envía los DMs por mí?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. foculead genera el mensaje; tú decides cuándo y cómo enviarlo.",
              },
            },
            {
              "@type": "Question",
              name: "¿Funciona para cualquier nicho?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sí. Busca por hashtag, cuentas referentes o ubicación + nicho.",
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

/* ── Scroll reveal: fade + translateY (GPU) ───────────── */
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

/* Brand star pattern as low-contrast texture (data URI SVG) */
const STAR_PATTERN_URI =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'><g fill='%230d0d0e' fill-opacity='0.035'><path d='M24 8l2.2 6.8h7.1l-5.8 4.2 2.2 6.8L24 21.6l-5.8 4.2 2.2-6.8-5.8-4.2h7.1z'/></g></svg>";

function Tick() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-1 shrink-0 text-ink"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ── NAV ──────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { label: "Producto", href: "#producto" },
    { label: "Precios", href: "#precios" },
    { label: "Casos", href: "#casos" },
    { label: "Login", href: LOGIN_URL },
  ];
  return (
    <header
      className={
        "sticky top-0 z-40 backdrop-blur transition-all duration-200 " +
        (scrolled
          ? "border-b border-ink/10 bg-paper/85"
          : "border-b border-transparent bg-paper/60")
      }
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-ink">
          <img src={logoUrl} alt="foculead" width={22} height={22} className="h-[22px] w-[22px]" />
          <span>foculead</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13.5px] text-ink/70 transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={LOGIN_URL}
          className="inline-flex items-center justify-center rounded-xl bg-ink px-3.5 py-1.5 text-[13.5px] font-medium text-paper transition-all duration-200 hover:bg-ink/90 hover:-translate-y-px"
        >
          Empezar gratis
        </a>
      </div>
    </header>
  );
}

/* ── HERO ─────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url("${STAR_PATTERN_URI}")` }}
      />
      <div className="relative mx-auto max-w-5xl px-6 pt-28 pb-32 sm:pt-36 sm:pb-40 animate-fade-in">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/60">
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          Lead generation · Instagram
        </span>
        <h1 className="mt-7 max-w-[16ch] text-[44px] font-bold leading-[0.98] tracking-[-0.04em] text-ink sm:text-6xl md:text-7xl">
          tu próximo cliente
          <br />
          <span className="text-ink">ya está en</span> <span className="text-lime-deep">instagram.</span>
        </h1>
        <p className="mt-7 max-w-xl text-[17px] leading-[1.55] text-ink/70 sm:text-[19px]">
          foculead encuentra perfiles que encajan con tu cliente ideal y genera
          mensajes listos para contactar.
        </p>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-3">
          <a
            href={LOGIN_URL}
            className="inline-flex items-center justify-center rounded-xl bg-lime px-5 py-3 text-[15px] font-medium text-ink transition-all duration-200 ease-out hover:bg-lime-deep hover:text-paper hover:-translate-y-0.5 active:translate-y-0"
          >
            empezar gratis
          </a>
          <a
            href="#producto"
            className="inline-flex items-center justify-center rounded-xl border border-ink/15 bg-paper px-5 py-3 text-[15px] font-medium text-ink transition-all duration-200 hover:border-ink/30 hover:-translate-y-0.5"
          >
            ver demo
          </a>
        </div>
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/50">
          100 créditos gratis · sin tarjeta
        </p>
      </div>
    </section>
  );
}

/* ── PRODUCT PREVIEW (dark Ink card — reversed pairing) ── */
function ProductPreview() {
  const nav = [
    { label: "Leads", count: "526", active: true },
    { label: "Buscar leads", count: null, active: false },
    { label: "Mensajes", count: "12", active: false },
    { label: "Cuentas", count: null, active: false },
    { label: "Hashtags", count: null, active: false },
    { label: "Analytics", count: null, active: false },
    { label: "Ajustes", count: null, active: false },
  ];
  const rows = [
    { initial: "S", user: "@studiofina.co", bio: "Creative studio · wellness & lifestyle brands. Identity · Web · Launch", niche: "Branding", eng: "5.2%", engTone: "warn", score: 82, msg: "Hola, vi vuestro último rebrand y me encantó el enfoque editorial…" },
    { initial: "G", user: "@growmetriclab", bio: "Local brand growth via paid acquisition. Meta & Google Ads", niche: "Marketing", eng: "4.0%", engTone: "warn", score: 79, msg: "Vi vuestro enfoque sobre captación local y creo que podríamos…" },
    { initial: "N", user: "@northpeakmedia", bio: "Brand strategy for premium service businesses · EU + LATAM", niche: "Branding", eng: "2.1%", engTone: "muted", score: 77, msg: "Me llamó la atención cómo posicionáis a vuestros clientes…" },
    { initial: "E", user: "@elevahub", bio: "Consultoría de operaciones para restaurantes y grupos hosteleros", niche: "Hospitality", eng: "11.4%", engTone: "good", score: 77, msg: "Vi vuestro contenido sobre eficiencia en sala y me ha gustado…" },
    { initial: "L", user: "@lumenstrategy", bio: "Asesoría legal y fiscal para empresas en crecimiento · ES · PT", niche: "Legal", eng: "3.5%", engTone: "warn", score: 76, msg: "Vi vuestro contenido sobre fiscalidad para PyMEs y podríamos…" },
    { initial: "B", user: "@brandnexa", bio: "Automatización para empresas B2B. IA · CRM · Workflows", niche: "Automation", eng: "8.7%", engTone: "good", score: 76, msg: "Vi vuestro enfoque sobre automatización comercial y creo…" },
    { initial: "U", user: "@urbanwellness.co", bio: "Bienestar urbano · programas corporativos y retiros boutique", niche: "Wellness", eng: "3.9%", engTone: "warn", score: 76, msg: "Me ha gustado mucho vuestro programa corporativo y quería…" },
    { initial: "C", user: "@craftedgrowth", bio: "Growth partners para SaaS y agencias · contenido + outbound", niche: "Marketing", eng: "6.8%", engTone: "warn", score: 76, msg: "Vi vuestro último caso de outbound para SaaS y me encantó…" },
  ];
  const engClass = (tone: string) =>
    tone === "good"
      ? "bg-lime/15 text-lime-soft ring-1 ring-inset ring-lime/30"
      : tone === "warn"
        ? "bg-paper/5 text-paper/70 ring-1 ring-inset ring-paper/10"
        : "bg-paper/5 text-paper/50 ring-1 ring-inset ring-paper/10";

  return (
    <section id="producto" className="border-b border-ink/10 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/60">
              01 · producto
            </span>
            <h2 className="mt-3 text-[28px] font-semibold leading-[1.05] tracking-[-0.035em] text-ink sm:text-[40px]">
              un panel. todos tus leads.
            </h2>
          </div>
          <p className="hidden max-w-xs text-[14px] leading-[1.55] text-ink/60 md:block">
            Tabla densa, metadata compacta, score por IA. Diseñado para
            decidir en segundos.
          </p>
        </div>

        <Reveal className="overflow-hidden rounded-2xl border border-ink bg-ink shadow-[0_30px_80px_-30px_rgba(13,13,14,0.35)] transition-all duration-300">
          {/* chrome */}
          <div className="flex items-center justify-between gap-3 border-b border-paper/10 bg-ink px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
            </div>
            <div className="hidden items-center gap-1.5 rounded-md border border-paper/10 bg-paper/[0.03] px-2.5 py-1 font-mono text-[10.5px] text-paper/50 sm:flex">
              app.foculead.com/leads
            </div>
            <span className="w-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[210px_1fr]">
            {/* sidebar */}
            <aside className="hidden flex-col justify-between border-r border-paper/10 bg-ink md:flex">
              <div>
                <div className="flex items-center gap-2 border-b border-paper/10 px-4 py-3.5">
                  <img src={logoUrl} alt="" width={18} height={18} loading="lazy" decoding="async" className="h-[18px] w-[18px] invert" />
                  <div className="flex flex-col leading-tight">
                    <span className="text-[13px] font-semibold text-paper">foculead</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-paper/40">Workspace</span>
                  </div>
                </div>
                <nav className="px-2 py-3">
                  <p className="px-2 pb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/40">
                    Pipeline
                  </p>
                  {nav.map((n) => (
                    <div
                      key={n.label}
                      className={
                        "mt-0.5 flex items-center justify-between rounded-md px-2 py-1.5 text-[13px] transition-colors duration-200 " +
                        (n.active
                          ? "bg-paper/[0.08] text-paper"
                          : "text-paper/55 hover:bg-paper/[0.04] hover:text-paper/90")
                      }
                    >
                      <span className="flex items-center gap-2">
                        <span className={"h-1.5 w-1.5 rounded-full " + (n.active ? "bg-lime" : "bg-paper/20")} />
                        {n.label}
                      </span>
                      {n.count && (
                        <span className="rounded bg-paper/[0.05] px-1.5 font-mono text-[10px] text-paper/50">
                          {n.count}
                        </span>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
              <div className="m-3 rounded-lg border border-paper/10 bg-paper/[0.03] p-3">
                <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-wider text-paper/50">
                  <span>Starter</span>
                  <span className="text-paper/80">7.352 / 20.000</span>
                </div>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-paper/10">
                  <div className="h-full w-[37%] rounded-full bg-lime" />
                </div>
              </div>
            </aside>

            {/* main */}
            <div className="min-w-0">
              <div className="border-b border-paper/10 px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-[15px] font-semibold text-paper">Leads</h3>
                    <p className="mt-0.5 text-[12px] text-paper/55">
                      Perfiles cualificados por la IA desde Instagram.
                    </p>
                  </div>
                  <div className="hidden items-center gap-2 sm:flex">
                    <button className="rounded-md border border-paper/10 bg-paper/[0.03] px-2.5 py-1.5 text-[12px] text-paper/80 transition-all duration-200 hover:-translate-y-px hover:border-paper/20 hover:text-paper">
                      Exportar
                    </button>
                    <button className="rounded-md bg-lime px-2.5 py-1.5 text-[12px] font-medium text-ink transition-all duration-200 hover:-translate-y-px hover:bg-lime-soft">
                      + Nuevo lead
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  <span className="rounded-full bg-paper px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wider text-ink">
                    All · 526
                  </span>
                  <span className="rounded-full px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wider text-paper/50">New · 526</span>
                  <span className="rounded-full px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wider text-paper/40">Contacted · 0</span>
                  <span className="rounded-full px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wider text-paper/40">Replied · 0</span>
                  <span className="rounded-full px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wider text-paper/40">Converted · 0</span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <div className="flex min-w-[180px] flex-1 items-center gap-2 rounded-md border border-paper/10 bg-paper/[0.03] px-2.5 py-1.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-paper/40" aria-hidden="true">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-3.5-3.5" />
                    </svg>
                    <span className="text-[12px] text-paper/50">Buscar usuario, bio, nicho…</span>
                  </div>
                  <button className="flex items-center gap-1.5 rounded-md border border-paper/10 bg-paper/[0.03] px-2.5 py-1.5 text-[12px] text-paper/75">
                    Todos los nichos
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <span className="hidden items-center gap-1.5 rounded-md border border-paper/10 bg-paper/[0.03] px-2.5 py-1.5 text-[11px] text-paper/65 lg:inline-flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" /> High quality
                  </span>
                </div>
              </div>

              {/* desktop table */}
              <div className="hidden md:block">
                <div className="grid grid-cols-[1.6fr_2fr_1.3fr_0.7fr_0.7fr_1.8fr_0.9fr] items-center gap-3 border-b border-paper/10 bg-paper/[0.02] px-5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/45">
                  <span>Username</span>
                  <span>Bio</span>
                  <span>Nicho</span>
                  <span>Engagement</span>
                  <span>Score</span>
                  <span>Message</span>
                  <span className="text-right">Action</span>
                </div>
                <ul className="divide-y divide-paper/[0.06]">
                  {rows.map((r) => (
                    <li
                      key={r.user}
                      className="group/row grid grid-cols-[1.6fr_2fr_1.3fr_0.7fr_0.7fr_1.8fr_0.9fr] items-center gap-3 px-5 py-2.5 transition-colors duration-200 hover:bg-paper/[0.03]"
                    >
                      <div className="flex min-w-0 items-center gap-2">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-paper/[0.08] text-[10px] font-medium text-paper/85">
                          {r.initial}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[12.5px] font-medium text-paper">{r.user}</p>
                          <p className="truncate font-mono text-[10px] uppercase tracking-wider text-paper/40">new · 2d</p>
                        </div>
                      </div>
                      <p className="truncate text-[12px] text-paper/65">{r.bio}</p>
                      <span className="inline-flex w-fit items-center rounded-md bg-paper/[0.04] px-1.5 py-0.5 text-[10.5px] text-paper/75 ring-1 ring-inset ring-paper/10">
                        {r.niche}
                      </span>
                      <span className={"inline-flex w-fit items-center rounded-md px-1.5 py-0.5 font-mono text-[10.5px] " + engClass(r.engTone)}>
                        {r.eng}
                      </span>
                      <span className="inline-flex w-fit items-center gap-1 rounded-md bg-lime/15 px-1.5 py-0.5 font-mono text-[10.5px] text-lime-soft ring-1 ring-inset ring-lime/30 transition-colors duration-200 group-hover/row:bg-lime/25">
                        <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                        {r.score}
                      </span>
                      <p className="truncate text-[12px] text-paper/60">{r.msg}</p>
                      <div className="flex justify-end gap-1.5">
                        <button className="rounded-md border border-paper/10 bg-paper/[0.03] px-2 py-1 text-[11px] text-paper/80 transition-all duration-200 hover:-translate-y-px hover:border-paper/20 hover:text-paper">
                          Open
                        </button>
                        <button className="rounded-md border border-paper/10 bg-paper/[0.03] px-2 py-1 text-[11px] text-paper/80 transition-all duration-200 hover:-translate-y-px hover:border-paper/20 hover:text-paper">
                          Copy
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between border-t border-paper/10 px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-wider text-paper/40">
                  <span>8 de 526 leads</span>
                  <div className="flex items-center gap-2">
                    <span className="rounded border border-paper/10 px-1.5 py-0.5 text-paper/60">⌘K</span>
                    <span>Atajos</span>
                  </div>
                </div>
              </div>

              {/* mobile cards */}
              <ul className="divide-y divide-paper/[0.06] md:hidden">
                {rows.slice(0, 5).map((r) => (
                  <li key={r.user} className="px-4 py-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex min-w-0 items-center gap-2">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper/[0.08] text-[11px] font-medium text-paper/85">
                          {r.initial}
                        </span>
                        <p className="truncate text-[13px] font-medium text-paper">{r.user}</p>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-lime/15 px-1.5 py-0.5 font-mono text-[10.5px] text-lime-soft ring-1 ring-inset ring-lime/30">
                        <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                        {r.score}
                      </span>
                    </div>
                    <p className="mt-1.5 line-clamp-2 text-[11.5px] text-paper/60">{r.bio}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <span className="rounded-md bg-paper/[0.04] px-1.5 py-0.5 text-[10.5px] text-paper/75 ring-1 ring-inset ring-paper/10">
                        {r.niche}
                      </span>
                      <span className={"rounded-md px-1.5 py-0.5 font-mono text-[10.5px] " + engClass(r.engTone)}>
                        {r.eng}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── HOW IT WORKS ─────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Di a quién buscas.", body: "Elige nicho y mercado. foculead hace el resto." },
    { n: "02", title: "La IA puntúa cada perfil.", body: "Cada cuenta recibe un score de 0 a 100. Solo ves leads que valen la pena." },
    { n: "03", title: "Mensaje listo para enviar.", body: "Un DM por lead, basado en su bio, nicho y contexto real." },
  ];
  return (
    <section className="border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/60">
          02 · cómo funciona
        </span>
        <h2 className="mt-3 max-w-2xl text-[32px] font-semibold leading-[1.05] tracking-[-0.035em] text-ink sm:text-[44px]">
          tres pasos. cero búsquedas manuales.
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 80}
              className="group bg-paper p-7 transition-colors duration-200 hover:bg-lime-soft/40 sm:p-8"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/55">{s.n}</div>
              <h3 className="mt-6 text-[19px] font-semibold tracking-[-0.02em] text-ink">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-ink/65">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PROBLEM / SOLUTION ───────────────────────────────── */
function ProblemSolution() {
  const problems = [
    "Horas perdidas buscando perfiles.",
    "Leads poco cualificados.",
    "Mensajes genéricos que nadie responde.",
    "Prospectar todos los días agota.",
  ];
  const solutions = [
    "Encuentra perfiles relevantes automáticamente.",
    "Prioriza los mejores leads con IA.",
    "Genera DMs personalizados en segundos.",
    "Convierte Instagram en un canal de adquisición real.",
  ];
  return (
    <section className="border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/60">
              el problema
            </span>
            <h2 className="mt-3 text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[36px]">
              la prospección manual no escala.
            </h2>
            <ul className="mt-10 flex flex-col">
              {problems.map((p, i) => (
                <li
                  key={p}
                  className={
                    "flex items-baseline gap-4 py-4 " +
                    (i !== 0 ? "border-t border-ink/10" : "")
                  }
                >
                  <span className="font-mono text-[11px] tabular-nums text-ink/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15.5px] text-ink/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:pt-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-lime-deep">
              foculead
            </span>
            <h3 className="mt-3 text-[24px] font-semibold leading-[1.15] tracking-[-0.025em] text-ink sm:text-[30px]">
              automatiza todo el proceso.
            </h3>
            <ul className="mt-8 space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <Tick />
                  <span className="text-[15.5px] text-ink/85">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── LEAD INTELLIGENCE ─────────────────────────────────── */
function LeadIntelligence() {
  const signals = [
    { label: "Engagement alto", value: "4.0%" },
    { label: "Nicho relevante", value: "Marketing" },
    { label: "Bio optimizada", value: "Claridad" },
    { label: "Potencial B2B", value: "Alto" },
    { label: "Audiencia activa", value: "553 posts" },
  ];
  const blocks = [
    { title: "No solo buscamos perfiles.", body: "Identificamos cuentas que encajan con tu cliente ideal." },
    { title: "La IA puntúa cada lead.", body: "Engagement, nicho, bio, señales comerciales y relevancia." },
    { title: "Solo ves oportunidades reales.", body: "Sin horas revisando perfiles irrelevantes." },
    { title: "Mensajes contextualizados.", body: "Cada DM se genera con información real del perfil." },
  ];
  return (
    <section className="border-b border-ink/10 bg-[#efece4]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/60">
            03 · lead intelligence
          </span>
          <h2 className="mt-3 text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[40px]">
            así encuentra foculead los mejores leads.
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.55] text-ink/65 sm:text-[17px]">
            La IA analiza señales reales de negocio para detectar perfiles con
            alta probabilidad de convertirse en clientes.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* Lead Intel card */}
          <div className="rounded-2xl border border-ink/10 bg-paper p-7 transition-colors duration-200 hover:border-ink/20 sm:p-8">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink/5 text-[12px] font-medium text-ink">
                  G
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[14px] font-medium text-ink">@growmetriclab</p>
                  <p className="truncate font-mono text-[10.5px] uppercase tracking-wider text-ink/50">
                    Marketing · Growth
                  </p>
                </div>
              </div>
              <span className="rounded-md border border-ink/10 bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-ink/55">
                Lead intel
              </span>
            </div>

            <div className="mt-7 border-t border-ink/10 pt-5">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink/55">
                  Score IA
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-lime-deep">
                  High quality
                </span>
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-[44px] font-semibold tracking-[-0.03em] text-ink tabular-nums sm:text-[56px]">
                  77
                </span>
                <span className="text-[14px] text-ink/50">/100</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink/8">
                <div className="h-full w-[77%] rounded-full bg-lime" />
              </div>
            </div>

            <div className="mt-6 border-t border-ink/10 pt-5">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink/55">
                Señales analizadas
              </p>
              <ul className="mt-3 divide-y divide-ink/8">
                {signals.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center justify-between gap-3 py-2.5"
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <Tick />
                      <span className="truncate text-[13px] text-ink/85">{s.label}</span>
                    </span>
                    <span className="shrink-0 font-mono text-[11.5px] text-ink/60 tabular-nums">
                      {s.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink/55">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                Analizado con IA
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-ink/40 tabular-nums">
                hace 4 min
              </span>
            </div>
          </div>

          {/* explanatory blocks */}
          <ul className="flex flex-col">
            {blocks.map((b, i) => (
              <li
                key={b.title}
                className={
                  "group py-6 " + (i !== 0 ? "border-t border-ink/10" : "")
                }
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] tabular-nums text-ink/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[17px] font-medium tracking-[-0.02em] text-ink">{b.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-[1.55] text-ink/65">{b.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ── FOR WHO ──────────────────────────────────────────── */
function ForWho() {
  const items = [
    "Agencias de marketing que prospectan en Instagram.",
    "Freelances que buscan nuevos clientes.",
    "Consultores y coaches que quieren llenar su agenda.",
    "Cualquiera que venda B2B y pierda horas buscando leads a mano.",
  ];
  return (
    <section id="casos" className="border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/60">
          04 · para quién
        </span>
        <h2 className="mt-3 max-w-2xl text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[40px]">
          quién usa foculead.
        </h2>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal
              key={it}
              as="li"
              delay={i * 60}
              className="flex items-start gap-3 bg-paper p-6 transition-colors duration-200 hover:bg-lime-soft/40"
            >
              <Tick />
              <span className="text-[15.5px] text-ink/85">{it}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── PRICING ──────────────────────────────────────────── */
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
    { name: "Free", price: "0€", features: ["100 créditos/mes", "1 usuario", "Para probar"], cta: "empezar gratis", plan: null },
    { name: "Starter", price: "29€", features: ["2.000 créditos/mes", "Hasta 3 usuarios", "Búsquedas programadas"], cta: "elegir Starter", popular: true, plan: "starter" },
    { name: "Pro", price: "79€", features: ["6.000 créditos/mes", "Hasta 10 usuarios", "Todo lo de Starter"], cta: "elegir Pro", plan: "pro" },
    { name: "Business", price: "199€", features: ["15.000 créditos/mes", "Hasta 100 usuarios", "Equipos y agencias"], cta: "elegir Business", plan: "business" },
  ];
  return (
    <section id="precios" className="border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/60">
          05 · precios
        </span>
        <h2 className="mt-3 max-w-2xl text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[40px]">
          precios claros. sin letra pequeña.
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 70}
              className={
                "relative flex flex-col p-7 transition-colors duration-200 " +
                (p.popular ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-lime-soft/30")
              }
            >
              {p.popular && (
                <span className="absolute right-5 top-5 rounded-full bg-lime px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink">
                  Popular
                </span>
              )}
              <span className={"font-mono text-[10.5px] uppercase tracking-[0.14em] " + (p.popular ? "text-paper/60" : "text-ink/55")}>
                {p.name}
              </span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className={"text-[40px] font-semibold tracking-[-0.03em] " + (p.popular ? "text-paper" : "text-ink")}>
                  {p.price}
                </span>
                <span className={"text-[13px] " + (p.popular ? "text-paper/60" : "text-ink/50")}>/mes</span>
              </div>
              <ul className={"mt-6 space-y-3 text-[14px] " + (p.popular ? "text-paper/85" : "text-ink/80")}>
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={"mt-1 shrink-0 " + (p.popular ? "text-lime" : "text-ink")} aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={p.plan ? signupUrl(p.plan) : LOGIN_URL}
                className={
                  "mt-8 inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-[14px] font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 " +
                  (p.popular
                    ? "bg-lime text-ink hover:bg-lime-soft"
                    : "border border-ink/15 bg-paper text-ink hover:border-ink/30")
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

/* ── FAQ ──────────────────────────────────────────────── */
function FAQ() {
  const faqs = [
    { q: "¿Qué es un crédito?", a: "Cada perfil analizado consume 1 crédito. Generar el DM consume 1 crédito adicional." },
    { q: "¿De dónde vienen los leads?", a: "De perfiles públicos de Instagram. foculead no accede a datos privados." },
    { q: "¿Puedo cancelar cuando quiera?", a: "Sí. Sin permanencia." },
    { q: "¿foculead envía los DMs por mí?", a: "No. foculead genera el mensaje; tú decides cuándo y cómo enviarlo." },
    { q: "¿Funciona para cualquier nicho?", a: "Sí. Busca por hashtag, cuentas referentes o ubicación + nicho." },
  ];
  return (
    <section className="border-b border-ink/10">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/60">
          06 · faq
        </span>
        <h2 className="mt-3 text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[40px]">
          preguntas frecuentes.
        </h2>
        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-ink/10">
              <AccordionTrigger className="text-left text-[15.5px] text-ink hover:text-ink hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[14.5px] leading-[1.6] text-ink/65">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ── FINAL CTA ────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'><g fill='%23f6f3ec'><path d='M24 8l2.2 6.8h7.1l-5.8 4.2 2.2 6.8L24 21.6l-5.8 4.2 2.2-6.8-5.8-4.2h7.1z'/></g></svg>\")",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">
        <h2 className="mx-auto max-w-3xl text-[32px] font-semibold leading-[1.02] tracking-[-0.035em] text-paper sm:text-[56px]">
          empieza hoy.
          <br />
          <span className="text-paper/45">los primeros 100 créditos son gratis.</span>
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={LOGIN_URL}
            className="inline-flex items-center justify-center rounded-xl bg-lime px-5 py-3 text-[15px] font-medium text-ink transition-all duration-200 ease-out hover:bg-lime-soft hover:-translate-y-0.5"
          >
            crear cuenta gratis
          </a>
          <a
            href="#producto"
            className="inline-flex items-center justify-center rounded-xl border border-paper/15 bg-transparent px-5 py-3 text-[15px] font-medium text-paper transition-all duration-200 hover:border-paper/30 hover:-translate-y-0.5"
          >
            ver demo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-[15px] font-semibold text-ink">
            <img src={logoUrl} alt="foculead" width={20} height={20} loading="lazy" className="h-5 w-5" />
            <span>foculead</span>
          </div>
          <p className="mt-2 max-w-md font-mono text-[10.5px] uppercase tracking-wider text-ink/45">
            © 2026 foculead · Amaya Oses Relloso · NIF 73418483E · Madrid
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[12.5px] text-ink/60">
          <a href="https://app.foculead.com/legal" className="hover:text-ink">Aviso Legal</a>
          <a href="https://app.foculead.com/privacy" className="hover:text-ink">Privacidad</a>
          <a href="https://app.foculead.com/terms" className="hover:text-ink">Términos</a>
          <a href="mailto:hola@foculead.com" className="hover:text-ink">hola@foculead.com</a>
        </nav>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <ProductPreview />
        <ProblemSolution />
        <HowItWorks />
        <LeadIntelligence />
        <ForWho />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
