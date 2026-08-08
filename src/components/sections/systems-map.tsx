"use client";

import Link from "next/link";
import { useState } from "react";

import { modules } from "@/content/site";

export function SystemsMap() {
  const [active, setActive] = useState("mqnode");
  const selected = modules.find((module) => module.code === active) ?? modules[0];

  return (
    <div className="systems-map">
      <div className="systems-map__control">
        <span>MAMAKQUANTAI CONTROL PLANE</span>
        <small>Human approval checkpoints retained</small>
      </div>
      <div className="systems-map__body">
        <div className="systems-map__path" aria-label="Interactive MAMAKQUANT system map">
          <div className="systems-map__source">
            <span>RAW SOURCES</span>
            <small>Blocks · transactions · markets</small>
          </div>
          {modules.slice(0, 4).map((module) => (
            <button
              key={module.code}
              type="button"
              className={active === module.code ? "is-active" : ""}
              onMouseEnter={() => setActive(module.code)}
              onFocus={() => setActive(module.code)}
              onClick={() => setActive(module.code)}
              aria-pressed={active === module.code}
            >
              <span>{module.name}</span>
              <small>{module.label}</small>
            </button>
          ))}
          <div className="systems-map__execution">
            <span>OMS / EXECUTION</span>
            <small>Feedback returns to research</small>
          </div>
        </div>
        <aside className="systems-map__summary" aria-live="polite">
          <p className="telemetry">STATUS · INSPECTING</p>
          <h3>{selected.name}</h3>
          <p>{selected.ownership}</p>
          <ul>
            {selected.capabilities.slice(0, 4).map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
          <Link href={selected.route}>Inspect {selected.name}</Link>
        </aside>
      </div>
      <div className="systems-map__dash">
        <span>MAMAKQUANTDASH</span>
        <small>Human operating surface · In development</small>
      </div>
      <div className="systems-map__brain">
        <span>MAMAKQUANTBRAIN</span>
        <small>Future roadmap · distinct from MAMAKQUANTAI</small>
      </div>
    </div>
  );
}
