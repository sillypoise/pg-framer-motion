import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="center mlb-l">
      <article className="stack">
        <h3 className="text-3">Framer Motion Playground</h3>
        <ul className="stack">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/basics">Basic Motion</Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
