"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { searchPosts } from "@/content/post-utils.mjs";

export type SearchRecord = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  publishedAt: string;
};

export function SearchOverlay({
  open,
  posts,
  onClose,
}: {
  open: boolean;
  posts: SearchRecord[];
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => searchPosts(posts, query, 10), [posts, query]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div className="search-backdrop" onMouseDown={onClose}>
      <section
        className="search-panel"
        role="dialog"
        aria-modal="true"
        aria-label="搜索文章"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="search-panel-header">
          <span className="search-symbol" aria-hidden="true">⌕</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索标题、摘要或标签"
            aria-label="搜索关键词"
          />
          <button type="button" onClick={onClose} aria-label="关闭搜索">ESC</button>
        </header>
        <div className="search-results" aria-live="polite">
          {!query.trim() && <p className="search-hint">输入关键词开始搜索，最多展示 10 条结果。</p>}
          {query.trim() && results.length === 0 && <p className="search-hint">没有找到相关文章。</p>}
          {results.map((post) => (
            <Link href={`/blog/${post.slug}`} onClick={onClose} key={post.slug}>
              <div>
                <strong>{post.title}</strong>
                <span>{post.summary}</span>
              </div>
              <small>{post.tags.slice(0, 2).join(" · ")}</small>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
