import Link from "next/link";
import { getTags } from "@/content/posts";

export const metadata = { title: "标签" };

export default function TagsPage() {
  return <section className="page-section"><div className="page-title"><span className="eyebrow">Topics</span><h1>文章标签</h1></div><div className="tag-cloud large">{getTags().map(([tag, count]) => <Link href={`/tags/${tag}`} key={tag}>{tag}<small>{count}</small></Link>)}</div></section>;
}
