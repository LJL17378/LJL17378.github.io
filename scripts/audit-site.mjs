import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { load } from "cheerio";

const root = path.join(process.cwd(), "out");
const htmlFiles = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(target);
    else if (entry.name.endsWith(".html")) htmlFiles.push(target);
  }
}

function routeToFile(url) {
  const pathname = decodeURIComponent(url.split("#")[0].split("?")[0]);
  if (!pathname || pathname === "/") return path.join(root, "index.html");
  if (path.extname(pathname)) return path.join(root, pathname);
  return path.join(root, pathname, "index.html");
}

await walk(root);
const failures = [];

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const $ = load(html);

  if ($("html").attr("lang") !== "zh-CN") failures.push(`${file}: missing zh-CN language`);
  if (html.includes("&amp;lt;script") || html.includes("&amp;lt;style")) {
    failures.push(`${file}: contains double-escaped source code`);
  }

  for (const element of $("a[href], img[src], script[src], link[href]").toArray()) {
    const attribute = element.name === "a" || element.name === "link" ? "href" : "src";
    const value = $(element).attr(attribute);
    if (!value || value.startsWith("#") || /^(https?:|mailto:|tel:|data:)/.test(value)) continue;

    try {
      await access(routeToFile(value));
    } catch {
      failures.push(`${path.relative(root, file)}: missing ${value}`);
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Audited ${htmlFiles.length} HTML files with no missing local routes or assets.`);
