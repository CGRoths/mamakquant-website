import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero page-hero--yellow">
      <div className="shell">
        <p className="eyebrow">404 · Route unavailable</p>
        <h1>Page not found.</h1>
        <p className="page-hero__lead">
          Return to the homepage or explore the MAMAKQUANT technology stack.
        </p>
        <div className="button-row">
          <Link className="button button--primary" href="/">
            Return home
          </Link>
          <Link className="button button--secondary" href="/technology">
            Explore technology
          </Link>
        </div>
      </div>
    </section>
  );
}
