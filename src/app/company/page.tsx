import Image from "next/image";
import Link from "next/link";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { StructuredData } from "@/components/ui/structured-data";
import { companyPrinciples, modules } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Company",
  description:
    "MAMAKQUANT builds auditable quantitative infrastructure around data provenance, research discipline, explicit architecture boundaries and controlled execution.",
  path: "/company",
});

export default function CompanyPage() {
  return (
    <>
      <StructuredData
        value={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
        ])}
      />
      <section className="page-hero page-hero--yellow">
        <div className="shell">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Company" }]} />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Company</p>
              <h1>Research starts with <em>the source.</em></h1>
              <p className="page-hero__lead">
                MAMAKQUANT builds the infrastructure behind quantitative research, from the first source record to the controls that govern execution.
              </p>
              <Link className="button button--primary" href="/contact">
                Institutional enquiries
              </Link>
            </div>
            <div className="feature-art"><Image src="/glass/optical-loop.webp" alt="" fill sizes="(max-width: 740px) 90vw, 440px" /></div>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Operating principles</p>
            <h2>Engineering discipline across the full stack.</h2>
          </div>
          <div className="capability-grid">
            {companyPrinciples.map((principle) => (
              <div key={principle}>
                <span aria-hidden="true">↳</span>
                <p>{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="content-section content-section--panel">
        <div className="shell">
          <p className="eyebrow">Ecosystem status</p>
          <div className="roadmap-grid">
            <div>
              <span>Current</span>
              {modules
                .filter((module) => module.status === "Current system")
                .map((module) => <p key={module.code}>{module.name}</p>)}
            </div>
            <div>
              <span>In development</span>
              <p>MAMAKQUANTDASH institutional interface</p>
              <p>MAMAKQUANT API</p>
              <p>Multi-chain intelligence</p>
              <p>Expanded entity intelligence</p>
              <p>Strategy registry</p>
            </div>
            <div>
              <span>Future roadmap</span>
              <p>MAMAKQUANTBRAIN</p>
              <p>Automated factor discovery</p>
              <p>Strategy ranking</p>
              <p>Capital allocation intelligence</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
