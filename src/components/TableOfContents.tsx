"use client";

import { useEffect, useRef, useState } from "react";
import type { TocItem } from "@/content/posts";

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
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
    const activeLink =
      navRef.current?.querySelector<HTMLElement>('[aria-current="location"]');
    activeLink?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [activeId]);

  return (
    <aside className="toc-shell">
      <div className="toc-heading">
        <strong>本文目录</strong>
        <span>{items.length}</span>
      </div>
      <nav className="toc" ref={navRef} aria-label="本文目录">
        {items.map((item) => (
          <a
            className={`depth-${item.depth}${activeId === item.id ? " active" : ""}`}
            href={`#${item.id}`}
            aria-current={activeId === item.id ? "location" : undefined}
            key={`${item.id}-${item.depth}`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
