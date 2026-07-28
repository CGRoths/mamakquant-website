export const SITE_URL = "https://mamakquant.com";

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/mamakquant/" },
  { label: "X", href: "https://x.com/mamakquant" },
  { label: "YouTube", href: "https://www.youtube.com/@mamakquant" },
] as const;

export const navigation = [
  { label: "Technology", href: "/technology" },
  { label: "MQNODE", href: "/technology/mqnode" },
  { label: "MQCHAIN", href: "/technology/mqchain" },
  { label: "MQENGINE", href: "/technology/mqengine" },
  { label: "MQBOT", href: "/technology/mqbot" },
  { label: "MQAI", href: "/technology/mqai" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
] as const;

export type ModuleCode =
  | "mqnode"
  | "mqchain"
  | "mqengine"
  | "mqbot"
  | "mqai"
  | "mqdash";

export type ModuleDefinition = {
  code: ModuleCode;
  name: string;
  label: string;
  route: string;
  status: "Current system" | "In development";
  ownership: string;
  title: string;
  description: string;
  summary: string;
  capabilities: string[];
  sequence: string[];
  accent: "cyan" | "blue" | "yellow" | "violet";
};

export const modules: ModuleDefinition[] = [
  {
    code: "mqnode",
    name: "MQNODE",
    label: "Data truth",
    route: "/technology/mqnode",
    status: "Current system",
    ownership: "Owns source-data and metric truth",
    title: "Metrics Built From Source",
    description:
      "Node-derived blockchain data infrastructure for auditable, point-in-time metric pipelines.",
    summary:
      "MAMAKQUANTNODE converts raw blockchain and market inputs into structured records and versioned metrics through internally controlled calculation pipelines.",
    capabilities: [
      "Node-native blockchain ingestion",
      "Exchange and market feeds",
      "Deterministic transformation logic",
      "Point-in-time correctness",
      "Historical recomputation",
      "Data reconciliation",
      "Time-series metric storage",
      "API-ready contracts",
    ],
    sequence: [
      "Ingest raw blocks, transactions and market events",
      "Normalise heterogeneous source records",
      "Calculate versioned, point-in-time metrics",
      "Reconcile and recompute historical windows",
      "Serve governed data contracts",
    ],
    accent: "cyan",
  },
  {
    code: "mqchain",
    name: "MQCHAIN",
    label: "Entity truth",
    route: "/technology/mqchain",
    status: "Current system",
    ownership: "Owns entity, label and flow truth",
    title: "Transactions Show Movement. Entities Reveal Meaning.",
    description:
      "Entity, wallet and on-chain flow intelligence with confidence-scored evidence.",
    summary:
      "MQCHAIN resolves addresses and transaction paths into point-in-time entity intelligence, classifications and evidence-backed market flows.",
    capabilities: [
      "Wallet clustering",
      "Entity and label registry",
      "Behavioural classification",
      "Exchange reserve monitoring",
      "Inflow and outflow mapping",
      "CEX, DEX and custody flow paths",
      "Bridge and protocol intelligence",
      "Confidence-scored evidence",
    ],
    sequence: [
      "Resolve chain-native addresses",
      "Attach point-in-time labels and evidence",
      "Form entity and behaviour clusters",
      "Map directional flow relationships",
      "Publish governed intelligence contracts",
    ],
    accent: "blue",
  },
  {
    code: "mqengine",
    name: "MQENGINE",
    label: "Research truth",
    route: "/technology/mqengine",
    status: "Current system",
    ownership: "Owns research validation",
    title: "Research Is a Rejection Engine",
    description:
      "Quantitative research, backtesting and robustness infrastructure.",
    summary:
      "MQENGINE evaluates strategy families across parameter surfaces, trade-level outcomes, benchmark behaviour and robustness controls before deployment eligibility.",
    capabilities: [
      "Factor research",
      "Parameter-universe testing",
      "Backtesting",
      "Benchmark comparison",
      "Walk-forward validation",
      "Trade-level analytics",
      "Drawdown and risk diagnostics",
      "Strategy filtering",
    ],
    sequence: [
      "Generate a parameter universe",
      "Evaluate strategy candidates",
      "Reject unstable regions",
      "Inspect trades, benchmarks and drawdowns",
      "Determine deployment eligibility",
    ],
    accent: "yellow",
  },
  {
    code: "mqbot",
    name: "MQBOT",
    label: "Execution control",
    route: "/technology/mqbot",
    status: "Current system",
    ownership: "Owns controlled execution",
    title: "Validated Research. Controlled Execution.",
    description:
      "Automated execution and risk infrastructure with OMS feedback.",
    summary:
      "MQBOT translates deployment-eligible strategies into monitored execution workflows with exchange connectivity, position controls, logging and feedback.",
    capabilities: [
      "Strategy execution modules",
      "Exchange connectors",
      "Position and exposure controls",
      "Pre-trade validation",
      "Order-state tracking",
      "Fill and slippage telemetry",
      "Incident logging",
      "OMS integration",
    ],
    sequence: [
      "Receive a validated strategy packet",
      "Evaluate pre-trade and risk gates",
      "Route eligible orders",
      "Monitor position and execution state",
      "Return fills, slippage and errors to research",
    ],
    accent: "yellow",
  },
  {
    code: "mqai",
    name: "MQAI",
    label: "Control plane",
    route: "/technology/mqai",
    status: "Current system",
    ownership: "Coordinates engineering systems and human gates",
    title: "The Control Plane for the MAMAKQUANT Ecosystem",
    description:
      "AI-assisted operations and architecture control across specialised systems.",
    summary:
      "MQAI coordinates repositories, engineering jobs, evaluations, documentation and architecture gates while retaining human approval checkpoints.",
    capabilities: [
      "Repository control",
      "Job orchestration",
      "Code review",
      "Test and evaluation gates",
      "Documentation",
      "Incident diagnosis",
      "Architecture protection",
      "Human-in-the-loop approvals",
    ],
    sequence: [
      "Observe repository and system state",
      "Orchestrate bounded engineering jobs",
      "Run tests and evaluation gates",
      "Document evidence and incidents",
      "Stop at human approval boundaries",
    ],
    accent: "violet",
  },
  {
    code: "mqdash",
    name: "MQDASH",
    label: "Human interface",
    route: "/platform/mqdash",
    status: "In development",
    ownership: "Provides the human operating surface",
    title: "The Human Operating Surface",
    description:
      "A private data, research and system operating interface in development.",
    summary:
      "MQDASH is designed to inspect MAMAKQUANT data, research and operating systems through future role-based interfaces.",
    capabilities: [
      "Data dashboards",
      "Research diagnostics",
      "Strategy inspection",
      "Portfolio operating interfaces",
      "System-state visibility",
      "Role-based access direction",
    ],
    sequence: [
      "Select an operating context",
      "Inspect governed data and evidence",
      "Review research diagnostics",
      "Observe execution and system state",
      "Escalate decisions through approval paths",
    ],
    accent: "blue",
  },
];

export const architectureFlow = [
  "Raw sources",
  "MQNODE",
  "MQCHAIN",
  "MQENGINE",
  "MQBOT",
  "OMS / Execution",
] as const;

export const companyPrinciples = [
  "Point-in-time correctness",
  "Data quality before signal generation",
  "Robustness before deployment",
  "Infrastructure ownership as an edge",
  "Explicit architectural boundaries",
  "Auditable transformations",
  "Controlled execution",
] as const;

export function getModule(code: ModuleCode) {
  const system = modules.find((item) => item.code === code);
  if (!system) throw new Error(`Unknown module: ${code}`);
  return system;
}
