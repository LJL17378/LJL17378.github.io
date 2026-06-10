import { PostCard } from "@/components";
import { getAllPosts } from "@/content/posts";

export const metadata = { title: "文章" };

export default function BlogPage() {
  return (
    <section className="page-section">
      <div className="page-title"><span className="eyebrow">Writing</span><h1>全部文章</h1></div>
      <div className="post-grid">{getAllPosts().map((post) => <PostCard post={post} key={post.slug} />)}</div>
    </section>
  );
}
