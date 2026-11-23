import Link from "next/link";

import { modules, navigation, socialLinks } from "@/content/site";

import { BrandMark } from "./brand-mark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid shell">
        <div>
          <BrandMark />
          <p className="site-footer__positioning">
            Vertically integrated quantitative infrastructure from source data
            to validated intelligence and controlled execution.
          </p>
        </div>
        <div>
          <p className="footer-label">Systems</p>
          <div className="footer-links">
            {modules.map((module) => (
              <Link key={module.code} href={module.route}>
                {module.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-label">Company</p>
          <div className="footer-links">
            {navigation
              .filter((item) => ["Company", "Contact"].includes(item.label))
              .map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            {socialLinks.map((item) => (
              <a key={item.href} href={item.href} rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="site-footer__bottom shell">
        <span>© {new Date().getFullYear()} MAMAKQUANT</span>
        <span>Research before deployment.</span>
      </div>
    </footer>
  );
}
