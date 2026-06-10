import Image from "next/image";
import { readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { renderMarkdown } from "@/content/posts";

export const metadata = { title: "关于" };

export default async function AboutPage() {
  const raw = readFileSync(path.join(process.cwd(), "source", "about", "index.md"), "utf8");
  const { content } = matter(raw);
  const { html } = await renderMarkdown(content);
  return <section className="about-layout"><aside className="about-card"><Image src="/avatar.png" alt="LJL17378" width={112} height={112} /><h1>LJL17378</h1><p>Frontend / AI / Engineering</p><a href="https://github.com/LJL17378">github.com/LJL17378 ↗</a></aside><article className="article-body about-body" dangerouslySetInnerHTML={{ __html: html }} /></section>;
}
