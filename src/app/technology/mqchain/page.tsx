import { ModulePage } from "@/components/sections/module-page";
import { StructuredData } from "@/components/ui/structured-data";
import { getModule } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const system = getModule("mqchain");

export const metadata = pageMetadata({
  title: "MAMAKQUANTCHAIN | Entity and On-Chain Flow Intelligence",
  description: system.description,
  path: system.route,
});

export default function MQChainPage() {
  return (
    <>
      <StructuredData value={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Technology", path: "/technology" }, { name: system.name, path: system.route }])} />
      <ModulePage module={system} />
    </>
  );
}
