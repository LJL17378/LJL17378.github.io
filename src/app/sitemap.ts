import type { MetadataRoute } from "next";
import { getAllPosts, getTags } from "@/content/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ljl17378.github.io";
  return [
    "", "/archive", "/tags", "/about",
    ...getAllPosts().map((post) => `/blog/${post.slug}`),
    ...getTags().map(([tag]) => `/tags/${tag}`),
  ].map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
}
