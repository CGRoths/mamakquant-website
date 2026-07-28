import Link from "next/link";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { StructuredData } from "@/components/ui/structured-data";
import { architectureFlow, modules } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technology Stack",
  description:
    "Explore the MAMAKQUANT technology stack across source data, entity intelligence, quantitative research, controlled execution and AI-assisted operations.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <StructuredData
        value={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Technology", path: "/technology" },
        ])}
      />
      <section className="page-hero page-hero--cyan">
        <div className="shell">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Technology" }]} />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Complete technology stack</p>
              <h1>From Raw Reality to Executable Intelligence</h1>
              <p className="page-hero__lead">
                MAMAKQUANT connects source-controlled data, evidence-backed
                entity intelligence, research validation and monitored execution
                without dissolving the boundaries between them.
              </p>
              <Link className="button button--primary" href="/contact">
                Discuss the infrastructure
              </Link>
            </div>
            <div className="module-orbit" aria-hidden="true">
              <span className="module-orbit__code">MQ / STACK</span>
              <span className="module-orbit__ring module-orbit__ring--one" />
              <span className="module-orbit__ring module-orbit__ring--two" />
            </div>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Architecture flow</p>
            <h2>Each layer owns a specific kind of truth.</h2>
          </div>
          <ol className="sequence-list">
            {architectureFlow.map((stage, index) => (
              <li key={stage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{stage}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="content-section content-section--panel">
        <div className="shell">
          <p className="eyebrow">Specialised systems</p>
          <div className="related-grid">
            {modules.map((module) => (
              <Link key={module.code} href={module.route}>
                <span>{module.status} · {module.label}</span>
                <h3>{module.name}</h3>
                <p>{module.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
