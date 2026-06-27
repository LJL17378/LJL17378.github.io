import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} LJL17378</span>
      <span>
        Heo design inspired by{" "}
        <Link href="https://github.com/notionnext-org/NotionNext">NotionNext Heo</Link>
        {" · "}Powered by <Link href="https://once-ui.com/products/magic-portfolio">Once UI</Link>
      </span>
    </footer>
  );
}
