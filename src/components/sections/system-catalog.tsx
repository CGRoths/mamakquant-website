"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { modules, type ModuleCode } from "@/content/site";

const categories = ["All systems", "Data", "Research", "Operations"] as const;
type Category = (typeof categories)[number];
const details: Record<ModuleCode, { category: Category; label: string }> = {
  mqnode: { category: "Data", label: "Data infrastructure" },
  mqchain: { category: "Data", label: "On-chain intelligence" },
  mqengine: { category: "Research", label: "Research & validation" },
  mqbot: { category: "Operations", label: "Execution systems" },
  mqai: { category: "Operations", label: "AI control plane" },
  mqdash: { category: "Operations", label: "Platform · In development" },
};

export function SystemCatalog() {
  const [category, setCategory] = useState<Category>("All systems");
  const visible = modules.filter(
    (item) =>
      category === "All systems" || details[item.code].category === category,
  );
  return (
    <section
      className="catalog shell"
      id="infrastructure"
      aria-labelledby="systems-title"
    >
      <div className="catalog-heading">
        <div>
          <p className="eyebrow">System architecture</p>
          <h2 id="systems-title">
            The infrastructure stack<span>.</span>
          </h2>
        </div>
        <div className="filters" role="group" aria-label="Filter systems">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <span className="sr-only" role="status">
        {visible.length} systems shown
      </span>
      <div className="system-cards">
        {visible.map((module) => (
          <Link
            href={module.route}
            id={module.code}
            key={module.code}
            className={`system-card system-card--${module.code}`}
          >
            <div className="card-art">
              <Image
                src={`/glass/${module.code}.webp`}
                alt=""
                fill
                sizes="(max-width: 600px) 70vw, 300px"
              />
            </div>
            <div className="card-copy">
              <span className="card-category">
                {details[module.code].label}
              </span>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
