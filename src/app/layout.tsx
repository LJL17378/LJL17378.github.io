import type { Metadata } from "next";
import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "highlight.js/styles/github-dark.css";
import "@/resources/custom.css";
import { Footer, Header, Providers } from "@/components";
import { getAllPosts } from "@/content/posts";

export const metadata: Metadata = {
  metadataBase: new URL("https://ljl17378.github.io"),
  title: {
    default: "M∃RLIN 的博客",
    template: "%s · M∃RLIN",
  },
  description: "前端工程、AI Agent、跨端开发与真实项目记录。",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "M∃RLIN 的博客",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const searchPosts = getAllPosts().map(({ slug, title, summary, tags, publishedAt }) => ({ slug, title, summary, tags, publishedAt }));
  return (
    <html lang="zh-CN" suppressHydrationWarning data-theme="dark" data-brand="cyan" data-accent="blue" data-neutral="gray" data-solid="contrast" data-solid-style="flat" data-border="playful" data-surface="translucent" data-transition="all" data-scaling="100">
      <body>
        <Providers>
          <div className="site-shell">
            <Header posts={searchPosts} />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
