import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TableOfContents } from "@/components";
import { getAllPosts, getPost, renderMarkdown } from "@/content/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.summary } : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { html, toc } = await renderMarkdown(post.body);

  return (
    <article className="article-layout">
      <header className="article-header">
        <Link href="/" className="back-link">← 返回文章</Link>
        <div className="article-meta"><time>{post.publishedAt}</time><span>{post.readingMinutes} 分钟阅读</span></div>
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
        <div className="tag-row">{post.tags.map((tag) => <Link className="tag" href={`/tags/${tag}`} key={tag}>{tag}</Link>)}</div>
      </header>
      <div className="article-columns">
        <div className="article-body" dangerouslySetInnerHTML={{ __html: html }} />
        {toc.length > 0 && <TableOfContents items={toc} />}
      </div>
    </article>
  );
}
