"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { architectureFlow, modules } from "@/content/site";

const InfrastructureCanvas = dynamic(() => import("./infrastructure-canvas"), {
  ssr: false,
});

function canUseWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function HeroVisual() {
  const [mode, setMode] = useState<"fallback" | "webgl">("fallback");
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const motion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const compact = window.matchMedia("(max-width: 760px)").matches;
      setReducedMotion(motion);
      setMode(!compact && canUseWebGL() ? "webgl" : "fallback");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="hero-visual" data-renderer={mode}>
      <div className="hero-visual__grid" aria-hidden="true" />
      {mode === "webgl" ? (
        <InfrastructureCanvas reducedMotion={reducedMotion} />
      ) : (
        <div className="core-fallback" aria-hidden="true">
          <span className="core-fallback__ring core-fallback__ring--one" />
          <span className="core-fallback__ring core-fallback__ring--two" />
          <span className="core-fallback__ring core-fallback__ring--three" />
        </div>
      )}
      <div className="hero-core-logo">
        <Image
          src="/mamakquant-logo.png"
          alt="MAMAKQUANT official mark"
          width={692}
          height={692}
          priority
        />
      </div>
      <p className="hero-visual__label">Quant infrastructure core</p>
      <div className="hero-module-track" aria-label="Infrastructure module routes">
        {modules.slice(0, 5).map((module, index) => (
          <Link
            key={module.code}
            href={module.route}
            className={`hero-module hero-module--${index + 1}`}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {module.name}
          </Link>
        ))}
      </div>
      <div className="hero-flow" aria-label="System flow">
        {architectureFlow.map((stage) => (
          <span key={stage}>{stage}</span>
        ))}
      </div>
    </div>
  );
}
