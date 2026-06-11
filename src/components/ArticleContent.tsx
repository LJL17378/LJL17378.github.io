"use client";

import { useRef, type MouseEvent } from "react";

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Clipboard permission can be denied even in a secure context.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("Copy command was rejected");
}

export function ArticleContent({ html }: { html: string }) {
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = async (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>("[data-copy-code]");
    if (!button) return;

    const code = button.closest(".code-block")?.querySelector("code");
    if (!code) return;

    try {
      await copyText(code.textContent ?? "");
      button.textContent = "已复制";
      button.classList.add("copied");
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => {
        button.textContent = "复制";
        button.classList.remove("copied");
      }, 1800);
    } catch {
      button.textContent = "复制失败";
    }
  };

  return (
    <div
      className="article-body"
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
