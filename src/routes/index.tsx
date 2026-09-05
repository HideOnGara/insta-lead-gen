import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FocuLead — Leads de Instagram con IA" },
      {
        name: "description",
        content:
          "Encuentra clientes en Instagram con IA. FocuLead analiza perfiles, puntúa leads y genera el primer DM personalizado.",
      },
      { property: "og:title", content: "FocuLead — Leads de Instagram con IA" },
      {
        property: "og:description",
        content:
          "Encuentra clientes en Instagram con IA. FocuLead analiza perfiles, puntúa leads y genera el primer DM personalizado.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "https://foculead.com/og-image.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "FocuLead — Leads de Instagram con IA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FocuLead — Leads de Instagram con IA" },
      {
        name: "twitter:description",
        content:
          "Analiza miles de perfiles de Instagram con IA y genera el primer DM personalizado.",
      },
      { name: "twitter:image", content: "https://foculead.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
                text: "Un crédito es un perfil analizado. Las búsquedas por ubicación y por hashtag —las que usa la mayoría— consumen 2 créditos por perfil; las de seguidores, 1. El DM va incluido: solo cuesta 1 crédito extra si pides regenerarlo.",
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
        <a href="/" className="text-base font-semibold tracking-tight text-zinc-100">
          FocuLead
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
      a: "Un crédito es un perfil analizado. Las búsquedas por ubicación y por hashtag —las que usa la mayoría— consumen 2 créditos por perfil; las de seguidores, 1. El DM va incluido: solo cuesta 1 crédito extra si pides regenerarlo.",
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
            Tu primera búsqueda es gratis.
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
          <div className="text-base font-semibold text-zinc-100">FocuLead</div>
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
        <HowItWorks />
        <ForWho />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
