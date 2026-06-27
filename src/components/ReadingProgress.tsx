"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const article = document.querySelector<HTMLElement>(".article-body");
    if (!article) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const articleTop = window.scrollY + article.getBoundingClientRect().top;
        const readableHeight = Math.max(article.offsetHeight - window.innerHeight * 0.35, 1);
        const nextProgress = (window.scrollY + 140 - articleTop) / readableHeight;
        setProgress(Math.min(1, Math.max(0, nextProgress)));
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="reading-progress" aria-hidden="true">
      <span className="reading-progress-bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
