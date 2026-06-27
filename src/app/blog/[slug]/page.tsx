import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleContent, PostCard, ReadingProgress, TableOfContents } from "@/components";
import { getAdjacentPosts, getAllPosts, getPost, getRelatedPosts, renderMarkdown } from "@/content/posts";

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
  const posts = getAllPosts();
  const relatedPosts = getRelatedPosts(posts, post, 3);
  const { previous, next } = getAdjacentPosts(posts, post.slug);

  return (
    <article className="article-layout">
      <ReadingProgress />
      <header className="article-header">
        <Link href="/" className="back-link">← 返回文章</Link>
        <div className="article-meta"><time>{post.publishedAt}</time><span>{post.readingMinutes} 分钟阅读</span></div>
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
        <div className="tag-row">{post.tags.map((tag) => <Link className="tag" href={`/tags/${tag}`} key={tag}>{tag}</Link>)}</div>
      </header>
      <div className="article-columns">
        <ArticleContent html={html} />
        {toc.length > 0 && <TableOfContents items={toc} />}
      </div>

      {(previous || next) && (
        <nav className="post-adjacent" aria-label="文章导航">
          {previous ? (
            <Link href={`/blog/${previous.slug}`} className="adjacent-previous">
              <small>较早一篇</small><strong>{previous.title}</strong>
            </Link>
          ) : <span />}
          {next && (
            <Link href={`/blog/${next.slug}`} className="adjacent-next">
              <small>较新一篇</small><strong>{next.title}</strong>
            </Link>
          )}
        </nav>
      )}

      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <div className="section-heading"><div><span className="section-kicker">KEEP READING</span><h2>相关文章</h2></div></div>
          <div className="related-grid">{relatedPosts.map((related) => <PostCard post={related} key={related.slug} />)}</div>
        </section>
      )}
    </article>
  );
}
