import { ModulePage } from "@/components/sections/module-page";
import { StructuredData } from "@/components/ui/structured-data";
import { getModule } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const system = getModule("mqnode");

export const metadata = pageMetadata({
  title: "MAMAKQUANTNODE | Node-Derived Blockchain Data Infrastructure",
  description: system.description,
  path: system.route,
});

export default function MQNodePage() {
  return (
    <>
      <StructuredData value={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Technology", path: "/technology" }, { name: system.name, path: system.route }])} />
      <ModulePage module={system} />
    </>
  );
}
