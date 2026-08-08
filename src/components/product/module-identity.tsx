import Image from "next/image";

import type { ModuleDefinition } from "@/content/site";

type ModuleIdentityProps = {
  module: Pick<ModuleDefinition, "brandAsset" | "code" | "geometry" | "name">;
  compact?: boolean;
};

export function ModuleIdentity({ module, compact = false }: ModuleIdentityProps) {
  return (
    <div
      className={`module-identity module-identity--${module.geometry} ${compact ? "module-identity--compact" : ""}`}
    >
      <div className="module-identity__geometry" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, index) => <i key={index} />)}
      </div>
      {module.brandAsset ? (
        <Image
          className="module-identity__asset"
          src={module.brandAsset}
          alt={`${module.name} official mark`}
          width={1254}
          height={1254}
          loading={compact ? "lazy" : "eager"}
          sizes={compact ? "160px" : "(max-width: 800px) 70vw, 420px"}
        />
      ) : (
        <div className="module-identity__typographic" aria-label={`${module.name} identity`}>
          <span>{module.code.toUpperCase()}</span>
          <strong>{module.name}</strong>
          <small>Official mark pending</small>
        </div>
      )}
    </div>
  );
}

export function BrainIdentity({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`module-identity module-identity--brain ${compact ? "module-identity--compact" : ""}`}>
      <div className="module-identity__geometry" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, index) => <i key={index} />)}
      </div>
      <Image
        className="module-identity__asset"
        src="/brand/modules/mamakquantbrain.png"
        alt="MAMAKQUANTBRAIN official mark — future roadmap"
        width={1254}
        height={1254}
        sizes={compact ? "160px" : "(max-width: 800px) 70vw, 420px"}
      />
      <span className="module-identity__future">Future</span>
    </div>
  );
}
