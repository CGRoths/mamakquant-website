"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigation } from "@/content/site";

import { BrandMark } from "./brand-mark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <BrandMark compact />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "is-active" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-header__actions">
          <Link className="text-link header-enquiry" href="/contact">
            Institutional enquiries
          </Link>
          <Link className="button button--primary header-cta" href="/technology">
            Explore infrastructure
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true">{open ? "×" : "Menu"}</span>
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "is-active" : undefined}
          >
            {item.label}
          </Link>
        ))}
        <Link
          className="mobile-nav__dash"
          href="/platform/mqdash"
          onClick={() => setOpen(false)}
        >
          MQDASH <span>Platform preview</span>
        </Link>
      </nav>
    </header>
  );
}
