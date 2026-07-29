"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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
      const diagnostics = new URLSearchParams(window.location.search);
      const motion =
        diagnostics.get("motion") === "reduce" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const compact = window.matchMedia("(max-width: 760px)").matches;
      setReducedMotion(motion);
      setMode(
        diagnostics.get("webgl") !== "off" && !compact && canUseWebGL()
          ? "webgl"
          : "fallback",
      );
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="hero-visual" data-renderer={mode}>
      <div className="hero-visual__atmosphere" aria-hidden="true" />
      {mode === "webgl" ? (
        <InfrastructureCanvas reducedMotion={reducedMotion} />
      ) : (
        <div className="monolith-fallback" aria-hidden="true">
          <span className="monolith-fallback__frame" />
          <span className="monolith-arm monolith-arm--one" />
          <span className="monolith-arm monolith-arm--two" />
          <span className="monolith-arm monolith-arm--three" />
          <span className="monolith-arm monolith-arm--four" />
          <span className="monolith-fallback__core" />
          <span className="monolith-fallback__input" />
          <span className="monolith-fallback__output" />
          <span className="monolith-fallback__feedback" />
        </div>
      )}
      <div className="hero-visual__axis" aria-hidden="true">
        <span>UNSTRUCTURED INPUT</span>
        <i />
        <span>GOVERNED OUTPUT</span>
      </div>
      <div className="hero-visual__readout" aria-hidden="true">
        <span>INPUT / RAW EVENTS</span>
        <span>CORE / 05 SYSTEMS</span>
        <span>OUTPUT / CONTROLLED INTELLIGENCE</span>
      </div>
      <div className="hero-visual__signature">
        <span>MQ</span>
        <div>
          <strong>Infrastructure Monolith</strong>
          <small>Data ownership · research discipline · execution control</small>
        </div>
      </div>
    </div>
  );
}
