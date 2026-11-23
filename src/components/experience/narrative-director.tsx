"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

const sceneLabels = [
  "Raw reality",
  "Controlled data",
  "Entity intelligence",
  "Validated research",
  "Controlled execution",
  "Governed system",
] as const;

export function NarrativeDirector({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const element = root.current;
    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const scenes = Array.from(
      element.querySelectorAll<HTMLElement>("[data-scene]"),
    );

    const updateProgress = () => {
      const pageRange =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = pageRange > 0 ? window.scrollY / pageRange : 0;
      element.style.setProperty(
        "--narrative-progress",
        String(Math.min(1, Math.max(0, progress))),
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.scene);
        if (Number.isFinite(index)) setActiveScene(index);
        visible.target.setAttribute("data-scene-visible", "true");
      },
      { rootMargin: "-28% 0px -42%", threshold: [0.05, 0.25, 0.6] },
    );

    scenes.forEach((scene) => observer.observe(scene));
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    if (!reduceMotion) {
      requestAnimationFrame(() => element.setAttribute("data-motion-ready", "true"));
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div
      className="narrative"
      data-active-scene={activeScene}
      ref={root}
    >
      <div className="narrative-rail" aria-hidden="true">
        <span className="narrative-rail__track">
          <i />
        </span>
        <span className="narrative-rail__index">
          {String(activeScene + 1).padStart(2, "0")}
        </span>
        <span className="narrative-rail__label">
          {sceneLabels[activeScene] ?? sceneLabels[0]}
        </span>
      </div>
      {children}
    </div>
  );
}
