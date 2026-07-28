import { ModulePage } from "@/components/sections/module-page";
import { StructuredData } from "@/components/ui/structured-data";
import { getModule } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const system = getModule("mqbot");

export const metadata = pageMetadata({
  title: "MQBOT | Automated Execution and Risk Infrastructure",
  description: system.description,
  path: system.route,
});

export default function MQBotPage() {
  return (
    <>
      <StructuredData value={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Technology", path: "/technology" }, { name: "MQBOT", path: system.route }])} />
      <ModulePage module={system} />
    </>
  );
}
