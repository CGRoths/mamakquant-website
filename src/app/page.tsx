import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";

import { NarrativeDirector } from "@/components/experience/narrative-director";
import { EvidenceFrame } from "@/components/product/evidence-frame";
import { SystemsMap } from "@/components/sections/systems-map";
import { HeroVisual } from "@/components/three/hero-visual";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  architectureFlow,
  companyPrinciples,
  modules,
  SITE_URL,
} from "@/content/site";

export const metadata: Metadata = {
  title: "MAMAKQUANT | Vertically Integrated Quant Infrastructure",
  description:
    "MAMAKQUANT develops vertically integrated quantitative infrastructure across blockchain nodes, on-chain intelligence, research, backtesting and controlled automated execution.",
  alternates: { canonical: "/" },
  openGraph: { url: SITE_URL },
};

const principles = [
  {
    code: "01",
    title: "Data ownership",
    body: "Self-controlled ingestion, storage, labelling and metric pipelines reduce dependence on opaque final-form vendor feeds.",
  },
  {
    code: "02",
    title: "Research discipline",
    body: "Point-in-time contracts and repeatable validation make it possible to test, reject and refine factors systematically.",
  },
  {
    code: "03",
    title: "Execution control",
    body: "Validated strategies move toward monitored deployment through risk checks, execution logic and OMS feedback.",
  },
  {
    code: "04",
    title: "Architecture integrity",
    body: "Specialised systems retain explicit ownership boundaries while remaining connected through controlled interfaces.",
  },
];

export default function HomePage() {
  return (
    <NarrativeDirector>
      <section className="hero" data-scene="0">
        <div className="hero__telemetry" aria-hidden="true">
          <span>MAMAKQUANT / SYSTEM 001</span>
          <span>RAW SIGNAL IN</span>
          <span>CONTROLLED INTELLIGENCE OUT</span>
        </div>
        <div className="shell hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Vertically integrated quant infrastructure</p>
            <h1>
              <span>MAMAKQUANT</span>
              Raw complexity. Controlled intelligence.
            </h1>
            <p className="hero__statement">
              One evidence chain from raw source data to validated research and
              governed execution.
            </p>
            <p className="hero__body">
              MAMAKQUANT owns the infrastructure between observation and action:
              node-derived data, graph-native entity intelligence, research,
              backtesting and risk-controlled automation.
            </p>
            <div className="button-row">
              <Link className="button button--primary" href="/technology">
                Explore the infrastructure
              </Link>
              <Link className="button button--secondary" href="/contact">
                Institutional enquiries
              </Link>
            </div>
            <div className="hero__trust" aria-label="Operating principles">
              <span>01 / Source provenance retained</span>
              <span>02 / Point-in-time contracts enforced</span>
              <span>03 / Research rejected before deployment</span>
            </div>
          </div>
          <HeroVisual />
        </div>
        <div className="hero__index shell">
          <span>RAW MARKET COMPLEXITY</span>
          <span>SCROLL TO RESOLVE ↓</span>
        </div>
      </section>

      <section className="journey-section" id="infrastructure" data-scene="1">
        <div className="shell">
          <SectionHeading
            eyebrow="Resolution sequence"
            title="Raw reality enters fragmented. The stack resolves it."
            body="The same visual logic becomes more ordered at each layer: heterogeneous events converge into governed data, entity context, research evidence and controlled execution."
          />
        </div>
        <div className="transformation-field">
          <div className="transformation-field__chaos" aria-hidden="true">
            {Array.from({ length: 48 }).map((_, index) => (
              <i
                key={index}
                style={
                  {
                    "--particle": index,
                    "--particle-x": `${(index * 37) % 48}%`,
                    "--particle-y": `${(index * 61) % 92}%`,
                  } as CSSProperties
                }
              />
            ))}
          </div>
          <ol className="journey shell">
              {architectureFlow.map((stage, index) => (
                <li key={stage}>
                  <span className="journey__index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{stage}</h3>
                    <p>
                      {[
                        "Heterogeneous blockchain, transaction and market events enter with source context intact.",
                        "Raw inputs are normalised, reconciled and transformed into versioned point-in-time metrics.",
                        "Addresses become evidence-backed entities, clusters and directional market flows.",
                        "Metrics enter parameter testing, benchmark comparison and robustness gates.",
                        "Eligible strategies pass through position, risk, order-state and incident controls.",
                        "Fills, slippage and errors return as evidence for the next research cycle.",
                      ][index]}
                    </p>
                  </div>
                </li>
              ))}
          </ol>
        </div>
      </section>

      <section className="principles-section" data-scene="1">
        <div className="shell">
          <SectionHeading
            eyebrow="Operating position"
            title="Infrastructure ownership is a research advantage."
          />
          <div className="principles-list">
            {principles.map((principle) => (
              <article key={principle.code}>
                <span>{principle.code}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="system-section system-section--node" id="mqnode" data-scene="1">
        <div className="shell system-section__grid">
          <div>
            <p className="eyebrow">MQNODE · Data truth</p>
            <h2>Metrics Built From Source</h2>
            <p className="system-section__lead">
              MAMAKQUANTNODE converts raw blockchain and market inputs into
              auditable, point-in-time metrics through internally controlled
              calculation pipelines.
            </p>
            <p className="triplet">
              <span>Computation-derived.</span>
              <span>Internally controlled.</span>
              <span>Externally validated.</span>
            </p>
            <Link className="text-link" href="/technology/mqnode">
              Inspect MQNODE
            </Link>
          </div>
          <div className="pipeline-visual" aria-label="MQNODE transformation pipeline">
            {["INGEST", "NORMALISE", "METRIC", "RECONCILE", "SERVE"].map(
              (stage, index) => (
                <div key={stage}>
                  <span>MQNODE.{stage}</span>
                  <small>{index < 4 ? "transformation verified" : "contract ready"}</small>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="validation-section" id="validation" data-scene="1">
        <div className="shell">
          <SectionHeading
            eyebrow="Research validation evidence"
            title="Independent Metric Generation"
            body="MAMAKQUANTNODE derives NVT through internally controlled source-data and calculation pipelines. External platforms are used as validation references, not as upstream sources for the derived metric."
          />
          <div className="evidence-grid">
            <EvidenceFrame
              label="MAMAKQUANTNODE OUTPUT · INDEPENDENTLY DERIVED"
              title="Bitcoin NVT — internal output"
              description="Reserved for the supplied MAMAKQUANTNODE raw NVT time-series screenshot."
              variant="chart"
            />
            <EvidenceFrame
              label="EXTERNAL BENCHMARK · VALIDATION REFERENCE"
              title="External visual benchmark"
              description="Reserved for an authorised external benchmark reference with source attribution preserved."
              variant="chart"
            />
          </div>
          <div className="methodology-panel">
            <dl>
              <div><dt>Metric family</dt><dd>Bitcoin NVT</dd></div>
              <div><dt>Output type</dt><dd>Raw NVT time series</dd></div>
              <div><dt>Derivation</dt><dd>Internally controlled</dd></div>
              <div><dt>Validation</dt><dd>External visual benchmark comparison</dd></div>
              <div><dt>Status</dt><dd>Research validation evidence</dd></div>
            </dl>
            <p>
              Visual comparison only. This section does not claim statistical
              equivalence, identical methodology or identical source coverage.
            </p>
          </div>
        </div>
      </section>

      <section className="system-section system-section--chain" id="mqchain" data-scene="2">
        <div className="shell system-section__grid">
          <div>
            <p className="eyebrow">MQCHAIN · Entity truth</p>
            <h2>Transactions Show Movement. Entities Reveal Meaning.</h2>
            <p className="system-section__lead">
              A graph-native intelligence layer for evidence-backed entities,
              classifications, reserve paths and point-in-time market flows.
            </p>
            <p className="simulation-label">Visual demonstration — not live chain data</p>
            <Link className="text-link" href="/technology/mqchain">
              Inspect MQCHAIN
            </Link>
          </div>
          <div className="entity-graph" role="img" aria-label="Synthetic MQCHAIN entity graph demonstration">
            <span className="entity-node entity-node--exchange">EXCHANGE</span>
            <span className="entity-node entity-node--bridge">BRIDGE</span>
            <span className="entity-node entity-node--protocol">PROTOCOL</span>
            <span className="entity-node entity-node--custody">CUSTODY</span>
            <span className="entity-node entity-node--unknown">UNKNOWN</span>
            <i className="graph-line graph-line--one" />
            <i className="graph-line graph-line--two" />
            <i className="graph-line graph-line--three" />
            <i className="graph-line graph-line--four" />
          </div>
        </div>
      </section>

      <section className="engine-section" id="mqengine" data-scene="3">
        <div className="shell">
          <SectionHeading
            eyebrow="MQENGINE · Research truth"
            title="Research Is a Rejection Engine"
            body="A profitable backtest is an observation. A validated strategy is an engineering output."
          />
          <div className="engine-evidence">
            <EvidenceFrame
              label="ACTUAL MAMAKQUANT RESEARCH INTERFACE"
              title="Parameter-universe inspection"
              description="Reserved for the supplied MQENGINE parameter-universe product screenshot."
              variant="heatmap"
            />
            <EvidenceFrame
              label="ACTUAL MAMAKQUANT RESEARCH INTERFACE"
              title="Selected-strategy inspection"
              description="Reserved for the supplied MQENGINE strategy-inspection product screenshot."
              variant="interface"
            />
          </div>
          <div className="research-gates">
            {["Parameter universe", "Filtering", "Robustness", "Trade inspection", "Deployment eligibility"].map(
              (gate, index) => (
                <div key={gate}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{gate}</p>
                </div>
              ),
            )}
          </div>
          <Link className="text-link" href="/technology/mqengine">
            Inspect MQENGINE
          </Link>
        </div>
      </section>

      <section className="execution-section" id="mqbot" data-scene="4">
        <div className="shell">
          <SectionHeading
            eyebrow="MQBOT · Execution control"
            title="Validated Research. Controlled Execution."
            body="MQBOT translates deployment-eligible strategies into monitored execution workflows with exchange connectivity, position controls, logging and OMS feedback."
          />
          <div className="execution-track">
            {["Strategy packet", "Pre-trade checks", "Risk gate", "Order route", "OMS feedback"].map(
              (item, index) => (
                <div key={item}>
                  <span>{index < 3 ? "GATE" : "STATE"}</span>
                  <strong>{item}</strong>
                  <small>{index === 2 ? "human emergency control retained" : "system visualisation"}</small>
                </div>
              ),
            )}
          </div>
          <Link className="text-link" href="/technology/mqbot">
            Inspect MQBOT
          </Link>
        </div>
      </section>

      <section className="ai-section" id="mqai" data-scene="5">
        <div className="shell ai-section__grid">
          <div className="ai-orbit" aria-hidden="true">
            <span>MQAI</span>
            <i />
            <i />
            <i />
          </div>
          <div>
            <p className="eyebrow">MQAI · Control plane</p>
            <h2>The Control Plane for the MAMAKQUANT Ecosystem</h2>
            <p className="system-section__lead">
              MQAI coordinates repositories, engineering jobs, evaluations,
              documentation and architecture gates across specialised systems.
            </p>
            <div className="boundary-note">
              <strong>MQAI is not MAMAKQUANTBRAIN.</strong>
              <p>
                MAMAKQUANTBRAIN is a future roadmap layer intended for alpha
                discovery, strategy ranking and capital allocation.
              </p>
            </div>
            <Link className="text-link" href="/technology/mqai">
              Inspect MQAI
            </Link>
          </div>
        </div>
      </section>

      <section className="dash-section" id="mqdash" data-scene="5">
        <div className="shell dash-section__grid">
          <div>
            <p className="eyebrow">MQDASH · In development</p>
            <h2>The Human Operating Surface</h2>
            <p>
              The corporate website explains the infrastructure. MQDASH is
              designed to operate and inspect it through future role-based data,
              research and system interfaces.
            </p>
            <Link className="button button--secondary" href="/platform/mqdash">
              Platform preview
            </Link>
          </div>
          <div className="dash-plane" aria-label="MQDASH conceptual interface plane">
            <span>PRIVATE ACCESS</span>
            <div />
            <div />
            <div />
          </div>
        </div>
      </section>

      <section className="map-section" id="ecosystem" data-scene="5">
        <div className="shell">
          <SectionHeading
            eyebrow="System architecture"
            title="Inspect the vertically integrated stack"
            body="Keyboard focus, pointer hover and touch all expose the same ownership and capability summary."
          />
          <SystemsMap />
        </div>
      </section>

      <section className="roadmap-section" data-scene="5">
        <div className="shell">
          <SectionHeading
            eyebrow="Company and roadmap"
            title="Build the evidence chain before expanding the system."
          />
          <div className="roadmap-grid">
            <div>
              <span>Current ecosystem</span>
              {modules
                .filter((module) => module.status === "Current system")
                .map((module) => <p key={module.code}>{module.name}</p>)}
            </div>
            <div>
              <span>In development</span>
              {["MQDASH institutional interface", "MAMAKQUANT API", "Expanded entity intelligence", "Strategy registry"].map(
                (item) => <p key={item}>{item}</p>,
              )}
            </div>
            <div>
              <span>Future roadmap</span>
              {["MAMAKQUANTBRAIN", "Automated factor discovery", "Strategy ranking", "Capital allocation intelligence"].map(
                (item) => <p key={item}>{item}</p>,
              )}
            </div>
          </div>
          <div className="principle-strip">
            {companyPrinciples.slice(0, 4).map((principle) => (
              <span key={principle}>{principle}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta" data-scene="5">
        <div className="shell contact-cta__grid">
          <div>
            <p className="eyebrow">Institutional enquiries</p>
            <h2>Discuss infrastructure, research or technology collaboration.</h2>
          </div>
          <Link className="button button--primary" href="/contact">
            Start a conversation
          </Link>
        </div>
      </section>
    </NarrativeDirector>
  );
}
