"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SearchOverlay, type SearchRecord } from "./SearchOverlay";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  ["/", "文章"],
  ["/archive", "归档"],
  ["/tags", "标签"],
  ["/about", "关于"],
] as const;

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>;
}

function MenuIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

export function Header({ posts }: { posts: SearchRecord[] }) {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <Link className="site-brand" href="/" aria-label="M∃RLIN 首页">
          <span>M∃RLIN</span><small>TECH BLOG</small>
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
        </nav>
        <div className="header-actions">
          <button className="header-icon-button search-trigger" type="button" onClick={() => setSearchOpen(true)} aria-label="搜索文章"><SearchIcon /></button>
          <ThemeToggle />
          <button className="header-icon-button mobile-menu-trigger" type="button" onClick={() => setMenuOpen(true)} aria-label="打开菜单"><MenuIcon /></button>
        </div>
      </header>

      <div className={`mobile-nav-backdrop${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)} />
      <aside className={`mobile-nav-drawer${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-nav-heading"><strong>导航</strong><button type="button" onClick={() => setMenuOpen(false)} aria-label="关闭菜单">×</button></div>
        {links.map(([href, label]) => <Link href={href} onClick={() => setMenuOpen(false)} key={href}>{label}<span>→</span></Link>)}
        <button className="mobile-search-button" type="button" onClick={() => { setMenuOpen(false); setSearchOpen(true); }}><SearchIcon />搜索文章</button>
      </aside>
      <SearchOverlay open={searchOpen} posts={posts} onClose={() => setSearchOpen(false)} />
    </>
  );
}
