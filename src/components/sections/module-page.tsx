import Link from "next/link";

import type { ModuleDefinition } from "@/content/site";
import { modules } from "@/content/site";

import { BrainIdentity, ModuleIdentity } from "../product/module-identity";
import { Breadcrumb } from "../ui/breadcrumb";

export function ModulePage({ module }: { module: ModuleDefinition }) {
  const related = modules.filter((item) => item.code !== module.code).slice(0, 3);

  return (
    <>
      <section className={`page-hero page-hero--${module.accent}`}>
        <div className="shell">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              {
                label: module.code === "mqdash" ? "Platform" : "Technology",
                href: module.code === "mqdash" ? "/platform/mqdash" : "/technology",
              },
              { label: module.name },
            ]}
          />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">{module.status} · {module.label}</p>
              <h1>{module.title}</h1>
              <p className="page-hero__lead">{module.summary}</p>
              <div className="button-row">
                <Link className="button button--primary" href="/contact">
                  Discuss {module.name}
                </Link>
                <Link className="button button--secondary" href="/technology">
                  View complete stack
                </Link>
              </div>
            </div>
            <ModuleIdentity module={module} />
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="shell split-layout">
          <div>
            <p className="eyebrow">System ownership</p>
            <h2>{module.ownership}</h2>
          </div>
          <p className="large-copy">{module.description}</p>
        </div>
      </section>

      <section className="content-section content-section--panel">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Operating sequence</p>
            <h2>Controlled transformation, explicit boundaries</h2>
          </div>
          <ol className="sequence-list">
            {module.sequence.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="content-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>What {module.name} is built to support</h2>
          </div>
          <div className="capability-grid">
            {module.capabilities.map((capability) => (
              <div key={capability}>
                <span aria-hidden="true">↳</span>
                <p>{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {module.code === "mqai" ? (
        <section className="boundary-callout">
          <div className="shell">
            <p className="eyebrow">Architecture boundary</p>
            <div>
              <h2>MAMAKQUANTAI is not MAMAKQUANTBRAIN.</h2>
            <p>
              MAMAKQUANTAI is the AI operator and infrastructure control plane.
              MAMAKQUANTBRAIN is a future roadmap layer intended for alpha
              discovery, strategy ranking and capital-allocation intelligence.
            </p>
            </div>
            <BrainIdentity compact />
          </div>
        </section>
      ) : null}

      <section className="content-section content-section--panel">
        <div className="shell">
          <p className="eyebrow">Continue through the architecture</p>
          <div className="related-grid">
            {related.map((item) => (
              <Link key={item.code} href={item.route}>
                <span>{item.label}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
