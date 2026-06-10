import Link from "next/link";
import type { Post } from "@/content/posts";

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <article className={featured ? "post-card featured" : "post-card"}>
      <Link href={`/blog/${post.slug}`} className="post-card-link">
        <div className="post-card-meta">
          <time>{post.publishedAt.replaceAll("-", ".")}</time>
          <span>{post.readingMinutes} 分钟阅读</span>
        </div>
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
        <div className="tag-row">
          {post.tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </Link>
    </article>
  );
}
