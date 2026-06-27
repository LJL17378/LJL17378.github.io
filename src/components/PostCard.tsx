import Link from "next/link";
import type { Post } from "@/content/posts";

function paletteFor(post: Post) {
  const seed = `${post.tags[0] || "post"}-${post.slug}`;
  return [...seed].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 6;
}

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <article className={featured ? "post-card featured" : "post-card"}>
      <Link href={`/blog/${post.slug}`} className="post-card-link">
        <div
          className={`post-card-cover cover-palette-${paletteFor(post)}`}
          style={post.cover ? { backgroundImage: `url(${post.cover})` } : undefined}
          aria-hidden="true"
        >
          <span>{post.tags[0] || "文章"}</span>
        </div>
        <div className="post-card-content">
          <div className="post-card-meta">
            <time>{post.publishedAt.replaceAll("-", ".")}</time>
            <span>{post.readingMinutes} 分钟阅读</span>
          </div>
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <div className="tag-row">
            {post.tags.slice(0, 3).map((tag) => <span className="tag" key={tag}>{tag}</span>)}
          </div>
        </div>
      </Link>
    </article>
  );
}
