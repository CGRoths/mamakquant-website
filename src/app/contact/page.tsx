import ContactForm from "@/app/_components/contact-form";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { StructuredData } from "@/components/ui/structured-data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact MAMAKQUANT about quantitative infrastructure, research collaboration, institutional enquiries, data and API work, or technology partnerships.",
  path: "/contact",
});

const enquiryTypes = [
  "Infrastructure",
  "Research collaboration",
  "Institutional enquiries",
  "Data and API",
  "Technology partnership",
  "General enquiry",
];

export default function ContactPage() {
  return (
    <>
      <StructuredData
        value={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section className="page-hero page-hero--yellow">
        <div className="shell">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Institutional enquiries</p>
              <h1>Start with the infrastructure question.</h1>
              <p className="page-hero__lead">
                Use the secure enquiry form for research, data, infrastructure,
                institutional or technology-partnership discussions.
              </p>
            </div>
            <div className="module-orbit" aria-hidden="true">
              <span className="module-orbit__code">CONTACT / SECURE</span>
              <span className="module-orbit__ring module-orbit__ring--one" />
              <span className="module-orbit__ring module-orbit__ring--two" />
            </div>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="shell split-layout">
          <div>
            <p className="eyebrow">Enquiry categories</p>
            <h2>Clear context produces a better first conversation.</h2>
            <div className="sequence-list">
              {enquiryTypes.map((type, index) => (
                <div key={type} style={{ display: "grid", gridTemplateColumns: "54px 1fr", borderTop: "1px solid var(--line)", paddingBlock: "1rem" }}>
                  <span style={{ color: "var(--yellow)", fontFamily: "var(--font-geist-mono)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{type}</span>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
