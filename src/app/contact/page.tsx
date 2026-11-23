import ContactForm from "@/app/_components/contact-form";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { StructuredData } from "@/components/ui/structured-data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact MAMAKQUANT about quantitative infrastructure, research collaboration, data and technology partnerships.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <StructuredData
        value={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section className="page-hero contact-page">
        <div className="shell">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          />
          <div className="contact-layout">
            <div>
              <p className="eyebrow">Institutional enquiries</p>
              <h1>
                Get in <em>touch.</em>
              </h1>
              <p className="page-hero__lead">
                Talk to us about infrastructure, data access, research
                collaboration or a technology partnership.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
