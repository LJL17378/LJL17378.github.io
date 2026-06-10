"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  ["/", "文章"],
  ["/archive", "归档"],
  ["/tags", "标签"],
  ["/about", "关于"],
] as const;

export function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link className="site-brand" href="/" aria-label="M∃RLIN 首页">
        M∃RLIN
      </Link>
      <nav className="site-nav" aria-label="主导航">
        {links.map(([href, label]) => (
          <Link
            className={pathname === href || (href !== "/" && pathname.startsWith(href)) ? "active" : ""}
            href={href}
            key={href}
          >
            {label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
