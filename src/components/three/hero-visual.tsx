"use client";

import Image from "next/image";
import { useState } from "react";

const studies = [
  {
    name: "Integrated stack",
    image: "optical-loop",
    alt: "Continuous loop of ridged optical glass",
  },
  {
    name: "Data layers",
    image: "mqnode",
    alt: "Exploded stack of translucent data wafers",
  },
  {
    name: "Entity links",
    image: "mqchain",
    alt: "Two interlocking crystal links",
  },
];

export function HeroVisual() {
  const [index, setIndex] = useState(0);
  const study = studies[index];
  return (
    <figure className="optical-study" aria-label="Architecture studies">
      <div className="study-stage">
        <Image
          key={study.image}
          src={`/glass/${study.image}.webp`}
          alt={study.alt}
          fill
          sizes="(max-width: 740px) 95vw, 54vw"
          preload={index === 0}
        />
        <i className="register register-tl" aria-hidden="true" />
        <i className="register register-br" aria-hidden="true" />
      </div>
      <figcaption className="study-caption">
        <span className="study-index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")} / 03
        </span>
        <span aria-live="polite">{study.name}</span>
        <div className="study-switch">
          {studies.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show ${item.name} study`}
              aria-pressed={index === i}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
