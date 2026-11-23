import Image from "next/image";
import type { ModuleDefinition } from "@/content/site";

export function ModuleIdentity({ module }: { module: ModuleDefinition }) {
  return (
    <figure className="module-identity">
      <Image
        className="module-sculpture"
        src={`/glass/${module.code}.webp`}
        alt=""
        width={512}
        height={512}
        sizes="(max-width: 740px) 90vw, 400px"
      />
      <figcaption>
        {module.brandAsset && (
          <Image src={module.brandAsset} alt="" width={42} height={42} />
        )}
        <span>{module.name}</span>
      </figcaption>
    </figure>
  );
}

export function BrainIdentity() {
  return (
    <Image
      className="brain-mark"
      src="/brand/modules/mamakquantbrain.png"
      alt="MAMAKQUANTBRAIN official mark"
      width={104}
      height={104}
    />
  );
}
