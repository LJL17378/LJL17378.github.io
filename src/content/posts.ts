import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import GithubSlugger from "github-slugger";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";

export type Post = {
  slug: string;
  title: string;
  publishedAt: string;
  updatedAt: string;
  summary: string;
  tags: string[];
  body: string;
  readingMinutes: number;
};

export type TocItem = {
  depth: number;
  text: string;
  id: string;
};

const postsDirectory = path.join(process.cwd(), "content", "posts");

function readPost(file: string): Post {
  const raw = fs.readFileSync(path.join(postsDirectory, file), "utf8");
  const { data, content } = matter(raw);
  return {
    slug: String(data.slug || path.basename(file, path.extname(file))),
    title: String(data.title || "未命名文章"),
    publishedAt: String(data.publishedAt || "2024-01-01"),
    updatedAt: String(data.updatedAt || data.publishedAt || "2024-01-01"),
    summary: String(data.summary || ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : ["随笔"],
    body: content,
    readingMinutes: Math.max(1, Math.ceil(readingTime(content).minutes)),
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map(readPost)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPost(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getTags() {
  const counts = new Map<string, number>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) counts.set(tag, (counts.get(tag) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function nodeText(node: any): string {
  if (typeof node.value === "string") return node.value;
  return Array.isArray(node.children) ? node.children.map(nodeText).join("") : "";
}

const languageLabels: Record<string, string> = {
  bash: "Bash",
  css: "CSS",
  dart: "Dart",
  gitignore: "Git",
  html: "HTML",
  javascript: "JavaScript",
  js: "JavaScript",
  json: "JSON",
  markdown: "Markdown",
  mermaid: "Mermaid",
  python: "Python",
  text: "Text",
  ts: "TypeScript",
  tsx: "TSX",
  typescript: "TypeScript",
  yaml: "YAML",
};

function enhanceCodeBlocks() {
  return (tree: any) => {
    visit(tree, "element", (node: any, index: number | undefined, parent: any) => {
      if (
        node.tagName !== "pre" ||
        node.properties?.dataEnhanced ||
        typeof index !== "number" ||
        !parent
      ) {
        return;
      }

      const code = node.children?.find((child: any) => child.tagName === "code");
      if (!code) return;

      const classes = Array.isArray(code.properties?.className)
        ? code.properties.className.map(String)
        : [];
      const languageClass = classes.find((name: string) =>
        name.startsWith("language-"),
      );
      const language = languageClass?.slice("language-".length) || "text";
      const label = languageLabels[language.toLowerCase()] || language.toUpperCase();
      node.properties = { ...node.properties, dataEnhanced: true };

      parent.children[index] = {
        type: "element",
        tagName: "div",
        properties: { className: ["code-block"], dataLanguage: language },
        children: [
          {
            type: "element",
            tagName: "div",
            properties: { className: ["code-block-toolbar"] },
            children: [
              {
                type: "element",
                tagName: "span",
                properties: { className: ["code-block-language"] },
                children: [{ type: "text", value: label }],
              },
              {
                type: "element",
                tagName: "button",
                properties: {
                  type: "button",
                  className: ["code-copy-button"],
                  dataCopyCode: "",
                  ariaLabel: `复制 ${label} 代码`,
                },
                children: [{ type: "text", value: "复制" }],
              },
            ],
          },
          node,
        ],
      };
    });
  };
}

export async function renderMarkdown(markdown: string) {
  const toc: TocItem[] = [];
  const slugger = new GithubSlugger();
  const collectHeadings = () => (tree: any) => {
    visit(tree, "heading", (node: any) => {
      if (node.depth < 2 || node.depth > 4) return;
      const text = nodeText(node);
      toc.push({ depth: node.depth, text, id: slugger.slug(text) });
    });
  };

  const schema: any = {
    ...defaultSchema,
    tagNames: [...(defaultSchema.tagNames || []), "details", "summary", "kbd"],
    attributes: {
      ...defaultSchema.attributes,
      "*": [...(defaultSchema.attributes?.["*"] || []), "className", "id"],
      a: [...(defaultSchema.attributes?.a || []), "target", "rel"],
      img: [...(defaultSchema.attributes?.img || []), "loading", "width", "height"],
      code: [...(defaultSchema.attributes?.code || []), ["className", /^language-./]],
    },
  };

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(collectHeadings)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize, schema)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeHighlight, { detect: false })
    .use(enhanceCodeBlocks)
    .use(rehypeStringify)
    .process(markdown);

  return { html: String(file), toc };
}
