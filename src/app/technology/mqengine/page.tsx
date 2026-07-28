import { ModulePage } from "@/components/sections/module-page";
import { StructuredData } from "@/components/ui/structured-data";
import { getModule } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const system = getModule("mqengine");

export const metadata = pageMetadata({
  title: "MQENGINE | Quantitative Research and Backtesting Infrastructure",
  description: system.description,
  path: system.route,
});

export default function MQEnginePage() {
  return (
    <>
      <StructuredData value={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Technology", path: "/technology" }, { name: "MQENGINE", path: system.route }])} />
      <ModulePage module={system} />
    </>
  );
}
