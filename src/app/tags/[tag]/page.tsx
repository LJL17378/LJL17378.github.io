import { PostCard } from "@/components";
import { getAllPosts, getTags } from "@/content/posts";

export function generateStaticParams() {
  return getTags().map(([tag]) => ({ tag }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const posts = getAllPosts().filter((post) => post.tags.includes(tag));
  return <section className="page-section"><div className="page-title"><span className="eyebrow">Topic</span><h1>{tag}</h1><p>{posts.length} 篇文章</p></div><div className="post-grid">{posts.map((post) => <PostCard post={post} key={post.slug} />)}</div></section>;
}
