"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/site";
import { BrandMark } from "./brand-mark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function dismiss(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    window.addEventListener("keydown", dismiss);
    return () => window.removeEventListener("keydown", dismiss);
  }, [open]);

  function navLinks() {
    return navigation
      .filter((item) => item.href !== "/contact")
      .map((item) => {
        const selected =
          pathname === item.href ||
          (item.href === "/technology" && pathname.startsWith("/technology/"));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={selected ? "is-active" : undefined}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        );
      });
  }
  return (
    <header className="site-header">
      <div className="shell">
        <div className="nav-glass">
          <div onClick={() => setOpen(false)}>
            <BrandMark compact />
          </div>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks()}
          </nav>
          <div className="nav-actions">
            <Link
              className="contact-link"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Link>
            <button
              type="button"
              ref={toggle}
              className="menu-button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(!open)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {open && (
          <nav
            className="mobile-nav"
            id="mobile-nav"
            aria-label="Mobile navigation"
          >
            {navLinks()}
          </nav>
        )}
      </div>
    </header>
  );
}
