import ContactForm from "./_components/contact-form";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Stack", href: "#stack" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Research", href: "#research" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

const positioningCards = [
  {
    title: "Data Ownership",
    body: "Self-controlled ingestion, storage, labeling, and metric pipelines reduce dependency on opaque vendor feeds.",
  },
  {
    title: "Research Velocity",
    body: "Point-in-time data contracts make it faster to test, reject, and refine factors with institutional discipline.",
  },
  {
    title: "Execution Readiness",
    body: "Validated signals are designed to move toward monitored deployment, risk checks, and execution feedback.",
  },
];

const stackProducts = [
  {
    name: "MQNODE",
    subtitle: "Node-native data and metric infrastructure",
    description:
      "MQNODE ingests blockchain, exchange, and market data into structured databases for metric generation, on-chain monitoring, entity labeling, and point-in-time data pipelines.",
    bullets: [
      "Blockchain node data ingestion",
      "Exchange price and market feeds",
      "Time-series metric storage",
      "Entity and wallet clustering",
      "Reserve and flow monitoring",
      "API-ready data contracts",
    ],
  },
  {
    name: "MQENGINE / MQBTDASH",
    subtitle: "Research, backtesting, and visualization layer",
    description:
      "MQENGINE converts raw and derived metrics into testable trading signals. MQBTDASH provides visualization, strategy diagnostics, performance analytics, and research workflows.",
    bullets: [
      "Factor research",
      "Backtesting engine",
      "Sharpe, Calmar, drawdown, win-rate analytics",
      "Equity curve visualization",
      "Walk-forward and robustness testing",
      "Strategy validation pipeline",
    ],
  },
  {
    name: "MQBOT",
    subtitle: "Automated strategy execution framework",
    description:
      "MQBOT is the execution layer for deploying validated strategies into live trading environments with monitoring, risk controls, and OMS integration.",
    bullets: [
      "Strategy execution modules",
      "CTA, mean-reversion, event-driven, HFT, and sniping modules",
      "Exchange execution connectors",
      "Real-time logging",
      "OMS feedback loop",
      "Risk and position monitoring",
    ],
  },
];

const chainCards = [
  "CEX reserve and flow tracking",
  "Wallet clustering and labeling",
  "Deposit, consolidation, cold wallet, and withdrawal flow mapping",
  "Protocol and sector activity",
  "Point-in-time signal generation",
];

const edgeCards = [
  {
    title: "Self-owned node infrastructure",
    body: "Direct blockchain access for stronger provenance, lower vendor dependency, and richer raw event coverage.",
    span: "lg:col-span-2",
  },
  {
    title: "Private metric engine",
    body: "Internal derivation logic turns raw data into consistent research and monitoring surfaces.",
    span: "",
  },
  {
    title: "Modular containers",
    body: "Worker services can evolve independently across ingestion, reconciliation, research, and execution.",
    span: "",
  },
  {
    title: "PostgreSQL / TimescaleDB data layer",
    body: "Structured relational and time-series storage for auditability, replay, and stable API contracts.",
    span: "lg:col-span-2",
  },
  {
    title: "Real-time worker pipelines",
    body: "Streaming and scheduled jobs keep data fresh while preserving validation boundaries.",
    span: "",
  },
  {
    title: "API-first architecture",
    body: "Every major layer is designed to expose clean internal or external contracts.",
    span: "",
  },
  {
    title: "Research-to-execution feedback loop",
    body: "Live behavior, fills, errors, and market context can flow back into research diagnostics.",
    span: "lg:col-span-2",
  },
  {
    title: "Future multi-chain expansion",
    body: "The architecture is built to extend beyond a single chain, venue, or signal family.",
    span: "",
  },
];

const roadmapCurrent = [
  "MQNODE",
  "MQENGINE / MQBTDASH",
  "MQBOT",
  "MQ ChainActivity",
];

const roadmapFuture = [
  "MamakQuantBrain",
  "MamakQuant API",
  "Institutional dashboard",
  "Multi-chain intelligence expansion",
  "Strategy marketplace / strategy registry",
  "Automated factor discovery",
];

const principles = [
  "Point-in-time correctness",
  "Data quality before signal generation",
  "Robustness before deployment",
  "Infrastructure ownership as edge",
];

export default function Home() {
  return (
    <main id="home" className="min-h-screen max-w-full overflow-hidden bg-[#02040a] text-slate-100">
      <Navbar />
      <HeroSection />
      <PositioningSection />
      <StackSection />
      <ChainActivitySection />
      <InfrastructureEdgeSection />
      <RoadmapSection />
      <ResearchSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#02040a]/80 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-300/40 bg-cyan-300/10 text-sm font-semibold text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.22)]">
            MQ
          </span>
          <span className="text-sm font-semibold text-white sm:text-base">MamakQuant</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-lg border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-50 transition hover:border-cyan-200 hover:bg-cyan-300/20 sm:inline-flex"
        >
          Contact MamakQuant
        </a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[min(880px,88svh)] overflow-hidden pt-24 sm:pt-28">
      <div className="quant-grid absolute inset-0 opacity-50" />
      <div className="hero-depth absolute inset-0" />
      <div className="absolute right-5 top-24 hidden h-[560px] w-[620px] xl:right-8 lg:block">
        <InfrastructureDiagram />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-5 pb-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-[calc(100vw_-_2.5rem)] pt-10 sm:max-w-3xl sm:pt-16 lg:pt-24">
          <p className="mb-5 inline-flex rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
            MamakQuant
          </p>
          <h1 className="max-w-[calc(100vw_-_2.5rem)] text-4xl font-semibold leading-[1.08] text-white sm:max-w-4xl sm:text-6xl lg:text-7xl">
            Vertically Integrated Quant Infrastructure
          </h1>
          <p className="mt-7 max-w-[calc(100vw_-_2.5rem)] text-lg leading-8 text-slate-300 sm:max-w-2xl sm:text-xl">
            MamakQuant builds proprietary market intelligence infrastructure across
            blockchain nodes, on-chain entity graphs, quantitative research engines,
            backtesting systems, and automated trading execution.
          </p>

          <div className="mt-9 flex w-full max-w-[calc(100vw_-_2.5rem)] flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
            <a
              href="#stack"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Explore the Stack
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-12 w-full max-w-[calc(100vw_-_2.5rem)] min-w-0 lg:hidden">
          <InfrastructureDiagram />
        </div>
      </div>
    </section>
  );
}

function InfrastructureDiagram() {
  const pipeline = [
    "Raw Blockchain Data",
    "MQNODE",
    "MQENGINE",
    "MQBOT",
    "OMS / Execution",
  ];

  const signalLoop = ["Market Data", "Research", "Strategy", "Execution", "Feedback"];

  return (
    <div className="relative min-h-[440px] w-full max-w-full min-w-0 overflow-hidden rounded-lg border border-white/10 bg-slate-950/45 p-5 shadow-[0_20px_80px_rgba(8,47,73,0.35)] backdrop-blur-xl">
      <div className="absolute inset-0 diagram-grid opacity-70" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 720 520"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="networkGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
            <stop offset="48%" stopColor="#93c5fd" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <path
          className="network-path"
          d="M90 112 C210 54 310 68 420 128 S595 195 642 128"
          fill="none"
          stroke="url(#networkGradient)"
          strokeWidth="2"
        />
        <path
          className="network-path network-path-delay"
          d="M86 326 C220 392 330 388 442 314 S604 242 650 306"
          fill="none"
          stroke="url(#networkGradient)"
          strokeWidth="2"
        />
        <path
          className="network-path"
          d="M178 246 H542"
          fill="none"
          stroke="url(#networkGradient)"
          strokeWidth="2"
        />
      </svg>

      <div className="relative z-10 grid min-w-0 gap-4 lg:grid-cols-[1fr_0.85fr]">
        <div className="min-w-0 space-y-3">
          <p className="text-xs font-medium text-cyan-100">Primary infrastructure path</p>
          <div className="space-y-3">
            {pipeline.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-xs font-semibold text-cyan-100">
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.055] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <span className="text-sm font-medium text-white">{step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="terminal-panel min-w-0 rounded-lg border border-white/10 bg-black/40 p-4">
          <p className="text-xs font-medium text-slate-300">Signal loop</p>
          <div className="mt-4 grid gap-2">
            {signalLoop.map((step) => (
              <div key={step} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
                <span className="font-mono text-xs text-slate-200">{step}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-3">
            <p className="break-all font-mono text-xs leading-6 text-cyan-50 sm:break-normal">
              ingest.stream(status=clean)
              <br />
              metrics.point_in_time=true
              <br />
              research.queue=active
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PositioningSection() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.025] py-20">
      <Container>
        <SectionHeader
          eyebrow="Company positioning"
          title="From raw market data to strategy-ready intelligence"
          body="MamakQuant is designed to own the full data and strategy pipeline instead of depending only on third-party vendors. The goal is to transform blockchain, exchange, and market data into clean, point-in-time-correct, research-ready, and execution-ready signals."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {positioningCards.map((card) => (
            <CompactCard key={card.title} title={card.title} body={card.body} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function StackSection() {
  return (
    <section id="stack" className="relative scroll-mt-24 py-24">
      <Container>
        <SectionHeader
          eyebrow="Core systems"
          title="The MamakQuant Stack"
          body="A vertically integrated stack for market intelligence, quantitative research, validation, and execution."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {stackProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ChainActivitySection() {
  const pipeline = [
    "Raw Chain Events",
    "Entity & Address Graph",
    "Protocol / Sector / Asset Mapping",
    "Metric Engine",
    "Dashboard / API / Strategy Signal",
  ];

  return (
    <section id="intelligence" className="relative scroll-mt-24 border-y border-white/10 bg-[#050814] py-24">
      <div className="quant-grid absolute inset-0 opacity-30" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="MQ ChainActivity"
          title="MQ ChainActivity"
          subtitle="Entity-aware on-chain market intelligence"
          body="MQ ChainActivity is designed to convert raw blockchain transactions into entity-aware, sector-aware, and strategy-ready intelligence."
        />

        <div className="mt-12 overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-4 backdrop-blur">
          <div className="grid gap-3 lg:grid-cols-5">
            {pipeline.map((stage, index) => (
              <div key={stage} className="relative">
                <div className="h-full rounded-lg border border-cyan-300/20 bg-slate-950/70 p-4">
                  <p className="text-xs font-medium text-cyan-200">0{index + 1}</p>
                  <p className="mt-3 text-sm font-semibold text-white">{stage}</p>
                </div>
                {index < pipeline.length - 1 ? (
                  <span className="absolute right-[-0.75rem] top-1/2 hidden h-px w-6 bg-cyan-300/60 lg:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {chainCards.map((card) => (
            <div
              key={card}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300"
            >
              {card}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function InfrastructureEdgeSection() {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeader
          eyebrow="Infrastructure edge"
          title="Built for data control, speed, and research depth"
          body="MamakQuant is designed around ownership of data sources, modular infrastructure, and a clean path from raw data to deployment-ready intelligence."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {edgeCards.map((card) => (
            <div
              key={card.title}
              className={`group min-h-[190px] rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/40 hover:bg-white/[0.065] ${card.span}`}
            >
              <div className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300" />
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{card.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section id="roadmap" className="scroll-mt-24 border-y border-white/10 bg-white/[0.025] py-24">
      <Container>
        <SectionHeader
          eyebrow="Roadmap"
          title="Roadmap"
          body="The current build focuses on the core quant infrastructure stack, with future modules expanding research automation, API distribution, and institutional surfaces."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <RoadmapPanel title="Current / Core" items={roadmapCurrent} />
          <div className="rounded-lg border border-white/10 bg-slate-950/65 p-6">
            <h3 className="text-xl font-semibold text-white">Future</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {roadmapFuture.map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.045] p-4 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-cyan-300/25 bg-cyan-300/10 p-5">
              <p className="text-sm font-semibold text-cyan-100">MamakQuantBrain</p>
              <h4 className="mt-2 text-xl font-semibold text-white">
                Automated factor discovery and research intelligence
              </h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                MamakQuantBrain is planned as an automated research layer for
                discovering, ranking, validating, and monitoring quantitative factors
                across crypto and multi-asset markets.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ResearchSection() {
  return (
    <section id="research" className="scroll-mt-24 py-24">
      <Container>
        <SectionHeader
          eyebrow="Research philosophy"
          title="Research-first. Infrastructure-owned. Execution-aware."
          body="MamakQuant is not only a trading bot. It is a full-stack quantitative infrastructure project where data quality, point-in-time correctness, strategy validation, risk control, and execution feedback are part of the same system."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {principles.map((principle, index) => (
            <div key={principle} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-medium text-cyan-200">0{index + 1}</p>
              <h3 className="mt-4 text-lg font-semibold text-white">{principle}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative scroll-mt-24 border-t border-white/10 bg-[#040712] py-24">
      <div className="quant-grid absolute inset-0 opacity-25" />
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-4 inline-flex rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              Contact
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Contact MamakQuant
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              For partnerships, exchange relationships, data infrastructure discussions,
              or institutional conversations, send us a message.
            </p>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

function SiteFooter() {
  const footerLinks = [
    { label: "Stack", href: "#stack" },
    { label: "Research", href: "#research" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#02040a] py-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">MamakQuant</h2>
            <p className="mt-2 text-sm text-slate-400">Quant Infrastructure for Market Intelligence</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 max-w-4xl border-t border-white/10 pt-6 text-xs leading-6 text-slate-500">
          Information on this website is provided for general company introduction
          only. Nothing on this website constitutes financial advice, investment
          advice, solicitation, or an offer to manage funds or provide regulated
          financial services.
        </p>
      </Container>
    </footer>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  body,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-sm font-medium text-cyan-200">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-xl font-medium text-slate-200">{subtitle}</p> : null}
      <p className="mt-5 text-base leading-8 text-slate-300">{body}</p>
    </div>
  );
}

function CompactCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/60 p-5">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
    </article>
  );
}

function ProductCard({
  product,
}: {
  product: {
    name: string;
    subtitle: string;
    description: string;
    bullets: string[];
  };
}) {
  return (
    <article className="flex min-h-full flex-col rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-300/40 hover:bg-white/[0.06]">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 font-mono text-sm font-semibold text-cyan-100">
        MQ
      </div>
      <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
      <p className="mt-2 text-sm font-medium text-cyan-200">{product.subtitle}</p>
      <p className="mt-5 text-sm leading-7 text-slate-300">{product.description}</p>
      <ul className="mt-6 space-y-3">
        {product.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function RoadmapPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/65 p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item} className="rounded-lg border border-white/10 bg-white/[0.045] p-4 text-sm text-slate-200">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function Container({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
