import { ModulePage } from "@/components/sections/module-page";
import { StructuredData } from "@/components/ui/structured-data";
import { getModule } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const system = getModule("mqdash");

export const metadata = pageMetadata({
  title: "MQDASH | Quant Data and Research Operating Interface",
  description: system.description,
  path: system.route,
});

export default function MQDashPage() {
  return (
    <>
      <StructuredData value={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Platform", path: "/platform/mqdash" }, { name: "MQDASH", path: system.route }])} />
      <ModulePage module={system} />
    </>
  );
}
