import { createFileRoute } from "@tanstack/react-router";
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
      { title: "FocuLead — Encuentra clientes en Instagram con IA" },
      {
        name: "description",
        content:
          "Genera leads desde Instagram automáticamente con IA. Encuentra perfiles relevantes, prioriza oportunidades y crea DMs personalizados en segundos.",
      },
      { property: "og:title", content: "FocuLead — Encuentra clientes en Instagram con IA" },
      {
        property: "og:description",
        content:
          "Genera leads desde Instagram automáticamente con IA. Encuentra perfiles relevantes, prioriza oportunidades y crea DMs personalizados en segundos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://foculead.com/" },
      { property: "og:image", content: "https://foculead.com/og-image.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "FocuLead — Leads de Instagram con IA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FocuLead — Encuentra clientes en Instagram con IA" },
      {
        name: "twitter:description",
        content:
          "Genera leads desde Instagram automáticamente con IA. Encuentra perfiles relevantes, prioriza oportunidades y crea DMs personalizados en segundos.",
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
            "Herramienta SaaS que encuentra leads cualificados en Instagram con IA y genera el primer mensaje personalizado.",
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
                text: "Cada perfil que la IA analiza consume 1 crédito. Generar el DM consume 1 crédito adicional.",
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
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
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
          className="rounded-md border border-zinc-800 px-3.5 py-1.5 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
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
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-28 text-center sm:pt-32 sm:pb-36">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-6xl md:text-7xl">
          Encuentra clientes en Instagram con IA.
          <br />
          <span className="text-zinc-500">Sin buscar a mano.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base text-zinc-400 sm:text-lg">
          FocuLead analiza miles de perfiles públicos, puntúa los mejores leads
          para tu negocio y genera el primer mensaje personalizado — listo para
          enviar en segundos.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href={LOGIN_URL}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Empieza gratis →
          </a>
          <a
            href="#como-funciona"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Ver cómo funciona ↓
          </a>
        </div>
      </div>
    </section>
  );
}

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
    {
      initial: "C",
      user: "@coach.himjain",
      bio: "Health Coach | Wellness Educator. Helping Gujarati people improve weight…",
      niche: "Coaching & Education",
      eng: "17.5%",
      engTone: "warn",
      score: 79,
      msg: "Hey! Just scrolled through your content on hormonal bal…",
    },
    {
      initial: "C",
      user: "@creativeworks.dk",
      bio: "A creative space for building your brand. Create with THE STUDIO or THE …",
      niche: "Branding & Creative",
      eng: "4.0%",
      engTone: "warn",
      score: 77,
      msg: "Hey! Love how you're weaving emotion into branding with…",
    },
    {
      initial: "E",
      user: "@errantiestudioinmobiliario",
      bio: "Los creadores del Cyber Week Inmobiliario · 20% OFF en alquileres y…",
      niche: "Real Estate & Architecture",
      eng: "1.9%",
      engTone: "muted",
      score: 77,
      msg: "Hola! Vi que están arrasando con el Cyber Week Inmobiliari…",
    },
    {
      initial: "L",
      user: "@liderazgohostelero",
      bio: "Clientes = personas · Tu equipo = personas · Si entiendes a las personas…",
      niche: "Food & Hospitality",
      eng: "41.7%",
      engTone: "good",
      score: 77,
      msg: "Hola! Acabo de ver tu contenido sobre liderazgo en hostele…",
    },
    {
      initial: "D",
      user: "@dr.marcelo.silvaa",
      bio: "Advogado com atuação nas áreas Cível, Criminal e de Família. Professor d…",
      niche: "Finance & Legal",
      eng: "3.5%",
      engTone: "warn",
      score: 76,
      msg: "Hola! Vi que trabajas temas de familia y sucesiones, y eso…",
    },
    {
      initial: "F",
      user: "@falconi.vlabs",
      bio: "AI Content Creator · Elite Creator: Kling AI · CPP: Invideo | Open…",
      niche: "Coaching & Education",
      eng: "61.0%",
      engTone: "good",
      score: 76,
      msg: "Hola! Vi que llevas un año apostando fuerte por la IA y la…",
    },
    {
      initial: "N",
      user: "@nutrifit.mom",
      bio: "Timișoara · Ajut MAMELE și FEMEILE OCUPATE să se mențină în formă! DM d…",
      niche: "Health & Wellness",
      eng: "3.9%",
      engTone: "warn",
      score: 76,
      msg: "Hey! Love how you're helping busy moms stay fit without…",
    },
    {
      initial: "A",
      user: "@abogadowolfgang_gwraices",
      bio: "Blindamos tu inversión inmobiliaria en Aragua · Compra y vende …",
      niche: "Real Estate & Architecture",
      eng: "8.3%",
      engTone: "warn",
      score: 76,
      msg: "Hola! Vi que blindas inversiones inmobiliarias en Aragua y…",
    },
  ];
  const engClass = (tone: string) =>
    tone === "good"
      ? "bg-emerald-500/10 text-emerald-400 ring-1 ring-inset ring-emerald-500/20"
      : tone === "warn"
        ? "bg-amber-500/10 text-amber-400 ring-1 ring-inset ring-amber-500/20"
        : "bg-zinc-800 text-zinc-400 ring-1 ring-inset ring-zinc-700/60";

  return (
    <section className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="animate-in fade-in slide-in-from-bottom-4 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/50 duration-700">
          {/* window chrome */}
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
              app.foculead.com/leads
            </div>
            <span className="w-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[210px_1fr]">
            {/* Sidebar */}
            <aside className="hidden flex-col justify-between border-r border-zinc-800 bg-zinc-950 md:flex">
              <div>
                <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3.5">
                  <img src={logoUrl} alt="" width={18} height={18} loading="lazy" decoding="async" className="h-[18px] w-[18px]" />
                  <div className="flex flex-col leading-tight">
                    <span className="text-[13px] font-semibold text-zinc-100">FocuLead</span>
                    <span className="text-[10px] text-zinc-500">Workspace</span>
                  </div>
                </div>
                <nav className="px-2 py-3">
                  <p className="px-2 pb-1.5 text-[10px] font-medium uppercase tracking-wider text-zinc-600">
                    Pipeline
                  </p>
                  {nav.map((n) => (
                    <div
                      key={n.label}
                      className={
                        "mt-0.5 flex items-center justify-between rounded-md px-2 py-1.5 text-[13px] transition-colors duration-200 " +
                        (n.active
                          ? "bg-zinc-800/80 text-zinc-100"
                          : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200")
                      }
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className={
                            "h-1.5 w-1.5 rounded-full " +
                            (n.active ? "bg-lime-400" : "bg-zinc-700")
                          }
                        />
                        {n.label}
                      </span>
                      {n.count && (
                        <span className="rounded bg-zinc-900 px-1.5 text-[10px] text-zinc-500">
                          {n.count}
                        </span>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
              <div className="m-3 rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">
                <div className="flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Créditos · Starter</span>
                  <span className="text-zinc-300">7.352 / 20.000</span>
                </div>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-zinc-800">
                  <div className="h-full w-[37%] rounded-full bg-lime-400" />
                </div>
              </div>
            </aside>

            {/* Main */}
            <div className="min-w-0">
              {/* Header */}
              <div className="border-b border-zinc-800 px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-100">Leads</h3>
                    <p className="mt-0.5 text-[12px] text-zinc-500">
                      Gestiona y filtra los leads captados con IA desde Instagram.
                    </p>
                  </div>
                  <div className="hidden items-center gap-2 sm:flex">
                    <button className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1.5 text-[12px] text-zinc-300 transition-colors duration-200 hover:border-zinc-700 hover:text-zinc-100">
                      Exportar
                    </button>
                    <button className="rounded-md bg-zinc-100 px-2.5 py-1.5 text-[12px] font-medium text-zinc-900 transition-colors duration-200 hover:bg-white">
                      + Nuevo lead
                    </button>
                  </div>
                </div>

                {/* Tabs + badges row */}
                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  <span className="rounded-full bg-lime-400/15 px-2.5 py-1 text-[11px] font-medium text-lime-300 ring-1 ring-inset ring-lime-400/30">
                    All · 526
                  </span>
                  <span className="rounded-full px-2.5 py-1 text-[11px] text-zinc-400 hover:text-zinc-200">New · 526</span>
                  <span className="rounded-full px-2.5 py-1 text-[11px] text-zinc-400">Contacted · 0</span>
                  <span className="rounded-full px-2.5 py-1 text-[11px] text-zinc-400">Replied · 0</span>
                  <span className="rounded-full px-2.5 py-1 text-[11px] text-zinc-400">Converted · 0</span>
                  <span className="rounded-full px-2.5 py-1 text-[11px] text-zinc-400">Skipped · 0</span>
                </div>

                {/* Filters row */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <div className="flex min-w-[180px] flex-1 items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-500" aria-hidden="true">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-3.5-3.5" />
                    </svg>
                    <span className="text-[12px] text-zinc-500">Buscar usuario, bio, nicho…</span>
                  </div>
                  <button className="flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1.5 text-[12px] text-zinc-300">
                    Todos los nichos
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <span className="flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1.5 text-[11px] text-zinc-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> High quality
                  </span>
                  <span className="hidden items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1.5 text-[11px] text-zinc-400 lg:inline-flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-400" /> Listos para comprar
                  </span>
                  <span className="hidden items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1.5 text-[11px] text-zinc-400 lg:inline-flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" /> Archived
                  </span>
                </div>
              </div>

              {/* Desktop table */}
              <div className="hidden md:block">
                <div className="grid grid-cols-[1.6fr_2fr_1.3fr_0.7fr_0.7fr_1.8fr_0.9fr] items-center gap-3 border-b border-zinc-800 bg-zinc-900/40 px-5 py-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  <span>Username</span>
                  <span>Bio</span>
                  <span>Nicho</span>
                  <span>Engagement</span>
                  <span>Score</span>
                  <span>Message</span>
                  <span className="text-right">Action</span>
                </div>
                <ul className="divide-y divide-zinc-800/80">
                  {rows.map((r) => (
                    <li
                      key={r.user}
                      className="grid grid-cols-[1.6fr_2fr_1.3fr_0.7fr_0.7fr_1.8fr_0.9fr] items-center gap-3 px-5 py-2.5 transition-colors duration-200 hover:bg-zinc-900/40"
                    >
                      <div className="flex min-w-0 items-center gap-2">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-medium text-zinc-300">
                          {r.initial}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[12.5px] font-medium text-zinc-100">{r.user}</p>
                          <p className="truncate text-[10.5px] text-zinc-500">New · 2d</p>
                        </div>
                      </div>
                      <p className="truncate text-[12px] text-zinc-400">{r.bio}</p>
                      <span className="inline-flex w-fit items-center rounded-md bg-zinc-900 px-1.5 py-0.5 text-[10.5px] text-zinc-300 ring-1 ring-inset ring-zinc-800">
                        {r.niche}
                      </span>
                      <span className={"inline-flex w-fit items-center rounded-md px-1.5 py-0.5 text-[10.5px] font-medium " + engClass(r.engTone)}>
                        {r.eng}
                      </span>
                      <span className="inline-flex w-fit items-center gap-1 rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[10.5px] font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {r.score}/100
                      </span>
                      <p className="truncate text-[12px] text-zinc-400">{r.msg}</p>
                      <div className="flex justify-end gap-1.5">
                        <button className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-[11px] text-zinc-300 transition-colors duration-200 hover:border-zinc-700 hover:text-zinc-100">
                          Open
                        </button>
                        <button className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-[11px] text-zinc-300 transition-colors duration-200 hover:border-zinc-700 hover:text-zinc-100">
                          Copy
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between border-t border-zinc-800 px-5 py-2.5 text-[11px] text-zinc-500">
                  <span>Mostrando 8 de 526 leads</span>
                  <div className="flex items-center gap-2">
                    <span className="rounded border border-zinc-800 px-1.5 py-0.5 text-zinc-400">⌘K</span>
                    <span>Atajos</span>
                  </div>
                </div>
              </div>

              {/* Mobile cards */}
              <ul className="divide-y divide-zinc-800 md:hidden">
                {rows.slice(0, 5).map((r) => (
                  <li key={r.user} className="px-4 py-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex min-w-0 items-center gap-2">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-[11px] font-medium text-zinc-300">
                          {r.initial}
                        </span>
                        <p className="truncate text-[13px] font-medium text-zinc-100">{r.user}</p>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[10.5px] font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {r.score}
                      </span>
                    </div>
                    <p className="mt-1.5 line-clamp-2 text-[11.5px] text-zinc-400">{r.bio}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <span className="rounded-md bg-zinc-900 px-1.5 py-0.5 text-[10.5px] text-zinc-300 ring-1 ring-inset ring-zinc-800">
                        {r.niche}
                      </span>
                      <span className={"rounded-md px-1.5 py-0.5 text-[10.5px] font-medium " + engClass(r.engTone)}>
                        {r.eng}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      title: "La IA analiza y puntúa",
      body: "Cada perfil recibe una puntuación de 0 a 100 según su relevancia. Solo verás los leads que realmente valen la pena.",
    },
    {
      n: "03",
      title: "Mensaje listo para enviar",
      body: "Claude genera un DM personalizado para cada lead, basado en su bio, nicho y contexto real.",
    },
  ];
  return (
    <section id="como-funciona" className="border-b border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          Tres pasos. Cero búsquedas manuales.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6"
            >
              <div className="text-sm font-mono text-zinc-400">{s.n}</div>
              <h3 className="mt-4 text-lg font-medium text-zinc-100">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{s.body}</p>
            </div>
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
    "Prioriza los mejores leads con IA",
    "Genera DMs personalizados en segundos",
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

function LeadIntelligence() {
  const signals = [
    { label: "Engagement alto", value: "4.0%" },
    { label: "Nicho relevante", value: "Branding & Creative" },
    { label: "Bio optimizada", value: "Describe claramente su servicio" },
    { label: "Potencial B2B", value: "Alta probabilidad de compra" },
    { label: "Audiencia activa", value: "553 publicaciones" },
  ];
  const blocks = [
    {
      title: "No solo buscamos perfiles.",
      body: "FocuLead identifica cuentas que realmente encajan con tu cliente ideal.",
    },
    {
      title: "La IA puntúa cada lead.",
      body: "Analizamos engagement, nicho, actividad, bio, señales comerciales y relevancia.",
    },
    {
      title: "Solo ves oportunidades reales.",
      body: "Evita perder horas revisando perfiles irrelevantes o escribiendo mensajes genéricos.",
    },
    {
      title: "Mensajes contextualizados.",
      body: "Cada DM se genera usando información real del perfil para aumentar respuestas.",
    },
  ];
  return (
    <section className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Así encuentra FocuLead los mejores leads
          </h2>
          <p className="mt-5 text-base text-zinc-400 sm:text-lg">
            La IA analiza señales reales de negocio para detectar perfiles con
            alta probabilidad de convertirse en clientes.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-10">
          {/* Left: Lead Intelligence card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-colors duration-200 hover:border-zinc-700 sm:p-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-[12px] font-medium text-zinc-300">
                  C
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[13.5px] font-medium text-zinc-100">
                    @creativeworks.dk
                  </p>
                  <p className="truncate text-[11.5px] text-zinc-500">
                    Branding & Creative
                  </p>
                </div>
              </div>
              <span className="rounded-md border border-zinc-800 bg-zinc-950 px-2 py-1 text-[10px] uppercase tracking-wider text-zinc-500">
                Lead intel
              </span>
            </div>

            {/* Score */}
            <div className="mt-6 border-t border-zinc-800 pt-5">
              <div className="flex items-baseline justify-between">
                <span className="text-[10.5px] font-medium uppercase tracking-wider text-zinc-500">
                  Score IA
                </span>
                <span className="text-[10.5px] text-emerald-400">High quality</span>
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-zinc-100 tabular-nums sm:text-5xl">
                  77
                </span>
                <span className="text-sm text-zinc-500">/100</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-[77%] rounded-full bg-emerald-500" />
              </div>
            </div>

            {/* Signals */}
            <div className="mt-6 border-t border-zinc-800 pt-5">
              <p className="text-[10.5px] font-medium uppercase tracking-wider text-zinc-500">
                Señales analizadas
              </p>
              <ul className="mt-3 divide-y divide-zinc-800/80">
                {signals.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center justify-between gap-3 py-2.5 transition-colors duration-200 hover:bg-zinc-900/40"
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 text-emerald-400"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="truncate text-[12.5px] text-zinc-300">
                        {s.label}
                      </span>
                    </span>
                    <span className="shrink-0 text-[12px] text-zinc-400 tabular-nums">
                      {s.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-zinc-800 pt-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[10.5px] text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                Analizado con IA
              </span>
              <span className="text-[10.5px] text-zinc-600 tabular-nums">
                hace 4 min
              </span>
            </div>
          </div>

          {/* Right: explanatory blocks */}
          <ul className="flex flex-col">
            {blocks.map((b, i) => (
              <li
                key={b.title}
                className={
                  "group py-5 transition-colors duration-200 " +
                  (i !== 0 ? "border-t border-zinc-800" : "")
                }
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 font-mono text-[11px] text-zinc-600 tabular-nums">​</span>
                  <div className="min-w-0">
                    <h3 className="text-base font-medium text-zinc-100 transition-colors duration-200 group-hover:text-white">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      {b.body}
                    </p>
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
          {items.map((it) => (
            <li
              key={it}
              className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-900/40 p-5"
            >
              <CheckIcon />
              <span className="text-base text-zinc-200">{it}</span>
            </li>
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
      features: ["100 créditos/mes", "1 usuario", "Perfecto para probar"],
      cta: "Empieza gratis",
      plan: null,
    },
    {
      name: "Starter",
      price: "29€",
      features: ["2.000 créditos/mes", "Hasta 3 usuarios", "Búsquedas programadas"],
      cta: "Elegir Starter",
      popular: true,
      plan: "starter",
    },
    {
      name: "Pro",
      price: "79€",
      features: ["6.000 créditos/mes", "Hasta 10 usuarios", "Todo lo de Starter"],
      cta: "Elegir Pro",
      plan: "pro",
    },
    {
      name: "Business",
      price: "199€",
      features: [
        "15.000 créditos/mes",
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
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                "relative flex flex-col rounded-xl border bg-zinc-900/60 p-6 " +
                (p.popular ? "border-primary" : "border-zinc-800")
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
                <span className="text-sm text-zinc-400">/mes</span>
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
                  "mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors " +
                  (p.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-zinc-800 text-zinc-100 hover:border-zinc-700 hover:bg-zinc-900")
                }
              >
                {p.cta}
              </a>
            </div>
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
      a: "Cada perfil que la IA analiza consume 1 crédito. Generar el DM consume 1 crédito adicional.",
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
      a: "No. FocuLead genera el mensaje; tú decides cuándo y cómo enviarlo.",
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
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
          Empieza hoy.
          <br />
          <span className="text-zinc-500">
            Los primeros 100 créditos son gratis.
          </span>
        </h2>
        <a
          href={LOGIN_URL}
          className="mt-10 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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
