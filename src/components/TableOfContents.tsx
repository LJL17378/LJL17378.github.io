"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import type { TocItem } from "@/content/posts";

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => Boolean(heading));

    if (!headings.length) return;

    let frame = 0;
    const updateActiveHeading = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const readingLine = 140;
        const passed = headings.filter(
          (heading) => heading.getBoundingClientRect().top <= readingLine,
        );
        setActiveId((passed.at(-1) ?? headings[0]).id);
      });
    };

    const observer = new IntersectionObserver(updateActiveHeading, {
      rootMargin: "-96px 0px -68% 0px",
      threshold: [0, 1],
    });

    headings.forEach((heading) => observer.observe(heading));
    window.addEventListener("scroll", updateActiveHeading, { passive: true });
    updateActiveHeading();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveHeading);
    };
  }, [items]);

  useEffect(() => {
    const nav = navRef.current;
    const activeLink =
      nav?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!nav || !activeLink) return;

    const navRect = nav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    const isVisible =
      linkRect.top >= navRect.top + 24 && linkRect.bottom <= navRect.bottom - 24;

    if (!isVisible) {
      nav.scrollTo({
        top:
          nav.scrollTop +
          linkRect.top -
          navRect.top -
          nav.clientHeight / 2 +
          linkRect.height / 2,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  const handleTocClick = (
    event: MouseEvent<HTMLAnchorElement>,
    item: TocItem,
  ) => {
    event.preventDefault();
    document.getElementById(item.id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMobileOpen(false);
  };

  const renderItems = (mobile = false) => items.map((item) => (
    <a
      className={`depth-${item.depth}${activeId === item.id ? " active" : ""}`}
      href={`#${item.id}`}
      aria-current={activeId === item.id ? "location" : undefined}
      onClick={(event) => handleTocClick(event, item)}
      key={`${mobile ? "mobile-" : ""}${item.id}-${item.depth}`}
    >
      {item.text}
    </a>
  ));

  return (
    <>
      <aside className="toc-shell">
        <div className="toc-heading">
          <strong>本文目录</strong>
          <span>{items.length}</span>
        </div>
        <nav className="toc" ref={navRef} aria-label="本文目录">
          {renderItems()}
        </nav>
      </aside>

      <button
        className="mobile-toc-trigger"
        type="button"
        aria-expanded={mobileOpen}
        aria-controls="mobile-toc-drawer"
        onClick={() => setMobileOpen(true)}
      >
        <span>目录</span><small>{items.length}</small>
      </button>
      <div className={`mobile-toc-backdrop${mobileOpen ? " open" : ""}`} onClick={() => setMobileOpen(false)} />
      <aside className={`mobile-toc-drawer${mobileOpen ? " open" : ""}`} id="mobile-toc-drawer" aria-hidden={!mobileOpen}>
        <div className="toc-heading">
          <strong>本文目录</strong>
          <button type="button" onClick={() => setMobileOpen(false)} aria-label="关闭目录">×</button>
        </div>
        <nav className="toc mobile-toc" aria-label="移动端本文目录">
          {renderItems(true)}
        </nav>
      </aside>
    </>
  );
}
