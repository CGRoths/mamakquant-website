import type { Metadata } from "next";
import Link from "next/link";
import { SystemsMap } from "@/components/sections/systems-map";
import { HeroVisual } from "@/components/three/hero-visual";
import { SystemCatalog } from "@/components/sections/system-catalog";

export const metadata: Metadata = {
  title: { absolute: "MAMAKQUANT | Quantitative Infrastructure" },
  description:
    "Explore the MAMAKQUANT systems connecting source data, on-chain intelligence, quantitative research and controlled execution.",
  alternates: { canonical: "/" },
};

const disciplines = [
  { title: "Source provenance", href: "/technology/mqnode", icon: "layers" },
  {
    title: "Point-in-time research",
    href: "/technology/mqengine",
    icon: "wave",
  },
  { title: "Controlled execution", href: "/technology/mqbot", icon: "control" },
];

export default function HomePage() {
  return (
    <>
      <section className="landing">
        <div className="shell">
          <div className="landing-composition">
            <div className="landing-copy">
              <p className="eyebrow">Quantitative infrastructure</p>
              <h1>
                From data to
                <br />
                <em>intelligence.</em>
              </h1>
              <p className="landing-lead">
                MAMAKQUANT connects source data, quantitative research and
                controlled execution in one integrated stack.
              </p>
              <div className="button-row">
                <Link className="button button--primary" href="#infrastructure">
                  Explore the stack
                </Link>
                <Link className="button button--secondary" href="/company">
                  Our company
                </Link>
              </div>
            </div>
            <HeroVisual />
          </div>
          <div className="discipline-strip">
            {disciplines.map((item) => (
              <Link key={item.title} href={item.href}>
                <i className={`glyph glyph--${item.icon}`} aria-hidden="true">
                  <b />
                  <b />
                  <b />
                </i>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SystemCatalog />
      <SystemsMap />
      <section className="shell editorial" id="validation">
        <div>
          <p className="eyebrow">Research methodology</p>
          <h2>Follow the evidence.</h2>
        </div>
        <div>
          <p>
            For a metric like Bitcoin NVT, MAMAKQUANTNODE calculates the time
            series from source records. External benchmarks provide a reference
            for comparison. The research engine then tests how signals behave
            across parameters, trades and market conditions.
          </p>
          <Link className="text-link" href="/technology/mqengine">
            Explore research validation
          </Link>
        </div>
      </section>
      <section className="shell cta-wrap">
        <div className="cta-panel">
          <div>
            <p className="eyebrow">Institutional enquiries</p>
            <h2>Build with MAMAKQUANT.</h2>
          </div>
          <Link className="button button--primary" href="/contact">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
