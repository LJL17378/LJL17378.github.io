import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} LJL17378</span>
      <span>
        Built with{" "}
        <Link href="https://once-ui.com/products/magic-portfolio">Once UI / Magic Portfolio</Link>
      </span>
    </footer>
  );
}
