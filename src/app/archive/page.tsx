import Link from "next/link";
import { getAllPosts } from "@/content/posts";

export const metadata = { title: "归档" };

export default function ArchivePage() {
  const groups = getAllPosts().reduce<Record<string, ReturnType<typeof getAllPosts>>>((result, post) => {
    const year = post.publishedAt.slice(0, 4);
    (result[year] ||= []).push(post);
    return result;
  }, {});
  return <section className="page-section"><div className="page-title"><span className="eyebrow">Archive</span><h1>文章归档</h1></div>{Object.entries(groups).map(([year, posts]) => <div className="archive-year" key={year}><h2>{year}</h2><div>{posts.map((post) => <Link href={`/blog/${post.slug}`} key={post.slug}><time>{post.publishedAt.slice(5)}</time><span>{post.title}</span></Link>)}</div></div>)}</section>;
}
