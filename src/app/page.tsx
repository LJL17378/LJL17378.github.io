import Image from "next/image";
import Link from "next/link";
import { PostCard } from "@/components";
import { getAllPosts, getTags } from "@/content/posts";

export default function Home() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;
  const tags = getTags().slice(0, 8);

  return (
    <>
      <section className="hero">
        <div>
          <div className="eyebrow">Frontend · AI · Engineering</div>
          <h1>把踩过的坑，<br />写成路标。</h1>
          <p>前端工程、AI Agent、跨端开发与真实项目记录。这里不追求正确答案的幻觉，只记录真正解决问题的过程。</p>
        </div>
        <aside className="author-card">
          <Image src="/avatar.png" alt="LJL17378" width={68} height={68} priority />
          <strong>LJL17378</strong>
          <p>持续学习，也持续把混乱整理成可以复用的经验。</p>
          <Link href="https://github.com/LJL17378">GitHub ↗</Link>
        </aside>
      </section>

      <section>
        <div className="section-heading">
          <h2>最近文章</h2>
          <span>{posts.length} 篇文章 · 持续更新</span>
        </div>
        {featured && <PostCard post={featured} featured />}
        <div className="post-grid">
          {rest.slice(0, 8).map((post) => <PostCard post={post} key={post.slug} />)}
        </div>
        <div className="center-link"><Link href="/archive">查看全部文章 →</Link></div>
      </section>

      <section className="home-tags">
        <div className="section-heading"><h2>主题索引</h2><Link href="/tags">全部标签</Link></div>
        <div className="tag-cloud">
          {tags.map(([tag, count]) => <Link href={`/tags/${encodeURIComponent(tag)}`} key={tag}>{tag}<small>{count}</small></Link>)}
        </div>
      </section>
    </>
  );
}
