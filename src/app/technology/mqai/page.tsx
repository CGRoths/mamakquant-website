import { ModulePage } from "@/components/sections/module-page";
import { StructuredData } from "@/components/ui/structured-data";
import { getModule } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const system = getModule("mqai");

export const metadata = pageMetadata({
  title: "MAMAKQUANTAI | AI Operations and Infrastructure Control Plane",
  description: system.description,
  path: system.route,
});

export default function MQAIPage() {
  return (
    <>
      <StructuredData value={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Technology", path: "/technology" }, { name: system.name, path: system.route }])} />
      <ModulePage module={system} />
    </>
  );
}
