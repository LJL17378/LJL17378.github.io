import Image from "next/image";
import Link from "next/link";
import { PostCard } from "@/components";
import { getAllPosts, getTags } from "@/content/posts";

export default function Home() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;
  const tags = getTags().slice(0, 10);

  return (
    <>
      <section className="heo-hero">
        <div className="heo-hero-content">
          <div className="eyebrow">Frontend · AI · Engineering</div>
          <h1>良机，<br />就在你的眼前。</h1>
          <p>记录前端工程、AI Agent、跨端开发，以及把问题真正解决的过程。</p>
          <div className="hero-actions">
            <Link className="hero-primary" href="/blog">开始阅读</Link>
            <Link className="hero-secondary" href="/about">认识我</Link>
          </div>
        </div>
        <div className="hero-corner" aria-hidden="true"><span>{posts.length}</span><small>篇技术笔记</small></div>
      </section>

      <nav className="category-bar" aria-label="热门标签">
        <strong>探索</strong>
        <div>
          {tags.slice(0, 7).map(([tag]) => <Link href={`/tags/${tag}`} key={tag}>{tag}</Link>)}
        </div>
        <Link className="category-more" href="/tags" aria-label="查看全部标签">全部标签</Link>
      </nav>

      <div className="home-layout">
        <section className="home-feed">
          <div className="section-heading">
            <div><span className="section-kicker">RECENT POSTS</span><h2>最近文章</h2></div>
            <span>{posts.length} 篇文章</span>
          </div>
          {featured && <PostCard post={featured} featured />}
          <div className="post-grid">
            {rest.slice(0, 8).map((post) => <PostCard post={post} key={post.slug} />)}
          </div>
          <div className="center-link"><Link href="/archive">查看全部文章 <span>→</span></Link></div>
        </section>

        <aside className="home-sidebar">
          <section className="sidebar-card profile-card">
            <div className="profile-banner" />
            <Image src="/avatar.png" alt="LJL17378" width={76} height={76} priority />
            <h2>LJL17378</h2>
            <p>持续学习，也持续把混乱整理成可以复用的经验。</p>
            <div className="profile-stats">
              <span><strong>{posts.length}</strong>文章</span>
              <span><strong>{getTags().length}</strong>标签</span>
            </div>
            <Link className="profile-link" href="https://github.com/LJL17378">访问 GitHub <span>↗</span></Link>
          </section>

          <section className="sidebar-card recent-card">
            <div className="sidebar-title"><span>最近发布</span><Link href="/archive">归档</Link></div>
            {posts.slice(0, 5).map((post, index) => (
              <Link className="recent-item" href={`/blog/${post.slug}`} key={post.slug}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{post.title}</strong><time>{post.publishedAt}</time></div>
              </Link>
            ))}
          </section>

          <section className="sidebar-card tag-card">
            <div className="sidebar-title"><span>标签云</span><Link href="/tags">全部</Link></div>
            <div className="tag-cloud compact">
              {tags.map(([tag, count]) => <Link href={`/tags/${tag}`} key={tag}>{tag}<small>{count}</small></Link>)}
            </div>
          </section>
        </aside>
      </div>
    </>
  );
}
