"use client";

import Link from "next/link";
import { useState } from "react";
import { modules } from "@/content/site";

const stages = [
  "Source data",
  "Entity intelligence",
  "Research validation",
  "Execution",
];
const pipeline = modules.slice(0, 4);

export function SystemsMap() {
  const [index, setIndex] = useState(0);
  const selected = pipeline[index];
  return (
    <section className="shell flow-section" id="ecosystem">
      <p className="eyebrow">Architecture flow</p>
      <h2>Trace the data path.</h2>
      <div className="flow-box">
        <div
          className="flow-stages"
          role="group"
          aria-label="Choose an architecture stage"
        >
          {stages.map((stage, i) => (
            <button
              type="button"
              key={stage}
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {stage}
            </button>
          ))}
        </div>
        <div className="flow-detail" aria-live="polite">
          <div>
            <p className="eyebrow">{selected.label}</p>
            <h3>{selected.name}</h3>
            <p>{selected.summary}</p>
            <Link className="text-link" href={selected.route}>
              Explore this system
            </Link>
          </div>
          <ul>
            {selected.capabilities.slice(0, 4).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
