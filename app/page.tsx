import Link from "next/link";

const highlights = [
  "Instant-loading UI",
  "Responsive layout",
  "Deploy-ready configuration"
];

export default function Home() {
  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">Hello there 👋</p>
        <h1 className="title">Welcome to your autonomous Next.js starter.</h1>
        <p className="lede">
          This lightweight landing page is crafted to deploy seamlessly to
          Vercel, giving you a clean foundation for rapid experiments and
          prototypes.
        </p>
        <ul className="highlights">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="cta-row">
          <Link className="primary-cta" href="https://nextjs.org/docs">
            Explore Next.js Docs
          </Link>
          <Link
            className="secondary-cta"
            href="https://vercel.com/docs/deployments/overview"
          >
            Learn about Vercel Deployments
          </Link>
        </div>
      </section>
      <footer className="footer">
        <span>Generated autonomously • Ready for production deployment</span>
      </footer>
    </main>
  );
}
