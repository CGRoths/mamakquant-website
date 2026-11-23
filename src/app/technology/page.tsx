import Image from "next/image";
import { SystemCatalog } from "@/components/sections/system-catalog";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { StructuredData } from "@/components/ui/structured-data";
import { architectureFlow } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technology Stack",
  description:
    "Explore the MAMAKQUANT systems for data, entity intelligence, research, execution and operations.",
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
      <section className="page-hero">
        <div className="shell">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Technology" }]}
          />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Technology</p>
              <h1>
                One stack.
                <br />
                <em>Distinct systems.</em>
              </h1>
              <p className="page-hero__lead">
                Follow market observations from raw records to tested
                strategies, risk checks and execution feedback.
              </p>
            </div>
            <div className="feature-art">
              <Image
                src="/glass/mqnode.webp"
                alt="Translucent layers of a glass processor"
                fill
                sizes="(max-width: 740px) 90vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>
      <SystemCatalog />
      <section className="shell content-section">
        <p className="eyebrow">Architecture flow</p>
        <h2>From source to execution.</h2>
        <ol className="sequence-list">
          {architectureFlow.map((stage, index) => (
            <li key={stage}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{stage}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
